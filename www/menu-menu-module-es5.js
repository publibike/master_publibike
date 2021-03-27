(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-module"], {
    /***/
    "19mU":
    /*!*************************************!*\
      !*** ./src/app/menu/menu.module.ts ***!
      \*************************************/

    /*! exports provided: MenuPageModule */

    /***/
    function mU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuPageModule", function () {
        return MenuPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./menu-routing.module */
      "nedP");
      /* harmony import */


      var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./menu.page */
      "ylOD");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var routes = [{
        path: "",
        component: _menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"],
        children: [{
          path: "home",
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | home-home-module */
            [__webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null,
            /*! ../home/home.module */
            "ct+p")).then(function (m) {
              return m.HomePageModule;
            });
          }
        }, {
          path: 'profile',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | profile-profile-module */
            [__webpack_require__.e("common"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null,
            /*! ../profile/profile.module */
            "cRhG")).then(function (m) {
              return m.ProfilePageModule;
            });
          }
        }, {
          path: 'campaings',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | campaings-campaings-module */
            [__webpack_require__.e("common"), __webpack_require__.e("campaings-campaings-module")]).then(__webpack_require__.bind(null,
            /*! ../campaings/campaings.module */
            "8kny")).then(function (m) {
              return m.CampaingsPageModule;
            });
          }
        }, {
          path: 'rutes',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | rutes-rutes-module */
            [__webpack_require__.e("common"), __webpack_require__.e("rutes-rutes-module")]).then(__webpack_require__.bind(null,
            /*! ../rutes/rutes.module */
            "bUJ/")).then(function (m) {
              return m.RutesPageModule;
            });
          }
        }, {
          path: 'rute',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | rute-rute-module */
            [__webpack_require__.e("common"), __webpack_require__.e("rute-rute-module")]).then(__webpack_require__.bind(null,
            /*! ../rute/rute.module */
            "4+Gx")).then(function (m) {
              return m.RutePageModule;
            });
          }
        }, {
          path: 'start-campaing',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | start-campaing-start-campaing-module */
            [__webpack_require__.e("common"), __webpack_require__.e("start-campaing-start-campaing-module")]).then(__webpack_require__.bind(null,
            /*! ../start-campaing/start-campaing.module */
            "UYBe")).then(function (m) {
              return m.StartCampaingPageModule;
            });
          }
        }, {
          path: 'subscribe-campaing',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | subscribe-campaing-subscribe-campaing-module */
            [__webpack_require__.e("common"), __webpack_require__.e("subscribe-campaing-subscribe-campaing-module")]).then(__webpack_require__.bind(null,
            /*! ../subscribe-campaing/subscribe-campaing.module */
            "Q3yt")).then(function (m) {
              return m.SubscribeCampaingPageModule;
            });
          }
        }, {
          path: "",
          redirectTo: "home",
          pathMatch: "full"
        }]
      }];

      var MenuPageModule = function MenuPageModule() {
        _classCallCheck(this, MenuPageModule);
      };

      MenuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes), _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuPageRoutingModule"]],
        declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
      })], MenuPageModule);
      /***/
    },

    /***/
    "QjfK":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function QjfK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-split-pane  contentId=\"content\" color=\"primary\">\n  <ion-menu class=\"menu\" contentId=\"content\" side=\"start\">\n    <ion-header color=\"primary\">\n      <ion-toolbar style=\"--background: #000000;\">\n        <ion-buttons slot=\"end\">\n          <ion-button icon-only (click)=\"closeMenu()\">\n            <ion-icon name=\"close\" color=\"primary\" size=\"large\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content style=\"--background: #000000;\">\n      <div class=\"logo-publibike-in\">\n        <img src=\"assets/img/logo-ekobike.png\">\n      </div>\n      <ion-list style=\"--background: #000000;\"> \n        <!-- <ion-item><img id=\"logo-publibike-menu\" src=\"assets/img/logo-ekobike.png\"></ion-item> -->\n        <ion-item (click)=\"goToHome()\"><ion-icon class=\"icon-home3\" ></ion-icon>  Inicio</ion-item>\n        <ion-item (click)=\"goToProfile()\"><ion-icon class=\"icon-user\"></ion-icon>  Mi perfil</ion-item>\n        <ion-item (click)=\"goToCampaings()\"><ion-icon class=\"icon-stats-bars\"></ion-icon>  Campañas</ion-item>\n        <ion-item (click)=\"goToRutes()\"><ion-icon class=\"icon-map\"></ion-icon>  Mis Recorridos</ion-item>\n        <!-- <ion-item ><ion-icon class=\"icon-stats-bars\"></ion-icon>Cambiar Contraseña</ion-item> -->\n        <!-- <ion-item (click)=\"goToIntro()\"><ion-icon class=\"icon-stats-bars\"></ion-icon>Ver Intro</ion-item> -->\n        <ion-item (click)=\"logout()\"><ion-icon class=\"icon-switch\" ></ion-icon>Cerrar Sesión</ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet id=\"content\" main></ion-router-outlet>\n</ion-split-pane>\n";
      /***/
    },

    /***/
    "gZmG":
    /*!*************************************!*\
      !*** ./src/app/menu/menu.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function gZmG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "img {\n  width: 30%;\n  text-align: center;\n}\n\nion-toolbar {\n  background-color: #ffffff !important;\n}\n\nion-item {\n  color: #ffffff;\n}\n\nion-icon {\n  padding-right: 10px;\n}\n\nion-buttons {\n  background-color: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksb0NBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7QUFFSjs7QUFBQTtFQUNJLG1CQUFBO0FBR0o7O0FBQ0E7RUFDSSx5QkFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5pb24taXRlbSB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5pb24taWNvbiB7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuXG5pb24tYnV0dG9ucyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "nedP":
    /*!*********************************************!*\
      !*** ./src/app/menu/menu-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: MenuPageRoutingModule */

    /***/
    function nedP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuPageRoutingModule", function () {
        return MenuPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./menu.page */
      "ylOD");

      var routes = [{
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_3__["MenuPage"],
        children: [{
          path: "home",
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | home-home-module */
            [__webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null,
            /*! ../home/home.module */
            "ct+p")).then(function (m) {
              return m.HomePageModule;
            });
          }
        }, {
          path: 'profile',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | profile-profile-module */
            [__webpack_require__.e("common"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null,
            /*! ../profile/profile.module */
            "cRhG")).then(function (m) {
              return m.ProfilePageModule;
            });
          }
        }, {
          path: 'campaings',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | campaings-campaings-module */
            [__webpack_require__.e("common"), __webpack_require__.e("campaings-campaings-module")]).then(__webpack_require__.bind(null,
            /*! ../campaings/campaings.module */
            "8kny")).then(function (m) {
              return m.CampaingsPageModule;
            });
          }
        }, {
          path: 'rutes',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | rutes-rutes-module */
            [__webpack_require__.e("common"), __webpack_require__.e("rutes-rutes-module")]).then(__webpack_require__.bind(null,
            /*! ../rutes/rutes.module */
            "bUJ/")).then(function (m) {
              return m.RutesPageModule;
            });
          }
        }, {
          path: 'rute',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | rute-rute-module */
            [__webpack_require__.e("common"), __webpack_require__.e("rute-rute-module")]).then(__webpack_require__.bind(null,
            /*! ../rute/rute.module */
            "4+Gx")).then(function (m) {
              return m.RutePageModule;
            });
          }
        }, {
          path: 'start-campaing/:id',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | start-campaing-start-campaing-module */
            [__webpack_require__.e("common"), __webpack_require__.e("start-campaing-start-campaing-module")]).then(__webpack_require__.bind(null,
            /*! ../start-campaing/start-campaing.module */
            "UYBe")).then(function (m) {
              return m.StartCampaingPageModule;
            });
          }
        }, {
          path: 'subscribe-campaing/:id',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | subscribe-campaing-subscribe-campaing-module */
            [__webpack_require__.e("common"), __webpack_require__.e("subscribe-campaing-subscribe-campaing-module")]).then(__webpack_require__.bind(null,
            /*! ../subscribe-campaing/subscribe-campaing.module */
            "Q3yt")).then(function (m) {
              return m.SubscribeCampaingPageModule;
            });
          }
        }, {
          path: 'intro',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | intro-intro-module */
            "intro-intro-module").then(__webpack_require__.bind(null,
            /*! ../intro/intro.module */
            "PQfJ")).then(function (m) {
              return m.IntroPageModule;
            });
          }
        }, {
          path: "",
          redirectTo: "home",
          pathMatch: "full"
        }]
      }];

      var MenuPageRoutingModule = function MenuPageRoutingModule() {
        _classCallCheck(this, MenuPageRoutingModule);
      };

      MenuPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MenuPageRoutingModule);
      /***/
    },

    /***/
    "ylOD":
    /*!***********************************!*\
      !*** ./src/app/menu/menu.page.ts ***!
      \***********************************/

    /*! exports provided: MenuPage */

    /***/
    function ylOD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuPage", function () {
        return MenuPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_menu_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./menu.page.html */
      "QjfK");
      /* harmony import */


      var _menu_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./menu.page.scss */
      "gZmG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage */
      "xgBC");

      var MenuPage = /*#__PURE__*/function () {
        function MenuPage(menu, navCtrl, storage) {
          _classCallCheck(this, MenuPage);

          this.menu = menu;
          this.navCtrl = navCtrl;
          this.storage = storage;
        }

        _createClass(MenuPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "closeMenu",
          value: function closeMenu() {
            this.menu.close();
          }
        }, {
          key: "logout",
          value: function logout() {
            this.storage.remove("isUserLoggedIn");
            this.navCtrl.navigateRoot("/login");
          }
        }, {
          key: "goToHome",
          value: function goToHome() {
            this.navCtrl.navigateForward("menu/home");
            this.menu.close();
          }
        }, {
          key: "goToProfile",
          value: function goToProfile() {
            console.log("perfil");
            this.navCtrl.navigateForward("menu/profile");
            this.menu.close();
          }
        }, {
          key: "goToCampaings",
          value: function goToCampaings() {
            this.navCtrl.navigateForward("menu/campaings");
            this.menu.close();
          }
        }, {
          key: "goToRutes",
          value: function goToRutes() {
            this.navCtrl.navigateForward("menu/rutes");
            this.menu.close();
          }
        }]);

        return MenuPage;
      }();

      MenuPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }];
      };

      MenuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-menu',
        template: _raw_loader_menu_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_menu_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MenuPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=menu-menu-module-es5.js.map