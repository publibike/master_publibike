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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/storage */
      "xgBC");
      /* harmony import */


      var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/authenticate.service */
      "fKRy");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(formBuilder, authServices, navCtrl, loadingCtrl, storage) {
          _classCallCheck(this, LoginPage);

          this.formBuilder = formBuilder;
          this.authServices = authServices;
          this.navCtrl = navCtrl;
          this.loadingCtrl = loadingCtrl;
          this.storage = storage;
          this.validation_messages = {
            email: [{
              type: "required",
              message: " El correo es requerido"
            }, {
              type: "pattern",
              message: "Ingrese un correo válido"
            }],
            password: [{
              type: "required",
              message: " El password es requerido"
            }, {
              type: "minlength",
              message: "Minimo 5 letras para el password"
            }]
          };
          this.errorMessage = "";
          this.loginForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)]))
          });
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Cargando...'
                      });

                    case 2:
                      this.loading = _context.sent;
                      _context.next = 5;
                      return this.loading.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "loginUser",
          value: function loginUser(credentials) {
            var _this = this;

            this.presentLoading();
            this.authServices.loginUser(credentials).then(function (res) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        this.errorMessage = "";
                        this.storage.set("isUserLoggedIn", true);
                        this.storage.set("userId", res);
                        this.loading.dismiss();
                        this.navCtrl.navigateForward("/menu/home");

                      case 5:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            })["catch"](function (err) {
              _this.loading.dismiss();

              console.log("ERROR", err.name);
              console.log("Error", typeof err.name);

              if (err.name == 'SyntaxError') {
                _this.errorMessage = "Correo y/o clave incorrecta";
              } else if (err.name === 'TypeError') {
                console.log("HELLO");
                _this.errorMessage = "Problemas conectando al servidor";
              } else {
                console.log("hola");
                _this.errorMessage = err;
              }
            });
          }
        }, {
          key: "goToRegister",
          value: function goToRegister() {
            this.navCtrl.navigateForward("/register");
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _services_authenticate_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticateService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
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


      __webpack_exports__["default"] = "<ion-content>\n  <div class=\"header-index\">\n    <img class=\"img-header\" src=\"assets/img/background-publibike.jpg\">\n    <!-- <figure text-center>\n      <img class=\"logo-publibike\" src=\"assets/img/logo-publibike.png\">\n    </figure> -->\n    <div class=\"logo-publibike-in\">\n      <img src=\"assets/img/logo-ekobike.png\">\n    </div>\n  </div>`\n  <form class=\"form-ui\" [formGroup]=\"loginForm\" (ngSubmit)=\"loginUser(loginForm.value)\">\n    <ion-item color=\"secondary\">\n      <!-- <ion-label color=\"primary\" >Email</ion-label> -->\n      <ion-input color=\"tertiary\" formControlName=\"email\" placeholder=\"Correo\"></ion-input>\n    </ion-item>\n    <div class=\"validation-error\">\n      <ng-container *ngFor=\"let validation of validation_messages.email\">\n        <div\n          *ngIf=\"loginForm.get('email').hasError(validation.type) && (loginForm.get('email').dirty || loginForm.get('email').touched)\">\n          <p id=\"alertUser\"> {{validation.message}}</p>\n        </div>\n      </ng-container>\n    </div>\n    <ion-item color=\"secondary\">\n      <!-- <ion-label color=\"primary\">Password</ion-label> -->\n      <ion-input color=\"tertiary\" type=\"password\" formControlName=\"password\" placeholder=\"Contraseña\"></ion-input>\n    </ion-item>\n    <div class=\"validation-error\">\n      <ng-container *ngFor=\"let validation of validation_messages.password\">\n        <div\n          *ngIf=\"loginForm.get('password').hasError(validation.type) && (loginForm.get('password').dirty || loginForm.get('password').touched)\">\n          <p id=\"alertUser\"> {{validation.message}}</p>\n        </div>\n      </ng-container>\n    </div>\n    <p id=\"alertUser\"> {{errorMessage}}</p>\n    <ion-button text-center class=\"button-login\" color=\"primary\" [disabled]=\"!loginForm.valid\" type=\"Submit\">\n      INICIAR SESIÓN\n    </ion-button>\n  </form>\n  <!-- <ion-footer> -->\n    <!-- <h4 text-center color=\"primary\">O Conectate con</h4>\n    <div class=\"login-social\">\n      <img src=\"assets/img/facebook-icon-31.png\">\n    </div> -->\n    \n  <!-- </ion-footer> -->\n  <!-- <div class=\"main-wrapper\">\n    <div class=\"form-login\">\n      <form class=\"ui form\">\n        <div class=\"field\">\n          <input type=\"text\" name=\"user\" placeholder=\"Usuario\">\n        </div>\n        <div class=\"field\">\n          <input type=\"password\" name=\"pass\" placeholder=\"Contraseña\">\n          <a href=\"#\">¿Olvidaste tu contraseña?</a>\n        </div>\n        <div class=\"button-login\">\n          <p id=\"alertUser\"></p>\n          <a  class=\"ui button\">INICIAR SESIÓN</a>\n        </div>\n      </form>\n      <h4>O Conectate con</h4>\n      <div class=\"login-social\">\n        <img src=\"assets/img/facebook-icon-31.png\">\n      </div>\n      <div class=\"new-user\">\n        <a href=\"register.html\">¿Eres un usuario nuevo?</a>\n      </div>\n    </div>\n  \n  </div> -->\n\n</ion-content>\n<ion-footer>\n  <div class=\"new-user\">\n    <ion-button  full outline class=\"register\" (click)=\"goToRegister()\" expand=\"full\">\n      ¿Eres un usuario nuevo?\n    </ion-button>\n  </div>\n</ion-footer>";
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


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=login-login-module-es5.js.map