import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ApiPublibikeBienestarService } from '../services/api-publibike-bienestar.service';
import { loadModules } from 'esri-loader';
import esri = __esri;
// import { type } from 'os';

@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.page.html',
  styleUrls: ['./map-modal.page.scss'],
})
export class MapModalPage implements OnInit {

  @ViewChild('map') mapEl: ElementRef;
  loading: any;
  //Variables ArcGIS
  private _zoom = 10;
  private _center: Array<number> = [-74.090923, 4.694939];
  private _basemap = "streets-vector";
  private _loaded = false;
  private _view: esri.MapView = null;
  private _locator: esri.Locator = null;
  private _locate: esri.Locate = null;
  private _search: esri.widgetsSearch = null;
  private _track: esri.Track = null;
  private _pointGC: esri.Point = null;
  private _draw: esri.Draw = null;
  private _distance: esri.DistanceMeasurement2DViewModel = null;

  //Variables del cronometro
  public horas: number = 0;
  public centesimas: number = 0;
  public minutos: number = 59;
  public segundos: number = 0;
  public contador: any;

  public _centesimas: string = '00';
  public _minutos: string = '00';
  public _segundos: string = '00';
  public _horas: string = '00';

  isRun = false;
  urlButton: String = "button-start-29.png"

  //Array recorrido con las coordenadas
  recorrido: any[] = [];
  positionAct: any;
  positionAnt: any;

  user: {
    nombre: String,
    apellido: String,
    ganancia_total: number,
    km_total: number,
    cal_total: number,
    co2_total: number,
    peso: number
  } = {
      nombre: "",
      apellido: "",
      ganancia_total: 0,
      km_total: 0,
      cal_total: 0,
      co2_total: 0,
      peso: 0
    };
  ruteData: object = {};
  fecha: any;
  fstDirection: any;
  fnlDirection: any;
  flagCovid: number = 0;
  time: any;
  km: number = 0.0;
  ingresos: any = 0;
  cal: number = 0;
  co2: number = 0;
  vel: any = 0;
  riesgo_covid: any = 0;

  constructor(
    private apiService: ApiPublibikeBienestarService,
    private storage: Storage,
    private loadingCtrl: LoadingController,
    private modalController: ModalController,
    private alertController: AlertController
  ) { }

