(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["record-record-module"],{

/***/ "5eZB":
/*!***************************************!*\
  !*** ./src/app/record/record.page.ts ***!
  \***************************************/
/*! exports provided: RecordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordPage", function() { return RecordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_record_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./record.page.html */ "KkV5");
/* harmony import */ var _record_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./record.page.scss */ "hAuV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "xgBC");
/* harmony import */ var _services_api_publibike_bienestar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api-publibike-bienestar.service */ "N/ei");






let RecordPage = class RecordPage {
    constructor(storage, apiService) {
        this.storage = storage;
        this.apiService = apiService;
        this.userId = { _id: "" };
        this.user = {
            nombre: "",
            apellido: "",
            usuario: "",
            empresa: {
                nombre: ""
            },
            reconocimientos: [],
            km_total: 0,
            cal_total: 0,
            co2_total: 0,
            tiempo_total: 0
        };
    }
    ionViewDidEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.userId = yield this.storage.get("userId");
            // console.log(this.userId)
            this.apiService.getUserData(this.userId._id).then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.storage.set("userData", res);
                this.user = yield this.storage.get("userData");
                console.log(this.user);
                this.user.km_total = (this.user.km_total * 100) / 1000;
                this.user.cal_total = (this.user.cal_total * 100) / 1000;
                this.user.co2_total = (this.user.co2_total * 100) / 1000;
                this.user.tiempo_total = (this.user.tiempo_total * 100) / 1000;
            }));
        });
    }
    ngOnInit() {
    }
};
RecordPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _services_api_publibike_bienestar_service__WEBPACK_IMPORTED_MODULE_5__["ApiPublibikeBienestarService"] }
];
RecordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-record',
        template: _raw_loader_record_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_record_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RecordPage);



/***/ }),

/***/ "KkV5":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/record/record.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div class=\"logo-ekobike-in\">    \r\n    <img src=\"assets/img/logo-ekobike.png\">\r\n</div>\r\n  <h2 class=\"title-section\"><i class=\"icon-linegraph\"></i>Histórico</h2>\r\n  <div class=\"ui form date-historic\">\r\n    <!-- <div>\r\n      <div class=\"field\">\r\n        <label>Inicio</label>\r\n        <div class=\"ui calendar\" id=\"rangestart\">\r\n          <div class=\"ui input\">\r\n            <input type=\"text\" class=\"styleDate datetime\" placeholder=\"18 Ene 2020\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"field\">\r\n        <label>Fin</label>\r\n        <div class=\"ui calendar\" id=\"rangeend\">\r\n          <div class=\"ui input\">\r\n            <input type=\"text\" class=\"styleDate datetime\" placeholder=\"20 Ene 2020\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n  </div>\r\n  <div class=\"ui internally celled grid historic\">\r\n    <div class=\"row\">\r\n      <div class=\"six wide column\">\r\n        <h4>Kilometros Recorridos</h4>\r\n      </div>\r\n      <div class=\"ten wide column\">\r\n        <div class=\"ui violet progress\">\r\n          <div class=\"bar\" [ngStyle]=\"{'transition-duration': '300ms', 'display': 'block', 'width': user.km_total+'%', 'height': '20px'}\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"six wide column\">\r\n        <h4>CO2 Reducido</h4>\r\n      </div>\r\n      <div class=\"ten wide column\">\r\n        <div class=\"ui yellow progress\" data-percent=\"60\">\r\n          <div class=\"bar\" [ngStyle]=\"{'transition-duration': '300ms', 'display': 'block', 'width': user.co2_total+'%', 'height': '20px'}\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"six wide column\">\r\n        <h4>Consumo de Calorías</h4>\r\n      </div>\r\n      <div class=\"ten wide column\">\r\n        <div class=\"ui orange progress\">\r\n          <div class=\"bar\" [ngStyle]=\"{'transition-duration': '300ms', 'display': 'block', 'width': user.cal_total+'%', 'height': '20px'}\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"six wide column\">\r\n        <h4>Tiempo Recorrido</h4>\r\n      </div>\r\n      <div class=\"ten wide column\">\r\n        <div class=\"ui blue progress\">\r\n          <div class=\"bar\" [ngStyle]=\"{'transition-duration': '300ms', 'display': 'block', 'width': user.tiempo_total+'%', 'height': '20px'}\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- <div class=\"row\">\r\n      <div class=\"six wide column\">\r\n        <h4>Velocidad Máxima</h4>\r\n      </div>\r\n      <div class=\"ten wide column\">\r\n        <div class=\"ui white progress\">\r\n          <div class=\"bar\" style=\"transition-duration: 300ms; display: block; width: 60%; height: 20px;\"></div>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "faDB":
/*!*****************************************!*\
  !*** ./src/app/record/record.module.ts ***!
  \*****************************************/
/*! exports provided: RecordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordPageModule", function() { return RecordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _record_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./record-routing.module */ "vXIp");
/* harmony import */ var _record_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./record.page */ "5eZB");







let RecordPageModule = class RecordPageModule {
};
RecordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _record_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecordPageRoutingModule"]
        ],
        declarations: [_record_page__WEBPACK_IMPORTED_MODULE_6__["RecordPage"]]
    })
], RecordPageModule);



/***/ }),

/***/ "hAuV":
/*!*****************************************!*\
  !*** ./src/app/record/record.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo-ekobike-in {\n  position: unset;\n  margin-bottom: 30px;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjb3JkL3JlY29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcmVjb3JkL3JlY29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nby1la29iaWtlLWluIHtcbiAgICBwb3NpdGlvbjogdW5zZXQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "vXIp":
/*!*************************************************!*\
  !*** ./src/app/record/record-routing.module.ts ***!
  \*************************************************/
/*! exports provided: RecordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordPageRoutingModule", function() { return RecordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _record_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./record.page */ "5eZB");




const routes = [
    {
        path: '',
        component: _record_page__WEBPACK_IMPORTED_MODULE_3__["RecordPage"]
    }
];
let RecordPageRoutingModule = class RecordPageRoutingModule {
};
RecordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RecordPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=record-record-module-es2015.js.map