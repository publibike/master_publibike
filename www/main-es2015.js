(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+XmF":
/*!***************************************!*\
  !*** ./src/app/guards/login.guard.ts ***!
  \***************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "xgBC");




let LoginGuard = class LoginGuard {
    constructor(storage, router) {
        this.storage = storage;
        this.router = router;
    }
    canActivate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const isUserLoggedIn = yield this.storage.get('isUserLoggedIn');
            if (isUserLoggedIn) {
                return true;
            }
            else {
                this.router.navigateByUrl('/login');
            }
        });
    }
};
LoginGuard.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginGuard);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/semilleroesricolombia/Documents/AndresLoto/Desarrollos independientes/publibike/master_publibike/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    publibikeApi: "https://plus.uflou.com.co"
    // publibikeApi: "http://localhost:3002"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "B46g":
/*!***********************************************************************!*\
  !*** ./src/app/recognition-modal/recognition-modal-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: RecognitionModalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecognitionModalPageRoutingModule", function() { return RecognitionModalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _recognition_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recognition-modal.page */ "u6bn");




const routes = [
    {
        path: '',
        component: _recognition_modal_page__WEBPACK_IMPORTED_MODULE_3__["RecognitionModalPage"]
    }
];
let RecognitionModalPageRoutingModule = class RecognitionModalPageRoutingModule {
};
RecognitionModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RecognitionModalPageRoutingModule);



/***/ }),

/***/ "LePj":
/*!*******************************************************!*\
  !*** ./src/app/map-modal/map-modal-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: MapModalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapModalPageRoutingModule", function() { return MapModalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _map_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map-modal.page */ "O0P6");




const routes = [
    {
        path: '',
        component: _map_modal_page__WEBPACK_IMPORTED_MODULE_3__["MapModalPage"]
    }
];
let MapModalPageRoutingModule = class MapModalPageRoutingModule {
};
MapModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MapModalPageRoutingModule);



/***/ }),

/***/ "N/ei":
/*!*************************************************************!*\
  !*** ./src/app/services/api-publibike-bienestar.service.ts ***!
  \*************************************************************/
/*! exports provided: ApiPublibikeBienestarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiPublibikeBienestarService", function() { return ApiPublibikeBienestarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "xgBC");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let ApiPublibikeBienestarService = class ApiPublibikeBienestarService {
    constructor(storage) {
        this.storage = storage;
    }
    getUserData(id) {
        try {
            const options = {
                method: 'GET',
                // body: JSON.stringify(id),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            };
            return fetch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].publibikeApi}/api/movil/usuario/${id}`, options).then(response => response.json());
        }
        catch (error) {
        }
    }
    updateUser(userData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = yield this.storage.get("userData").then(res => res);
            console.log(userData);
            const id = user._id;
            console.log(id);
            const options = {
                method: 'PUT',
                body: JSON.stringify(userData),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            };
            return yield fetch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].publibikeApi}/api/movil/usuario/${id}`, options).then(response => {
                console.log(response.text());
            }).catch(error => console.log(error));
        });
    }
    getRecognitions(id) {
        return fetch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].publibikeApi}/api/movil/reconocimiento/${id}`).then(response => response.json());
    }
    getUserRecognition(id) {
        return fetch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].publibikeApi}/api/movil/usuario/${id}/reconocimientos`).then(response => response.json());
    }
    getCompanyRecognitios(id) {
        return fetch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].publibikeApi}/api/movil/empresa/${id}/reconocimientos`).then(response => response.json());
    }
    ;
    sendRute(ruteData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = yield this.storage.get("userData").then(res => res);
            console.log(ruteData);
            const id = user._id;
            console.log(id);
            const options = {
                method: 'PUT',
                body: JSON.stringify(ruteData),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            };
            return yield fetch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].publibikeApi}/api/movil/usuario/${id}/recorrido`, options).then(response => {
                console.log("rutaResponde", response.text());
            }).catch(error => console.log(error));
        });
    }
    sendCovidRisk(riesgo_covid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = yield this.storage.get("userData").then(res => res);
            const id = user._id;
            console.log(id);
            const options = {
                method: 'PUT',
                body: JSON.stringify(riesgo_covid),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            };
            return yield fetch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].publibikeApi}/api/movil/usuario/${id}/riesgocovid`, options).then(response => {
                console.log(response.text());
            }).catch(error => console.log(error));
        });
    }
};
ApiPublibikeBienestarService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
];
ApiPublibikeBienestarService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiPublibikeBienestarService);



/***/ }),

