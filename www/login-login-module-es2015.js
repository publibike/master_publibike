(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "34Y5":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "V6Ie");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "r67e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authenticate.service */ "fKRy");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "xgBC");








let LoginPage = class LoginPage {
    constructor(formBuilder, authServices, navCtrl, loadingCtrl, storage, alertController) {
        this.formBuilder = formBuilder;
        this.authServices = authServices;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.alertController = alertController;
        this.validation_messages = {
            user: [
                { type: "required", message: "El usuario es requerido" },
                { type: "minlength", message: "Minimo 6 nùmeros para el usuario" },
            ],
        };
        this.errorMessage = "";
        this.loginForm = this.formBuilder.group({
            user: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)])),
        });
    }
    loginUser(credentials) {
        this.presentLoading();
        console.log(credentials);
        this.authServices
            .loginUser(credentials)
            .then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(res);
            this.errorMessage = "";
            this.storage.set("isUserLoggedIn", true);
            this.storage.set("userId", res);
            this.loading.dismiss();
            console.log("estos son los datos de la monda esa ", res);
            const alert = yield this.alertController.create({
                cssClass: "my-custom-class",
                header: "Terminos Y Condiciones!",
                // message: "Al continuar aceptaras los terminos y condiciones!",
                message: "Al Continuar aceptaras los <a href='https://www.ecoapps.com.co/politica-de-tratamiento-de-datos-uflou/' target='_blank'>Terminos y Condiciones</a>!!!",
                buttons: [
                    {
                        text: "No Acepto",
                        role: "cancel",
                        cssClass: "secondary",
                    },
                    {
                        text: "Acepto",
                        handler: () => {
                            this.navCtrl.navigateForward("/tabs/profile");
                        },
                    },
                ],
            });
            yield alert.present();
            // this.storage.set("userData", res);
        }))
            .catch((err) => {
            console.log(err);
            this.loading.dismiss();
            console.error("ERROR", err.name);
            if (err.name == "SyntaxError") {
                console.log(err);
                this.errorMessage = "Usuario Incorrecto";
            }
            else if (err.name == "TypeError") {
                // this.errorMessage = "Usuario Incorrecto";
                console.log(err);
            }
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
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_authenticate_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-login",
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ }),

/***/ "V6Ie":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-content>\r\n\t<div class=\"main-wrapper\">\r\n\t\t<div class=\"logo-ekobike\">\r\n\t\t\t<a href=\"assets/index.html\">\r\n\t\t\t\t<img src=\"assets/img/logo-publibike.png\">\r\n\t\t\t</a>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"form-login\">\r\n\t\t\t<form class=\"ui form\" [formGroup]='loginForm' (ngSubmit)='loginUser(loginForm.value)'>\r\n\t\t\t\t<div class=\"field\">\r\n\t\t\t\t\t<ion-input type=\"text\" formControlName=\"user\" id=\"user\" placeholder=\"Ingresa tu usuario\">\r\n\t\t\t\t\t</ion-input>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"validation-error\">\r\n\t\t\t\t\t<ng-container *ngFor=\"let validation of validation_messages.user\">\r\n\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t*ngIf=\"loginForm.get('user').hasError(validation.type)&&(loginForm.get('user').dirty || loginForm.get('user').touched)\">\r\n\t\t\t\t\t\t\t<p id=\"alertUser\">{{validation.message}}</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</div>\r\n\t\t\t\t<p id=\"alertUser\"> {{errorMessage}}</p>\r\n\t\t\t\t<ion-button text-center class=\"ui button\" color=\"secondary\" [disabled]=\"!loginForm.valid\" type=\"Submit\">Ingresar\r\n\t\t\t\t</ion-button>\r\n\t\t\t\t<p id=\"alertUser\"></p>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"footer-main\">\r\n\t\t\t<!-- <img class=\"slogan-ekobike\" src=\"assets/img/slogan-ekobike.png\"> -->\r\n\t\t\t<div class=\"animation-bike\">\r\n\t\t\t\t<div class=\"biker\">\r\n\t\t\t\t\t<img src=\"assets/img/biker-ekobike.png\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<hr>\r\n\t\t</div>\r\n\t</div>\r\n</ion-content>");

/***/ }),

/***/ "X3zk":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "euwS");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "34Y5");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "euwS":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "34Y5");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "fKRy":
/*!**************************************************!*\
  !*** ./src/app/services/authenticate.service.ts ***!
  \**************************************************/
/*! exports provided: AuthenticateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateService", function() { return AuthenticateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "xgBC");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let AuthenticateService = class AuthenticateService {
    constructor(storage) {
        this.storage = storage;
    }
    loginUser(credential) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = yield this.storage.get('user');
            const options = {
                method: "POST",
                body: JSON.stringify(credential),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            };
            return fetch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].publibikeApi}/api/movil/login`, options).then(response => response.json());
        });
    }
};
AuthenticateService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
];
AuthenticateService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticateService);



/***/ }),

/***/ "r67e":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-login .ui.button {\n  padding: 0px;\n  border-radius: 20px !important;\n}\n\nion-content {\n  --background-position: top right;\n  --background: black;\n}\n\nion-button {\n  --border-radius: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBRUE7RUFHSSxnQ0FBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxxQkFBQTtBQURKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tbG9naW4gLnVpLmJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gICAgXHJcbiAgIC8vIC0tYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9kYXJrLWJhY2tncm91bmQtdWZsb3UtMDcuanBnXCIpIG5vLXJlcGVhdCAgY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodDtcclxuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7XHJcbn1cclxuXHJcbmlvbi1idXR0b257XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map