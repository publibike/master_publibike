(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["campaings-campaings-module"], {
    /***/
    "0s88":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/campaings/campaings.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function s88(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"logo-publibike-in\">\n    <img src=\"assets/img/logo-ekobike.png\">\n  </div>\n  <div class=\"title-publibike\">\n    <h2>CAMPAÑAS</h2>\n  </div>\n  <h3 class=\"title-campaing\">\n    Tus Campañas\n  </h3>\n  <div class=\"row\">\n    <div class=\"column campaing\">\n      <div class=\"state-campaing active\">\n        <h3>ACTIVA</h3>\n      </div>\n      <img src=\"assets/img/logo-bancolombia.jpg\">\n      <div class=\"campaing-info\">\n        <h4>Campaña <small>\"Mira los ahorros crecer\"</small></h4>\n        <h4>Pago por Km <small>$2.000</small></h4>\n        <h4>Zonas <small>Calle 72 - Calle 93</small></h4>\n        <h4>Duración <small>15/01/20220 - 24/01/2020</small></h4>\n        <ion-button color=\"transparent\" full outline class=\"start-campaing\" (click)=\"goToStartCampaing()\">Iniciar\n          Campaña</ion-button>\n      </div>\n    </div>\n    <div class=\"column campaing\">\n      <div class=\"state-campaing no-disponible\">\n        <h3>NO DISPONIBLE</h3>\n      </div>\n      <img src=\"assets/img/logo-homecenter.jpg\">\n      <div class=\"campaing-info\">\n        <h4>Campaña <small>\"Nuevo año, ahorra más\"</small></h4>\n        <h4>Pago por Km <small>$1.500</small></h4>\n        <h4>Zonas <small>Calle 80 a Calle 72</small></h4>\n        <h4>Duración <small>10/01/2020 - 14/01/2020</small></h4>\n      </div>\n    </div>\n    <h3 class=\"title-campaing\">\n      Otras campañas disponibles\n    </h3>\n    <div class=\"row\">\n      <div class=\"column campaing\">\n        <div class=\"state-campaing warning-date\">\n          <h3>Terminará Pronto</h3>\n        </div>\n        <img src=\"assets/img/logo-banco-de-bogota.jpg\">\n        <div class=\"campaing-info\">\n          <h4>Campaña <small>\"Conocer tu turno virtual\"</small></h4>\n          <h4>Pago por Km <small>$2.000</small></h4>\n          <h4>Zonas <small>Calle 72 - Calle 93</small></h4>\n          <h4 class=\"warning-date\">Duración <small>15/01/20220 - 24/01/2020</small></h4>\n          <h4>Cupos Disponibles <small>10 Ciclistas</small></h4>\n          <ion-button color=\"transparent\" full outline class=\"start-campaing\" (click)=\"goToStartCampaing()\">Iniciar\n            Campaña</ion-button>\n        </div>\n      </div>\n      <div class=\"column campaing\">\n        <div class=\"state-campaing warning-quotas\">\n          <h3>Pocos Cupos</h3>\n        </div>\n        <img src=\"assets/img/logo-titan.jpg\">\n        <div class=\"campaing-info\">\n          <h4>Campaña <small>\"Un Ambiente Grandioso\"</small></h4>\n          <h4>Pago por Km <small>$1.500</small></h4>\n          <h4>Zonas <small>Calle 80 - Calle 72</small></h4>\n          <h4>Duración <small>15/01/20220 - 24/01/2020</small></h4>\n          <h4 class=\"warning-quotas\">Cupos Disponibles <small>10 Ciclistas</small></h4>\n          <ion-button color=\"transparent\" full outline class=\"suscribe-campaing\" (click)=\"goToSubscribeCampaing()\">\n            Suscribir Campaña</ion-button>\n        </div>\n      </div>\n      <div class=\"column campaing\">\n        <div class=\"state-campaing active\">\n          <h3>Activa</h3>\n        </div>\n        <img src=\"assets/img/logo-jumbo.jpg\">\n        <div class=\"campaing-info\">\n          <h4>Campaña <small>\"Ahora el finde es más largo\"</small></h4>\n          <h4>Pago por Km <small>$1.500</small></h4>\n          <h4>Zonas <small>Calle 80 - Calle 72</small></h4>\n          <h4>Duración <small>15/01/20220 - 24/01/2020</small></h4>\n          <h4>Cupos Disponibles <small>10 Ciclistas</small></h4>\n          <ion-button color=\"transparent\" full outline class=\"suscribe-campaing\" (click)=\"goToSubscribeCampaing()\">\n            Suscribir Campaña</ion-button>\n        </div>\n      </div>\n      <div class=\"column campaing\">\n        <div class=\"state-campaing warning-quotas\">\n          <h3>Pocos Cupos</h3>\n        </div>\n        <img src=\"assets/img/logo-toyota.jpg\">\n        <div class=\"campaing-info\">\n          <h4>Campaña <small>“Nuevo Corolla 2020” </small></h4>\n          <h4>Pago por Km <small>$1.500</small></h4>\n          <h4>Zonas <small>Calle 100 - Calle 116</small></h4>\n          <h4>Duración <small>15/01/20220 - 24/01/2020</small></h4>\n          <h4 class=\"warning-quotas\">Cupos Disponibles <small>2 Ciclistas</small></h4>\n          <ion-button color=\"transparent\" full outline class=\"suscribe-campaing\" (click)=\"goToSubscribeCampaing()\">\n            Suscribir Campaña</ion-button>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "5l7c":
    /*!***********************************************!*\
      !*** ./src/app/campaings/campaings.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function l7c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbXBhaW5ncy9jYW1wYWluZ3MucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "8kny":
    /*!***********************************************!*\
      !*** ./src/app/campaings/campaings.module.ts ***!
      \***********************************************/

    /*! exports provided: CampaingsPageModule */

    /***/
    function kny(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CampaingsPageModule", function () {
        return CampaingsPageModule;
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


      var _campaings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./campaings-routing.module */
      "AWwd");
      /* harmony import */


      var _campaings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./campaings.page */
      "lf9e");

      var CampaingsPageModule = function CampaingsPageModule() {
        _classCallCheck(this, CampaingsPageModule);
      };

      CampaingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _campaings_routing_module__WEBPACK_IMPORTED_MODULE_5__["CampaingsPageRoutingModule"]],
        declarations: [_campaings_page__WEBPACK_IMPORTED_MODULE_6__["CampaingsPage"]]
      })], CampaingsPageModule);
      /***/
    },

    /***/
    "AWwd":
    /*!*******************************************************!*\
      !*** ./src/app/campaings/campaings-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: CampaingsPageRoutingModule */

    /***/
    function AWwd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CampaingsPageRoutingModule", function () {
        return CampaingsPageRoutingModule;
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


      var _campaings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./campaings.page */
      "lf9e");

      var routes = [{
        path: '',
        component: _campaings_page__WEBPACK_IMPORTED_MODULE_3__["CampaingsPage"]
      }];

      var CampaingsPageRoutingModule = function CampaingsPageRoutingModule() {
        _classCallCheck(this, CampaingsPageRoutingModule);
      };

      CampaingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CampaingsPageRoutingModule);
      /***/
    },

    /***/
    "lf9e":
    /*!*********************************************!*\
      !*** ./src/app/campaings/campaings.page.ts ***!
      \*********************************************/

    /*! exports provided: CampaingsPage */

    /***/
    function lf9e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CampaingsPage", function () {
        return CampaingsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_campaings_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./campaings.page.html */
      "0s88");
      /* harmony import */


      var _campaings_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./campaings.page.scss */
      "5l7c");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");

      var CampaingsPage = /*#__PURE__*/function () {
        function CampaingsPage(navCtrl) {
          _classCallCheck(this, CampaingsPage);

          this.navCtrl = navCtrl;
        }

        _createClass(CampaingsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToSubscribeCampaing",
          value: function goToSubscribeCampaing() {
            this.navCtrl.navigateForward("menu/subscribe-campaing");
          }
        }, {
          key: "goToStartCampaing",
          value: function goToStartCampaing() {
            this.navCtrl.navigateForward("menu/start-campaing");
          }
        }]);

        return CampaingsPage;
      }();

      CampaingsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }];
      };

      CampaingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-campaings',
        template: _raw_loader_campaings_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_campaings_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CampaingsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=campaings-campaings-module-es5.js.map