/***/ "NfN8":
/*!***********************************************!*\
  !*** ./src/app/map-modal/map-modal.module.ts ***!
  \***********************************************/
/*! exports provided: MapModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapModalPageModule", function() { return MapModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _map_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map-modal-routing.module */ "LePj");
/* harmony import */ var _map_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map-modal.page */ "O0P6");







let MapModalPageModule = class MapModalPageModule {
};
MapModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _map_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["MapModalPageRoutingModule"]
        ],
        declarations: [_map_modal_page__WEBPACK_IMPORTED_MODULE_6__["MapModalPage"]]
    })
], MapModalPageModule);



/***/ }),

/***/ "O0P6":
/*!*********************************************!*\
  !*** ./src/app/map-modal/map-modal.page.ts ***!
  \*********************************************/
/*! exports provided: MapModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapModalPage", function() { return MapModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_map_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./map-modal.page.html */ "St+6");
/* harmony import */ var _map_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map-modal.page.scss */ "Qb6g");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "xgBC");
/* harmony import */ var _services_api_publibike_bienestar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/api-publibike-bienestar.service */ "N/ei");
/* harmony import */ var esri_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! esri-loader */ "r6rm");
/* harmony import */ var esri_loader__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(esri_loader__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/background-mode/ngx */ "AcVp");






//import { Response } from "capacitor-ios-app-tracking";




