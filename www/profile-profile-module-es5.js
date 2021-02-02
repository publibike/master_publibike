(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
    /***/
    "cRhG":
    /*!*******************************************!*\
      !*** ./src/app/profile/profile.module.ts ***!
      \*******************************************/

    /*! exports provided: ProfilePageModule */

    /***/
    function cRhG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
        return ProfilePageModule;
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


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profile-routing.module */
      "v+7O");
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile.page */
      "ncJE");

      var ProfilePageModule = function ProfilePageModule() {
        _classCallCheck(this, ProfilePageModule);
      };

      ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
      })], ProfilePageModule);
      /***/
    },

    /***/
    "ncJE":
    /*!*****************************************!*\
      !*** ./src/app/profile/profile.page.ts ***!
      \*****************************************/

    /*! exports provided: ProfilePage */

    /***/
    function ncJE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
        return ProfilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./profile.page.html */
      "tXh8");
      /* harmony import */


      var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profile.page.scss */
      "zxxS");
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


      var _services_api_publibike_marca_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/api-publibike-marca.service */
      "Q5Ll");

      var ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(storage, formBuilder, apiService, alertController, navCtrl) {
          _classCallCheck(this, ProfilePage);

          this.storage = storage;
          this.formBuilder = formBuilder;
          this.apiService = apiService;
          this.alertController = alertController;
          this.navCtrl = navCtrl;
          this.user = {
            nombre: "",
            email: ""
          };
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
            }],
            banco: [{
              type: "required",
              message: "El banco es requerido"
            }],
            cuenta: [{
              type: "required",
              message: "El número de cuenta es necesario"
            }, {
              type: "pattern",
              message: "Ingresa la cuenta sin guiones solo números"
            }]
          };
          this.errorMessage = "";
          this.updaterForm = this.formBuilder.group({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
            apellido: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
            celular: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])),
            genero: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
            estatura: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
            peso: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
            vehiculo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
            banco: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
            cuenta: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[0-9]*$"), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]))
          });
        }

        _createClass(ProfilePage, [{
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.storage.get("userData");

                    case 2:
                      this.user = _context.sent;
                      this.updaterForm.patchValue(this.user);

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "update",
          value: function update(userData) {
            var _this = this;

            this.apiService.updateUser(userData).then(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var _this2 = this;

                var alert;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        console.log("Datos actualizados");
                        _context2.next = 3;
                        return this.alertController.create({
                          cssClass: 'my-custom-class',
                          header: 'Atención',
                          message: 'Datos actualizados correctamente',
                          buttons: [{
                            text: 'Ok',
                            handler: function handler() {
                              _this2.navCtrl.navigateForward("menu/home");
                            }
                          }]
                        });

                      case 3:
                        alert = _context2.sent;
                        _context2.next = 6;
                        return alert.present();

                      case 6:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            });
          }
        }]);

        return ProfilePage;
      }();

      ProfilePage.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _services_api_publibike_marca_service__WEBPACK_IMPORTED_MODULE_7__["ApiPublibikeMarcaService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }];
      };

      ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProfilePage);
      /***/
    },

    /***/
    "tXh8":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function tXh8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class=\"logo-publibike-in\">\n    <img src=\"assets/img/logo-ekobike.png\">\n  </div>\n  <div text-center class=\"profile-photo\">\n    <ul style=\"list-style:none\">\n      <!-- <li>\n        <hr>\n      </li>\n      <li class=\"content-photo\"><img src=\"assets/img/logo-ekobike.png\"></li>\n      <li>\n        <hr>\n      </li> -->\n      <li>\n        <h2>{{user.nombre}} {{user.apellido}}</h2>\n        <h4>{{user.email}}</h4>\n      </li>\n    </ul>\n  </div>\n  <h2 class=\"PaddingSpecial\">Tus Datos</h2>\n  <form [formGroup]=\"updaterForm\" (ngSubmit)=\"update(updaterForm.value)\">\n    <ion-item color=\"secondary\">\n      <ion-label>Nombre</ion-label>\n      <ion-input formControlName=\"nombre\"></ion-input>\n    </ion-item>\n    <div class=\"validation-error\">\n      <ng-container *ngFor=\"let validation of validation_messages.nombre\">\n        <div *ngIf=\"\n            updaterForm.get('nombre').hasError(validation.type) &&\n            (updaterForm.get('nombre').dirty ||\n              updaterForm.get('nombre').touched)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n    <ion-item color=\"secondary\">\n      <ion-label>Apellido</ion-label>\n      <ion-input formControlName=\"apellido\"></ion-input>\n    </ion-item>\n    <div class=\"validation-error\">\n      <ng-container *ngFor=\"let validation of validation_messages.apellido\">\n        <div *ngIf=\"\n            updaterForm.get('apellido').hasError(validation.type) &&\n            (updaterForm.get('apellido').dirty ||\n              updaterForm.get('apellido').touched)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n    <ion-item color=\"secondary\">\n      <ion-label>Celular</ion-label>\n      <ion-input formControlName=\"celular\"></ion-input>\n    </ion-item>\n    <div class=\"validation-error\">\n      <ng-container *ngFor=\"let validation of validation_messages.celular\">\n        <div *ngIf=\"\n            updaterForm.get('celular').hasError(validation.type) &&\n            (updaterForm.get('celular').dirty ||\n              updaterForm.get('celular').touched)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n    <ion-item color=\"secondary\">\n      <ion-label>Correo Electrónico</ion-label>\n      <ion-input formControlName=\"email\"></ion-input>\n    </ion-item>\n    <div class=\"validation-error\">\n      <ng-container *ngFor=\"let validation of validation_messages.email\">\n        <div *ngIf=\"\n            updaterForm.get('email').hasError(validation.type) &&\n            (updaterForm.get('email').dirty ||\n              updaterForm.get('email').touched)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n    <ion-item color=\"secondary\">\n      <ion-label>Ingresa tu Género</ion-label>\n      <ion-select formControlName=\"genero\" placeholder=\"Seleccione\">\n        <ion-select-option value=\"Masculino\">Masculino</ion-select-option>\n        <ion-select-option value=\"Femenino\">Femenino</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <div class=\"validation-error\">\n      <ng-container *ngFor=\"let validation of validation_messages.genero\">\n        <div *ngIf=\"\n                updaterForm.get('genero').hasError(validation.type) &&\n                (updaterForm.get('genero').dirty ||\n                  updaterForm.get('genero').touched)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n    <ion-item color=\"secondary\">\n      <ion-label>Estatura(cm)</ion-label>\n      <ion-input formControlName=\"estatura\"></ion-input>\n    </ion-item>\n    <div class=\"validation-error\">\n      <ng-container *ngFor=\"let validation of validation_messages.estatura\">\n        <div *ngIf=\"\n            updaterForm.get('estatura').hasError(validation.type) &&\n            (updaterForm.get('estatura').dirty ||\n              updaterForm.get('estatura').touched)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n    <ion-item color=\"secondary\">\n      <ion-label>Peso (kg)</ion-label>\n      <ion-input formControlName=\"peso\"></ion-input>\n    </ion-item>\n    <div class=\"validation-error\">\n      <ng-container *ngFor=\"let validation of validation_messages.peso\">\n        <div *ngIf=\"\n            updaterForm.get('peso').hasError(validation.type) &&\n            (updaterForm.get('peso').dirty ||\n              updaterForm.get('peso').touched)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n    <ion-item color=\"secondary\">\n      <ion-label>Vehiculo</ion-label>\n      <ion-select formControlName=\"vehiculo\" placeholder=\"Seleccione\">\n        <ion-select-option value=\"Bicicleta\">Bicicleta</ion-select-option>\n        <ion-select-option value=\"Bicicleta_motorizada\">Bicicleta motorizada</ion-select-option>\n        <ion-select-option value=\"Patineta_electrica\">Patineta Eléctrica</ion-select-option>\n        <ion-select-option value=\"Patineta_electrica\">Moto Eléctrica</ion-select-option>\n        <ion-select-option value=\"Patineta_electrica\">Carro Eléctrico</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <div class=\"validation-error\">\n      <ng-container *ngFor=\"let validation of validation_messages.vehiculo\">\n        <div *ngIf=\"\n            updaterForm.get('vehiculo').hasError(validation.type) &&\n            (updaterForm.get('vehiculo').dirty ||\n              updaterForm.get('vehiculo').touched)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n    <h2 class=\"PaddingSpecial\">Tus Datos Bancarios</h2>\n    <ion-item color=\"secondary\">\n      <ion-label>Banco</ion-label>\n      <ion-select formControlName=\"banco\" placeholder=\"Seleccione\">\n        <ion-select-option value=\"Bancamia S.A.\">Bancamia S.A.</ion-select-option>\n        <ion-select-option value=\"Banco Agrario\">Banco Agrario</ion-select-option>\n        <ion-select-option value=\"Banco Av Villas\">Banco Av Villas</ion-select-option>\n        <ion-select-option value=\"Banco BBVA Colombia S.A.\">Banco BBVA Colombia S.A.</ion-select-option>\n        <ion-select-option value=\"Banco Caja Social\">Banco Caja Social</ion-select-option>\n        <ion-select-option value=\"Bancolombia\">Bancolombia</ion-select-option>\n        <ion-select-option value=\"Banco Davivienda\">Banco Davivienda</ion-select-option>\n        <ion-select-option value=\"Banco de Bogota\">Banco de Bogota</ion-select-option>\n        <ion-select-option value=\"Banco de Occidente\">Banco de Occidente</ion-select-option>\n        <ion-select-option value=\"Banco Popular\">Banco Popular</ion-select-option>\n        <ion-select-option value=\"Banco Falabella\">Banco Falabella</ion-select-option>\n        <ion-select-option value=\"Banco GNB Sudameris\">Banco GNB Sudameris</ion-select-option>\n        <ion-select-option value=\"Banco Itau\">Banco Itau</ion-select-option>\n        <ion-select-option value=\"Banco Pichincha S.A.\">Banco Pichincha S.A.</ion-select-option>\n        <ion-select-option value=\"Bancoomeva S.A.\">Bancoomeva S.A.</ion-select-option>\n        <ion-select-option value=\"Citibank\">Citibank</ion-select-option>\n        <ion-select-option value=\"Scotiabank Colpatria\">Scotiabank Colpatria</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <div class=\"validation-error\">\n      <ng-container *ngFor=\"let validation of validation_messages.banco\">\n        <div *ngIf=\"\n            updaterForm.get('banco').hasError(validation.type) &&\n            (updaterForm.get('banco').dirty ||\n              updaterForm.get('banco').touched)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n    <ion-item color=\"secondary\">\n      <ion-label>Cuenta Bancaria</ion-label>\n      <ion-input formControlName=\"cuenta\"></ion-input>\n    </ion-item>\n    <div class=\"validation-error\">\n      <ng-container *ngFor=\"let validation of validation_messages.cuenta\">\n        <div *ngIf=\"\n            updaterForm.get('cuenta').hasError(validation.type) &&\n            (updaterForm.get('cuenta').dirty ||\n              updaterForm.get('cuenta').touched)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n    {{ errorMessage }}\n    <!-- <ion-item color=\"secondary\">\n      <ion-label position=\"floating\">Mis Ingresos</ion-label>\n      <ion-input formControlName=\"ingresos\"></ion-input>\n    </ion-item> -->\n    <ion-button color=\"transparent\" full outline class=\"ui button go-campaings\" [disabled]=\"!updaterForm.valid\" type=\"submit\">\n      EDITAR PERFIL\n    </ion-button>\n  </form>\n</ion-content>";
      /***/
    },

    /***/
    "v+7O":
    /*!***************************************************!*\
      !*** ./src/app/profile/profile-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: ProfilePageRoutingModule */

    /***/
    function v7O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
        return ProfilePageRoutingModule;
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


      var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile.page */
      "ncJE");

      var routes = [{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
      }];

      var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
        _classCallCheck(this, ProfilePageRoutingModule);
      };

      ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProfilePageRoutingModule);
      /***/
    },

    /***/
    "zxxS":
    /*!*******************************************!*\
      !*** ./src/app/profile/profile.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function zxxS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "h2 {\n  color: #01D9AD;\n}\n\nh4, ion-label, ion-input {\n  color: #606060 !important;\n}\n\n.PaddingSpecial {\n  margin-left: 10px;\n}\n\n:host(.button-full:not(.button-round)) .button-native {\n  border-radius: 10px !important;\n}\n\nion-button {\n  --border-radius: 30px;\n}\n\nion-select {\n  /* Applies to the value and placeholder color */\n  color: #000000;\n  /* Set a different placeholder color */\n  --placeholder-color: #606060;\n  /* Set full opacity on the placeholder */\n  --placeholder-opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjs7QUFDQTtFQUNJLHlCQUFBO0FBRUo7O0FBQUE7RUFDSSxpQkFBQTtBQUdKOztBQURBO0VBQ0ksOEJBQUE7QUFJSjs7QUFGQTtFQUNJLHFCQUFBO0FBS0o7O0FBSEE7RUFDSSwrQ0FBQTtFQUNBLGNBQUE7RUFFQSxzQ0FBQTtFQUNBLDRCQUFBO0VBRUEsd0NBQUE7RUFDQSx3QkFBQTtBQUlKIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgye1xyXG4gICAgY29sb3I6ICMwMUQ5QUQ7XHJcbn1cclxuaDQsIGlvbi1sYWJlbCwgaW9uLWlucHV0IHtcclxuICAgIGNvbG9yOiM2MDYwNjAhaW1wb3J0YW50O1xyXG59XHJcbi5QYWRkaW5nU3BlY2lhbHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbjpob3N0KC5idXR0b24tZnVsbDpub3QoLmJ1dHRvbi1yb3VuZCkpIC5idXR0b24tbmF0aXZlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHghaW1wb3J0YW50O1xyXG59XHJcbmlvbi1idXR0b257XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbn1cclxuaW9uLXNlbGVjdCB7XHJcbiAgICAvKiBBcHBsaWVzIHRvIHRoZSB2YWx1ZSBhbmQgcGxhY2Vob2xkZXIgY29sb3IgKi9cclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gIFxyXG4gICAgLyogU2V0IGEgZGlmZmVyZW50IHBsYWNlaG9sZGVyIGNvbG9yICovXHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjNjA2MDYwO1xyXG4gIFxyXG4gICAgLyogU2V0IGZ1bGwgb3BhY2l0eSBvbiB0aGUgcGxhY2Vob2xkZXIgKi9cclxuICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcclxuICB9XHJcbiJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=profile-profile-module-es5.js.map