(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-module"],{

/***/ "19mU":
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-routing.module */ "nedP");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.page */ "ylOD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");








const routes = [
    {
        path: "",
        component: _menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"],
        children: [
            {
                path: "home",
                loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ../home/home.module */ "ct+p")).then(m => m.HomePageModule)
            },
            {
                path: 'profile',
                loadChildren: () => Promise.all(/*! import() | profile-profile-module */[__webpack_require__.e("common"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null, /*! ../profile/profile.module */ "cRhG")).then(m => m.ProfilePageModule)
            },
            {
                path: 'campaings',
                loadChildren: () => __webpack_require__.e(/*! import() | campaings-campaings-module */ "campaings-campaings-module").then(__webpack_require__.bind(null, /*! ../campaings/campaings.module */ "8kny")).then(m => m.CampaingsPageModule)
            },
            {
                path: 'rutes',
                loadChildren: () => Promise.all(/*! import() | rutes-rutes-module */[__webpack_require__.e("common"), __webpack_require__.e("rutes-rutes-module")]).then(__webpack_require__.bind(null, /*! ../rutes/rutes.module */ "bUJ/")).then(m => m.RutesPageModule)
            },
            {
                path: 'rute',
                loadChildren: () => Promise.all(/*! import() | rute-rute-module */[__webpack_require__.e("common"), __webpack_require__.e("rute-rute-module")]).then(__webpack_require__.bind(null, /*! ../rute/rute.module */ "4+Gx")).then(m => m.RutePageModule)
            },
            {
                path: 'start-campaing',
                loadChildren: () => __webpack_require__.e(/*! import() | start-campaing-start-campaing-module */ "start-campaing-start-campaing-module").then(__webpack_require__.bind(null, /*! ../start-campaing/start-campaing.module */ "UYBe")).then(m => m.StartCampaingPageModule)
            },
            {
                path: 'subscribe-campaing',
                loadChildren: () => __webpack_require__.e(/*! import() | subscribe-campaing-subscribe-campaing-module */ "subscribe-campaing-subscribe-campaing-module").then(__webpack_require__.bind(null, /*! ../subscribe-campaing/subscribe-campaing.module */ "Q3yt")).then(m => m.SubscribeCampaingPageModule)
            },
            {
                path: "",
                redirectTo: "home",
                pathMatch: "full"
            }
        ]
    }
];
let MenuPageModule = class MenuPageModule {
};
MenuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes),
            _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuPageRoutingModule"]
        ],
        declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
    })
], MenuPageModule);



/***/ }),

/***/ "QjfK":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-split-pane  contentId=\"content\" color=\"primary\">\n  <ion-menu class=\"menu\" contentId=\"content\" side=\"start\">\n    <ion-header color=\"primary\">\n      <ion-toolbar style=\"--background: #000000;\">\n        <ion-buttons slot=\"end\">\n          <ion-button icon-only (click)=\"closeMenu()\">\n            <ion-icon name=\"close\" color=\"primary\" size=\"large\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content style=\"--background: #000000;\">\n      <div class=\"logo-publibike-in\">\n        <img src=\"assets/img/logo-ekobike.png\">\n      </div>\n      <ion-list style=\"--background: #000000;\"> \n        <!-- <ion-item><img id=\"logo-publibike-menu\" src=\"assets/img/logo-ekobike.png\"></ion-item> -->\n        <ion-item (click)=\"goToHome()\"><ion-icon class=\"icon-home3\" ></ion-icon>  Inicio</ion-item>\n        <ion-item (click)=\"goToProfile()\"><ion-icon class=\"icon-user\"></ion-icon>  Mi perfil</ion-item>\n        <ion-item (click)=\"goToCampaings()\"><ion-icon class=\"icon-stats-bars\"></ion-icon>  Campañas</ion-item>\n        <ion-item (click)=\"goToRutes()\"><ion-icon class=\"icon-map\"></ion-icon>  Mis Recorridos</ion-item>\n        <!-- <ion-item ><ion-icon class=\"icon-stats-bars\"></ion-icon>Cambiar Contraseña</ion-item> -->\n        <!-- <ion-item (click)=\"goToIntro()\"><ion-icon class=\"icon-stats-bars\"></ion-icon>Ver Intro</ion-item> -->\n        <ion-item (click)=\"logout()\"><ion-icon class=\"icon-switch\" ></ion-icon>Cerrar Sesión</ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet id=\"content\" main></ion-router-outlet>\n</ion-split-pane>\n");

/***/ }),

