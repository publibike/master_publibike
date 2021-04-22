(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recognitions-recognitions-module"],{

/***/ "0t2w":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recognitions/recognitions.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div class=\"logo-ekobike-in\">\r\n    <img src=\"assets/img/logo-ekobike.png\">\r\n  </div>\r\n  <h2 class=\"title-section\"><i class=\"icon-trophy\"></i>Reconocimientos</h2>\r\n  <div class=\"prize-content\">\r\n    <h1 class=\"title-section\" >Movilidad Limpia</h1>\r\n    <ion-slides  *ngIf=\"movilidad.length\">\r\n      <ion-slide *ngFor=\"let reconocimiento of movilidad\">\r\n        <ion-avatar (click)=\"showRecognition(reconocimiento)\">\r\n          <!-- <img [src]=\"artist.images[0].url\" /> -->\r\n          <ion-icon text-center color=\"secondary\" class=\"icon-tools-2\"></ion-icon>\r\n          <!-- <span>{{ artist.name }}</span> -->\r\n        </ion-avatar>\r\n      </ion-slide>\r\n    </ion-slides>\r\n    <h1 class=\"title-section\" >Bienestar</h1>\r\n    <ion-slides  *ngIf=\"bienestar.length\">\r\n      <ion-slide *ngFor=\"let reconocimiento of bienestar\">\r\n        <ion-avatar (click)=\"showRecognition(reconocimiento)\">\r\n          <!-- <img [src]=\"artist.images[0].url\" /> -->\r\n          <ion-icon text-center color=\"secondary\" class=\"icon-tools-2\"></ion-icon>\r\n          <!-- <span>{{ artist.name }}</span> -->\r\n        </ion-avatar>\r\n      </ion-slide>\r\n    </ion-slides>\r\n    <h1 class=\"title-section\" >Alianzas</h1>\r\n    <ion-slides *ngIf=\"alianzas.length\">\r\n      <ion-slide *ngFor=\"let reconocimiento of alianzas\">\r\n        <ion-avatar (click)=\"showRecognition(reconocimiento)\">\r\n          <!-- <img [src]=\"artist.images[0].url\" /> -->\r\n          <ion-icon text-center color=\"secondary\" class=\"icon-tools-2\"></ion-icon>\r\n          <!-- <span>{{ artist.name }}</span> -->\r\n        </ion-avatar>\r\n      </ion-slide>\r\n    </ion-slides>\r\n    <h1 class=\"title-section\" >Ocio</h1>\r\n    <ion-slides *ngIf=\"ocio.length\">\r\n      <ion-slide *ngFor=\"let reconocimiento of ocio\">\r\n        <ion-avatar (click)=\"showRecognition(reconocimiento)\">\r\n          <!-- <img [src]=\"artist.images[0].url\" /> -->\r\n          <ion-icon text-center color=\"secondary\" class=\"icon-tools-2\"></ion-icon>\r\n          <!-- <span>{{ artist.name }}</span> -->\r\n        </ion-avatar>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "AYPo":
/*!*****************************************************!*\
  !*** ./src/app/recognitions/recognitions.module.ts ***!
  \*****************************************************/
/*! exports provided: RecognitionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecognitionsPageModule", function() { return RecognitionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _recognitions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recognitions-routing.module */ "wrXu");
/* harmony import */ var _recognitions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recognitions.page */ "l31N");







let RecognitionsPageModule = class RecognitionsPageModule {
};
RecognitionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _recognitions_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecognitionsPageRoutingModule"]
        ],
        declarations: [_recognitions_page__WEBPACK_IMPORTED_MODULE_6__["RecognitionsPage"]]
    })
], RecognitionsPageModule);



/***/ }),

/***/ "l31N":
/*!***************************************************!*\
  !*** ./src/app/recognitions/recognitions.page.ts ***!
  \***************************************************/
/*! exports provided: RecognitionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecognitionsPage", function() { return RecognitionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_recognitions_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./recognitions.page.html */ "0t2w");
/* harmony import */ var _recognitions_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recognitions.page.scss */ "tGfo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "xgBC");
/* harmony import */ var _recognition_modal_recognition_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../recognition-modal/recognition-modal.page */ "u6bn");
/* harmony import */ var _services_api_publibike_bienestar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/api-publibike-bienestar.service */ "N/ei");








