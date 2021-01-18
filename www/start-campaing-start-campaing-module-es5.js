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


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"title-publibike degrade-orange\">\n    <h2>INICIANDO NUEVO RECORRIDO</h2>\n  </div>\n  <h3 class=\"title-campaing\">\n    Vas a iniciar tu recorrido con la siguiente campaña:\n  </h3>\n  <div class=\"row logo-campaing\">\n      <div class=\"column\">\n        <img src=\"assets/img/logo-bancolombia.jpg\">\n      </div>\n  </div>\n  <div class=\"row begin-campaing\">\n      <div class=\"column\">\n        <div class=\"campaing-info\">\n          <h4>Campaña <small>\"Mira los ahorros crecer\"</small></h4>\n        </div>\n      </div>\n      <div class=\"column\">\n        <div class=\"campaing-info\">\n          <h4>Zonas <small>Calle 72 - Calle 93</small></h4>\n        </div>\n      </div>\n      <div class=\"column-full\">\n        <div class=\"campaing-info\">\n          <h4>Duración <small>15/01/20220 - 24/01/2020</small></h4>\n        </div>\n      </div>\n      <div class=\"column\">\n        <h4>Pago por Km Hora Valle (9am - 3pm)<small>$2.000</small></h4>\t        \t\t\n      </div>\n      <div class=\"column\">\n        <h4>Pago por Km - Hora Pico (7am - 9am / 3pm - 7pm)<small>$2.000</small></h4>\n      </div>\n  </div>\n  <!-- <h3 class=\"title-campaing\" style=\"font-weight: bold\">\n    Sube la foto de tu bici, con la publicidad de la campaña\n  </h3>\n  <div class=\"row photo-campaing\">\n      <i class=\"icon-camera\">\n        \n      </i>\n  </div> -->\n  <!-- <h3 class=\"title-rute\" style=\"font-weight: bold\">\n    Tu recorrido iniciará en:\n    <small>Calle 72 # 15 - 24</small>\n </h3> -->\n <ion-button color=\"transparent\" full outline class=\"ui button begin-activity\" (click)=\"goToRute()\">ESTOY LISTO</ion-button>\n\n</ion-content>\n";
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");

      var StartCampaingPage = /*#__PURE__*/function () {
        function StartCampaingPage(navCtrl) {
          _classCallCheck(this, StartCampaingPage);

          this.navCtrl = navCtrl;
        }

        _createClass(StartCampaingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToRute",
          value: function goToRute() {
            this.navCtrl.navigateForward("menu/rute");
          }
        }]);

        return StartCampaingPage;
      }();

      StartCampaingPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
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