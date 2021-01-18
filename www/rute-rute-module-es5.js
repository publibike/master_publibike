(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rute-rute-module"], {
    /***/
    "0fR0":
    /*!**************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web-plugins.js ***!
      \**************************************************************/

    /*! exports provided: AccessibilityPluginWeb, Accessibility, AppPluginWeb, App, BrowserPluginWeb, Browser, CameraPluginWeb, Camera, ClipboardPluginWeb, Clipboard, FilesystemPluginWeb, Filesystem, GeolocationPluginWeb, Geolocation, DevicePluginWeb, Device, LocalNotificationsPluginWeb, LocalNotifications, SharePluginWeb, Share, ModalsPluginWeb, Modals, MotionPluginWeb, Motion, NetworkPluginWeb, Network, PermissionsPluginWeb, Permissions, SplashScreenPluginWeb, SplashScreen, StoragePluginWeb, Storage, ToastPluginWeb, Toast, registerWebPlugin */

    /***/
    function fR0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "registerWebPlugin", function () {
        return registerWebPlugin;
      });
      /* harmony import */


      var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./global */
      "91C0");
      /* harmony import */


      var _web_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./web/index */
      "6Fjf");
      /* harmony import */


      var _web_accessibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./web/accessibility */
      "tXcl");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AccessibilityPluginWeb", function () {
        return _web_accessibility__WEBPACK_IMPORTED_MODULE_2__["AccessibilityPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Accessibility", function () {
        return _web_accessibility__WEBPACK_IMPORTED_MODULE_2__["Accessibility"];
      });
      /* harmony import */


      var _web_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./web/app */
      "fnMB");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AppPluginWeb", function () {
        return _web_app__WEBPACK_IMPORTED_MODULE_3__["AppPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "App", function () {
        return _web_app__WEBPACK_IMPORTED_MODULE_3__["App"];
      });
      /* harmony import */


      var _web_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./web/browser */
      "6Yfx");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BrowserPluginWeb", function () {
        return _web_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Browser", function () {
        return _web_browser__WEBPACK_IMPORTED_MODULE_4__["Browser"];
      });
      /* harmony import */


      var _web_camera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./web/camera */
      "oNdP");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CameraPluginWeb", function () {
        return _web_camera__WEBPACK_IMPORTED_MODULE_5__["CameraPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Camera", function () {
        return _web_camera__WEBPACK_IMPORTED_MODULE_5__["Camera"];
      });
      /* harmony import */


      var _web_clipboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./web/clipboard */
      "FXFR");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ClipboardPluginWeb", function () {
        return _web_clipboard__WEBPACK_IMPORTED_MODULE_6__["ClipboardPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Clipboard", function () {
        return _web_clipboard__WEBPACK_IMPORTED_MODULE_6__["Clipboard"];
      });
      /* harmony import */


      var _web_filesystem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./web/filesystem */
      "r04x");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FilesystemPluginWeb", function () {
        return _web_filesystem__WEBPACK_IMPORTED_MODULE_7__["FilesystemPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Filesystem", function () {
        return _web_filesystem__WEBPACK_IMPORTED_MODULE_7__["Filesystem"];
      });
      /* harmony import */


      var _web_geolocation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./web/geolocation */
      "fme8");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "GeolocationPluginWeb", function () {
        return _web_geolocation__WEBPACK_IMPORTED_MODULE_8__["GeolocationPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Geolocation", function () {
        return _web_geolocation__WEBPACK_IMPORTED_MODULE_8__["Geolocation"];
      });
      /* harmony import */


      var _web_device__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./web/device */
      "ghO4");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DevicePluginWeb", function () {
        return _web_device__WEBPACK_IMPORTED_MODULE_9__["DevicePluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Device", function () {
        return _web_device__WEBPACK_IMPORTED_MODULE_9__["Device"];
      });
      /* harmony import */


      var _web_local_notifications__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./web/local-notifications */
      "QYDU");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LocalNotificationsPluginWeb", function () {
        return _web_local_notifications__WEBPACK_IMPORTED_MODULE_10__["LocalNotificationsPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LocalNotifications", function () {
        return _web_local_notifications__WEBPACK_IMPORTED_MODULE_10__["LocalNotifications"];
      });
      /* harmony import */


      var _web_share__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./web/share */
      "ZO70");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SharePluginWeb", function () {
        return _web_share__WEBPACK_IMPORTED_MODULE_11__["SharePluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Share", function () {
        return _web_share__WEBPACK_IMPORTED_MODULE_11__["Share"];
      });
      /* harmony import */


      var _web_modals__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./web/modals */
      "sB/A");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ModalsPluginWeb", function () {
        return _web_modals__WEBPACK_IMPORTED_MODULE_12__["ModalsPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Modals", function () {
        return _web_modals__WEBPACK_IMPORTED_MODULE_12__["Modals"];
      });
      /* harmony import */


      var _web_motion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./web/motion */
      "X33G");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MotionPluginWeb", function () {
        return _web_motion__WEBPACK_IMPORTED_MODULE_13__["MotionPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Motion", function () {
        return _web_motion__WEBPACK_IMPORTED_MODULE_13__["Motion"];
      });
      /* harmony import */


      var _web_network__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./web/network */
      "LZKj");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NetworkPluginWeb", function () {
        return _web_network__WEBPACK_IMPORTED_MODULE_14__["NetworkPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Network", function () {
        return _web_network__WEBPACK_IMPORTED_MODULE_14__["Network"];
      });
      /* harmony import */


      var _web_permissions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./web/permissions */
      "uhwm");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PermissionsPluginWeb", function () {
        return _web_permissions__WEBPACK_IMPORTED_MODULE_15__["PermissionsPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Permissions", function () {
        return _web_permissions__WEBPACK_IMPORTED_MODULE_15__["Permissions"];
      });
      /* harmony import */


      var _web_splash_screen__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./web/splash-screen */
      "5Ynz");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SplashScreenPluginWeb", function () {
        return _web_splash_screen__WEBPACK_IMPORTED_MODULE_16__["SplashScreenPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SplashScreen", function () {
        return _web_splash_screen__WEBPACK_IMPORTED_MODULE_16__["SplashScreen"];
      });
      /* harmony import */


      var _web_storage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./web/storage */
      "nfLy");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StoragePluginWeb", function () {
        return _web_storage__WEBPACK_IMPORTED_MODULE_17__["StoragePluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Storage", function () {
        return _web_storage__WEBPACK_IMPORTED_MODULE_17__["Storage"];
      });
      /* harmony import */


      var _web_toast__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./web/toast */
      "6fhM");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ToastPluginWeb", function () {
        return _web_toast__WEBPACK_IMPORTED_MODULE_18__["ToastPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Toast", function () {
        return _web_toast__WEBPACK_IMPORTED_MODULE_18__["Toast"];
      });

      Object(_web_index__WEBPACK_IMPORTED_MODULE_1__["mergeWebPlugins"])(_global__WEBPACK_IMPORTED_MODULE_0__["Plugins"]);

      var registerWebPlugin = function registerWebPlugin(plugin) {
        Object(_web_index__WEBPACK_IMPORTED_MODULE_1__["mergeWebPlugin"])(_global__WEBPACK_IMPORTED_MODULE_0__["Plugins"], plugin);
      }; //# sourceMappingURL=web-plugins.js.map

      /***/

    },

    /***/
    "4+Gx":
    /*!*************************************!*\
      !*** ./src/app/rute/rute.module.ts ***!
      \*************************************/

    /*! exports provided: RutePageModule */

    /***/
    function Gx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RutePageModule", function () {
        return RutePageModule;
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


      var _rute_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./rute-routing.module */
      "Of+G");
      /* harmony import */


      var _rute_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./rute.page */
      "oH3S");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "iInd"); // import { DeviceMotion} from '@ionic-native/device-motion/ngx';


      var RutePageModule = function RutePageModule() {
        _classCallCheck(this, RutePageModule);
      };

      RutePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _rute_routing_module__WEBPACK_IMPORTED_MODULE_5__["RutePageRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild([{
          path: '',
          component: _rute_page__WEBPACK_IMPORTED_MODULE_6__["RutePage"]
        }])],
        declarations: [_rute_page__WEBPACK_IMPORTED_MODULE_6__["RutePage"]]
      })], RutePageModule);
      /***/
    },

    /***/
    "5Ynz":
    /*!********************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/splash-screen.js ***!
      \********************************************************************/

    /*! exports provided: SplashScreenPluginWeb, SplashScreen */

    /***/
    function Ynz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SplashScreenPluginWeb", function () {
        return SplashScreenPluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SplashScreen", function () {
        return SplashScreen;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "O1h7");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "6Fjf");

      var SplashScreenPluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SplashScreenPluginWeb, _super);

        function SplashScreenPluginWeb() {
          return _super.call(this, {
            name: 'SplashScreen',
            platforms: ['web']
          }) || this;
        }

        SplashScreenPluginWeb.prototype.show = function (_options, _callback) {
          return Promise.resolve();
        };

        SplashScreenPluginWeb.prototype.hide = function (_options, _callback) {
          return Promise.resolve();
        };

        return SplashScreenPluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var SplashScreen = new SplashScreenPluginWeb(); //# sourceMappingURL=splash-screen.js.map

      /***/
    },

    /***/
    "6Fjf":
    /*!************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/index.js ***!
      \************************************************************/

    /*! exports provided: WebPluginRegistry, WebPlugins, WebPlugin, mergeWebPlugins, mergeWebPlugin */

    /***/
    function Fjf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WebPluginRegistry", function () {
        return WebPluginRegistry;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WebPlugins", function () {
        return WebPlugins;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WebPlugin", function () {
        return WebPlugin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mergeWebPlugins", function () {
        return mergeWebPlugins;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mergeWebPlugin", function () {
        return mergeWebPlugin;
      });

      var WebPluginRegistry =
      /** @class */
      function () {
        function WebPluginRegistry() {
          this.plugins = {};
          this.loadedPlugins = {};
        }

        WebPluginRegistry.prototype.addPlugin = function (plugin) {
          this.plugins[plugin.config.name] = plugin;
        };

        WebPluginRegistry.prototype.getPlugin = function (name) {
          return this.plugins[name];
        };

        WebPluginRegistry.prototype.loadPlugin = function (name) {
          var plugin = this.getPlugin(name);

          if (!plugin) {
            console.error("Unable to load web plugin " + name + ", no such plugin found.");
            return;
          }

          plugin.load();
        };

        WebPluginRegistry.prototype.getPlugins = function () {
          var p = [];

          for (var name_1 in this.plugins) {
            p.push(this.plugins[name_1]);
          }

          return p;
        };

        return WebPluginRegistry;
      }();

      var WebPlugins = new WebPluginRegistry();

      var WebPlugin =
      /** @class */
      function () {
        function WebPlugin(config, pluginRegistry) {
          this.config = config;
          this.loaded = false;
          this.listeners = {};
          this.windowListeners = {};

          if (!pluginRegistry) {
            WebPlugins.addPlugin(this);
          } else {
            pluginRegistry.addPlugin(this);
          }
        }

        WebPlugin.prototype.addWindowListener = function (handle) {
          window.addEventListener(handle.windowEventName, handle.handler);
          handle.registered = true;
        };

        WebPlugin.prototype.removeWindowListener = function (handle) {
          if (!handle) {
            return;
          }

          window.removeEventListener(handle.windowEventName, handle.handler);
          handle.registered = false;
        };

        WebPlugin.prototype.addListener = function (eventName, listenerFunc) {
          var _this = this;

          var listeners = this.listeners[eventName];

          if (!listeners) {
            this.listeners[eventName] = [];
          }

          this.listeners[eventName].push(listenerFunc); // If we haven't added a window listener for this event and it requires one,
          // go ahead and add it

          var windowListener = this.windowListeners[eventName];

          if (windowListener && !windowListener.registered) {
            this.addWindowListener(windowListener);
          }

          return {
            remove: function remove() {
              _this.removeListener(eventName, listenerFunc);
            }
          };
        };

        WebPlugin.prototype.removeListener = function (eventName, listenerFunc) {
          var listeners = this.listeners[eventName];

          if (!listeners) {
            return;
          }

          var index = listeners.indexOf(listenerFunc);
          this.listeners[eventName].splice(index, 1); // If there are no more listeners for this type of event,
          // remove the window listener

          if (!this.listeners[eventName].length) {
            this.removeWindowListener(this.windowListeners[eventName]);
          }
        };

        WebPlugin.prototype.removeAllListeners = function () {
          this.listeners = {};

          for (var listener in this.windowListeners) {
            this.removeWindowListener(this.windowListeners[listener]);
          }

          this.windowListeners = {};
        };

        WebPlugin.prototype.notifyListeners = function (eventName, data) {
          var listeners = this.listeners[eventName];

          if (listeners) {
            listeners.forEach(function (listener) {
              return listener(data);
            });
          }
        };

        WebPlugin.prototype.hasListeners = function (eventName) {
          return !!this.listeners[eventName].length;
        };

        WebPlugin.prototype.registerWindowListener = function (windowEventName, pluginEventName) {
          var _this = this;

          this.windowListeners[pluginEventName] = {
            registered: false,
            windowEventName: windowEventName,
            pluginEventName: pluginEventName,
            handler: function handler(event) {
              _this.notifyListeners(pluginEventName, event);
            }
          };
        };

        WebPlugin.prototype.requestPermissions = function () {
          if (Capacitor.isNative) {
            return Capacitor.nativePromise(this.config.name, 'requestPermissions', {});
          } else {
            return Promise.resolve({
              results: []
            });
          }
        };

        WebPlugin.prototype.load = function () {
          this.loaded = true;
        };

        return WebPlugin;
      }();

      var shouldMergeWebPlugin = function shouldMergeWebPlugin(plugin) {
        return plugin.config.platforms && plugin.config.platforms.indexOf(Capacitor.platform) >= 0;
      };
      /**
       * For all our known web plugins, merge them into the global plugins
       * registry if they aren't already existing. If they don't exist, that
       * means there's no existing native implementation for it.
       * @param knownPlugins the Capacitor.Plugins global registry.
       */


      var mergeWebPlugins = function mergeWebPlugins(knownPlugins) {
        var plugins = WebPlugins.getPlugins();

        for (var _i = 0, plugins_1 = plugins; _i < plugins_1.length; _i++) {
          var plugin = plugins_1[_i];
          mergeWebPlugin(knownPlugins, plugin);
        }
      };

      var mergeWebPlugin = function mergeWebPlugin(knownPlugins, plugin) {
        // If we already have a plugin registered (meaning it was defined in the native layer),
        // then we should only overwrite it if the corresponding web plugin activates on
        // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
        if (knownPlugins.hasOwnProperty(plugin.config.name) && !shouldMergeWebPlugin(plugin)) {
          return;
        }

        knownPlugins[plugin.config.name] = plugin;
      }; //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "6Yfx":
    /*!**************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/browser.js ***!
      \**************************************************************/

    /*! exports provided: BrowserPluginWeb, Browser */

    /***/
    function Yfx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BrowserPluginWeb", function () {
        return BrowserPluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Browser", function () {
        return Browser;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "O1h7");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "6Fjf");

      var BrowserPluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BrowserPluginWeb, _super);

        function BrowserPluginWeb() {
          return _super.call(this, {
            name: 'Browser',
            platforms: ['web']
          }) || this;
        }

        BrowserPluginWeb.prototype.open = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              this._lastWindow = window.open(options.url, options.windowName || '_blank');
              return [2
              /*return*/
              , Promise.resolve()];
            });
          });
        };

        BrowserPluginWeb.prototype.prefetch = function (_options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              // Does nothing
              return [2
              /*return*/
              , Promise.resolve()];
            });
          });
        };

        BrowserPluginWeb.prototype.close = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              this._lastWindow && this._lastWindow.close();
              return [2
              /*return*/
              , Promise.resolve()];
            });
          });
        };

        return BrowserPluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var Browser = new BrowserPluginWeb(); //# sourceMappingURL=browser.js.map

      /***/
    },

    /***/
    "6fhM":
    /*!************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/toast.js ***!
      \************************************************************/

    /*! exports provided: ToastPluginWeb, Toast */

    /***/
    function fhM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastPluginWeb", function () {
        return ToastPluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Toast", function () {
        return Toast;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "O1h7");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "6Fjf");

      var ToastPluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ToastPluginWeb, _super);

        function ToastPluginWeb() {
          return _super.call(this, {
            name: 'Toast',
            platforms: ['web']
          }) || this;
        }

        ToastPluginWeb.prototype.show = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var duration, toast;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              duration = 2000;

              if (options.duration) {
                duration = options.duration === 'long' ? 3500 : 2000;
              }

              toast = document.createElement('pwa-toast');
              toast.duration = duration;
              toast.message = options.text;
              document.body.appendChild(toast);
              return [2
              /*return*/
              ];
            });
          });
        };

        return ToastPluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var Toast = new ToastPluginWeb(); //# sourceMappingURL=toast.js.map

      /***/
    },

    /***/
    "91C0":
    /*!*********************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/global.js ***!
      \*********************************************************/

    /*! exports provided: Capacitor, Plugins */

    /***/
    function C0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Capacitor", function () {
        return Capacitor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Plugins", function () {
        return Plugins;
      });
      /* harmony import */


      var _web_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./web-runtime */
      "LLrc"); // Create our default Capacitor instance, which will be
      // overridden on native platforms


      var Capacitor = function (globalThis) {
        // Create a new CapacitorWeb instance if one doesn't already exist on globalThis
        // Ensure the global is assigned the same Capacitor instance,
        // then export Capacitor so it can be imported in other modules
        return globalThis.Capacitor = globalThis.Capacitor || new _web_runtime__WEBPACK_IMPORTED_MODULE_0__["CapacitorWeb"]();
      }( // figure out the current globalThis, such as "window", "self" or "global"
      // ensure errors are not thrown in an node SSR environment or web worker
      typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});

      var Plugins = Capacitor.Plugins; //# sourceMappingURL=global.js.map

      /***/
    },

    /***/
    "FXFR":
    /*!****************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/clipboard.js ***!
      \****************************************************************/

    /*! exports provided: ClipboardPluginWeb, Clipboard */

    /***/
    function FXFR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClipboardPluginWeb", function () {
        return ClipboardPluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Clipboard", function () {
        return Clipboard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "O1h7");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "6Fjf");

      var ClipboardPluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ClipboardPluginWeb, _super);

        function ClipboardPluginWeb() {
          return _super.call(this, {
            name: 'Clipboard',
            platforms: ['web']
          }) || this;
        }

        ClipboardPluginWeb.prototype.write = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var blob, clipboardItemInput, err_1;

            var _a;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
              switch (_b.label) {
                case 0:
                  if (!navigator.clipboard) {
                    return [2
                    /*return*/
                    , Promise.reject('Clipboard API not available in this browser')];
                  }

                  if (!(options.string !== undefined || options.url)) return [3
                  /*break*/
                  , 2];

                  if (!navigator.clipboard.writeText) {
                    return [2
                    /*return*/
                    , Promise.reject('Writting to clipboard not supported in this browser')];
                  }

                  return [4
                  /*yield*/
                  , navigator.clipboard.writeText(options.string !== undefined ? options.string : options.url)];

                case 1:
                  _b.sent();

                  return [3
                  /*break*/
                  , 10];

                case 2:
                  if (!options.image) return [3
                  /*break*/
                  , 9];

                  if (!navigator.clipboard.write) {
                    return [2
                    /*return*/
                    , Promise.reject('Setting images not supported in this browser')];
                  }

                  _b.label = 3;

                case 3:
                  _b.trys.push([3, 7,, 8]);

                  return [4
                  /*yield*/
                  , fetch(options.image)];

                case 4:
                  return [4
                  /*yield*/
                  , _b.sent().blob()];

                case 5:
                  blob = _b.sent();
                  clipboardItemInput = new ClipboardItem((_a = {}, _a[blob.type] = blob, _a));
                  return [4
                  /*yield*/
                  , navigator.clipboard.write([clipboardItemInput])];

                case 6:
                  _b.sent();

                  return [3
                  /*break*/
                  , 8];

                case 7:
                  err_1 = _b.sent();
                  return [2
                  /*return*/
                  , Promise.reject('Failed to write image')];

                case 8:
                  return [3
                  /*break*/
                  , 10];

                case 9:
                  return [2
                  /*return*/
                  , Promise.reject('Nothing to write')];

                case 10:
                  return [2
                  /*return*/
                  , Promise.resolve()];
              }
            });
          });
        };

        ClipboardPluginWeb.prototype.read = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var clipboardItems, type, clipboardBlob, data, err_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  if (!navigator.clipboard) {
                    return [2
                    /*return*/
                    , Promise.reject('Clipboard API not available in this browser')];
                  }

                  if (!!navigator.clipboard.read) return [3
                  /*break*/
                  , 1];

                  if (!navigator.clipboard.readText) {
                    return [2
                    /*return*/
                    , Promise.reject('Reading from clipboard not supported in this browser')];
                  }

                  return [2
                  /*return*/
                  , this.readText()];

                case 1:
                  _a.trys.push([1, 5,, 6]);

                  return [4
                  /*yield*/
                  , navigator.clipboard.read()];

                case 2:
                  clipboardItems = _a.sent();
                  type = clipboardItems[0].types[0];
                  return [4
                  /*yield*/
                  , clipboardItems[0].getType(type)];

                case 3:
                  clipboardBlob = _a.sent();
                  return [4
                  /*yield*/
                  , this._getBlobData(clipboardBlob, type)];

                case 4:
                  data = _a.sent();
                  return [2
                  /*return*/
                  , Promise.resolve({
                    value: data,
                    type: type
                  })];

                case 5:
                  err_2 = _a.sent();
                  return [2
                  /*return*/
                  , this.readText()];

                case 6:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        };

        ClipboardPluginWeb.prototype.readText = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var text;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  return [4
                  /*yield*/
                  , navigator.clipboard.readText()];

                case 1:
                  text = _a.sent();
                  return [2
                  /*return*/
                  , Promise.resolve({
                    value: text,
                    type: 'text/plain'
                  })];
              }
            });
          });
        };

        ClipboardPluginWeb.prototype._getBlobData = function (clipboardBlob, type) {
          return new Promise(function (resolve, reject) {
            var reader = new FileReader();

            if (type.includes('image')) {
              reader.readAsDataURL(clipboardBlob);
            } else {
              reader.readAsText(clipboardBlob);
            }

            reader.onloadend = function () {
              var r = reader.result;
              resolve(r);
            };

            reader.onerror = function (e) {
              reject(e);
            };
          });
        };

        return ClipboardPluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var Clipboard = new ClipboardPluginWeb(); //# sourceMappingURL=clipboard.js.map

      /***/
    },

    /***/
    "I2A1":
    /*!**************************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js ***!
      \**************************************************************************/

    /*! exports provided: CameraSource, CameraDirection, CameraResultType, FilesystemDirectory, FilesystemEncoding, HapticsImpactStyle, HapticsNotificationType, KeyboardStyle, KeyboardResize, ActionSheetOptionStyle, PermissionType, PhotosAlbumType, StatusBarStyle, StatusBarAnimation */

    /***/
    function I2A1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CameraSource", function () {
        return CameraSource;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CameraDirection", function () {
        return CameraDirection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CameraResultType", function () {
        return CameraResultType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilesystemDirectory", function () {
        return FilesystemDirectory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilesystemEncoding", function () {
        return FilesystemEncoding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HapticsImpactStyle", function () {
        return HapticsImpactStyle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HapticsNotificationType", function () {
        return HapticsNotificationType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KeyboardStyle", function () {
        return KeyboardStyle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KeyboardResize", function () {
        return KeyboardResize;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActionSheetOptionStyle", function () {
        return ActionSheetOptionStyle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermissionType", function () {
        return PermissionType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhotosAlbumType", function () {
        return PhotosAlbumType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatusBarStyle", function () {
        return StatusBarStyle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatusBarAnimation", function () {
        return StatusBarAnimation;
      });

      var CameraSource;

      (function (CameraSource) {
        CameraSource["Prompt"] = "PROMPT";
        CameraSource["Camera"] = "CAMERA";
        CameraSource["Photos"] = "PHOTOS";
      })(CameraSource || (CameraSource = {}));

      var CameraDirection;

      (function (CameraDirection) {
        CameraDirection["Rear"] = "REAR";
        CameraDirection["Front"] = "FRONT";
      })(CameraDirection || (CameraDirection = {}));

      var CameraResultType;

      (function (CameraResultType) {
        CameraResultType["Uri"] = "uri";
        CameraResultType["Base64"] = "base64";
        CameraResultType["DataUrl"] = "dataUrl";
      })(CameraResultType || (CameraResultType = {}));

      var FilesystemDirectory;

      (function (FilesystemDirectory) {
        /**
         * The Documents directory
         * On iOS it's the app's documents directory.
         * Use this directory to store user-generated content.
         * On Android it's the Public Documents folder, so it's accessible from other apps.
         * It's not accesible on Android 10 unless the app enables legacy External Storage
         * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
         * in the `AndroidManifest.xml`
         */
        FilesystemDirectory["Documents"] = "DOCUMENTS";
        /**
         * The Data directory
         * On iOS it will use the Documents directory
         * On Android it's the directory holding application files.
         * Files will be deleted when the application is uninstalled.
         */

        FilesystemDirectory["Data"] = "DATA";
        /**
         * The Cache directory
         * Can be deleted in cases of low memory, so use this directory to write app-specific files
         * that your app can re-create easily.
         */

        FilesystemDirectory["Cache"] = "CACHE";
        /**
         * The external directory
         * On iOS it will use the Documents directory
         * On Android it's the directory on the primary shared/external
         * storage device where the application can place persistent files it owns.
         * These files are internal to the applications, and not typically visible
         * to the user as media.
         * Files will be deleted when the application is uninstalled.
         */

        FilesystemDirectory["External"] = "EXTERNAL";
        /**
         * The external storage directory
         * On iOS it will use the Documents directory
         * On Android it's the primary shared/external storage directory.
         * It's not accesible on Android 10 unless the app enables legacy External Storage
         * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
         * in the `AndroidManifest.xml`
         */

        FilesystemDirectory["ExternalStorage"] = "EXTERNAL_STORAGE";
      })(FilesystemDirectory || (FilesystemDirectory = {}));

      var FilesystemEncoding;

      (function (FilesystemEncoding) {
        FilesystemEncoding["UTF8"] = "utf8";
        FilesystemEncoding["ASCII"] = "ascii";
        FilesystemEncoding["UTF16"] = "utf16";
      })(FilesystemEncoding || (FilesystemEncoding = {}));

      var HapticsImpactStyle;

      (function (HapticsImpactStyle) {
        HapticsImpactStyle["Heavy"] = "HEAVY";
        HapticsImpactStyle["Medium"] = "MEDIUM";
        HapticsImpactStyle["Light"] = "LIGHT";
      })(HapticsImpactStyle || (HapticsImpactStyle = {}));

      var HapticsNotificationType;

      (function (HapticsNotificationType) {
        HapticsNotificationType["SUCCESS"] = "SUCCESS";
        HapticsNotificationType["WARNING"] = "WARNING";
        HapticsNotificationType["ERROR"] = "ERROR";
      })(HapticsNotificationType || (HapticsNotificationType = {}));

      var KeyboardStyle;

      (function (KeyboardStyle) {
        KeyboardStyle["Dark"] = "DARK";
        KeyboardStyle["Light"] = "LIGHT";
      })(KeyboardStyle || (KeyboardStyle = {}));

      var KeyboardResize;

      (function (KeyboardResize) {
        KeyboardResize["Body"] = "body";
        KeyboardResize["Ionic"] = "ionic";
        KeyboardResize["Native"] = "native";
        KeyboardResize["None"] = "none";
      })(KeyboardResize || (KeyboardResize = {}));

      var ActionSheetOptionStyle;

      (function (ActionSheetOptionStyle) {
        ActionSheetOptionStyle["Default"] = "DEFAULT";
        ActionSheetOptionStyle["Destructive"] = "DESTRUCTIVE";
        ActionSheetOptionStyle["Cancel"] = "CANCEL";
      })(ActionSheetOptionStyle || (ActionSheetOptionStyle = {})); //


      var PermissionType;

      (function (PermissionType) {
        PermissionType["Camera"] = "camera";
        PermissionType["Photos"] = "photos";
        PermissionType["Geolocation"] = "geolocation";
        PermissionType["Notifications"] = "notifications";
        PermissionType["ClipboardRead"] = "clipboard-read";
        PermissionType["ClipboardWrite"] = "clipboard-write";
        PermissionType["Microphone"] = "microphone";
      })(PermissionType || (PermissionType = {}));

      var PhotosAlbumType;

      (function (PhotosAlbumType) {
        /**
         * Album is a "smart" album (such as Favorites or Recently Added)
         */
        PhotosAlbumType["Smart"] = "smart";
        /**
         * Album is a cloud-shared album
         */

        PhotosAlbumType["Shared"] = "shared";
        /**
         * Album is a user-created album
         */

        PhotosAlbumType["User"] = "user";
      })(PhotosAlbumType || (PhotosAlbumType = {}));

      var StatusBarStyle;

      (function (StatusBarStyle) {
        /**
         * Light text for dark backgrounds.
         */
        StatusBarStyle["Dark"] = "DARK";
        /**
         * Dark text for light backgrounds.
         */

        StatusBarStyle["Light"] = "LIGHT";
      })(StatusBarStyle || (StatusBarStyle = {}));

      var StatusBarAnimation;

      (function (StatusBarAnimation) {
        /**
         * No animation during show/hide.
         */
        StatusBarAnimation["None"] = "NONE";
        /**
         * Slide animation during show/hide.
         */

        StatusBarAnimation["Slide"] = "SLIDE";
        /**
         * Fade animation during show/hide.
         */

        StatusBarAnimation["Fade"] = "FADE";
      })(StatusBarAnimation || (StatusBarAnimation = {})); //# sourceMappingURL=core-plugin-definitions.js.map

      /***/

    },

    /***/
    "LLrc":
    /*!**************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web-runtime.js ***!
      \**************************************************************/

    /*! exports provided: CapacitorWeb */

    /***/
    function LLrc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CapacitorWeb", function () {
        return CapacitorWeb;
      });

      var CapacitorWeb =
      /** @class */
      function () {
        function CapacitorWeb() {
          var _this = this;

          this.platform = 'web';
          this.isNative = false; // Need to assign here to avoid having to define every plugin but still
          // get the typed benefits of the provided plugins in PluginRegistry

          this.Plugins = {}; // Gracefully degrade in non-Proxy supporting engines, e.g. IE11. This
          // effectively means that trying to access an unavailable plugin will
          // locally throw, but this is still better than throwing a syntax error.

          if (typeof Proxy !== 'undefined') {
            // Build a proxy for the Plugins object that returns the "Noop Plugin"
            // if a plugin isn't available
            this.Plugins = new Proxy(this.Plugins, {
              get: function get(target, prop) {
                if (typeof target[prop] === 'undefined') {
                  var thisRef_1 = _this;
                  return new Proxy({}, {
                    get: function get(_target, _prop) {
                      if (typeof _target[_prop] === 'undefined') {
                        return thisRef_1.pluginMethodNoop.bind(thisRef_1, _target, _prop, prop);
                      } else {
                        return _target[_prop];
                      }
                    }
                  });
                } else {
                  return target[prop];
                }
              }
            });
          }
        }

        CapacitorWeb.prototype.pluginMethodNoop = function (_target, _prop, pluginName) {
          return Promise.reject(pluginName + " does not have web implementation.");
        };

        CapacitorWeb.prototype.getPlatform = function () {
          return this.platform;
        };

        CapacitorWeb.prototype.isPluginAvailable = function (name) {
          return this.Plugins.hasOwnProperty(name);
        };

        CapacitorWeb.prototype.convertFileSrc = function (filePath) {
          return filePath;
        };

        CapacitorWeb.prototype.handleError = function (e) {
          console.error(e);
        };

        return CapacitorWeb;
      }(); //# sourceMappingURL=web-runtime.js.map

      /***/

    },

    /***/
    "LZKj":
    /*!**************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/network.js ***!
      \**************************************************************/

    /*! exports provided: NetworkPluginWeb, Network */

    /***/
    function LZKj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NetworkPluginWeb", function () {
        return NetworkPluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Network", function () {
        return Network;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "O1h7");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "6Fjf");

      var NetworkPluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NetworkPluginWeb, _super);

        function NetworkPluginWeb() {
          var _this = _super.call(this, {
            name: 'Network',
            platforms: ['web']
          }) || this;

          _this.listenerFunction = null;
          return _this;
        }

        NetworkPluginWeb.prototype.getStatus = function () {
          return new Promise(function (resolve, reject) {
            if (!window.navigator) {
              reject('Network info not available');
              return;
            }

            var connected = window.navigator.onLine;
            var connection = window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection;
            var connectionType = connection ? connection.type || connection.effectiveType : 'wifi';
            resolve({
              connected: connected,
              connectionType: connected ? connectionType : 'none'
            });
          });
        };

        NetworkPluginWeb.prototype.addListener = function (eventName, listenerFunc) {
          var thisRef = this;
          var connection = window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection;
          var connectionType = connection ? connection.type || connection.effectiveType : 'wifi';
          var onlineBindFunc = listenerFunc.bind(thisRef, {
            connected: true,
            connectionType: connectionType
          });
          var offlineBindFunc = listenerFunc.bind(thisRef, {
            connected: false,
            connectionType: 'none'
          });

          if (eventName.localeCompare('networkStatusChange') === 0) {
            window.addEventListener('online', onlineBindFunc);
            window.addEventListener('offline', offlineBindFunc);
            return {
              remove: function remove() {
                window.removeEventListener('online', onlineBindFunc);
                window.removeEventListener('offline', offlineBindFunc);
              }
            };
          }
        };

        return NetworkPluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var Network = new NetworkPluginWeb(); //# sourceMappingURL=network.js.map

      /***/
    },

    /***/
    "Of+G":
    /*!*********************************************!*\
      !*** ./src/app/rute/rute-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: RutePageRoutingModule */

    /***/
    function OfG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RutePageRoutingModule", function () {
        return RutePageRoutingModule;
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


      var _rute_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./rute.page */
      "oH3S");

      var routes = [{
        path: '',
        component: _rute_page__WEBPACK_IMPORTED_MODULE_3__["RutePage"]
      }];

      var RutePageRoutingModule = function RutePageRoutingModule() {
        _classCallCheck(this, RutePageRoutingModule);
      };

      RutePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RutePageRoutingModule);
      /***/
    },

    /***/
    "QYDU":
    /*!**************************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/local-notifications.js ***!
      \**************************************************************************/

    /*! exports provided: LocalNotificationsPluginWeb, LocalNotifications */

    /***/
    function QYDU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocalNotificationsPluginWeb", function () {
        return LocalNotificationsPluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocalNotifications", function () {
        return LocalNotifications;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "O1h7");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "6Fjf");

      var LocalNotificationsPluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LocalNotificationsPluginWeb, _super);

        function LocalNotificationsPluginWeb() {
          var _this = _super.call(this, {
            name: 'LocalNotifications',
            platforms: ['web']
          }) || this;

          _this.pending = [];
          return _this;
        }

        LocalNotificationsPluginWeb.prototype.createChannel = function (channel) {
          throw new Error('Feature not available in the browser. ' + channel.id);
        };

        LocalNotificationsPluginWeb.prototype.deleteChannel = function (channel) {
          throw new Error('Feature not available in the browser. ' + channel.id);
        };

        LocalNotificationsPluginWeb.prototype.listChannels = function () {
          throw new Error('Feature not available in the browser');
        };

        LocalNotificationsPluginWeb.prototype.sendPending = function () {
          var _this = this;

          var toRemove = [];
          var now = +new Date();
          this.pending.forEach(function (localNotification) {
            if (localNotification.schedule && localNotification.schedule.at) {
              if (+localNotification.schedule.at <= now) {
                _this.buildNotification(localNotification);

                toRemove.push(localNotification);
              }
            }
          });
          console.log('Sent pending, removing', toRemove);
          this.pending = this.pending.filter(function (localNotification) {
            return !toRemove.find(function (ln) {
              return ln === localNotification;
            });
          });
        };

        LocalNotificationsPluginWeb.prototype.sendNotification = function (localNotification) {
          var _this = this;

          var l = localNotification;

          if (localNotification.schedule && localNotification.schedule.at) {
            var diff = +localNotification.schedule.at - +new Date();
            this.pending.push(l);
            setTimeout(function () {
              _this.sendPending();
            }, diff);
            return;
          }

          this.buildNotification(localNotification);
        };

        LocalNotificationsPluginWeb.prototype.buildNotification = function (localNotification) {
          var l = localNotification;
          return new Notification(l.title, {
            body: l.body
          });
        };

        LocalNotificationsPluginWeb.prototype.schedule = function (options) {
          var _this = this;

          var notifications = [];
          options.notifications.forEach(function (notification) {
            notifications.push(_this.sendNotification(notification));
          });
          return Promise.resolve({
            notifications: options.notifications.map(function (notification) {
              return {
                id: '' + notification.id
              };
            })
          });
        };

        LocalNotificationsPluginWeb.prototype.getPending = function () {
          return Promise.resolve({
            notifications: this.pending.map(function (localNotification) {
              return {
                id: '' + localNotification.id
              };
            })
          });
        };

        LocalNotificationsPluginWeb.prototype.registerActionTypes = function (_options) {
          throw new Error('Method not implemented.');
        };

        LocalNotificationsPluginWeb.prototype.cancel = function (pending) {
          console.log('Cancel these', pending);
          this.pending = this.pending.filter(function (localNotification) {
            return !pending.notifications.find(function (ln) {
              return ln.id === '' + localNotification.id;
            });
          });
          return Promise.resolve();
        };

        LocalNotificationsPluginWeb.prototype.areEnabled = function () {
          return Promise.resolve({
            value: Notification.permission === 'granted'
          });
        };

        LocalNotificationsPluginWeb.prototype.requestPermission = function () {
          return new Promise(function (resolve) {
            Notification.requestPermission(function (result) {
              var granted = true;

              if (result === 'denied' || result === 'default') {
                granted = false;
              }

              resolve({
                granted: granted
              });
            });
          });
        };

        LocalNotificationsPluginWeb.prototype.requestPermissions = function () {
          return new Promise(function (resolve, reject) {
            Notification.requestPermission(function (result) {
              if (result === 'denied' || result === 'default') {
                reject(result);
                return;
              }

              resolve({
                results: [result]
              });
            });
          });
        };

        return LocalNotificationsPluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var LocalNotifications = new LocalNotificationsPluginWeb(); //# sourceMappingURL=local-notifications.js.map

      /***/
    },

    /***/
    "U+rf":
    /*!*******************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/util.js ***!
      \*******************************************************/

    /*! exports provided: extend, uuid4 */

    /***/
    function URf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "extend", function () {
        return extend;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "uuid4", function () {
        return uuid4;
      });

      var extend = function extend(target) {
        var objs = [];

        for (var _i = 1; _i < arguments.length; _i++) {
          objs[_i - 1] = arguments[_i];
        }

        objs.forEach(function (o) {
          if (o && typeof o === 'object') {
            for (var k in o) {
              if (o.hasOwnProperty(k)) {
                target[k] = o[k];
              }
            }
          }
        });
        return target;
      };

      var uuid4 = function uuid4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          var r = Math.random() * 16 | 0,
              v = c === 'x' ? r : r & 0x3 | 0x8;
          return v.toString(16);
        });
      }; //# sourceMappingURL=util.js.map

      /***/

    },

    /***/
    "U/5e":
    /*!*************************************!*\
      !*** ./src/app/rute/rute.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function U5e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#viewDiv {\n  padding: 0;\n  margin: 0;\n  height: 50%;\n  width: 100%;\n}\n\n.esri-view-width-xsmall .esri-expand--auto .esri-expand__container--expanded {\n  height: 34%;\n  background: #001434;\n}\n\n.esri-widget--button {\n  background-color: #f9b410 !important;\n  color: #001434 !important;\n}\n\n.esri-view .esri-directions {\n  position: fixed;\n  right: 15px;\n}\n\n.esri-view .esri-component.esri-attribution {\n  position: fixed;\n}\n\n.esri-search__suggestions-list > li {\n  padding: 1em;\n}\n\n.ui.grid {\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcnV0ZS9ydXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUFBO0VBQ0Usb0NBQUE7RUFDQSx5QkFBQTtBQUdGOztBQURBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUFJRjs7QUFEQTtFQUNFLGVBQUE7QUFJRjs7QUFGQTtFQUNFLFlBQUE7QUFLRjs7QUFIQTtFQUNFLFlBQUE7QUFNRiIsImZpbGUiOiJzcmMvYXBwL3J1dGUvcnV0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdmlld0RpdiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmVzcmktdmlldy13aWR0aC14c21hbGwgLmVzcmktZXhwYW5kLS1hdXRvIC5lc3JpLWV4cGFuZF9fY29udGFpbmVyLS1leHBhbmRlZCB7XHJcbiAgaGVpZ2h0OiAzNCU7XHJcbiAgYmFja2dyb3VuZDogIzAwMTQzNDtcclxufVxyXG4uZXNyaS13aWRnZXQtLWJ1dHRvbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjliNDEwICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICMwMDE0MzQgIWltcG9ydGFudDtcclxufVxyXG4uZXNyaS12aWV3IC5lc3JpLWRpcmVjdGlvbnMge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMTVweDtcclxufVxyXG5cclxuLmVzcmktdmlldyAuZXNyaS1jb21wb25lbnQuZXNyaS1hdHRyaWJ1dGlvbiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcbi5lc3JpLXNlYXJjaF9fc3VnZ2VzdGlvbnMtbGlzdCA+IGxpe1xyXG4gIHBhZGRpbmc6IDFlbTtcclxufVxyXG4udWkuZ3JpZHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "X33G":
    /*!*************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/motion.js ***!
      \*************************************************************/

    /*! exports provided: MotionPluginWeb, Motion */

    /***/
    function X33G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MotionPluginWeb", function () {
        return MotionPluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Motion", function () {
        return Motion;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "O1h7");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "6Fjf");

      var MotionPluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MotionPluginWeb, _super);

        function MotionPluginWeb() {
          var _this = _super.call(this, {
            name: 'Motion'
          }) || this;

          _this.registerWindowListener('devicemotion', 'accel');

          _this.registerWindowListener('deviceorientation', 'orientation');

          return _this;
        }

        return MotionPluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var Motion = new MotionPluginWeb(); //# sourceMappingURL=motion.js.map

      /***/
    },

    /***/
    "ZO70":
    /*!************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/share.js ***!
      \************************************************************/

    /*! exports provided: SharePluginWeb, Share */

    /***/
    function ZO70(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharePluginWeb", function () {
        return SharePluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Share", function () {
        return Share;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "O1h7");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "6Fjf");

      var SharePluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SharePluginWeb, _super);

        function SharePluginWeb() {
          return _super.call(this, {
            name: 'Share',
            platforms: ['web']
          }) || this;
        }

        SharePluginWeb.prototype.share = function (options) {
          if (!navigator.share) {
            return Promise.reject('Web Share API not available');
          }

          return navigator.share({
            title: options.title,
            text: options.text,
            url: options.url
          });
        };

        return SharePluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var Share = new SharePluginWeb(); //# sourceMappingURL=share.js.map

      /***/
    },

    /***/
    "fme8":
    /*!******************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/geolocation.js ***!
      \******************************************************************/

    /*! exports provided: GeolocationPluginWeb, Geolocation */

    /***/
    function fme8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeolocationPluginWeb", function () {
        return GeolocationPluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Geolocation", function () {
        return Geolocation;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "O1h7");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "6Fjf");
      /* harmony import */


      var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../util */
      "U+rf");

      var GeolocationPluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GeolocationPluginWeb, _super);

        function GeolocationPluginWeb() {
          return _super.call(this, {
            name: 'Geolocation',
            platforms: ['web']
          }) || this;
        }

        GeolocationPluginWeb.prototype.getCurrentPosition = function (options) {
          var _this = this;

          return new Promise(function (resolve, reject) {
            return _this.requestPermissions().then(function (_result) {
              window.navigator.geolocation.getCurrentPosition(function (pos) {
                resolve(pos);
              }, function (err) {
                reject(err);
              }, Object(_util__WEBPACK_IMPORTED_MODULE_2__["extend"])({
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
              }, options));
            });
          });
        };

        GeolocationPluginWeb.prototype.watchPosition = function (options, callback) {
          var id = window.navigator.geolocation.watchPosition(function (pos) {
            callback(pos);
          }, function (err) {
            callback(null, err);
          }, Object(_util__WEBPACK_IMPORTED_MODULE_2__["extend"])({
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
          }, options));
          return "" + id;
        };

        GeolocationPluginWeb.prototype.clearWatch = function (options) {
          window.navigator.geolocation.clearWatch(parseInt(options.id, 10));
          return Promise.resolve();
        };

        return GeolocationPluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var Geolocation = new GeolocationPluginWeb(); //# sourceMappingURL=geolocation.js.map

      /***/
    },

    /***/
    "fnMB":
    /*!**********************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/app.js ***!
      \**********************************************************/

    /*! exports provided: AppPluginWeb, App */

    /***/
    function fnMB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppPluginWeb", function () {
        return AppPluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "App", function () {
        return App;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "O1h7");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "6Fjf");

      var AppPluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AppPluginWeb, _super);

        function AppPluginWeb() {
          var _this = _super.call(this, {
            name: 'App',
            platforms: ['web']
          }) || this;

          if (typeof document !== 'undefined') {
            document.addEventListener('visibilitychange', _this.handleVisibilityChange.bind(_this), false);
          }

          return _this;
        }

        AppPluginWeb.prototype.exitApp = function () {
          throw new Error('Method not implemented.');
        };

        AppPluginWeb.prototype.canOpenUrl = function (_options) {
          return Promise.resolve({
            value: true
          });
        };

        AppPluginWeb.prototype.openUrl = function (_options) {
          return Promise.resolve({
            completed: true
          });
        };

        AppPluginWeb.prototype.getLaunchUrl = function () {
          return Promise.resolve({
            url: ''
          });
        };

        AppPluginWeb.prototype.getState = function () {
          return Promise.resolve({
            isActive: document.hidden !== true
          });
        };

        AppPluginWeb.prototype.handleVisibilityChange = function () {
          var data = {
            isActive: document.hidden !== true
          };
          this.notifyListeners('appStateChange', data);
        };

        return AppPluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var App = new AppPluginWeb(); //# sourceMappingURL=app.js.map

      /***/
    },

    /***/
    "gcOT":
    /*!********************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/index.js ***!
      \********************************************************/

    /*! exports provided: CameraSource, CameraDirection, CameraResultType, FilesystemDirectory, FilesystemEncoding, HapticsImpactStyle, HapticsNotificationType, KeyboardStyle, KeyboardResize, ActionSheetOptionStyle, PermissionType, PhotosAlbumType, StatusBarStyle, StatusBarAnimation, Capacitor, Plugins, AccessibilityPluginWeb, Accessibility, AppPluginWeb, App, BrowserPluginWeb, Browser, CameraPluginWeb, Camera, ClipboardPluginWeb, Clipboard, FilesystemPluginWeb, Filesystem, GeolocationPluginWeb, Geolocation, DevicePluginWeb, Device, LocalNotificationsPluginWeb, LocalNotifications, SharePluginWeb, Share, ModalsPluginWeb, Modals, MotionPluginWeb, Motion, NetworkPluginWeb, Network, PermissionsPluginWeb, Permissions, SplashScreenPluginWeb, SplashScreen, StoragePluginWeb, Storage, ToastPluginWeb, Toast, registerWebPlugin, WebPluginRegistry, WebPlugins, WebPlugin, mergeWebPlugins, mergeWebPlugin */

    /***/
    function gcOT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./core-plugin-definitions */
      "I2A1");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CameraSource", function () {
        return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["CameraSource"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CameraDirection", function () {
        return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["CameraDirection"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CameraResultType", function () {
        return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["CameraResultType"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FilesystemDirectory", function () {
        return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["FilesystemDirectory"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FilesystemEncoding", function () {
        return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["FilesystemEncoding"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HapticsImpactStyle", function () {
        return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["HapticsImpactStyle"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HapticsNotificationType", function () {
        return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["HapticsNotificationType"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "KeyboardStyle", function () {
        return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["KeyboardStyle"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "KeyboardResize", function () {
        return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["KeyboardResize"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ActionSheetOptionStyle", function () {
        return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["ActionSheetOptionStyle"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PermissionType", function () {
        return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["PermissionType"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PhotosAlbumType", function () {
        return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["PhotosAlbumType"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StatusBarStyle", function () {
        return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["StatusBarStyle"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StatusBarAnimation", function () {
        return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["StatusBarAnimation"];
      });
      /* harmony import */


      var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./global */
      "91C0");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Capacitor", function () {
        return _global__WEBPACK_IMPORTED_MODULE_1__["Capacitor"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Plugins", function () {
        return _global__WEBPACK_IMPORTED_MODULE_1__["Plugins"];
      });
      /* harmony import */


      var _web_plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./web-plugins */
      "0fR0");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AccessibilityPluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["AccessibilityPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Accessibility", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Accessibility"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AppPluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["AppPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "App", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["App"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BrowserPluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["BrowserPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Browser", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Browser"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CameraPluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["CameraPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Camera", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Camera"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ClipboardPluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["ClipboardPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Clipboard", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Clipboard"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FilesystemPluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["FilesystemPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Filesystem", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Filesystem"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "GeolocationPluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["GeolocationPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Geolocation", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Geolocation"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DevicePluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["DevicePluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Device", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Device"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LocalNotificationsPluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["LocalNotificationsPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LocalNotifications", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["LocalNotifications"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SharePluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["SharePluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Share", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Share"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ModalsPluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["ModalsPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Modals", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Modals"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MotionPluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["MotionPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Motion", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Motion"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NetworkPluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["NetworkPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Network", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Network"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PermissionsPluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["PermissionsPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Permissions", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Permissions"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SplashScreenPluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["SplashScreenPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SplashScreen", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StoragePluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["StoragePluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Storage", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Storage"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ToastPluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["ToastPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Toast", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Toast"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "registerWebPlugin", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["registerWebPlugin"];
      });
      /* harmony import */


      var _web_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./web/index */
      "6Fjf");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WebPluginRegistry", function () {
        return _web_index__WEBPACK_IMPORTED_MODULE_3__["WebPluginRegistry"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WebPlugins", function () {
        return _web_index__WEBPACK_IMPORTED_MODULE_3__["WebPlugins"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WebPlugin", function () {
        return _web_index__WEBPACK_IMPORTED_MODULE_3__["WebPlugin"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "mergeWebPlugins", function () {
        return _web_index__WEBPACK_IMPORTED_MODULE_3__["mergeWebPlugins"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "mergeWebPlugin", function () {
        return _web_index__WEBPACK_IMPORTED_MODULE_3__["mergeWebPlugin"];
      }); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "ghO4":
    /*!*************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/device.js ***!
      \*************************************************************/

    /*! exports provided: DevicePluginWeb, Device */

    /***/
    function ghO4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DevicePluginWeb", function () {
        return DevicePluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Device", function () {
        return Device;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "O1h7");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "6Fjf");
      /* harmony import */


      var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../util */
      "U+rf");

      var DevicePluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DevicePluginWeb, _super);

        function DevicePluginWeb() {
          return _super.call(this, {
            name: 'Device',
            platforms: ['web']
          }) || this;
        }

        DevicePluginWeb.prototype.getInfo = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var ua, uaFields;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              ua = navigator.userAgent;
              uaFields = this.parseUa(ua);
              return [2
              /*return*/
              , Promise.resolve({
                model: uaFields.model,
                platform: 'web',
                appVersion: '',
                appBuild: '',
                appId: '',
                appName: '',
                operatingSystem: uaFields.operatingSystem,
                osVersion: uaFields.osVersion,
                manufacturer: navigator.vendor,
                isVirtual: false,
                uuid: this.getUid()
              })];
            });
          });
        };

        DevicePluginWeb.prototype.getBatteryInfo = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var battery, e_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  battery = {};
                  _a.label = 1;

                case 1:
                  _a.trys.push([1, 3,, 4]);

                  return [4
                  /*yield*/
                  , navigator.getBattery()];

                case 2:
                  battery = _a.sent();
                  return [3
                  /*break*/
                  , 4];

                case 3:
                  e_1 = _a.sent();
                  return [3
                  /*break*/
                  , 4];

                case 4:
                  return [2
                  /*return*/
                  , Promise.resolve({
                    batteryLevel: battery.level,
                    isCharging: battery.charging
                  })];
              }
            });
          });
        };

        DevicePluginWeb.prototype.getLanguageCode = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              return [2
              /*return*/
              , {
                value: navigator.language
              }];
            });
          });
        };

        DevicePluginWeb.prototype.parseUa = function (_ua) {
          var uaFields = {};
          var start = _ua.indexOf('(') + 1;

          var end = _ua.indexOf(') AppleWebKit');

          if (_ua.indexOf(') Gecko') !== -1) {
            end = _ua.indexOf(') Gecko');
          }

          var fields = _ua.substring(start, end);

          if (_ua.indexOf('Android') !== -1) {
            uaFields.model = fields.replace('; wv', '').split('; ').pop().split(' Build')[0];
            uaFields.osVersion = fields.split('; ')[1];
          } else {
            uaFields.model = fields.split('; ')[0];

            if (navigator.oscpu) {
              uaFields.osVersion = navigator.oscpu;
            } else {
              if (_ua.indexOf('Windows') !== -1) {
                uaFields.osVersion = fields;
              } else {
                var lastParts = fields.split('; ').pop().replace(' like Mac OS X', '').split(' ');
                uaFields.osVersion = lastParts[lastParts.length - 1].replace(/_/g, '.');
              }
            }
          }

          if (/android/i.test(_ua)) {
            uaFields.operatingSystem = 'android';
          } else if (/iPad|iPhone|iPod/.test(_ua) && !window.MSStream) {
            uaFields.operatingSystem = 'ios';
          } else if (/Win/.test(_ua)) {
            uaFields.operatingSystem = 'windows';
          } else if (/Mac/i.test(_ua)) {
            uaFields.operatingSystem = 'mac';
          } else {
            uaFields.operatingSystem = 'unknown';
          }

          return uaFields;
        };

        DevicePluginWeb.prototype.getUid = function () {
          var uid = window.localStorage.getItem('_capuid');

          if (uid) {
            return uid;
          }

          uid = Object(_util__WEBPACK_IMPORTED_MODULE_2__["uuid4"])();
          window.localStorage.setItem('_capuid', uid);
          return uid;
        };

        return DevicePluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var Device = new DevicePluginWeb(); //# sourceMappingURL=device.js.map

      /***/
    },

    /***/
    "nfLy":
    /*!**************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/storage.js ***!
      \**************************************************************/

    /*! exports provided: StoragePluginWeb, Storage */

    /***/
    function nfLy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StoragePluginWeb", function () {
        return StoragePluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Storage", function () {
        return Storage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "O1h7");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "6Fjf");

      var StoragePluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StoragePluginWeb, _super);

        function StoragePluginWeb() {
          var _this = _super.call(this, {
            name: 'Storage',
            platforms: ['web']
          }) || this;

          _this.KEY_PREFIX = '_cap_';
          return _this;
        }

        StoragePluginWeb.prototype.get = function (options) {
          var _this = this;

          return new Promise(function (resolve, _reject) {
            resolve({
              value: window.localStorage.getItem(_this.makeKey(options.key))
            });
          });
        };

        StoragePluginWeb.prototype.set = function (options) {
          var _this = this;

          return new Promise(function (resolve, _reject) {
            window.localStorage.setItem(_this.makeKey(options.key), options.value);
            resolve();
          });
        };

        StoragePluginWeb.prototype.remove = function (options) {
          var _this = this;

          return new Promise(function (resolve, _reject) {
            window.localStorage.removeItem(_this.makeKey(options.key));
            resolve();
          });
        };

        StoragePluginWeb.prototype.keys = function () {
          var _this = this;

          return new Promise(function (resolve, _reject) {
            resolve({
              keys: Object.keys(localStorage).filter(function (k) {
                return _this.isKey(k);
              }).map(function (k) {
                return _this.getKey(k);
              })
            });
          });
        };

        StoragePluginWeb.prototype.clear = function () {
          var _this = this;

          return new Promise(function (resolve, _reject) {
            Object.keys(localStorage).filter(function (k) {
              return _this.isKey(k);
            }).forEach(function (k) {
              return window.localStorage.removeItem(k);
            });
            resolve();
          });
        };

        StoragePluginWeb.prototype.makeKey = function (key) {
          return this.KEY_PREFIX + key;
        };

        StoragePluginWeb.prototype.isKey = function (key) {
          return key.indexOf(this.KEY_PREFIX) === 0;
        };

        StoragePluginWeb.prototype.getKey = function (key) {
          return key.substr(this.KEY_PREFIX.length);
        };

        return StoragePluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var Storage = new StoragePluginWeb(); //# sourceMappingURL=storage.js.map

      /***/
    },

    /***/
    "oH3S":
    /*!***********************************!*\
      !*** ./src/app/rute/rute.page.ts ***!
      \***********************************/

    /*! exports provided: RutePage */

    /***/
    function oH3S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RutePage", function () {
        return RutePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_rute_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./rute.page.html */
      "rGEy");
      /* harmony import */


      var _rute_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./rute.page.scss */
      "U/5e");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _services_api_publibike_marca_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/api-publibike-marca.service */
      "Q5Ll");
      /* harmony import */


      var esri_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! esri-loader */
      "r6rm");
      /* harmony import */


      var esri_loader__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(esri_loader__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/storage */
      "xgBC");
      /* harmony import */


      var _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/background-mode/ngx */
      "AcVp");

      var Geolocation = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"].Geolocation;

      var RutePage = /*#__PURE__*/function () {
        function RutePage(apiService, storage, loadingCtrl, backgroundMode) {
          _classCallCheck(this, RutePage);

          this.apiService = apiService;
          this.storage = storage;
          this.loadingCtrl = loadingCtrl;
          this.backgroundMode = backgroundMode; //Variables ArcGIS

          this._zoom = 10;
          this._center = [-74.090923, 4.694939];
          this._basemap = "streets-vector";
          this._loaded = false;
          this._view = null;
          this._locator = null;
          this._locate = null;
          this._search = null;
          this._track = null;
          this._pointGC = null;
          this._draw = null;
          this._distance = null;
          this.currentDirection = ""; //Variables del cronometro

          this.horas = 0;
          this.centesimas = 0;
          this.minutos = 59;
          this.segundos = 0;
          this._centesimas = '00';
          this._minutos = '00';
          this._segundos = '00';
          this._horas = '00';
          this.isRun = false;
          this.estado = "INICIAR RECORRIDO"; //Array recorrido con las coordenadas

          this.recorrido = []; //usuario

          this.user = {
            nombre: "",
            apellido: "",
            ganancia_total: 0,
            km_total: 0,
            cal_total: 0,
            co2_total: 0,
            peso: 0,
            campana_actual: {
              pago_km: 2000
            }
          }; //objeto a enviar

          this.ruteData = {};
          this.km = 0.0;
          this.ingresos = 0;
          this.cal = 0;
          this.co2 = 0;
        } // private _geometryEngine: esri.geometryEngine;


        _createClass(RutePage, [{
          key: "initializedMap",
          value: function initializedMap() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var getRoute, _yield$Object, _yield$Object2, _Map, MapView, Graphic, RouteTask, RouteParameters, FeatureSet, Directions, Locate, Track, Locator, LocatorSearchSource, Expand, Point, Draw, geometryEngine, FeatureLayer, DistanceMeasurement2DViewModel, map, parkingLayer, routeTask, directions, bgExpand;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.prev = 0;

                      getRoute = function getRoute() {
                        // Setup the route parameters
                        var routeParams = new RouteParameters({
                          stops: new FeatureSet({
                            features: this._view.graphics.toArray()
                          })
                        }); // Get the route

                        routeTask.solve(routeParams).then(function (data) {
                          data.routeResults.forEach(function (result) {
                            result.route.symbol = {
                              type: "simple-line",
                              color: [5, 150, 255],
                              width: 3
                            };

                            this._view.graphics.add(result.route);
                          });
                        });
                      };

                      _context.next = 4;
                      return Object(esri_loader__WEBPACK_IMPORTED_MODULE_6__["loadModules"])(['esri/Map', 'esri/views/MapView', "esri/Graphic", "esri/tasks/RouteTask", "esri/tasks/support/RouteParameters", "esri/tasks/support/FeatureSet", "esri/widgets/Directions", "esri/widgets/Locate", "esri/widgets/Track", "esri/tasks/Locator", "esri/widgets/Search/LocatorSearchSource", "esri/widgets/Expand", "esri/geometry/Point", "esri/views/draw/Draw", "esri/geometry/geometryEngine", "esri/layers/FeatureLayer", "esri/widgets/DistanceMeasurement2D/DistanceMeasurement2DViewModel"]);

                    case 4:
                      _yield$Object = _context.sent;
                      _yield$Object2 = _slicedToArray(_yield$Object, 17);
                      _Map = _yield$Object2[0];
                      MapView = _yield$Object2[1];
                      Graphic = _yield$Object2[2];
                      RouteTask = _yield$Object2[3];
                      RouteParameters = _yield$Object2[4];
                      FeatureSet = _yield$Object2[5];
                      Directions = _yield$Object2[6];
                      Locate = _yield$Object2[7];
                      Track = _yield$Object2[8];
                      Locator = _yield$Object2[9];
                      LocatorSearchSource = _yield$Object2[10];
                      Expand = _yield$Object2[11];
                      Point = _yield$Object2[12];
                      Draw = _yield$Object2[13];
                      geometryEngine = _yield$Object2[14];
                      FeatureLayer = _yield$Object2[15];
                      DistanceMeasurement2DViewModel = _yield$Object2[16];
                      // await this._platform.ready();
                      map = new _Map({
                        basemap: this._basemap
                      }); // Inflate and display the map

                      this._view = new MapView({
                        // create the map view at the DOM element in this component
                        container: this.mapEl.nativeElement,
                        center: this._center,
                        zoom: this._center,
                        map: map
                      });
                      parkingLayer = new FeatureLayer({
                        url: "https://services2.arcgis.com/NEwhEo9GGSHXcRXV/arcgis/rest/services/Cicloparqueaderos_Certificados_Bogota_D_C/FeatureServer/0"
                      });
                      map.add(parkingLayer); //Se configura y crea el widget de busqueda

                      this._search = new LocatorSearchSource({
                        view: this._view
                      });
                      this._locator = new Locator({
                        url: "https://utility.arcgis.com/usrsvcs/appservices/0M4tNdkWcjbSCK2Z/rest/services/World/GeocodeServer/reverseGeocode"
                      });
                      this._locate = new Locate({
                        view: this._view,
                        useHeadingEnabled: false,
                        goToOverride: function goToOverride(view, options) {
                          options.target.scale = 1500; // Override the default map scale

                          return view.goTo(options.target);
                        }
                      });

                      this._view.ui.add(this._locate, "top-left");

                      this._pointGC = new Point();
                      this._draw = new Draw({
                        view: this._view
                      });
                      this._track = new Track({
                        view: this._view,
                        graphic: new Graphic({
                          symbol: {
                            type: "simple-marker",
                            size: "12px",
                            color: "green",
                            outline: {
                              color: "#efefef",
                              width: "1.5px"
                            }
                          }
                        }),
                        useHeadingEnabled: true,
                        goToOverride: function goToOverride(view, options) {
                          options.target.scale = 1500; // Override the default map scale

                          return view.goTo(options.target);
                        }
                      });

                      this._view.ui.add(this._track, "top-left");

                      this._distance = new DistanceMeasurement2DViewModel({
                        view: this._view,
                        unit: "kilometers"
                      });
                      routeTask = new RouteTask({
                        // url: "https://utility.arcgis.com/usrsvcs/appservices/6MyWChEzkSbXMie3/rest/services/World/Route/NAServer/Route_World/solve"
                        url: "https://sig.simur.gov.co/arcgis/rest/services/MVI_REDBICI/NARedBici/NAServer/Principiante"
                      });
                      directions = new Directions({
                        view: this._view,
                        // routeServiceUrl: "https://utility.arcgis.com/usrsvcs/appservices/6MyWChEzkSbXMie3/rest/services/World/Route/NAServer/Route_World"
                        routeServiceUrl: "https://sig.simur.gov.co/arcgis/rest/services/MVI_REDBICI/NARedBici/NAServer/Avanzado"
                      });
                      bgExpand = new Expand({
                        view: this._view,
                        content: directions,
                        autoCollapse: false
                      });

                      this._view.ui.add(bgExpand, "top-right");

                      _context.next = 42;
                      return this._view.when();

                    case 42:
                      return _context.abrupt("return", this._view);

                    case 45:
                      _context.prev = 45;
                      _context.t0 = _context["catch"](0);
                      console.log(_context.t0);

                    case 48:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[0, 45]]);
            }));
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.presentLoading();
                      this.backgroundMode.enable();
                      _context3.next = 4;
                      return this.storage.get("userData");

                    case 4:
                      this.user = _context3.sent;
                      this.initializedMap().then(function (mapView) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                          var _this3 = this;

                          var position;
                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  console.log("mapView ready: ", this._view.ready);
                                  this._loaded = this._view.ready;
                                  _context2.next = 4;
                                  return this._locate.locate();

                                case 4:
                                  position = _context2.sent;
                                  console.log("position", position);
                                  mapView.goTo({
                                    center: this._locate.locate(),
                                    zoom: 6,
                                    tilt: 40
                                  }).then(function () {
                                    var address;
                                    _this3._pointGC.latitude = position.coords.latitude;
                                    _this3._pointGC.longitude = position.coords.longitude;
                                    var params = {
                                      location: _this3._pointGC
                                    };
                                    var geocoder = _this3._locator;
                                    console.log(params);
                                    geocoder.locationToAddress(params).then(function (response) {
                                      address = response.address;
                                      console.log(address);
                                      address = address.split(",");
                                      _this3.currentDirection = address[0]; // this.currentDirection = this.currentDirection.split(",")

                                      console.log(_this3.currentDirection);

                                      _this3.loading.dismiss();
                                    })["catch"](function (err) {
                                      return console.log(err);
                                    });
                                  });

                                case 7:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2, this);
                        }));
                      });

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          } // async ngOnInit() {
          //   this.presentLoading();
          //   this.user = await this.storage.get("userData");
          //   this.initializedMap()
          //     .then(async mapView => {
          //       console.log("mapView ready: ", this._view.ready);
          //       this._loaded = this._view.ready;
          //       let position = await this._locate.locate();
          //       console.log("position", position)
          //       mapView.goTo({
          //         center: this._locate.locate(),
          //         zoom: 6,
          //         tilt: 40
          //       })
          //         .then(() => {
          //           let address;
          //           this._pointGC.latitude = position.coords.latitude;
          //           this._pointGC.longitude = position.coords.longitude;
          //           let params = {
          //             location: this._pointGC
          //           }
          //           let geocoder = this._locator;
          //           console.log(params)
          //           geocoder.locationToAddress(params)
          //             .then((response) => {
          //               address = response.address;
          //               console.log(address)
          //               address = address.split(",")
          //               this.currentDirection = address[0];
          //               // this.currentDirection = this.currentDirection.split(",")
          //               console.log(this.currentDirection)
          //               this.loading.dismiss();
          //             }).catch(err => console.log(err))
          //         })
          //     });
          // }

        }, {
          key: "startRute",
          value: function startRute() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this4 = this;

              var fechaActual, address, position, params, geocoder;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.estado = "RECORRIDO INICIADO";
                      this.clearWindows();

                      this._track.start();

                      _context5.next = 5;
                      return this._distance.start();

                    case 5:
                      console.log(this._distance);
                      fechaActual = new Date();
                      this.fecha = fechaActual;
                      console.log(this.fecha); //se toma la posicion y se geocodifica

                      _context5.next = 11;
                      return this._locate.locate();

                    case 11:
                      position = _context5.sent;
                      this._pointGC.latitude = position.coords.latitude;
                      this._pointGC.longitude = position.coords.longitude;
                      params = {
                        location: this._pointGC
                      };

                      this._track.on("track", function (position) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                          var ult;
                          return regeneratorRuntime.wrap(function _callee4$(_context4) {
                            while (1) {
                              switch (_context4.prev = _context4.next) {
                                case 0:
                                  this.recorrido.push(position);
                                  ult = this.recorrido.length - 1;

                                  if (this.recorrido.length > 1) {
                                    this.km = this.calculateDistance(this.recorrido[0].position.coords.longitude, this.recorrido[ult].position.coords.longitude, this.recorrido[0].position.coords.latitude, this.recorrido[ult].position.coords.latitude);
                                    console.log(this.km); // this.ingresos = this.km * this.user.campana_actual.pago_km;
                                  }

                                case 3:
                                case "end":
                                  return _context4.stop();
                              }
                            }
                          }, _callee4, this);
                        }));
                      });

                      geocoder = this._locator;
                      geocoder.locationToAddress(params).then(function (response) {
                        address = response.address;
                        console.log(address);
                        address = address.split(",");
                        _this4.fstDirection = address[0];
                        _this4.currentDirection = address[0]; // this.km = position.coords.speed;

                        console.log(_this4.currentDirection);
                      })["catch"](function (err) {
                        return console.log(err);
                      }); //Se inicializa el contador  

                      this.contador = setInterval(function () {
                        _this4.centesimas += 1;
                        if (_this4.centesimas < 10) _this4._centesimas = '0' + _this4.centesimas;else _this4._centesimas = '' + _this4.centesimas;

                        if (_this4.centesimas == 10) {
                          _this4.centesimas = 0;
                          _this4.segundos += 1;
                          if (_this4.segundos < 10) _this4._segundos = '0' + _this4.segundos;else _this4._segundos = _this4.segundos + '';

                          if (_this4.segundos == 60) {
                            _this4.segundos = 0;
                            _this4.minutos += 1;
                            if (_this4.minutos < 10) _this4._minutos = '0' + _this4.minutos;else _this4._minutos = _this4.minutos + '';
                            _this4._segundos = '00';

                            if (_this4.minutos == 60) {
                              _this4.minutos = 0;
                              _this4.minutos += 1;
                              if (_this4.horas < 10) _this4._horas = '0' + _this4.horas;else _this4._horas = _this4.horas + '';
                              _this4._minutos = '00';
                            }
                          }
                        }
                      }, 100);

                    case 19:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "pause",
          value: function pause() {
            clearInterval(this.contador);
          }
        }, {
          key: "stopRute",
          value: function stopRute() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this5 = this;

              var address, position, params, geocoder;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.prev = 0;

                      if (this.isRun) {
                        _context6.next = 15;
                        break;
                      }

                      this._track.stop();

                      this.time = "".concat(this._horas, ":").concat(this._minutos, ":").concat(this._segundos, ".").concat(this._centesimas);
                      clearInterval(this.contador); // this.minutos = 0;
                      // this.segundos = 0;
                      // this.centesimas = 0;
                      // this.horas = 0;
                      // this._centesimas = '00';
                      // this._segundos = '00';
                      // this._minutos = '00';
                      // this._horas = '00';

                      this.estado = 'INICIAR RECORRIDO';
                      this.isRun = false; // this.contador = null;
                      //se toma la posicion y se geocodifica

                      _context6.next = 9;
                      return this._locate.locate();

                    case 9:
                      position = _context6.sent;
                      this._pointGC.latitude = position.coords.latitude;
                      this._pointGC.longitude = position.coords.longitude;
                      params = {
                        location: this._pointGC
                      };
                      geocoder = this._locator;
                      geocoder.locationToAddress(params).then(function (response) {
                        address = response.address;
                        console.log(address);
                        address = address.split(",");
                        _this5.fnlDirection = address[0];
                        _this5.currentDirection = address[0];
                        console.log(_this5.currentDirection);
                        var kms = parseFloat(_this5.km);
                        var co2 = kms * 0.3;
                        _this5.co2 = co2.toFixed(3); // let usPeso =  parseFloat(this.user.peso);

                        console.log(_this5.user.peso);
                        console.log(typeof _this5.user.peso);
                        var totalMin = _this5.horas * 60 + _this5.minutos + _this5.segundos * 0.0166667;
                        _this5.cal = 0.071 * (_this5.user.peso * 2.2) * totalMin;
                        _this5.ruteData = {
                          fecha: _this5.fecha,
                          inicio: _this5.fstDirection,
                          "final": _this5.fnlDirection,
                          tiempo: _this5.time,
                          kms: _this5.km,
                          cal: _this5.cal,
                          co2: _this5.co2,
                          ingresos: _this5.ingresos
                        };
                        console.log(_this5.ruteData);

                        _this5.apiService.sendRute(_this5.ruteData); // .then(()=>{this.loading.dismiss()});

                      })["catch"](function (err) {
                        return console.log(err);
                      });

                    case 15:
                      _context6.next = 20;
                      break;

                    case 17:
                      _context6.prev = 17;
                      _context6.t0 = _context6["catch"](0);
                      console.log(_context6.t0);

                    case 20:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this, [[0, 17]]);
            }));
          } // drawLine() {
          //   this._view.graphics.removeAll();
          //   // creates and returns an instance of PolyLineDrawAction
          //   const action = this._draw.create("polyline");
          //   // focus the view to activate keyboard shortcuts for sketching
          //   this._view.focus();
          //   // listen polylineDrawAction events to give immediate visual feedback
          //   // to users as the line is being drawn on the view.
          //   action.on(
          //     [
          //       "vertex-add",
          //       "vertex-remove",
          //       "cursor-update",
          //       "redo",
          //       "undo",
          //       "draw-complete"
          //     ],
          //     this.updateVertices
          //   );
          // }
          // // Checks if the last vertex is making the line intersect itself.
          // updateVertices(event) {
          //   // create a polyline from returned vertices
          //   if (event.vertices.length > 1) {
          //     const result = this.createGraphic(event);
          //     // if the last vertex is making the line intersects itself,
          //     // prevent the events from firing
          //     if (result.selfIntersects) {
          //       event.preventDefault();
          //     }
          //   }
          // }
          // // create a new graphic presenting the polyline that is being drawn on the view
          // createGraphic(event) {
          //   const vertices = event.vertices;
          //   this._view.graphics.removeAll();
          //   // a graphic representing the polyline that is being drawn
          //   const graphic = new esri.Graphic({
          //     geometry: {
          //       type: "polyline",
          //       paths: vertices,
          //       spatialReference: this._view.spatialReference
          //     },
          //     symbol: {
          //       type: "simple-line", // autocasts as new SimpleFillSymbol
          //       color: [4, 90, 141],
          //       width: 4,
          //       cap: "round",
          //       join: "round"
          //     }
          //   });
          //   // check if the polyline intersects itself.
          //   const intersectingSegment = this.getIntersectingSegment(graphic.geometry);
          //   // Add a new graphic for the intersecting segment.
          //   if (intersectingSegment) {
          //     this._view.graphics.addMany([graphic, intersectingSegment]);
          //   }
          //   // Just add the graphic representing the polyline if no intersection
          //   else {
          //     this._view.graphics.add(graphic);
          //   }
          //   // return intersectingSegment
          //   return {
          //     selfIntersects: intersectingSegment
          //   };
          // }
          // // function that checks if the line intersects itself
          // isSelfIntersecting(polyline) {
          //   if (polyline.paths[0].length < 3) {
          //     return false;
          //   }
          //   const line = polyline.clone();
          //   //get the last segment from the polyline that is being drawn
          //   const lastSegment = this.getLastSegment(polyline);
          //   line.removePoint(0, line.paths[0].length - 1);
          //   // returns true if the line intersects itself, false otherwise
          //   return this._geometryEngine.crosses(lastSegment, line);
          // }
          // // Checks if the line intersects itself. If yes, change the last
          // // segment's symbol giving a visual feedback to the user.
          // getIntersectingSegment(polyline) {
          //   if (this.isSelfIntersecting(polyline)) {
          //     return new esri.Graphic({
          //       geometry: this.getLastSegment(polyline),
          //       symbol: {
          //         // type: "simple-line", // autocasts as new SimpleLineSymbol
          //         // style: "short-dot",
          //         // width: 3.5,
          //         color: "red"
          //       }
          //     });
          //   }
          //   return null;
          // }
          // // Get the last segment of the polyline that is being drawn
          // getLastSegment(polyline): any{
          //   const line = polyline.clone();
          //   const lastXYPoint = line.removePoint(0, line.paths[0].length - 1);
          //   const existingLineFinalPoint = line.getPoint(
          //     0,
          //     line.paths[0].length - 1
          //   );
          //   const polylineProperties  = {
          //     type: "polyline",
          //     spatialReference: this._view.spatialReference,
          //     hasZ: false,
          //     paths: [
          //       [
          //         [existingLineFinalPoint.x, existingLineFinalPoint.y],
          //         [lastXYPoint.x, lastXYPoint.y]
          //       ]
          //     ]
          //   }
          //   return polylineProperties;
          // }

        }, {
          key: "calculateDistance",
          value: function calculateDistance(lon1, lon2, lat1, lat2) {
            var p = 0.017453292519943295;
            var c = Math.cos;
            var a = 0.5 - c((lat1 - lat2) * p) / 2 + c(lat2 * p) * c(lat1 * p) * (1 - c((lon1 - lon2) * p)) / 2;
            var dis = 12742 * Math.asin(Math.sqrt(a));
            return dis.toFixed(2);
          }
        }, {
          key: "clearWindows",
          value: function clearWindows() {
            this.minutos = 0;
            this.segundos = 0;
            this.centesimas = 0;
            this.horas = 0;
            this._centesimas = '00';
            this._segundos = '00';
            this._minutos = '00';
            this._horas = '00';
            this.km = 0;
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
          key: "mapLoaded",
          get: function get() {
            return this._loaded;
          }
        }, {
          key: "zoom",
          set: function set(zoom) {
            this._zoom = zoom;
          },
          get: function get() {
            return this._zoom;
          }
        }, {
          key: "center",
          set: function set(center) {
            this._center = center;
          },
          get: function get() {
            return this._center;
          }
        }, {
          key: "basemap",
          set: function set(basemap) {
            this._basemap = basemap;
          },
          get: function get() {
            return this._basemap;
          }
        }]);

        return RutePage;
      }();

      RutePage.ctorParameters = function () {
        return [{
          type: _services_api_publibike_marca_service__WEBPACK_IMPORTED_MODULE_5__["ApiPublibikeMarcaService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]
        }, {
          type: _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_9__["BackgroundMode"]
        }];
      };

      RutePage.propDecorators = {
        mapEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['map']
        }],
        zoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        center: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        basemap: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      RutePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-rute',
        template: _raw_loader_rute_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_rute_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RutePage);
      /***/
    },

    /***/
    "oNdP":
    /*!*************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/camera.js ***!
      \*************************************************************/

    /*! exports provided: CameraPluginWeb, Camera */

    /***/
    function oNdP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CameraPluginWeb", function () {
        return CameraPluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Camera", function () {
        return Camera;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "O1h7");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "6Fjf");
      /* harmony import */


      var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../core-plugin-definitions */
      "I2A1");

      var CameraPluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CameraPluginWeb, _super);

        function CameraPluginWeb() {
          return _super.call(this, {
            name: 'Camera',
            platforms: ['web']
          }) || this;
        }

        CameraPluginWeb.prototype.getPhoto = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              return [2
              /*return*/
              , new Promise(function (resolve, reject) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                  var cameraModal_1, e_1;

                  var _this = this;

                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        if (!options.webUseInput) return [3
                        /*break*/
                        , 1];
                        this.fileInputExperience(options, resolve);
                        return [3
                        /*break*/
                        , 7];

                      case 1:
                        if (!customElements.get('pwa-camera-modal')) return [3
                        /*break*/
                        , 6];
                        cameraModal_1 = document.createElement('pwa-camera-modal');
                        document.body.appendChild(cameraModal_1);
                        _a.label = 2;

                      case 2:
                        _a.trys.push([2, 4,, 5]);

                        return [4
                        /*yield*/
                        , cameraModal_1.componentOnReady()];

                      case 3:
                        _a.sent();

                        cameraModal_1.addEventListener('onPhoto', function (e) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                            var photo, _a;

                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                              switch (_b.label) {
                                case 0:
                                  photo = e.detail;
                                  if (!(photo === null)) return [3
                                  /*break*/
                                  , 1];
                                  reject('User cancelled photos app');
                                  return [3
                                  /*break*/
                                  , 4];

                                case 1:
                                  if (!(photo instanceof Error)) return [3
                                  /*break*/
                                  , 2];
                                  reject(photo.message);
                                  return [3
                                  /*break*/
                                  , 4];

                                case 2:
                                  _a = resolve;
                                  return [4
                                  /*yield*/
                                  , this._getCameraPhoto(photo, options)];

                                case 3:
                                  _a.apply(void 0, [_b.sent()]);

                                  _b.label = 4;

                                case 4:
                                  cameraModal_1.dismiss();
                                  document.body.removeChild(cameraModal_1);
                                  return [2
                                  /*return*/
                                  ];
                              }
                            });
                          });
                        });
                        cameraModal_1.present();
                        return [3
                        /*break*/
                        , 5];

                      case 4:
                        e_1 = _a.sent();
                        this.fileInputExperience(options, resolve);
                        return [3
                        /*break*/
                        , 5];

                      case 5:
                        return [3
                        /*break*/
                        , 7];

                      case 6:
                        console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/pwa-elements.");
                        this.fileInputExperience(options, resolve);
                        _a.label = 7;

                      case 7:
                        return [2
                        /*return*/
                        ];
                    }
                  });
                });
              })];
            });
          });
        };

        CameraPluginWeb.prototype.fileInputExperience = function (options, resolve) {
          var input = document.querySelector('#_capacitor-camera-input');

          var cleanup = function cleanup() {
            input.parentNode && input.parentNode.removeChild(input);
          };

          if (!input) {
            input = document.createElement('input');
            input.id = '_capacitor-camera-input';
            input.type = 'file';
            document.body.appendChild(input);
          }

          input.accept = 'image/*';
          input.capture = true;

          if (options.source === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Photos || options.source === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Prompt) {
            input.removeAttribute('capture');
          } else if (options.direction === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraDirection"].Front) {
            input.capture = 'user';
          } else if (options.direction === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraDirection"].Rear) {
            input.capture = 'environment';
          }

          input.addEventListener('change', function (_e) {
            var file = input.files[0];
            var format = 'jpeg';

            if (file.type === 'image/png') {
              format = 'png';
            } else if (file.type === 'image/gif') {
              format = 'gif';
            }

            if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].DataUrl || options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64) {
              var reader_1 = new FileReader();
              reader_1.addEventListener('load', function () {
                if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].DataUrl) {
                  resolve({
                    dataUrl: reader_1.result,
                    format: format
                  });
                } else if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64) {
                  var b64 = reader_1.result.split(',')[1];
                  resolve({
                    base64String: b64,
                    format: format
                  });
                }

                cleanup();
              });
              reader_1.readAsDataURL(file);
            } else {
              resolve({
                webPath: URL.createObjectURL(file),
                format: format
              });
              cleanup();
            }
          });
          input.click();
        };

        CameraPluginWeb.prototype._getCameraPhoto = function (photo, options) {
          return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            var format = photo.type.split('/')[1];

            if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Uri) {
              resolve({
                webPath: URL.createObjectURL(photo),
                format: format
              });
            } else {
              reader.readAsDataURL(photo);

              reader.onloadend = function () {
                var r = reader.result;

                if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].DataUrl) {
                  resolve({
                    dataUrl: r,
                    format: format
                  });
                } else {
                  resolve({
                    base64String: r.split(',')[1],
                    format: format
                  });
                }
              };

              reader.onerror = function (e) {
                reject(e);
              };
            }
          });
        };

        return CameraPluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var Camera = new CameraPluginWeb(); //# sourceMappingURL=camera.js.map

      /***/
    },

    /***/
    "r04x":
    /*!*****************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/filesystem.js ***!
      \*****************************************************************/

    /*! exports provided: FilesystemPluginWeb, Filesystem */

    /***/
    function r04x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilesystemPluginWeb", function () {
        return FilesystemPluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Filesystem", function () {
        return Filesystem;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "O1h7");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "6Fjf");
      /* harmony import */


      var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../core-plugin-definitions */
      "I2A1");

      var FilesystemPluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FilesystemPluginWeb, _super);

        function FilesystemPluginWeb() {
          var _this = _super.call(this, {
            name: 'Filesystem',
            platforms: ['web']
          }) || this;

          _this.DEFAULT_DIRECTORY = _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["FilesystemDirectory"].Data;
          _this.DB_VERSION = 1;
          _this.DB_NAME = 'Disc';
          _this._writeCmds = ['add', 'put', 'delete'];
          return _this;
        }

        FilesystemPluginWeb.prototype.initDb = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              if (this._db !== undefined) {
                return [2
                /*return*/
                , this._db];
              }

              if (!('indexedDB' in window)) {
                throw new Error('This browser doesn\'t support IndexedDB');
              }

              return [2
              /*return*/
              , new Promise(function (resolve, reject) {
                var request = indexedDB.open(_this.DB_NAME, _this.DB_VERSION);
                request.onupgradeneeded = FilesystemPluginWeb.doUpgrade;

                request.onsuccess = function () {
                  _this._db = request.result;
                  resolve(request.result);
                };

                request.onerror = function () {
                  return reject(request.error);
                };

                request.onblocked = function () {
                  console.warn('db blocked');
                };
              })];
            });
          });
        };

        FilesystemPluginWeb.doUpgrade = function (event) {
          var eventTarget = event.target;
          var db = eventTarget.result;

          switch (event.oldVersion) {
            case 0:
            case 1:
            default:
              if (db.objectStoreNames.contains('FileStorage')) {
                db.deleteObjectStore('FileStorage');
              }

              var store = db.createObjectStore('FileStorage', {
                keyPath: 'path'
              });
              store.createIndex('by_folder', 'folder');
          }
        };

        FilesystemPluginWeb.prototype.dbRequest = function (cmd, args) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var readFlag;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              readFlag = this._writeCmds.indexOf(cmd) !== -1 ? 'readwrite' : 'readonly';
              return [2
              /*return*/
              , this.initDb().then(function (conn) {
                return new Promise(function (resolve, reject) {
                  var tx = conn.transaction(['FileStorage'], readFlag);
                  var store = tx.objectStore('FileStorage');
                  var req = store[cmd].apply(store, args);

                  req.onsuccess = function () {
                    return resolve(req.result);
                  };

                  req.onerror = function () {
                    return reject(req.error);
                  };
                });
              })];
            });
          });
        };

        FilesystemPluginWeb.prototype.dbIndexRequest = function (indexName, cmd, args) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var readFlag;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              readFlag = this._writeCmds.indexOf(cmd) !== -1 ? 'readwrite' : 'readonly';
              return [2
              /*return*/
              , this.initDb().then(function (conn) {
                return new Promise(function (resolve, reject) {
                  var tx = conn.transaction(['FileStorage'], readFlag);
                  var store = tx.objectStore('FileStorage');
                  var index = store.index(indexName);
                  var req = index[cmd].apply(index, args);

                  req.onsuccess = function () {
                    return resolve(req.result);
                  };

                  req.onerror = function () {
                    return reject(req.error);
                  };
                });
              })];
            });
          });
        };

        FilesystemPluginWeb.prototype.getPath = function (directory, uriPath) {
          directory = directory || this.DEFAULT_DIRECTORY;
          var cleanedUriPath = uriPath !== undefined ? uriPath.replace(/^[/]+|[/]+$/g, '') : '';
          var fsPath = '/' + directory;
          if (uriPath !== '') fsPath += '/' + cleanedUriPath;
          return fsPath;
        };

        FilesystemPluginWeb.prototype.clear = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var conn, tx, store;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  return [4
                  /*yield*/
                  , this.initDb()];

                case 1:
                  conn = _a.sent();
                  tx = conn.transaction(['FileStorage'], 'readwrite');
                  store = tx.objectStore('FileStorage');
                  store.clear();
                  return [2
                  /*return*/
                  , {}];
              }
            });
          });
        };
        /**
         * Read a file from disk
         * @param options options for the file read
         * @return a promise that resolves with the read file data result
         */


        FilesystemPluginWeb.prototype.readFile = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, entry;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  path = this.getPath(options.directory, options.path);
                  return [4
                  /*yield*/
                  , this.dbRequest('get', [path])];

                case 1:
                  entry = _a.sent();
                  if (entry === undefined) throw Error('File does not exist.');
                  return [2
                  /*return*/
                  , {
                    data: entry.content
                  }];
              }
            });
          });
        };
        /**
         * Write a file to disk in the specified location on device
         * @param options options for the file write
         * @return a promise that resolves with the file write result
         */


        FilesystemPluginWeb.prototype.writeFile = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, data, doRecursive, occupiedEntry, encoding, parentPath, parentEntry, subDirIndex, parentArgPath, now, pathObj;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  path = this.getPath(options.directory, options.path);
                  data = options.data;
                  doRecursive = options.recursive;
                  return [4
                  /*yield*/
                  , this.dbRequest('get', [path])];

                case 1:
                  occupiedEntry = _a.sent();
                  if (occupiedEntry && occupiedEntry.type === 'directory') throw 'The supplied path is a directory.';
                  encoding = options.encoding;
                  parentPath = path.substr(0, path.lastIndexOf('/'));
                  return [4
                  /*yield*/
                  , this.dbRequest('get', [parentPath])];

                case 2:
                  parentEntry = _a.sent();
                  if (!(parentEntry === undefined)) return [3
                  /*break*/
                  , 4];
                  subDirIndex = parentPath.indexOf('/', 1);
                  if (!(subDirIndex !== -1)) return [3
                  /*break*/
                  , 4];
                  parentArgPath = parentPath.substr(subDirIndex);
                  return [4
                  /*yield*/
                  , this.mkdir({
                    path: parentArgPath,
                    directory: options.directory,
                    recursive: doRecursive
                  })];

                case 3:
                  _a.sent();

                  _a.label = 4;

                case 4:
                  now = Date.now();
                  pathObj = {
                    path: path,
                    folder: parentPath,
                    type: 'file',
                    size: data.length,
                    ctime: now,
                    mtime: now,
                    content: !encoding && data.indexOf(',') >= 0 ? data.split(',')[1] : data
                  };
                  return [4
                  /*yield*/
                  , this.dbRequest('put', [pathObj])];

                case 5:
                  _a.sent();

                  return [2
                  /*return*/
                  , {
                    uri: pathObj.path
                  }];
              }
            });
          });
        };
        /**
         * Append to a file on disk in the specified location on device
         * @param options options for the file append
         * @return a promise that resolves with the file write result
         */


        FilesystemPluginWeb.prototype.appendFile = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, data, parentPath, now, ctime, occupiedEntry, parentEntry, parentArgPathIndex, parentArgPath, pathObj;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  path = this.getPath(options.directory, options.path);
                  data = options.data;
                  parentPath = path.substr(0, path.lastIndexOf('/'));
                  now = Date.now();
                  ctime = now;
                  return [4
                  /*yield*/
                  , this.dbRequest('get', [path])];

                case 1:
                  occupiedEntry = _a.sent();
                  if (occupiedEntry && occupiedEntry.type === 'directory') throw 'The supplied path is a directory.';
                  return [4
                  /*yield*/
                  , this.dbRequest('get', [parentPath])];

                case 2:
                  parentEntry = _a.sent();
                  if (!(parentEntry === undefined)) return [3
                  /*break*/
                  , 4];
                  parentArgPathIndex = parentPath.indexOf('/', 1);
                  parentArgPath = parentArgPathIndex !== -1 ? parentPath.substr(parentArgPathIndex) : '/';
                  return [4
                  /*yield*/
                  , this.mkdir({
                    path: parentArgPath,
                    directory: options.directory,
                    recursive: true
                  })];

                case 3:
                  _a.sent();

                  _a.label = 4;

                case 4:
                  if (occupiedEntry !== undefined) {
                    data = occupiedEntry.content + data;
                    ctime = occupiedEntry.ctime;
                  }

                  pathObj = {
                    path: path,
                    folder: parentPath,
                    type: 'file',
                    size: data.length,
                    ctime: ctime,
                    mtime: now,
                    content: data
                  };
                  return [4
                  /*yield*/
                  , this.dbRequest('put', [pathObj])];

                case 5:
                  _a.sent();

                  return [2
                  /*return*/
                  , {}];
              }
            });
          });
        };
        /**
         * Delete a file from disk
         * @param options options for the file delete
         * @return a promise that resolves with the deleted file data result
         */


        FilesystemPluginWeb.prototype.deleteFile = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, entry, entries;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  path = this.getPath(options.directory, options.path);
                  return [4
                  /*yield*/
                  , this.dbRequest('get', [path])];

                case 1:
                  entry = _a.sent();
                  if (entry === undefined) throw Error('File does not exist.');
                  return [4
                  /*yield*/
                  , this.dbIndexRequest('by_folder', 'getAllKeys', [IDBKeyRange.only(path)])];

                case 2:
                  entries = _a.sent();
                  if (entries.length !== 0) throw Error('Folder is not empty.');
                  return [4
                  /*yield*/
                  , this.dbRequest('delete', [path])];

                case 3:
                  _a.sent();

                  return [2
                  /*return*/
                  , {}];
              }
            });
          });
        };
        /**
         * Create a directory.
         * @param options options for the mkdir
         * @return a promise that resolves with the mkdir result
         */


        FilesystemPluginWeb.prototype.mkdir = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, doRecursive, parentPath, depth, parentEntry, occupiedEntry, parentArgPath, now, pathObj;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  path = this.getPath(options.directory, options.path);
                  doRecursive = options.recursive;
                  parentPath = path.substr(0, path.lastIndexOf('/'));
                  depth = (path.match(/\//g) || []).length;
                  return [4
                  /*yield*/
                  , this.dbRequest('get', [parentPath])];

                case 1:
                  parentEntry = _a.sent();
                  return [4
                  /*yield*/
                  , this.dbRequest('get', [path])];

                case 2:
                  occupiedEntry = _a.sent();
                  if (depth === 1) throw Error('Cannot create Root directory');
                  if (occupiedEntry !== undefined) throw Error('Current directory does already exist.');
                  if (!doRecursive && depth !== 2 && parentEntry === undefined) throw Error('Parent directory must exist');
                  if (!(doRecursive && depth !== 2 && parentEntry === undefined)) return [3
                  /*break*/
                  , 4];
                  parentArgPath = parentPath.substr(parentPath.indexOf('/', 1));
                  return [4
                  /*yield*/
                  , this.mkdir({
                    path: parentArgPath,
                    directory: options.directory,
                    recursive: doRecursive
                  })];

                case 3:
                  _a.sent();

                  _a.label = 4;

                case 4:
                  now = Date.now();
                  pathObj = {
                    path: path,
                    folder: parentPath,
                    type: 'directory',
                    size: 0,
                    ctime: now,
                    mtime: now
                  };
                  return [4
                  /*yield*/
                  , this.dbRequest('put', [pathObj])];

                case 5:
                  _a.sent();

                  return [2
                  /*return*/
                  , {}];
              }
            });
          });
        };
        /**
         * Remove a directory
         * @param options the options for the directory remove
         */


        FilesystemPluginWeb.prototype.rmdir = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, directory, recursive, fullPath, entry, readDirResult, _i, _a, entry_1, entryPath, entryObj;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
              switch (_b.label) {
                case 0:
                  path = options.path, directory = options.directory, recursive = options.recursive;
                  fullPath = this.getPath(directory, path);
                  return [4
                  /*yield*/
                  , this.dbRequest('get', [fullPath])];

                case 1:
                  entry = _b.sent();
                  if (entry === undefined) throw Error('Folder does not exist.');
                  if (entry.type !== 'directory') throw Error('Requested path is not a directory');
                  return [4
                  /*yield*/
                  , this.readdir({
                    path: path,
                    directory: directory
                  })];

                case 2:
                  readDirResult = _b.sent();
                  if (readDirResult.files.length !== 0 && !recursive) throw Error('Folder is not empty');
                  _i = 0, _a = readDirResult.files;
                  _b.label = 3;

                case 3:
                  if (!(_i < _a.length)) return [3
                  /*break*/
                  , 9];
                  entry_1 = _a[_i];
                  entryPath = path + "/" + entry_1;
                  return [4
                  /*yield*/
                  , this.stat({
                    path: entryPath,
                    directory: directory
                  })];

                case 4:
                  entryObj = _b.sent();
                  if (!(entryObj.type === 'file')) return [3
                  /*break*/
                  , 6];
                  return [4
                  /*yield*/
                  , this.deleteFile({
                    path: entryPath,
                    directory: directory
                  })];

                case 5:
                  _b.sent();

                  return [3
                  /*break*/
                  , 8];

                case 6:
                  return [4
                  /*yield*/
                  , this.rmdir({
                    path: entryPath,
                    directory: directory,
                    recursive: recursive
                  })];

                case 7:
                  _b.sent();

                  _b.label = 8;

                case 8:
                  _i++;
                  return [3
                  /*break*/
                  , 3];

                case 9:
                  return [4
                  /*yield*/
                  , this.dbRequest('delete', [fullPath])];

                case 10:
                  _b.sent();

                  return [2
                  /*return*/
                  , {}];
              }
            });
          });
        };
        /**
         * Return a list of files from the directory (not recursive)
         * @param options the options for the readdir operation
         * @return a promise that resolves with the readdir directory listing result
         */


        FilesystemPluginWeb.prototype.readdir = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, entry, entries, names;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  path = this.getPath(options.directory, options.path);
                  return [4
                  /*yield*/
                  , this.dbRequest('get', [path])];

                case 1:
                  entry = _a.sent();
                  if (options.path !== '' && entry === undefined) throw Error('Folder does not exist.');
                  return [4
                  /*yield*/
                  , this.dbIndexRequest('by_folder', 'getAllKeys', [IDBKeyRange.only(path)])];

                case 2:
                  entries = _a.sent();
                  names = entries.map(function (e) {
                    return e.substring(path.length + 1);
                  });
                  return [2
                  /*return*/
                  , {
                    files: names
                  }];
              }
            });
          });
        };
        /**
         * Return full File URI for a path and directory
         * @param options the options for the stat operation
         * @return a promise that resolves with the file stat result
         */


        FilesystemPluginWeb.prototype.getUri = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, entry;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  path = this.getPath(options.directory, options.path);
                  return [4
                  /*yield*/
                  , this.dbRequest('get', [path])];

                case 1:
                  entry = _a.sent();
                  if (!(entry === undefined)) return [3
                  /*break*/
                  , 3];
                  return [4
                  /*yield*/
                  , this.dbRequest('get', [path + '/'])];

                case 2:
                  entry = _a.sent();
                  _a.label = 3;

                case 3:
                  if (entry === undefined) throw Error('Entry does not exist.');
                  return [2
                  /*return*/
                  , {
                    uri: entry.path
                  }];
              }
            });
          });
        };
        /**
         * Return data about a file
         * @param options the options for the stat operation
         * @return a promise that resolves with the file stat result
         */


        FilesystemPluginWeb.prototype.stat = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, entry;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  path = this.getPath(options.directory, options.path);
                  return [4
                  /*yield*/
                  , this.dbRequest('get', [path])];

                case 1:
                  entry = _a.sent();
                  if (!(entry === undefined)) return [3
                  /*break*/
                  , 3];
                  return [4
                  /*yield*/
                  , this.dbRequest('get', [path + '/'])];

                case 2:
                  entry = _a.sent();
                  _a.label = 3;

                case 3:
                  if (entry === undefined) throw Error('Entry does not exist.');
                  return [2
                  /*return*/
                  , {
                    type: entry.type,
                    size: entry.size,
                    ctime: entry.ctime,
                    mtime: entry.mtime,
                    uri: entry.path
                  }];
              }
            });
          });
        };
        /**
         * Rename a file or directory
         * @param options the options for the rename operation
         * @return a promise that resolves with the rename result
         */


        FilesystemPluginWeb.prototype.rename = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              return [2
              /*return*/
              , this._copy(options, true)];
            });
          });
        };
        /**
         * Copy a file or directory
         * @param options the options for the copy operation
         * @return a promise that resolves with the copy result
         */


        FilesystemPluginWeb.prototype.copy = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              return [2
              /*return*/
              , this._copy(options, false)];
            });
          });
        };
        /**
         * Function that can perform a copy or a rename
         * @param options the options for the rename operation
         * @param doRename whether to perform a rename or copy operation
         * @return a promise that resolves with the result
         */


        FilesystemPluginWeb.prototype._copy = function (options, doRename) {
          if (doRename === void 0) {
            doRename = false;
          }

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var to, from, fromDirectory, toDirectory, fromPath, toPath, toObj, e_1, toPathComponents, toPath_1, toParentDirectory, fromObj, updateTime, _a, file, e_2, contents, _i, contents_1, filename;

            var _this = this;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
              switch (_b.label) {
                case 0:
                  to = options.to, from = options.from, fromDirectory = options.directory, toDirectory = options.toDirectory;

                  if (!to || !from) {
                    throw Error('Both to and from must be provided');
                  } // If no "to" directory is provided, use the "from" directory


                  if (!toDirectory) {
                    toDirectory = fromDirectory;
                  }

                  fromPath = this.getPath(fromDirectory, from);
                  toPath = this.getPath(toDirectory, to); // Test that the "to" and "from" locations are different

                  if (fromPath === toPath) {
                    return [2
                    /*return*/
                    , {}];
                  }

                  if (toPath.startsWith(fromPath)) {
                    throw Error('To path cannot contain the from path');
                  }

                  _b.label = 1;

                case 1:
                  _b.trys.push([1, 3,, 6]);

                  return [4
                  /*yield*/
                  , this.stat({
                    path: to,
                    directory: toDirectory
                  })];

                case 2:
                  toObj = _b.sent();
                  return [3
                  /*break*/
                  , 6];

                case 3:
                  e_1 = _b.sent();
                  toPathComponents = to.split('/');
                  toPathComponents.pop();
                  toPath_1 = toPathComponents.join('/');
                  if (!(toPathComponents.length > 0)) return [3
                  /*break*/
                  , 5];
                  return [4
                  /*yield*/
                  , this.stat({
                    path: toPath_1,
                    directory: toDirectory
                  })];

                case 4:
                  toParentDirectory = _b.sent();

                  if (toParentDirectory.type !== 'directory') {
                    throw new Error('Parent directory of the to path is a file');
                  }

                  _b.label = 5;

                case 5:
                  return [3
                  /*break*/
                  , 6];

                case 6:
                  // Cannot overwrite a directory
                  if (toObj && toObj.type === 'directory') {
                    throw new Error('Cannot overwrite a directory with a file');
                  }

                  return [4
                  /*yield*/
                  , this.stat({
                    path: from,
                    directory: fromDirectory
                  })];

                case 7:
                  fromObj = _b.sent();

                  updateTime = function updateTime(path, ctime, mtime) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                      var fullPath, entry;
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        switch (_a.label) {
                          case 0:
                            fullPath = this.getPath(toDirectory, path);
                            return [4
                            /*yield*/
                            , this.dbRequest('get', [fullPath])];

                          case 1:
                            entry = _a.sent();
                            entry.ctime = ctime;
                            entry.mtime = mtime;
                            return [4
                            /*yield*/
                            , this.dbRequest('put', [entry])];

                          case 2:
                            _a.sent();

                            return [2
                            /*return*/
                            ];
                        }
                      });
                    });
                  };

                  _a = fromObj.type;

                  switch (_a) {
                    case 'file':
                      return [3
                      /*break*/
                      , 8];

                    case 'directory':
                      return [3
                      /*break*/
                      , 15];
                  }

                  return [3
                  /*break*/
                  , 28];

                case 8:
                  return [4
                  /*yield*/
                  , this.readFile({
                    path: from,
                    directory: fromDirectory
                  })];

                case 9:
                  file = _b.sent();
                  if (!doRename) return [3
                  /*break*/
                  , 11];
                  return [4
                  /*yield*/
                  , this.deleteFile({
                    path: from,
                    directory: fromDirectory
                  })];

                case 10:
                  _b.sent();

                  _b.label = 11;

                case 11:
                  // Write the file to the new location
                  return [4
                  /*yield*/
                  , this.writeFile({
                    path: to,
                    directory: toDirectory,
                    data: file.data
                  })];

                case 12:
                  // Write the file to the new location
                  _b.sent();

                  if (!doRename) return [3
                  /*break*/
                  , 14];
                  return [4
                  /*yield*/
                  , updateTime(to, fromObj.ctime, fromObj.mtime)];

                case 13:
                  _b.sent();

                  _b.label = 14;

                case 14:
                  // Resolve promise
                  return [2
                  /*return*/
                  , {}];

                case 15:
                  if (toObj) {
                    throw Error('Cannot move a directory over an existing object');
                  }

                  _b.label = 16;

                case 16:
                  _b.trys.push([16, 20,, 21]); // Create the to directory


                  return [4
                  /*yield*/
                  , this.mkdir({
                    path: to,
                    directory: toDirectory,
                    recursive: false
                  })];

                case 17:
                  // Create the to directory
                  _b.sent();

                  if (!doRename) return [3
                  /*break*/
                  , 19];
                  return [4
                  /*yield*/
                  , updateTime(to, fromObj.ctime, fromObj.mtime)];

                case 18:
                  _b.sent();

                  _b.label = 19;

                case 19:
                  return [3
                  /*break*/
                  , 21];

                case 20:
                  e_2 = _b.sent();
                  return [3
                  /*break*/
                  , 21];

                case 21:
                  return [4
                  /*yield*/
                  , this.readdir({
                    path: from,
                    directory: fromDirectory
                  })];

                case 22:
                  contents = _b.sent().files;
                  _i = 0, contents_1 = contents;
                  _b.label = 23;

                case 23:
                  if (!(_i < contents_1.length)) return [3
                  /*break*/
                  , 26];
                  filename = contents_1[_i]; // Move item from the from directory to the to directory

                  return [4
                  /*yield*/
                  , this._copy({
                    from: from + "/" + filename,
                    to: to + "/" + filename,
                    directory: fromDirectory,
                    toDirectory: toDirectory
                  }, doRename)];

                case 24:
                  // Move item from the from directory to the to directory
                  _b.sent();

                  _b.label = 25;

                case 25:
                  _i++;
                  return [3
                  /*break*/
                  , 23];

                case 26:
                  if (!doRename) return [3
                  /*break*/
                  , 28];
                  return [4
                  /*yield*/
                  , this.rmdir({
                    path: from,
                    directory: fromDirectory
                  })];

                case 27:
                  _b.sent();

                  _b.label = 28;

                case 28:
                  return [2
                  /*return*/
                  , {}];
              }
            });
          });
        };

        FilesystemPluginWeb._debug = true;
        return FilesystemPluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var Filesystem = new FilesystemPluginWeb(); //# sourceMappingURL=filesystem.js.map

      /***/
    },

    /***/
    "r6rm":
    /*!**********************************************************!*\
      !*** ./node_modules/esri-loader/dist/umd/esri-loader.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function r6rm(module, exports, __webpack_require__) {
      (function (global, factory) {
        true ? factory(exports) : undefined;
      })(this, function (exports) {
        'use strict';
        /* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
         * Apache-2.0 */

        var DEFAULT_VERSION = '4.17';
        var NEXT = 'next';

        function parseVersion(version) {
          if (version.toLowerCase() === NEXT) {
            return NEXT;
          }

          var match = version && version.match(/^(\d)\.(\d+)/);
          return match && {
            major: parseInt(match[1], 10),
            minor: parseInt(match[2], 10)
          };
        }
        /**
         * Get the CDN url for a given version
         *
         * @param version Ex: '4.17' or '3.34'. Defaults to the latest 4.x version.
         */


        function getCdnUrl(version) {
          if (version === void 0) {
            version = DEFAULT_VERSION;
          }

          return "https://js.arcgis.com/" + version + "/";
        }
        /**
         * Get the CDN url for a the CSS for a given version and/or theme
         *
         * @param version Ex: '4.17', '3.34', or 'next'. Defaults to the latest 4.x version.
         */


        function getCdnCssUrl(version) {
          if (version === void 0) {
            version = DEFAULT_VERSION;
          }

          var baseUrl = getCdnUrl(version);
          var parsedVersion = parseVersion(version);

          if (parsedVersion !== NEXT && parsedVersion.major === 3) {
            // NOTE: at 3.11 the CSS moved from the /js folder to the root
            var path = parsedVersion.minor <= 10 ? 'js/' : '';
            return "" + baseUrl + path + "esri/css/esri.css";
          } else {
            // assume 4.x
            return baseUrl + "esri/themes/light/main.css";
          }
        }
        /* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
         * Apache-2.0 */


        function createStylesheetLink(href) {
          var link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = href;
          return link;
        }

        function insertLink(link, before) {
          if (before) {
            // the link should be inserted before a specific node
            var beforeNode = document.querySelector(before);
            beforeNode.parentNode.insertBefore(link, beforeNode);
          } else {
            // append the link to then end of the head tag
            document.head.appendChild(link);
          }
        } // check if the css url has been injected or added manually


        function getCss(url) {
          return document.querySelector("link[href*=\"" + url + "\"]");
        }

        function getCssUrl(urlOrVersion) {
          return !urlOrVersion || parseVersion(urlOrVersion) // if it's a valid version string return the CDN URL
          ? getCdnCssUrl(urlOrVersion) // otherwise assume it's a URL and return that
          : urlOrVersion;
        } // lazy load the CSS needed for the ArcGIS API


        function loadCss(urlOrVersion, before) {
          var url = getCssUrl(urlOrVersion);
          var link = getCss(url);

          if (!link) {
            // create & load the css link
            link = createStylesheetLink(url);
            insertLink(link, before);
          }

          return link;
        }
        /* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
         * Apache-2.0 */


        var isBrowser = typeof window !== 'undefined'; // allow consuming libraries to provide their own Promise implementations

        var utils = {
          Promise: isBrowser ? window['Promise'] : undefined
        };
        /* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
         * Apache-2.0 */

        var defaultOptions = {};

        function createScript(url) {
          var script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = url;
          script.setAttribute('data-esri-loader', 'loading');
          return script;
        } // add a one-time load handler to script
        // and optionally add a one time error handler as well


        function handleScriptLoad(script, callback, errback) {
          var onScriptError;

          if (errback) {
            // set up an error handler as well
            onScriptError = handleScriptError(script, errback);
          }

          var onScriptLoad = function onScriptLoad() {
            // pass the script to the callback
            callback(script); // remove this event listener

            script.removeEventListener('load', onScriptLoad, false);

            if (onScriptError) {
              // remove the error listener as well
              script.removeEventListener('error', onScriptError, false);
            }
          };

          script.addEventListener('load', onScriptLoad, false);
        } // add a one-time error handler to the script


        function handleScriptError(script, callback) {
          var onScriptError = function onScriptError(e) {
            // reject the promise and remove this event listener
            callback(e.error || new Error("There was an error attempting to load " + script.src)); // remove this event listener

            script.removeEventListener('error', onScriptError, false);
          };

          script.addEventListener('error', onScriptError, false);
          return onScriptError;
        } // allow the user to configure default script options rather than passing options to `loadModules` each time


        function setDefaultOptions(options) {
          if (options === void 0) {
            options = {};
          }

          defaultOptions = options;
        } // get the script injected by this library


        function getScript() {
          return document.querySelector('script[data-esri-loader]');
        } // has ArcGIS API been loaded on the page yet?


        function isLoaded() {
          var globalRequire = window['require']; // .on() ensures that it's Dojo's AMD loader

          return globalRequire && globalRequire.on;
        } // load the ArcGIS API on the page


        function loadScript(options) {
          if (options === void 0) {
            options = {};
          } // we would have liked to use spread like { ...defaultOptions, ...options }
          // but TS would inject a polyfill that would require use to configure rollup w content: 'window'
          // if we have another occasion to use spread, let'd do that and replace this for...in


          var opts = {};
          [defaultOptions, options].forEach(function (obj) {
            for (var prop in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                opts[prop] = obj[prop];
              }
            }
          }); // URL to load

          var version = opts.version;
          var url = opts.url || getCdnUrl(version);
          return new utils.Promise(function (resolve, reject) {
            var script = getScript();

            if (script) {
              // the API is already loaded or in the process of loading...
              // NOTE: have to test against scr attribute value, not script.src
              // b/c the latter will return the full url for relative paths
              var src = script.getAttribute('src');

              if (src !== url) {
                // potentially trying to load a different version of the API
                reject(new Error("The ArcGIS API for JavaScript is already loaded (" + src + ")."));
              } else {
                if (isLoaded()) {
                  // the script has already successfully loaded
                  resolve(script);
                } else {
                  // wait for the script to load and then resolve
                  handleScriptLoad(script, resolve, reject);
                }
              }
            } else {
              if (isLoaded()) {
                // the API has been loaded by some other means
                // potentially trying to load a different version of the API
                reject(new Error("The ArcGIS API for JavaScript is already loaded."));
              } else {
                // this is the first time attempting to load the API
                var css = opts.css;

                if (css) {
                  var useVersion = css === true; // load the css before loading the script

                  loadCss(useVersion ? version : css, opts.insertCssBefore);
                }

                if (opts.dojoConfig) {
                  // set dojo configuration parameters before loading the script
                  window['dojoConfig'] = opts.dojoConfig;
                } // create a script object whose source points to the API


                script = createScript(url); // _currentUrl = url;
                // once the script is loaded...

                handleScriptLoad(script, function () {
                  // update the status of the script
                  script.setAttribute('data-esri-loader', 'loaded'); // return the script

                  resolve(script);
                }, reject); // load the script

                document.body.appendChild(script);
              }
            }
          });
        }
        /* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
         * Apache-2.0 */
        // wrap Dojo's require() in a promise


        function requireModules(modules) {
          return new utils.Promise(function (resolve, reject) {
            // If something goes wrong loading the esri/dojo scripts, reject with the error.
            var errorHandler = window['require'].on('error', reject);
            window['require'](modules, function () {
              var args = [];

              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              } // remove error handler


              errorHandler.remove(); // Resolve with the parameters from dojo require as an array.

              resolve(args);
            });
          });
        } // returns a promise that resolves with an array of the required modules
        // also will attempt to lazy load the ArcGIS API if it has not already been loaded


        function loadModules(modules, loadScriptOptions) {
          if (loadScriptOptions === void 0) {
            loadScriptOptions = {};
          }

          if (!isLoaded()) {
            // script is not yet loaded, is it in the process of loading?
            var script = getScript();
            var src = script && script.getAttribute('src');

            if (!loadScriptOptions.url && src) {
              // script is still loading and user did not specify a URL
              // in this case we want to default to the URL that's being loaded
              // instead of defaulting to the latest 4.x URL
              loadScriptOptions.url = src;
            } // attempt to load the script then load the modules


            return loadScript(loadScriptOptions).then(function () {
              return requireModules(modules);
            });
          } else {
            // script is already loaded, just load the modules
            return requireModules(modules);
          }
        }
        /*
          Copyright (c) 2017 Esri
          Licensed under the Apache License, Version 2.0 (the "License");
          you may not use this file except in compliance with the License.
          You may obtain a copy of the License at
            http://www.apache.org/licenses/LICENSE-2.0
          Unless required by applicable law or agreed to in writing, software
          distributed under the License is distributed on an "AS IS" BASIS,
          WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
          See the License for the specific language governing permissions and
          limitations under the License.
        */
        // re-export the functions that are part of the public API
        // NOTE: rollup ignores the default export
        // and builds the UMD namespace out of the above named exports
        // so this is only needed so that consumers of the ESM build
        // can do esriLoader.loadModules(), etc
        // TODO: remove this next breaking change


        var esriLoader = {
          getScript: getScript,
          isLoaded: isLoaded,
          loadModules: loadModules,
          loadScript: loadScript,
          loadCss: loadCss,
          setDefaultOptions: setDefaultOptions,
          utils: utils
        };
        exports.getScript = getScript;
        exports.isLoaded = isLoaded;
        exports.loadModules = loadModules;
        exports.loadScript = loadScript;
        exports.loadCss = loadCss;
        exports.setDefaultOptions = setDefaultOptions;
        exports.utils = utils;
        exports['default'] = esriLoader;
        Object.defineProperty(exports, '__esModule', {
          value: true
        });
      }); //# sourceMappingURL=esri-loader.js.map

      /***/

    },

    /***/
    "rGEy":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rute/rute.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function rGEy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header color=\"secondary\">\n  <ion-toolbar>\n    <ion-buttons slot>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div id=\"viewDiv\" #map></div>\n  <div class=\"degrade-green\" style=\"height: 5px; width: 100%; margin-top: -4px;\">\n  </div>\n  <ion-slides>\n    <ion-slide>\n      <!-- <div class=\"ui divided grid chrono\">\n        <div class=\"row\">\n          <div class=\"five wide column\">\n            <h4>Tiempo Recorrido</h4>\n          </div>\n          <div class=\"nine wide column\">\n            <h2>{{_horas}}:{{_minutos}}:{{_segundos}}.{{_centesimas}}</h2>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"five wide column\">\n            <h4>Punto Actual</h4>\n          </div>\n          <div class=\"nine wide column\">\n            <h3>{{currentDirection}}</h3>\n          </div>\n        </div>\n        <div class=\"content-button\">\n          <ion-button color=\"transparent\" full outline class=\"ui button begin-activity\" (click)=\"startRute()\">{{estado}}</ion-button>\n          <ion-button color=\"transparent\" full outline class=\"ui button go-campaings\" (click)=\"stopRute()\">DETENER\n            RECORRIDO\n          </ion-button>\n        </div>\n      </div> -->\n      <div class=\"ui grid\" style=\"text-align: center; padding: 20px;\">\n        <div class=\"column data-rute degrade-green\">\n          <i class=\"stopwatch icon\"></i>\n          <h4>Tiempo Recorrido</h4>\n        </div>\n        <div class=\"column data-rute\">\n          <h2>{{_horas}}:{{_minutos}}:{{_segundos}}.{{_centesimas}}</h2>\n        </div>\n        <div class=\"column data-rute degrade-green\">\n          <i class=\"map marker alternate icon\"></i>\n          <h4>Punto Actual</h4>\n        </div>\n        <div class=\"column data-rute\">\n          <h3>{{currentDirection}}</h3>\n        </div>\n        <div class=\"column data-button\">\n          <ion-button color=\"transparent\" full outline class=\"ui button begin-activity\" (click)=\"startRute()\">{{estado}}</ion-button>\n        </div>\n        <div class=\"column data-button\">\n          <ion-button color=\"transparent\" full outline class=\"ui button go-campaings\" (click)=\"stopRute()\">DETENER RECORRIDO </ion-button>\n        </div>\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"ui grid\" style=\"text-align: center; padding: 20px;\">\n        <div class=\"column data-rute degrade-green\">\n          <i class=\"icon-stats-dots\"></i>\n          <h4>\n            Estás Generado\n          </h4>\n        </div>\n        <div class=\"column data-rute\">\n          <h2>\n            $ {{ingresos}}\n          </h2>\n        </div>\n        <div class=\"column data-rute degrade-orange\">\n          <i class=\"icon-map\"></i>\n          <h4>\n            Has Recorrido\n          </h4>\n        </div>\n        <div class=\"column data-rute\">\n          <h2>\n            <span id=\"km\">{{km}}</span><small> KM</small>\n          </h2>\n        </div>\n        <div class=\"column data-rute degrade-blue\">\n          <i class=\"icon-heart\"></i>\n          <h4>\n            Has Consumido\n          </h4>\n        </div>\n        <div class=\"column data-rute\">\n          <h2>\n            <small>{{cal}} Kcal</small>\n          </h2>\n        </div>\n        <div class=\"column data-rute degrade-violet\">\n          <i class=\"icon-stats-bars\"></i>\n          <h4>\n            Campaña Actual\n          </h4>\n        </div>\n        <div class=\"column data-rute\">\n          <h2>\n            Prueba\n          </h2>\n        </div>\n      </div>\n    </ion-slide>\n  </ion-slides>\n  <!-- <hr class=\"degrade-orange\" style=\"height: 5px; width: 100%; border: 0; margin-top: 30px;\"> -->\n</ion-content>";
      /***/
    },

    /***/
    "sB/A":
    /*!*************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/modals.js ***!
      \*************************************************************/

    /*! exports provided: ModalsPluginWeb, Modals */

    /***/
    function sBA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalsPluginWeb", function () {
        return ModalsPluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Modals", function () {
        return Modals;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "O1h7");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "6Fjf");

      var ModalsPluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ModalsPluginWeb, _super);

        function ModalsPluginWeb() {
          return _super.call(this, {
            name: 'Modals',
            platforms: ['web']
          }) || this;
        }

        ModalsPluginWeb.prototype.alert = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              window.alert(options.message);
              return [2
              /*return*/
              , Promise.resolve()];
            });
          });
        };

        ModalsPluginWeb.prototype.prompt = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var val;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              val = window.prompt(options.message, options.inputText || '');
              return [2
              /*return*/
              , Promise.resolve({
                value: val,
                cancelled: val === null
              })];
            });
          });
        };

        ModalsPluginWeb.prototype.confirm = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var val;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              val = window.confirm(options.message);
              return [2
              /*return*/
              , Promise.resolve({
                value: val
              })];
            });
          });
        };

        ModalsPluginWeb.prototype.showActions = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              return [2
              /*return*/
              , new Promise(function (resolve, _reject) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                  var actionSheet;

                  var _this = this;

                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                    actionSheet = document.querySelector('pwa-action-sheet');

                    if (!actionSheet) {
                      actionSheet = document.createElement('pwa-action-sheet');
                      document.body.appendChild(actionSheet);
                    }

                    actionSheet.header = options.title;
                    actionSheet.cancelable = false;
                    actionSheet.options = options.options;
                    actionSheet.addEventListener('onSelection', function (e) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                        var selection;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                          selection = e.detail;
                          resolve({
                            index: selection
                          });
                          return [2
                          /*return*/
                          ];
                        });
                      });
                    });
                    return [2
                    /*return*/
                    ];
                  });
                });
              })];
            });
          });
        };

        return ModalsPluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var Modals = new ModalsPluginWeb(); //# sourceMappingURL=modals.js.map

      /***/
    },

    /***/
    "tXcl":
    /*!********************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/accessibility.js ***!
      \********************************************************************/

    /*! exports provided: AccessibilityPluginWeb, Accessibility */

    /***/
    function tXcl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccessibilityPluginWeb", function () {
        return AccessibilityPluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Accessibility", function () {
        return Accessibility;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "O1h7");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "6Fjf");

      var AccessibilityPluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AccessibilityPluginWeb, _super);

        function AccessibilityPluginWeb() {
          return _super.call(this, {
            name: 'Accessibility',
            platforms: ['web']
          }) || this;
        }

        AccessibilityPluginWeb.prototype.isScreenReaderEnabled = function () {
          throw new Error('Feature not available in the browser');
        };

        AccessibilityPluginWeb.prototype.speak = function (options) {
          if (!('speechSynthesis' in window)) {
            return Promise.reject('Browser does not support the Speech Synthesis API');
          }

          var utterance = new SpeechSynthesisUtterance(options.value);

          if (options.language) {
            utterance.lang = options.language;
          }

          window.speechSynthesis.speak(utterance);
          return Promise.resolve();
        };

        return AccessibilityPluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var Accessibility = new AccessibilityPluginWeb(); //# sourceMappingURL=accessibility.js.map

      /***/
    },

    /***/
    "uhwm":
    /*!******************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/permissions.js ***!
      \******************************************************************/

    /*! exports provided: PermissionsPluginWeb, Permissions */

    /***/
    function uhwm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermissionsPluginWeb", function () {
        return PermissionsPluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Permissions", function () {
        return Permissions;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "O1h7");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "6Fjf");
      /* harmony import */


      var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../core-plugin-definitions */
      "I2A1");

      var PermissionsPluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PermissionsPluginWeb, _super);

        function PermissionsPluginWeb() {
          return _super.call(this, {
            name: 'Permissions'
          }) || this;
        }

        PermissionsPluginWeb.prototype.query = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var navigator, name, ret;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  navigator = window.navigator;

                  if (!navigator.permissions) {
                    return [2
                    /*return*/
                    , Promise.reject('This browser does not support the Permissions API')];
                  }

                  name = options.name === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["PermissionType"].Photos ? 'camera' : options.name;
                  return [4
                  /*yield*/
                  , navigator.permissions.query({
                    name: name
                  })];

                case 1:
                  ret = _a.sent();
                  return [2
                  /*return*/
                  , {
                    state: ret.state
                  }];
              }
            });
          });
        };

        return PermissionsPluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var Permissions = new PermissionsPluginWeb(); //# sourceMappingURL=permissions.js.map

      /***/
    }
  }]);
})();
//# sourceMappingURL=rute-rute-module-es5.js.map