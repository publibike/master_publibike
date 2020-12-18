(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rute-rute-module"],{

/***/ "4+Gx":
/*!*************************************!*\
  !*** ./src/app/rute/rute.module.ts ***!
  \*************************************/
/*! exports provided: RutePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutePageModule", function() { return RutePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _rute_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rute-routing.module */ "Of+G");
/* harmony import */ var _rute_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rute.page */ "oH3S");







let RutePageModule = class RutePageModule {
};
RutePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _rute_routing_module__WEBPACK_IMPORTED_MODULE_5__["RutePageRoutingModule"]
        ],
        declarations: [_rute_page__WEBPACK_IMPORTED_MODULE_6__["RutePage"]]
    })
], RutePageModule);



/***/ }),

/***/ "Of+G":
/*!*********************************************!*\
  !*** ./src/app/rute/rute-routing.module.ts ***!
  \*********************************************/
/*! exports provided: RutePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutePageRoutingModule", function() { return RutePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _rute_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rute.page */ "oH3S");




const routes = [
    {
        path: '',
        component: _rute_page__WEBPACK_IMPORTED_MODULE_3__["RutePage"]
    }
];
let RutePageRoutingModule = class RutePageRoutingModule {
};
RutePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RutePageRoutingModule);



/***/ }),

/***/ "U/5e":
/*!*************************************!*\
  !*** ./src/app/rute/rute.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo-ekobike-in {\n  position: unset;\n  margin-bottom: 30px;\n  margin-top: 20px;\n}\n\n.content-map {\n  height: 100%;\n}\n\n#viewDiv {\n  padding: 0;\n  margin: 0;\n  height: 400px;\n  width: 100%;\n}\n\n.esri-view-width-xsmall .esri-expand--auto .esri-expand__container--expanded {\n  height: 34%;\n  background: #001434;\n}\n\n.esri-widget--button {\n  background-color: #f9b410 !important;\n  color: #001434 !important;\n}\n\n.esri-view .esri-directions {\n  position: fixed;\n  right: 15px;\n}\n\n.esri-view .esri-component.esri-attribution {\n  position: fixed;\n}\n\n.esri-search__suggestions-list > li {\n  padding: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcnV0ZS9ydXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0FBRUo7O0FBQUE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBR0o7O0FBREE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFGQTtFQUNJLG9DQUFBO0VBQ0EseUJBQUE7QUFLSjs7QUFIQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBTUo7O0FBSEE7RUFDSSxlQUFBO0FBTUo7O0FBSkE7RUFDSSxZQUFBO0FBT0oiLCJmaWxlIjoic3JjL2FwcC9ydXRlL3J1dGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28tZWtvYmlrZS1pbiB7XHJcbiAgICBwb3NpdGlvbjogdW5zZXQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uY29udGVudC1tYXB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuI3ZpZXdEaXYge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uZXNyaS12aWV3LXdpZHRoLXhzbWFsbCAuZXNyaS1leHBhbmQtLWF1dG8gLmVzcmktZXhwYW5kX19jb250YWluZXItLWV4cGFuZGVkIHtcclxuICAgIGhlaWdodDogMzQlO1xyXG4gICAgYmFja2dyb3VuZDogIzAwMTQzNDtcclxufVxyXG4uZXNyaS13aWRnZXQtLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjliNDEwICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzAwMTQzNCAhaW1wb3J0YW50O1xyXG59XHJcbi5lc3JpLXZpZXcgLmVzcmktZGlyZWN0aW9ucyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDogMTVweDtcclxufVxyXG5cclxuLmVzcmktdmlldyAuZXNyaS1jb21wb25lbnQuZXNyaS1hdHRyaWJ1dGlvbiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuLmVzcmktc2VhcmNoX19zdWdnZXN0aW9ucy1saXN0ID4gbGkge1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "oH3S":
/*!***********************************!*\
  !*** ./src/app/rute/rute.page.ts ***!
  \***********************************/
/*! exports provided: RutePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutePage", function() { return RutePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_rute_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./rute.page.html */ "rGEy");
/* harmony import */ var _rute_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rute.page.scss */ "U/5e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "xgBC");
/* harmony import */ var esri_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! esri-loader */ "r6rm");
/* harmony import */ var esri_loader__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(esri_loader__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_api_publibike_bienestar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/api-publibike-bienestar.service */ "N/ei");








