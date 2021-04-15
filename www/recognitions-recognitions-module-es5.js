(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recognitions-recognitions-module"], {
    /***/
    "0t2w":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recognitions/recognitions.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function t2w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <div class=\"logo-ekobike-in\">\n    <img src=\"assets/img/logo-ekobike.png\">\n  </div>\n  <h2 class=\"title-section\"><i class=\"icon-trophy\"></i>Reconocimientos</h2>\n  <div class=\"prize-content\">\n    <h1 class=\"title-section\" >Movilidad Limpia</h1>\n    <ion-slides  *ngIf=\"movilidad.length\">\n      <ion-slide *ngFor=\"let reconocimiento of movilidad\">\n        <ion-avatar (click)=\"showRecognition(reconocimiento)\">\n          <!-- <img [src]=\"artist.images[0].url\" /> -->\n          <ion-icon text-center color=\"secondary\" class=\"icon-tools-2\"></ion-icon>\n          <!-- <span>{{ artist.name }}</span> -->\n        </ion-avatar>\n      </ion-slide>\n    </ion-slides>\n    <h1 class=\"title-section\" >Bienestar</h1>\n    <ion-slides  *ngIf=\"bienestar.length\">\n      <ion-slide *ngFor=\"let reconocimiento of bienestar\">\n        <ion-avatar (click)=\"showRecognition(reconocimiento)\">\n          <!-- <img [src]=\"artist.images[0].url\" /> -->\n          <ion-icon text-center color=\"secondary\" class=\"icon-tools-2\"></ion-icon>\n          <!-- <span>{{ artist.name }}</span> -->\n        </ion-avatar>\n      </ion-slide>\n    </ion-slides>\n    <h1 class=\"title-section\" >Alianzas</h1>\n    <ion-slides *ngIf=\"alianzas.length\">\n      <ion-slide *ngFor=\"let reconocimiento of alianzas\">\n        <ion-avatar (click)=\"showRecognition(reconocimiento)\">\n          <!-- <img [src]=\"artist.images[0].url\" /> -->\n          <ion-icon text-center color=\"secondary\" class=\"icon-tools-2\"></ion-icon>\n          <!-- <span>{{ artist.name }}</span> -->\n        </ion-avatar>\n      </ion-slide>\n    </ion-slides>\n    <h1 class=\"title-section\" >Ocio</h1>\n    <ion-slides *ngIf=\"ocio.length\">\n      <ion-slide *ngFor=\"let reconocimiento of ocio\">\n        <ion-avatar (click)=\"showRecognition(reconocimiento)\">\n          <!-- <img [src]=\"artist.images[0].url\" /> -->\n          <ion-icon text-center color=\"secondary\" class=\"icon-tools-2\"></ion-icon>\n          <!-- <span>{{ artist.name }}</span> -->\n        </ion-avatar>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "AYPo":
    /*!*****************************************************!*\
      !*** ./src/app/recognitions/recognitions.module.ts ***!
      \*****************************************************/

    /*! exports provided: RecognitionsPageModule */

    /***/
    function AYPo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecognitionsPageModule", function () {
        return RecognitionsPageModule;
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


      var _recognitions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./recognitions-routing.module */
      "wrXu");
      /* harmony import */


      var _recognitions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./recognitions.page */
      "l31N");

      var RecognitionsPageModule = function RecognitionsPageModule() {
        _classCallCheck(this, RecognitionsPageModule);
      };

      RecognitionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _recognitions_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecognitionsPageRoutingModule"]],
        declarations: [_recognitions_page__WEBPACK_IMPORTED_MODULE_6__["RecognitionsPage"]]
      })], RecognitionsPageModule);
      /***/
    },

    /***/
    "l31N":
    /*!***************************************************!*\
      !*** ./src/app/recognitions/recognitions.page.ts ***!
      \***************************************************/

    /*! exports provided: RecognitionsPage */

    /***/
    function l31N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecognitionsPage", function () {
        return RecognitionsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_recognitions_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./recognitions.page.html */
      "0t2w");
      /* harmony import */


      var _recognitions_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./recognitions.page.scss */
      "tGfo");
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
      /* harmony import */


      var _recognition_modal_recognition_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../recognition-modal/recognition-modal.page */
      "u6bn");
      /* harmony import */


      var _services_api_publibike_bienestar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/api-publibike-bienestar.service */
      "N/ei");

      var RecognitionsPage = /*#__PURE__*/function () {
        function RecognitionsPage(storage, modalController, loadingCtrl, apiService) {
          _classCallCheck(this, RecognitionsPage);

          this.storage = storage;
          this.modalController = modalController;
          this.loadingCtrl = loadingCtrl;
          this.apiService = apiService;
          this.empresaId = "";
          this.reconocimientos = [];
          this.movilidad = [];
          this.bienestar = [];
          this.alianzas = [];
          this.ocio = [];
        }

        _createClass(RecognitionsPage, [{
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var user;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.presentLoading();
                      _context.next = 3;
                      return this.storage.get("userData");

                    case 3:
                      user = _context.sent;
                      this.empresaId = user.empresa.id;
                      _context.next = 7;
                      return this.apiService.getCompanyRecognitios(this.empresaId);

                    case 7:
                      this.reconocimientos = _context.sent;
                      this.reconocimientos = this.reconocimientos.reconocimientos;
                      this.movilidad = this.reconocimientos.filter(function (item) {
                        return item.categoria === 'Movilidad limpia';
                      });
                      this.bienestar = this.reconocimientos.filter(function (item) {
                        return item.categoria === 'Bienestar';
                      });
                      this.alianzas = this.reconocimientos.filter(function (item) {
                        return item.categoria === 'Alianzas';
                      });
                      this.ocio = this.reconocimientos.filter(function (item) {
                        return item.categoria === 'Ocio';
                      });
                      this.loading.dismiss();

                    case 14:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "showRecognition",
          value: function showRecognition(reconocimiento) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var recognition, modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.apiService.getRecognitions(reconocimiento.id);

                    case 2:
                      recognition = _context2.sent;
                      console.log(recognition);
                      _context2.next = 6;
                      return this.modalController.create({
                        component: _recognition_modal_recognition_modal_page__WEBPACK_IMPORTED_MODULE_6__["RecognitionModalPage"],
                        componentProps: {
                          categoria: reconocimiento.categoria,
                          data: recognition
                        }
                      });

                    case 6:
                      modal = _context2.sent;
                      _context2.next = 9;
                      return modal.present();

                    case 9:
                      return _context2.abrupt("return", _context2.sent);

                    case 10:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Cargando...'
                      });

                    case 2:
                      this.loading = _context3.sent;
                      _context3.next = 5;
                      return this.loading.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RecognitionsPage;
      }();

      RecognitionsPage.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _services_api_publibike_bienestar_service__WEBPACK_IMPORTED_MODULE_7__["ApiPublibikeBienestarService"]
        }];
      };

      RecognitionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-recognitions',
        template: _raw_loader_recognitions_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_recognitions_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RecognitionsPage);
      /***/
    },

    /***/
    "tGfo":
    /*!*****************************************************!*\
      !*** ./src/app/recognitions/recognitions.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function tGfo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".logo-ekobike-in {\n  position: unset;\n  margin-bottom: 30px;\n  margin-top: 20px;\n}\n\nion-avatar {\n  height: 120px;\n  width: 90%;\n}\n\nion-avatar img {\n  width: 90px;\n  height: 90px;\n}\n\nion-icon {\n  font-size: 75px;\n  display: block;\n  margin-bottom: 10px;\n}\n\nion-avatar span {\n  font-size: 16px;\n  color: #ffffff;\n}\n\nh1 {\n  color: var(--ion-color-tertiary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjb2duaXRpb25zL3JlY29nbml0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLFVBQUE7QUFFSjs7QUFBRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBR0o7O0FBREU7RUFDRSxlQUFBO0VBQ0gsY0FBQTtFQUNBLG1CQUFBO0FBSUQ7O0FBRkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUtKOztBQUhFO0VBQ0ksZ0NBQUE7QUFNTiIsImZpbGUiOiJzcmMvYXBwL3JlY29nbml0aW9ucy9yZWNvZ25pdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28tZWtvYmlrZS1pbiB7XHJcbiAgICBwb3NpdGlvbjogdW5zZXQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5pb24tYXZhdGFyIHtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gIH1cclxuICBpb24tYXZhdGFyIGltZyB7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIGhlaWdodDogOTBweDtcclxuICB9XHJcbiAgaW9uLWljb257XHJcbiAgICBmb250LXNpemU6IDc1cHg7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgaW9uLWF2YXRhciBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuICBoMXtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSlcclxuICB9Il19 */";
      /***/
    },

    /***/
    "wrXu":
    /*!*************************************************************!*\
      !*** ./src/app/recognitions/recognitions-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: RecognitionsPageRoutingModule */

    /***/
    function wrXu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecognitionsPageRoutingModule", function () {
        return RecognitionsPageRoutingModule;
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


      var _recognitions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./recognitions.page */
      "l31N");

      var routes = [{
        path: '',
        component: _recognitions_page__WEBPACK_IMPORTED_MODULE_3__["RecognitionsPage"]
      }];

      var RecognitionsPageRoutingModule = function RecognitionsPageRoutingModule() {
        _classCallCheck(this, RecognitionsPageRoutingModule);
      };

      RecognitionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RecognitionsPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=recognitions-recognitions-module-es5.js.map