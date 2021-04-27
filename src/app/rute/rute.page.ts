import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { LoadingController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { loadModules } from "esri-loader";
import { ApiPublibikeBienestarService } from "../services/api-publibike-bienestar.service";
import esri = __esri;

@Component({
  selector: "app-rute",
  templateUrl: "./rute.page.html",
  styleUrls: ["./rute.page.scss"],
})
export class RutePage implements OnInit {
  @ViewChild("map") mapEl: ElementRef;
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

  public _centesimas: string = "00";
  public _minutos: string = "00";
  public _segundos: string = "00";
  public _horas: string = "00";

  isRun = false;

  //Array recorrido con las coordenadas
  recorrido: any[] = [];

  user: {
    nombre: String;
    apellido: String;
    ganancia_total: number;
    km_total: number;
    cal_total: number;
    co2_total: number;
  } = {
    nombre: "",
    apellido: "",
    ganancia_total: 0,
    km_total: 0,
    cal_total: 0,
    co2_total: 0,
  };
  ruteData: object = {};
  fecha: any;
  fstDirection: any;
  fnlDirection: any;
  time: any;
  km: any = 0.0;
  ingresos: any = 0;
  cal: any = 0;
  co2: any = 0;

  constructor(
    private apiService: ApiPublibikeBienestarService,
    private storage: Storage,
    private loadingCtrl: LoadingController
  ) {}

  async initializedMap() {
    try {
      const [
        Map,
        MapView,
        Graphic,
        RouteTask,
        RouteParameters,
        FeatureSet,
        Directions,
        Locate,
        Track,
        Locator,
        Search,
        Expand,
        Legend,
        Point,
        Draw,
        geometryEngine,
        FeatureLayer,
        DistanceMeasurement2DViewModel,
      ]: any = await loadModules([
        "esri/Map",
        "esri/views/MapView",
        "esri/Graphic",
        "esri/tasks/RouteTask",
        "esri/tasks/support/RouteParameters",
        "esri/tasks/support/FeatureSet",
        "esri/widgets/Directions",
        "esri/widgets/Locate",
        "esri/widgets/Track",
        "esri/tasks/Locator",
        "esri/widgets/Search",
        "esri/widgets/Expand",
        "esri/widgets/Legend",
        "esri/geometry/Point",
        "esri/views/draw/Draw",
        "esri/geometry/geometryEngine",
        "esri/layers/FeatureLayer",
        "esri/widgets/DistanceMeasurement2D/DistanceMeasurement2DViewModel",
      ]);
      // await this._platform.ready();

      let map = new Map({
        basemap: this._basemap,
      });
      // Inflate and display the map
      this._view = new MapView({
        // create the map view at the DOM element in this component
        container: this.mapEl.nativeElement,
        center: this._center,
        zoom: this._zoom,
        map: map,
      });

      const template = {
        title: "Cicloparqueadero",
        content: [
          {
            //Formato tipo fila

            type: "fields", //FieldsContentElement
            //Sirve para proporcionar información en vistas y capas
            fieldInfos: [
              {
                fieldName: "COD_CICP",
                visible: false,
                label: "Codigo_Cicloparqueadero",
              },
              {
                fieldName: "NOMBRE_CICP",
                visible: true,
                label: "Nombre",
              },
              {
                fieldName: "HORARIO_CICP",
                visible: true,
                label: "Horario",
              },
              {
                fieldName: "DIRECCION",
                visible: true,
                label: "Dirección",
              },
              {
                fieldName: "LOCALIDAD",
                visible: true,
                label: "Localidad",
              },
              {
                fieldName: "CUPOS",
                visible: true,
                label: "Cupos",
              },
              {
                fieldName: "TIPOLOGIA_CICP",
                visible: true,
                label: "Servicio",
              },
              {
                fieldName: "SELLO",
                visible: false,
                label: "SELLO_TIPO",
              },
            ],
          },
        ],
      };
      const parkingLayer = new FeatureLayer({
        url:
          "https://services2.arcgis.com/NEwhEo9GGSHXcRXV/arcgis/rest/services/Cicloparqueaderos_Certificados_Bogota_D_C/FeatureServer/0",
        outFields: ["*"],
        popupTemplate: template,
      });
      map.add(parkingLayer);
      const customPoint = new FeatureLayer({
        url:
          "https://serviciosgis.catastrobogota.gov.co/arcgis/rest/services/movilidad/cicloparqueadero/MapServer",
      });
      map.add(customPoint);
      var legend = new Legend({
        view: this._view,
        layerInfos: [
          {
            layer: parkingLayer,
            title: "Categoria Cicloparqueaderos",
          },
        ],
      });
      // this._view.ui.add(legend, "bottom-right");

      let lgExpand = new Expand({
        view: this._view,
        content: legend,
        autoCollapse: false,
      });
      this._view.ui.add(lgExpand, "bottom-right");
      //Se configura y crea el widget de busqueda
      this._search = new Search({
        view: this._view,
      });

      this._view.ui.add(this._search, {
        position: "top-left",
        index: 0,
      });

      this._locator = new Locator({
        url:
          "https://utility.arcgis.com/usrsvcs/appservices/rdJwJijx0YBycNdS/rest/services/World/GeocodeServer/reverseGeocode",
      });
      this._locate = new Locate({
        view: this._view,
        useHeadingEnabled: false,
        goToOverride: function (view, options) {
          options.target.scale = 1500; // Override the default map scale
          return view.goTo(options.target);
        },
      });

      this._view.ui.add(this._locate, {
        position: "top-left",
        index: 2,
      });

      this._pointGC = new Point();
      this._draw = new Draw({
        view: this._view,
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
              width: "1.5px",
            },
          },
        }),
        useHeadingEnabled: true, // Don't change orientation of the map
        goToOverride: function (view, options) {
          options.target.scale = 1500; // Override the default map scale
          return view.goTo(options.target);
        },
      });

      // this._view.ui.add(this._track, "top-left");

      this._distance = new DistanceMeasurement2DViewModel({
        view: this._view,
        unit: "kilometers",
      });

      let routeTask = new RouteTask({
        // url: "https://utility.arcgis.com/usrsvcs/appservices/6MyWChEzkSbXMie3/rest/services/World/Route/NAServer/Route_World/solve"
        url:
          "https://sig.simur.gov.co/arcgis/rest/services/MVI_REDBICI/NARedBici/NAServer/Principiante",
      });

      let directions = new Directions({
        view: this._view,
        // routeServiceUrl: "https://utility.arcgis.com/usrsvcs/appservices/6MyWChEzkSbXMie3/rest/services/World/Route/NAServer/Route_World"
        routeServiceUrl:
          "https://sig.simur.gov.co/arcgis/rest/services/MVI_REDBICI/NARedBici/NAServer/Principiante",
      });

      let bgExpand = new Expand({
        view: this._view,
        content: directions,
        autoCollapse: false,
      });
      this._view.ui.add(bgExpand, "top-right");

      await this._view.when();

      return this._view;
    } catch (error) {
      console.log(error);
    }
  }
  async ngOnInit() {
    // this.presentLoading();
    // this.backgroundMode.enable();
    this.user = await this.storage.get("userData");
    this.initializedMap().then(async (mapView) => {
      console.log("mapView ready: ", this._view.ready);
      this._loaded = this._view.ready;

      // let position = await this._locate.locate();
      // console.log("position", position)
      // mapView.goTo({
      //   center: this._locate.locate(),
      //   zoom: 6,
      //   tilt: 40
      // })
      // this.loading.dismiss();
    });
  }
  async startRute() {
    this.clearWindows();
    this._track.start();
    await this._distance.start();
    console.log(this._distance);
    const fechaActual = new Date();
    this.fecha = fechaActual;
    console.log(this.fecha);
    //se toma la posicion y se geocodifica
    let address;
    let position = await this._locate.locate();
    this._pointGC.latitude = position.coords.latitude;
    this._pointGC.longitude = position.coords.longitude;
    let params = {
      location: this._pointGC,
    };
    this._track.on("track", async (position) => {
      this.recorrido.push(position);
      let ult = this.recorrido.length - 1;
      if (this.recorrido.length > 1) {
        this.km = this.calculateDistance(
          this.recorrido[0].position.coords.longitude,
          this.recorrido[ult].position.coords.longitude,
          this.recorrido[0].position.coords.latitude,
          this.recorrido[ult].position.coords.latitude
        );
        console.log(this.km);
        // this.ingresos = this.km * this.user.campana_actual.pago_km;
      }
    });
    let geocoder = this._locator;
    geocoder
      .locationToAddress(params)
      .then((response) => {
        address = response.address;
        console.log(address);
        address = address.split(",");
        this.fstDirection = address[0];
        // this.currentDirection = address[0];
        // this.km = position.coords.speed;

        // console.log(this.currentDirection)
      })
      .catch((err) => console.log(err));
    //Se inicializa el contador
    this.contador = setInterval(() => {
      this.centesimas += 1;
      if (this.centesimas < 10) this._centesimas = "0" + this.centesimas;
      else this._centesimas = "" + this.centesimas;
      if (this.centesimas == 10) {
        this.centesimas = 0;
        this.segundos += 1;
        if (this.segundos < 10) this._segundos = "0" + this.segundos;
        else this._segundos = this.segundos + "";
        if (this.segundos == 60) {
          this.segundos = 0;
          this.minutos += 1;
          if (this.minutos < 10) this._minutos = "0" + this.minutos;
          else this._minutos = this.minutos + "";
          this._segundos = "00";
          if (this.minutos == 60) {
            this.minutos = 0;
            this.minutos += 1;
            if (this.horas < 10) this._horas = "0" + this.horas;
            else this._horas = this.horas + "";
            this._minutos = "00";
          }
        }
      }
    }, 100);
  }
  async stopRute() {
    try {
      // this.presentLoading();
      if (!this.isRun) {
        this._track.stop();
        this.time = `${this._horas}:${this._minutos}:${this._segundos}.${this._centesimas}`;
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
        this._pointGC.latitude = position.coords.latitude;
        this._pointGC.longitude = position.coords.longitude;
        let params = {
          location: this._pointGC,
        };
        let geocoder = this._locator;
        geocoder
          .locationToAddress(params)
          .then((response) => {
            address = response.address;
            console.log(address);
            address = address.split(",");
            this.fnlDirection = address[0];
            // this.currentDirection = address[0];
            // console.log(this.currentDirection)
            let kms = parseFloat(this.km);
            let co2 = kms * 0.3;
            this.co2 = co2.toFixed(3);
            console.log("co2", typeof kms, this.co2);
            this.ruteData = {
              fecha: this.fecha,
              inicio: this.fstDirection,
              final: this.fnlDirection,
              tiempo: this.time,
              kms: this.km,
              cal: this.cal,
              co2: this.co2,
              ingresos: this.ingresos,
            };
            console.log(this.ruteData);
            this.apiService.sendRute(this.ruteData);
            // .then(()=>{this.loading.dismiss()});
          })
          .catch((err) => console.log(err));
      }
    } catch (error) {
      console.log(error);
    }
  }
  calculateDistance(lon1, lon2, lat1, lat2) {
    let p = 0.017453292519943295;
    let c = Math.cos;
    let a =
      0.5 -
      c((lat1 - lat2) * p) / 2 +
      (c(lat2 * p) * c(lat1 * p) * (1 - c((lon1 - lon2) * p))) / 2;
    let dis = 12742 * Math.asin(Math.sqrt(a));
    return dis.toFixed(2);
  }
  clearWindows() {
    this.minutos = 0;
    this.segundos = 0;
    this.centesimas = 0;
    this.horas = 0;

    this._centesimas = "00";
    this._segundos = "00";
    this._minutos = "00";
    this._horas = "00";
    this.km = 0;
  }
  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      cssClass: "my-custom-class",
      message: "Cargando...",
    });
    await this.loading.present();
  }
  getIconByStatus(status) {
    let icon = "";
    switch (status) {
      case "true":
        icon = "button-stop-29.png";
        break;
      case "false":
        icon = "button-start-29.png";
        break;
    }
    return icon;
  }
}
