function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | modules-home-home-module */
        "default~modules-about-us-about-us-module~modules-home-home-module").then(__webpack_require__.bind(null,
        /*! ./modules/home/home.module */
        "./src/app/modules/home/home.module.ts")).then(function (m) {
          return m.HomeModule;
        });
      }
    }, {
      path: 'about-us',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | modules-about-us-about-us-module */
        [__webpack_require__.e("default~modules-about-us-about-us-module~modules-home-home-module"), __webpack_require__.e("modules-about-us-about-us-module")]).then(__webpack_require__.bind(null,
        /*! ./modules/about-us/about-us.module */
        "./src/app/modules/about-us/about-us.module.ts")).then(function (m) {
          return m.AboutUsModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shares_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shares/footer/footer.component */
    "./src/app/shares/footer/footer.component.ts");
    /* harmony import */


    var _shares_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shares/nav-bar/nav-bar.component */
    "./src/app/shares/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _shares_nav_bar_medium_nav_bar_medium_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shares/nav-bar-medium/nav-bar-medium.component */
    "./src/app/shares/nav-bar-medium/nav-bar-medium.component.ts");

    function AppComponent_app_nav_bar_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
      }
    }

    function AppComponent_app_nav_bar_medium_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar-medium");
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'elfway-demo';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.headerMedium = window.innerWidth <= 992;
        }
      }, {
        key: "onResize",
        value: function onResize() {
          this.headerMedium = window.innerWidth <= 992;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      hostBindings: function AppComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function AppComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 5,
      vars: 2,
      consts: [["id", "root"], [4, "ngIf"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_app_nav_bar_1_Template, 1, 0, "app-nav-bar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_app_nav_bar_medium_2_Template, 1, 0, "app-nav-bar-medium", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.headerMedium);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headerMedium);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _shares_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _shares_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"], _shares_nav_bar_medium_nav_bar_medium_component__WEBPACK_IMPORTED_MODULE_5__["NavBarMediumComponent"]],
      styles: ["#root[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n@media screen and (max-width: 1200px) {\n  #root[_ngcontent-%COMP%] {\n    max-width: 95%;\n    margin: 2rem auto;\n  }\n}\n\n@media screen and (max-width: 992px) {\n  #root[_ngcontent-%COMP%] {\n    margin: 2rem auto;\n  }\n}\n\n.root--translate[_ngcontent-%COMP%] {\n  transform: translateX(30%);\n  transition: 0.4s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvREFUQS9Eb2N1bWVudHMvUHJvamVjdCBEYXRhL0FuZ3VsYXIgUHJvamVjdHMvZWxmd2F5LWRlbW8vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FER0E7RUFDRTtJQUVFLGNBQUE7SUFDQSxpQkFBQTtFQ0RGO0FBQ0Y7O0FESUE7RUFDRTtJQUVFLGlCQUFBO0VDSEY7QUFDRjs7QURZQTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7QUNWRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNyb290IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLy9tYXJnaW46IDJyZW0gYXV0bztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KXtcbiAgI3Jvb3Qge1xuICAgIC8vbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogOTUlO1xuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KXtcbiAgI3Jvb3Qge1xuICAgIC8vbWF4LXdpZHRoOiA5MHZ3O1xuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXtcbiAgI3Jvb3Qge1xuXG4gIH1cbn1cblxuLnJvb3QtLXRyYW5zbGF0ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMCUpO1xuICB0cmFuc2l0aW9uOiAuNHM7XG59XG4iLCIjcm9vdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAjcm9vdCB7XG4gICAgbWF4LXdpZHRoOiA5NSU7XG4gICAgbWFyZ2luOiAycmVtIGF1dG87XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICNyb290IHtcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcbiAgfVxufVxuLnJvb3QtLXRyYW5zbGF0ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMCUpO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, {
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:resize', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _shares_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shares/nav-bar/nav-bar.component */
    "./src/app/shares/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _shares_nav_bar_medium_nav_bar_medium_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shares/nav-bar-medium/nav-bar-medium.component */
    "./src/app/shares/nav-bar-medium/nav-bar-medium.component.ts");
    /* harmony import */


    var _shares_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shares/footer/footer.component */
    "./src/app/shares/footer/footer.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _shares_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"], _shares_nav_bar_medium_nav_bar_medium_component__WEBPACK_IMPORTED_MODULE_5__["NavBarMediumComponent"], _shares_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _shares_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"], _shares_nav_bar_medium_nav_bar_medium_component__WEBPACK_IMPORTED_MODULE_5__["NavBarMediumComponent"], _shares_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shares/footer/footer.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shares/footer/footer.component.ts ***!
    \***************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppSharesFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function FooterComponent_div_28_li_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var dataText_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dataText_r3);
      }
    }

    function FooterComponent_div_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FooterComponent_div_28_li_6_Template, 3, 1, "li", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var linkData_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](linkData_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", linkData_r1.linkArr);
      }
    }

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.footerLinkData = [{
          title: 'Company Info',
          linkArr: ['About Us', 'Careers', 'Social Responsibility', 'Affiliate Program', 'Business With Us', 'Find a Store', 'Press & Talent']
        }, {
          title: 'Quick Links',
          linkArr: ['Special Offers', 'Gift Cards', 'F21 Red', 'Privacy Policy', 'California Privacy Rights', 'CA Transparency in Store', 'Teams of Use']
        }, {
          title: 'Hot Categories',
          linkArr: ['Privacy Policy', 'F21 Red', 'Smartphone', 'Gift Cards', 'Battereries', 'Handbag', 'Shoes']
        }];
        this.currentYear = new Date().getFullYear();
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 53,
      vars: 2,
      consts: [[1, "footer__container"], [1, "footer__header"], [1, "footer__header__title"], [1, "footer__header__paragraph"], [1, "footer__header__subscribe"], ["type", "text", "placeholder", "Your email address", 1, "form__subscribe__input"], ["type", "button", 1, "form__subscribe__btn"], [1, "footer__body"], [1, "footer__body__logo"], [1, "body__logo__img"], ["src", "assets/footer/logo.svg", "alt", "Logo"], [1, "body__logo__text"], [1, "body__logo__social"], [1, "social__icon__style"], [1, "fab", "fa-facebook"], [1, "fab", "fa-twitter"], [1, "fab", "fa-instagram"], [1, "fab", "fa-google-plus-g"], [1, "fab", "fa-linkedin-in"], ["class", "footer__body__col", 4, "ngFor", "ngForOf"], [1, "footer__body__contact"], [1, "body__contact__title"], [1, "body__contact__phone"], [1, "contact__phone__icon"], [1, "fas", "fa-headphones"], [1, "contact__phone__detail"], [1, "phone__detail--number"], [1, "body__contact__address"], [1, "footer__bottom"], [1, "footer__bottom__copy-right"], [1, "footer__bottom__payment"], ["src", "assets/footer/payments.png", "alt", "payments"], [1, "footer__body__col"], [1, "body__col__title"], [1, "body__col__list"], [4, "ngFor", "ngForOf"], ["routerLink", "#"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "NEWSLETTER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Subscribe to the weekly newsletter for all the latest updates ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "SUBSCRIBE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, FooterComponent_div_28_Template, 7, 2, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Through Whatsapp");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "+084 008 46 789");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " GymVast, 18 East 50th Street, 4th Floor, New York, NY 10022 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " support@example.com ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.footerLinkData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Copyright \xA9 ", ctx.currentYear, " Efway. All Rights Reserved. ");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: [".highlight-text[_ngcontent-%COMP%] {\n  color: #8ba73b;\n}\n\n.required[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.social__icon__style[_ngcontent-%COMP%] {\n  cursor: pointer;\n  height: 3rem;\n  width: 3rem;\n  border-radius: 50%;\n  border: 1px solid lightgray;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 1rem;\n  font-size: 1.5rem;\n}\n\n.footer__container[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  width: 100%;\n  background-color: #fff;\n  padding: 0 2rem;\n}\n\n.footer__container[_ngcontent-%COMP%]   .footer__header[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10rem 35rem;\n  border-bottom: 1px solid lightgray;\n  background-image: url('footer-bg.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center -16rem;\n  background-attachment: scroll;\n}\n\n.footer__container[_ngcontent-%COMP%]   .footer__header[_ngcontent-%COMP%]   .footer__header__title[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  margin-bottom: 4rem;\n}\n\n.footer__container[_ngcontent-%COMP%]   .footer__header[_ngcontent-%COMP%]   .footer__header__paragraph[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  font-size: 1.4rem;\n  color: #626262;\n  margin-bottom: 3rem;\n}\n\n.footer__container[_ngcontent-%COMP%]   .footer__header[_ngcontent-%COMP%]   .footer__header__subscribe[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n}\n\n.footer__container[_ngcontent-%COMP%]   .footer__header[_ngcontent-%COMP%]   .footer__header__subscribe[_ngcontent-%COMP%]   .form__subscribe__input[_ngcontent-%COMP%] {\n  width: 100%;\n  outline: none;\n  border: 2px solid lightgray;\n  padding: 2rem;\n  border-radius: 5rem;\n  transition: 0.4s;\n  font-size: 1.4rem;\n}\n\n.footer__container[_ngcontent-%COMP%]   .footer__header[_ngcontent-%COMP%]   .footer__header__subscribe[_ngcontent-%COMP%]   .form__subscribe__btn[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 25%;\n  top: 9.5%;\n  right: 1%;\n  border: none;\n  background-color: #8ba73b;\n  font-size: 1.6rem;\n  padding: 2rem 0;\n  border-radius: 5rem;\n  color: #fff;\n  font-weight: bold;\n  cursor: pointer;\n  transition: 0.4s;\n  padding: 1.5rem 0;\n}\n\n.footer__container[_ngcontent-%COMP%]   .footer__body[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 6rem;\n  color: #626262;\n  font-size: 1.4rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.footer__container[_ngcontent-%COMP%]   .footer__body[_ngcontent-%COMP%]   .footer__body__logo[_ngcontent-%COMP%] {\n  width: 22%;\n}\n\n.footer__container[_ngcontent-%COMP%]   .footer__body[_ngcontent-%COMP%]   .footer__body__logo[_ngcontent-%COMP%]   .body__logo__img[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.footer__container[_ngcontent-%COMP%]   .footer__body[_ngcontent-%COMP%]   .footer__body__logo[_ngcontent-%COMP%]   .body__logo__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 19.2rem;\n  height: 4.5rem;\n}\n\n.footer__container[_ngcontent-%COMP%]   .footer__body[_ngcontent-%COMP%]   .footer__body__logo[_ngcontent-%COMP%]   .body__logo__text[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 2rem;\n}\n\n.footer__container[_ngcontent-%COMP%]   .footer__body[_ngcontent-%COMP%]   .footer__body__logo[_ngcontent-%COMP%]   .body__logo__text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n}\n\n.footer__container[_ngcontent-%COMP%]   .footer__body[_ngcontent-%COMP%]   .footer__body__logo[_ngcontent-%COMP%]   .body__logo__social[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-start;\n}\n\n.footer__container[_ngcontent-%COMP%]   .footer__body[_ngcontent-%COMP%]   .footer__body__logo[_ngcontent-%COMP%]   .body__logo__social[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  color: #8ba73b;\n  -webkit-animation-name: social-logo-scale;\n          animation-name: social-logo-scale;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n\n@-webkit-keyframes social-logo-scale {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes social-logo-scale {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n.footer__container[_ngcontent-%COMP%]   .footer__body[_ngcontent-%COMP%]   .footer__body__col[_ngcontent-%COMP%] {\n  width: 15%;\n}\n\n.footer__container[_ngcontent-%COMP%]   .footer__body[_ngcontent-%COMP%]   .footer__body__col[_ngcontent-%COMP%]   .body__col__title[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 2rem;\n}\n\n.footer__container[_ngcontent-%COMP%]   .footer__body[_ngcontent-%COMP%]   .footer__body__col[_ngcontent-%COMP%]   .body__col__list[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.footer__container[_ngcontent-%COMP%]   .footer__body[_ngcontent-%COMP%]   .footer__body__col[_ngcontent-%COMP%]   .body__col__list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  width: 100%;\n  list-style: none;\n}\n\n.footer__container[_ngcontent-%COMP%]   .footer__body[_ngcontent-%COMP%]   .footer__body__col[_ngcontent-%COMP%]   .body__col__list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-bottom: 1rem;\n}\n\n.footer__container[_ngcontent-%COMP%]   .footer__body[_ngcontent-%COMP%]   .footer__body__col[_ngcontent-%COMP%]   .body__col__list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-size: 1.4rem;\n  color: #626262;\n}\n\n.footer__container[_ngcontent-%COMP%]   .footer__body[_ngcontent-%COMP%]   .footer__body__col[_ngcontent-%COMP%]   .body__col__list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #8ba73b;\n}\n\n.footer__container[_ngcontent-%COMP%]   .footer__body[_ngcontent-%COMP%]   .footer__body__contact[_ngcontent-%COMP%] {\n  width: 20%;\n}\n\n.footer__container[_ngcontent-%COMP%]   .footer__body[_ngcontent-%COMP%]   .footer__body__contact[_ngcontent-%COMP%]   .body__contact__title[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 2rem;\n}\n\n.footer__container[_ngcontent-%COMP%]   .footer__body[_ngcontent-%COMP%]   .footer__body__contact[_ngcontent-%COMP%]   .body__contact__phone[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.footer__container[_ngcontent-%COMP%]   .footer__body[_ngcontent-%COMP%]   .footer__body__contact[_ngcontent-%COMP%]   .body__contact__phone[_ngcontent-%COMP%]   .contact__phone__icon[_ngcontent-%COMP%] {\n  width: 20%;\n  font-size: 4rem;\n  color: #8ba73b;\n}\n\n.footer__container[_ngcontent-%COMP%]   .footer__body[_ngcontent-%COMP%]   .footer__body__contact[_ngcontent-%COMP%]   .body__contact__phone[_ngcontent-%COMP%]   .contact__phone__detail[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n.footer__container[_ngcontent-%COMP%]   .footer__body[_ngcontent-%COMP%]   .footer__body__contact[_ngcontent-%COMP%]   .body__contact__phone[_ngcontent-%COMP%]   .contact__phone__detail[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.footer__container[_ngcontent-%COMP%]   .footer__body[_ngcontent-%COMP%]   .footer__body__contact[_ngcontent-%COMP%]   .body__contact__phone[_ngcontent-%COMP%]   .contact__phone__detail[_ngcontent-%COMP%]   .phone__detail--number[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: bold;\n  color: #8ba73b;\n}\n\n.footer__container[_ngcontent-%COMP%]   .footer__body[_ngcontent-%COMP%]   .footer__body__contact[_ngcontent-%COMP%]   .body__contact__address[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.footer__container[_ngcontent-%COMP%]   .footer__bottom[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 3rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.footer__container[_ngcontent-%COMP%]   .footer__bottom[_ngcontent-%COMP%]   .footer__bottom__copy-right[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.footer__container[_ngcontent-%COMP%]   .footer__bottom[_ngcontent-%COMP%]   .footer__bottom__copy-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n  font-size: 1.4rem;\n  color: #626262;\n}\n\n.footer__container[_ngcontent-%COMP%]   .footer__bottom[_ngcontent-%COMP%]   .footer__bottom__payment[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-start;\n}\n\n@media screen and (max-width: 992px) {\n  .footer__container[_ngcontent-%COMP%]   .footer__header[_ngcontent-%COMP%] {\n    padding: 10rem 15rem;\n  }\n  .footer__container[_ngcontent-%COMP%]   .footer__body[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .footer__container[_ngcontent-%COMP%]   .footer__body[_ngcontent-%COMP%]   .footer__body__logo[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 2rem;\n  }\n  .footer__container[_ngcontent-%COMP%]   .footer__body[_ngcontent-%COMP%]   .footer__body__logo[_ngcontent-%COMP%]   .body__logo__text[_ngcontent-%COMP%] {\n    width: 62%;\n  }\n  .footer__container[_ngcontent-%COMP%]   .footer__body[_ngcontent-%COMP%]   .footer__body__logo[_ngcontent-%COMP%]   .body__logo__social[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .footer__container[_ngcontent-%COMP%]   .footer__body[_ngcontent-%COMP%]   .footer__body__col[_ngcontent-%COMP%] {\n    width: 35%;\n    margin-bottom: 2rem;\n  }\n  .footer__container[_ngcontent-%COMP%]   .footer__body[_ngcontent-%COMP%]   .footer__body__contact[_ngcontent-%COMP%] {\n    width: 35%;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .footer__container[_ngcontent-%COMP%]   .footer__header[_ngcontent-%COMP%] {\n    padding: 10rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvREFUQS9Eb2N1bWVudHMvUHJvamVjdCBEYXRhL0FuZ3VsYXIgUHJvamVjdHMvZWxmd2F5LWRlbW8vc3JjL2FwcC9zaGFyZXMvYmFzZS5zY3NzIiwic3JjL2FwcC9zaGFyZXMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsIi9tbnQvREFUQS9Eb2N1bWVudHMvUHJvamVjdCBEYXRhL0FuZ3VsYXIgUHJvamVjdHMvZWxmd2F5LWRlbW8vc3JjL2FwcC9zaGFyZXMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVQTtFQUNFLGNBVGdCO0FDQWxCOztBRFlBO0VBQ0UsVUFBQTtBQ1RGOztBRFlBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1RGOztBQ2pCQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBRG9CRjs7QUNsQkU7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQ0FBQTtFQUNBLHNDQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsNkJBQUE7QURvQko7O0FDbEJJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURvQk47O0FDakJJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjRnpCTztFRTBCUCxtQkFBQTtBRG1CTjs7QUNoQkk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QURrQk47O0FDaEJNO0VBQ0UsV0FBQTtFRk9OLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNZRjs7QUNyQk07RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFRmNOLFlBQUE7RUFDQSx5QkF6RGdCO0VBMERoQixpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFRXBCTSxpQkFBQTtBRCtCUjs7QUMxQkU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjRm5EUztFRW9EVCxpQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0FENEJKOztBQzFCSTtFQUNFLFVBQUE7QUQ0Qk47O0FDMUJNO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FENEJSOztBQzFCUTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FENEJWOztBQ3pCTTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBRDJCUjs7QUN6QlE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUQyQlY7O0FDdkJNO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtBRHlCUjs7QUN2QlE7RUFDRSxjRnpGUTtFRTBGUix5Q0FBQTtVQUFBLGlDQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0FEeUJWOztBQ3RCUTtFQUNFO0lBQ0UsbUJBQUE7RUR3QlY7RUNyQlE7SUFDRSxxQkFBQTtFRHVCVjtFQ3BCUTtJQUNFLG1CQUFBO0VEc0JWO0FBQ0Y7O0FDakNRO0VBQ0U7SUFDRSxtQkFBQTtFRHdCVjtFQ3JCUTtJQUNFLHFCQUFBO0VEdUJWO0VDcEJRO0lBQ0UsbUJBQUE7RURzQlY7QUFDRjs7QUNqQkk7RUFDRSxVQUFBO0FEbUJOOztBQ2pCTTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBRG1CUjs7QUNoQk07RUFDRSxXQUFBO0FEa0JSOztBQ2hCUTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBRGtCVjs7QUNoQlU7RUFDRSxvQkFBQTtBRGtCWjs7QUNoQlk7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0ZwSUQ7QUNzSmI7O0FDZlk7RUFDRSxjRnpJSTtBQzBKbEI7O0FDVkk7RUFDRSxVQUFBO0FEWU47O0FDVk07RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QURZUjs7QUNUTTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtBRFdSOztBQ1RRO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxjRmpLUTtBQzRLbEI7O0FDVFE7RUFDRSxVQUFBO0FEV1Y7O0FDVFU7RUFDRSxjQUFBO0FEV1o7O0FDUlU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjRjdLTTtBQ3VMbEI7O0FDTE07RUFDRSxXQUFBO0FET1I7O0FDRkU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBRElKOztBQ0ZJO0VBQ0UsVUFBQTtBRElOOztBQ0ZNO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjRnJNSztBQ3lNYjs7QUNBSTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtBREVOOztBQ0dBO0VBR0k7SUFDRSxvQkFBQTtFREZKO0VDS0U7SUFDRSxlQUFBO0VESEo7RUNLSTtJQUNFLFdBQUE7SUFDQSxtQkFBQTtFREhOO0VDS007SUFDRSxVQUFBO0VESFI7RUNNTTtJQUNFLHVCQUFBO0VESlI7RUNRSTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtFRE5OO0VDU0k7SUFDRSxVQUFBO0VEUE47QUFDRjs7QUNZQTtFQUVJO0lBQ0UsY0FBQTtFRFhKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZXMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvci1vcmFuZ2U6ICNGNkE2NEQ7XG4kY29sb3ItZ3JlZW46ICM4QkE3M0I7XG4kY29sb3ItaGlnaGxpZ2h0OiByZ2IoMTM5LDE2Nyw1OSk7XG4kY29sb3ItdGV4dDogIzYyNjI2MjtcbiRjb2xvci1ib3JkZXI6ICNlZGVjZWM7XG4kY29sb3ItYmFja2NvbG9yLWljb246ICNmMmY0ZWM7XG4kY29sb3ItYnRuLWJhbm5lci0taG92ZXI6ICM3Zjk2NDM7XG4kYm9yZGVyLXN0eWxlOiAxcHggc29saWQgI2UwZGFkYTtcblxuXG4uaGlnaGxpZ2h0LXRleHQge1xuICBjb2xvcjogJGNvbG9yLWhpZ2hsaWdodDtcbn1cblxuLnJlcXVpcmVkIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnNvY2lhbF9faWNvbl9fc3R5bGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogM3JlbTtcbiAgd2lkdGg6IDNyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuQG1peGluIGlucHV0LXN0eWxlLS1zZWFyY2gge1xuICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XG4gIHBhZGRpbmc6IHtcbiAgICB0b3A6IDEuNXJlbTtcbiAgICBib3R0b206IDEuNXJlbTtcbiAgICBsZWZ0OiAycmVtO1xuICAgIHJpZ2h0OiAxMnJlbTtcbiAgfVxuICBvdXRsaW5lOiBub25lO1xufVxuXG5AbWl4aW4gaW5wdXQtc3R5bGUge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyYXk7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XG4gIHRyYW5zaXRpb246IC40cztcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbkBtaXhpbiBpbnB1dC1zdHlsZS0tZm9jdXMge1xuICBib3JkZXI6IDJweCBzb2xpZCAkY29sb3ItaGlnaGxpZ2h0O1xuICB0cmFuc2l0aW9uOiAuNHM7XG59XG5cbkBtaXhpbiBiYW5uZXItYnRuIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItaGlnaGxpZ2h0O1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgcGFkZGluZzogMnJlbSAwO1xuICBib3JkZXItcmFkaXVzOiA1cmVtO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogLjRzO1xufVxuXG5AbWl4aW4gYmFubmVyLWJ0bi0taG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYnRuLWJhbm5lci0taG92ZXI7XG4gIHRyYW5zaXRpb246IC40cztcbn1cblxuIiwiLmhpZ2hsaWdodC10ZXh0IHtcbiAgY29sb3I6ICM4YmE3M2I7XG59XG5cbi5yZXF1aXJlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5zb2NpYWxfX2ljb25fX3N0eWxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDNyZW07XG4gIHdpZHRoOiAzcmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5mb290ZXJfX2NvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDNyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwIDJyZW07XG59XG4uZm9vdGVyX19jb250YWluZXIgLmZvb3Rlcl9faGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcmVtIDM1cmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJ+c3JjL2Fzc2V0cy9mb290ZXIvZm9vdGVyLWJnLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIC0xNnJlbTtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XG59XG4uZm9vdGVyX19jb250YWluZXIgLmZvb3Rlcl9faGVhZGVyIC5mb290ZXJfX2hlYWRlcl9fdGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xufVxuLmZvb3Rlcl9fY29udGFpbmVyIC5mb290ZXJfX2hlYWRlciAuZm9vdGVyX19oZWFkZXJfX3BhcmFncmFwaCB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBjb2xvcjogIzYyNjI2MjtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cbi5mb290ZXJfX2NvbnRhaW5lciAuZm9vdGVyX19oZWFkZXIgLmZvb3Rlcl9faGVhZGVyX19zdWJzY3JpYmUge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZvb3Rlcl9fY29udGFpbmVyIC5mb290ZXJfX2hlYWRlciAuZm9vdGVyX19oZWFkZXJfX3N1YnNjcmliZSAuZm9ybV9fc3Vic2NyaWJlX19pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyYXk7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuLmZvb3Rlcl9fY29udGFpbmVyIC5mb290ZXJfX2hlYWRlciAuZm9vdGVyX19oZWFkZXJfX3N1YnNjcmliZSAuZm9ybV9fc3Vic2NyaWJlX19idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyNSU7XG4gIHRvcDogOS41JTtcbiAgcmlnaHQ6IDElO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4YmE3M2I7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBwYWRkaW5nOiAycmVtIDA7XG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICBwYWRkaW5nOiAxLjVyZW0gMDtcbn1cbi5mb290ZXJfX2NvbnRhaW5lciAuZm9vdGVyX19ib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDZyZW07XG4gIGNvbG9yOiAjNjI2MjYyO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5mb290ZXJfX2NvbnRhaW5lciAuZm9vdGVyX19ib2R5IC5mb290ZXJfX2JvZHlfX2xvZ28ge1xuICB3aWR0aDogMjIlO1xufVxuLmZvb3Rlcl9fY29udGFpbmVyIC5mb290ZXJfX2JvZHkgLmZvb3Rlcl9fYm9keV9fbG9nbyAuYm9keV9fbG9nb19faW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mb290ZXJfX2NvbnRhaW5lciAuZm9vdGVyX19ib2R5IC5mb290ZXJfX2JvZHlfX2xvZ28gLmJvZHlfX2xvZ29fX2ltZyBpbWcge1xuICB3aWR0aDogMTkuMnJlbTtcbiAgaGVpZ2h0OiA0LjVyZW07XG59XG4uZm9vdGVyX19jb250YWluZXIgLmZvb3Rlcl9fYm9keSAuZm9vdGVyX19ib2R5X19sb2dvIC5ib2R5X19sb2dvX190ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG4uZm9vdGVyX19jb250YWluZXIgLmZvb3Rlcl9fYm9keSAuZm9vdGVyX19ib2R5X19sb2dvIC5ib2R5X19sb2dvX190ZXh0IHAge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5mb290ZXJfX2NvbnRhaW5lciAuZm9vdGVyX19ib2R5IC5mb290ZXJfX2JvZHlfX2xvZ28gLmJvZHlfX2xvZ29fX3NvY2lhbCB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLmZvb3Rlcl9fY29udGFpbmVyIC5mb290ZXJfX2JvZHkgLmZvb3Rlcl9fYm9keV9fbG9nbyAuYm9keV9fbG9nb19fc29jaWFsIHNwYW46aG92ZXIge1xuICBjb2xvcjogIzhiYTczYjtcbiAgYW5pbWF0aW9uLW5hbWU6IHNvY2lhbC1sb2dvLXNjYWxlO1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5Aa2V5ZnJhbWVzIHNvY2lhbC1sb2dvLXNjYWxlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuLmZvb3Rlcl9fY29udGFpbmVyIC5mb290ZXJfX2JvZHkgLmZvb3Rlcl9fYm9keV9fY29sIHtcbiAgd2lkdGg6IDE1JTtcbn1cbi5mb290ZXJfX2NvbnRhaW5lciAuZm9vdGVyX19ib2R5IC5mb290ZXJfX2JvZHlfX2NvbCAuYm9keV9fY29sX190aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLmZvb3Rlcl9fY29udGFpbmVyIC5mb290ZXJfX2JvZHkgLmZvb3Rlcl9fYm9keV9fY29sIC5ib2R5X19jb2xfX2xpc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cbi5mb290ZXJfX2NvbnRhaW5lciAuZm9vdGVyX19ib2R5IC5mb290ZXJfX2JvZHlfX2NvbCAuYm9keV9fY29sX19saXN0IHVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4uZm9vdGVyX19jb250YWluZXIgLmZvb3Rlcl9fYm9keSAuZm9vdGVyX19ib2R5X19jb2wgLmJvZHlfX2NvbF9fbGlzdCB1bCBsaSB7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xufVxuLmZvb3Rlcl9fY29udGFpbmVyIC5mb290ZXJfX2JvZHkgLmZvb3Rlcl9fYm9keV9fY29sIC5ib2R5X19jb2xfX2xpc3QgdWwgbGkgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGNvbG9yOiAjNjI2MjYyO1xufVxuLmZvb3Rlcl9fY29udGFpbmVyIC5mb290ZXJfX2JvZHkgLmZvb3Rlcl9fYm9keV9fY29sIC5ib2R5X19jb2xfX2xpc3QgdWwgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjOGJhNzNiO1xufVxuLmZvb3Rlcl9fY29udGFpbmVyIC5mb290ZXJfX2JvZHkgLmZvb3Rlcl9fYm9keV9fY29udGFjdCB7XG4gIHdpZHRoOiAyMCU7XG59XG4uZm9vdGVyX19jb250YWluZXIgLmZvb3Rlcl9fYm9keSAuZm9vdGVyX19ib2R5X19jb250YWN0IC5ib2R5X19jb250YWN0X190aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLmZvb3Rlcl9fY29udGFpbmVyIC5mb290ZXJfX2JvZHkgLmZvb3Rlcl9fYm9keV9fY29udGFjdCAuYm9keV9fY29udGFjdF9fcGhvbmUge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5mb290ZXJfX2NvbnRhaW5lciAuZm9vdGVyX19ib2R5IC5mb290ZXJfX2JvZHlfX2NvbnRhY3QgLmJvZHlfX2NvbnRhY3RfX3Bob25lIC5jb250YWN0X19waG9uZV9faWNvbiB7XG4gIHdpZHRoOiAyMCU7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgY29sb3I6ICM4YmE3M2I7XG59XG4uZm9vdGVyX19jb250YWluZXIgLmZvb3Rlcl9fYm9keSAuZm9vdGVyX19ib2R5X19jb250YWN0IC5ib2R5X19jb250YWN0X19waG9uZSAuY29udGFjdF9fcGhvbmVfX2RldGFpbCB7XG4gIHdpZHRoOiA4MCU7XG59XG4uZm9vdGVyX19jb250YWluZXIgLmZvb3Rlcl9fYm9keSAuZm9vdGVyX19ib2R5X19jb250YWN0IC5ib2R5X19jb250YWN0X19waG9uZSAuY29udGFjdF9fcGhvbmVfX2RldGFpbCBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZm9vdGVyX19jb250YWluZXIgLmZvb3Rlcl9fYm9keSAuZm9vdGVyX19ib2R5X19jb250YWN0IC5ib2R5X19jb250YWN0X19waG9uZSAuY29udGFjdF9fcGhvbmVfX2RldGFpbCAucGhvbmVfX2RldGFpbC0tbnVtYmVyIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM4YmE3M2I7XG59XG4uZm9vdGVyX19jb250YWluZXIgLmZvb3Rlcl9fYm9keSAuZm9vdGVyX19ib2R5X19jb250YWN0IC5ib2R5X19jb250YWN0X19hZGRyZXNzIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZm9vdGVyX19jb250YWluZXIgLmZvb3Rlcl9fYm90dG9tIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDNyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4uZm9vdGVyX19jb250YWluZXIgLmZvb3Rlcl9fYm90dG9tIC5mb290ZXJfX2JvdHRvbV9fY29weS1yaWdodCB7XG4gIHdpZHRoOiA1MCU7XG59XG4uZm9vdGVyX19jb250YWluZXIgLmZvb3Rlcl9fYm90dG9tIC5mb290ZXJfX2JvdHRvbV9fY29weS1yaWdodCBwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBjb2xvcjogIzYyNjI2Mjtcbn1cbi5mb290ZXJfX2NvbnRhaW5lciAuZm9vdGVyX19ib3R0b20gLmZvb3Rlcl9fYm90dG9tX19wYXltZW50IHtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5mb290ZXJfX2NvbnRhaW5lciAuZm9vdGVyX19oZWFkZXIge1xuICAgIHBhZGRpbmc6IDEwcmVtIDE1cmVtO1xuICB9XG4gIC5mb290ZXJfX2NvbnRhaW5lciAuZm9vdGVyX19ib2R5IHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbiAgLmZvb3Rlcl9fY29udGFpbmVyIC5mb290ZXJfX2JvZHkgLmZvb3Rlcl9fYm9keV9fbG9nbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxuICAuZm9vdGVyX19jb250YWluZXIgLmZvb3Rlcl9fYm9keSAuZm9vdGVyX19ib2R5X19sb2dvIC5ib2R5X19sb2dvX190ZXh0IHtcbiAgICB3aWR0aDogNjIlO1xuICB9XG4gIC5mb290ZXJfX2NvbnRhaW5lciAuZm9vdGVyX19ib2R5IC5mb290ZXJfX2JvZHlfX2xvZ28gLmJvZHlfX2xvZ29fX3NvY2lhbCB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLmZvb3Rlcl9fY29udGFpbmVyIC5mb290ZXJfX2JvZHkgLmZvb3Rlcl9fYm9keV9fY29sIHtcbiAgICB3aWR0aDogMzUlO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIH1cbiAgLmZvb3Rlcl9fY29udGFpbmVyIC5mb290ZXJfX2JvZHkgLmZvb3Rlcl9fYm9keV9fY29udGFjdCB7XG4gICAgd2lkdGg6IDM1JTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmZvb3Rlcl9fY29udGFpbmVyIC5mb290ZXJfX2hlYWRlciB7XG4gICAgcGFkZGluZzogMTByZW07XG4gIH1cbn0iLCJAaW1wb3J0IFwic3JjL2FwcC9zaGFyZXMvYmFzZVwiO1xuXG4uZm9vdGVyX19jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMCAycmVtO1xuXG4gIC5mb290ZXJfX2hlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTByZW0gMzVyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJ+c3JjL2Fzc2V0cy9mb290ZXIvZm9vdGVyLWJnLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIC0xNnJlbTtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcblxuICAgIC5mb290ZXJfX2hlYWRlcl9fdGl0bGUge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xuICAgIH1cblxuICAgIC5mb290ZXJfX2hlYWRlcl9fcGFyYWdyYXBoIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICBjb2xvcjogJGNvbG9yLXRleHQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICAgIH1cblxuICAgIC5mb290ZXJfX2hlYWRlcl9fc3Vic2NyaWJlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAuZm9ybV9fc3Vic2NyaWJlX19pbnB1dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBAaW5jbHVkZSBpbnB1dC1zdHlsZTtcbiAgICAgIH1cbiAgICAgIC5mb3JtX19zdWJzY3JpYmVfX2J0biB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgdG9wOiA5LjUlO1xuICAgICAgICByaWdodDogMSU7XG4gICAgICAgIEBpbmNsdWRlIGJhbm5lci1idG47XG4gICAgICAgIHBhZGRpbmc6IDEuNXJlbSAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5mb290ZXJfX2JvZHkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDZyZW07XG4gICAgY29sb3I6ICRjb2xvci10ZXh0O1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG4gICAgLmZvb3Rlcl9fYm9keV9fbG9nbyB7XG4gICAgICB3aWR0aDogMjIlO1xuXG4gICAgICAuYm9keV9fbG9nb19faW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxOS4ycmVtO1xuICAgICAgICAgIGhlaWdodDogNC41cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuYm9keV9fbG9nb19fdGV4dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuXG4gICAgICAgIHAge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmJvZHlfX2xvZ29fX3NvY2lhbCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG4gICAgICAgIHNwYW46aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAkY29sb3ItaGlnaGxpZ2h0O1xuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBzb2NpYWwtbG9nby1zY2FsZTtcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgICAgICB9XG5cbiAgICAgICAgQGtleWZyYW1lcyBzb2NpYWwtbG9nby1zY2FsZSB7XG4gICAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZm9vdGVyX19ib2R5X19jb2wge1xuICAgICAgd2lkdGg6IDE1JTtcblxuICAgICAgLmJvZHlfX2NvbF9fdGl0bGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgIH1cblxuICAgICAgLmJvZHlfX2NvbF9fbGlzdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIHVsIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuXG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XG5cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLXRleHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLWhpZ2hsaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZm9vdGVyX19ib2R5X19jb250YWN0IHtcbiAgICAgIHdpZHRoOiAyMCU7XG5cbiAgICAgIC5ib2R5X19jb250YWN0X190aXRsZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgfVxuXG4gICAgICAuYm9keV9fY29udGFjdF9fcGhvbmUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAgICAgICAuY29udGFjdF9fcGhvbmVfX2ljb24ge1xuICAgICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgICAgICAgIGNvbG9yOiAkY29sb3ItaGlnaGxpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIC5jb250YWN0X19waG9uZV9fZGV0YWlsIHtcbiAgICAgICAgICB3aWR0aDogODAlO1xuXG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucGhvbmVfX2RldGFpbC0tbnVtYmVyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1oaWdobGlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5ib2R5X19jb250YWN0X19hZGRyZXNzIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmZvb3Rlcl9fYm90dG9tIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG4gICAgLmZvb3Rlcl9fYm90dG9tX19jb3B5LXJpZ2h0IHtcbiAgICAgIHdpZHRoOiA1MCU7XG5cbiAgICAgIHAge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgIGNvbG9yOiAkY29sb3ItdGV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZm9vdGVyX19ib3R0b21fX3BheW1lbnQge1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5mb290ZXJfX2NvbnRhaW5lciB7XG5cbiAgICAuZm9vdGVyX19oZWFkZXIge1xuICAgICAgcGFkZGluZzogMTByZW0gMTVyZW07XG4gICAgfVxuXG4gICAgLmZvb3Rlcl9fYm9keSB7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgIC5mb290ZXJfX2JvZHlfX2xvZ28ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcblxuICAgICAgICAuYm9keV9fbG9nb19fdGV4dCB7XG4gICAgICAgICAgd2lkdGg6IDYyJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ib2R5X19sb2dvX19zb2NpYWwge1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5mb290ZXJfX2JvZHlfX2NvbCB7XG4gICAgICAgIHdpZHRoOiAzNSU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICB9XG5cbiAgICAgIC5mb290ZXJfX2JvZHlfX2NvbnRhY3Qge1xuICAgICAgICB3aWR0aDogMzUlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZm9vdGVyX19jb250YWluZXIge1xuICAgIC5mb290ZXJfX2hlYWRlciB7XG4gICAgICBwYWRkaW5nOiAxMHJlbTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shares/nav-bar-medium/nav-bar-medium.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/shares/nav-bar-medium/nav-bar-medium.component.ts ***!
    \*******************************************************************/

  /*! exports provided: NavBarMediumComponent */

  /***/
  function srcAppSharesNavBarMediumNavBarMediumComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavBarMediumComponent", function () {
      return NavBarMediumComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NavBarMediumComponent = /*#__PURE__*/function () {
      function NavBarMediumComponent() {
        _classCallCheck(this, NavBarMediumComponent);
      }

      _createClass(NavBarMediumComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.bodyDoc = document.querySelector('#root');

          if (Object.keys(this.bodyDoc).length > 0) {
            window.addEventListener('click', function (e) {
              return _this.translateBodyClick(e, _this.bodyDoc);
            });
          }
        }
      }, {
        key: "translateBodyClick",
        value: function translateBodyClick(e, rootBody) {
          var iconClassName = e.target.className;
          var headerNavigation = document.querySelector('.header-medium__navigation');
          var headerBg = document.querySelector('.nav-bar__medium__bg');

          if (iconClassName.includes('nav__bar-right__click') && headerNavigation && headerBg) {
            rootBody.classList.add('root--translate');
            headerNavigation.classList.add('header-medium__navigation--display');
            headerBg.classList.add('nav-bar__medium__bg--display');
          } else if (headerNavigation && headerBg) {
            rootBody.classList.remove('root--translate');
            headerNavigation.classList.remove('header-medium__navigation--display');
            headerBg.classList.remove('nav-bar__medium__bg--display');
          }
        }
      }]);

      return NavBarMediumComponent;
    }();

    NavBarMediumComponent.ɵfac = function NavBarMediumComponent_Factory(t) {
      return new (t || NavBarMediumComponent)();
    };

    NavBarMediumComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavBarMediumComponent,
      selectors: [["app-nav-bar-medium"]],
      decls: 34,
      vars: 0,
      consts: [[1, "header-medium__container"], [1, "nav-bar__medium__bg"], [1, "header-medium__logo"], ["src", "assets/footer/logo.svg", "alt", "Logo"], [1, "header-medium__action"], [1, "fas", "fa-bars", "nav__bar-right__click"], [1, "header-medium__navigation"], [1, "navigation__header"], [1, "fas", "fa-times"], [1, "navigation__body"], [1, "navigation__body__list"], [1, "navigation__body__list--item"], ["routerLink", "#"]],
      template: function NavBarMediumComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " CLOSE \xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Shop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Pages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Blog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "On Sale");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".highlight-text[_ngcontent-%COMP%] {\n  color: #8ba73b;\n}\n\n.required[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.social__icon__style[_ngcontent-%COMP%] {\n  cursor: pointer;\n  height: 3rem;\n  width: 3rem;\n  border-radius: 50%;\n  border: 1px solid lightgray;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 1rem;\n  font-size: 1.5rem;\n}\n\n.header-medium__container[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #fff;\n  border-radius: 0.5rem;\n  display: flex;\n  padding: 0 2rem;\n}\n\n.header-medium__container[_ngcontent-%COMP%]   .header-medium__logo[_ngcontent-%COMP%] {\n  width: 50%;\n  padding: 2rem 0;\n}\n\n.header-medium__container[_ngcontent-%COMP%]   .header-medium__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 19.2rem;\n  height: 4.5rem;\n}\n\n.header-medium__container[_ngcontent-%COMP%]   .header-medium__action[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  font-size: 1.8rem;\n  color: #626262;\n}\n\n.header-medium__container[_ngcontent-%COMP%]   .header-medium__action[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.header-medium__container[_ngcontent-%COMP%]   .header-medium__navigation[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 100%;\n  background-color: #fff;\n  position: absolute;\n  top: -1.5%;\n  left: 0;\n  transform: translateX(-200%);\n  opacity: 0;\n  visibility: visible;\n  transition: 0.4s;\n}\n\n.header-medium__container[_ngcontent-%COMP%]   .header-medium__navigation[_ngcontent-%COMP%]   .navigation__header[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem;\n  background-color: #d2cece;\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: #626262;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.header-medium__container[_ngcontent-%COMP%]   .header-medium__navigation[_ngcontent-%COMP%]   .navigation__header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.header-medium__container[_ngcontent-%COMP%]   .header-medium__navigation[_ngcontent-%COMP%]   .navigation__body[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.header-medium__container[_ngcontent-%COMP%]   .header-medium__navigation[_ngcontent-%COMP%]   .navigation__body[_ngcontent-%COMP%]   .navigation__body__list[_ngcontent-%COMP%] {\n  list-style: none;\n  font-size: 1.4rem;\n}\n\n.header-medium__container[_ngcontent-%COMP%]   .header-medium__navigation[_ngcontent-%COMP%]   .navigation__body[_ngcontent-%COMP%]   .navigation__body__list[_ngcontent-%COMP%]   .navigation__body__list--item[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n  border-bottom: 1px solid lightgray;\n}\n\n.header-medium__container[_ngcontent-%COMP%]   .header-medium__navigation[_ngcontent-%COMP%]   .navigation__body[_ngcontent-%COMP%]   .navigation__body__list[_ngcontent-%COMP%]   .navigation__body__list--item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #626262;\n}\n\n.header-medium__container[_ngcontent-%COMP%]   .header-medium__navigation--display[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transition: 0.4s;\n  transform: translateX(-110%);\n}\n\n.header-medium__container[_ngcontent-%COMP%]   .nav-bar__medium__bg[_ngcontent-%COMP%] {\n  width: 103%;\n  height: 100%;\n  background-color: #000;\n  position: absolute;\n  top: -1.5%;\n  left: -3%;\n  opacity: 0;\n  visibility: hidden;\n}\n\n.header-medium__container[_ngcontent-%COMP%]   .nav-bar__medium__bg--display[_ngcontent-%COMP%] {\n  opacity: 0.2;\n  visibility: visible;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvREFUQS9Eb2N1bWVudHMvUHJvamVjdCBEYXRhL0FuZ3VsYXIgUHJvamVjdHMvZWxmd2F5LWRlbW8vc3JjL2FwcC9zaGFyZXMvYmFzZS5zY3NzIiwic3JjL2FwcC9zaGFyZXMvbmF2LWJhci1tZWRpdW0vbmF2LWJhci1tZWRpdW0uY29tcG9uZW50LnNjc3MiLCIvbW50L0RBVEEvRG9jdW1lbnRzL1Byb2plY3QgRGF0YS9Bbmd1bGFyIFByb2plY3RzL2VsZndheS1kZW1vL3NyYy9hcHAvc2hhcmVzL25hdi1iYXItbWVkaXVtL25hdi1iYXItbWVkaXVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBO0VBQ0UsY0FUZ0I7QUNBbEI7O0FEWUE7RUFDRSxVQUFBO0FDVEY7O0FEWUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDVEY7O0FDYkE7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FEZ0JGOztBQ2RFO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QURnQko7O0FDZEk7RUFDRSxjQUFBO0VBQ0EsY0FBQTtBRGdCTjs7QUNaRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0YxQlM7QUN3Q2I7O0FDWkk7RUFDRSxlQUFBO0FEY047O0FDVkU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtFQUNBLDRCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QURZSjs7QUNWSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0ZuRE87RUVvRFAsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QURZTjs7QUNWTTtFQUNFLGVBQUE7QURZUjs7QUNSSTtFQUNFLFdBQUE7QURVTjs7QUNSTTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QURVUjs7QUNSUTtFQUNFLGtCQUFBO0VBQ0Esa0NBQUE7QURVVjs7QUNSVTtFQUNFLHFCQUFBO0VBQ0EsY0YxRUM7QUNvRmI7O0FDSEU7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FES0o7O0FDRkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBRElKOztBQ0RFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBREdKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVzL25hdi1iYXItbWVkaXVtL25hdi1iYXItbWVkaXVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yLW9yYW5nZTogI0Y2QTY0RDtcbiRjb2xvci1ncmVlbjogIzhCQTczQjtcbiRjb2xvci1oaWdobGlnaHQ6IHJnYigxMzksMTY3LDU5KTtcbiRjb2xvci10ZXh0OiAjNjI2MjYyO1xuJGNvbG9yLWJvcmRlcjogI2VkZWNlYztcbiRjb2xvci1iYWNrY29sb3ItaWNvbjogI2YyZjRlYztcbiRjb2xvci1idG4tYmFubmVyLS1ob3ZlcjogIzdmOTY0MztcbiRib3JkZXItc3R5bGU6IDFweCBzb2xpZCAjZTBkYWRhO1xuXG5cbi5oaWdobGlnaHQtdGV4dCB7XG4gIGNvbG9yOiAkY29sb3ItaGlnaGxpZ2h0O1xufVxuXG4ucmVxdWlyZWQge1xuICBjb2xvcjogcmVkO1xufVxuXG4uc29jaWFsX19pY29uX19zdHlsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAzcmVtO1xuICB3aWR0aDogM3JlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG5AbWl4aW4gaW5wdXQtc3R5bGUtLXNlYXJjaCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcbiAgcGFkZGluZzoge1xuICAgIHRvcDogMS41cmVtO1xuICAgIGJvdHRvbTogMS41cmVtO1xuICAgIGxlZnQ6IDJyZW07XG4gICAgcmlnaHQ6IDEycmVtO1xuICB9XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbkBtaXhpbiBpbnB1dC1zdHlsZSB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgcGFkZGluZzogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcbiAgdHJhbnNpdGlvbjogLjRzO1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cblxuQG1peGluIGlucHV0LXN0eWxlLS1mb2N1cyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICRjb2xvci1oaWdobGlnaHQ7XG4gIHRyYW5zaXRpb246IC40cztcbn1cblxuQG1peGluIGJhbm5lci1idG4ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1oaWdobGlnaHQ7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBwYWRkaW5nOiAycmVtIDA7XG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAuNHM7XG59XG5cbkBtaXhpbiBiYW5uZXItYnRuLS1ob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1idG4tYmFubmVyLS1ob3ZlcjtcbiAgdHJhbnNpdGlvbjogLjRzO1xufVxuXG4iLCIuaGlnaGxpZ2h0LXRleHQge1xuICBjb2xvcjogIzhiYTczYjtcbn1cblxuLnJlcXVpcmVkIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnNvY2lhbF9faWNvbl9fc3R5bGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogM3JlbTtcbiAgd2lkdGg6IDNyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmhlYWRlci1tZWRpdW1fX2NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDAgMnJlbTtcbn1cbi5oZWFkZXItbWVkaXVtX19jb250YWluZXIgLmhlYWRlci1tZWRpdW1fX2xvZ28ge1xuICB3aWR0aDogNTAlO1xuICBwYWRkaW5nOiAycmVtIDA7XG59XG4uaGVhZGVyLW1lZGl1bV9fY29udGFpbmVyIC5oZWFkZXItbWVkaXVtX19sb2dvIGltZyB7XG4gIHdpZHRoOiAxOS4ycmVtO1xuICBoZWlnaHQ6IDQuNXJlbTtcbn1cbi5oZWFkZXItbWVkaXVtX19jb250YWluZXIgLmhlYWRlci1tZWRpdW1fX2FjdGlvbiB7XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBjb2xvcjogIzYyNjI2Mjtcbn1cbi5oZWFkZXItbWVkaXVtX19jb250YWluZXIgLmhlYWRlci1tZWRpdW1fX2FjdGlvbiBpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmhlYWRlci1tZWRpdW1fX2NvbnRhaW5lciAuaGVhZGVyLW1lZGl1bV9fbmF2aWdhdGlvbiB7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xLjUlO1xuICBsZWZ0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMCUpO1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuLmhlYWRlci1tZWRpdW1fX2NvbnRhaW5lciAuaGVhZGVyLW1lZGl1bV9fbmF2aWdhdGlvbiAubmF2aWdhdGlvbl9faGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMmNlY2U7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM2MjYyNjI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaGVhZGVyLW1lZGl1bV9fY29udGFpbmVyIC5oZWFkZXItbWVkaXVtX19uYXZpZ2F0aW9uIC5uYXZpZ2F0aW9uX19oZWFkZXIgc3BhbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5oZWFkZXItbWVkaXVtX19jb250YWluZXIgLmhlYWRlci1tZWRpdW1fX25hdmlnYXRpb24gLm5hdmlnYXRpb25fX2JvZHkge1xuICB3aWR0aDogMTAwJTtcbn1cbi5oZWFkZXItbWVkaXVtX19jb250YWluZXIgLmhlYWRlci1tZWRpdW1fX25hdmlnYXRpb24gLm5hdmlnYXRpb25fX2JvZHkgLm5hdmlnYXRpb25fX2JvZHlfX2xpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cbi5oZWFkZXItbWVkaXVtX19jb250YWluZXIgLmhlYWRlci1tZWRpdW1fX25hdmlnYXRpb24gLm5hdmlnYXRpb25fX2JvZHkgLm5hdmlnYXRpb25fX2JvZHlfX2xpc3QgLm5hdmlnYXRpb25fX2JvZHlfX2xpc3QtLWl0ZW0ge1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG4uaGVhZGVyLW1lZGl1bV9fY29udGFpbmVyIC5oZWFkZXItbWVkaXVtX19uYXZpZ2F0aW9uIC5uYXZpZ2F0aW9uX19ib2R5IC5uYXZpZ2F0aW9uX19ib2R5X19saXN0IC5uYXZpZ2F0aW9uX19ib2R5X19saXN0LS1pdGVtIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNjI2MjYyO1xufVxuLmhlYWRlci1tZWRpdW1fX2NvbnRhaW5lciAuaGVhZGVyLW1lZGl1bV9fbmF2aWdhdGlvbi0tZGlzcGxheSB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTEwJSk7XG59XG4uaGVhZGVyLW1lZGl1bV9fY29udGFpbmVyIC5uYXYtYmFyX19tZWRpdW1fX2JnIHtcbiAgd2lkdGg6IDEwMyU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xLjUlO1xuICBsZWZ0OiAtMyU7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5oZWFkZXItbWVkaXVtX19jb250YWluZXIgLm5hdi1iYXJfX21lZGl1bV9fYmctLWRpc3BsYXkge1xuICBvcGFjaXR5OiAwLjI7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHotaW5kZXg6IDE7XG59IiwiQGltcG9ydCBcInNyYy9hcHAvc2hhcmVzL2Jhc2VcIjtcblxuLy9HTE9CQUwgU1RZTEUvL1xuXG4vL0VORCBHTE9CQUwgU1RZTEUvL1xuXG4uaGVhZGVyLW1lZGl1bV9fY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IC41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwIDJyZW07XG5cbiAgLmhlYWRlci1tZWRpdW1fX2xvZ28ge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcGFkZGluZzogMnJlbSAwO1xuXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAxOS4ycmVtO1xuICAgICAgaGVpZ2h0OiA0LjVyZW07XG4gICAgfVxuICB9XG5cbiAgLmhlYWRlci1tZWRpdW1fX2FjdGlvbiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICBjb2xvcjogJGNvbG9yLXRleHQ7XG5cbiAgICBpIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cblxuICAuaGVhZGVyLW1lZGl1bV9fbmF2aWdhdGlvbiB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMS41JTtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAwJSk7XG4gICAgb3BhY2l0eTogMDtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIHRyYW5zaXRpb246IC40cztcblxuICAgIC5uYXZpZ2F0aW9uX19oZWFkZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2QyY2VjZTtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBjb2xvcjogJGNvbG9yLXRleHQ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm5hdmlnYXRpb25fX2JvZHkge1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIC5uYXZpZ2F0aW9uX19ib2R5X19saXN0IHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG5cbiAgICAgICAgLm5hdmlnYXRpb25fX2JvZHlfX2xpc3QtLWl0ZW0ge1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuXG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLXRleHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmhlYWRlci1tZWRpdW1fX25hdmlnYXRpb24tLWRpc3BsYXkge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB0cmFuc2l0aW9uOiAuNHM7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMTAlKTtcbiAgfVxuXG4gIC5uYXYtYmFyX19tZWRpdW1fX2JnIHtcbiAgICB3aWR0aDogMTAzJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMS41JTtcbiAgICBsZWZ0OiAtMyU7XG4gICAgb3BhY2l0eTogMDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cblxuICAubmF2LWJhcl9fbWVkaXVtX19iZy0tZGlzcGxheSB7XG4gICAgb3BhY2l0eTogLjI7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarMediumComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav-bar-medium',
          templateUrl: './nav-bar-medium.component.html',
          styleUrls: ['./nav-bar-medium.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shares/nav-bar/nav-bar.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shares/nav-bar/nav-bar.component.ts ***!
    \*****************************************************/

  /*! exports provided: NavBarComponent */

  /***/
  function srcAppSharesNavBarNavBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
      return NavBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NavBarComponent = /*#__PURE__*/function () {
      function NavBarComponent() {
        _classCallCheck(this, NavBarComponent);
      }

      _createClass(NavBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavBarComponent;
    }();

    NavBarComponent.ɵfac = function NavBarComponent_Factory(t) {
      return new (t || NavBarComponent)();
    };

    NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavBarComponent,
      selectors: [["app-nav-bar"]],
      decls: 96,
      vars: 0,
      consts: [[1, "header__container"], [1, "header__info"], [1, "header__info__offer"], [1, "highlight-text"], [1, "header__info__location"], [1, "fas", "fa-map-marker-alt"], [1, "header__info__phone"], [1, "fas", "fa-headphones"], [1, "header__content"], [1, "header__content__logo"], ["src", "assets/footer/logo.svg", "alt", "Logo"], [1, "header__content__navigation"], [1, "content__navigation__search"], ["autocomplete", "off", 1, "search__form"], ["type", "text", "placeholder", "Search among 100,000 products...", 1, "search__form__input"], ["type", "button", 1, "search__form_btn"], [1, "content__navigation__action"], [1, "navigation__action__login"], [1, "action__icon"], [1, "far", "fa-user"], [1, "action__login__text"], [1, "action__login__form"], [1, "login__form__header"], [1, "login__form__header--left"], [1, "login__form__header--right"], ["routerLink", "#"], [1, "login__form"], [1, "login__form__username"], ["for", "username"], [1, "required"], ["id", "username", "name", "username", "type", "text", "placeholder", "Username"], [1, "login__form__password"], ["for", "password"], ["id", "password", "name", "password", "type", "password", "placeholder", "Password"], [1, "login__form__action"], ["type", "button"], [1, "login__form__footer"], [1, "navigation__action__wishlist"], [1, "far", "fa-heart"], [1, "notification"], [1, "navigation__action__cart"], [1, "fas", "fa-shopping-cart"], [1, "action__price"], [1, "content__navigation__nav"], [1, "nav__list"], [1, "nav__list--item"], ["routerLink", "/about-us"]],
      template: function NavBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " New Offers This Weekend only to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Get 50%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Flate ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Location ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " (+048) - 1800 33 689 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "form", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "or");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Register ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Create an Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "form", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Username or email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "LOGIN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Lost your password?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "$0.00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "ul", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Shop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Pages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Blog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "On Sale");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".highlight-text[_ngcontent-%COMP%] {\n  color: #8ba73b;\n}\n\n.required[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.social__icon__style[_ngcontent-%COMP%] {\n  cursor: pointer;\n  height: 3rem;\n  width: 3rem;\n  border-radius: 50%;\n  border: 1px solid lightgray;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 1rem;\n  font-size: 1.5rem;\n}\n\n.header__container[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #fff;\n  border-radius: 0.5rem;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__info[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  color: #626262;\n  font-size: 1.4rem;\n  border-bottom: 1px solid #e0dada;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__info[_ngcontent-%COMP%]   .header__info__offer[_ngcontent-%COMP%] {\n  width: 70%;\n  padding: 1rem;\n  border-right: 1px solid #e0dada;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__info[_ngcontent-%COMP%]   .header__info__location[_ngcontent-%COMP%] {\n  width: 10%;\n  padding: 1rem;\n  border-right: 1px solid #e0dada;\n  transition: 0.4s;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__info[_ngcontent-%COMP%]   .header__info__location[_ngcontent-%COMP%]:hover {\n  color: #8ba73b;\n  transition: 0.4s;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__info[_ngcontent-%COMP%]   .header__info__phone[_ngcontent-%COMP%] {\n  width: 20%;\n  padding: 1rem;\n  transition: 0.4s;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__info[_ngcontent-%COMP%]   .header__info__phone[_ngcontent-%COMP%]:hover {\n  color: #8ba73b;\n  transition: 0.4s;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__logo[_ngcontent-%COMP%] {\n  width: 20%;\n  padding: 2rem 1rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 19.2rem;\n  height: 4.5rem;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__navigation[_ngcontent-%COMP%] {\n  width: 80%;\n  border-left: 1px solid #e0dada;\n  padding: 2rem 1rem;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__navigation[_ngcontent-%COMP%]   .content__navigation__search[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__navigation[_ngcontent-%COMP%]   .content__navigation__search[_ngcontent-%COMP%]   .search__form[_ngcontent-%COMP%] {\n  width: 60%;\n  position: relative;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__navigation[_ngcontent-%COMP%]   .content__navigation__search[_ngcontent-%COMP%]   .search__form[_ngcontent-%COMP%]   .search__form__input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 2px solid lightgray;\n  border-radius: 5rem;\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n  padding-left: 2rem;\n  padding-right: 12rem;\n  outline: none;\n  transition: 0.4s;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__navigation[_ngcontent-%COMP%]   .content__navigation__search[_ngcontent-%COMP%]   .search__form[_ngcontent-%COMP%]   .search__form__input[_ngcontent-%COMP%]:focus {\n  border: 2px solid #8ba73b;\n  transition: 0.4s;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__navigation[_ngcontent-%COMP%]   .content__navigation__search[_ngcontent-%COMP%]   .search__form[_ngcontent-%COMP%]   .search__form_btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  top: 11%;\n  right: 1%;\n  padding: 1rem 3rem;\n  border: 1px solid #8ba73b;\n  background-color: #8ba73b;\n  border-radius: 5rem;\n  color: #fff;\n  font-weight: bold;\n  font-size: 1.4rem;\n  transition: 0.4s;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__navigation[_ngcontent-%COMP%]   .content__navigation__search[_ngcontent-%COMP%]   .search__form[_ngcontent-%COMP%]   .search__form_btn[_ngcontent-%COMP%]:hover {\n  background-color: #7f9643;\n  transition: 0.4s;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__navigation[_ngcontent-%COMP%]   .content__navigation__action[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin-top: 2rem;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__navigation[_ngcontent-%COMP%]   .content__navigation__action[_ngcontent-%COMP%]   .action__icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 4rem;\n  height: 4rem;\n  border-radius: 50%;\n  font-size: 1.6rem;\n  background-color: lightgray;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__navigation[_ngcontent-%COMP%]   .content__navigation__action[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: #fff;\n  border-radius: 50%;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__navigation[_ngcontent-%COMP%]   .content__navigation__action[_ngcontent-%COMP%]   .navigation__action__login[_ngcontent-%COMP%] {\n  width: 14%;\n  position: relative;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  transition: 0.4s;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__navigation[_ngcontent-%COMP%]   .content__navigation__action[_ngcontent-%COMP%]   .navigation__action__login[_ngcontent-%COMP%]   .action__login__text[_ngcontent-%COMP%] {\n  width: 60%;\n  font-size: 1.4rem;\n  margin-left: 1rem;\n  font-weight: bold;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__navigation[_ngcontent-%COMP%]   .content__navigation__action[_ngcontent-%COMP%]   .navigation__action__login[_ngcontent-%COMP%]   .action__login__form[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 130%;\n  right: 0;\n  width: 250%;\n  background-color: #fff;\n  padding: 2rem;\n  font-size: 1.4rem;\n  color: #000;\n  border-radius: 0.5rem;\n  border-top: 0.5rem solid #8ba73b;\n  transition: 0.4s;\n  opacity: 0;\n  visibility: hidden;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__navigation[_ngcontent-%COMP%]   .content__navigation__action[_ngcontent-%COMP%]   .navigation__action__login[_ngcontent-%COMP%]   .action__login__form[_ngcontent-%COMP%]   .login__form__header[_ngcontent-%COMP%] {\n  width: 100%;\n  border-bottom: 1px solid #000;\n  padding: 1rem 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__navigation[_ngcontent-%COMP%]   .content__navigation__action[_ngcontent-%COMP%]   .navigation__action__login[_ngcontent-%COMP%]   .action__login__form[_ngcontent-%COMP%]   .login__form__header[_ngcontent-%COMP%]   .login__form__header--left[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: bold;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__navigation[_ngcontent-%COMP%]   .content__navigation__action[_ngcontent-%COMP%]   .navigation__action__login[_ngcontent-%COMP%]   .action__login__form[_ngcontent-%COMP%]   .login__form__header[_ngcontent-%COMP%]   .login__form__header--right[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #8ba73b;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__navigation[_ngcontent-%COMP%]   .content__navigation__action[_ngcontent-%COMP%]   .navigation__action__login[_ngcontent-%COMP%]   .action__login__form[_ngcontent-%COMP%]   .login__form__header[_ngcontent-%COMP%]   .login__form__header--right[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  -webkit-text-decoration-color: #8ba73b;\n          text-decoration-color: #8ba73b;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__navigation[_ngcontent-%COMP%]   .content__navigation__action[_ngcontent-%COMP%]   .navigation__action__login[_ngcontent-%COMP%]   .action__login__form[_ngcontent-%COMP%]   .login__form[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 1rem;\n  padding: 1rem 0;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__navigation[_ngcontent-%COMP%]   .content__navigation__action[_ngcontent-%COMP%]   .navigation__action__login[_ngcontent-%COMP%]   .action__login__form[_ngcontent-%COMP%]   .login__form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__navigation[_ngcontent-%COMP%]   .content__navigation__action[_ngcontent-%COMP%]   .navigation__action__login[_ngcontent-%COMP%]   .action__login__form[_ngcontent-%COMP%]   .login__form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #626262;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__navigation[_ngcontent-%COMP%]   .content__navigation__action[_ngcontent-%COMP%]   .navigation__action__login[_ngcontent-%COMP%]   .action__login__form[_ngcontent-%COMP%]   .login__form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  width: 100%;\n  outline: none;\n  border: 2px solid lightgray;\n  padding: 2rem;\n  border-radius: 5rem;\n  transition: 0.4s;\n  font-size: 1.4rem;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__navigation[_ngcontent-%COMP%]   .content__navigation__action[_ngcontent-%COMP%]   .navigation__action__login[_ngcontent-%COMP%]   .action__login__form[_ngcontent-%COMP%]   .login__form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border: 2px solid #8ba73b;\n  transition: 0.4s;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__navigation[_ngcontent-%COMP%]   .content__navigation__action[_ngcontent-%COMP%]   .navigation__action__login[_ngcontent-%COMP%]   .action__login__form[_ngcontent-%COMP%]   .login__form[_ngcontent-%COMP%]   .login__form__username[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__navigation[_ngcontent-%COMP%]   .content__navigation__action[_ngcontent-%COMP%]   .navigation__action__login[_ngcontent-%COMP%]   .action__login__form[_ngcontent-%COMP%]   .login__form[_ngcontent-%COMP%]   .login__form__password[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__navigation[_ngcontent-%COMP%]   .content__navigation__action[_ngcontent-%COMP%]   .navigation__action__login[_ngcontent-%COMP%]   .action__login__form[_ngcontent-%COMP%]   .login__form[_ngcontent-%COMP%]   .login__form__action[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__navigation[_ngcontent-%COMP%]   .content__navigation__action[_ngcontent-%COMP%]   .navigation__action__login[_ngcontent-%COMP%]   .action__login__form[_ngcontent-%COMP%]   .login__form[_ngcontent-%COMP%]   .login__form__action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n  background-color: #8ba73b;\n  font-size: 1.6rem;\n  padding: 2rem 0;\n  border-radius: 5rem;\n  color: #fff;\n  font-weight: bold;\n  cursor: pointer;\n  transition: 0.4s;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__navigation[_ngcontent-%COMP%]   .content__navigation__action[_ngcontent-%COMP%]   .navigation__action__login[_ngcontent-%COMP%]   .action__login__form[_ngcontent-%COMP%]   .login__form[_ngcontent-%COMP%]   .login__form__action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #7f9643;\n  transition: 0.4s;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__navigation[_ngcontent-%COMP%]   .content__navigation__action[_ngcontent-%COMP%]   .navigation__action__login[_ngcontent-%COMP%]   .action__login__form[_ngcontent-%COMP%]   .login__form__footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__navigation[_ngcontent-%COMP%]   .content__navigation__action[_ngcontent-%COMP%]   .navigation__action__login[_ngcontent-%COMP%]   .action__login__form[_ngcontent-%COMP%]   .login__form__footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #8ba73b;\n  font-size: 1.4rem;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__navigation[_ngcontent-%COMP%]   .content__navigation__action[_ngcontent-%COMP%]   .navigation__action__login[_ngcontent-%COMP%]   .action__login__form[_ngcontent-%COMP%]   .login__form__footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  -webkit-text-decoration-color: #8ba73b;\n          text-decoration-color: #8ba73b;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__navigation[_ngcontent-%COMP%]   .content__navigation__action[_ngcontent-%COMP%]   .navigation__action__login[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transition: 0.4s;\n  color: #8ba73b;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__navigation[_ngcontent-%COMP%]   .content__navigation__action[_ngcontent-%COMP%]   .navigation__action__login[_ngcontent-%COMP%]:hover   .action__login__form[_ngcontent-%COMP%] {\n  transition: 0.4s;\n  opacity: 1;\n  visibility: visible;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__navigation[_ngcontent-%COMP%]   .content__navigation__action[_ngcontent-%COMP%]   .navigation__action__wishlist[_ngcontent-%COMP%] {\n  width: 8%;\n  position: relative;\n  transition: 0.4s;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__navigation[_ngcontent-%COMP%]   .content__navigation__action[_ngcontent-%COMP%]   .navigation__action__wishlist[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 38%;\n  background-color: orange;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__navigation[_ngcontent-%COMP%]   .content__navigation__action[_ngcontent-%COMP%]   .navigation__action__wishlist[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: #8ba73b;\n  transition: 0.4s;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__navigation[_ngcontent-%COMP%]   .content__navigation__action[_ngcontent-%COMP%]   .navigation__action__cart[_ngcontent-%COMP%] {\n  width: 20%;\n  position: relative;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  transition: 0.4s;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__navigation[_ngcontent-%COMP%]   .content__navigation__action[_ngcontent-%COMP%]   .navigation__action__cart[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 16%;\n  background-color: #8ba73b;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__navigation[_ngcontent-%COMP%]   .content__navigation__action[_ngcontent-%COMP%]   .navigation__action__cart[_ngcontent-%COMP%]   .action__price[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: bold;\n  margin-left: 2.5rem;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__navigation[_ngcontent-%COMP%]   .content__navigation__action[_ngcontent-%COMP%]   .navigation__action__cart[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: #8ba73b;\n  transition: 0.4s;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__navigation[_ngcontent-%COMP%]   .content__navigation__nav[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 2rem;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__navigation[_ngcontent-%COMP%]   .content__navigation__nav[_ngcontent-%COMP%]   .nav__list[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__navigation[_ngcontent-%COMP%]   .content__navigation__nav[_ngcontent-%COMP%]   .nav__list[_ngcontent-%COMP%]   .nav__list--item[_ngcontent-%COMP%] {\n  margin-right: 2rem;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__navigation[_ngcontent-%COMP%]   .content__navigation__nav[_ngcontent-%COMP%]   .nav__list[_ngcontent-%COMP%]   .nav__list--item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-size: 1.6rem;\n  font-weight: bold;\n  color: black;\n  transition: 0.4s;\n}\n\n.header__container[_ngcontent-%COMP%]   .header__content[_ngcontent-%COMP%]   .header__content__navigation[_ngcontent-%COMP%]   .content__navigation__nav[_ngcontent-%COMP%]   .nav__list[_ngcontent-%COMP%]   .nav__list--item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #8ba73b;\n  transition: 0.4s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvREFUQS9Eb2N1bWVudHMvUHJvamVjdCBEYXRhL0FuZ3VsYXIgUHJvamVjdHMvZWxmd2F5LWRlbW8vc3JjL2FwcC9zaGFyZXMvYmFzZS5zY3NzIiwic3JjL2FwcC9zaGFyZXMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5zY3NzIiwiL21udC9EQVRBL0RvY3VtZW50cy9Qcm9qZWN0IERhdGEvQW5ndWxhciBQcm9qZWN0cy9lbGZ3YXktZGVtby9zcmMvYXBwL3NoYXJlcy9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUE7RUFDRSxjQVRnQjtBQ0FsQjs7QURZQTtFQUNFLFVBQUE7QUNURjs7QURZQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNURjs7QUNBQTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FER0Y7O0FDREU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0Z6QlM7RUUwQlQsaUJBQUE7RUFDQSxnQ0Z2Qlc7QUMwQmY7O0FDREk7RUFDRSxVQUFBO0VBN0JKLGFBQUE7RUErQkksK0JGNUJTO0FDK0JmOztBQ0FJO0VBQ0UsVUFBQTtFQW5DSixhQUFBO0VBcUNJLCtCRmxDUztFRVNiLGdCQUFBO0FENEJGOztBQ0NJO0VBQ0UsY0Y1Q1k7RUVjaEIsZ0JBQUE7QURnQ0Y7O0FDRUk7RUFDRSxVQUFBO0VBL0NKLGFBQUE7RUFZQSxnQkFBQTtBRHFDRjs7QUNHSTtFQUNFLGNGdkRZO0VFY2hCLGdCQUFBO0FEeUNGOztBQ0tFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FESEo7O0FDS0k7RUFDRSxVQUFBO0VBN0RKLGtCQUFBO0VBK0RJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FESE47O0FDS007RUFDRSxjQUFBO0VBQ0EsY0FBQTtBREhSOztBQ09JO0VBQ0UsVUFBQTtFQUNBLDhCRjVFUztFRUNiLGtCQUFBO0FEdUVGOztBQ09NO0VBQ0UsV0FBQTtBRExSOztBQ09RO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FETFY7O0FDT1U7RUFDRSxXQUFBO0VGOURWLDJCQUFBO0VBQ0EsbUJBQUE7RUFFRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUVGLGFBQUE7RUV4QkEsZ0JBQUE7QURpRkY7O0FDRVU7RUFDRSx5QkFBQTtFQXBGVixnQkFBQTtBRHFGRjs7QUNHVTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCRjdHTTtFRThHTixtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBbkdWLGdCQUFBO0FEbUdGOztBQ0lVO0VBQ0UseUJGbEhjO0VFVXhCLGdCQUFBO0FEdUdGOztBQ09NO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBdEhOLGdCQUFBO0FEa0hGOztBQ09RO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtBRExWOztBQ1FRO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUROVjs7QUNTUTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBakpSLGdCQUFBO0FEMklGOztBQ1NVO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBRFBaOztBQ1VVO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QURSWjs7QUNVWTtFQUNFLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBRFJkOztBQ2NjO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBRFpoQjs7QUNnQmdCO0VBQ0UscUJBQUE7RUFDQSxjRjVNQTtBQzhMbEI7O0FDaUJnQjtFQUNFLDBCQUFBO0VBQ0Esc0NGak5BO1VFaU5BLDhCRmpOQTtBQ2tNbEI7O0FDb0JZO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBRGxCZDs7QUNvQmU7RUFDQyxlQUFBO0FEbEJoQjs7QUNvQmdCO0VBQ0UsY0Y5Tkw7QUM0TWI7O0FDcUJpQjtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFRjFMakIsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ3dLRjs7QUNpQmlCO0VGckxmLHlCQUFBO0VBQ0EsZ0JBQUE7QUN1S0Y7O0FDa0JjO0VBQ0UsV0FBQTtBRGhCaEI7O0FDb0JjO0VBQ0UsV0FBQTtBRGxCaEI7O0FDcUJjO0VBQ0UsV0FBQTtBRG5CaEI7O0FDcUJnQjtFQUNFLFdBQUE7RUZsTWhCLFlBQUE7RUFDQSx5QkF6RGdCO0VBMERoQixpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ2dMRjs7QUNjZ0I7RUYxTGQseUJBaEV3QjtFQWlFeEIsZ0JBQUE7QUMrS0Y7O0FDaUJjO0VBQ0UsZ0JBQUE7QURmaEI7O0FDaUJnQjtFQUNFLHFCQUFBO0VBQ0EsY0YxUUE7RUUyUUEsaUJBQUE7QURmbEI7O0FDa0JnQjtFQUNFLDBCQUFBO0VBQ0Esc0NGaFJBO1VFZ1JBLDhCRmhSQTtBQ2dRbEI7O0FDdUJRO0VBQ0UsZUFBQTtFQTFRUixnQkFBQTtFQTRRUSxjRjFSUTtBQ3FRbEI7O0FDdUJVO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QURyQlo7O0FDeUJRO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBdlJSLGdCQUFBO0FEaVFGOztBQ3lCVTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSx3QkFBQTtBRHZCWjs7QUMyQlE7RUFDRSxlQUFBO0VBQ0EsY0ZsVFE7RUVjaEIsZ0JBQUE7QUQ0UUY7O0FDNEJRO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUE3U1IsZ0JBQUE7QURvUkY7O0FDNEJVO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLHlCRmxVTTtBQ3dTbEI7O0FDNkJVO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FEM0JaOztBQytCUTtFQUNFLGVBQUE7RUFDQSxjRjlVUTtFRWNoQixnQkFBQTtBRG9TRjs7QUNpQ007RUFDRSxXQUFBO0VBMVVOLGdCQUFBO0FENFNGOztBQ2lDUTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUQvQlY7O0FDaUNVO0VBQ0Usa0JBQUE7QUQvQlo7O0FDaUNZO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQXRWWixnQkFBQTtBRHdURjs7QUNrQ1k7RUFDRSxjRnpXSTtFRWNoQixnQkFBQTtBRDRURiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlcy9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3Itb3JhbmdlOiAjRjZBNjREO1xuJGNvbG9yLWdyZWVuOiAjOEJBNzNCO1xuJGNvbG9yLWhpZ2hsaWdodDogcmdiKDEzOSwxNjcsNTkpO1xuJGNvbG9yLXRleHQ6ICM2MjYyNjI7XG4kY29sb3ItYm9yZGVyOiAjZWRlY2VjO1xuJGNvbG9yLWJhY2tjb2xvci1pY29uOiAjZjJmNGVjO1xuJGNvbG9yLWJ0bi1iYW5uZXItLWhvdmVyOiAjN2Y5NjQzO1xuJGJvcmRlci1zdHlsZTogMXB4IHNvbGlkICNlMGRhZGE7XG5cblxuLmhpZ2hsaWdodC10ZXh0IHtcbiAgY29sb3I6ICRjb2xvci1oaWdobGlnaHQ7XG59XG5cbi5yZXF1aXJlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5zb2NpYWxfX2ljb25fX3N0eWxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDNyZW07XG4gIHdpZHRoOiAzcmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbkBtaXhpbiBpbnB1dC1zdHlsZS0tc2VhcmNoIHtcbiAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItcmFkaXVzOiA1cmVtO1xuICBwYWRkaW5nOiB7XG4gICAgdG9wOiAxLjVyZW07XG4gICAgYm90dG9tOiAxLjVyZW07XG4gICAgbGVmdDogMnJlbTtcbiAgICByaWdodDogMTJyZW07XG4gIH1cbiAgb3V0bGluZTogbm9uZTtcbn1cblxuQG1peGluIGlucHV0LXN0eWxlIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmF5O1xuICBwYWRkaW5nOiAycmVtO1xuICBib3JkZXItcmFkaXVzOiA1cmVtO1xuICB0cmFuc2l0aW9uOiAuNHM7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG5AbWl4aW4gaW5wdXQtc3R5bGUtLWZvY3VzIHtcbiAgYm9yZGVyOiAycHggc29saWQgJGNvbG9yLWhpZ2hsaWdodDtcbiAgdHJhbnNpdGlvbjogLjRzO1xufVxuXG5AbWl4aW4gYmFubmVyLWJ0biB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWhpZ2hsaWdodDtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIHBhZGRpbmc6IDJyZW0gMDtcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IC40cztcbn1cblxuQG1peGluIGJhbm5lci1idG4tLWhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJ0bi1iYW5uZXItLWhvdmVyO1xuICB0cmFuc2l0aW9uOiAuNHM7XG59XG5cbiIsIi5oaWdobGlnaHQtdGV4dCB7XG4gIGNvbG9yOiAjOGJhNzNiO1xufVxuXG4ucmVxdWlyZWQge1xuICBjb2xvcjogcmVkO1xufVxuXG4uc29jaWFsX19pY29uX19zdHlsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAzcmVtO1xuICB3aWR0aDogM3JlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uaGVhZGVyX19jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xufVxuLmhlYWRlcl9fY29udGFpbmVyIC5oZWFkZXJfX2luZm8ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICM2MjYyNjI7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZGFkYTtcbn1cbi5oZWFkZXJfX2NvbnRhaW5lciAuaGVhZGVyX19pbmZvIC5oZWFkZXJfX2luZm9fX29mZmVyIHtcbiAgd2lkdGg6IDcwJTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2UwZGFkYTtcbn1cbi5oZWFkZXJfX2NvbnRhaW5lciAuaGVhZGVyX19pbmZvIC5oZWFkZXJfX2luZm9fX2xvY2F0aW9uIHtcbiAgd2lkdGg6IDEwJTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2UwZGFkYTtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cbi5oZWFkZXJfX2NvbnRhaW5lciAuaGVhZGVyX19pbmZvIC5oZWFkZXJfX2luZm9fX2xvY2F0aW9uOmhvdmVyIHtcbiAgY29sb3I6ICM4YmE3M2I7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG4uaGVhZGVyX19jb250YWluZXIgLmhlYWRlcl9faW5mbyAuaGVhZGVyX19pbmZvX19waG9uZSB7XG4gIHdpZHRoOiAyMCU7XG4gIHBhZGRpbmc6IDFyZW07XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG4uaGVhZGVyX19jb250YWluZXIgLmhlYWRlcl9faW5mbyAuaGVhZGVyX19pbmZvX19waG9uZTpob3ZlciB7XG4gIGNvbG9yOiAjOGJhNzNiO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuLmhlYWRlcl9fY29udGFpbmVyIC5oZWFkZXJfX2NvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhlYWRlcl9fY29udGFpbmVyIC5oZWFkZXJfX2NvbnRlbnQgLmhlYWRlcl9fY29udGVudF9fbG9nbyB7XG4gIHdpZHRoOiAyMCU7XG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaGVhZGVyX19jb250YWluZXIgLmhlYWRlcl9fY29udGVudCAuaGVhZGVyX19jb250ZW50X19sb2dvIGltZyB7XG4gIHdpZHRoOiAxOS4ycmVtO1xuICBoZWlnaHQ6IDQuNXJlbTtcbn1cbi5oZWFkZXJfX2NvbnRhaW5lciAuaGVhZGVyX19jb250ZW50IC5oZWFkZXJfX2NvbnRlbnRfX25hdmlnYXRpb24ge1xuICB3aWR0aDogODAlO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlMGRhZGE7XG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcbn1cbi5oZWFkZXJfX2NvbnRhaW5lciAuaGVhZGVyX19jb250ZW50IC5oZWFkZXJfX2NvbnRlbnRfX25hdmlnYXRpb24gLmNvbnRlbnRfX25hdmlnYXRpb25fX3NlYXJjaCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmhlYWRlcl9fY29udGFpbmVyIC5oZWFkZXJfX2NvbnRlbnQgLmhlYWRlcl9fY29udGVudF9fbmF2aWdhdGlvbiAuY29udGVudF9fbmF2aWdhdGlvbl9fc2VhcmNoIC5zZWFyY2hfX2Zvcm0ge1xuICB3aWR0aDogNjAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaGVhZGVyX19jb250YWluZXIgLmhlYWRlcl9fY29udGVudCAuaGVhZGVyX19jb250ZW50X19uYXZpZ2F0aW9uIC5jb250ZW50X19uYXZpZ2F0aW9uX19zZWFyY2ggLnNlYXJjaF9fZm9ybSAuc2VhcmNoX19mb3JtX19pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XG4gIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgcGFkZGluZy1yaWdodDogMTJyZW07XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG4uaGVhZGVyX19jb250YWluZXIgLmhlYWRlcl9fY29udGVudCAuaGVhZGVyX19jb250ZW50X19uYXZpZ2F0aW9uIC5jb250ZW50X19uYXZpZ2F0aW9uX19zZWFyY2ggLnNlYXJjaF9fZm9ybSAuc2VhcmNoX19mb3JtX19pbnB1dDpmb2N1cyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM4YmE3M2I7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG4uaGVhZGVyX19jb250YWluZXIgLmhlYWRlcl9fY29udGVudCAuaGVhZGVyX19jb250ZW50X19uYXZpZ2F0aW9uIC5jb250ZW50X19uYXZpZ2F0aW9uX19zZWFyY2ggLnNlYXJjaF9fZm9ybSAuc2VhcmNoX19mb3JtX2J0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDExJTtcbiAgcmlnaHQ6IDElO1xuICBwYWRkaW5nOiAxcmVtIDNyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4YmE3M2I7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4YmE3M2I7XG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG4uaGVhZGVyX19jb250YWluZXIgLmhlYWRlcl9fY29udGVudCAuaGVhZGVyX19jb250ZW50X19uYXZpZ2F0aW9uIC5jb250ZW50X19uYXZpZ2F0aW9uX19zZWFyY2ggLnNlYXJjaF9fZm9ybSAuc2VhcmNoX19mb3JtX2J0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3Zjk2NDM7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG4uaGVhZGVyX19jb250YWluZXIgLmhlYWRlcl9fY29udGVudCAuaGVhZGVyX19jb250ZW50X19uYXZpZ2F0aW9uIC5jb250ZW50X19uYXZpZ2F0aW9uX19hY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuLmhlYWRlcl9fY29udGFpbmVyIC5oZWFkZXJfX2NvbnRlbnQgLmhlYWRlcl9fY29udGVudF9fbmF2aWdhdGlvbiAuY29udGVudF9fbmF2aWdhdGlvbl9fYWN0aW9uIC5hY3Rpb25fX2ljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogNHJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufVxuLmhlYWRlcl9fY29udGFpbmVyIC5oZWFkZXJfX2NvbnRlbnQgLmhlYWRlcl9fY29udGVudF9fbmF2aWdhdGlvbiAuY29udGVudF9fbmF2aWdhdGlvbl9fYWN0aW9uIC5ub3RpZmljYXRpb24ge1xuICB3aWR0aDogMi41cmVtO1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5oZWFkZXJfX2NvbnRhaW5lciAuaGVhZGVyX19jb250ZW50IC5oZWFkZXJfX2NvbnRlbnRfX25hdmlnYXRpb24gLmNvbnRlbnRfX25hdmlnYXRpb25fX2FjdGlvbiAubmF2aWdhdGlvbl9fYWN0aW9uX19sb2dpbiB7XG4gIHdpZHRoOiAxNCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuLmhlYWRlcl9fY29udGFpbmVyIC5oZWFkZXJfX2NvbnRlbnQgLmhlYWRlcl9fY29udGVudF9fbmF2aWdhdGlvbiAuY29udGVudF9fbmF2aWdhdGlvbl9fYWN0aW9uIC5uYXZpZ2F0aW9uX19hY3Rpb25fX2xvZ2luIC5hY3Rpb25fX2xvZ2luX190ZXh0IHtcbiAgd2lkdGg6IDYwJTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5oZWFkZXJfX2NvbnRhaW5lciAuaGVhZGVyX19jb250ZW50IC5oZWFkZXJfX2NvbnRlbnRfX25hdmlnYXRpb24gLmNvbnRlbnRfX25hdmlnYXRpb25fX2FjdGlvbiAubmF2aWdhdGlvbl9fYWN0aW9uX19sb2dpbiAuYWN0aW9uX19sb2dpbl9fZm9ybSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMzAlO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDI1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBjb2xvcjogIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBib3JkZXItdG9wOiAwLjVyZW0gc29saWQgIzhiYTczYjtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLmhlYWRlcl9fY29udGFpbmVyIC5oZWFkZXJfX2NvbnRlbnQgLmhlYWRlcl9fY29udGVudF9fbmF2aWdhdGlvbiAuY29udGVudF9fbmF2aWdhdGlvbl9fYWN0aW9uIC5uYXZpZ2F0aW9uX19hY3Rpb25fX2xvZ2luIC5hY3Rpb25fX2xvZ2luX19mb3JtIC5sb2dpbl9fZm9ybV9faGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICBwYWRkaW5nOiAxcmVtIDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5oZWFkZXJfX2NvbnRhaW5lciAuaGVhZGVyX19jb250ZW50IC5oZWFkZXJfX2NvbnRlbnRfX25hdmlnYXRpb24gLmNvbnRlbnRfX25hdmlnYXRpb25fX2FjdGlvbiAubmF2aWdhdGlvbl9fYWN0aW9uX19sb2dpbiAuYWN0aW9uX19sb2dpbl9fZm9ybSAubG9naW5fX2Zvcm1fX2hlYWRlciAubG9naW5fX2Zvcm1fX2hlYWRlci0tbGVmdCB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5oZWFkZXJfX2NvbnRhaW5lciAuaGVhZGVyX19jb250ZW50IC5oZWFkZXJfX2NvbnRlbnRfX25hdmlnYXRpb24gLmNvbnRlbnRfX25hdmlnYXRpb25fX2FjdGlvbiAubmF2aWdhdGlvbl9fYWN0aW9uX19sb2dpbiAuYWN0aW9uX19sb2dpbl9fZm9ybSAubG9naW5fX2Zvcm1fX2hlYWRlciAubG9naW5fX2Zvcm1fX2hlYWRlci0tcmlnaHQgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM4YmE3M2I7XG59XG4uaGVhZGVyX19jb250YWluZXIgLmhlYWRlcl9fY29udGVudCAuaGVhZGVyX19jb250ZW50X19uYXZpZ2F0aW9uIC5jb250ZW50X19uYXZpZ2F0aW9uX19hY3Rpb24gLm5hdmlnYXRpb25fX2FjdGlvbl9fbG9naW4gLmFjdGlvbl9fbG9naW5fX2Zvcm0gLmxvZ2luX19mb3JtX19oZWFkZXIgLmxvZ2luX19mb3JtX19oZWFkZXItLXJpZ2h0IGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjOGJhNzNiO1xufVxuLmhlYWRlcl9fY29udGFpbmVyIC5oZWFkZXJfX2NvbnRlbnQgLmhlYWRlcl9fY29udGVudF9fbmF2aWdhdGlvbiAuY29udGVudF9fbmF2aWdhdGlvbl9fYWN0aW9uIC5uYXZpZ2F0aW9uX19hY3Rpb25fX2xvZ2luIC5hY3Rpb25fX2xvZ2luX19mb3JtIC5sb2dpbl9fZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBwYWRkaW5nOiAxcmVtIDA7XG59XG4uaGVhZGVyX19jb250YWluZXIgLmhlYWRlcl9fY29udGVudCAuaGVhZGVyX19jb250ZW50X19uYXZpZ2F0aW9uIC5jb250ZW50X19uYXZpZ2F0aW9uX19hY3Rpb24gLm5hdmlnYXRpb25fX2FjdGlvbl9fbG9naW4gLmFjdGlvbl9fbG9naW5fX2Zvcm0gLmxvZ2luX19mb3JtIGRpdiB7XG4gIHBhZGRpbmc6IDFyZW0gMDtcbn1cbi5oZWFkZXJfX2NvbnRhaW5lciAuaGVhZGVyX19jb250ZW50IC5oZWFkZXJfX2NvbnRlbnRfX25hdmlnYXRpb24gLmNvbnRlbnRfX25hdmlnYXRpb25fX2FjdGlvbiAubmF2aWdhdGlvbl9fYWN0aW9uX19sb2dpbiAuYWN0aW9uX19sb2dpbl9fZm9ybSAubG9naW5fX2Zvcm0gZGl2IGxhYmVsIHtcbiAgY29sb3I6ICM2MjYyNjI7XG59XG4uaGVhZGVyX19jb250YWluZXIgLmhlYWRlcl9fY29udGVudCAuaGVhZGVyX19jb250ZW50X19uYXZpZ2F0aW9uIC5jb250ZW50X19uYXZpZ2F0aW9uX19hY3Rpb24gLm5hdmlnYXRpb25fX2FjdGlvbl9fbG9naW4gLmFjdGlvbl9fbG9naW5fX2Zvcm0gLmxvZ2luX19mb3JtIGRpdiBpbnB1dCB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyYXk7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuLmhlYWRlcl9fY29udGFpbmVyIC5oZWFkZXJfX2NvbnRlbnQgLmhlYWRlcl9fY29udGVudF9fbmF2aWdhdGlvbiAuY29udGVudF9fbmF2aWdhdGlvbl9fYWN0aW9uIC5uYXZpZ2F0aW9uX19hY3Rpb25fX2xvZ2luIC5hY3Rpb25fX2xvZ2luX19mb3JtIC5sb2dpbl9fZm9ybSBkaXYgaW5wdXQ6Zm9jdXMge1xuICBib3JkZXI6IDJweCBzb2xpZCAjOGJhNzNiO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuLmhlYWRlcl9fY29udGFpbmVyIC5oZWFkZXJfX2NvbnRlbnQgLmhlYWRlcl9fY29udGVudF9fbmF2aWdhdGlvbiAuY29udGVudF9fbmF2aWdhdGlvbl9fYWN0aW9uIC5uYXZpZ2F0aW9uX19hY3Rpb25fX2xvZ2luIC5hY3Rpb25fX2xvZ2luX19mb3JtIC5sb2dpbl9fZm9ybSAubG9naW5fX2Zvcm1fX3VzZXJuYW1lIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaGVhZGVyX19jb250YWluZXIgLmhlYWRlcl9fY29udGVudCAuaGVhZGVyX19jb250ZW50X19uYXZpZ2F0aW9uIC5jb250ZW50X19uYXZpZ2F0aW9uX19hY3Rpb24gLm5hdmlnYXRpb25fX2FjdGlvbl9fbG9naW4gLmFjdGlvbl9fbG9naW5fX2Zvcm0gLmxvZ2luX19mb3JtIC5sb2dpbl9fZm9ybV9fcGFzc3dvcmQge1xuICB3aWR0aDogMTAwJTtcbn1cbi5oZWFkZXJfX2NvbnRhaW5lciAuaGVhZGVyX19jb250ZW50IC5oZWFkZXJfX2NvbnRlbnRfX25hdmlnYXRpb24gLmNvbnRlbnRfX25hdmlnYXRpb25fX2FjdGlvbiAubmF2aWdhdGlvbl9fYWN0aW9uX19sb2dpbiAuYWN0aW9uX19sb2dpbl9fZm9ybSAubG9naW5fX2Zvcm0gLmxvZ2luX19mb3JtX19hY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbn1cbi5oZWFkZXJfX2NvbnRhaW5lciAuaGVhZGVyX19jb250ZW50IC5oZWFkZXJfX2NvbnRlbnRfX25hdmlnYXRpb24gLmNvbnRlbnRfX25hdmlnYXRpb25fX2FjdGlvbiAubmF2aWdhdGlvbl9fYWN0aW9uX19sb2dpbiAuYWN0aW9uX19sb2dpbl9fZm9ybSAubG9naW5fX2Zvcm0gLmxvZ2luX19mb3JtX19hY3Rpb24gYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhiYTczYjtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIHBhZGRpbmc6IDJyZW0gMDtcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG4uaGVhZGVyX19jb250YWluZXIgLmhlYWRlcl9fY29udGVudCAuaGVhZGVyX19jb250ZW50X19uYXZpZ2F0aW9uIC5jb250ZW50X19uYXZpZ2F0aW9uX19hY3Rpb24gLm5hdmlnYXRpb25fX2FjdGlvbl9fbG9naW4gLmFjdGlvbl9fbG9naW5fX2Zvcm0gLmxvZ2luX19mb3JtIC5sb2dpbl9fZm9ybV9fYWN0aW9uIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3Zjk2NDM7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG4uaGVhZGVyX19jb250YWluZXIgLmhlYWRlcl9fY29udGVudCAuaGVhZGVyX19jb250ZW50X19uYXZpZ2F0aW9uIC5jb250ZW50X19uYXZpZ2F0aW9uX19hY3Rpb24gLm5hdmlnYXRpb25fX2FjdGlvbl9fbG9naW4gLmFjdGlvbl9fbG9naW5fX2Zvcm0gLmxvZ2luX19mb3JtX19mb290ZXIgcCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uaGVhZGVyX19jb250YWluZXIgLmhlYWRlcl9fY29udGVudCAuaGVhZGVyX19jb250ZW50X19uYXZpZ2F0aW9uIC5jb250ZW50X19uYXZpZ2F0aW9uX19hY3Rpb24gLm5hdmlnYXRpb25fX2FjdGlvbl9fbG9naW4gLmFjdGlvbl9fbG9naW5fX2Zvcm0gLmxvZ2luX19mb3JtX19mb290ZXIgcCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzhiYTczYjtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG4uaGVhZGVyX19jb250YWluZXIgLmhlYWRlcl9fY29udGVudCAuaGVhZGVyX19jb250ZW50X19uYXZpZ2F0aW9uIC5jb250ZW50X19uYXZpZ2F0aW9uX19hY3Rpb24gLm5hdmlnYXRpb25fX2FjdGlvbl9fbG9naW4gLmFjdGlvbl9fbG9naW5fX2Zvcm0gLmxvZ2luX19mb3JtX19mb290ZXIgcCBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogIzhiYTczYjtcbn1cbi5oZWFkZXJfX2NvbnRhaW5lciAuaGVhZGVyX19jb250ZW50IC5oZWFkZXJfX2NvbnRlbnRfX25hdmlnYXRpb24gLmNvbnRlbnRfX25hdmlnYXRpb25fX2FjdGlvbiAubmF2aWdhdGlvbl9fYWN0aW9uX19sb2dpbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgY29sb3I6ICM4YmE3M2I7XG59XG4uaGVhZGVyX19jb250YWluZXIgLmhlYWRlcl9fY29udGVudCAuaGVhZGVyX19jb250ZW50X19uYXZpZ2F0aW9uIC5jb250ZW50X19uYXZpZ2F0aW9uX19hY3Rpb24gLm5hdmlnYXRpb25fX2FjdGlvbl9fbG9naW46aG92ZXIgLmFjdGlvbl9fbG9naW5fX2Zvcm0ge1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuLmhlYWRlcl9fY29udGFpbmVyIC5oZWFkZXJfX2NvbnRlbnQgLmhlYWRlcl9fY29udGVudF9fbmF2aWdhdGlvbiAuY29udGVudF9fbmF2aWdhdGlvbl9fYWN0aW9uIC5uYXZpZ2F0aW9uX19hY3Rpb25fX3dpc2hsaXN0IHtcbiAgd2lkdGg6IDglO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG4uaGVhZGVyX19jb250YWluZXIgLmhlYWRlcl9fY29udGVudCAuaGVhZGVyX19jb250ZW50X19uYXZpZ2F0aW9uIC5jb250ZW50X19uYXZpZ2F0aW9uX19hY3Rpb24gLm5hdmlnYXRpb25fX2FjdGlvbl9fd2lzaGxpc3QgLm5vdGlmaWNhdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAzOCU7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbn1cbi5oZWFkZXJfX2NvbnRhaW5lciAuaGVhZGVyX19jb250ZW50IC5oZWFkZXJfX2NvbnRlbnRfX25hdmlnYXRpb24gLmNvbnRlbnRfX25hdmlnYXRpb25fX2FjdGlvbiAubmF2aWdhdGlvbl9fYWN0aW9uX193aXNobGlzdDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICM4YmE3M2I7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG4uaGVhZGVyX19jb250YWluZXIgLmhlYWRlcl9fY29udGVudCAuaGVhZGVyX19jb250ZW50X19uYXZpZ2F0aW9uIC5jb250ZW50X19uYXZpZ2F0aW9uX19hY3Rpb24gLm5hdmlnYXRpb25fX2FjdGlvbl9fY2FydCB7XG4gIHdpZHRoOiAyMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuLmhlYWRlcl9fY29udGFpbmVyIC5oZWFkZXJfX2NvbnRlbnQgLmhlYWRlcl9fY29udGVudF9fbmF2aWdhdGlvbiAuY29udGVudF9fbmF2aWdhdGlvbl9fYWN0aW9uIC5uYXZpZ2F0aW9uX19hY3Rpb25fX2NhcnQgLm5vdGlmaWNhdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAxNiU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4YmE3M2I7XG59XG4uaGVhZGVyX19jb250YWluZXIgLmhlYWRlcl9fY29udGVudCAuaGVhZGVyX19jb250ZW50X19uYXZpZ2F0aW9uIC5jb250ZW50X19uYXZpZ2F0aW9uX19hY3Rpb24gLm5hdmlnYXRpb25fX2FjdGlvbl9fY2FydCAuYWN0aW9uX19wcmljZSB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWxlZnQ6IDIuNXJlbTtcbn1cbi5oZWFkZXJfX2NvbnRhaW5lciAuaGVhZGVyX19jb250ZW50IC5oZWFkZXJfX2NvbnRlbnRfX25hdmlnYXRpb24gLmNvbnRlbnRfX25hdmlnYXRpb25fX2FjdGlvbiAubmF2aWdhdGlvbl9fYWN0aW9uX19jYXJ0OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzhiYTczYjtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cbi5oZWFkZXJfX2NvbnRhaW5lciAuaGVhZGVyX19jb250ZW50IC5oZWFkZXJfX2NvbnRlbnRfX25hdmlnYXRpb24gLmNvbnRlbnRfX25hdmlnYXRpb25fX25hdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuLmhlYWRlcl9fY29udGFpbmVyIC5oZWFkZXJfX2NvbnRlbnQgLmhlYWRlcl9fY29udGVudF9fbmF2aWdhdGlvbiAuY29udGVudF9fbmF2aWdhdGlvbl9fbmF2IC5uYXZfX2xpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaGVhZGVyX19jb250YWluZXIgLmhlYWRlcl9fY29udGVudCAuaGVhZGVyX19jb250ZW50X19uYXZpZ2F0aW9uIC5jb250ZW50X19uYXZpZ2F0aW9uX19uYXYgLm5hdl9fbGlzdCAubmF2X19saXN0LS1pdGVtIHtcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xufVxuLmhlYWRlcl9fY29udGFpbmVyIC5oZWFkZXJfX2NvbnRlbnQgLmhlYWRlcl9fY29udGVudF9fbmF2aWdhdGlvbiAuY29udGVudF9fbmF2aWdhdGlvbl9fbmF2IC5uYXZfX2xpc3QgLm5hdl9fbGlzdC0taXRlbSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBibGFjaztcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cbi5oZWFkZXJfX2NvbnRhaW5lciAuaGVhZGVyX19jb250ZW50IC5oZWFkZXJfX2NvbnRlbnRfX25hdmlnYXRpb24gLmNvbnRlbnRfX25hdmlnYXRpb25fX25hdiAubmF2X19saXN0IC5uYXZfX2xpc3QtLWl0ZW0gYTpob3ZlciB7XG4gIGNvbG9yOiAjOGJhNzNiO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufSIsIkBpbXBvcnQgXCJzcmMvYXBwL3NoYXJlcy9iYXNlXCI7XG5cbi8vR2xvYmFsIFN0eWxlc1xuQG1peGluIGluZm8tLXBhZGRpbmcge1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG5AbWl4aW4gY29udGVudC0tcGFkZGluZyB7XG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcbn1cblxuQG1peGluIGNvbnRlbnQtLW5hdmlnYXRpb24tLW1hcmdpbi10b3Age1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbi0taG92ZXIge1xuICB0cmFuc2l0aW9uOiAuNHM7XG59XG5cbi5oZWFkZXJfX2NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAuNXJlbTtcblxuICAuaGVhZGVyX19pbmZvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6ICRjb2xvci10ZXh0O1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIGJvcmRlci1ib3R0b206ICRib3JkZXItc3R5bGU7XG5cbiAgICAuaGVhZGVyX19pbmZvX19vZmZlciB7XG4gICAgICB3aWR0aDogNzAlO1xuICAgICAgQGluY2x1ZGUgaW5mby0tcGFkZGluZztcbiAgICAgIGJvcmRlci1yaWdodDogJGJvcmRlci1zdHlsZTtcbiAgICB9XG5cbiAgICAuaGVhZGVyX19pbmZvX19sb2NhdGlvbiB7XG4gICAgICB3aWR0aDogMTAlO1xuICAgICAgQGluY2x1ZGUgaW5mby0tcGFkZGluZztcbiAgICAgIGJvcmRlci1yaWdodDogJGJvcmRlci1zdHlsZTtcbiAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24tLWhvdmVyO1xuICAgIH1cblxuICAgIC5oZWFkZXJfX2luZm9fX2xvY2F0aW9uOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAkY29sb3ItaGlnaGxpZ2h0O1xuICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbi0taG92ZXI7XG4gICAgfVxuXG4gICAgLmhlYWRlcl9faW5mb19fcGhvbmUge1xuICAgICAgd2lkdGg6IDIwJTtcbiAgICAgIEBpbmNsdWRlIGluZm8tLXBhZGRpbmc7XG4gICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uLS1ob3ZlcjtcbiAgICB9XG5cbiAgICAuaGVhZGVyX19pbmZvX19waG9uZTpob3ZlciB7XG4gICAgICBjb2xvcjogJGNvbG9yLWhpZ2hsaWdodDtcbiAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24tLWhvdmVyO1xuICAgIH1cbiAgfVxuXG4gIC5oZWFkZXJfX2NvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAuaGVhZGVyX19jb250ZW50X19sb2dvIHtcbiAgICAgIHdpZHRoOiAyMCU7XG4gICAgICBAaW5jbHVkZSBjb250ZW50LS1wYWRkaW5nO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDE5LjJyZW07XG4gICAgICAgIGhlaWdodDogNC41cmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5oZWFkZXJfX2NvbnRlbnRfX25hdmlnYXRpb24ge1xuICAgICAgd2lkdGg6IDgwJTtcbiAgICAgIGJvcmRlci1sZWZ0OiAkYm9yZGVyLXN0eWxlO1xuICAgICAgQGluY2x1ZGUgY29udGVudC0tcGFkZGluZztcblxuICAgICAgLmNvbnRlbnRfX25hdmlnYXRpb25fX3NlYXJjaCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIC5zZWFyY2hfX2Zvcm0ge1xuICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgLnNlYXJjaF9fZm9ybV9faW5wdXQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBAaW5jbHVkZSBpbnB1dC1zdHlsZS0tc2VhcmNoO1xuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbi0taG92ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNlYXJjaF9fZm9ybV9faW5wdXQ6Zm9jdXMge1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGNvbG9yLWhpZ2hsaWdodDtcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24tLWhvdmVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zZWFyY2hfX2Zvcm1fYnRuIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMTElO1xuICAgICAgICAgICAgcmlnaHQ6IDElO1xuICAgICAgICAgICAgcGFkZGluZzogMXJlbSAzcmVtO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWhpZ2hsaWdodDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1oaWdobGlnaHQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbi0taG92ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNlYXJjaF9fZm9ybV9idG46aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJ0bi1iYW5uZXItLWhvdmVyO1xuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbi0taG92ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5jb250ZW50X19uYXZpZ2F0aW9uX19hY3Rpb24ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBAaW5jbHVkZSBjb250ZW50LS1uYXZpZ2F0aW9uLS1tYXJnaW4tdG9wO1xuXG4gICAgICAgIC5hY3Rpb25fX2ljb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogNHJlbTtcbiAgICAgICAgICBoZWlnaHQ6IDRyZW07XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ub3RpZmljYXRpb24ge1xuICAgICAgICAgIHdpZHRoOiAyLjVyZW07XG4gICAgICAgICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZpZ2F0aW9uX19hY3Rpb25fX2xvZ2luIHtcbiAgICAgICAgICB3aWR0aDogMTQlO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24tLWhvdmVyO1xuXG4gICAgICAgICAgLmFjdGlvbl9fbG9naW5fX3RleHQge1xuICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYWN0aW9uX19sb2dpbl9fZm9ybSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDEzMCU7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAyNTAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjVyZW07XG4gICAgICAgICAgICBib3JkZXItdG9wOiAuNXJlbSBzb2xpZCAkY29sb3ItaGlnaGxpZ2h0O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogLjRzO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcblxuICAgICAgICAgICAgLmxvZ2luX19mb3JtX19oZWFkZXIge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMDtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAgIHNwYW4ge1xuXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAubG9naW5fX2Zvcm1fX2hlYWRlci0tbGVmdCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAubG9naW5fX2Zvcm1fX2hlYWRlci0tcmlnaHQge1xuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1oaWdobGlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogJGNvbG9yLWhpZ2hsaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxvZ2luX19mb3JtIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMDtcblxuICAgICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDA7XG5cbiAgICAgICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLXRleHQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGlucHV0LXN0eWxlO1xuICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgaW5wdXQ6Zm9jdXMge1xuICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGlucHV0LXN0eWxlLS1mb2N1cztcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmxvZ2luX19mb3JtX191c2VybmFtZSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5sb2dpbl9fZm9ybV9fcGFzc3dvcmQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmxvZ2luX19mb3JtX19hY3Rpb24ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgYmFubmVyLWJ0bjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBidXR0b246aG92ZXIge1xuICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgYmFubmVyLWJ0bi0taG92ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5sb2dpbl9fZm9ybV9fZm9vdGVyIHtcbiAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1oaWdobGlnaHQ7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAkY29sb3ItaGlnaGxpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZpZ2F0aW9uX19hY3Rpb25fX2xvZ2luOmhvdmVyIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbi0taG92ZXI7XG4gICAgICAgICAgY29sb3I6ICRjb2xvci1oaWdobGlnaHQ7XG5cbiAgICAgICAgICAuYWN0aW9uX19sb2dpbl9fZm9ybSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAuNHM7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAubmF2aWdhdGlvbl9fYWN0aW9uX193aXNobGlzdCB7XG4gICAgICAgICAgd2lkdGg6IDglO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uLS1ob3ZlcjtcblxuICAgICAgICAgIC5ub3RpZmljYXRpb24ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMzglO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZpZ2F0aW9uX19hY3Rpb25fX3dpc2hsaXN0OmhvdmVyIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgY29sb3I6ICRjb2xvci1oaWdobGlnaHQ7XG4gICAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbi0taG92ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2aWdhdGlvbl9fYWN0aW9uX19jYXJ0IHtcbiAgICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24tLWhvdmVyO1xuXG4gICAgICAgICAgLm5vdGlmaWNhdGlvbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAxNiU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItaGlnaGxpZ2h0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hY3Rpb25fX3ByaWNlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMi41cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZpZ2F0aW9uX19hY3Rpb25fX2NhcnQ6aG92ZXIge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBjb2xvcjogJGNvbG9yLWhpZ2hsaWdodDtcbiAgICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uLS1ob3ZlcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuY29udGVudF9fbmF2aWdhdGlvbl9fbmF2IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIEBpbmNsdWRlIGNvbnRlbnQtLW5hdmlnYXRpb24tLW1hcmdpbi10b3A7XG5cbiAgICAgICAgLm5hdl9fbGlzdCB7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgLm5hdl9fbGlzdC0taXRlbSB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG5cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uLS1ob3ZlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItaGlnaGxpZ2h0O1xuICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uLS1ob3ZlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav-bar',
          templateUrl: './nav-bar.component.html',
          styleUrls: ['./nav-bar.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /mnt/DATA/Documents/Project Data/Angular Projects/elfway-demo/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map