// import { Geolocation } from '@ionic-native/geolocation/ngx'
//import * as moment from "moment";
// import { type } from 'os';
const { App, IOSAppTracking, Geolocation } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"];
let MapModalPage = class MapModalPage {
    constructor(apiService, storage, loadingCtrl, modalController, alertController, backgroundMode, navCtrl) {
        this.apiService = apiService;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.modalController = modalController;
        this.alertController = alertController;
        this.backgroundMode = backgroundMode;
        this.navCtrl = navCtrl;
        //Variables ArcGIS
        this._zoom = 10;
        this._center = [-74.090923, 4.694939];
        this._basemap = "streets-vector";
        this._loaded = false;
        this._view = null;
        this._locator = null;
        this._locate = null;
        this._search = null;
        this._track = null;
        this._pointGC = null;
        this._draw = null;
        this._distance = null;
        //Variables del cronometro
        this.transactionTime = 0;
        this.timeStamp = Math.floor(Date.now() / 1000);
        this.deltaDelay = 1;
        this.horas = 0;
        this.centesimas = 0;
        this.minutos = 59;
        this.segundos = 0;
        this._centesimas = "00";
        this._minutos = "00";
        this._segundos = "00";
        this._horas = "00";
        this.isRun = false;
        this.urlButton = "button-start-29.png";
        //Array recorrido con las coordenadas
        this.recorrido = [];
        this.user = {
            nombre: "",
            apellido: "",
            ganancia_total: 0,
            km_total: 0,
            cal_total: 0,
            co2_total: 0,
            peso: 0,
        };
        this.ruteData = {};
        this.flagCovid = 0;
        // time: any;
        this.km = 0.0;
        this.ingresos = 0;
        this.cal = 0;
        this.co2 = 0;
        this.vel = 0;
        this.riesgo_covid = 0;
    }
    initializedMap() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const [Map, MapView, Graphic, RouteTask, RouteParameters, FeatureSet, Directions, Locate, Track, Locator, LocatorSearchSource, Expand, Point, Draw, geometryEngine, FeatureLayer, DistanceMeasurement2DViewModel,] = yield Object(esri_loader__WEBPACK_IMPORTED_MODULE_8__["loadModules"])([
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
                    "esri/widgets/Search/LocatorSearchSource",
                    "esri/widgets/Expand",
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
                // const parkingLayer = new FeatureLayer({
                //   url: "https://services2.arcgis.com/NEwhEo9GGSHXcRXV/arcgis/rest/services/Cicloparqueaderos_Certificados_Bogota_D_C/FeatureServer/0"
                // })
                const customPoint = new FeatureLayer({
                    url: "https://serviciosgis.catastrobogota.gov.co/arcgis/rest/services/movilidad/cicloparqueadero/MapServer",
                });
                // map.add(parkingLayer);
                map.add(customPoint);
                //Se configura y crea el widget de busqueda
                this._search = new LocatorSearchSource({
                    view: this._view,
                });
                this._locator = new Locator({
                    url: "https://utility.arcgis.com/usrsvcs/appservices/0M4tNdkWcjbSCK2Z/rest/services/World/GeocodeServer/reverseGeocode",
                });
                this._locate = new Locate({
                    view: this._view,
                    useHeadingEnabled: false,
                    goToOverride: function (view, options) {
                        options.target.scale = 1500; // Override the default map scale
                        return view.goTo(options.target);
                    },
                });
                this._view.ui.add(this._locate, "top-left");
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
                    useHeadingEnabled: true,
                    goToOverride: function (view, options) {
                        options.target.scale = 1500; // Override the default map scale
                        return view.goTo(options.target);
                    },
                });
                this._view.ui.add(this._track, "top-left");
                this._distance = new DistanceMeasurement2DViewModel({
                    view: this._view,
                    unit: "kilometers",
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
                    autoCollapse: false,
                });
                this._view.ui.add(bgExpand, "top-right");
                yield this._view.when();
                return this._view;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // this.presentLoading();
            // this.pruebaTemp();
            this.user = yield this.storage.get("userData");
            //se usa localizacion en segundo plano
            this.initializedMap().then((mapView) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log("mapView ready: ", this._view.ready);
                this._loaded = this._view.ready;
                // this.loading.dismiss();
            }));
        });
    }
    startRute() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.backgroundMode.enable();
            this.loading = yield this.loadingCtrl.create({
                cssClass: "my-custom-class",
                message: "Cargando...",
            });
            yield this.loading.present();
            this.km = 0;
            this.cal = 0;
            this.co2 = 0;
            this.vel = 0;
            this.isRun = true;
            this.clearWindows();
            clearInterval(this.contador);
            this._track.start();
            const fechaActual = new Date();
            this.fecha = fechaActual;
            //se toma la posicion y se geocodifica
            let address;
            // let position = await this._locate.locate();
            let position = yield Geolocation.getCurrentPosition();
            console.log("position", position);
            this._pointGC.latitude = position.coords.latitude;
            this._pointGC.longitude = position.coords.longitude;
            let params = {
                location: this._pointGC,
            };
            // this.pruebaTemp()
            //cálculo de distancia cuando se esta en movimiento
            this._track.on("track", (position) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.clearWindows();
                clearInterval(this.contador);
                this.loading.dismiss();
                this.startCounter();
                //Permiso solo para iOS para permitir tracking
                // IOSAppTracking.getTrackingStatus().then((res: Response) => console.log(res))
                // IOSAppTracking.requestPermission().then((res: Response) => console.log(res))
                App.addListener("appStateChange", (state) => {
                    if (!state.isActive) {
                        this.backgroundMode.on("activate").subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            console.log("Estado Back", yield App.getState());
                            // this.startCounter();
                            this._track.on("track", (position) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                console.log("Estado app", App.getState());
                                this.recorrido.push(position);
                                this.positionAct = position.position;
                                this.vel = position.position.coords.speed;
                                this.riesgoCovid(this.vel);
                                let ult = this.recorrido.length - 1;
                                if (this.recorrido.length == 1) {
                                    this.km = this.calculateDistance(this.recorrido[0].position.coords.longitude, this.recorrido[ult].position.coords.longitude, this.recorrido[0].position.coords.latitude, this.recorrido[ult].position.coords.latitude);
                                }
                                else if (this.recorrido.length > 1) {
                                    let kmTemporal = this.km;
                                    this.km = this.calculateDistance(this.recorrido[ult - 1].position.coords.longitude, this.recorrido[ult].position.coords.longitude, this.recorrido[ult - 1].position.coords.latitude, this.recorrido[ult].position.coords.latitude);
                                    this.km = kmTemporal + this.km;
                                    this.co2 = this.km * 0.3;
                                    let totalMin = parseInt(this._horas) * 60 +
                                        parseInt(this._minutos) +
                                        parseInt(this._segundos) * 0.0166667;
                                    this.cal = 0.071 * (this.user.peso * 2.2) * totalMin;
                                }
                            }));
                        }));
                    }
                });
                this.recorrido.push(position);
                this.positionAct = position.position;
                this.vel = position.position.coords.speed;
                this.riesgoCovid(this.vel);
                let ult = this.recorrido.length - 1;
                if (this.recorrido.length == 1) {
                    this.km = this.calculateDistance(this.recorrido[0].position.coords.longitude, this.recorrido[ult].position.coords.longitude, this.recorrido[0].position.coords.latitude, this.recorrido[ult].position.coords.latitude);
                }
                else if (this.recorrido.length > 1) {
                    let kmTemporal = this.km;
                    this.km = this.calculateDistance(this.recorrido[ult - 1].position.coords.longitude, this.recorrido[ult].position.coords.longitude, this.recorrido[ult - 1].position.coords.latitude, this.recorrido[ult].position.coords.latitude);
                    this.km = kmTemporal + this.km;
                    this.co2 = this.km * 0.3;
                    let totalMin = parseInt(this._horas) * 60 +
                        parseInt(this._minutos) +
                        parseInt(this._segundos) * 0.0166667;
                    this.cal = 0.071 * (this.user.peso * 2.2) * totalMin;
                }
            }));
            let geocoder = this._locator;
            geocoder.locationToAddress(params)
                .then((response) => {
                address = response.address;
                address = address.split(",");
                this.fstDirection = address[0];
                this.fstPosition = params;
            })
                .catch((err) => console.log(err));
        });
    }
    stopRute() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.backgroundMode.disable();
                // this.presentLoading();
                if (this.isRun) {
                    this._track.stop();
                    this.time = `${this._horas}:${this._minutos}:${this._segundos}.${this._centesimas}`;
                    clearInterval(this.contador);
                    this.isRun = false;
                    // this.contador = null;
                    //se toma la posicion y se geocodifica
                    let address;
                    let position = yield Geolocation.getCurrentPosition();
                    this._pointGC.latitude = position.coords.latitude;
                    this._pointGC.longitude = position.coords.longitude;
                    // this.vel = position.coords.speed;
                    // this.vel= this.vel.toFixed(2);
                    let params = {
                        location: this._pointGC,
                    };
                    let geocoder = this._locator;
                    //Se obtiene la posición actual
                    geocoder
                        .locationToAddress(params)
                        .then((response) => {
                        address = response.address;
                        address = address.split(",");
                        this.fnlDirection = address[0];
                        this.fnlPosition = params;
                        let kms = this.km;
                        let cal = this.cal;
                        let co2 = this.co2;
                        // co2 = kms * 0.3;
                        let totalMin = parseInt(this._horas) * 60 +
                            parseInt(this._minutos) +
                            parseInt(this._segundos) * 0.0166667;
                        this.ruteData = {
                            fecha: this.fecha,
                            inicio: this.fstDirection,
                            inicioGeo: this.fstPosition,
                            final: this.fnlDirection,
                            finalGeo: this.fnlPosition,
                            tiempo: this.time,
                            minutos: totalMin,
                            kms: kms,
                            cal: this.cal,
                            co2: this.co2,
                            riesgo_covid: this.riesgo_covid
                        };
                        this.apiService.sendRute(this.ruteData);
                        // .then(()=>{this.loading.dismiss()});
                        this.flagCovid = 0;
                        this.recorrido = [];
                    })
                        .catch((err) => console.log(err));
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    calculateDistance(lon1, lon2, lat1, lat2) {
        let p = 0.017453292519943295;
        let c = Math.cos;
        let a = 0.5 -
            c((lat1 - lat2) * p) / 2 +
            (c(lat2 * p) * c(lat1 * p) * (1 - c((lon1 - lon2) * p))) / 2;
        let dis = 12742 * Math.asin(Math.sqrt(a));
        return dis;
    }
    startCounter() {
        this.contador = setInterval(() => {
            if (this.transactionTime != 0 && (Math.floor(Date.now() / 1000) - this.timeStamp) > this.deltaDelay) {
                this.transactionTime += (Math.floor(Date.now() / 1000) - this.timeStamp);
            }
            this.timeStamp = Math.floor(Date.now() / 1000);
            this.centesimas += 1;
            if (this.centesimas < 10)
                this._centesimas = "0" + this.centesimas;
            else
                this._centesimas = "" + this.centesimas;
            if (this.centesimas == 10) {
                this.centesimas = 0;
                this.segundos += 1;
                if (this.segundos < 10)
                    this._segundos = "0" + this.segundos;
                else
                    this._segundos = this.segundos + "";
                if (this.segundos == 60) {
                    this.segundos = 0;
                    this.minutos += 1;
                    if (this.minutos < 10)
                        this._minutos = "0" + this.minutos;
                    else
                        this._minutos = this.minutos + "";
                    this._segundos = "00";
                    if (this.minutos == 60) {
                        this.minutos = 0;
                        this.minutos += 1;
                        if (this.horas < 10)
                            this._horas = "0" + this.horas;
                        else
                            this._horas = this.horas + "";
                        this._minutos = "00";
                    }
                }
            }
        }, 100);
    }
    // pruebaTemp() {
    //   this.time = moment.utc(moment().diff(this.startMoment)).format('HH : mm : ss');
    //   setInterval(function () {
    //     if (this.transactionTime != 0 && (Math.floor(Date.now() / 1000) - this.timeStamp) > this.deltaDelay) {
    //       console.log("if time")
    //       this.transactionTime += (Math.floor(Date.now() / 1000) - this.timeStamp);
    //       this.centesimas += 1;
    //       if (this.centesimas < 10) this._centesimas = "0" + this.centesimas;
    //       else this._centesimas = "" + this.centesimas;
    //       if (this.centesimas == 10) {
    //         this.centesimas = 0;
    //         this.segundos += 1;
    //         if (this.segundos < 10) this._segundos = "0" + this.segundos;
    //         else this._segundos = this.segundos + "";
    //         if (this.segundos == 60) {
    //           this.segundos = 0;
    //           this.minutos += 1;
    //           if (this.minutos < 10) this._minutos = "0" + this.minutos;
    //           else this._minutos = this.minutos + "";
    //           this._segundos = "00";
    //           if (this.minutos == 60) {
    //             this.minutos = 0;
    //             this.minutos += 1;
    //             if (this.horas < 10) this._horas = "0" + this.horas;
    //             else this._horas = this.horas + "";
    //             this._minutos = "00";
    //           }
    //         }
    //       }
    //     }
    //     // console.log("no if time")
    //     this.timeStamp = Math.floor(Date.now() / 1000);
    //     this.centesimas += 1;
    //     if (this.centesimas < 10) this._centesimas = "0" + this.centesimas;
    //     else this._centesimas = "" + this.centesimas;
    //     if (this.centesimas == 10) {
    //       this.centesimas = 0;
    //       this.segundos += 1;
    //       if (this.segundos < 10) this._segundos = "0" + this.segundos;
    //       else this._segundos = this.segundos + "";
    //       if (this.segundos == 60) {
    //         this.segundos = 0;
    //         this.minutos += 1;
    //         if (this.minutos < 10) this._minutos = "0" + this.minutos;
    //         else this._minutos = this.minutos + "";
    //         this._segundos = "00";
    //         if (this.minutos == 60) {
    //           this.minutos = 0;
    //           this.minutos += 1;
    //           if (this.horas < 10) this._horas = "0" + this.horas;
    //           else this._horas = this.horas + "";
    //           this._minutos = "00";
    //         }
    //       }
    //     }
    //     // console.log(this._minutos)
    //     //Update your element with the new time.
    //     console.log(this.transactionTime++);
    //   }, 1000);
    // }
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
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                cssClass: "my-custom-class",
                message: "Cargando...",
            });
            yield this.loading.present();
        });
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.navCtrl.navigateForward("/tabs/profile");
            yield this.modalController.dismiss();
        });
    }
    riesgoCovid(vel) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert;
            // Riesgo Covid menor a 2 km
            // if (vel < 2) {
            //   //Bandera para activar el riesgo
            //   this.flagCovid += 1;
            //   console.log(this.flagCovid)
            //   if (this.flagCovid >= 10) {
            //     //Pausa el seguimiento del recorrido
            //     this._track.stop();
            //     clearInterval(this.contador);
            //     //Muestra el mensaje de alerta
            //     alert = await this.alertController.create({
            //       cssClass: 'my-custom-class',
            //       header: 'Atención',
            //       subHeader: '¿Estas movilizandote a pie?',
            //       message: 'Te recomendamos guardar el distanciamiento social y las medidas de protección necesarias',
            //       buttons: [{
            //         text: 'Ok',
            //         handler: () => {
            //           this._track.start()
            //           this.startCounter();
            //           this.flagCovid = 0;
            //         }
            //       }]
            //     });
            //     await alert.present();
            //     this.riesgo_covid = 40;
            //     await this.apiService.sendCovidRisk(this.riesgo_covid);
            //   }
            // } else
            //Riesgo COVID mayor a 50 km
            if (vel > 50) {
                //Bandera para activar el riesgo
                this.flagCovid += 1;
                if (this.flagCovid >= 10) {
                    // this._track.stop();
                    alert = yield this.alertController.create({
                        cssClass: "my-custom-class",
                        header: "Atención",
                        subHeader: "¿Estas movilizandote en?",
                        message: "Te recomendamos aguardar el distanciamiento social y las medidas de protección necesarias",
                        inputs: [
                            {
                                name: "radio1",
                                type: "radio",
                                label: "Vehiculo Particular",
                                value: "Vehiculo_Particular",
                                checked: true,
                            },
                            {
                                name: "radio2",
                                type: "radio",
                                label: "Taxi,Uber,Beat,...",
                                value: "Vehiculo_independiente",
                            },
                            {
                                name: "radio3",
                                type: "radio",
                                label: "Transporte Público",
                                value: "Transporte_Publico",
                            },
                        ],
                        buttons: [
                            {
                                text: "Ok",
                            },
                        ],
                    });
                    yield alert.present();
                    this.riesgo_covid = 60;
                    yield this.apiService.sendCovidRisk(this.riesgo_covid);
                }
            }
        });
    }
};
MapModalPage.ctorParameters = () => [
    { type: _services_api_publibike_bienestar_service__WEBPACK_IMPORTED_MODULE_7__["ApiPublibikeBienestarService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_9__["BackgroundMode"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
MapModalPage.propDecorators = {
    mapEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["map",] }]
};
MapModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-map-modal",
        template: _raw_loader_map_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_map_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MapModalPage);