let RecognitionsPage = class RecognitionsPage {
    constructor(storage, modalController, loadingCtrl, apiService) {
        this.storage = storage;
        this.modalController = modalController;
        this.loadingCtrl = loadingCtrl;
        this.apiService = apiService;
        this.empresaId = "";
        this.reconocimientos = [];
        this.movilidad = [];
        this.bienestar = [];
        this.alianzas = [];
        this.ocio = [];
    }
    ionViewDidEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.presentLoading();
            const user = yield this.storage.get("userData");
            this.empresaId = user.empresa.id;
            this.reconocimientos = yield this.apiService.getCompanyRecognitios(this.empresaId);
            this.reconocimientos = this.reconocimientos.reconocimientos;
            this.movilidad = this.reconocimientos.filter((item) => {
                return item.categoria === 'Movilidad limpia';
            });
            this.bienestar = this.reconocimientos.filter((item) => {
                return item.categoria === 'Bienestar';
            });
            this.alianzas = this.reconocimientos.filter((item) => {
                return item.categoria === 'Alianzas';
            });
            this.ocio = this.reconocimientos.filter((item) => {
                return item.categoria === 'Ocio';
            });
            this.loading.dismiss();
        });
    }
    showRecognition(reconocimiento) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const recognition = yield this.apiService.getRecognitions(reconocimiento.id);
            console.log(recognition);
            const modal = yield this.modalController.create({
                component: _recognition_modal_recognition_modal_page__WEBPACK_IMPORTED_MODULE_6__["RecognitionModalPage"],
                componentProps: {
                    categoria: reconocimiento.categoria,
                    data: recognition
                }
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
                cssClass: 'my-custom-class',
                message: 'Cargando...'
            });
            yield this.loading.present();
        });
    }
    ngOnInit() {
    }
};
RecognitionsPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _services_api_publibike_bienestar_service__WEBPACK_IMPORTED_MODULE_7__["ApiPublibikeBienestarService"] }
];
RecognitionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-recognitions',
        template: _raw_loader_recognitions_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_recognitions_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RecognitionsPage);



/***/ }),

/***/ "tGfo":
/*!*****************************************************!*\
  !*** ./src/app/recognitions/recognitions.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo-ekobike-in {\n  position: unset;\n  margin-bottom: 30px;\n  margin-top: 20px;\n}\n\nion-avatar {\n  height: 120px;\n  width: 90%;\n}\n\nion-avatar img {\n  width: 90px;\n  height: 90px;\n}\n\nion-icon {\n  font-size: 75px;\n  display: block;\n  margin-bottom: 10px;\n}\n\nion-avatar span {\n  font-size: 16px;\n  color: #ffffff;\n}\n\nh1 {\n  color: var(--ion-color-tertiary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjb2duaXRpb25zL3JlY29nbml0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLFVBQUE7QUFFSjs7QUFBRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBR0o7O0FBREU7RUFDRSxlQUFBO0VBQ0gsY0FBQTtFQUNBLG1CQUFBO0FBSUQ7O0FBRkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUtKOztBQUhFO0VBQ0ksZ0NBQUE7QUFNTiIsImZpbGUiOiJzcmMvYXBwL3JlY29nbml0aW9ucy9yZWNvZ25pdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28tZWtvYmlrZS1pbiB7XHJcbiAgICBwb3NpdGlvbjogdW5zZXQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5pb24tYXZhdGFyIHtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gIH1cclxuICBpb24tYXZhdGFyIGltZyB7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIGhlaWdodDogOTBweDtcclxuICB9XHJcbiAgaW9uLWljb257XHJcbiAgICBmb250LXNpemU6IDc1cHg7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgaW9uLWF2YXRhciBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuICBoMXtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSlcclxuICB9Il19 */");

/***/ }),

/***/ "wrXu":
/*!*************************************************************!*\
  !*** ./src/app/recognitions/recognitions-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: RecognitionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecognitionsPageRoutingModule", function() { return RecognitionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _recognitions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recognitions.page */ "l31N");




const routes = [
    {
        path: '',
        component: _recognitions_page__WEBPACK_IMPORTED_MODULE_3__["RecognitionsPage"]
    }
];
let RecognitionsPageRoutingModule = class RecognitionsPageRoutingModule {
};
RecognitionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RecognitionsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=recognitions-recognitions-module-es2015.js.map