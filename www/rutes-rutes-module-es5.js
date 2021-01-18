(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rutes-rutes-module"], {
    /***/
    "Gohq":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rutes/rutes.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function Gohq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"logo-publibike-in\">\n    <img src=\"assets/img/logo-ekobike.png\">\n  </div>\n  <div class=\"title-publibike\">\n    <h2>TUS RECORRIDOS</h2>\n  </div>\n  <div class=\"table-routes\">\n    <div class=\"table-routes-content\">\n      <div class=\"row header-table\">\n        <div class=\"route-column\">Fecha</div>\n        <div class=\"route-column\">Inicio</div>\n        <div class=\"route-column\">Final</div>\n        <div class=\"route-column\">Tiempo</div>\n        <div class=\"route-column\">Kms</div>\n        <div class=\"route-column\">Ingresos</div>\n      </div>\n      <div class=\"row\" *ngFor=\"let rute of rutes\">\n        <div class=\"route-column\">{{rute.fecha | date: 'longDate'}}</div>\n        <div class=\"route-column\">{{rute.inicio}}</div>\n        <div class=\"route-column\">{{rute.final}}</div>\n        <div class=\"route-column\">{{rute.tiempo}}</div>\n        <div class=\"route-column\">{{rute.kms}}</div>\n        <div class=\"route-column\">{{rute.ingresos}}</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"content-button\">\n    <ion-button color=\"transparent\" class=\"ui button begin-activity\" (click)=\"goToRute()\">INICIAR NUEVO RECORRIDO\n    </ion-button>\n    <ion-button color=\"transparent\" class=\"ui button go-campaings\" (click)=\"goToCampaings()\">VER NUEVAS CAMPAÑAS\n    </ion-button>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "LwiU":
    /*!***************************************!*\
      !*** ./src/app/rutes/rutes.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function LwiU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3J1dGVzL3J1dGVzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "MW77":
    /*!*************************************!*\
      !*** ./src/app/rutes/rutes.page.ts ***!
      \*************************************/

    /*! exports provided: RutesPage */

    /***/
    function MW77(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RutesPage", function () {
        return RutesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_rutes_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./rutes.page.html */
      "Gohq");
      /* harmony import */


      var _rutes_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./rutes.page.scss */
      "LwiU");
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


      var _services_api_publibike_marca_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/api-publibike-marca.service */
      "Q5Ll");

      var RutesPage = /*#__PURE__*/function () {
        function RutesPage(apiService, navCtrl, loadingCtrl, storage) {
          _classCallCheck(this, RutesPage);

          this.apiService = apiService;
          this.navCtrl = navCtrl;
          this.loadingCtrl = loadingCtrl;
          this.storage = storage;
          this.userId = {
            _id: ""
          };
          this.rutes = [];
        }

        _createClass(RutesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var id;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.presentLoading();
                      _context.next = 3;
                      return this.storage.get("userData");

                    case 3:
                      id = _context.sent;
                      _context.next = 6;
                      return this.storage.get("userId");

                    case 6:
                      this.userId = _context.sent;
                      _context.next = 9;
                      return this.apiService.getUserRoutes(this.userId._id);

                    case 9:
                      this.rutes = _context.sent;
                      console.log(this.rutes);
                      this.rutes = this.rutes.recorridos;
                      console.log(this.rutes);
                      this.loading.dismiss();

                    case 14:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Cargando...'
                      });

                    case 2:
                      this.loading = _context2.sent;
                      _context2.next = 5;
                      return this.loading.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "goToRute",
          value: function goToRute() {
            this.navCtrl.navigateForward("menu/rute");
          }
        }, {
          key: "goToCampaings",
          value: function goToCampaings() {
            this.navCtrl.navigateForward("menu/campaings");
          }
        }]);

        return RutesPage;
      }();

      RutesPage.ctorParameters = function () {
        return [{
          type: _services_api_publibike_marca_service__WEBPACK_IMPORTED_MODULE_6__["ApiPublibikeMarcaService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }];
      };

      RutesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-rutes',
        template: _raw_loader_rutes_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_rutes_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RutesPage);
      /***/
    },

    /***/
    "QJDj":
    /*!***********************************************!*\
      !*** ./src/app/rutes/rutes-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: RutesPageRoutingModule */

    /***/
    function QJDj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RutesPageRoutingModule", function () {
        return RutesPageRoutingModule;
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


      var _rutes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./rutes.page */
      "MW77");

      var routes = [{
        path: '',
        component: _rutes_page__WEBPACK_IMPORTED_MODULE_3__["RutesPage"]
      }];

      var RutesPageRoutingModule = function RutesPageRoutingModule() {
        _classCallCheck(this, RutesPageRoutingModule);
      };

      RutesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RutesPageRoutingModule);
      /***/
    },

    /***/
    "bUJ/":
    /*!***************************************!*\
      !*** ./src/app/rutes/rutes.module.ts ***!
      \***************************************/

    /*! exports provided: RutesPageModule */

    /***/
    function bUJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RutesPageModule", function () {
        return RutesPageModule;
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


      var _rutes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./rutes-routing.module */
      "QJDj");
      /* harmony import */


      var _rutes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./rutes.page */
      "MW77");

      var RutesPageModule = function RutesPageModule() {
        _classCallCheck(this, RutesPageModule);
      };

      RutesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _rutes_routing_module__WEBPACK_IMPORTED_MODULE_5__["RutesPageRoutingModule"]],
        declarations: [_rutes_page__WEBPACK_IMPORTED_MODULE_6__["RutesPage"]]
      })], RutesPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=rutes-rutes-module-es5.js.map