  async initializedMap() {
    try {
      const [
        Map, MapView, Graphic, RouteTask, RouteParameters, FeatureSet, Directions, Locate, Track, Locator, LocatorSearchSource, Expand, Point, Draw, geometryEngine, FeatureLayer, DistanceMeasurement2DViewModel
      ]: any
        = await loadModules([
          'esri/Map',
          'esri/views/MapView',
          "esri/Graphic",
          "esri/tasks/RouteTask",
          "esri/tasks/support/RouteParameters",
          "esri/tasks/support/FeatureSet",
          "esri/widgets/Directions",
          "esri/widgets/Locate",
          "esri/widgets/Track",
          "esri/tasks/Locator",
          "esri/widgets/Search/LocatorSearchSource",
          "esri/widgets/Expand",
          "esri/geometry/Point",
          "esri/views/draw/Draw",
          "esri/geometry/geometryEngine",
          "esri/layers/FeatureLayer",
          "esri/widgets/DistanceMeasurement2D/DistanceMeasurement2DViewModel"
        ]);
      // await this._platform.ready();

      let map = new Map({
        basemap: this._basemap
      });
      // Inflate and display the map
      this._view = new MapView({
        // create the map view at the DOM element in this component
        container: this.mapEl.nativeElement,
        center: this._center,
        zoom: this._zoom,
        map: map
      });

      const parkingLayer = new FeatureLayer({
        url: "https://services2.arcgis.com/NEwhEo9GGSHXcRXV/arcgis/rest/services/Cicloparqueaderos_Certificados_Bogota_D_C/FeatureServer/0"
      })
      map.add(parkingLayer);
      //Se configura y crea el widget de busqueda
      this._search = new LocatorSearchSource({
        view: this._view,
      });

      this._locator = new Locator({
        url: "https://utility.arcgis.com/usrsvcs/appservices/rdJwJijx0YBycNdS/rest/services/World/GeocodeServer/reverseGeocode"
      })
      this._locate = new Locate({
        view: this._view,
        useHeadingEnabled: false,
        goToOverride: function (view, options) {
          options.target.scale = 1500;  // Override the default map scale
          return view.goTo(options.target);
        }
      });

      this._view.ui.add(this._locate, "top-left");

      this._pointGC = new Point();
      this._draw = new Draw({
        view: this._view
      });
      this._track = new Track({
        view: this._view,
        graphic: new Graphic({
          symbol: {
            type: "simple-marker",
            size: "12px",
            color: "green",
            outline: {
              color: "#efefef",
              width: "1.5px"
            }
          }
        }),
        useHeadingEnabled: true,  // Don't change orientation of the map
        goToOverride: function (view, options) {
          options.target.scale = 1500;  // Override the default map scale
          return view.goTo(options.target);
        }
      });

      this._view.ui.add(this._track, "top-left");

      this._distance = new DistanceMeasurement2DViewModel({
        view: this._view,
        unit: "kilometers"
      });


      let routeTask = new RouteTask({
        // url: "https://utility.arcgis.com/usrsvcs/appservices/6MyWChEzkSbXMie3/rest/services/World/Route/NAServer/Route_World/solve"
        url: "https://sig.simur.gov.co/arcgis/rest/services/MVI_REDBICI/NARedBici/NAServer/Principiante",

      });

      let directions = new Directions({
        view: this._view,
        routeServiceUrl: "https://sig.simur.gov.co/arcgis/rest/services/MVI_REDBICI/NARedBici/NAServer/Avanzado",
      });

      let bgExpand = new Expand({
        view: this._view,
        content: directions,
        autoCollapse: false
      });
      this._view.ui.add(bgExpand, "top-right");

      await this._view.when();

      return this._view;

      // function getRoute() {
      //   // Setup the route parameters
      //   var routeParams = new RouteParameters({
      //     stops: new FeatureSet({
      //       features: this._view.graphics.toArray()
      //     }),
      //     // returnDirections: true
      //   });
      //   // Get the route
      //   routeTask.solve(routeParams).then(function (data) {
      //     data.routeResults.forEach(function (result) {
      //       result.route.symbol = {
      //         type: "simple-line",
      //         color: [5, 150, 255],
      //         width: 3
      //       };
      //       this._view.graphics.add(result.route);
      //     });
      //   });
      // }
    } catch (error) {
      console.log(error)
    }
  }
  async ngOnInit() {
    // this.presentLoading();
    this.user = await this.storage.get("userData");
    console.log(this.user)
    //se usa localizacion en segundo plano      
    this.initializedMap()
      .then(async mapView => {
        console.log("mapView ready: ", this._view.ready);
        this._loaded = this._view.ready;

        let position = await this._locate.locate();
        console.log("position", position)

        mapView.goTo({
          center: this._locate.locate(),
          zoom: 6,
          tilt: 40
        })
        // this.loading.dismiss();
      });
  }
  async startRute() {
    this.km = 0;
    this.cal = 0;
    this.co2 = 0;
    this.vel = 0;
    this.isRun = true;
    this.urlButton = "button-stop-29.png";
    this.clearWindows();
    this._track.start();
    // await this._distance.start();
    // console.log(this._distance)
    const fechaActual = new Date;
    this.fecha = fechaActual;
    console.log(this.fecha);
    //se toma la posicion y se geocodifica
    let address;
    let position = await this._locate.locate();
    console.log(position)
    this._pointGC.latitude = position.coords.latitude;
    this._pointGC.longitude = position.coords.longitude;
    let params = {
      location: this._pointGC
    }
    this._track.on("track", async (position) => {
      // this.backgroundGeolocation.start();
      this.recorrido.push(position);
      this.positionAct = position.position;
      console.log(`posicion ${this.recorrido.length}`, this.recorrido);
      console.log("vel", position.position.coords.speed)
      this.vel = position.position.coords.speed;
      this.riesgoCovid(this.vel)
      let ult = this.recorrido.length - 1;
      if (this.recorrido.length == 1) {
        this.km = this.calculateDistance(this.recorrido[0].position.coords.longitude, this.recorrido[ult].position.coords.longitude, this.recorrido[0].position.coords.latitude, this.recorrido[ult].position.coords.latitude)
      } else if (this.recorrido.length > 1) {
        let kmTemporal = this.km
        this.km = this.calculateDistance(this.recorrido[ult - 1].position.coords.longitude, this.recorrido[ult].position.coords.longitude, this.recorrido[ult - 1].position.coords.latitude, this.recorrido[ult].position.coords.latitude)
        this.km = kmTemporal + this.km;
        this.co2 = this.km * 0.3;
        let totalMin = (parseInt(this._horas) * 60) + (parseInt(this._minutos)) + (parseInt(this._segundos) * 0.0166667);
        console.log(totalMin)
        this.cal = 0.071 * (this.user.peso * 2.2) * totalMin;
        console.log(this.km)

        // this.ingresos = this.km * this.user.campana_actual.pago_km;
      }
    })
    let geocoder = this._locator;
    geocoder.locationToAddress(params)
      .then((response) => {
        address = response.address;
        console.log(address)
        address = address.split(",");
        this.fstDirection = address[0];
        // this.currentDirection = address[0];
        // this.km = position.coords.speed;

        // console.log(this.currentDirection)

      }).catch(err => console.log(err))
    //Se inicializa el contador  
    this.startCounter();
  }
  async stopRute() {
    try {
      // this.presentLoading();
      if (this.isRun) {
        console.log("voy a parar")
        this._track.stop();
        this.time = `${this._horas}:${this._minutos}:${this._segundos}.${this._centesimas}`;
        console.log(this.time)
        clearInterval(this.contador);
        // this.minutos = 0;
        // this.segundos = 0;
        // this.centesimas = 0;
        // this.horas = 0;

        // this._centesimas = '00';
        // this._segundos = '00';
        // this._minutos = '00';
        // this._horas = '00';
        this.isRun = false;
        // this.contador = null;

        //se toma la posicion y se geocodifica
        let address;
        let position = await this._locate.locate();
        console.log(position)
        this._pointGC.latitude = position.coords.latitude;
        this._pointGC.longitude = position.coords.longitude;
        // this.vel = position.coords.speed;
        // this.vel= this.vel.toFixed(2);
        let params = {
          location: this._pointGC
        }
        let geocoder = this._locator;
        geocoder.locationToAddress(params)
          .then((response) => {
            address = response.address;
            console.log(address);
            address = address.split(",")
            this.fnlDirection = address[0];
            // this.currentDirection = address[0];
            // console.log(this.currentDirection)
            let kms = this.km;
            let cal = this.cal;
            let co2 = this.co2;
            // co2 = kms * 0.3;
            let totalMin = (parseInt(this._horas) * 60) + (parseInt(this._minutos)) + (parseInt(this._segundos) * 0.0166667);
            // console.log(totalMin)
            // cal = 0.071*(this.user.peso*2.2) *totalMin;
            console.log(this.cal, typeof (this.cal))
            console.log(this.user.peso, typeof (this.user.peso))
            this.ruteData = {
              fecha: this.fecha,
              inicio: this.fstDirection,
              final: this.fnlDirection,
              tiempo: this.time,
              minutos: totalMin,
              kms: kms,
              cal: this.cal,
              co2: this.co2
            }
            console.log("ruteData", this.ruteData)
            this.apiService.sendRute(this.ruteData)
            // .then(()=>{this.loading.dismiss()});
            this.flagCovid = 0;
            this.recorrido = [];
          }).catch(err => console.log(err))
      }
    } catch (error) {
      console.log(error)
    }

  }
  calculateDistance(lon1, lon2, lat1, lat2) {
    let p = 0.017453292519943295;
    let c = Math.cos;
    let a = 0.5 - c((lat1 - lat2) * p) / 2 + c(lat2 * p) * c((lat1) * p) * (1 - c(((lon1 - lon2) * p))) / 2;
    let dis = (12742 * Math.asin(Math.sqrt(a)));
    console.log(typeof (dis))
    return dis;
  }
  startCounter() {
    this.contador = setInterval(() => {
      this.centesimas += 1;
      if (this.centesimas < 10) this._centesimas = '0' + this.centesimas;
      else this._centesimas = '' + this.centesimas;
      if (this.centesimas == 10) {
        this.centesimas = 0;
        this.segundos += 1;
        if (this.segundos < 10) this._segundos = '0' + this.segundos;
        else this._segundos = this.segundos + '';
        if (this.segundos == 60) {
          this.segundos = 0;
          this.minutos += 1;
          if (this.minutos < 10) this._minutos = '0' + this.minutos;
          else this._minutos = this.minutos + '';
          this._segundos = '00';
          if (this.minutos == 60) {
            this.minutos = 0;
            this.minutos += 1;
            if (this.horas < 10) this._horas = '0' + this.horas;
            else this._horas = this.horas + '';
            this._minutos = '00';
          }
        }
      }
    }, 100)
  }
  clearWindows() {
    this.minutos = 0;
    this.segundos = 0;
    this.centesimas = 0;
    this.horas = 0;

    this._centesimas = '00';
    this._segundos = '00';
    this._minutos = '00';
    this._horas = '00';
    this.km = 0;
  }
  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Cargando...'
    });
    await this.loading.present();
  }
  logEvent(event) {
    console.log(event.target)
  }
  async closeModal() {
    await this.modalController.dismiss();
  }
  async riesgoCovid(vel) {
    let alert;
    if (vel < 2) {
      this.flagCovid += 1;
      console.log(this.flagCovid)
      if (this.flagCovid >= 10) {
        this._track.stop();
        clearInterval(this.contador);
        alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Atención',
          subHeader: '¿Estas movilizandote a pie?',
          message: 'Te recomendamos guardar el distanciamiento social y las medidas de protección necesarias',
          buttons: [{
            text: 'Ok',
            handler: () => {
              this._track.start()
              this.startCounter();
              this.flagCovid=0;
            }
          }]
        });
        await alert.present();
        this.riesgo_covid = 40;
        await this.apiService.sendCovidRisk(this.riesgo_covid);
      }

    } else if (vel > 50) {
      this._track.stop();
      alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Atención',
        subHeader: '¿Estas movilizandote en?',
        message: 'Te recomendamos aguardar el distanciamiento social y las medidas de protección necesarias',
        inputs: [
          {
            name: 'radio1',
            type: 'radio',
            label: 'Vehiculo Particular',
            value: 'Vehiculo_Particular',
            checked: true
          },
          {
            name: 'radio2',
            type: 'radio',
            label: 'Taxi,Uber,Beat,...',
            value: 'Vehiculo_independiente'
          },
          {
            name: 'radio3',
            type: 'radio',
            label: 'Transporte Público',
            value: 'Transporte_Publico'
          }
        ],
        buttons: [{
          text: 'Ok',
          handler: () => {
            this._track.start();
          }
        }]
      });
      await alert.present();
      this.riesgo_covid = 60;
      await this.apiService.sendCovidRisk(this.riesgo_covid);

    }

  }

}