/***/ }),

/***/ "Qb6g":
/*!***********************************************!*\
  !*** ./src/app/map-modal/map-modal.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo-ekobike-in {\n  position: unset;\n  margin-bottom: 30px;\n  margin-top: 20px;\n}\n\n.content-map {\n  height: 104%;\n}\n\n#viewDiv {\n  padding: 0;\n  margin: 0;\n  height: 340px;\n  width: 100%;\n}\n\n.esri-view-width-xsmall .esri-expand--auto .esri-expand__container--expanded {\n  height: 34%;\n  background: #001434;\n}\n\n.esri-widget--button {\n  background-color: #f9b410 !important;\n  color: #001434 !important;\n}\n\n.esri-view .esri-directions {\n  position: fixed;\n  right: 15px;\n}\n\n.esri-view .esri-component.esri-attribution {\n  position: fixed;\n}\n\n.esri-search__suggestions-list > li {\n  padding: 1em;\n}\n\n.play {\n  height: 40px;\n  width: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwLW1vZGFsL21hcC1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtBQUVKOztBQUFBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FBSUo7O0FBRkE7RUFDSSxvQ0FBQTtFQUNBLHlCQUFBO0FBS0o7O0FBSEE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQU1KOztBQUhBO0VBQ0ksZUFBQTtBQU1KOztBQUpBO0VBQ0ksWUFBQTtBQU9KOztBQUxBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFRSiIsImZpbGUiOiJzcmMvYXBwL21hcC1tb2RhbC9tYXAtbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28tZWtvYmlrZS1pbiB7XG4gICAgcG9zaXRpb246IHVuc2V0O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5jb250ZW50LW1hcHtcbiAgICBoZWlnaHQ6IDEwNCU7XG59XG4jdmlld0RpdiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiAzNDBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5lc3JpLXZpZXctd2lkdGgteHNtYWxsIC5lc3JpLWV4cGFuZC0tYXV0byAuZXNyaS1leHBhbmRfX2NvbnRhaW5lci0tZXhwYW5kZWQge1xuICAgIGhlaWdodDogMzQlO1xuICAgIGJhY2tncm91bmQ6ICMwMDE0MzQ7XG59XG4uZXNyaS13aWRnZXQtLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5YjQxMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMDAxNDM0ICFpbXBvcnRhbnQ7XG59XG4uZXNyaS12aWV3IC5lc3JpLWRpcmVjdGlvbnMge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMTVweDtcbn1cblxuLmVzcmktdmlldyAuZXNyaS1jb21wb25lbnQuZXNyaS1hdHRyaWJ1dGlvbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xufVxuLmVzcmktc2VhcmNoX19zdWdnZXN0aW9ucy1saXN0ID4gbGkge1xuICAgIHBhZGRpbmc6IDFlbTtcbn1cbi5wbGF5e1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "St+6":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/map-modal/map-modal.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"secondary\" (click)=\"closeModal()\">Cerrar</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"logo-ekobike-in\">\n    <img src=\"assets/img/logo-ekobike.png\">\n  </div>\n  <!-- <div id=\"viewDiv\" #map></div> -->\n  <div class=\"content-map\">\n    <div class=\"ui grid content-play\">\n      <div class=\"column distance\">\n        <h5>Distancia Recorrida</h5>\n        <h3 id=\"km\">{{km | number}}</h3>\n        <h4> Km</h4>\n      </div>\n    </div>\n    <div id=\"viewDiv\" #map></div>\n    <div class=\"chrono\">\n      <div class=\"time-elapsed\">\n        <h4>\n          Tiempo Recorrido\n        </h4>\n        <h2 id=time>{{_horas}}:{{_minutos}}:{{_segundos}}.{{_centesimas}}</h2>\n      </div>\n      <div class=\"calories-co2\">\n        <div class=\"calories\">\n          <h4>\n            Consumo de Calorías\n          </h4>\n          <h2>\n            {{cal | number}}\n          </h2>\n          <h5>Kcal</h5>\n        </div>\n        <div class=\"co2\">\n          <h4>CO2 Reducido</h4>\n          <h2>\n            {{co2 | number}}\n          </h2>\n          <h5>Kgr</h5>\n        </div>\n      </div>\n      <div class=\"max-speed\">\n        <h4>\n          Velocidad Máxima\n        </h4>\n        <h2>\n          {{vel}}\n        </h2>\n        <h5>Km/h</h5>\n      </div>\n    </div>\n  </div>\n</ion-content>\n<ion-footer color=\"primary\">\n  <ion-toolbar>\n    <img class=\"play\" src=\"assets/img/button-start-29.png\" (click)=\"startRute()\" *ngIf=\"!isRun\">\n    <img class=\"play\" src=\"assets/img/button-stop-29.png\" (click)=\"stopRute()\" *ngIf=\"isRun\">\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button shape=\"round\" color=\"secondary\" >\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "y2f/");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "p74H");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/core */ "gcOT");








