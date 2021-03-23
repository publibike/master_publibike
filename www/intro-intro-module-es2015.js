(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["intro-intro-module"],{

/***/ "Mw6b":
/*!***************************************!*\
  !*** ./src/app/intro/intro.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: var(--ion-color-success);\n  font-family: \"Times New Roman\", Times, serif;\n}\n\nion-slides {\n  background-color: #001434;\n  height: 100%;\n  max-width: 800px;\n}\n\n.swiper-slide {\n  display: block;\n  margin-bottom: 64px;\n  background-color: #001434;\n}\n\nion-slide > h1,\nh2 {\n  margin: 0 0 0 0;\n  color: var(--ion-color-primary);\n}\n\nion-slide > p {\n  font-style: italic;\n  font-size: 22px;\n  padding: 1em 1em 1em 1em;\n}\n\nion-slide > ion-icon {\n  color: var(--ion-color-success);\n  font-size: 48px;\n}\n\nion-slide > ion-icon[name=close] {\n  float: right;\n  color: var(--ion-color-primary);\n  font-size: 48px;\n}\n\nion-slide > img {\n  max-height: 30%;\n  max-width: 30%;\n  margin: 64px 121px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50cm8vaW50cm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0NBQUE7RUFDQSw0Q0FBQTtBQUNKOztBQUNFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBR0o7O0FBREU7O0VBRUUsZUFBQTtFQUNBLCtCQUFBO0FBSUo7O0FBRkU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBQUtKOztBQUhFO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0FBTUo7O0FBSkU7RUFDRSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0FBT0o7O0FBTEU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBUUoiLCJmaWxlIjoic3JjL2FwcC9pbnRyby9pbnRyby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gICAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgfVxuICBpb24tc2xpZGVzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzAwMTQzNDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgfVxuICAuc3dpcGVyLXNsaWRlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiA2NHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICAjMDAxNDM0O1xuICB9XG4gIGlvbi1zbGlkZSA+IGgxLFxuICBoMiB7XG4gICAgbWFyZ2luOiAwIDAgMCAwO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cbiAgaW9uLXNsaWRlID4gcCB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBwYWRkaW5nOiAxZW0gMWVtIDFlbSAxZW07XG4gIH1cbiAgaW9uLXNsaWRlID4gaW9uLWljb24ge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICB9XG4gIGlvbi1zbGlkZSA+IGlvbi1pY29uW25hbWU9XCJjbG9zZVwiXSB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICB9XG4gIGlvbi1zbGlkZSA+IGltZyB7XG4gICAgbWF4LWhlaWdodDogMzAlO1xuICAgIG1heC13aWR0aDogMzAlO1xuICAgIG1hcmdpbjogNjRweCAxMjFweDtcbiAgfVxuICAiXX0= */");

/***/ }),

/***/ "PQfJ":
/*!***************************************!*\
  !*** ./src/app/intro/intro.module.ts ***!
  \***************************************/
/*! exports provided: IntroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageModule", function() { return IntroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _intro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./intro-routing.module */ "QfDU");
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./intro.page */ "gpBf");







let IntroPageModule = class IntroPageModule {
};
IntroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _intro_routing_module__WEBPACK_IMPORTED_MODULE_5__["IntroPageRoutingModule"]
        ],
        declarations: [_intro_page__WEBPACK_IMPORTED_MODULE_6__["IntroPage"]]
    })
], IntroPageModule);



/***/ }),

/***/ "QfDU":
/*!***********************************************!*\
  !*** ./src/app/intro/intro-routing.module.ts ***!
  \***********************************************/
/*! exports provided: IntroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageRoutingModule", function() { return IntroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intro.page */ "gpBf");




const routes = [
    {
        path: '',
        component: _intro_page__WEBPACK_IMPORTED_MODULE_3__["IntroPage"]
    }
];
let IntroPageRoutingModule = class IntroPageRoutingModule {
};
IntroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IntroPageRoutingModule);



/***/ }),

/***/ "ce+c":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding >\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide *ngFor=\"let slide of slides\">\n      <ion-icon name=\"close\" (click)=\"finish()\"></ion-icon>\n      <img text-center src=\"assets/img/logo-publibike-dark.png\" alt=\"Platzi Music Logo\" />\n      <h1>{{ slide.title }}</h1>\n      <h2>{{ slide.subTitle }}</h2>\n      <p>\n        {{ slide.description }}\n      </p>\n      <ion-icon name=\"{{ slide.icon }}\"></ion-icon>\n    </ion-slide>\n  </ion-slides>\n</ion-content>");

/***/ }),

/***/ "gpBf":
/*!*************************************!*\
  !*** ./src/app/intro/intro.page.ts ***!
  \*************************************/
/*! exports provided: IntroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPage", function() { return IntroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_intro_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./intro.page.html */ "ce+c");
/* harmony import */ var _intro_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intro.page.scss */ "Mw6b");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "xgBC");







let IntroPage = class IntroPage {
    constructor(router, storage, navCtrl) {
        this.router = router;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.slideOpts = {
            initialSlide: 0,
            slidesPerView: 1,
            centeredSlides: true,
            speed: 400
        };
        this.slides = [
            {
                imageSrc: "assets/img/logo-publibike-dark.png",
                imageAlt: "Publibike Logo",
                title: "BIENVENIDO",
                subTitle: "",
                description: `Aprende a moverte a tu ritmo.`,
                icon: "bicycle"
            },
            {
                imageSrc: "assets/img/logo-publibike-dark.png",
                imageAlt: "Publibike Logo",
                title: "Primero",
                subTitle: "",
                description: `Da click en Iniciar Nuevo Recorrido`,
                icon: "bicycle"
            },
            {
                imageSrc: "assets/img/logo-publibike-dark.png",
                imageAlt: "Publibike Logo",
                title: "Segundo",
                subTitle: "",
                description: `Da click en el boton de Routing`,
                icon: "bicycle"
            },
            {
                imageSrc: "assets/img/logo-publibike-dark.png",
                imageAlt: "Publibike Logo",
                title: "Tercero",
                subTitle: "",
                description: `Coloca el punto inicial y final de la ruta a realizar`,
                icon: "bicycle"
            },
            {
                imageSrc: "assets/img/logo-publibike-dark.png",
                imageAlt: "Publibike Logo",
                title: "Cuarto",
                subTitle: "",
                description: `Selecciona entre: 
      s1. Ciclovia. 2.Principiante: Ciclorutas. 3.IntermedioA: Peatonal. 4.IntermedioB: . y 5.Avanzado: Malla vehicular `,
                icon: "bicycle"
            }
        ];
    }
    ngOnInit() {
    }
    //  async ionViewDidEnter(){
    //     const show = await this.storage.get("isIntroShowed");
    //     console.log(show);
    //     if(show===true){
    //       this.navCtrl.navigateForward("menu/home");
    //     }
    //   }
    finish() {
        this.storage.set("isIntroShowed", true);
        this.router.navigateByUrl("login");
    }
};
IntroPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
IntroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-intro',
        template: _raw_loader_intro_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_intro_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], IntroPage);



/***/ })

}]);
//# sourceMappingURL=intro-intro-module-es2015.js.map