let RutePage = class RutePage {
    constructor(apiService, storage, loadingCtrl) {
        this.apiService = apiService;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
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
        this.horas = 0;
        this.centesimas = 0;
        this.minutos = 59;
        this.segundos = 0;
        this._centesimas = '00';
        this._minutos = '00';
        this._segundos = '00';
        this._horas = '00';
        this.isRun = false;
        //Array recorrido con las coordenadas
        this.recorrido = [];
        this.user = {
            nombre: "",
            apellido: "",
            ganancia_total: 0,
            km_total: 0,
            cal_total: 0,
            co2_total: 0
        };
        this.ruteData = {};
        this.km = 0.0;
        this.ingresos = 0;
        this.cal = 0;
        this.co2 = 0;
    }
    initializedMap() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const [Map, MapView, Graphic, RouteTask, RouteParameters, FeatureSet, Directions, Locate, Track, Locator, Search, Expand, Legend, Point, Draw, geometryEngine, FeatureLayer, DistanceMeasurement2DViewModel] = yield Object(esri_loader__WEBPACK_IMPORTED_MODULE_6__["loadModules"])([
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
                    "esri/widgets/Search",
                    "esri/widgets/Expand",
                    "esri/widgets/Legend",
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
                const template = {
                    title: "Cicloparqueadero",
                    content: function () {
                        console.log("Click");
                        return "<b>Nombre:</b> {NOMBRE_CICP}<br><b>Horario:</b> {HORARIO_CICP}<br><b>Dirección:</b> {DIRECCION}<br><b>Cupos:</b> {CUPOS} <br><b>Servicio:</b> {TIPOLOGIA_CICP}";
                    }
                };
                const parkingLayer = new FeatureLayer({
                    url: "https://services2.arcgis.com/NEwhEo9GGSHXcRXV/arcgis/rest/services/Cicloparqueaderos_Certificados_Bogota_D_C/FeatureServer/0",
                    outFields: ["NOMBRE_CICP", "HORARIO_CICP", "DIRECCION", "CUPOS", "TIPOLOGIA_CICP"],
                    PopupTemplate: template
                });
                map.add(parkingLayer);
                var legend = new Legend({
                    view: this._view,
                    layerInfos: [{
                            layer: parkingLayer,
                            title: "Categoria Cicloparqueaderos"
                        }]
                });
                // this._view.ui.add(legend, "bottom-right");
                let lgExpand = new Expand({
                    view: this._view,
                    content: legend,
                    autoCollapse: false
                });
                this._view.ui.add(lgExpand, "bottom-right");
                //Se configura y crea el widget de busqueda
                this._search = new Search({
                    view: this._view,
                });
                this._view.ui.add(this._search, {
                    position: "top-left",
                    index: 0
                });
                this._locator = new Locator({
                    url: "https://utility.arcgis.com/usrsvcs/appservices/rdJwJijx0YBycNdS/rest/services/World/GeocodeServer/reverseGeocode"
                });
                this._locate = new Locate({
                    view: this._view,
                    useHeadingEnabled: false,
                    goToOverride: function (view, options) {
                        options.target.scale = 1500; // Override the default map scale
                        return view.goTo(options.target);
                    }
                });
                this._view.ui.add(this._locate, {
                    position: "top-left",
                    index: 2
                });
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
                    useHeadingEnabled: true,
                    goToOverride: function (view, options) {
                        options.target.scale = 1500; // Override the default map scale
                        return view.goTo(options.target);
                    }
                });
                // this._view.ui.add(this._track, "top-left");
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
                    routeServiceUrl: "https://sig.simur.gov.co/arcgis/rest/services/MVI_REDBICI/NARedBici/NAServer/Principiante",
                });
                let bgExpand = new Expand({
                    view: this._view,
                    content: directions,
                    autoCollapse: false
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
            this.presentLoading();
            // this.backgroundMode.enable();
            this.user = yield this.storage.get("userData");
            this.initializedMap()
                .then((mapView) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log("mapView ready: ", this._view.ready);
                this._loaded = this._view.ready;
                // let position = await this._locate.locate();
                // console.log("position", position)
                // mapView.goTo({
                //   center: this._locate.locate(),
                //   zoom: 6,
                //   tilt: 40
                // })
                this.loading.dismiss();
            }));
        });
    }
    startRute() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.clearWindows();
            this._track.start();
            yield this._distance.start();
            console.log(this._distance);
            const fechaActual = new Date;
            this.fecha = fechaActual;
            console.log(this.fecha);
            //se toma la posicion y se geocodifica
            let address;
            let position = yield this._locate.locate();
            this._pointGC.latitude = position.coords.latitude;
            this._pointGC.longitude = position.coords.longitude;
            let params = {
                location: this._pointGC
            };
            this._track.on("track", (position) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.recorrido.push(position);
                let ult = this.recorrido.length - 1;
                if (this.recorrido.length > 1) {
                    this.km = this.calculateDistance(this.recorrido[0].position.coords.longitude, this.recorrido[ult].position.coords.longitude, this.recorrido[0].position.coords.latitude, this.recorrido[ult].position.coords.latitude);
                    console.log(this.km);
                    // this.ingresos = this.km * this.user.campana_actual.pago_km;
                }
            }));
            let geocoder = this._locator;
            geocoder.locationToAddress(params)
                .then((response) => {
                address = response.address;
                console.log(address);
                address = address.split(",");
                this.fstDirection = address[0];
                // this.currentDirection = address[0];
                // this.km = position.coords.speed;
                // console.log(this.currentDirection)
            }).catch(err => console.log(err));
            //Se inicializa el contador  
            this.contador = setInterval(() => {
                this.centesimas += 1;
                if (this.centesimas < 10)
                    this._centesimas = '0' + this.centesimas;
                else
                    this._centesimas = '' + this.centesimas;
                if (this.centesimas == 10) {
                    this.centesimas = 0;
                    this.segundos += 1;
                    if (this.segundos < 10)
                        this._segundos = '0' + this.segundos;
                    else
                        this._segundos = this.segundos + '';
                    if (this.segundos == 60) {
                        this.segundos = 0;
                        this.minutos += 1;
                        if (this.minutos < 10)
                            this._minutos = '0' + this.minutos;
                        else
                            this._minutos = this.minutos + '';
                        this._segundos = '00';
                        if (this.minutos == 60) {
                            this.minutos = 0;
                            this.minutos += 1;
                            if (this.horas < 10)
                                this._horas = '0' + this.horas;
                            else
                                this._horas = this.horas + '';
                            this._minutos = '00';
                        }
                    }
                }
            }, 100);
        });
    }
    stopRute() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
                    let position = yield this._locate.locate();
                    this._pointGC.latitude = position.coords.latitude;
                    this._pointGC.longitude = position.coords.longitude;
                    let params = {
                        location: this._pointGC
                    };
                    let geocoder = this._locator;
                    geocoder.locationToAddress(params)
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
                        console.log("co2", typeof (kms), this.co2);
                        this.ruteData = {
                            fecha: this.fecha,
                            inicio: this.fstDirection,
                            final: this.fnlDirection,
                            tiempo: this.time,
                            kms: this.km,
                            cal: this.cal,
                            co2: this.co2,
                            ingresos: this.ingresos
                        };
                        console.log(this.ruteData);
                        this.apiService.sendRute(this.ruteData);
                        // .then(()=>{this.loading.dismiss()});
                    }).catch(err => console.log(err));
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
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Cargando...'
            });
            yield this.loading.present();
        });
    }
    getIconByStatus(status) {
        let icon = '';
        switch (status) {
            case 'true':
                icon = 'button-stop-29.png';
                break;
            case 'false':
                icon = 'button-start-29.png';
                break;
        }
        return icon;
    }
};
RutePage.ctorParameters = () => [
    { type: _services_api_publibike_bienestar_service__WEBPACK_IMPORTED_MODULE_7__["ApiPublibikeBienestarService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
RutePage.propDecorators = {
    mapEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['map',] }]
};
RutePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-rute',
        template: _raw_loader_rute_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_rute_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RutePage);



