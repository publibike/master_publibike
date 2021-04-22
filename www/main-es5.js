(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+XmF":
    /*!***************************************!*\
      !*** ./src/app/guards/login.guard.ts ***!
      \***************************************/

    /*! exports provided: LoginGuard */

    /***/
    function XmF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginGuard", function () {
        return LoginGuard;
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


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/storage */
      "xgBC");

      var LoginGuard = /*#__PURE__*/function () {
        function LoginGuard(storage, router) {
          _classCallCheck(this, LoginGuard);

          this.storage = storage;
          this.router = router;
        }

        _createClass(LoginGuard, [{
          key: "canActivate",
          value: function canActivate() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var isUserLoggedIn;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.storage.get('isUserLoggedIn');

                    case 2:
                      isUserLoggedIn = _context.sent;

                      if (!isUserLoggedIn) {
                        _context.next = 7;
                        break;
                      }

                      return _context.abrupt("return", true);

                    case 7:
                      this.router.navigateByUrl('/login');

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return LoginGuard;
      }();

      LoginGuard.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      LoginGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], LoginGuard);
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
<<<<<<< HEAD
      /*! C:\Users\ivanc\OneDrive\Escritorio\Trabajo\master_publibike\src\main.ts */
=======
<<<<<<< HEAD
      /*! /Users/imac/Desktop/master_publibike/src/main.ts */
=======
      /*! /Users/semilleroesricolombia/Documents/AndresLoto/Desarrollos independientes/publibike/master_publibike/src/main.ts */
>>>>>>> 0483196dac8c4cf92cd83002bc79eaf74e17696f
>>>>>>> eee3e90cb9d663b17dfe63088ee22256bfa28c60
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        publibikeApi: "https://plus.uflou.com.co" // publibikeApi: "http://localhost:3002"

      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "B46g":
    /*!***********************************************************************!*\
      !*** ./src/app/recognition-modal/recognition-modal-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: RecognitionModalPageRoutingModule */

    /***/
    function B46g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecognitionModalPageRoutingModule", function () {
        return RecognitionModalPageRoutingModule;
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


      var _recognition_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./recognition-modal.page */
      "u6bn");

      var routes = [{
        path: '',
        component: _recognition_modal_page__WEBPACK_IMPORTED_MODULE_3__["RecognitionModalPage"]
      }];

      var RecognitionModalPageRoutingModule = function RecognitionModalPageRoutingModule() {
        _classCallCheck(this, RecognitionModalPageRoutingModule);
      };

      RecognitionModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RecognitionModalPageRoutingModule);
      /***/
    },

    /***/
    "LePj":
    /*!*******************************************************!*\
      !*** ./src/app/map-modal/map-modal-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: MapModalPageRoutingModule */

    /***/
    function LePj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapModalPageRoutingModule", function () {
        return MapModalPageRoutingModule;
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


      var _map_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./map-modal.page */
      "O0P6");

      var routes = [{
        path: '',
        component: _map_modal_page__WEBPACK_IMPORTED_MODULE_3__["MapModalPage"]
      }];

      var MapModalPageRoutingModule = function MapModalPageRoutingModule() {
        _classCallCheck(this, MapModalPageRoutingModule);
      };

      MapModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MapModalPageRoutingModule);
      /***/
    },

    /***/
    "N/ei":
    /*!*************************************************************!*\
      !*** ./src/app/services/api-publibike-bienestar.service.ts ***!
      \*************************************************************/

    /*! exports provided: ApiPublibikeBienestarService */

    /***/
    function NEi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiPublibikeBienestarService", function () {
        return ApiPublibikeBienestarService;
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


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/storage */
      "xgBC");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var ApiPublibikeBienestarService = /*#__PURE__*/function () {
        function ApiPublibikeBienestarService(storage) {
          _classCallCheck(this, ApiPublibikeBienestarService);

          this.storage = storage;
        }

        _createClass(ApiPublibikeBienestarService, [{
          key: "getUserData",
          value: function getUserData(id) {
            try {
              var options = {
                method: 'GET',
                // body: JSON.stringify(id),
                headers: new Headers({
                  'Content-Type': 'application/json'
                })
              };
              return fetch("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].publibikeApi, "/api/movil/usuario/").concat(id), options).then(function (response) {
                return response.json();
              });
            } catch (error) {}
          }
        }, {
          key: "updateUser",
          value: function updateUser(userData) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var user, id, options;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.storage.get("userData").then(function (res) {
                        return res;
                      });

                    case 2:
                      user = _context2.sent;
                      console.log(userData);
                      id = user._id;
                      console.log(id);
                      options = {
                        method: 'PUT',
                        body: JSON.stringify(userData),
                        headers: new Headers({
                          'Content-Type': 'application/json'
                        })
                      };
                      _context2.next = 9;
                      return fetch("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].publibikeApi, "/api/movil/usuario/").concat(id), options).then(function (response) {
                        console.log(response.text());
                      })["catch"](function (error) {
                        return console.log(error);
                      });

                    case 9:
                      return _context2.abrupt("return", _context2.sent);

                    case 10:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getRecognitions",
          value: function getRecognitions(id) {
            return fetch("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].publibikeApi, "/api/movil/reconocimiento/").concat(id)).then(function (response) {
              return response.json();
            });
          }
        }, {
          key: "getUserRecognition",
          value: function getUserRecognition(id) {
            return fetch("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].publibikeApi, "/api/movil/usuario/").concat(id, "/reconocimientos")).then(function (response) {
              return response.json();
            });
          }
        }, {
          key: "getCompanyRecognitios",
          value: function getCompanyRecognitios(id) {
            return fetch("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].publibikeApi, "/api/movil/empresa/").concat(id, "/reconocimientos")).then(function (response) {
              return response.json();
            });
          }
        }, {
          key: "sendRute",
          value: function sendRute(ruteData) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var user, id, options;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.storage.get("userData").then(function (res) {
                        return res;
                      });

                    case 2:
                      user = _context3.sent;
                      console.log(ruteData);
                      id = user._id;
                      console.log(id);
                      options = {
                        method: 'PUT',
                        body: JSON.stringify(ruteData),
                        headers: new Headers({
                          'Content-Type': 'application/json'
                        })
                      };
                      _context3.next = 9;
                      return fetch("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].publibikeApi, "/api/movil/usuario/").concat(id, "/recorrido"), options).then(function (response) {
                        console.log("rutaResponde", response.text());
                      })["catch"](function (error) {
                        return console.log(error);
                      });

                    case 9:
                      return _context3.abrupt("return", _context3.sent);

                    case 10:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "sendCovidRisk",
          value: function sendCovidRisk(riesgo_covid) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var user, id, options;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.storage.get("userData").then(function (res) {
                        return res;
                      });

                    case 2:
                      user = _context4.sent;
                      id = user._id;
                      console.log(id);
                      options = {
                        method: 'PUT',
                        body: JSON.stringify(riesgo_covid),
                        headers: new Headers({
                          'Content-Type': 'application/json'
                        })
                      };
                      _context4.next = 8;
                      return fetch("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].publibikeApi, "/api/movil/usuario/").concat(id, "/riesgocovid"), options).then(function (response) {
                        console.log(response.text());
                      })["catch"](function (error) {
                        return console.log(error);
                      });

                    case 8:
                      return _context4.abrupt("return", _context4.sent);

                    case 9:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return ApiPublibikeBienestarService;
      }();

      ApiPublibikeBienestarService.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
        }];
      };

      ApiPublibikeBienestarService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ApiPublibikeBienestarService);
      /***/
    },

    /***/
    "NfN8":
    /*!***********************************************!*\
      !*** ./src/app/map-modal/map-modal.module.ts ***!
      \***********************************************/

    /*! exports provided: MapModalPageModule */

    /***/
    function NfN8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapModalPageModule", function () {
        return MapModalPageModule;
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


      var _map_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./map-modal-routing.module */
      "LePj");
      /* harmony import */


      var _map_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./map-modal.page */
      "O0P6");

      var MapModalPageModule = function MapModalPageModule() {
        _classCallCheck(this, MapModalPageModule);
      };

      MapModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _map_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["MapModalPageRoutingModule"]],
        declarations: [_map_modal_page__WEBPACK_IMPORTED_MODULE_6__["MapModalPage"]]
      })], MapModalPageModule);
      /***/
    },

    /***/
    "O0P6":
    /*!*********************************************!*\
      !*** ./src/app/map-modal/map-modal.page.ts ***!
      \*********************************************/

    /*! exports provided: MapModalPage */

    /***/
    function O0P6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapModalPage", function () {
        return MapModalPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_map_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./map-modal.page.html */
      "St+6");
      /* harmony import */


      var _map_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./map-modal.page.scss */
      "Qb6g");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/storage */
      "xgBC");
      /* harmony import */


      var _services_api_publibike_bienestar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/api-publibike-bienestar.service */
      "N/ei");
      /* harmony import */


      var esri_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! esri-loader */
      "r6rm");
      /* harmony import */


      var esri_loader__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(esri_loader__WEBPACK_IMPORTED_MODULE_8__); // import { type } from 'os';


      var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"],
          App = _capacitor_core__WEBP.App,
          BackgroundTask = _capacitor_core__WEBP.BackgroundTask;

      var MapModalPage = /*#__PURE__*/function () {
        function MapModalPage(apiService, storage, loadingCtrl, modalController, alertController) {
          _classCallCheck(this, MapModalPage);

          this.apiService = apiService;
          this.storage = storage;
          this.loadingCtrl = loadingCtrl;
          this.modalController = modalController;
          this.alertController = alertController; //Variables ArcGIS

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
          this.isRun = false;
          this.urlButton = "button-start-29.png"; //Array recorrido con las coordenadas

          this.recorrido = [];
          this.user = {
            nombre: "",
            apellido: "",
            ganancia_total: 0,
            km_total: 0,
            cal_total: 0,
            co2_total: 0,
            peso: 0
          };
          this.ruteData = {};
          this.flagCovid = 0;
          this.km = 0.0;
          this.ingresos = 0;
          this.cal = 0;
          this.co2 = 0;
          this.vel = 0;
          this.riesgo_covid = 0;
        }

        _createClass(MapModalPage, [{
          key: "initializedMap",
          value: function initializedMap() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _yield$Object, _yield$Object2, _Map, MapView, Graphic, RouteTask, RouteParameters, FeatureSet, Directions, Locate, Track, Locator, LocatorSearchSource, Expand, Point, Draw, geometryEngine, FeatureLayer, DistanceMeasurement2DViewModel, map, customPoint, routeTask, directions, bgExpand;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.prev = 0;
                      _context5.next = 3;
                      return Object(esri_loader__WEBPACK_IMPORTED_MODULE_8__["loadModules"])(["esri/Map", "esri/views/MapView", "esri/Graphic", "esri/tasks/RouteTask", "esri/tasks/support/RouteParameters", "esri/tasks/support/FeatureSet", "esri/widgets/Directions", "esri/widgets/Locate", "esri/widgets/Track", "esri/tasks/Locator", "esri/widgets/Search/LocatorSearchSource", "esri/widgets/Expand", "esri/geometry/Point", "esri/views/draw/Draw", "esri/geometry/geometryEngine", "esri/layers/FeatureLayer", "esri/widgets/DistanceMeasurement2D/DistanceMeasurement2DViewModel"]);

                    case 3:
                      _yield$Object = _context5.sent;
                      _yield$Object2 = _slicedToArray(_yield$Object, 17);
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
                      LocatorSearchSource = _yield$Object2[10];
                      Expand = _yield$Object2[11];
                      Point = _yield$Object2[12];
                      Draw = _yield$Object2[13];
                      geometryEngine = _yield$Object2[14];
                      FeatureLayer = _yield$Object2[15];
                      DistanceMeasurement2DViewModel = _yield$Object2[16];
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
                      }); // const parkingLayer = new FeatureLayer({
                      //   url: "https://services2.arcgis.com/NEwhEo9GGSHXcRXV/arcgis/rest/services/Cicloparqueaderos_Certificados_Bogota_D_C/FeatureServer/0"
                      // })

                      customPoint = new FeatureLayer({
                        url: "https://serviciosgis.catastrobogota.gov.co/arcgis/rest/services/movilidad/cicloparqueadero/MapServer"
                      }); // map.add(parkingLayer);

                      map.add(customPoint); //Se configura y crea el widget de busqueda

                      this._search = new LocatorSearchSource({
                        view: this._view
                      });
                      this._locator = new Locator({
                        url: "https://utility.arcgis.com/usrsvcs/appservices/0M4tNdkWcjbSCK2Z/rest/services/World/GeocodeServer/reverseGeocode"
                      });
                      this._locate = new Locate({
                        view: this._view,
                        useHeadingEnabled: false,
                        goToOverride: function goToOverride(view, options) {
                          options.target.scale = 1500; // Override the default map scale

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
                        useHeadingEnabled: true,
                        goToOverride: function goToOverride(view, options) {
                          options.target.scale = 1500; // Override the default map scale

                          return view.goTo(options.target);
                        }
                      });

                      this._view.ui.add(this._track, "top-left");

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
                        routeServiceUrl: "https://sig.simur.gov.co/arcgis/rest/services/MVI_REDBICI/NARedBici/NAServer/Avanzado"
                      });
                      bgExpand = new Expand({
                        view: this._view,
                        content: directions,
                        autoCollapse: false
                      });

                      this._view.ui.add(bgExpand, "top-right");

                      _context5.next = 41;
                      return this._view.when();

                    case 41:
                      return _context5.abrupt("return", this._view);

                    case 44:
                      _context5.prev = 44;
                      _context5.t0 = _context5["catch"](0);
                      console.log(_context5.t0);

                    case 47:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this, [[0, 44]]);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      this.presentLoading();
                      _context7.next = 3;
                      return this.storage.get("userData");

                    case 3:
                      this.user = _context7.sent;
                      console.log(this.user); //se usa localizacion en segundo plano

                      this.initializedMap().then(function (mapView) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                          var position;
                          return regeneratorRuntime.wrap(function _callee6$(_context6) {
                            while (1) {
                              switch (_context6.prev = _context6.next) {
                                case 0:
                                  console.log("mapView ready: ", this._view.ready);
                                  this._loaded = this._view.ready;
                                  _context6.next = 4;
                                  return this._locate.locate();

                                case 4:
                                  position = _context6.sent;
                                  console.log("position", position);
                                  mapView.goTo({
                                    center: this._locate.locate(),
                                    zoom: 6,
                                    tilt: 40
                                  });
                                  this.loading.dismiss();

                                case 8:
                                case "end":
                                  return _context6.stop();
                              }
                            }
                          }, _callee6, this);
                        }));
                      });

                    case 6:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "startRute",
          value: function startRute() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var _this2 = this;

              var fechaActual, address, position, params, geocoder;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      this.km = 0;
                      this.cal = 0;
                      this.co2 = 0;
                      this.vel = 0;
                      this.isRun = true;
                      this.urlButton = "button-stop-29.png";
                      this.clearWindows();

                      this._track.start(); // await this._distance.start();
                      // console.log(this._distance)


                      fechaActual = new Date();
                      this.fecha = fechaActual;
                      console.log(this.fecha); //se toma la posicion y se geocodifica

                      _context11.next = 13;
                      return this._locate.locate();

                    case 13:
                      position = _context11.sent;
                      console.log(position);
                      this._pointGC.latitude = position.coords.latitude;
                      this._pointGC.longitude = position.coords.longitude;
                      params = {
                        location: this._pointGC
                      }; //cálculo de distancia cuando se esta en movimiento

                      this._track.on("track", function (position) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                          var _this3 = this;

                          var ult, kmTemporal, totalMin;
                          return regeneratorRuntime.wrap(function _callee10$(_context10) {
                            while (1) {
                              switch (_context10.prev = _context10.next) {
                                case 0:
                                  console.log("Estado app", App.getState()); //Funcion que evalua si se entra en Background

                                  App.addListener("appStateChange", function (state) {
                                    console.log("state", state); //Si el estado es inactivo se continua con el el tracking

                                    if (!state.isActive) {
                                      console.log("state", state);
                                      var taskId = BackgroundTask.beforeExit(function () {
                                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                                          var _this4 = this;

                                          return regeneratorRuntime.wrap(function _callee9$(_context9) {
                                            while (1) {
                                              switch (_context9.prev = _context9.next) {
                                                case 0:
                                                  this._track.on("track", function (position) {
                                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                                                      var ult, kmTemporal, totalMin;
                                                      return regeneratorRuntime.wrap(function _callee8$(_context8) {
                                                        while (1) {
                                                          switch (_context8.prev = _context8.next) {
                                                            case 0:
                                                              this.recorrido.push(position);
                                                              this.positionAct = position.position;
                                                              console.log("posicion ".concat(this.recorrido.length), this.recorrido);
                                                              console.log("vel", position.position.coords.speed);
                                                              this.vel = position.position.coords.speed; // this.riesgoCovid(this.vel);

                                                              this.riesgoCovid(51);
                                                              console.log('SISA WENTOR ------------------------------------------------------>');
                                                              ult = this.recorrido.length - 1;

                                                              if (this.recorrido.length == 1) {
                                                                this.km = this.calculateDistance(this.recorrido[0].position.coords.longitude, this.recorrido[ult].position.coords.longitude, this.recorrido[0].position.coords.latitude, this.recorrido[ult].position.coords.latitude);
                                                              } else if (this.recorrido.length > 1) {
                                                                kmTemporal = this.km;
                                                                this.km = this.calculateDistance(this.recorrido[ult - 1].position.coords.longitude, this.recorrido[ult].position.coords.longitude, this.recorrido[ult - 1].position.coords.latitude, this.recorrido[ult].position.coords.latitude);
                                                                this.km = kmTemporal + this.km;
                                                                this.co2 = this.km * 0.3;
                                                                totalMin = parseInt(this._horas) * 60 + parseInt(this._minutos) + parseInt(this._segundos) * 0.0166667;
                                                                console.log(totalMin);
                                                                this.cal = 0.071 * (this.user.peso * 2.2) * totalMin;
                                                                console.log(this.km);
                                                              }

                                                            case 9:
                                                            case "end":
                                                              return _context8.stop();
                                                          }
                                                        }
                                                      }, _callee8, this);
                                                    }));
                                                  });

                                                  BackgroundTask.finish({
                                                    taskId: taskId
                                                  });

                                                case 2:
                                                case "end":
                                                  return _context9.stop();
                                              }
                                            }
                                          }, _callee9, this);
                                        }));
                                      });
                                    }
                                  });
                                  this.recorrido.push(position);
                                  this.positionAct = position.position;
                                  console.log("posicion ".concat(this.recorrido.length), this.recorrido);
                                  console.log("vel", position.position.coords.speed);
                                  this.vel = position.position.coords.speed;
                                  this.riesgoCovid(this.vel);
                                  ult = this.recorrido.length - 1;

                                  if (this.recorrido.length == 1) {
                                    this.km = this.calculateDistance(this.recorrido[0].position.coords.longitude, this.recorrido[ult].position.coords.longitude, this.recorrido[0].position.coords.latitude, this.recorrido[ult].position.coords.latitude);
                                  } else if (this.recorrido.length > 1) {
                                    kmTemporal = this.km;
                                    this.km = this.calculateDistance(this.recorrido[ult - 1].position.coords.longitude, this.recorrido[ult].position.coords.longitude, this.recorrido[ult - 1].position.coords.latitude, this.recorrido[ult].position.coords.latitude);
                                    this.km = kmTemporal + this.km;
                                    this.co2 = this.km * 0.3;
                                    totalMin = parseInt(this._horas) * 60 + parseInt(this._minutos) + parseInt(this._segundos) * 0.0166667;
                                    console.log(totalMin);
                                    this.cal = 0.071 * (this.user.peso * 2.2) * totalMin;
                                    console.log(this.km);
                                  }

                                case 10:
                                case "end":
                                  return _context10.stop();
                              }
                            }
                          }, _callee10, this);
                        }));
                      });

                      geocoder = this._locator;
                      geocoder.locationToAddress(params).then(function (response) {
                        address = response.address;
                        console.log(address);
                        address = address.split(",");
                        _this2.fstDirection = address[0];
                        _this2.fstPosition = params;
                      })["catch"](function (err) {
                        return console.log(err);
                      }); //Se inicializa el contador

                      this.startCounter();

                    case 22:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "stopRute",
          value: function stopRute() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var _this5 = this;

              var address, position, params, geocoder;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.prev = 0;

                      if (!this.isRun) {
                        _context12.next = 16;
                        break;
                      }

                      this._track.stop();

                      this.time = "".concat(this._horas, ":").concat(this._minutos, ":").concat(this._segundos, ".").concat(this._centesimas);
                      console.log(this.time);
                      clearInterval(this.contador);
                      this.isRun = false; // this.contador = null;
                      //se toma la posicion y se geocodifica

                      _context12.next = 9;
                      return this._locate.locate();

                    case 9:
                      position = _context12.sent;
                      console.log(position);
                      this._pointGC.latitude = position.coords.latitude;
                      this._pointGC.longitude = position.coords.longitude; // this.vel = position.coords.speed;
                      // this.vel= this.vel.toFixed(2);

                      params = {
                        location: this._pointGC
                      };
                      geocoder = this._locator; //Se obtiene la posición actual

                      geocoder.locationToAddress(params).then(function (response) {
                        address = response.address; // console.log(address);

                        address = address.split(",");
                        _this5.fnlDirection = address[0];
                        _this5.fnlPosition = params;
                        var kms = _this5.km;
                        var cal = _this5.cal;
                        var co2 = _this5.co2; // co2 = kms * 0.3;

                        var totalMin = parseInt(_this5._horas) * 60 + parseInt(_this5._minutos) + parseInt(_this5._segundos) * 0.0166667;
                        _this5.ruteData = {
                          fecha: _this5.fecha,
                          inicio: _this5.fstDirection,
                          inicioGeo: _this5.fstPosition,
                          "final": _this5.fnlDirection,
                          finalGeo: _this5.fnlPosition,
                          tiempo: _this5.time,
                          minutos: totalMin,
                          kms: kms,
                          cal: _this5.cal,
                          co2: _this5.co2,
                          riesgo_covid: _this5.riesgo_covid
                        };
                        console.log("ruteData", _this5.ruteData);

                        _this5.apiService.sendRute(_this5.ruteData); // .then(()=>{this.loading.dismiss()});


                        _this5.flagCovid = 0;
                        _this5.recorrido = [];
                      })["catch"](function (err) {
                        return console.log(err);
                      });

                    case 16:
                      _context12.next = 21;
                      break;

                    case 18:
                      _context12.prev = 18;
                      _context12.t0 = _context12["catch"](0);
                      console.log(_context12.t0);

                    case 21:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this, [[0, 18]]);
            }));
          }
        }, {
          key: "calculateDistance",
          value: function calculateDistance(lon1, lon2, lat1, lat2) {
            var p = 0.017453292519943295;
            var c = Math.cos;
            var a = 0.5 - c((lat1 - lat2) * p) / 2 + c(lat2 * p) * c(lat1 * p) * (1 - c((lon1 - lon2) * p)) / 2;
            var dis = 12742 * Math.asin(Math.sqrt(a));
            console.log(typeof dis);
            return dis;
          }
        }, {
          key: "startCounter",
          value: function startCounter() {
            var _this6 = this;

            this.contador = setInterval(function () {
              _this6.centesimas += 1;
              if (_this6.centesimas < 10) _this6._centesimas = "0" + _this6.centesimas;else _this6._centesimas = "" + _this6.centesimas;

              if (_this6.centesimas == 10) {
                _this6.centesimas = 0;
                _this6.segundos += 1;
                if (_this6.segundos < 10) _this6._segundos = "0" + _this6.segundos;else _this6._segundos = _this6.segundos + "";

                if (_this6.segundos == 60) {
                  _this6.segundos = 0;
                  _this6.minutos += 1;
                  if (_this6.minutos < 10) _this6._minutos = "0" + _this6.minutos;else _this6._minutos = _this6.minutos + "";
                  _this6._segundos = "00";

                  if (_this6.minutos == 60) {
                    _this6.minutos = 0;
                    _this6.minutos += 1;
                    if (_this6.horas < 10) _this6._horas = "0" + _this6.horas;else _this6._horas = _this6.horas + "";
                    _this6._minutos = "00";
                  }
                }
              }
            }, 100);
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return this.loadingCtrl.create({
                        cssClass: "my-custom-class",
                        message: "Cargando..."
                      });

                    case 2:
                      this.loading = _context13.sent;
                      _context13.next = 5;
                      return this.loading.present();

                    case 5:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }, {
          key: "logEvent",
          value: function logEvent(event) {
            console.log(event.target);
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.next = 2;
                      return this.modalController.dismiss();

                    case 2:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "riesgoCovid",
          value: function riesgoCovid(vel) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var alert;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      if (!(vel > 50)) {
                        _context15.next = 11;
                        break;
                      }

                      //Bandera para activar el riesgo
                      this.flagCovid += 1;

                      if (!(this.flagCovid >= 10)) {
                        _context15.next = 11;
                        break;
                      }

                      _context15.next = 5;
                      return this.alertController.create({
                        cssClass: "my-custom-class",
                        header: "Atención",
                        subHeader: "¿Estas movilizandote en?",
                        message: "Te recomendamos aguardar el distanciamiento social y las medidas de protección necesarias",
                        inputs: [{
                          name: "radio1",
                          type: "radio",
                          label: "Vehiculo Particular",
                          value: "Vehiculo_Particular",
                          checked: true
                        }, {
                          name: "radio2",
                          type: "radio",
                          label: "Taxi,Uber,Beat,...",
                          value: "Vehiculo_independiente"
                        }, {
                          name: "radio3",
                          type: "radio",
                          label: "Transporte Público",
                          value: "Transporte_Publico"
                        }],
                        buttons: [{
                          text: "Ok"
                        }]
                      });

                    case 5:
                      alert = _context15.sent;
                      _context15.next = 8;
                      return alert.present();

                    case 8:
                      this.riesgo_covid = 60;
                      _context15.next = 11;
                      return this.apiService.sendCovidRisk(this.riesgo_covid);

                    case 11:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          }
        }]);

        return MapModalPage;
      }();

      MapModalPage.ctorParameters = function () {
        return [{
          type: _services_api_publibike_bienestar_service__WEBPACK_IMPORTED_MODULE_7__["ApiPublibikeBienestarService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      MapModalPage.propDecorators = {
        mapEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ["map"]
        }]
      };
      MapModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-map-modal",
        template: _raw_loader_map_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_map_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MapModalPage);
      /***/
    },

    /***/
    "Qb6g":
    /*!***********************************************!*\
      !*** ./src/app/map-modal/map-modal.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function Qb6g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".logo-ekobike-in {\n  position: unset;\n  margin-bottom: 30px;\n  margin-top: 20px;\n}\n\n.content-map {\n  height: 104%;\n}\n\n#viewDiv {\n  padding: 0;\n  margin: 0;\n  height: 340px;\n  width: 100%;\n}\n\n.esri-view-width-xsmall .esri-expand--auto .esri-expand__container--expanded {\n  height: 34%;\n  background: #001434;\n}\n\n.esri-widget--button {\n  background-color: #f9b410 !important;\n  color: #001434 !important;\n}\n\n.esri-view .esri-directions {\n  position: fixed;\n  right: 15px;\n}\n\n.esri-view .esri-component.esri-attribution {\n  position: fixed;\n}\n\n.esri-search__suggestions-list > li {\n  padding: 1em;\n}\n\n.play {\n  height: 40px;\n  width: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwLW1vZGFsL21hcC1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtBQUVKOztBQUFBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FBSUo7O0FBRkE7RUFDSSxvQ0FBQTtFQUNBLHlCQUFBO0FBS0o7O0FBSEE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQU1KOztBQUhBO0VBQ0ksZUFBQTtBQU1KOztBQUpBO0VBQ0ksWUFBQTtBQU9KOztBQUxBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFRSiIsImZpbGUiOiJzcmMvYXBwL21hcC1tb2RhbC9tYXAtbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28tZWtvYmlrZS1pbiB7XG4gICAgcG9zaXRpb246IHVuc2V0O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5jb250ZW50LW1hcHtcbiAgICBoZWlnaHQ6IDEwNCU7XG59XG4jdmlld0RpdiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiAzNDBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5lc3JpLXZpZXctd2lkdGgteHNtYWxsIC5lc3JpLWV4cGFuZC0tYXV0byAuZXNyaS1leHBhbmRfX2NvbnRhaW5lci0tZXhwYW5kZWQge1xuICAgIGhlaWdodDogMzQlO1xuICAgIGJhY2tncm91bmQ6ICMwMDE0MzQ7XG59XG4uZXNyaS13aWRnZXQtLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5YjQxMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMDAxNDM0ICFpbXBvcnRhbnQ7XG59XG4uZXNyaS12aWV3IC5lc3JpLWRpcmVjdGlvbnMge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMTVweDtcbn1cblxuLmVzcmktdmlldyAuZXNyaS1jb21wb25lbnQuZXNyaS1hdHRyaWJ1dGlvbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xufVxuLmVzcmktc2VhcmNoX19zdWdnZXN0aW9ucy1saXN0ID4gbGkge1xuICAgIHBhZGRpbmc6IDFlbTtcbn1cbi5wbGF5e1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "St+6":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/map-modal/map-modal.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function St6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"secondary\" (click)=\"closeModal()\">Cerrar</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"logo-ekobike-in\">\r\n    <img src=\"assets/img/logo-ekobike.png\">\r\n  </div>\r\n  <!-- <div id=\"viewDiv\" #map></div> -->\r\n  <div class=\"content-map\">\r\n    <div class=\"ui grid content-play\">\r\n      <div class=\"column distance\">\r\n        <h5>Distancia Recorrida</h5>\r\n        <h3 id=\"km\">{{km | number}}</h3>\r\n        <h4> Km</h4>\r\n      </div>\r\n    </div>\r\n    <div id=\"viewDiv\" #map></div>\r\n    <div class=\"chrono\">\r\n      <div class=\"time-elapsed\">\r\n        <h4>\r\n          Tiempo Recorrido\r\n        </h4>\r\n        <h2 id=time>{{_horas}}:{{_minutos}}:{{_segundos}}.{{_centesimas}}</h2>\r\n      </div>\r\n      <div class=\"calories-co2\">\r\n        <div class=\"calories\">\r\n          <h4>\r\n            Consumo de Calorías\r\n          </h4>\r\n          <h2>\r\n            {{cal | number}}\r\n          </h2>\r\n          <h5>Kcal</h5>\r\n        </div>\r\n        <div class=\"co2\">\r\n          <h4>CO2 Reducido</h4>\r\n          <h2>\r\n            {{co2 | number}}\r\n          </h2>\r\n          <h5>Kgr</h5>\r\n        </div>\r\n      </div>\r\n      <div class=\"max-speed\">\r\n        <h4>\r\n          Velocidad Máxima\r\n        </h4>\r\n        <h2>\r\n          {{vel}}\r\n        </h2>\r\n        <h5>Km/h</h5>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n<ion-footer color=\"primary\">\r\n  <ion-toolbar>\r\n    <img class=\"play\" src=\"assets/img/button-start-29.png\" (click)=\"startRute()\" *ngIf=\"!isRun\">\r\n    <img class=\"play\" src=\"assets/img/button-stop-29.png\" (click)=\"stopRute()\" *ngIf=\"isRun\">\r\n    <!-- <ion-buttons slot=\"end\">\r\n      <ion-button shape=\"round\" color=\"secondary\" >\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-footer>";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "y2f/");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "p74H");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT"); // Events (iOS only)


      window.addEventListener('statusTap', function () {
        console.log("statusbar tapped");
      });
      var StatusBarCap = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"].StatusBarCap;

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this7 = this;

            this.platform.ready().then(function () {
              _this7.statusBar.styleDefault();

              _this7.statusBar.hide();

              _this7.splashScreen.hide();

              StatusBarCap.hide();
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "UO2D":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recognition-modal/recognition-modal.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function UO2D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header color=\"primary\">\n  <ion-toolbar>\n    <ion-title color=\"secondary\">{{categoria}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"secondary\" (click)=\"closeModal()\">Cerrar</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"background-modal\">\n  <div class=\"logo-ekobike-in\">\n    <img src=\"assets/img/logo-ekobike.png\">\n  </div>\n  <ion-list>\n    <ion-item>\n      <ion-label>\n        <h2>Nombre: </h2>\n        <p>{{ data.nombre }}</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h2>Establecimiento: </h2>\n        <p>{{ data.establecimiento }}</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h2>Beneficio: </h2>\n        <p>{{ data.beneficio }}</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h2>Meta en km para activar: </h2>\n        <p>{{ data.activacion_km }}</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h2>Estado: </h2>\n        <p>{{ data.estado  ? 'Activo' : 'Bloqueado' }}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>";
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n";
      /***/
    },

    /***/
    "YCkW":
    /*!***************************************************************!*\
      !*** ./src/app/recognition-modal/recognition-modal.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function YCkW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "h2 {\n  font-size: 15px;\n  color: var(--ion-color-secondary);\n}\n\np {\n  font-size: 15px;\n  color: var(--ion-color-tertiary);\n}\n\n.logo-ekobike-in {\n  position: unset;\n  margin-bottom: 30px;\n  margin-top: 20px;\n}\n\nion-content {\n  --background-image: url('background-ekobike.jpg') no-repeat fixed center;\n}\n\napp-recognition-modal {\n  background-image: var(--ion-background-image);\n}\n\n.background-modal {\n  --background-image: url('background-ekobike.jpg') no-repeat fixed center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjb2duaXRpb24tbW9kYWwvcmVjb2duaXRpb24tbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGlDQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsZ0NBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBR0o7O0FBREE7RUFDSSx3RUFBQTtBQUlKOztBQUZBO0VBQ0ksNkNBQUE7QUFLSjs7QUFIQTtFQUNJLHdFQUFBO0FBTUoiLCJmaWxlIjoic3JjL2FwcC9yZWNvZ25pdGlvbi1tb2RhbC9yZWNvZ25pdGlvbi1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbnAge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn1cbi5sb2dvLWVrb2Jpa2UtaW4ge1xuICAgIHBvc2l0aW9uOiB1bnNldDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5pb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2JhY2tncm91bmQtZWtvYmlrZS5qcGdcIikgbm8tcmVwZWF0IGZpeGVkIGNlbnRlcjtcbn1cbmFwcC1yZWNvZ25pdGlvbi1tb2RhbHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1pb24tYmFja2dyb3VuZC1pbWFnZSk7XG59XG4uYmFja2dyb3VuZC1tb2RhbHtcbiAgICAtLWJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvYmFja2dyb3VuZC1la29iaWtlLmpwZ1wiKSBuby1yZXBlYXQgZml4ZWQgY2VudGVyO1xufVxuIl19 */";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "y2f/");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "p74H");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/storage */
      "xgBC");
      /* harmony import */


      var _recognition_modal_recognition_modal_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./recognition-modal/recognition-modal.module */
      "lFiN");
      /* harmony import */


      var _map_modal_map_modal_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./map-modal/map-modal.module */
      "NfN8");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _recognition_modal_recognition_modal_module__WEBPACK_IMPORTED_MODULE_10__["RecognitionModalPageModule"], _map_modal_map_modal_module__WEBPACK_IMPORTED_MODULE_11__["MapModalPageModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["IonicStorageModule"].forRoot()],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "cu8M":
    /*!***************************************!*\
      !*** ./src/app/guards/intro.guard.ts ***!
      \***************************************/

    /*! exports provided: IntroGuard */

    /***/
    function cu8M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IntroGuard", function () {
        return IntroGuard;
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


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/storage */
      "xgBC");

      var IntroGuard = /*#__PURE__*/function () {
        function IntroGuard(storage, router) {
          _classCallCheck(this, IntroGuard);

          this.storage = storage;
          this.router = router;
        }

        _createClass(IntroGuard, [{
          key: "canActivate",
          value: function canActivate() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var isIntroShowed;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      _context16.next = 2;
                      return this.storage.get("isIntroShowed");

                    case 2:
                      isIntroShowed = _context16.sent;

                      if (!isIntroShowed) {
                        _context16.next = 7;
                        break;
                      }

                      return _context16.abrupt("return", true);

                    case 7:
                      this.router.navigateByUrl("intro");

                    case 8:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          }
        }]);

        return IntroGuard;
      }();

      IntroGuard.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      IntroGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], IntroGuard);
      /***/
    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "lFiN":
    /*!***************************************************************!*\
      !*** ./src/app/recognition-modal/recognition-modal.module.ts ***!
      \***************************************************************/

    /*! exports provided: RecognitionModalPageModule */

    /***/
    function lFiN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecognitionModalPageModule", function () {
        return RecognitionModalPageModule;
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


      var _recognition_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./recognition-modal-routing.module */
      "B46g");
      /* harmony import */


      var _recognition_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./recognition-modal.page */
      "u6bn");

      var RecognitionModalPageModule = function RecognitionModalPageModule() {
        _classCallCheck(this, RecognitionModalPageModule);
      };

      RecognitionModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _recognition_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecognitionModalPageRoutingModule"]],
        declarations: [_recognition_modal_page__WEBPACK_IMPORTED_MODULE_6__["RecognitionModalPage"]]
      })], RecognitionModalPageModule);
      /***/
    },

    /***/
    "u6bn":
    /*!*************************************************************!*\
      !*** ./src/app/recognition-modal/recognition-modal.page.ts ***!
      \*************************************************************/

    /*! exports provided: RecognitionModalPage */

    /***/
    function u6bn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecognitionModalPage", function () {
        return RecognitionModalPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_recognition_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./recognition-modal.page.html */
      "UO2D");
      /* harmony import */


      var _recognition_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./recognition-modal.page.scss */
      "YCkW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");

      var RecognitionModalPage = /*#__PURE__*/function () {
        function RecognitionModalPage(navParams, modalController) {
          _classCallCheck(this, RecognitionModalPage);

          this.navParams = navParams;
          this.modalController = modalController;
        }

        _createClass(RecognitionModalPage, [{
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.categoria = this.navParams.data.categoria;
            this.data = this.navParams.data.data;
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      _context17.next = 2;
                      return this.modalController.dismiss();

                    case 2:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RecognitionModalPage;
      }();

      RecognitionModalPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      RecognitionModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-recognition-modal',
        template: _raw_loader_recognition_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_recognition_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RecognitionModalPage);
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _guards_intro_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./guards/intro.guard */
      "cu8M");
      /* harmony import */


      var _guards_login_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./guards/login.guard */
      "+XmF");

      var routes = [{
        path: '',
        redirectTo: 'intro',
        pathMatch: 'full'
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | login-login-module */
          "login-login-module").then(__webpack_require__.bind(null,
          /*! ./login/login.module */
          "X3zk")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'tabs',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tabs-tabs-module */
          "tabs-tabs-module").then(__webpack_require__.bind(null,
          /*! ./tabs/tabs.module */
          "hO9l")).then(function (m) {
            return m.TabsPageModule;
          });
        },
        canActivate: [_guards_intro_guard__WEBPACK_IMPORTED_MODULE_3__["IntroGuard"], _guards_login_guard__WEBPACK_IMPORTED_MODULE_4__["LoginGuard"]]
      }, {
        path: 'recognition-modal',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./recognition-modal/recognition-modal.module */
          "lFiN")).then(function (m) {
            return m.RecognitionModalPageModule;
          });
        }
      }, {
        path: 'map-modal',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./map-modal/map-modal.module */
          "NfN8")).then(function (m) {
            return m.MapModalPageModule;
          });
        }
      }, {
        path: 'intro',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | intro-intro-module */
          "intro-intro-module").then(__webpack_require__.bind(null,
          /*! ./intro/intro.module */
          "PQfJ")).then(function (m) {
            return m.IntroPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-modal {\n  --ion-background-image: url('background-ekobike.jpg') no-repeat fixed center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUZBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tb2RhbHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvaW1nL2JhY2tncm91bmQtZWtvYmlrZS5qcGdcIikgbm8tcmVwZWF0IGZpeGVkIGNlbnRlciAhaW1wb3J0YW50O1xufVxuIl19 */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "wAiw");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map