/***/ "gZmG":
/*!*************************************!*\
  !*** ./src/app/menu/menu.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  width: 30%;\n  text-align: center;\n}\n\nion-toolbar {\n  background-color: #ffffff !important;\n}\n\nion-item {\n  color: #ffffff;\n}\n\nion-icon {\n  padding-right: 10px;\n}\n\nion-buttons {\n  background-color: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksb0NBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7QUFFSjs7QUFBQTtFQUNJLG1CQUFBO0FBR0o7O0FBQ0E7RUFDSSx5QkFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWl0ZW0ge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuaW9uLWljb24ge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuXHJcbmlvbi1idXR0b25zIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "nedP":
/*!*********************************************!*\
  !*** ./src/app/menu/menu-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MenuPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageRoutingModule", function() { return MenuPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.page */ "ylOD");




const routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_3__["MenuPage"],
        children: [
            {
                path: "home",
                loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ../home/home.module */ "ct+p")).then(m => m.HomePageModule)
            },
            {
                path: 'profile',
                loadChildren: () => Promise.all(/*! import() | profile-profile-module */[__webpack_require__.e("common"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null, /*! ../profile/profile.module */ "cRhG")).then(m => m.ProfilePageModule)
                // loadChildren: "../profile/profile.module#ProfilePageModule"
            },
            {
                path: 'campaings',
                loadChildren: () => __webpack_require__.e(/*! import() | campaings-campaings-module */ "campaings-campaings-module").then(__webpack_require__.bind(null, /*! ../campaings/campaings.module */ "8kny")).then(m => m.CampaingsPageModule)
                // loadChildren: "../campaings/campaings.module#CampaingsPageModule"
            },
            {
                path: 'rutes',
                loadChildren: () => Promise.all(/*! import() | rutes-rutes-module */[__webpack_require__.e("common"), __webpack_require__.e("rutes-rutes-module")]).then(__webpack_require__.bind(null, /*! ../rutes/rutes.module */ "bUJ/")).then(m => m.RutesPageModule)
            },
            {
                path: 'rute',
                loadChildren: () => Promise.all(/*! import() | rute-rute-module */[__webpack_require__.e("common"), __webpack_require__.e("rute-rute-module")]).then(__webpack_require__.bind(null, /*! ../rute/rute.module */ "4+Gx")).then(m => m.RutePageModule)
                // loadChildren: "../rute/rute.module#RutePageModule"
            },
            {
                path: 'start-campaing',
                loadChildren: () => __webpack_require__.e(/*! import() | start-campaing-start-campaing-module */ "start-campaing-start-campaing-module").then(__webpack_require__.bind(null, /*! ../start-campaing/start-campaing.module */ "UYBe")).then(m => m.StartCampaingPageModule)
            },
            {
                path: 'subscribe-campaing',
                loadChildren: () => __webpack_require__.e(/*! import() | subscribe-campaing-subscribe-campaing-module */ "subscribe-campaing-subscribe-campaing-module").then(__webpack_require__.bind(null, /*! ../subscribe-campaing/subscribe-campaing.module */ "Q3yt")).then(m => m.SubscribeCampaingPageModule)
            },
            {
                path: 'intro',
                loadChildren: () => __webpack_require__.e(/*! import() | intro-intro-module */ "intro-intro-module").then(__webpack_require__.bind(null, /*! ../intro/intro.module */ "PQfJ")).then(m => m.IntroPageModule)
            },
            {
                path: "",
                redirectTo: "home",
                pathMatch: "full"
            }
        ]
    }
];
let MenuPageRoutingModule = class MenuPageRoutingModule {
};
MenuPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MenuPageRoutingModule);



/***/ }),

/***/ "ylOD":
/*!***********************************!*\
  !*** ./src/app/menu/menu.page.ts ***!
  \***********************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_menu_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./menu.page.html */ "QjfK");
/* harmony import */ var _menu_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.page.scss */ "gZmG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "xgBC");






let MenuPage = class MenuPage {
    constructor(menu, navCtrl, storage) {
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.storage = storage;
    }
    ngOnInit() {
    }
    closeMenu() {
        this.menu.close();
    }
    logout() {
        this.storage.remove("isUserLoggedIn");
        this.navCtrl.navigateRoot("/login");
    }
    goToHome() {
        this.navCtrl.navigateForward("menu/home");
        this.menu.close();
    }
    goToProfile() {
        console.log("perfil");
        this.navCtrl.navigateForward("menu/profile");
        this.menu.close();
    }
    goToCampaings() {
        this.navCtrl.navigateForward("menu/campaings");
        this.menu.close();
    }
    goToRutes() {
        this.navCtrl.navigateForward("menu/rutes");
        this.menu.close();
    }
};
MenuPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
];
MenuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-menu',
        template: _raw_loader_menu_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_menu_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MenuPage);



/***/ })

}]);
//# sourceMappingURL=menu-menu-module-es2015.js.map