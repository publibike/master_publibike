(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["intro-intro-module"],{

/***/ "Mw6b":
/*!***************************************!*\
  !*** ./src/app/intro/intro.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: var(--ion-color-success);\n  font-family: \"Times New Roman\", Times, serif;\n}\n\nion-slides {\n  background-color: #ffffff;\n  height: 100%;\n  max-width: 800px;\n}\n\n.swiper-slide {\n  display: block;\n  margin-bottom: 64px;\n  background-color: #ffffff;\n  max-height: 94%;\n}\n\nion-slide > h1,\nh2 {\n  margin: 0 0 0 0;\n  color: var(--ion-color-primary);\n}\n\nion-slide > p {\n  font-style: italic;\n  font-size: 22px;\n  padding: 1em 1em 1em 1em;\n}\n\nion-slide > ion-icon {\n  color: var(--ion-color-success);\n  font-size: 48px;\n}\n\nion-slide > ion-icon[name=close] {\n  float: right;\n  color: var(--ion-color-primary);\n  font-size: 48px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50cm8vaW50cm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0NBQUE7RUFDQSw0Q0FBQTtBQUNKOztBQUNFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQUdKOztBQURFOztFQUVFLGVBQUE7RUFDQSwrQkFBQTtBQUlKOztBQUZFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUFLSjs7QUFIRTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtBQU1KOztBQUpFO0VBQ0UsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtBQU9KIiwiZmlsZSI6InNyYy9hcHAvaW50cm8vaW50cm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XHJcbiAgICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG4gIH1cclxuICBpb24tc2xpZGVzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICAjZmZmZmZmO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICB9XHJcbiAgLnN3aXBlci1zbGlkZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDY0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI2ZmZmZmZjtcclxuICAgIG1heC1oZWlnaHQ6IDk0JTtcclxuICB9XHJcbiAgaW9uLXNsaWRlID4gaDEsXHJcbiAgaDIge1xyXG4gICAgbWFyZ2luOiAwIDAgMCAwO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcbiAgaW9uLXNsaWRlID4gcCB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBwYWRkaW5nOiAxZW0gMWVtIDFlbSAxZW07XHJcbiAgfVxyXG4gIGlvbi1zbGlkZSA+IGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XHJcbiAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgfVxyXG4gIGlvbi1zbGlkZSA+IGlvbi1pY29uW25hbWU9XCJjbG9zZVwiXSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgZm9udC1zaXplOiA0OHB4O1xyXG4gIH1cclxuICAvLyBpb24tc2xpZGUgPiBpbWcge1xyXG4gIC8vICAgbWF4LWhlaWdodDogMzAlO1xyXG4gIC8vICAgbWF4LXdpZHRoOiAzMCU7XHJcbiAgLy8gICBtYXJnaW46IDY0cHggMTIxcHg7XHJcbiAgLy8gfVxyXG4gICJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding >\r\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\r\n    <ion-slide *ngFor=\"let slide of slides\">\r\n      <ion-icon name=\"close\" (click)=\"finish()\" style=\"margin-top: 35px;\"></ion-icon>\r\n      <img text-center src=\"{{slide.imagen}}\"/>\r\n      <ion-icon name=\"{{ slide.icon }}\"></ion-icon>\r\n    </ion-slide>\r\n  </ion-slides>\r\n</ion-content>");

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
                imagen: "assets/img/intro_1.jpg"
            },
            {
                imagen: "assets/img/intro_2.jpg"
            },
            {
                imagen: "assets/img/intro_3.jpg"
            },
            {
                imagen: "assets/img/intro_4.jpg"
            },
            {
                imagen: "assets/img/intro_5.jpg"
            },
            {
                imagen: "assets/img/intro_6.jpg"
            },
            {
                imagen: "assets/img/intro_7.jpg"
            }
        ];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const show = yield this.storage.get("isIntroShowed");
            console.log(show);
            if (show === true) {
                this.navCtrl.navigateForward("login");
            }
        });
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // const show = await this.storage.get("isIntroShowed");
            // console.log(show);
            // if(show===true){
            //   this.navCtrl.navigateForward("login");
            // }
        });
    }
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