/***/ }),

/***/ "rGEy":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rute/rute.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"logo-ekobike-in\">    \n      <img src=\"assets/img/logo-ekobike.png\">\n  </div>\n    <!-- <div id=\"viewDiv\" #map></div> -->\n  <div class=\"content-map\">\n    <div class=\"ui grid content-play\">\n      <div class=\"column distance\">\n        <!-- <h5>Explora</h5>\n        <h3 id=\"km\">0</h3> -->\n        <h4>Explora</h4>\n      </div>\n    </div>\n    <div id=\"viewDiv\" #map></div>\n    <!-- <div class=\"chrono\">\n      <div class=\"time-elapsed\">\n        <h4>\n          Tiempo Recorrido\n        </h4>\n        <h2 id=time>{{_horas}}:{{_minutos}}:{{_segundos}}.{{_centesimas}}</h2>\n      </div>\n      <div class=\"calories-co2\">\n        <div class=\"calories\">\n          <h4>\n            Consumo de Calorías\n          </h4>\n          <h2>\n            0\n          </h2>\n          <h5>\n            Kcal\n          </h5>\n        </div>\n        <div class=\"co2\">\n          <h4>\n            CO2 Reducido\n          </h4>\n          <h2>\n            0\n          </h2>\n          <h5>\n            Kgr\n          </h5>\n        </div>\n      </div>\n      <div class=\"max-speed\">\n        <h4>\n          Velocidad Máxima\n        </h4>\n        <h2>\n          0\n        </h2>\n        <h5>\n          Km/h\n        </h5>\n      </div>\n    </div> -->\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=rute-rute-module-es2015.js.map