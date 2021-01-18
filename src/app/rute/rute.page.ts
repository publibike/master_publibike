import { formatNumber } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, Input, SimpleChanges, ViewChild } from '@angular/core';
import { async } from '@angular/core/testing';
import { FormBuilder, FormControl, FormGroup, NumberValueAccessor, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { ApiPublibikeMarcaService } from '../services/api-publibike-marca.service';
import { loadModules } from 'esri-loader';
import esri = __esri;
import { IonInput, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { add } from 'esri/views/3d/externalRenderers';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
const { Geolocation } = Plugins;
@Component({
  selector: 'app-rute',
  templateUrl: './rute.page.html',
  styleUrls: ['./rute.page.scss'],
})
export class RutePage {

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
  // private _geometryEngine: esri.geometryEngine;


  get mapLoaded(): boolean {
    return this._loaded;
  }

  @Input()
  set zoom(zoom: number) {
    this._zoom = zoom;
  }

  get zoom(): number {
    return this._zoom;
  }

  @Input()
  set center(center: Array<number>) {
    this._center = center;
  }

  get center(): Array<number> {
    return this._center;
  }

  @Input()
  set basemap(basemap: string) {
    this._basemap = basemap;
  }

  get basemap(): string {
    return this._basemap;
  }

  currentDirection: String = "";
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
  public estado: String = "INICIAR RECORRIDO";

  //Array recorrido con las coordenadas
  recorrido: any[] = [];

  //Variables de distancia
  photo: SafeResourceUrl;
  //usuario
  user: {
    nombre: String,
    apellido: String,
    ganancia_total: number,
    km_total: number,
    cal_total: number,
    co2_total: number,
    peso: number,
    campana_actual: {
      pago_km: number
    }
  } = {
      nombre: "",
      apellido: "",
      ganancia_total: 0,
      km_total: 0,
      cal_total: 0,
      co2_total: 0,
      peso: 0,
      campana_actual: {
        pago_km: 2000
      }
    };

  //objeto a enviar
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
    private apiService: ApiPublibikeMarcaService,
    private storage: Storage,
    private loadingCtrl: LoadingController,
    private backgroundMode: BackgroundMode

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
        zoom: this._center,
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
        url: "https://utility.arcgis.com/usrsvcs/appservices/0M4tNdkWcjbSCK2Z/rest/services/World/GeocodeServer/reverseGeocode"
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
        // routeServiceUrl: "https://utility.arcgis.com/usrsvcs/appservices/6MyWChEzkSbXMie3/rest/services/World/Route/NAServer/Route_World"
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

      function getRoute() {
        // Setup the route parameters
        var routeParams = new RouteParameters({
          stops: new FeatureSet({
            features: this._view.graphics.toArray()
          }),
          // returnDirections: true
        });
        // Get the route
        routeTask.solve(routeParams).then(function (data) {
          data.routeResults.forEach(function (result) {
            result.route.symbol = {
              type: "simple-line",
              color: [5, 150, 255],
              width: 3
            };
            this._view.graphics.add(result.route);
          });
        });
      }
    } catch (error) {
      console.log(error)
    }
  }

  async ionViewWillEnter() {
    this.presentLoading();
    this.backgroundMode.enable();
    this.user = await this.storage.get("userData");
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
          .then(() => {
            let address;
            this._pointGC.latitude = position.coords.latitude;
            this._pointGC.longitude = position.coords.longitude;
            let params = {
              location: this._pointGC
            }
            let geocoder = this._locator;
            console.log(params)
            geocoder.locationToAddress(params)
              .then((response) => {
                address = response.address;
                console.log(address)
                address = address.split(",")
                this.currentDirection = address[0];
                // this.currentDirection = this.currentDirection.split(",")
                console.log(this.currentDirection)
                this.loading.dismiss();

              }).catch(err => console.log(err))

          })

      });
  }

  // async ngOnInit() {
  //   this.presentLoading();
  //   this.user = await this.storage.get("userData");
  //   this.initializedMap()
  //     .then(async mapView => {
  //       console.log("mapView ready: ", this._view.ready);
  //       this._loaded = this._view.ready;

  //       let position = await this._locate.locate();
  //       console.log("position", position)
  //       mapView.goTo({
  //         center: this._locate.locate(),
  //         zoom: 6,
  //         tilt: 40
  //       })
  //         .then(() => {
  //           let address;
  //           this._pointGC.latitude = position.coords.latitude;
  //           this._pointGC.longitude = position.coords.longitude;
  //           let params = {
  //             location: this._pointGC
  //           }
  //           let geocoder = this._locator;
  //           console.log(params)
  //           geocoder.locationToAddress(params)
  //             .then((response) => {
  //               address = response.address;
  //               console.log(address)
  //               address = address.split(",")
  //               this.currentDirection = address[0];
  //               // this.currentDirection = this.currentDirection.split(",")
  //               console.log(this.currentDirection)
  //               this.loading.dismiss();

  //             }).catch(err => console.log(err))

  //         })

  //     });
  // }

  async startRute() {
    this.estado = "RECORRIDO INICIADO";
    this.clearWindows();
    this._track.start();
    await this._distance.start();
    console.log(this._distance)
    const fechaActual = new Date;
    this.fecha = fechaActual;
    console.log(this.fecha);
    //se toma la posicion y se geocodifica
    let address;
    let position = await this._locate.locate();
    this._pointGC.latitude = position.coords.latitude;
    this._pointGC.longitude = position.coords.longitude;
    let params = {
      location: this._pointGC
    }
    this._track.on("track", async (position) => {
      this.recorrido.push(position);
      let ult = this.recorrido.length - 1;
      if (this.recorrido.length > 1) {
        this.km = this.calculateDistance(this.recorrido[0].position.coords.longitude, this.recorrido[ult].position.coords.longitude, this.recorrido[0].position.coords.latitude, this.recorrido[ult].position.coords.latitude)
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
        this.currentDirection = address[0];
        // this.km = position.coords.speed;

        console.log(this.currentDirection)

      }).catch(err => console.log(err))
    //Se inicializa el contador  
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
  pause() {
    clearInterval(this.contador);
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

        this.estado = 'INICIAR RECORRIDO';
        this.isRun = false;
        // this.contador = null;

        //se toma la posicion y se geocodifica
        let address;
        let position = await this._locate.locate();
        this._pointGC.latitude = position.coords.latitude;
        this._pointGC.longitude = position.coords.longitude;
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
            this.currentDirection = address[0];
            console.log(this.currentDirection)
            let kms = parseFloat(this.km);
            let co2 = kms * 0.3;
            this.co2 = co2.toFixed(3);
            // let usPeso =  parseFloat(this.user.peso);
            console.log(this.user.peso)
            console.log(typeof(this.user.peso))
            let totalMin = (this.horas*60)+(this.minutos)+(this.segundos*0.0166667);
            this.cal = 0.071*(this.user.peso*2.2) *totalMin;
            this.ruteData = {
              fecha: this.fecha,
              inicio: this.fstDirection,
              final: this.fnlDirection,
              tiempo: this.time,
              kms: this.km,
              cal: this.cal,
              co2: this.co2,
              ingresos: this.ingresos
            }
            console.log(this.ruteData)
            this.apiService.sendRute(this.ruteData)
            // .then(()=>{this.loading.dismiss()});

          }).catch(err => console.log(err))
      }
    } catch (error) {
      console.log(error)
    }

  }
  // drawLine() {

  //   this._view.graphics.removeAll();

  //   // creates and returns an instance of PolyLineDrawAction
  //   const action = this._draw.create("polyline");

  //   // focus the view to activate keyboard shortcuts for sketching
  //   this._view.focus();

  //   // listen polylineDrawAction events to give immediate visual feedback
  //   // to users as the line is being drawn on the view.
  //   action.on(
  //     [
  //       "vertex-add",
  //       "vertex-remove",
  //       "cursor-update",
  //       "redo",
  //       "undo",
  //       "draw-complete"
  //     ],
  //     this.updateVertices
  //   );

  // }

  // // Checks if the last vertex is making the line intersect itself.
  // updateVertices(event) {
  //   // create a polyline from returned vertices
  //   if (event.vertices.length > 1) {
  //     const result = this.createGraphic(event);

  //     // if the last vertex is making the line intersects itself,
  //     // prevent the events from firing
  //     if (result.selfIntersects) {
  //       event.preventDefault();
  //     }
  //   }
  // }

  // // create a new graphic presenting the polyline that is being drawn on the view
  // createGraphic(event) {
  //   const vertices = event.vertices;
  //   this._view.graphics.removeAll();


  //   // a graphic representing the polyline that is being drawn
  //   const graphic = new esri.Graphic({
  //     geometry: {
  //       type: "polyline",
  //       paths: vertices,
  //       spatialReference: this._view.spatialReference
  //     },
  //     symbol: {
  //       type: "simple-line", // autocasts as new SimpleFillSymbol
  //       color: [4, 90, 141],
  //       width: 4,
  //       cap: "round",
  //       join: "round"
  //     }
  //   });

  //   // check if the polyline intersects itself.
  //   const intersectingSegment = this.getIntersectingSegment(graphic.geometry);

  //   // Add a new graphic for the intersecting segment.
  //   if (intersectingSegment) {
  //     this._view.graphics.addMany([graphic, intersectingSegment]);
  //   }
  //   // Just add the graphic representing the polyline if no intersection
  //   else {
  //     this._view.graphics.add(graphic);
  //   }

  //   // return intersectingSegment
  //   return {
  //     selfIntersects: intersectingSegment
  //   };
  // }

  // // function that checks if the line intersects itself
  // isSelfIntersecting(polyline) {
  //   if (polyline.paths[0].length < 3) {
  //     return false;
  //   }
  //   const line = polyline.clone();

  //   //get the last segment from the polyline that is being drawn
  //   const lastSegment = this.getLastSegment(polyline);
  //   line.removePoint(0, line.paths[0].length - 1);

  //   // returns true if the line intersects itself, false otherwise
  //   return this._geometryEngine.crosses(lastSegment, line);
  // }

  // // Checks if the line intersects itself. If yes, change the last
  // // segment's symbol giving a visual feedback to the user.
  // getIntersectingSegment(polyline) {
  //   if (this.isSelfIntersecting(polyline)) {
  //     return new esri.Graphic({
  //       geometry: this.getLastSegment(polyline),
  //       symbol: {
  //         // type: "simple-line", // autocasts as new SimpleLineSymbol
  //         // style: "short-dot",
  //         // width: 3.5,
  //         color: "red"
  //       }
  //     });
  //   }
  //   return null;
  // }

  // // Get the last segment of the polyline that is being drawn
  // getLastSegment(polyline): any{
  //   const line = polyline.clone();
  //   const lastXYPoint = line.removePoint(0, line.paths[0].length - 1);
  //   const existingLineFinalPoint = line.getPoint(
  //     0,
  //     line.paths[0].length - 1
  //   );
  //   const polylineProperties  = {
  //     type: "polyline",
  //     spatialReference: this._view.spatialReference,
  //     hasZ: false,
  //     paths: [
  //       [
  //         [existingLineFinalPoint.x, existingLineFinalPoint.y],
  //         [lastXYPoint.x, lastXYPoint.y]
  //       ]
  //     ]
  //   }
  //   return polylineProperties;
  // }

  calculateDistance(lon1, lon2, lat1, lat2) {
    let p = 0.017453292519943295;
    let c = Math.cos;
    let a = 0.5 - c((lat1 - lat2) * p) / 2 + c(lat2 * p) * c((lat1) * p) * (1 - c(((lon1 - lon2) * p))) / 2;
    let dis = (12742 * Math.asin(Math.sqrt(a)));
    return dis.toFixed(2);
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

}