// Events (iOS only)
window.addEventListener('statusTap', function () {
    console.log("statusbar tapped");
});
const { StatusBarCap } = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"];
let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.statusBar.hide();
            this.splashScreen.hide();
            StatusBarCap.hide();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "UO2D":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recognition-modal/recognition-modal.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color=\"primary\">\n  <ion-toolbar>\n    <ion-title color=\"secondary\">{{categoria}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"secondary\" (click)=\"closeModal()\">Cerrar</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"background-modal\">\n  <div class=\"logo-ekobike-in\">\n    <img src=\"assets/img/logo-ekobike.png\">\n  </div>\n  <ion-list>\n    <ion-item>\n      <ion-label>\n        <h2>Nombre: </h2>\n        <p>{{ data.nombre }}</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h2>Establecimiento: </h2>\n        <p>{{ data.establecimiento }}</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h2>Beneficio: </h2>\n        <p>{{ data.beneficio }}</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h2>Meta en km para activar: </h2>\n        <p>{{ data.activacion_km }}</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h2>Estado: </h2>\n        <p>{{ data.estado  ? 'Activo' : 'Bloqueado' }}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "YCkW":
/*!***************************************************************!*\
  !*** ./src/app/recognition-modal/recognition-modal.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  font-size: 15px;\n  color: var(--ion-color-secondary);\n}\n\np {\n  font-size: 15px;\n  color: var(--ion-color-tertiary);\n}\n\n.logo-ekobike-in {\n  position: unset;\n  margin-bottom: 30px;\n  margin-top: 20px;\n}\n\nion-content {\n  --background-image: url('background-ekobike.jpg') no-repeat fixed center;\n}\n\napp-recognition-modal {\n  background-image: var(--ion-background-image);\n}\n\n.background-modal {\n  --background-image: url('background-ekobike.jpg') no-repeat fixed center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjb2duaXRpb24tbW9kYWwvcmVjb2duaXRpb24tbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGlDQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsZ0NBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBR0o7O0FBREE7RUFDSSx3RUFBQTtBQUlKOztBQUZBO0VBQ0ksNkNBQUE7QUFLSjs7QUFIQTtFQUNJLHdFQUFBO0FBTUoiLCJmaWxlIjoic3JjL2FwcC9yZWNvZ25pdGlvbi1tb2RhbC9yZWNvZ25pdGlvbi1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbnAge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn1cbi5sb2dvLWVrb2Jpa2UtaW4ge1xuICAgIHBvc2l0aW9uOiB1bnNldDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5pb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2JhY2tncm91bmQtZWtvYmlrZS5qcGdcIikgbm8tcmVwZWF0IGZpeGVkIGNlbnRlcjtcbn1cbmFwcC1yZWNvZ25pdGlvbi1tb2RhbHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1pb24tYmFja2dyb3VuZC1pbWFnZSk7XG59XG4uYmFja2dyb3VuZC1tb2RhbHtcbiAgICAtLWJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvYmFja2dyb3VuZC1la29iaWtlLmpwZ1wiKSBuby1yZXBlYXQgZml4ZWQgY2VudGVyO1xufVxuIl19 */");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "y2f/");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "p74H");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "xgBC");
