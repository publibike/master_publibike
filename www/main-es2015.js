(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+XmF":
/*!***************************************!*\
  !*** ./src/app/guards/login.guard.ts ***!
  \***************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "xgBC");




let LoginGuard = class LoginGuard {
    constructor(storage, router) {
        this.storage = storage;
        this.router = router;
    }
    canActivate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const isUserLoggedIn = yield this.storage.get("isUserLoggedIn");
            if (isUserLoggedIn) {
                return true;
            }
            else {
                this.router.navigateByUrl("login");
            }
        });
    }
};
LoginGuard.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginGuard);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\rider\Documents\Desarrollos Independientes\Publibike\PublibikeMarca-APP\PublibikeMarcaApp\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    publibikeApi: "https://app.uflou.com.co"
    // publibikeApi: "http://127.0.0.1:3002"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "y2f/");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "p74H");







let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "y2f/");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "p74H");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "xgBC");
/* harmony import */ var _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/background-mode/ngx */ "AcVp");











let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["IonicStorageModule"].forRoot()
        ],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"],
            _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_10__["BackgroundMode"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _guards_login_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/login.guard */ "+XmF");




const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'intro',
        loadChildren: () => __webpack_require__.e(/*! import() | intro-intro-module */ "intro-intro-module").then(__webpack_require__.bind(null, /*! ./intro/intro.module */ "PQfJ")).then(m => m.IntroPageModule)
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() | login-login-module */[__webpack_require__.e("common"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null, /*! ./login/login.module */ "X3zk")).then(m => m.LoginPageModule)
    },
    // {
    //   path: 'home',
    //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    //   // canActivate: [LoginGuard]
    // },
    {
        path: 'menu',
        // loadChildren: "./menu/menu.module#MenuPageModule",
        loadChildren: () => __webpack_require__.e(/*! import() | menu-menu-module */ "menu-menu-module").then(__webpack_require__.bind(null, /*! ./menu/menu.module */ "19mU")).then(m => m.MenuPageModule),
        canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]]
    },
    {
        path: 'register',
        loadChildren: () => Promise.all(/*! import() | register-register-module */[__webpack_require__.e("common"), __webpack_require__.e("register-register-module")]).then(__webpack_require__.bind(null, /*! ./register/register.module */ "x5bZ")).then(m => m.RegisterPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"],
                paramsInheritanceStrategy: 'always'
            })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n@import url(\"https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap\");\n@charset \"UTF-8\";\n/******ICONS PUBLIBIKE******/\n@font-face {\n  font-family: \"app_publibike\";\n  src: url('app_publibike.eot');\n  src: url('app_publibike.eot') format(\"embedded-opentype\"), url('app_publibike.ttf') format(\"truetype\"), url('app_publibike.woff') format(\"woff\"), url('app_publibike.svg') format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: block;\n}\n[class^=icon-], [class*=\" icon-\"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"app_publibike\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.icon-home3:before {\n  content: \"\";\n}\n.icon-camera:before {\n  content: \"\";\n}\n.icon-map:before {\n  content: \"\";\n}\n.icon-calendar:before {\n  content: \"\";\n}\n.icon-user:before {\n  content: \"\";\n}\n.icon-search:before {\n  content: \"\";\n}\n.icon-lock:before {\n  content: \"\";\n}\n.icon-stats-dots:before {\n  content: \"\";\n}\n.icon-stats-bars:before {\n  content: \"\";\n}\n.icon-switch:before {\n  content: \"\";\n}\n.icon-menu:before {\n  content: \"\";\n}\n.icon-heart:before {\n  content: \"\";\n}\n.icon-cross:before {\n  content: \"\";\n}\nh1, h2, h3, h4, h5, h6, p, a, li, input, button {\n  font-family: \"Roboto\", sans-serif !important;\n}\nbody {\n  background-color: #001434;\n  height: auto;\n}\nimg {\n  width: 100%;\n}\n.main-wrapper {\n  padding: 0 20px;\n  position: relative;\n  visibility: hidden;\n}\n.header-index {\n  text-align: center;\n}\n.header-index .logo-publibike {\n  max-width: 150px;\n  margin-top: -100px;\n}\n.form-login input {\n  background-color: transparent !important;\n  border-bottom: 1px solid #f9b410 !important;\n  color: #fff !important;\n}\n.form-login input::-moz-placeholder {\n  color: #f9b410 !important;\n  font-size: 18px !important;\n}\n.form-login input::placeholder {\n  color: #f9b410 !important;\n  font-size: 18px !important;\n}\n.form-login a {\n  float: right;\n  color: #aaaaaa;\n  font-size: 16px !important;\n}\n.button-login {\n  display: inline-block;\n  margin-top: 40px;\n  width: 100%;\n}\n.button-login .button {\n  background-color: #f9b410;\n  width: 100%;\n}\n.form-login h4 {\n  color: #f9b410;\n  margin-top: 20px;\n  text-align: center;\n  font-weight: lighter;\n}\n.login-social {\n  text-align: center;\n}\n.login-social img {\n  max-width: 40px;\n}\n.new-user {\n  text-align: center;\n  margin-top: 20px;\n}\n.new-user a {\n  float: none;\n  font-size: 16px !important;\n}\n.logo-publibike-in {\n  text-align: center;\n}\n.logo-publibike-in img {\n  max-width: 100px;\n}\n.header-inside ul {\n  padding: 0;\n}\n.header-inside ul li {\n  display: inline-block;\n  width: 32%;\n  vertical-align: middle;\n}\n.header-inside ul li i {\n  color: #f9b410;\n  font-size: 30px;\n}\n.header-inside ul li:first-child {\n  text-align: left;\n}\n.header-inside ul li:nth-child(2) {\n  text-align: center;\n}\n.header-inside ul li:last-child {\n  text-align: right;\n}\n#sidebar-menu {\n  position: fixed;\n  height: 100%;\n  width: 0;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  background-color: #f9b410;\n  overflow-x: hidden;\n  transition: 0.4s;\n  box-sizing: border-box;\n}\n#sidebar-menu img {\n  max-width: 100px;\n}\n#sidebar-menu ul, #sidebar-menu li {\n  margin: 0;\n  padding: 0;\n  list-style: none inside;\n}\n#sidebar-menu ul {\n  margin: 20px auto;\n  display: block;\n  width: 80%;\n  min-width: 200px;\n}\n#sidebar-menu a {\n  display: block;\n  font-size: 120%;\n  color: #eee;\n  text-decoration: none;\n}\n.ui.form select {\n  color: #fff !important;\n  font-size: 20px;\n}\n#sidebar-menu a:hover {\n  color: #f9b410;\n  background-color: #001434;\n}\n#main-wrapper {\n  transition: left 0.4s;\n  padding: 1rem;\n}\n.abrir-cerrar {\n  color: #2E88C7;\n  font-size: 1rem;\n}\n#cerrar {\n  display: none;\n}\n#sidebar-menu li a {\n  font-size: 18px;\n  color: #001434;\n  padding: 10px;\n}\n#sidebar-menu li i {\n  margin-right: 10px;\n}\n#sidebar-menu li img {\n  margin-bottom: 20px;\n}\n.data-main {\n  text-align: center;\n  padding: 40px;\n  background-color: gray;\n  color: #fff;\n  margin: 5px;\n  width: 47% !important;\n  display: inline-block !important;\n}\n.data-main i {\n  font-size: 30px;\n}\n.data-main h4 {\n  font-weight: lighter;\n  margin: 0;\n  font-size: 16px;\n}\n.data-main h2 {\n  font-size: 25px;\n  margin: 0;\n}\n.degrade-green {\n  background: #006a0f;\n  background: linear-gradient(90deg, #006a0f 0%, #8dc935 100%);\n}\n.degrade-orange {\n  background: #fe342c;\n  background: linear-gradient(90deg, #fe342c 0%, #fdc935 100%);\n}\n.degrade-blue {\n  background: #014afd;\n  background: linear-gradient(90deg, #014afd 0%, #10cad7 100%);\n}\n.degrade-violet {\n  background: #a400d4;\n  background: linear-gradient(90deg, #a400d4 0%, #6a0094 100%);\n}\n.welcome-main {\n  margin-top: 40px;\n}\n.welcome-main h2 {\n  color: #f9b410;\n}\n.welcome-main h4 {\n  color: #fff;\n  font-size: 16px;\n  margin: 0;\n}\n.date {\n  text-align: center;\n  margin-top: 20px;\n}\n.date h3 {\n  color: #fff;\n  font-size: 25px;\n}\n.content-button {\n  text-align: center;\n}\n.begin-activity {\n  width: 100%;\n  background-color: #fe342c !important;\n  color: #fff !important;\n  border-radius: 0px !important;\n  padding: 0px !important;\n  margin: 10px 0 !important;\n  display: block !important;\n  font-size: 20px !important;\n}\n.go-campaings {\n  font-size: 20px !important;\n  width: 100%;\n  background-color: #6c0097 !important;\n  color: #fff !important;\n  border-radius: 0px !important;\n  padding: 10px !important;\n  margin: 10px 0 !important;\n  display: block !important;\n}\n.stop-activity {\n  font-size: 20px !important;\n  width: 100%;\n  background-color: #fff !important;\n  color: #fe342c !important;\n  border-radius: 0px !important;\n  padding: 10px !important;\n  margin: 10px 0 !important;\n  display: block !important;\n}\n.chrono {\n  display: block !important;\n  margin-top: 10px !important;\n}\n.chrono h2, .chrono h3, .chrono h4 {\n  color: #fff !important;\n}\n.chrono h4 {\n  font-weight: lighter;\n}\n.chrono h2 {\n  font-size: 30px;\n}\n.chrono .four {\n  border-right: 1px solid #f9b410;\n}\n.data-rute {\n  width: 50% !important;\n  display: inline-block !important;\n  color: #fff;\n}\n.data-rute i {\n  font-size: 30px;\n}\n.data-rute h4 {\n  font-size: 12px;\n  font-weight: lighter;\n  margin: 0;\n}\n.data-rute h2 {\n  font-size: 20px;\n}\n.column.campaing {\n  background-color: #fff;\n  margin: 5px;\n  padding: 10px;\n  width: 46%;\n  display: inline-block;\n  vertical-align: top;\n}\n.column.campaing h4 {\n  margin: 10px 0px;\n  color: #001434;\n}\n.column.campaing h4 small {\n  display: block;\n  font-size: 16px;\n  font-weight: lighter;\n}\n.title-publibike {\n  padding: 10px;\n  color: #fff;\n}\n.title-publibike h2 {\n  font-size: 20px;\n}\n.title-campaing {\n  color: #f9b410;\n  font-weight: lighter;\n}\n.state-campaing h3:before {\n  content: \"• \";\n  font-size: 45px;\n  display: inline-block;\n  margin-right: 11px;\n  vertical-align: middle;\n}\n.state-campaing h3 {\n  margin: 0;\n  font-size: 10px;\n  text-transform: uppercase;\n}\n.state-campaing.active {\n  color: #4a9a00;\n}\n.state-campaing.no-disponible {\n  color: #8e8e8e;\n}\n.warning-date {\n  color: #d72024 !important;\n}\n.warning-quotas {\n  color: #f1a30c !important;\n}\n.suscribe-campaing {\n  background-color: #f1a30c;\n  color: #001434;\n  padding: 10px;\n  text-align: center;\n  width: 100%;\n  font-weight: bold;\n  margin-bottom: 5px;\n  display: block;\n}\n.start-campaing {\n  background-color: #fe342c;\n  color: #fff;\n  padding: 10px;\n  text-align: center;\n  width: 100%;\n  font-weight: bold;\n  margin-bottom: 5px;\n  display: block;\n}\n.logo-campaing {\n  text-align: center;\n}\n.logo-campaing img {\n  max-width: 200px;\n}\n.begin-campaing, .logo-campaing {\n  background-color: #fff;\n}\n.begin-campaing .column {\n  width: 49%;\n  display: inline-block;\n  vertical-align: top;\n  padding: 5px;\n}\n.begin-campaing .column-full {\n  width: 100%;\n  padding: 5px;\n}\n.begin-campaing h4 {\n  color: #001434;\n}\n.begin-campaing h4 small {\n  display: block;\n  font-size: 16px;\n  font-weight: lighter;\n}\n.photo-campaing {\n  background-color: #aaaaaa;\n  text-align: center;\n  padding: 40px;\n}\n.photo-campaing i {\n  color: #727272;\n  font-size: 40px;\n}\n.title-rute {\n  color: #f9b410;\n  text-align: center;\n}\n.title-rute small {\n  color: #fff;\n  display: block;\n}\n.table-routes {\n  overflow-x: scroll;\n}\n.table-routes-content {\n  width: 920px;\n}\n.table-routes .row {\n  border-bottom: 1px solid #f9b410;\n}\n.table-routes .header-table div {\n  color: #f9b410;\n}\n.route-column {\n  width: 150px;\n  display: inline-block;\n  padding: 10px;\n  color: #fff;\n  font-size: 16px;\n}\n.content-profile ul {\n  list-style: none;\n  padding: 0;\n}\n.content-profile ul li {\n  display: inline-block;\n  vertical-align: middle;\n}\n.content-profile ul li:first-child {\n  width: 30%;\n  margin-right: 10px;\n}\n.content-profile ul li img {\n  width: 100%;\n}\n.content-profile ul li h2 {\n  color: #f9b410;\n  font-size: 20px;\n  margin: 0;\n}\n.content-profile ul li h4 {\n  color: #fff;\n  margin: 0;\n  font-size: 16px;\n}\n.info-profile h2 {\n  color: #f9b410;\n}\n.data-profile.ui.grid > .column:not(.row), .data-profile.ui.grid > .row > .column {\n  width: 100% !important;\n}\n.data-profile.ui.grid > .column:not(.row) input, .data-profile.ui.grid > .row > .column input, .data-profile.ui.grid > .column:not(.row) select, .data-profile.ui.grid > .row > .column select {\n  background-color: transparent !important;\n  border-bottom: 1px solid #f9b410 !important;\n}\n.data-profile.ui.grid > .column h4 {\n  color: #fff;\n  font-size: 16px;\n  margin-bottom: 0;\n  font-weight: lighter;\n}\n.data-profile.ui.grid > .column input::-moz-placeholder {\n  font-size: 20px;\n  color: #fff;\n}\n.data-profile.ui.grid > .column input, .data-profile.ui.grid > .column input::placeholder, .data-profile.ui.grid > .column select option:not(:checked) {\n  font-size: 20px;\n  color: #fff;\n}\n.data-profile.ui.grid > .column input, .data-profile.ui.grid > .column select {\n  opacity: 1 !important;\n}\n.chrono {\n  background-color: #001434;\n  padding: 20px;\n  margin: 0 !important;\n}\n#alertUser {\n  color: red;\n  text-align: center;\n}\n.esri-widget--button {\n  background-color: #f9b410 !important;\n  color: #001434 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBUSxzRkFBQTtBQUFSLGdCQUFnQjtBQUVoQiw0QkFBQTtBQUVBO0VBQ0UsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLHdMQUFBO0VBSUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSEY7QUFNQTtFQUNFLCtFQUFBO0VBQ0EsdUNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBRUEsc0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0FBTEY7QUFRQTtFQUNFLFlBQUE7QUFMRjtBQU9BO0VBQ0UsWUFBQTtBQUpGO0FBTUE7RUFDRSxZQUFBO0FBSEY7QUFLQTtFQUNFLFlBQUE7QUFGRjtBQUlBO0VBQ0UsWUFBQTtBQURGO0FBR0E7RUFDRSxZQUFBO0FBQUY7QUFFQTtFQUNFLFlBQUE7QUFDRjtBQUNBO0VBQ0UsWUFBQTtBQUVGO0FBQUE7RUFDRSxZQUFBO0FBR0Y7QUFEQTtFQUNFLFlBQUE7QUFJRjtBQUZBO0VBQ0UsWUFBQTtBQUtGO0FBSEE7RUFDRSxZQUFBO0FBTUY7QUFKQTtFQUNFLFlBQUE7QUFPRjtBQUhBO0VBQ0MsNENBQUE7QUFNRDtBQUZBO0VBQ0MseUJBQUE7RUFDQSxZQUFBO0FBS0Q7QUFGQTtFQUNDLFdBQUE7QUFLRDtBQUZBO0VBQ0MsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFLRDtBQUZBO0VBQ0Msa0JBQUE7QUFLRDtBQUZBO0VBQ0MsZ0JBQUE7RUFDQSxrQkFBQTtBQUtEO0FBRkE7RUFDQyx3Q0FBQTtFQUNBLDJDQUFBO0VBQ0Esc0JBQUE7QUFLRDtBQUZBO0VBQ0MseUJBQUE7RUFDQSwwQkFBQTtBQUtEO0FBUEE7RUFDQyx5QkFBQTtFQUNBLDBCQUFBO0FBS0Q7QUFEQTtFQUNDLFlBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUFJRDtBQURBO0VB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RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFDRDtBQUVBO0VBQ0MseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFDRDtBQUVBO0VBQ0MsY0FBQTtFQUNBLGVBQUE7QUFDRDtBQUVBO0VBQ0MsY0FBQTtFQUNBLGtCQUFBO0FBQ0Q7QUFFQTtFQUNDLFdBQUE7RUFDQSxjQUFBO0FBQ0Q7QUFFQTtFQUNDLGtCQUFBO0FBQ0Q7QUFFQTtFQUNDLFlBQUE7QUFDRDtBQUVBO0VBQ0MsZ0NBQUE7QUFDRDtBQUVBO0VBQ0MsY0FBQTtBQUNEO0FBRUE7RUFDQyxZQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFDRDtBQUVBO0VBQ0MsZ0JBQUE7RUFDQSxVQUFBO0FBQ0Q7QUFFQTtFQUNDLHFCQUFBO0VBQ0Esc0JBQUE7QUFDRDtBQUVBO0VBQ0MsVUFBQTtFQUNBLGtCQUFBO0FBQ0Q7QUFFQTtFQUNDLFdBQUE7QUFDRDtBQUVBO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBQ0Q7QUFFQTtFQUNDLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQUNEO0FBRUE7RUFDQyxjQUFBO0FBQ0Q7QUFFQTtFQUNDLHNCQUFBO0FBQ0Q7QUFFQTtFQUNDLHdDQUFBO0VBQ0EsMkNBQUE7QUFDRDtBQUVBO0VBQ0MsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBQ0Q7QUFFQTtFQUNDLGVBQUE7RUFDQSxXQUFBO0FBQ0Q7QUFIQTtFQUNDLGVBQUE7RUFDQSxXQUFBO0FBQ0Q7QUFFQTtFQUNDLHFCQUFBO0FBQ0Q7QUFFQTtFQUNDLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FBQ0Q7QUFFQTtFQUNDLFVBQUE7RUFDQSxrQkFBQTtBQUNEO0FBR0E7RUFDQyxvQ0FBQTtFQUNBLHlCQUFBO0FBQUQiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwLDQwMCw3MDAmZGlzcGxheT1zd2FwXCIpO1xuLyoqKioqKklDT05TIFBVQkxJQklLRSoqKioqKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJhcHBfcHVibGliaWtlXCI7XG4gIHNyYzogdXJsKFwiLi4vYXNzZXRzL2ZvbnRzL2FwcF9wdWJsaWJpa2UuZW90P3dicHM5bVwiKTtcbiAgc3JjOiB1cmwoXCIuLi9hc3NldHMvZm9udHMvYXBwX3B1YmxpYmlrZS5lb3Q/d2JwczltI2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoXCIuLi9hc3NldHMvZm9udHMvYXBwX3B1YmxpYmlrZS50dGY/d2JwczltXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLCB1cmwoXCIuLi9hc3NldHMvZm9udHMvYXBwX3B1YmxpYmlrZS53b2ZmP3dicHM5bVwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIuLi9hc3NldHMvZm9udHMvYXBwX3B1YmxpYmlrZS5zdmc/d2JwczltI2FwcF9wdWJsaWJpa2VcIikgZm9ybWF0KFwic3ZnXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogYmxvY2s7XG59XG5bY2xhc3NePWljb24tXSwgW2NsYXNzKj1cIiBpY29uLVwiXSB7XG4gIC8qIHVzZSAhaW1wb3J0YW50IHRvIHByZXZlbnQgaXNzdWVzIHdpdGggYnJvd3NlciBleHRlbnNpb25zIHRoYXQgY2hhbmdlIGZvbnRzICovXG4gIGZvbnQtZmFtaWx5OiBcImFwcF9wdWJsaWJpa2VcIiAhaW1wb3J0YW50O1xuICBzcGVhazogbm9uZTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAvKiBCZXR0ZXIgRm9udCBSZW5kZXJpbmcgPT09PT09PT09PT0gKi9cbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbi5pY29uLWhvbWUzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSCXCI7XG59XG5cbi5pY29uLWNhbWVyYTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6kj1wiO1xufVxuXG4uaWNvbi1tYXA6YmVmb3JlIHtcbiAgY29udGVudDogXCLupYtcIjtcbn1cblxuLmljb24tY2FsZW5kYXI6YmVmb3JlIHtcbiAgY29udGVudDogXCLupZNcIjtcbn1cblxuLmljb24tdXNlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6lsVwiO1xufVxuXG4uaWNvbi1zZWFyY2g6YmVmb3JlIHtcbiAgY29udGVudDogXCLupoZcIjtcbn1cblxuLmljb24tbG9jazpiZWZvcmUge1xuICBjb250ZW50OiBcIu6mj1wiO1xufVxuXG4uaWNvbi1zdGF0cy1kb3RzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qabXCI7XG59XG5cbi5pY29uLXN0YXRzLWJhcnM6YmVmb3JlIHtcbiAgY29udGVudDogXCLuppxcIjtcbn1cblxuLmljb24tc3dpdGNoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qa2XCI7XG59XG5cbi5pY29uLW1lbnU6YmVmb3JlIHtcbiAgY29udGVudDogXCLupr1cIjtcbn1cblxuLmljb24taGVhcnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLup5pcIjtcbn1cblxuLmljb24tY3Jvc3M6YmVmb3JlIHtcbiAgY29udGVudDogXCLuqI9cIjtcbn1cblxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYSwgbGksIGlucHV0LCBidXR0b24ge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMTQzNDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1haW4td3JhcHBlciB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5oZWFkZXItaW5kZXgge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItaW5kZXggLmxvZ28tcHVibGliaWtlIHtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbiAgbWFyZ2luLXRvcDogLTEwMHB4O1xufVxuXG4uZm9ybS1sb2dpbiBpbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjliNDEwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5mb3JtLWxvZ2luIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZjliNDEwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xufVxuXG4uZm9ybS1sb2dpbiBhIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogI2FhYWFhYTtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b24tbG9naW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYnV0dG9uLWxvZ2luIC5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjliNDEwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0tbG9naW4gaDQge1xuICBjb2xvcjogI2Y5YjQxMDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cblxuLmxvZ2luLXNvY2lhbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luLXNvY2lhbCBpbWcge1xuICBtYXgtd2lkdGg6IDQwcHg7XG59XG5cbi5uZXctdXNlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLm5ldy11c2VyIGEge1xuICBmbG9hdDogbm9uZTtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5sb2dvLXB1YmxpYmlrZS1pbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ28tcHVibGliaWtlLWluIGltZyB7XG4gIG1heC13aWR0aDogMTAwcHg7XG59XG5cbi5oZWFkZXItaW5zaWRlIHVsIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmhlYWRlci1pbnNpZGUgdWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMiU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5oZWFkZXItaW5zaWRlIHVsIGxpIGkge1xuICBjb2xvcjogI2Y5YjQxMDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uaGVhZGVyLWluc2lkZSB1bCBsaTpmaXJzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5oZWFkZXItaW5zaWRlIHVsIGxpOm50aC1jaGlsZCgyKSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRlci1pbnNpZGUgdWwgbGk6bGFzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4jc2lkZWJhci1tZW51IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAwO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWI0MTA7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuI3NpZGViYXItbWVudSBpbWcge1xuICBtYXgtd2lkdGg6IDEwMHB4O1xufVxuXG4jc2lkZWJhci1tZW51IHVsLCAjc2lkZWJhci1tZW51IGxpIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lIGluc2lkZTtcbn1cblxuI3NpZGViYXItbWVudSB1bCB7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDgwJTtcbiAgbWluLXdpZHRoOiAyMDBweDtcbn1cblxuI3NpZGViYXItbWVudSBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTIwJTtcbiAgY29sb3I6ICNlZWU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnVpLmZvcm0gc2VsZWN0IHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4jc2lkZWJhci1tZW51IGE6aG92ZXIge1xuICBjb2xvcjogI2Y5YjQxMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMTQzNDtcbn1cblxuI21haW4td3JhcHBlciB7XG4gIHRyYW5zaXRpb246IGxlZnQgMC40cztcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLmFicmlyLWNlcnJhciB7XG4gIGNvbG9yOiAjMkU4OEM3O1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbiNjZXJyYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jc2lkZWJhci1tZW51IGxpIGEge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMDAxNDM0O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4jc2lkZWJhci1tZW51IGxpIGkge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbiNzaWRlYmFyLW1lbnUgbGkgaW1nIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmRhdGEtbWFpbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogNXB4O1xuICB3aWR0aDogNDclICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufVxuXG4uZGF0YS1tYWluIGkge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5kYXRhLW1haW4gaDQge1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5kYXRhLW1haW4gaDIge1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLmRlZ3JhZGUtZ3JlZW4ge1xuICBiYWNrZ3JvdW5kOiAjMDA2YTBmO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwMDZhMGYgMCUsICM4ZGM5MzUgMTAwJSk7XG59XG5cbi5kZWdyYWRlLW9yYW5nZSB7XG4gIGJhY2tncm91bmQ6ICNmZTM0MmM7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZlMzQyYyAwJSwgI2ZkYzkzNSAxMDAlKTtcbn1cblxuLmRlZ3JhZGUtYmx1ZSB7XG4gIGJhY2tncm91bmQ6ICMwMTRhZmQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAxNGFmZCAwJSwgIzEwY2FkNyAxMDAlKTtcbn1cblxuLmRlZ3JhZGUtdmlvbGV0IHtcbiAgYmFja2dyb3VuZDogI2E0MDBkNDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjYTQwMGQ0IDAlLCAjNmEwMDk0IDEwMCUpO1xufVxuXG4ud2VsY29tZS1tYWluIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLndlbGNvbWUtbWFpbiBoMiB7XG4gIGNvbG9yOiAjZjliNDEwO1xufVxuXG4ud2VsY29tZS1tYWluIGg0IHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZGF0ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmRhdGUgaDMge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uY29udGVudC1idXR0b24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iZWdpbi1hY3Rpdml0eSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmUzNDJjICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAxMHB4IDAgIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5nby1jYW1wYWluZ3Mge1xuICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2YzAwOTcgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAxMHB4IDAgIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLnN0b3AtYWN0aXZpdHkge1xuICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZTM0MmMgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAxMHB4IDAgIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLmNocm9ubyB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmNocm9ubyBoMiwgLmNocm9ubyBoMywgLmNocm9ubyBoNCB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5jaHJvbm8gaDQge1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cblxuLmNocm9ubyBoMiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmNocm9ubyAuZm91ciB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmOWI0MTA7XG59XG5cbi5kYXRhLXJ1dGUge1xuICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmRhdGEtcnV0ZSBpIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uZGF0YS1ydXRlIGg0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZGF0YS1ydXRlIGgyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uY29sdW1uLmNhbXBhaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiA0NiU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmNvbHVtbi5jYW1wYWluZyBoNCB7XG4gIG1hcmdpbjogMTBweCAwcHg7XG4gIGNvbG9yOiAjMDAxNDM0O1xufVxuXG4uY29sdW1uLmNhbXBhaW5nIGg0IHNtYWxsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG5cbi50aXRsZS1wdWJsaWJpa2Uge1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnRpdGxlLXB1YmxpYmlrZSBoMiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnRpdGxlLWNhbXBhaW5nIHtcbiAgY29sb3I6ICNmOWI0MTA7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG4uc3RhdGUtY2FtcGFpbmcgaDM6YmVmb3JlIHtcbiAgY29udGVudDogXCLigKIgXCI7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDExcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5zdGF0ZS1jYW1wYWluZyBoMyB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uc3RhdGUtY2FtcGFpbmcuYWN0aXZlIHtcbiAgY29sb3I6ICM0YTlhMDA7XG59XG5cbi5zdGF0ZS1jYW1wYWluZy5uby1kaXNwb25pYmxlIHtcbiAgY29sb3I6ICM4ZThlOGU7XG59XG5cbi53YXJuaW5nLWRhdGUge1xuICBjb2xvcjogI2Q3MjAyNCAhaW1wb3J0YW50O1xufVxuXG4ud2FybmluZy1xdW90YXMge1xuICBjb2xvcjogI2YxYTMwYyAhaW1wb3J0YW50O1xufVxuXG4uc3VzY3JpYmUtY2FtcGFpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFhMzBjO1xuICBjb2xvcjogIzAwMTQzNDtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zdGFydC1jYW1wYWluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZTM0MmM7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmxvZ28tY2FtcGFpbmcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dvLWNhbXBhaW5nIGltZyB7XG4gIG1heC13aWR0aDogMjAwcHg7XG59XG5cbi5iZWdpbi1jYW1wYWluZywgLmxvZ28tY2FtcGFpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uYmVnaW4tY2FtcGFpbmcgLmNvbHVtbiB7XG4gIHdpZHRoOiA0OSU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uYmVnaW4tY2FtcGFpbmcgLmNvbHVtbi1mdWxsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmJlZ2luLWNhbXBhaW5nIGg0IHtcbiAgY29sb3I6ICMwMDE0MzQ7XG59XG5cbi5iZWdpbi1jYW1wYWluZyBoNCBzbWFsbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG4ucGhvdG8tY2FtcGFpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhYWFhO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDQwcHg7XG59XG5cbi5waG90by1jYW1wYWluZyBpIHtcbiAgY29sb3I6ICM3MjcyNzI7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLnRpdGxlLXJ1dGUge1xuICBjb2xvcjogI2Y5YjQxMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGl0bGUtcnV0ZSBzbWFsbCB7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnRhYmxlLXJvdXRlcyB7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbn1cblxuLnRhYmxlLXJvdXRlcy1jb250ZW50IHtcbiAgd2lkdGg6IDkyMHB4O1xufVxuXG4udGFibGUtcm91dGVzIC5yb3cge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y5YjQxMDtcbn1cblxuLnRhYmxlLXJvdXRlcyAuaGVhZGVyLXRhYmxlIGRpdiB7XG4gIGNvbG9yOiAjZjliNDEwO1xufVxuXG4ucm91dGUtY29sdW1uIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5jb250ZW50LXByb2ZpbGUgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY29udGVudC1wcm9maWxlIHVsIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uY29udGVudC1wcm9maWxlIHVsIGxpOmZpcnN0LWNoaWxkIHtcbiAgd2lkdGg6IDMwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uY29udGVudC1wcm9maWxlIHVsIGxpIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGVudC1wcm9maWxlIHVsIGxpIGgyIHtcbiAgY29sb3I6ICNmOWI0MTA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY29udGVudC1wcm9maWxlIHVsIGxpIGg0IHtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uaW5mby1wcm9maWxlIGgyIHtcbiAgY29sb3I6ICNmOWI0MTA7XG59XG5cbi5kYXRhLXByb2ZpbGUudWkuZ3JpZCA+IC5jb2x1bW46bm90KC5yb3cpLCAuZGF0YS1wcm9maWxlLnVpLmdyaWQgPiAucm93ID4gLmNvbHVtbiB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5kYXRhLXByb2ZpbGUudWkuZ3JpZCA+IC5jb2x1bW46bm90KC5yb3cpIGlucHV0LCAuZGF0YS1wcm9maWxlLnVpLmdyaWQgPiAucm93ID4gLmNvbHVtbiBpbnB1dCwgLmRhdGEtcHJvZmlsZS51aS5ncmlkID4gLmNvbHVtbjpub3QoLnJvdykgc2VsZWN0LCAuZGF0YS1wcm9maWxlLnVpLmdyaWQgPiAucm93ID4gLmNvbHVtbiBzZWxlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y5YjQxMCAhaW1wb3J0YW50O1xufVxuXG4uZGF0YS1wcm9maWxlLnVpLmdyaWQgPiAuY29sdW1uIGg0IHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG5cbi5kYXRhLXByb2ZpbGUudWkuZ3JpZCA+IC5jb2x1bW4gaW5wdXQsIC5kYXRhLXByb2ZpbGUudWkuZ3JpZCA+IC5jb2x1bW4gaW5wdXQ6OnBsYWNlaG9sZGVyLCAuZGF0YS1wcm9maWxlLnVpLmdyaWQgPiAuY29sdW1uIHNlbGVjdCBvcHRpb246bm90KDpjaGVja2VkKSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5kYXRhLXByb2ZpbGUudWkuZ3JpZCA+IC5jb2x1bW4gaW5wdXQsIC5kYXRhLXByb2ZpbGUudWkuZ3JpZCA+IC5jb2x1bW4gc2VsZWN0IHtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuXG4uY2hyb25vIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMTQzNDtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cbiNhbGVydFVzZXIge1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5lc3JpLXdpZGdldC0tYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5YjQxMCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzAwMTQzNCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "wAiw");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map