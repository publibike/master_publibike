(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "cRhG":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "v+7O");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "ncJE");







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "ncJE":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.page.html */ "tXh8");
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.page.scss */ "zxxS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "xgBC");
/* harmony import */ var _recognition_modal_recognition_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../recognition-modal/recognition-modal.page */ "u6bn");
/* harmony import */ var _services_api_publibike_bienestar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/api-publibike-bienestar.service */ "N/ei");









let ProfilePage = class ProfilePage {
    constructor(storage, formBuilder, apiService, alertController, modalController, loadingCtrl) {
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.alertController = alertController;
        this.modalController = modalController;
        this.loadingCtrl = loadingCtrl;
        this.userId = { _id: "" };
        this.user = {
            nombre: "",
            apellido: "",
            usuario: "",
            empresa: {
                nombre: "",
            },
            reconocimientos: [],
            km_total: "0",
            cal_total: "0",
            co2_total: "0",
            tiempo_total: "0",
            peso: 0,
        };
        this.reconocimientos = [];
        this.slideOps = {
            initialSlide: 2,
            slidesPerView: 4,
            centeredSlides: true,
            speed: 400,
        };
        this.validation_messages = {
            email: [
                { type: "required", message: "El Correo es requerido" },
                { type: "pattern", message: "Ingresa un correo válido" },
            ],
            empresa: {
                nombre: [{ type: "requerido", message: "La empresa es requerida" }],
            },
        };
        this.updateForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
            ])),
            empresa: {
                nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
            },
        });
    }
    ionViewDidEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.presentLoading();
            this.userId = yield this.storage.get("userId");
            // console.log(this.userId)
            this.apiService.getUserData(this.userId._id).then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.storage.set("userData", res);
                // this.user = await this.storage.get("userData");
                this.user = res;
                this.user.km_total = parseFloat(res.km_total).toFixed(1);
                this.user.cal_total = parseFloat(res.cal_total).toFixed(1);
                this.user.co2_total = parseFloat(res.co2_total).toFixed(1);
                this.user.tiempo_total = parseFloat(res.tiempo_total).toFixed(1);
                this.updateForm.patchValue(this.user);
            }));
            this.reconocimientos = yield this.apiService.getUserRecognition(this.userId._id);
            this.reconocimientos = this.reconocimientos.reconocimientos;
            this.loading.dismiss();
            console.log(this.reconocimientos);
        });
    }
    ionViewWillLeave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.presentLoading();
            this.userId = yield this.storage.get("userId");
            // console.log(this.userId)
            this.apiService.getUserData(this.userId._id).then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(res);
                this.storage.set("userData", res);
                this.user = yield this.storage.get("userData");
                console.log(this.user);
                this.updateForm.patchValue(this.user);
            }));
            this.reconocimientos = yield this.apiService.getUserRecognition(this.userId._id);
            this.reconocimientos = this.reconocimientos.reconocimientos;
            this.loading.dismiss();
            console.log(this.reconocimientos);
        });
    }
    update(userData) {
        console.log('este es el user data', userData);
        this.apiService.updateUser(userData).then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("Datos actualizados");
            const alert = yield this.alertController.create({
                cssClass: "my-custom-class",
                header: "Atención",
                message: "Datos actualizados correctamente",
                buttons: [
                    {
                        text: "Ok",
                    },
                ],
            });
            yield alert.present();
        }));
    }
    showRecognition(reconocimiento) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const recognition = yield this.apiService.getRecognitions(reconocimiento.id);
            console.log(recognition);
            const modal = yield this.modalController.create({
                component: _recognition_modal_recognition_modal_page__WEBPACK_IMPORTED_MODULE_7__["RecognitionModalPage"],
                componentProps: {
                    categoria: reconocimiento.categoria,
                    data: recognition,
                },
            });
            // modal.onDidDismiss().then(dataRetuned => {
            //   this.song = dataRetuned.data;
            // });
            return yield modal.present();
        });
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                cssClass: "my-custom-class",
                message: "Cargando...",
            });
            yield this.loading.present();
        });
    }
    ngOnInit() { }
};
ProfilePage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_api_publibike_bienestar_service__WEBPACK_IMPORTED_MODULE_8__["ApiPublibikeBienestarService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-profile",
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfilePage);



/***/ }),