/* harmony import */ var _recognition_modal_recognition_modal_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./recognition-modal/recognition-modal.module */ "lFiN");
/* harmony import */ var _map_modal_map_modal_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./map-modal/map-modal.module */ "NfN8");
/* harmony import */ var _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/background-mode/ngx */ "AcVp");













// import { Geolocation } from '@ionic-native/geolocation/ngx';
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _recognition_modal_recognition_modal_module__WEBPACK_IMPORTED_MODULE_10__["RecognitionModalPageModule"],
            _map_modal_map_modal_module__WEBPACK_IMPORTED_MODULE_11__["MapModalPageModule"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["IonicStorageModule"].forRoot()
        ],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"],
            _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_12__["BackgroundMode"],
            // Geolocation,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "cu8M":
/*!***************************************!*\
  !*** ./src/app/guards/intro.guard.ts ***!
  \***************************************/
/*! exports provided: IntroGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroGuard", function() { return IntroGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "xgBC");




let IntroGuard = class IntroGuard {
    constructor(storage, router) {
        this.storage = storage;
        this.router = router;
    }
    canActivate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const isIntroShowed = yield this.storage.get("isIntroShowed");
            if (isIntroShowed) {
                return true;
            }
            else {
                this.router.navigateByUrl("intro");
            }
        });
    }
};
IntroGuard.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
IntroGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], IntroGuard);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "lFiN":
/*!***************************************************************!*\
  !*** ./src/app/recognition-modal/recognition-modal.module.ts ***!
  \***************************************************************/
