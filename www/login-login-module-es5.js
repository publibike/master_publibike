(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
    /***/
    "34Y5":
    /*!*************************************!*\
      !*** ./src/app/login/login.page.ts ***!
      \*************************************/

    /*! exports provided: LoginPage */

    /***/
    function Y5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.page.html */
      "V6Ie");
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.page.scss */
      "r67e");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/authenticate.service */
      "fKRy");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage */
      "xgBC");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(formBuilder, authServices, navCtrl, loadingCtrl, storage, alertController) {
          _classCallCheck(this, LoginPage);

          this.formBuilder = formBuilder;
          this.authServices = authServices;
          this.navCtrl = navCtrl;
          this.loadingCtrl = loadingCtrl;
          this.storage = storage;
          this.alertController = alertController;
          this.validation_messages = {
            user: [{
              type: "required",
              message: "El usuario es requerido"
            }, {
              type: "minlength",
              message: "Minimo 6 nùmeros para el usuario"
            }]
          };
          this.errorMessage = "";
          this.loginForm = this.formBuilder.group({
            user: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]))
          });
        }

        _createClass(LoginPage, [{
          key: "loginUser",
          value: function loginUser(credentials) {
            var _this = this;

            this.presentLoading();
            console.log(credentials);
            this.authServices.loginUser(credentials).then(function (res) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _this2 = this;

                var alert;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        console.log(res);
                        this.errorMessage = "";
                        this.storage.set("isUserLoggedIn", true);
                        this.storage.set("userId", res);
                        this.loading.dismiss();
                        console.log("estos son los datos de la monda esa ", res);
                        _context.next = 8;
                        return this.alertController.create({
                          cssClass: "my-custom-class",
                          header: "Terminos Y Condiciones!",
                          // message: "Al continuar aceptaras los terminos y condiciones!",
                          message: "Al Continuar aceptaras los <a href='https://www.ecoapps.com.co/politica-de-tratamiento-de-datos-uflou/' target='_blank'>Terminos y Condiciones</a>!!!",
                          buttons: [{
                            text: "No Acepto",
                            role: "cancel",
                            cssClass: "secondary"
                          }, {
                            text: "Acepto",
                            handler: function handler() {
                              _this2.navCtrl.navigateForward("/tabs/profile");
                            }
                          }]
                        });

                      case 8:
                        alert = _context.sent;
                        _context.next = 11;
                        return alert.present();

                      case 11:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            })["catch"](function (err) {
              console.log(err);

              _this.loading.dismiss();

              console.error("ERROR", err.name);

              if (err.name == "SyntaxError") {
                console.log(err);
                _this.errorMessage = "Usuario Incorrecto";
              } else if (err.name == "TypeError") {
                // this.errorMessage = "Usuario Incorrecto";
                console.log(err);
              }
            });
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingCtrl.create({
                        cssClass: "my-custom-class",
                        message: "Cargando..."
                      });

                    case 2:
                      this.loading = _context2.sent;
                      _context2.next = 5;
                      return this.loading.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _services_authenticate_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticateService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-login",
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LoginPage);
      /***/
    },

    /***/
    "V6Ie":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function V6Ie(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n<ion-content>\r\n\t<div class=\"main-wrapper\">\r\n\t\t<div class=\"logo-ekobike\">\r\n\t\t\t<a href=\"assets/index.html\">\r\n\t\t\t\t<img src=\"assets/img/logo-publibike.png\">\r\n\t\t\t</a>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"form-login\">\r\n\t\t\t<form class=\"ui form\" [formGroup]='loginForm' (ngSubmit)='loginUser(loginForm.value)'>\r\n\t\t\t\t<div class=\"field\">\r\n\t\t\t\t\t<ion-input type=\"text\" formControlName=\"user\" id=\"user\" placeholder=\"Ingresa tu usuario\">\r\n\t\t\t\t\t</ion-input>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"validation-error\">\r\n\t\t\t\t\t<ng-container *ngFor=\"let validation of validation_messages.user\">\r\n\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t*ngIf=\"loginForm.get('user').hasError(validation.type)&&(loginForm.get('user').dirty || loginForm.get('user').touched)\">\r\n\t\t\t\t\t\t\t<p id=\"alertUser\">{{validation.message}}</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</div>\r\n\t\t\t\t<p id=\"alertUser\"> {{errorMessage}}</p>\r\n\t\t\t\t<ion-button text-center class=\"ui button\" color=\"secondary\" [disabled]=\"!loginForm.valid\" type=\"Submit\">Ingresar\r\n\t\t\t\t</ion-button>\r\n\t\t\t\t<p id=\"alertUser\"></p>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"footer-main\">\r\n\t\t\t<!-- <img class=\"slogan-ekobike\" src=\"assets/img/slogan-ekobike.png\"> -->\r\n\t\t\t<div class=\"animation-bike\">\r\n\t\t\t\t<div class=\"biker\">\r\n\t\t\t\t\t<img src=\"assets/img/biker-ekobike.png\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<hr>\r\n\t\t</div>\r\n\t</div>\r\n</ion-content>";
      /***/
    },

    /***/
    "X3zk":
    /*!***************************************!*\
      !*** ./src/app/login/login.module.ts ***!
      \***************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function X3zk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "euwS");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "34Y5");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "euwS":
    /*!***********************************************!*\
      !*** ./src/app/login/login-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function euwS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "34Y5");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "fKRy":
    /*!**************************************************!*\
      !*** ./src/app/services/authenticate.service.ts ***!
      \**************************************************/

    /*! exports provided: AuthenticateService */

    /***/
    function fKRy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticateService", function () {
        return AuthenticateService;
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


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/storage */
      "xgBC");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var AuthenticateService = /*#__PURE__*/function () {
        function AuthenticateService(storage) {
          _classCallCheck(this, AuthenticateService);

          this.storage = storage;
        }

        _createClass(AuthenticateService, [{
          key: "loginUser",
          value: function loginUser(credential) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var user, options;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.storage.get('user');

                    case 2:
                      user = _context3.sent;
                      options = {
                        method: "POST",
                        body: JSON.stringify(credential),
                        headers: new Headers({
                          'Content-Type': 'application/json'
                        })
                      };
                      return _context3.abrupt("return", fetch("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].publibikeApi, "/api/movil/login"), options).then(function (response) {
                        return response.json();
                      }));

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return AuthenticateService;
      }();

      AuthenticateService.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
        }];
      };

      AuthenticateService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthenticateService);
      /***/
    },

    /***/
    "r67e":
    /*!***************************************!*\
      !*** ./src/app/login/login.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function r67e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".form-login .ui.button {\n  padding: 0px;\n  border-radius: 20px !important;\n}\n\nion-content {\n  --background-position: top right;\n  --background: black;\n}\n\nion-button {\n  --border-radius: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBRUE7RUFHSSxnQ0FBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxxQkFBQTtBQURKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tbG9naW4gLnVpLmJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gICAgXHJcbiAgIC8vIC0tYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9kYXJrLWJhY2tncm91bmQtdWZsb3UtMDcuanBnXCIpIG5vLXJlcGVhdCAgY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodDtcclxuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7XHJcbn1cclxuXHJcbmlvbi1idXR0b257XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbn0iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=login-login-module-es5.js.map