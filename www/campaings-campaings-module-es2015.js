(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["campaings-campaings-module"],{

/***/ "0s88":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/campaings/campaings.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"logo-publibike-in\">\n    <img src=\"assets/img/logo-ekobike.png\">\n  </div>\n  <div class=\"title-publibike\">\n    <h2>CAMPAÑAS</h2>\n  </div>\n  <h3 class=\"title-campaing\">\n    Tus Campañas\n  </h3>\n  <div class=\"row\">\n    <ion-slides [options]=\"slideOps\" *ngIf=\"campaings.length\">\n      <ion-slide *ngFor=\"let campaing of campaings\">\n        <div class=\"column campaing\">\n          <div class=\"state-campaing active\">\n            <h3>{{campaing.estado}}</h3>\n          </div>\n          <img src=\"{{campaing.imagen}}\">\n          <div class=\"campaing-info\">\n            <h4>Campaña <small>{{campaing.nombre}}</small></h4>\n            <h4>Pago por Km <small>{{campaing.pago_km}}</small></h4>\n            <h4>Zonas <small>{{campaing.zona}}</small></h4>\n            <h4>Duración <small>{{campaing.fecha_inicio}} - {{campaing.fecha_final}}</small></h4>\n            <div *ngIf=\"campaing.estado=='Activo'\">\n              <ion-button color=\"transparent\" full outline class=\"start-campaing\"\n                (click)=\"goToStartCampaing(campaing.id)\">Iniciar\n                Campaña</ion-button>\n            </div>\n            <div *ngIf=\"campaing.estado=='No_activo'\">\n              <ion-button disabled=\"true\" color=\"transparent\" full outline class=\"start-campaing\"\n                (click)=\"goToStartCampaing(campaing.id)\">Iniciar\n                Campaña</ion-button>\n            </div>\n          </div>\n        </div>\n      </ion-slide>\n    </ion-slides>\n    <div *ngIf=\"campaings.length===0\">\n      <h4 class=\"campaing-info\">No tienes campañas registradas</h4>\n    </div>\n    <h3 class=\"title-campaing\">Campañas disponibles</h3>\n    <div *ngIf=\"companies.length\">\n      <div *ngFor=\"let company of companies\">\n        <div class=\"row\">\n          <h3 class=\"title-campaing\">{{company.nombre}}</h3>\n          <ion-slides [options]=\"slideOps\" *ngIf=\"company.campanas.length\">\n            <ion-slide *ngFor=\"let campaing of company.campanas\">\n              <div class=\"column campaing\">\n                <div class=\"state-campaing active\">\n                  <h3>{{campaing.estado}}</h3>\n                </div>\n                <img src=\"{{campaing.imagen}}\">\n                <div class=\"campaing-info\">\n                  <h4>Campaña <small>{{campaing.nombre}}</small></h4>\n                  <h4>Pago por Km <small>{{campaing.pago_km}}</small></h4>\n                  <h4>Zonas <small>{{campaing.zona}}</small></h4>\n                  <h4>Duración <small>{{campaing.fecha_inicio}} - {{campaing.fecha_final}}</small></h4>\n                  <div *ngIf=\"campaing.estado=='Activo'\">\n                    <ion-button color=\"transparent\" full outline class=\"start-campaing\"\n                      (click)=\"goToSubscribeCampaing(campaing.id)\">\n                      Suscribir Campaña</ion-button>\n                  </div>\n                  <div *ngIf=\"campaing.estado=='No_activo'\">\n                    <ion-button disabled=\"true\" color=\"transparent\" full outline class=\"start-campaing\"\n                      (click)=\"goToSubscribeCampaing(campaing.id)\">\n                      Suscribir Campaña</ion-button>\n                  </div>\n                </div>\n              </div>\n            </ion-slide>\n          </ion-slides>\n          <div *ngIf=\"company.campanas.length===0\">\n            <h4 class=\"campaing-info\">No existen campañas registradas</h4>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"companies.length===0\">\n      <h4 class=\"campaing-info\">Aun no hay empresas registradas</h4>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "5l7c":
/*!***********************************************!*\
  !*** ./src/app/campaings/campaings.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h4 {\n  color: black;\n  text-align: center;\n}\n\nh3 {\n  margin-left: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FtcGFpbmdzL2NhbXBhaW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2NhbXBhaW5ncy9jYW1wYWluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDR7XG4gICAgY29sb3I6YmxhY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaDN7XG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xufSJdfQ== */");

/***/ }),

/***/ "8kny":
/*!***********************************************!*\
  !*** ./src/app/campaings/campaings.module.ts ***!
  \***********************************************/
/*! exports provided: CampaingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaingsPageModule", function() { return CampaingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _campaings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./campaings-routing.module */ "AWwd");
/* harmony import */ var _campaings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./campaings.page */ "lf9e");







let CampaingsPageModule = class CampaingsPageModule {
};
CampaingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _campaings_routing_module__WEBPACK_IMPORTED_MODULE_5__["CampaingsPageRoutingModule"]
        ],
        declarations: [_campaings_page__WEBPACK_IMPORTED_MODULE_6__["CampaingsPage"]]
    })
], CampaingsPageModule);



/***/ }),

/***/ "AWwd":
/*!*******************************************************!*\
  !*** ./src/app/campaings/campaings-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CampaingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaingsPageRoutingModule", function() { return CampaingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _campaings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./campaings.page */ "lf9e");




const routes = [
    {
        path: '',
        component: _campaings_page__WEBPACK_IMPORTED_MODULE_3__["CampaingsPage"]
    }
];
let CampaingsPageRoutingModule = class CampaingsPageRoutingModule {
};
CampaingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CampaingsPageRoutingModule);



/***/ }),

/***/ "lf9e":
/*!*********************************************!*\
  !*** ./src/app/campaings/campaings.page.ts ***!
  \*********************************************/
/*! exports provided: CampaingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaingsPage", function() { return CampaingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_campaings_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./campaings.page.html */ "0s88");
/* harmony import */ var _campaings_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./campaings.page.scss */ "5l7c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "xgBC");
/* harmony import */ var _services_api_publibike_marca_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api-publibike-marca.service */ "Q5Ll");







let CampaingsPage = class CampaingsPage {
    constructor(storage, loadingCtrl, apiService, navCtrl) {
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.apiService = apiService;
        this.navCtrl = navCtrl;
        this.campaings = [];
        this.myCampaings = [];
        this.companies = [];
        this.slideOps = {
            initialSlide: 2,
            slidesPerView: 2,
            centeredSlides: false,
            speed: 400
        };
    }
    ionViewDidEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.presentLoading();
            let user = yield this.storage.get("userId");
            user = yield this.apiService.getUserData(user._id);
            // this.campaings = await this.apiService.getCampaings()
            this.campaings = user.campanas;
            console.log(this.campaings);
            this.companies = yield this.apiService.getCompanies();
            console.log(this.companies);
            this.loading.dismiss();
        });
    }
    ngOnInit() {
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
    goToSubscribeCampaing(id) {
        console.log(id);
        this.navCtrl.navigateForward(["menu/subscribe-campaing", id]);
    }
    goToStartCampaing(id) {
        console.log(id);
        this.navCtrl.navigateForward(["menu/start-campaing", id]);
    }
};
CampaingsPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _services_api_publibike_marca_service__WEBPACK_IMPORTED_MODULE_6__["ApiPublibikeMarcaService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
CampaingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-campaings',
        template: _raw_loader_campaings_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_campaings_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CampaingsPage);



/***/ })

}]);
//# sourceMappingURL=campaings-campaings-module-es2015.js.map