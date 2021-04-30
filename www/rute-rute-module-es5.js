(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rute-rute-module"], {
    /***/
    "4+Gx":
    /*!*************************************!*\
      !*** ./src/app/rute/rute.module.ts ***!
      \*************************************/

    /*! exports provided: RutePageModule */

    /***/
    function Gx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RutePageModule", function () {
        return RutePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _rute_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./rute-routing.module */
      "Of+G");
      /* harmony import */


      var _rute_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./rute.page */
      "oH3S");

      var RutePageModule = function RutePageModule() {
        _classCallCheck(this, RutePageModule);
      };

      RutePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _rute_routing_module__WEBPACK_IMPORTED_MODULE_5__["RutePageRoutingModule"]],
        declarations: [_rute_page__WEBPACK_IMPORTED_MODULE_6__["RutePage"]]
      })], RutePageModule);
      /***/
    },

    /***/
    "Of+G":
    /*!*********************************************!*\
      !*** ./src/app/rute/rute-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: RutePageRoutingModule */

    /***/
    function OfG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RutePageRoutingModule", function () {
        return RutePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _rute_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./rute.page */
      "oH3S");

      var routes = [{
        path: '',
        component: _rute_page__WEBPACK_IMPORTED_MODULE_3__["RutePage"]
      }];

      var RutePageRoutingModule = function RutePageRoutingModule() {
        _classCallCheck(this, RutePageRoutingModule);
      };

      RutePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RutePageRoutingModule);
      /***/
    },

    /***/
    "U/5e":
    /*!*************************************!*\
      !*** ./src/app/rute/rute.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function U5e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".logo-ekobike-in {\n  position: unset;\n  margin-bottom: 30px;\n  margin-top: 20px;\n}\n\n.content-map {\n  height: 100%;\n}\n\n#viewDiv {\n  padding: 0;\n  margin: 0;\n  height: 400px;\n  width: 100%;\n}\n\n.esri-view-width-xsmall .esri-expand--auto .esri-expand__container--expanded {\n  height: 34%;\n  background: #001434;\n}\n\n.esri-widget--button {\n  background-color: #f9b410 !important;\n  color: #001434 !important;\n}\n\n.esri-view .esri-directions {\n  position: fixed;\n  right: 15px;\n}\n\n.esri-view .esri-component.esri-attribution {\n  position: fixed;\n}\n\n.esri-search__suggestions-list > li {\n  padding: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcnV0ZS9ydXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0FBRUo7O0FBQUE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBR0o7O0FBREE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFGQTtFQUNJLG9DQUFBO0VBQ0EseUJBQUE7QUFLSjs7QUFIQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBTUo7O0FBSEE7RUFDSSxlQUFBO0FBTUo7O0FBSkE7RUFDSSxZQUFBO0FBT0oiLCJmaWxlIjoic3JjL2FwcC9ydXRlL3J1dGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28tZWtvYmlrZS1pbiB7XHJcbiAgICBwb3NpdGlvbjogdW5zZXQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uY29udGVudC1tYXB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuI3ZpZXdEaXYge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uZXNyaS12aWV3LXdpZHRoLXhzbWFsbCAuZXNyaS1leHBhbmQtLWF1dG8gLmVzcmktZXhwYW5kX19jb250YWluZXItLWV4cGFuZGVkIHtcclxuICAgIGhlaWdodDogMzQlO1xyXG4gICAgYmFja2dyb3VuZDogIzAwMTQzNDtcclxufVxyXG4uZXNyaS13aWRnZXQtLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjliNDEwICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzAwMTQzNCAhaW1wb3J0YW50O1xyXG59XHJcbi5lc3JpLXZpZXcgLmVzcmktZGlyZWN0aW9ucyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDogMTVweDtcclxufVxyXG5cclxuLmVzcmktdmlldyAuZXNyaS1jb21wb25lbnQuZXNyaS1hdHRyaWJ1dGlvbiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuLmVzcmktc2VhcmNoX19zdWdnZXN0aW9ucy1saXN0ID4gbGkge1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "oH3S":
    /*!***********************************!*\
      !*** ./src/app/rute/rute.page.ts ***!
      \***********************************/

    /*! exports provided: RutePage */

    /***/
    function oH3S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RutePage", function () {
        return RutePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_rute_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./rute.page.html */
      "rGEy");
      /* harmony import */


      var _rute_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./rute.page.scss */
      "U/5e");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage */
      "xgBC");
      /* harmony import */


      var esri_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! esri-loader */
      "r6rm");
      /* harmony import */


      var esri_loader__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(esri_loader__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _services_api_publibike_bienestar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/api-publibike-bienestar.service */
      "N/ei");

      var RutePage = /*#__PURE__*/function () {
        function RutePage(apiService, storage, loadingCtrl) {
          _classCallCheck(this, RutePage);

          this.apiService = apiService;
          this.storage = storage;
          this.loadingCtrl = loadingCtrl; //Variables ArcGIS

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
          this._distance = null; //Variables del cronometro

          this.horas = 0;
          this.centesimas = 0;
          this.minutos = 59;
          this.segundos = 0;
          this._centesimas = "00";
          this._minutos = "00";
          this._segundos = "00";
          this._horas = "00";
          this.isRun = false; //Array recorrido con las coordenadas

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

        _createClass(RutePage, [{
          key: "initializedMap",
          value: function initializedMap() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _yield$Object, _yield$Object2, _Map, MapView, Graphic, RouteTask, RouteParameters, FeatureSet, Directions, Locate, Track, Locator, Search, Expand, Legend, Point, Draw, geometryEngine, FeatureLayer, DistanceMeasurement2DViewModel, map, template, parkingLayer, customPoint, legend, lgExpand, routeTask, directions, bgExpand;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.prev = 0;
                      _context.next = 3;
                      return Object(esri_loader__WEBPACK_IMPORTED_MODULE_6__["loadModules"])(["esri/Map", "esri/views/MapView", "esri/Graphic", "esri/tasks/RouteTask", "esri/tasks/support/RouteParameters", "esri/tasks/support/FeatureSet", "esri/widgets/Directions", "esri/widgets/Locate", "esri/widgets/Track", "esri/tasks/Locator", "esri/widgets/Search", "esri/widgets/Expand", "esri/widgets/Legend", "esri/geometry/Point", "esri/views/draw/Draw", "esri/geometry/geometryEngine", "esri/layers/FeatureLayer", "esri/widgets/DistanceMeasurement2D/DistanceMeasurement2DViewModel"]);

                    case 3:
                      _yield$Object = _context.sent;
                      _yield$Object2 = _slicedToArray(_yield$Object, 18);
                      _Map = _yield$Object2[0];
                      MapView = _yield$Object2[1];
                      Graphic = _yield$Object2[2];
                      RouteTask = _yield$Object2[3];
                      RouteParameters = _yield$Object2[4];
                      FeatureSet = _yield$Object2[5];
                      Directions = _yield$Object2[6];
                      Locate = _yield$Object2[7];
                      Track = _yield$Object2[8];
                      Locator = _yield$Object2[9];
                      Search = _yield$Object2[10];
                      Expand = _yield$Object2[11];
                      Legend = _yield$Object2[12];
                      Point = _yield$Object2[13];
                      Draw = _yield$Object2[14];
                      geometryEngine = _yield$Object2[15];
                      FeatureLayer = _yield$Object2[16];
                      DistanceMeasurement2DViewModel = _yield$Object2[17];
                      // await this._platform.ready();
                      map = new _Map({
                        basemap: this._basemap
                      }); // Inflate and display the map

                      this._view = new MapView({
                        // create the map view at the DOM element in this component
                        container: this.mapEl.nativeElement,
                        center: this._center,
                        zoom: this._zoom,
                        map: map
                      });
                      template = {
                        title: "Cicloparqueadero",
                        content: [{
                          //Formato tipo fila
                          type: "fields",
                          //Sirve para proporcionar información en vistas y capas
                          fieldInfos: [{
                            fieldName: "COD_CICP",
                            visible: false,
                            label: "Codigo_Cicloparqueadero"
                          }, {
                            fieldName: "NOMBRE_CICP",
                            visible: true,
                            label: "Nombre"
                          }, {
                            fieldName: "HORARIO_CICP",
                            visible: true,
                            label: "Horario"
                          }, {
                            fieldName: "DIRECCION",
                            visible: true,
                            label: "Dirección"
                          }, {
                            fieldName: "LOCALIDAD",
                            visible: true,
                            label: "Localidad"
                          }, {
                            fieldName: "CUPOS",
                            visible: true,
                            label: "Cupos"
                          }, {
                            fieldName: "TIPOLOGIA_CICP",
                            visible: true,
                            label: "Servicio"
                          }, {
                            fieldName: "SELLO",
                            visible: false,
                            label: "SELLO_TIPO"
                          }]
                        }]
                      };
                      parkingLayer = new FeatureLayer({
                        url: "https://services2.arcgis.com/NEwhEo9GGSHXcRXV/arcgis/rest/services/Cicloparqueaderos_Certificados_Bogota_D_C/FeatureServer/0",
                        outFields: ["*"],
                        popupTemplate: template
                      });
                      map.add(parkingLayer);
                      customPoint = new FeatureLayer({
                        url: "https://serviciosgis.catastrobogota.gov.co/arcgis/rest/services/movilidad/cicloparqueadero/MapServer"
                      });
                      map.add(customPoint);
                      legend = new Legend({
                        view: this._view,
                        layerInfos: [{
                          layer: parkingLayer,
                          title: "Categoria Cicloparqueaderos"
                        }]
                      }); // this._view.ui.add(legend, "bottom-right");

                      lgExpand = new Expand({
                        view: this._view,
                        content: legend,
                        autoCollapse: false
                      });

                      this._view.ui.add(lgExpand, "bottom-right"); //Se configura y crea el widget de busqueda


                      this._search = new Search({
                        view: this._view
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
                        goToOverride: function goToOverride(view, options) {
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
                        goToOverride: function goToOverride(view, options) {
                          options.target.scale = 1500; // Override the default map scale

                          return view.goTo(options.target);
                        }
                      }); // this._view.ui.add(this._track, "top-left");

                      this._distance = new DistanceMeasurement2DViewModel({
                        view: this._view,
                        unit: "kilometers"
                      });
                      routeTask = new RouteTask({
                        // url: "https://utility.arcgis.com/usrsvcs/appservices/6MyWChEzkSbXMie3/rest/services/World/Route/NAServer/Route_World/solve"
                        url: "https://sig.simur.gov.co/arcgis/rest/services/MVI_REDBICI/NARedBici/NAServer/Principiante"
                      });
                      directions = new Directions({
                        view: this._view,
                        // routeServiceUrl: "https://utility.arcgis.com/usrsvcs/appservices/6MyWChEzkSbXMie3/rest/services/World/Route/NAServer/Route_World"
                        routeServiceUrl: "https://sig.simur.gov.co/arcgis/rest/services/MVI_REDBICI/NARedBici/NAServer/Principiante"
                      });
                      bgExpand = new Expand({
                        view: this._view,
                        content: directions,
                        autoCollapse: false
                      });

                      this._view.ui.add(bgExpand, "top-right");

                      _context.next = 48;
                      return this._view.when();

                    case 48:
                      return _context.abrupt("return", this._view);

                    case 51:
                      _context.prev = 51;
                      _context.t0 = _context["catch"](0);
                      console.log(_context.t0);

                    case 54:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[0, 51]]);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.storage.get("userData");

                    case 2:
                      this.user = _context3.sent;
                      this.initializedMap().then(function (mapView) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  console.log("mapView ready: ", this._view.ready);
                                  this._loaded = this._view.ready; // let position = await this._locate.locate();
                                  // console.log("position", position)
                                  // mapView.goTo({
                                  //   center: this._locate.locate(),
                                  //   zoom: 6,
                                  //   tilt: 40
                                  // })
                                  // this.loading.dismiss();

                                case 2:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2, this);
                        }));
                      });

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "startRute",
          value: function startRute() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this2 = this;

              var fechaActual, address, position, params, geocoder;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.clearWindows();

                      this._track.start();

                      _context5.next = 4;
                      return this._distance.start();

                    case 4:
                      console.log(this._distance);
                      fechaActual = new Date();
                      this.fecha = fechaActual;
                      console.log(this.fecha); //se toma la posicion y se geocodifica

                      _context5.next = 10;
                      return this._locate.locate();

                    case 10:
                      position = _context5.sent;
                      this._pointGC.latitude = position.coords.latitude;
                      this._pointGC.longitude = position.coords.longitude;
                      params = {
                        location: this._pointGC
                      };

                      this._track.on("track", function (position) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                          var ult;
                          return regeneratorRuntime.wrap(function _callee4$(_context4) {
                            while (1) {
                              switch (_context4.prev = _context4.next) {
                                case 0:
                                  this.recorrido.push(position);
                                  ult = this.recorrido.length - 1;

                                  if (this.recorrido.length > 1) {
                                    this.km = this.calculateDistance(this.recorrido[0].position.coords.longitude, this.recorrido[ult].position.coords.longitude, this.recorrido[0].position.coords.latitude, this.recorrido[ult].position.coords.latitude);
                                    console.log(this.km); // this.ingresos = this.km * this.user.campana_actual.pago_km;
                                  }

                                case 3:
                                case "end":
                                  return _context4.stop();
                              }
                            }
                          }, _callee4, this);
                        }));
                      });

                      geocoder = this._locator;
                      geocoder.locationToAddress(params).then(function (response) {
                        address = response.address;
                        console.log(address);
                        address = address.split(",");
                        _this2.fstDirection = address[0]; // this.currentDirection = address[0];
                        // this.km = position.coords.speed;
                        // console.log(this.currentDirection)
                      })["catch"](function (err) {
                        return console.log(err);
                      }); //Se inicializa el contador

                      this.contador = setInterval(function () {
                        _this2.centesimas += 1;
                        if (_this2.centesimas < 10) _this2._centesimas = "0" + _this2.centesimas;else _this2._centesimas = "" + _this2.centesimas;

                        if (_this2.centesimas == 10) {
                          _this2.centesimas = 0;
                          _this2.segundos += 1;
                          if (_this2.segundos < 10) _this2._segundos = "0" + _this2.segundos;else _this2._segundos = _this2.segundos + "";

                          if (_this2.segundos == 60) {
                            _this2.segundos = 0;
                            _this2.minutos += 1;
                            if (_this2.minutos < 10) _this2._minutos = "0" + _this2.minutos;else _this2._minutos = _this2.minutos + "";
                            _this2._segundos = "00";

                            if (_this2.minutos == 60) {
                              _this2.minutos = 0;
                              _this2.minutos += 1;
                              if (_this2.horas < 10) _this2._horas = "0" + _this2.horas;else _this2._horas = _this2.horas + "";
                              _this2._minutos = "00";
                            }
                          }
                        }
                      }, 100);

                    case 18:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "stopRute",
          value: function stopRute() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this3 = this;

              var address, position, params, geocoder;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.prev = 0;

                      if (this.isRun) {
                        _context6.next = 14;
                        break;
                      }

                      this._track.stop();

                      this.time = "".concat(this._horas, ":").concat(this._minutos, ":").concat(this._segundos, ".").concat(this._centesimas);
                      clearInterval(this.contador); // this.minutos = 0;
                      // this.segundos = 0;
                      // this.centesimas = 0;
                      // this.horas = 0;
                      // this._centesimas = '00';
                      // this._segundos = '00';
                      // this._minutos = '00';
                      // this._horas = '00';

                      this.isRun = false; // this.contador = null;
                      //se toma la posicion y se geocodifica

                      _context6.next = 8;
                      return this._locate.locate();

                    case 8:
                      position = _context6.sent;
                      this._pointGC.latitude = position.coords.latitude;
                      this._pointGC.longitude = position.coords.longitude;
                      params = {
                        location: this._pointGC
                      };
                      geocoder = this._locator;
                      geocoder.locationToAddress(params).then(function (response) {
                        address = response.address;
                        console.log(address);
                        address = address.split(",");
                        _this3.fnlDirection = address[0]; // this.currentDirection = address[0];
                        // console.log(this.currentDirection)

                        var kms = parseFloat(_this3.km);
                        var co2 = kms * 0.3;
                        _this3.co2 = co2.toFixed(3);
                        console.log("co2", typeof kms, _this3.co2);
                        _this3.ruteData = {
                          fecha: _this3.fecha,
                          inicio: _this3.fstDirection,
                          "final": _this3.fnlDirection,
                          tiempo: _this3.time,
                          kms: _this3.km,
                          cal: _this3.cal,
                          co2: _this3.co2,
                          ingresos: _this3.ingresos
                        };
                        console.log(_this3.ruteData);

                        _this3.apiService.sendRute(_this3.ruteData); // .then(()=>{this.loading.dismiss()});

                      })["catch"](function (err) {
                        return console.log(err);
                      });

                    case 14:
                      _context6.next = 19;
                      break;

                    case 16:
                      _context6.prev = 16;
                      _context6.t0 = _context6["catch"](0);
                      console.log(_context6.t0);

                    case 19:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this, [[0, 16]]);
            }));
          }
        }, {
          key: "calculateDistance",
          value: function calculateDistance(lon1, lon2, lat1, lat2) {
            var p = 0.017453292519943295;
            var c = Math.cos;
            var a = 0.5 - c((lat1 - lat2) * p) / 2 + c(lat2 * p) * c(lat1 * p) * (1 - c((lon1 - lon2) * p)) / 2;
            var dis = 12742 * Math.asin(Math.sqrt(a));
            return dis.toFixed(2);
          }
        }, {
          key: "clearWindows",
          value: function clearWindows() {
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
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.loadingCtrl.create({
                        cssClass: "my-custom-class",
                        message: "Cargando..."
                      });

                    case 2:
                      this.loading = _context7.sent;
                      _context7.next = 5;
                      return this.loading.present();

                    case 5:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "getIconByStatus",
          value: function getIconByStatus(status) {
            var icon = "";

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
        }]);

        return RutePage;
      }();

      RutePage.ctorParameters = function () {
        return [{
          type: _services_api_publibike_bienestar_service__WEBPACK_IMPORTED_MODULE_7__["ApiPublibikeBienestarService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }];
      };

      RutePage.propDecorators = {
        mapEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ["map"]
        }]
      };
      RutePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-rute",
        template: _raw_loader_rute_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_rute_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RutePage);
      /***/
    },

    /***/
    "rGEy":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rute/rute.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function rGEy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <div class=\"logo-ekobike-in\">    \n      <img src=\"assets/img/logo-ekobike.png\">\n  </div>\n    <!-- <div id=\"viewDiv\" #map></div> -->\n  <div class=\"content-map\">\n    <div class=\"ui grid content-play\">\n      <div class=\"column distance\">\n        <!-- <h5>Explora</h5>\n        <h3 id=\"km\">0</h3> -->\n        <h4>Explora</h4>\n      </div>\n    </div>\n    <div id=\"viewDiv\" #map></div>\n    <!-- <div class=\"chrono\">\n      <div class=\"time-elapsed\">\n        <h4>\n          Tiempo Recorrido\n        </h4>\n        <h2 id=time>{{_horas}}:{{_minutos}}:{{_segundos}}.{{_centesimas}}</h2>\n      </div>\n      <div class=\"calories-co2\">\n        <div class=\"calories\">\n          <h4>\n            Consumo de Calorías\n          </h4>\n          <h2>\n            0\n          </h2>\n          <h5>\n            Kcal\n          </h5>\n        </div>\n        <div class=\"co2\">\n          <h4>\n            CO2 Reducido\n          </h4>\n          <h2>\n            0\n          </h2>\n          <h5>\n            Kgr\n          </h5>\n        </div>\n      </div>\n      <div class=\"max-speed\">\n        <h4>\n          Velocidad Máxima\n        </h4>\n        <h2>\n          0\n        </h2>\n        <h5>\n          Km/h\n        </h5>\n      </div>\n    </div> -->\n  </div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=rute-rute-module-es5.js.map