/***/ "tXh8":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content class=\"inside-app\" padding>\n  <div class=\"content-profile\">\n    <div class=\"profile-photo\">\n      <ul>\n        <li>\n          <hr>\n        </li>\n        <li class=\"content-photo\"><img src=\"assets/img/logo-ekobike.png\"></li>\n        <li>\n          <hr>\n        </li>\n      </ul>\n    </div>\n    <div class=\"info-profile\">\n      <h2 color=\"secondary\">{{user.nombre}} </h2>\n      <h4>Usuario: {{user.usuario}}</h4>\n      <h4>Empresa: {{user.empresa.nombre}}</h4>\n      <div class=\"data-profile ui two column grid\">\n        <div class=\"column\">\n          <form class=\"ui form\" [formGroup]=\"updateForm\" (ngSubmit)=\"update(updateForm.value)\">\n            <ion-item>\n              <ion-label color=\"secondary\">Correo Electrónico: </ion-label>\n              <ion-input formControlName=\"email\"></ion-input>\n            </ion-item>\n            <div class=\"validation-error\">\n              <ng-container *ngFor=\"let validation of validation_messages.email\">\n                <div *ngIf=\"\n                    updateForm.get('email').hasError(validation.type) &&\n                    (updateForm.get('email').dirty ||\n                      updateForm.get('email').touched)\">\n                  {{ validation.message }}\n                </div>\n              </ng-container>\n            </div>\n            <!-- <ion-item>\n              <ion-label color=\"secondary\">Empresa</ion-label>\n              <ion-input formControlName=\"empresa.nombre\"></ion-input>\n            </ion-item>\n            <div class=\"validation-error\">\n              <ng-container *ngFor=\"let validation of validation_messages.empresa\">\n                <div *ngIf=\"\n                    updateForm.get('empresa').hasError(validation.type) &&\n                    (updateForm.get('empresa').dirty ||\n                      updateForm.get('empresa').touched)\">\n                  {{ validation.message }}\n                </div>\n              </ng-container>\n            </div>     -->\n            <ion-button color=\"transparency\" class=\"ui right floated button btn-yellow edit-btn\" style=\"margin-right: 3%;\" [disabled]=\"!updateForm.valid\" type=\"submit\">Editar Correo</ion-button>        \n          </form>\n        </div>\n      </div>\n      <div class=\"prize-profile\">\n        <h4>\n          Último Reconocimientos\n        </h4>\n        <div class=\"prize-content\">\n          <ion-slides [options]=\"slideOps\" *ngIf=\"reconocimientos.length\">\n            <ion-slide *ngFor=\"let reconocimiento of reconocimientos\">\n              <ion-avatar (click)=\"showRecognition(reconocimiento)\">\n                <!-- <img [src]=\"artist.images[0].url\" /> -->\n                <ion-icon text-center color=\"secondary\" class=\"icon-tools-2\"></ion-icon>\n                <span color=\"secondary\">{{reconocimiento.categoria}}</span>\n              </ion-avatar>\n            </ion-slide>\n          </ion-slides>\n          <!-- <ul>\n            <li>\n              <i class=\"icon-tools-2\"></i>\n              Mantenimiento\n            </li>\n            <li>\n              <i class=\"icon-basket\"></i>\n              Mercado\n            </li>\n            <li>\n              <i class=\"icon-briefcase\"></i>\n              Viaje\n            </li>\n          </ul> -->\n\n        </div>\n      </div>    \n    </div>\n    <div class=\"content-activity ui two column grid\">\n      <div class=\"column\">\n        <h4>\n          Total de Kilometros Recorridos\n        </h4>\n        <div class=\"data-activity\">\n          <h3>\n            {{user.km_total | number}}\n          </h3>\n          <h5>Kms</h5>\n        </div>\n\n      </div>\n      <div class=\"column\">\n        <h4>\n          Total de Calorías Consumidas\n        </h4>\n        <div class=\"data-activity\">\n          <h3>\n            {{user.cal_total | number}}\n          </h3>\n          <h5>Kcal</h5>\n        </div>\n      </div>\n      <div class=\"column\">\n        <h4>\n          Total de CO2 Reducido\n        </h4>\n        <div class=\"data-activity\">\n          <h3>\n            {{user.co2_total | number}}\n          </h3>\n          <h5>Kgr</h5>\n        </div>\n      </div>\n      <div class=\"column\">\n        <h4>\n          Tiempo total de actividad\n        </h4>\n        <div class=\"data-activity\">\n          <h3>\n            {{user.tiempo_total | number}}\n          </h3>\n          <h5>Mins</h5>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "v+7O":
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "ncJE");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "zxxS":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-avatar {\n  height: 120px;\n  width: 90%;\n}\n\nion-avatar img {\n  width: 90px;\n  height: 90px;\n}\n\nion-icon {\n  font-size: 75px;\n  display: block;\n  margin-bottom: 10px;\n}\n\nion-avatar span {\n  font-size: 16px;\n  color: #ffffff;\n}\n\n.ui form .ui.button {\n  padding: 0px;\n}\n\nion-content {\n  --background-image: url('background-ekobike.jpg') no-repeat fixed center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUdGOztBQURBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFJRjs7QUFGQTtFQUNFLFlBQUE7QUFLRjs7QUFIQTtFQUNFLHdFQUFBO0FBTUYiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWF2YXRhciB7XG4gIGhlaWdodDogMTIwcHg7XG4gIHdpZHRoOiA5MCU7XG59XG5pb24tYXZhdGFyIGltZyB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG59XG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogNzVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5pb24tYXZhdGFyIHNwYW4ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLnVpIGZvcm0gLnVpLmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2JhY2tncm91bmQtZWtvYmlrZS5qcGdcIikgbm8tcmVwZWF0IGZpeGVkIGNlbnRlcjtcbn1cbiJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map