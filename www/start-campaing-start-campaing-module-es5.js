(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["start-campaing-start-campaing-module"], {
    /***/
    "/0MB":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/start-campaing/start-campaing.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function MB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"title-publibike degrade-orange\">\n    <h2>INICIANDO NUEVO RECORRIDO</h2>\n  </div>\n  <h3 class=\"title-campaing\">\n    Vas a iniciar tu recorrido con la siguiente campaña:\n  </h3>\n  <div class=\"row logo-campaing\" *ngIf=\"campaing\">\n    <div class=\"column\">\n      <img src=\"{{campaing.imagen}}\">\n    </div>\n  </div>\n  <div class=\"row begin-campaing\">\n    <div class=\"column\">\n      <div class=\"campaing-info\">\n        <h4>Campaña <small>{{campaing.nombre}}</small></h4>\n      </div>\n    </div>\n    <div class=\"column\">\n      <div class=\"campaing-info\">\n        <h4>Zonas <small> {{campaing.zona}}</small></h4>\n      </div>\n    </div>\n    <div class=\"column-full\">\n      <div class=\"campaing-info\">\n        <h4>Duración <small>{{campaing.fecha_inicio}} - {{campaing.fecha_final}}</small></h4>\n      </div>\n    </div>\n    <div class=\"column\">\n      <h4>Pago por Km <small>{{campaing.pago_km}}</small></h4>\n    </div>\n  </div>\n  <ion-button color=\"transparent\" full outline class=\"ui button begin-activity\" (click)=\"goToRute()\">ESTOY LISTO\n  </ion-button>\n\n</ion-content>";
      /***/
    },

    /***/
    "UYBe":
    /*!*********************************************************!*\
      !*** ./src/app/start-campaing/start-campaing.module.ts ***!
      \*********************************************************/

    /*! exports provided: StartCampaingPageModule */

    /***/
    function UYBe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StartCampaingPageModule", function () {
        return StartCampaingPageModule;
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


      var _start_campaing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./start-campaing-routing.module */
      "en5e");
      /* harmony import */


      var _start_campaing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./start-campaing.page */
      "ysl/");

      var StartCampaingPageModule = function StartCampaingPageModule() {
        _classCallCheck(this, StartCampaingPageModule);
      };

      StartCampaingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _start_campaing_routing_module__WEBPACK_IMPORTED_MODULE_5__["StartCampaingPageRoutingModule"]],
        declarations: [_start_campaing_page__WEBPACK_IMPORTED_MODULE_6__["StartCampaingPage"]]
      })], StartCampaingPageModule);
      /***/
    },

    /***/
    "en5e":
    /*!*****************************************************************!*\
      !*** ./src/app/start-campaing/start-campaing-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: StartCampaingPageRoutingModule */

    /***/
    function en5e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StartCampaingPageRoutingModule", function () {
        return StartCampaingPageRoutingModule;
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


      var _start_campaing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./start-campaing.page */
      "ysl/");

      var routes = [{
        path: '',
        component: _start_campaing_page__WEBPACK_IMPORTED_MODULE_3__["StartCampaingPage"]
      }];

      var StartCampaingPageRoutingModule = function StartCampaingPageRoutingModule() {
        _classCallCheck(this, StartCampaingPageRoutingModule);
      };

      StartCampaingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], StartCampaingPageRoutingModule);
      /***/
    },

    /***/
    "nwAU":
    /*!*********************************************************!*\
      !*** ./src/app/start-campaing/start-campaing.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function nwAU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXJ0LWNhbXBhaW5nL3N0YXJ0LWNhbXBhaW5nLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "ysl/":
    /*!*******************************************************!*\
      !*** ./src/app/start-campaing/start-campaing.page.ts ***!
      \*******************************************************/

    /*! exports provided: StartCampaingPage */

    /***/
    function ysl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StartCampaingPage", function () {
        return StartCampaingPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_start_campaing_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./start-campaing.page.html */
      "/0MB");
      /* harmony import */


      var _start_campaing_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./start-campaing.page.scss */
      "nwAU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/storage */
      "xgBC");
      /* harmony import */


      var _services_api_publibike_marca_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/api-publibike-marca.service */
      "Q5Ll");

      var StartCampaingPage = /*#__PURE__*/function () {
        function StartCampaingPage(navCtrl, activeRoute, storage, apiService, loadingCtrl) {
          _classCallCheck(this, StartCampaingPage);

          this.navCtrl = navCtrl;
          this.activeRoute = activeRoute;
          this.storage = storage;
          this.apiService = apiService;
          this.loadingCtrl = loadingCtrl;
          this.params = null;
          this.campaing = {};
        }

        _createClass(StartCampaingPage, [{
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var user, result;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.params = this.activeRoute.snapshot.paramMap.get('id');
                      console.log(this.params);
                      _context.next = 4;
                      return this.storage.get("userId");

                    case 4:
                      user = _context.sent;
                      _context.next = 7;
                      return this.apiService.getUserData(user._id);

                    case 7:
                      user = _context.sent;
                      result = user.campanas.filter(function (item) {
                        return item.id === _this.params;
                      });
                      this.campaing = result[0];

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "goToRute",
          value: function goToRute() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.apiService.updateActualCampaing(this.campaing);

                    case 2:
                      this.navCtrl.navigateForward("menu/rute");

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return StartCampaingPage;
      }();

      StartCampaingPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
        }, {
          type: _services_api_publibike_marca_service__WEBPACK_IMPORTED_MODULE_7__["ApiPublibikeMarcaService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }];
      };

      StartCampaingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-start-campaing',
        template: _raw_loader_start_campaing_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_start_campaing_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], StartCampaingPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=start-campaing-start-campaing-module-es5.js.map