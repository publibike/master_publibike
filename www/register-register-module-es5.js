(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"], {
    /***/
    "2t07":
    /*!*****************************************************!*\
      !*** ./src/app/register/register-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: RegisterPageRoutingModule */

    /***/
    function t07(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function () {
        return RegisterPageRoutingModule;
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


      var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./register.page */
      "b0Bx");

      var routes = [{
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
      }];

      var RegisterPageRoutingModule = function RegisterPageRoutingModule() {
        _classCallCheck(this, RegisterPageRoutingModule);
      };

      RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RegisterPageRoutingModule);
      /***/
    },

    /***/
    "UgDh":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function UgDh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title text-center>Registrate</ion-title>\n    <ion-buttons>\n      <ion-button (click)=\"goToLogin()\">\n        Atrás\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"logo-publibike-in\">\n    <img src=\"assets/img/logo-ekobike.png\">\n  </div>\n  <form [formGroup]=\"registerForm\" (ngSubmit)=\"register(registerForm.value)\">\n    <ion-item color=\"secondary\">\n      <ion-label position=\"floating\">Ingresa tu Nombre</ion-label>\n      <ion-input formControlName=\"nombre\"></ion-input>\n    </ion-item>\n    <div class=\"validation-error\">\n      <ng-container *ngFor=\"let validation of validation_messages.nombre\">\n        <div *ngIf=\"\n            registerForm.get('nombre').hasError(validation.type) &&\n            (registerForm.get('nombre').dirty ||\n              registerForm.get('nombre').touched)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n    <ion-item color=\"secondary\">\n      <ion-label position=\"floating\">Ingresa tu Apellido</ion-label>\n      <ion-input formControlName=\"apellido\"></ion-input>\n    </ion-item>\n    <div class=\"validation-error\">\n      <ng-container *ngFor=\"let validation of validation_messages.apellido\">\n        <div *ngIf=\"\n            registerForm.get('apellido').hasError(validation.type) &&\n            (registerForm.get('apellido').dirty ||\n              registerForm.get('apellido').touched)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n    <ion-item color=\"secondary\">\n      <ion-label position=\"floating\">Ingresa tu Número de Identificación</ion-label>\n      <ion-input formControlName=\"usuario\"></ion-input>\n    </ion-item>\n    <div class=\"validation-error\">\n      <ng-container *ngFor=\"let validation of validation_messages.usuario\">\n        <div *ngIf=\"\n            registerForm.get('usuario').hasError(validation.type) &&\n            (registerForm.get('usuario').dirty ||\n              registerForm.get('usuario').touched)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n    <ion-item color=\"secondary\">\n      <ion-label position=\"floating\">Ingresa tu Número Celular</ion-label>\n      <ion-input formControlName=\"celular\"></ion-input>\n    </ion-item>\n    <div class=\"validation-error\">\n      <ng-container *ngFor=\"let validation of validation_messages.celular\">\n        <div *ngIf=\"\n            registerForm.get('celular').hasError(validation.type) &&\n            (registerForm.get('celular').dirty ||\n              registerForm.get('celular').touched)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n    <ion-item color=\"secondary\">\n      <ion-label position=\"floating\">Ingresa tu Correo </ion-label>\n      <ion-input formControlName=\"email\"></ion-input>\n    </ion-item>\n    <div class=\"validation-error\">\n      <ng-container *ngFor=\"let validation of validation_messages.email\">\n        <div *ngIf=\"\n            registerForm.get('email').hasError(validation.type) &&\n            (registerForm.get('email').dirty ||\n              registerForm.get('email').touched)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n    <ion-item color=\"secondary\">\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n    </ion-item>\n    <div class=\"validation-error\">\n      <ng-container *ngFor=\"let validation of validation_messages.password\">\n        <div *ngIf=\"\n                registerForm.get('password').hasError(validation.type) &&\n                (registerForm.get('password').dirty ||\n                  registerForm.get('password').touched)\n              \">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n    <ion-item color=\"secondary\">\n      <ion-label position=\"floating\">Ingresa tu Género</ion-label>\n      <ion-select formControlName=\"genero\" placeholder=\"Seleccione\">\n        <ion-select-option value=\"Masculino\">Masculino</ion-select-option>\n        <ion-select-option value=\"Femenino\">Femenino</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <div class=\"validation-error\">\n      <ng-container *ngFor=\"let validation of validation_messages.genero\">\n        <div *ngIf=\"\n                registerForm.get('genero').hasError(validation.type) &&\n                (registerForm.get('genero').dirty ||\n                  registerForm.get('genero').touched)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n    <ion-item color=\"secondary\">\n      <ion-label position=\"floating\">Ingresa tu Estatura(cm)</ion-label>\n      <ion-input formControlName=\"estatura\"></ion-input>\n    </ion-item>\n    <div class=\"validation-error\">\n      <ng-container *ngFor=\"let validation of validation_messages.estatura\">\n        <div *ngIf=\"\n            registerForm.get('estatura').hasError(validation.type) &&\n            (registerForm.get('estatura').dirty ||\n              registerForm.get('estatura').touched)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n    <ion-item color=\"secondary\">\n      <ion-label position=\"floating\">Ingresa tu Peso (kg)</ion-label>\n      <ion-input formControlName=\"peso\"></ion-input>\n    </ion-item>\n    <div class=\"validation-error\">\n      <ng-container *ngFor=\"let validation of validation_messages.peso\">\n        <div *ngIf=\"\n            registerForm.get('peso').hasError(validation.type) &&\n            (registerForm.get('peso').dirty ||\n              registerForm.get('peso').touched)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n    <ion-item color=\"secondary\">\n      <ion-label position=\"floating\">Ingresa tu Vehiculo</ion-label>\n      <ion-select formControlName=\"vehiculo\" placeholder=\"Seleccione\">\n        <ion-select-option value=\"Bicicleta\">Bicicleta</ion-select-option>\n        <ion-select-option value=\"Bicicleta_motorizada\">Bicicleta motorizada</ion-select-option>\n        <ion-select-option value=\"Patineta_electrica\">Patineta Eléctrica</ion-select-option>\n        <ion-select-option value=\"Patineta_electrica\">Moto Eléctrica</ion-select-option>\n        <ion-select-option value=\"Patineta_electrica\">Carro Eléctrico</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <div class=\"validation-error\">\n      <ng-container *ngFor=\"let validation of validation_messages.vehiculo\">\n        <div *ngIf=\"\n            registerForm.get('vehiculo').hasError(validation.type) &&\n            (registerForm.get('vehiculo').dirty ||\n              registerForm.get('vehiculo').touched)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n    <ion-item color=\"secondary\">\n      <ion-label position=\"floating\">Selecciona tu Banco</ion-label>\n      <ion-select formControlName=\"banco\" placeholder=\"Seleccione\">\n        <ion-select-option value=\"Bancamia S.A.\">Bancamia S.A.</ion-select-option>\n        <ion-select-option value=\"Banco Agrario\">Banco Agrario</ion-select-option>\n        <ion-select-option value=\"Banco Av Villas\">Banco Av Villas</ion-select-option>\n        <ion-select-option value=\"Banco BBVA Colombia S.A.\">Banco BBVA Colombia S.A.</ion-select-option>\n        <ion-select-option value=\"Banco Caja Social\">Banco Caja Social</ion-select-option>\n        <ion-select-option value=\"Bancolombia\">Bancolombia</ion-select-option>\n        <ion-select-option value=\"Banco Davivienda\">Banco Davivienda</ion-select-option>\n        <ion-select-option value=\"Banco de Bogota\">Banco de Bogota</ion-select-option>\n        <ion-select-option value=\"Banco de Occidente\">Banco de Occidente</ion-select-option>\n        <ion-select-option value=\"Banco Popular\">Banco Popular</ion-select-option>\n        <ion-select-option value=\"Banco Falabella\">Banco Falabella</ion-select-option>\n        <ion-select-option value=\"Banco GNB Sudameris\">Banco GNB Sudameris</ion-select-option>\n        <ion-select-option value=\"Banco Itau\">Banco Itau</ion-select-option>\n        <ion-select-option value=\"Banco Pichincha S.A.\">Banco Pichincha S.A.</ion-select-option>\n        <ion-select-option value=\"Bancoomeva S.A.\">Bancoomeva S.A.</ion-select-option>\n        <ion-select-option value=\"Citibank\">Citibank</ion-select-option>\n        <ion-select-option value=\"Scotiabank Colpatria\">Scotiabank Colpatria</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <!--<div class=\"validation-error\">\n      <ng-container *ngFor=\"let validation of validation_messages.banco\">\n        <div *ngIf=\"\n            registerForm.get('banco').hasError(validation.type) &&\n            (registerForm.get('banco').dirty ||\n              registerForm.get('banco').touched)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>-->\n    <ion-item color=\"secondary\">\n      <ion-label position=\"floating\">Ingresa tu Cuenta Bancaria</ion-label>\n      <ion-input formControlName=\"cuenta\"></ion-input>\n    </ion-item>\n\n    <!-- <div class=\"validation-error\">\n      <ng-container *ngFor=\"let validation of validation_messages.cuenta\">\n        <div *ngIf=\"\n            registerForm.get('cuenta').hasError(validation.type) &&\n            (registerForm.get('cuenta').dirty ||\n              registerForm.get('cuenta').touched)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>-->\n    {{ errorMessage }}\n    <ion-button color=\"transparent\" full outline class=\"ui button go-campaings\"  [disabled]=\"!registerForm.valid\" type=\"submit\">\n      REGISTRARME\n    </ion-button>\n  </form> \n</ion-content>";
      /***/
    },

    /***/
    "b0Bx":
    /*!*******************************************!*\
      !*** ./src/app/register/register.page.ts ***!
      \*******************************************/

    /*! exports provided: RegisterPage */

    /***/
    function b0Bx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
        return RegisterPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./register.page.html */
      "UgDh");
      /* harmony import */


      var _register_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./register.page.scss */
      "x/mg");
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


      var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/authenticate.service */
      "fKRy");

      var RegisterPage = /*#__PURE__*/function () {
        function RegisterPage(formBuilder, authService, navCtrl) {
          _classCallCheck(this, RegisterPage);

          this.formBuilder = formBuilder;
          this.authService = authService;
          this.navCtrl = navCtrl;
          this.validation_messages = {
            nombre: [{
              type: "required",
              message: "El nombre es requerido."
            }, {
              type: "minlength",
              message: "El nombre debe tener mínimo tres letras."
            }],
            apellido: [{
              type: "required",
              message: "El apellido es requerido."
            }, {
              type: "minlength",
              message: "El apellido debe tener mínimo tres letras."
            }],
            usuario: [{
              type: "required",
              message: "El número de identificación es requerido"
            }],
            celular: [{
              type: "required",
              message: "El número celular es requerido"
            }],
            email: [{
              type: "required",
              message: "El email es requerido"
            }, {
              type: "pattern",
              message: "Ingresa un email válido."
            }],
            password: [{
              type: "required",
              message: "La contraseña es obligatoria."
            }, {
              type: "minlength",
              message: "La contraseña debe tener al menos 5 caracteres."
            }],
            genero: [{
              type: "required",
              message: "El número celular es requerido"
            }],
            estatura: [{
              type: "required",
              message: "La estatura es requerida"
            }],
            peso: [{
              type: "required",
              message: "El peso es requerido"
            }],
            vehiculo: [{
              type: "required",
              message: "El vehiculo a usar es requerido"
            }]
          };
          this.errorMessage = "";
          this.registerForm = this.formBuilder.group({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
            apellido: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
            usuario: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
            celular: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)])),
            genero: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
            estatura: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
            peso: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
            vehiculo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
            banco: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](""),
            cuenta: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("")
          });
        }

        _createClass(RegisterPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "register",
          value: function register(userData) {
            var _this = this;

            console.log(userData);
            this.authService.registerUser(userData).then(function () {
              _this.navCtrl.navigateBack("/login");
            });
          }
        }, {
          key: "goToLogin",
          value: function goToLogin() {
            this.navCtrl.navigateBack("/login");
          }
        }]);

        return RegisterPage;
      }();

      RegisterPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _services_authenticate_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticateService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }];
      };

      RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RegisterPage);
      /***/
    },

    /***/
    "x/mg":
    /*!*********************************************!*\
      !*** ./src/app/register/register.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function xMg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "img {\n  width: 30%;\n  text-align: center;\n}\n\nion-title {\n  text-align: center;\n}\n\nh2 {\n  color: #01d9ad;\n}\n\nh4,\nion-label,\nion-input {\n  color: #606060 !important;\n}\n\nion-button {\n  color: #01d9ad;\n}\n\nion-select {\n  /* Applies to the value and placeholder color */\n  color: #000000;\n  /* Set a different placeholder color */\n  --placeholder-color: #606060;\n  /* Set full opacity on the placeholder */\n  --placeholder-opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtBQUVKOztBQUFBOzs7RUFHSSx5QkFBQTtBQUdKOztBQURBO0VBQ0ksY0FBQTtBQUlKOztBQURBO0VBQ0ksK0NBQUE7RUFDQSxjQUFBO0VBRUEsc0NBQUE7RUFDQSw0QkFBQTtFQUVBLHdDQUFBO0VBQ0Esd0JBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaDIge1xuICAgIGNvbG9yOiAjMDFkOWFkO1xufVxuaDQsXG5pb24tbGFiZWwsXG5pb24taW5wdXQge1xuICAgIGNvbG9yOiAjNjA2MDYwICFpbXBvcnRhbnQ7XG59XG5pb24tYnV0dG9uIHtcbiAgICBjb2xvcjogIzAxZDlhZDtcbn1cblxuaW9uLXNlbGVjdCB7XG4gICAgLyogQXBwbGllcyB0byB0aGUgdmFsdWUgYW5kIHBsYWNlaG9sZGVyIGNvbG9yICovXG4gICAgY29sb3I6ICMwMDAwMDA7XG4gIFxuICAgIC8qIFNldCBhIGRpZmZlcmVudCBwbGFjZWhvbGRlciBjb2xvciAqL1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICM2MDYwNjA7XG4gIFxuICAgIC8qIFNldCBmdWxsIG9wYWNpdHkgb24gdGhlIHBsYWNlaG9sZGVyICovXG4gICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xuICB9XG4iXX0= */";
      /***/
    },

    /***/
    "x5bZ":
    /*!*********************************************!*\
      !*** ./src/app/register/register.module.ts ***!
      \*********************************************/

    /*! exports provided: RegisterPageModule */

    /***/
    function x5bZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
        return RegisterPageModule;
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


      var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./register-routing.module */
      "2t07");
      /* harmony import */


      var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./register.page */
      "b0Bx");

      var RegisterPageModule = function RegisterPageModule() {
        _classCallCheck(this, RegisterPageModule);
      };

      RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
      })], RegisterPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=register-register-module-es5.js.map