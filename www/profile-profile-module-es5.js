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


      var _recognition_modal_recognition_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../recognition-modal/recognition-modal.page */
      "u6bn");
      /* harmony import */


      var _services_api_publibike_bienestar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/api-publibike-bienestar.service */
      "N/ei");

      var ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(storage, formBuilder, apiService, alertController, modalController, loadingCtrl) {
          _classCallCheck(this, ProfilePage);

          this.storage = storage;
          this.formBuilder = formBuilder;
          this.apiService = apiService;
          this.alertController = alertController;
          this.modalController = modalController;
          this.loadingCtrl = loadingCtrl;
          this.userId = {
            _id: ""
          };
          this.user = {
            nombre: "",
            apellido: "",
            usuario: "",
            empresa: {
              nombre: ""
            },
            reconocimientos: [],
            km_total: 0,
            cal_total: 0,
            co2_total: 0,
            tiempo_total: 0,
            peso: 0
          };
          this.reconocimientos = [];
          this.slideOps = {
            initialSlide: 2,
            slidesPerView: 4,
            centeredSlides: true,
            speed: 400
          };
          this.validation_messages = {
            email: [{
              type: "required",
              message: "El Correo es requerido"
            }, {
              type: "pattern",
              message: "Ingresa un correo válido"
            }],
            empresa: {
              nombre: [{
                type: "requerido",
                message: "La empresa es requerida"
              }]
            }
          };
          this.updateForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])),
            empresa: {
              nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]))
            }
          });
        }

        _createClass(ProfilePage, [{
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.presentLoading();
                      _context2.next = 3;
                      return this.storage.get("userId");

                    case 3:
                      this.userId = _context2.sent;
                      // console.log(this.userId)
                      this.apiService.getUserData(this.userId._id).then(function (res) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  console.log(res);
                                  this.storage.set("userData", res); // this.user = await this.storage.get("userData");

                                  this.user = res;
                                  console.log(this.user);
                                  this.updateForm.patchValue(this.user);

                                case 5:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee, this);
                        }));
                      });
                      _context2.next = 7;
                      return this.apiService.getUserRecognition(this.userId._id);

                    case 7:
                      this.reconocimientos = _context2.sent;
                      this.reconocimientos = this.reconocimientos.reconocimientos;
                      this.loading.dismiss();
                      console.log(this.reconocimientos);

                    case 11:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.presentLoading();
                      _context4.next = 3;
                      return this.storage.get("userId");

                    case 3:
                      this.userId = _context4.sent;
                      // console.log(this.userId)
                      this.apiService.getUserData(this.userId._id).then(function (res) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  console.log(res);
                                  this.storage.set("userData", res);
                                  _context3.next = 4;
                                  return this.storage.get("userData");

                                case 4:
                                  this.user = _context3.sent;
                                  console.log(this.user);
                                  this.updateForm.patchValue(this.user);

                                case 7:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3, this);
                        }));
                      });
                      _context4.next = 7;
                      return this.apiService.getUserRecognition(this.userId._id);

                    case 7:
                      this.reconocimientos = _context4.sent;
                      this.reconocimientos = this.reconocimientos.reconocimientos;
                      this.loading.dismiss();
                      console.log(this.reconocimientos);

                    case 11:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "update",
          value: function update(userData) {
            var _this3 = this;

            this.apiService.updateUser(userData).then(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                var alert;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        console.log("Datos actualizados");
                        _context5.next = 3;
                        return this.alertController.create({
                          cssClass: 'my-custom-class',
                          header: 'Atención',
                          message: 'Datos actualizados correctamente',
                          buttons: [{
                            text: 'Ok'
                          }]
                        });

                      case 3:
                        alert = _context5.sent;
                        _context5.next = 6;
                        return alert.present();

                      case 6:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, this);
              }));
            });
          }
        }, {
          key: "showRecognition",
          value: function showRecognition(reconocimiento) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var recognition, modal;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.apiService.getRecognitions(reconocimiento.id);

                    case 2:
                      recognition = _context6.sent;
                      console.log(recognition);
                      _context6.next = 6;
                      return this.modalController.create({
                        component: _recognition_modal_recognition_modal_page__WEBPACK_IMPORTED_MODULE_7__["RecognitionModalPage"],
                        componentProps: {
                          categoria: reconocimiento.categoria,
                          data: recognition
                        }
                      });

                    case 6:
                      modal = _context6.sent;
                      _context6.next = 9;
                      return modal.present();

                    case 9:
                      return _context6.abrupt("return", _context6.sent);

                    case 10:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Cargando...'
                      });

                    case 2:
                      this.loading = _context7.sent;
                      _context7.next = 5;
                      return this.loading.present();

                    case 5:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProfilePage;
      }();

      ProfilePage.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _services_api_publibike_bienestar_service__WEBPACK_IMPORTED_MODULE_8__["ApiPublibikeBienestarService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
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


      __webpack_exports__["default"] = "\n<ion-content class=\"inside-app\" padding>\n  <div class=\"content-profile\">\n    <div class=\"profile-photo\">\n      <ul>\n        <li>\n          <hr>\n        </li>\n        <li class=\"content-photo\"><img src=\"assets/img/logo-ekobike.png\"></li>\n        <li>\n          <hr>\n        </li>\n      </ul>\n    </div>\n    <div class=\"info-profile\">\n      <h2 color=\"secondary\">{{user.nombre}} </h2>\n      <h4>Usuario: {{user.usuario}}</h4>\n      <h4>Empresa: {{user.empresa.nombre}}</h4>\n      <div class=\"data-profile ui two column grid\">\n        <div class=\"column\">\n          <form class=\"ui form\" [formGroup]=\"updateForm\" (ngSubmit)=\"update(updateForm.value)\">\n            <ion-item>\n              <ion-label color=\"secondary\">Correo Electrónico: </ion-label>\n              <ion-input formControlName=\"email\"></ion-input>\n            </ion-item>\n            <div class=\"validation-error\">\n              <ng-container *ngFor=\"let validation of validation_messages.email\">\n                <div *ngIf=\"\n                    updateForm.get('email').hasError(validation.type) &&\n                    (updateForm.get('email').dirty ||\n                      updateForm.get('email').touched)\">\n                  {{ validation.message }}\n                </div>\n              </ng-container>\n            </div>\n            <!-- <ion-item>\n              <ion-label color=\"secondary\">Empresa</ion-label>\n              <ion-input formControlName=\"empresa.nombre\"></ion-input>\n            </ion-item>\n            <div class=\"validation-error\">\n              <ng-container *ngFor=\"let validation of validation_messages.empresa\">\n                <div *ngIf=\"\n                    updateForm.get('empresa').hasError(validation.type) &&\n                    (updateForm.get('empresa').dirty ||\n                      updateForm.get('empresa').touched)\">\n                  {{ validation.message }}\n                </div>\n              </ng-container>\n            </div>     -->\n            <ion-button color=\"transparency\" class=\"ui right floated button btn-yellow edit-btn\" [disabled]=\"!updateForm.valid\" type=\"submit\">Editar Correo</ion-button>        \n          </form>\n        </div>\n      </div>\n      <div class=\"prize-profile\">\n        <h4>\n          Último Reconocimientos\n        </h4>\n        <div class=\"prize-content\">\n          <ion-slides [options]=\"slideOps\" *ngIf=\"reconocimientos.length\">\n            <ion-slide *ngFor=\"let reconocimiento of reconocimientos\">\n              <ion-avatar (click)=\"showRecognition(reconocimiento)\">\n                <!-- <img [src]=\"artist.images[0].url\" /> -->\n                <ion-icon text-center color=\"secondary\" class=\"icon-tools-2\"></ion-icon>\n                <span color=\"secondary\">{{reconocimiento.categoria}}</span>\n              </ion-avatar>\n            </ion-slide>\n          </ion-slides>\n          <!-- <ul>\n            <li>\n              <i class=\"icon-tools-2\"></i>\n              Mantenimiento\n            </li>\n            <li>\n              <i class=\"icon-basket\"></i>\n              Mercado\n            </li>\n            <li>\n              <i class=\"icon-briefcase\"></i>\n              Viaje\n            </li>\n          </ul> -->\n\n        </div>\n      </div>    \n    </div>\n    <div class=\"content-activity ui two column grid\">\n      <div class=\"column\">\n        <h4>\n          Total de Kilometros Recorridos\n        </h4>\n        <div class=\"data-activity\">\n          <h3>\n            {{user.km_total | number}}\n          </h3>\n          <h5>Kms</h5>\n        </div>\n\n      </div>\n      <div class=\"column\">\n        <h4>\n          Total de Calorías Consumidas\n        </h4>\n        <div class=\"data-activity\">\n          <h3>\n            {{user.cal_total | number}}\n          </h3>\n          <h5>Kcal</h5>\n        </div>\n      </div>\n      <div class=\"column\">\n        <h4>\n          Total de CO2 Reducido\n        </h4>\n        <div class=\"data-activity\">\n          <h3>\n            {{user.co2_total | number}}\n          </h3>\n          <h5>Kgr</h5>\n        </div>\n      </div>\n      <div class=\"column\">\n        <h4>\n          Tiempo total de actividad\n        </h4>\n        <div class=\"data-activity\">\n          <h3>\n            {{user.tiempo_total | number}}\n          </h3>\n          <h5>Mins</h5>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>";
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


      __webpack_exports__["default"] = "ion-avatar {\n  height: 120px;\n  width: 90%;\n}\n\nion-avatar img {\n  width: 90px;\n  height: 90px;\n}\n\nion-icon {\n  font-size: 75px;\n  display: block;\n  margin-bottom: 10px;\n}\n\nion-avatar span {\n  font-size: 16px;\n  color: #ffffff;\n}\n\n.ui form .ui.button {\n  padding: 0px;\n}\n\nion-content {\n  --background-image: url('background-ekobike.jpg') no-repeat fixed center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUdGOztBQURBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFJRjs7QUFGQTtFQUNFLFlBQUE7QUFLRjs7QUFIQTtFQUNFLHdFQUFBO0FBTUYiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWF2YXRhciB7XG4gIGhlaWdodDogMTIwcHg7XG4gIHdpZHRoOiA5MCU7XG59XG5pb24tYXZhdGFyIGltZyB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG59XG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogNzVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5pb24tYXZhdGFyIHNwYW4ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLnVpIGZvcm0gLnVpLmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2JhY2tncm91bmQtZWtvYmlrZS5qcGdcIikgbm8tcmVwZWF0IGZpeGVkIGNlbnRlcjtcbn1cbiJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=profile-profile-module-es5.js.map