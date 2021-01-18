(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subscribe-campaing-subscribe-campaing-module"],{

/***/ "0hxz":
/*!*****************************************************************!*\
  !*** ./src/app/subscribe-campaing/subscribe-campaing.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YnNjcmliZS1jYW1wYWluZy9zdWJzY3JpYmUtY2FtcGFpbmcucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "4F9G":
/*!***************************************************************!*\
  !*** ./src/app/subscribe-campaing/subscribe-campaing.page.ts ***!
  \***************************************************************/
/*! exports provided: SubscribeCampaingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeCampaingPage", function() { return SubscribeCampaingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_subscribe_campaing_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./subscribe-campaing.page.html */ "Qrxw");
/* harmony import */ var _subscribe_campaing_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscribe-campaing.page.scss */ "0hxz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");





let SubscribeCampaingPage = class SubscribeCampaingPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
};
SubscribeCampaingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
SubscribeCampaingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-subscribe-campaing',
        template: _raw_loader_subscribe_campaing_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_subscribe_campaing_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SubscribeCampaingPage);



/***/ }),

/***/ "O+aV":
/*!*************************************************************************!*\
  !*** ./src/app/subscribe-campaing/subscribe-campaing-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: SubscribeCampaingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeCampaingPageRoutingModule", function() { return SubscribeCampaingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _subscribe_campaing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscribe-campaing.page */ "4F9G");




const routes = [
    {
        path: '',
        component: _subscribe_campaing_page__WEBPACK_IMPORTED_MODULE_3__["SubscribeCampaingPage"]
    }
];
let SubscribeCampaingPageRoutingModule = class SubscribeCampaingPageRoutingModule {
};
SubscribeCampaingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SubscribeCampaingPageRoutingModule);



/***/ }),

/***/ "Q3yt":
/*!*****************************************************************!*\
  !*** ./src/app/subscribe-campaing/subscribe-campaing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SubscribeCampaingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeCampaingPageModule", function() { return SubscribeCampaingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _subscribe_campaing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subscribe-campaing-routing.module */ "O+aV");
/* harmony import */ var _subscribe_campaing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subscribe-campaing.page */ "4F9G");







let SubscribeCampaingPageModule = class SubscribeCampaingPageModule {
};
SubscribeCampaingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _subscribe_campaing_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubscribeCampaingPageRoutingModule"]
        ],
        declarations: [_subscribe_campaing_page__WEBPACK_IMPORTED_MODULE_6__["SubscribeCampaingPage"]]
    })
], SubscribeCampaingPageModule);



/***/ }),

/***/ "Qrxw":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subscribe-campaing/subscribe-campaing.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>subscribe-campaing</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"title-publibike degrade-orange\">\n    <h2>INICIANDO NUEVO RECORRIDO</h2>\n  </div>\n  <h3 class=\"title-campaing\">\n    Vas a iniciar tu recorrido con la siguiente campaña:\n  </h3>\n  <div class=\"row logo-campaing\">\n      <div class=\"column\">\n        <img src=\"../img/logo-bancolombia.jpg\">\n      </div>\n  </div>\n  <div class=\"row begin-campaing\">\n      <div class=\"column\">\n        <div class=\"campaing-info\">\n          <h4>Campaña <small>\"Mira los ahorros crecer\"</small></h4>\n        </div>\n      </div>\n      <div class=\"column\">\n        <div class=\"campaing-info\">\n          <h4>Zonas <small>Calle 72 - Calle 93</small></h4>\n        </div>\n      </div>\n      <div class=\"column-full\">\n        <div class=\"campaing-info\">\n          <h4>Duración <small>15/01/20220 - 24/01/2020</small></h4>\n        </div>\n      </div>\n      <div class=\"column\">\n        <h4>Pago por Km Hora Valle (9am - 3pm)<small>$2.000</small></h4>\t        \t\t\n      </div>\n      <div class=\"column\">\n        <h4>Pago por Km - Hora Pico (7am - 9am / 3pm - 7pm)<small>$2.000</small></h4>\n      </div>\n  </div>\n  <div class=\"row begin-campaing\">\n      <div class=\"column-full\">\n        <div class=\"campaing-info\">\n          <h2>Instala la campaña</h2>\n        </div>\n      </div>\n      <div class=\"column-full\">\n        <div class=\"campaing-info\">\n          <p>Para suscribirte a la campaña, debes instalar la publicidad en tu bici en alguno de los siguientes puntos:</p>\n          <ul>\n            <li>Cra 72 # 15 - 20</li>\n            <li>Cra 90 # 35 - 30</li>\n            <li>Cra 52 # 15 - 40</li>\n            <li>Calle 93 # 7 - 20</li>\n          </ul>\n        </div>\n      </div>\n  </div>\n <a class=\"ui button begin-activity\" href=\"main.html\">ACEPTAR</a>\n\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=subscribe-campaing-subscribe-campaing-module-es2015.js.map