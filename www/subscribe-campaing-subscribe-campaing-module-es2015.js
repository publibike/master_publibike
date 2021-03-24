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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "xgBC");
/* harmony import */ var _services_api_publibike_marca_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/api-publibike-marca.service */ "Q5Ll");








let SubscribeCampaingPage = class SubscribeCampaingPage {
    constructor(navCtrl, activeRoute, storage, loadingCtrl, apiService, alertController) {
        this.navCtrl = navCtrl;
        this.activeRoute = activeRoute;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.apiService = apiService;
        this.alertController = alertController;
        this.params = null;
        this.campaing = {};
        this.user = {};
    }
    ionViewDidEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.params = this.activeRoute.snapshot.paramMap.get('id');
            console.log(this.params);
            this.campaing = yield this.apiService.getCampaing(this.params);
            console.log(this.campaing);
            this.user = yield this.storage.get("userId");
            console.log(this.user);
            // this.campaing = user.campanas.filter((item) => {
            //   return item._id === this.params
            // })
        });
    }
    registerToCampaing() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const campToSend = {
                id: this.campaing._id,
                imagen: this.campaing.imagen,
                nombre: this.campaing.nombre,
                pago_km: this.campaing.pago_km,
                zona: this.campaing.zona,
                fecha_inicio: this.campaing.fecha_inicio,
                fecha_final: this.campaing.fecha_final,
                estado: this.campaing.estado
            };
            const response = yield this.apiService.registerCampaing(campToSend);
            let alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Atención',
                // subHeader: '¿Estas movilizandote a pie?',
                message: `${response}`,
                buttons: [{
                        text: 'Ok',
                        handler: () => {
                            this.goToCampaings();
                        }
                    }]
            });
            yield alert.present();
        });
    }
    goToCampaings() {
        this.navCtrl.navigateForward("menu/campaings");
    }
};
SubscribeCampaingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _services_api_publibike_marca_service__WEBPACK_IMPORTED_MODULE_7__["ApiPublibikeMarcaService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"title-publibike degrade-orange\">\n    <h2>INICIANDO NUEVO RECORRIDO</h2>\n  </div>\n  <h3 class=\"title-campaing\">\n    Vas a iniciar tu recorrido con la siguiente campaña:\n  </h3>\n  <div class=\"row logo-campaing\" *ngIf=\"campaing\">\n    <div class=\"column\">\n      <img src=\"{{campaing.imagen}}\">\n    </div>\n  </div>\n  <div class=\"row begin-campaing\">\n    <div class=\"column\">\n      <div class=\"campaing-info\">\n        <h4>Campaña <small>{{campaing.nombre}}</small></h4>\n      </div>\n    </div>\n    <div class=\"column\">\n      <div class=\"campaing-info\">\n        <h4>Zonas <small> {{campaing.zona}}</small></h4>\n      </div>\n    </div>\n    <div class=\"column-full\">\n      <div class=\"campaing-info\">\n        <h4>Duración <small>{{campaing.fecha_inicio}} - {{campaing.fecha_final}}</small></h4>\n      </div>\n    </div>\n    <div class=\"column\">\n      <h4>Pago por Km <small>{{campaing.pago_km}}</small></h4>\n    </div>\n  </div>\n  <ion-button color=\"transparent\" full outline class=\"ui button begin-activity\" (click)=\"registerToCampaing()\">ACEPTAR\n  </ion-button>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=subscribe-campaing-subscribe-campaing-module-es2015.js.map