/*! exports provided: RecognitionModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecognitionModalPageModule", function() { return RecognitionModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _recognition_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recognition-modal-routing.module */ "B46g");
/* harmony import */ var _recognition_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recognition-modal.page */ "u6bn");







let RecognitionModalPageModule = class RecognitionModalPageModule {
};
RecognitionModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _recognition_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecognitionModalPageRoutingModule"]
        ],
        declarations: [_recognition_modal_page__WEBPACK_IMPORTED_MODULE_6__["RecognitionModalPage"]]
    })
], RecognitionModalPageModule);



/***/ }),

/***/ "u6bn":
/*!*************************************************************!*\
  !*** ./src/app/recognition-modal/recognition-modal.page.ts ***!
  \*************************************************************/
/*! exports provided: RecognitionModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecognitionModalPage", function() { return RecognitionModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_recognition_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./recognition-modal.page.html */ "UO2D");
/* harmony import */ var _recognition_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recognition-modal.page.scss */ "YCkW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");





let RecognitionModalPage = class RecognitionModalPage {
    constructor(navParams, modalController) {
        this.navParams = navParams;
        this.modalController = modalController;
    }
    ionViewDidEnter() {
        this.categoria = this.navParams.data.categoria;
        this.data = this.navParams.data.data;
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    ngOnInit() {
    }
};
RecognitionModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
RecognitionModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-recognition-modal',
        template: _raw_loader_recognition_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_recognition_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RecognitionModalPage);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _guards_intro_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/intro.guard */ "cu8M");
/* harmony import */ var _guards_login_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/login.guard */ "+XmF");





const routes = [
    {
        path: '',
        redirectTo: 'intro',
        pathMatch: 'full',
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | login-login-module */ "login-login-module").then(__webpack_require__.bind(null, /*! ./login/login.module */ "X3zk")).then(m => m.LoginPageModule)
    },
    {
        path: 'tabs',
        loadChildren: () => __webpack_require__.e(/*! import() | tabs-tabs-module */ "tabs-tabs-module").then(__webpack_require__.bind(null, /*! ./tabs/tabs.module */ "hO9l")).then(m => m.TabsPageModule),
        canActivate: [_guards_intro_guard__WEBPACK_IMPORTED_MODULE_3__["IntroGuard"], _guards_login_guard__WEBPACK_IMPORTED_MODULE_4__["LoginGuard"]]
    },
    {
        path: 'recognition-modal',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./recognition-modal/recognition-modal.module */ "lFiN")).then(m => m.RecognitionModalPageModule)
    },
    {
        path: 'map-modal',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./map-modal/map-modal.module */ "NfN8")).then(m => m.MapModalPageModule)
    },
    {
        path: 'intro',
        loadChildren: () => __webpack_require__.e(/*! import() | intro-intro-module */ "intro-intro-module").then(__webpack_require__.bind(null, /*! ./intro/intro.module */ "PQfJ")).then(m => m.IntroPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-modal {\n  --ion-background-image: url('background-ekobike.jpg') no-repeat fixed center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUZBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tb2RhbHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvaW1nL2JhY2tncm91bmQtZWtvYmlrZS5qcGdcIikgbm8tcmVwZWF0IGZpeGVkIGNlbnRlciAhaW1wb3J0YW50O1xufVxuIl19 */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "wAiw");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map