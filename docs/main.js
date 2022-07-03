"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _image_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image.service */ 637);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-bar */ 9782);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ 3346);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 7317);











function AppComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading Images.... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mat-progress-bar", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_mat_grid_list_42_mat_grid_tile_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-grid-tile")(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-grid-tile-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const img_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", img_r3.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", img_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](img_r3.description);
} }
function AppComponent_mat_grid_list_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-grid-list", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_mat_grid_list_42_mat_grid_tile_1_Template, 5, 3, "mat-grid-tile", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("gutterSize", "10px");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.imageData)("ngForTrackBy", ctx_r1.trackByFn);
} }
class AppComponent {
    constructor(_imgService) {
        this._imgService = _imgService;
        this.title = 'Angular-Imgur-Gallery';
        this.sectionCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('hot');
        this.sortCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('viral');
        this.wndowCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('day');
        this.imageData = [];
        this.images = [];
        this.isLoading = false;
    }
    ngOnInit() {
        this.fetchImages();
    }
    reload() {
        this.fetchImages();
    }
    fetchImages() {
        this.imageData.splice(0, this.imageData.length);
        this.isLoading = true;
        this.ImagesSubscription = this._imgService.getImages(this.sectionCtrl.value, this.sortCtrl.value, this.wndowCtrl.value)
            .subscribe(res => {
            var _a;
            this.isLoading = false;
            if (res.data && ((_a = res.data) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                this.images = res.data;
                this.images
                    .filter(x => x.images_count > 0)
                    .map(y => {
                    y.images
                        .filter(z => z.type === 'image/jpeg' || z.type === 'image/png')
                        .map(p => this.imageData.push(p));
                });
            }
        }, (err) => {
            var _a, _b;
            this.isLoading = false;
            alert(JSON.stringify((_b = (_a = err.error) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.error));
            console.log(err);
        });
    }
    trackByFn(index, el) {
        return el.id;
    }
    ngOnDestroy() {
        this.ImagesSubscription.unsubscribe();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_image_service__WEBPACK_IMPORTED_MODULE_0__.ImageService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["my-app"]], decls: 43, vars: 6, consts: [[2, "height", "50px", "background-color", "rgb(15, 156, 238)", "color", "white", "vertical-align", "middle", "text-align", "center"], [1, "searchCriteria"], ["appearance", "outline"], [3, "formControl"], ["value", "hot"], ["value", "top"], ["value", "user"], ["appearance", "outline", 2, "margin-left", "5px"], ["value", "viral"], ["value", "time"], ["value", "day"], ["value", "week"], ["value", "month"], ["value", "year"], ["value", "all"], ["mat-raised-button", "", "color", "primary", 2, "margin-left", "5px", 3, "disabled", "click"], [4, "ngIf"], [1, "imgContainer"], ["cols", "4", "rowHeight", "2:1", 3, "gutterSize", 4, "ngIf"], ["mode", "indeterminate"], ["cols", "4", "rowHeight", "2:1", 3, "gutterSize"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "src", "alt"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "IMGUR GALLERY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1)(4, "mat-form-field", 2)(5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Select Section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-select", 3)(8, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Hot");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Top");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-form-field", 7)(15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Select Sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-select", 3)(18, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Viral");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Top");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-form-field", 7)(25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Select Window");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-select", 3)(28, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_38_listener() { return ctx.reload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Load Images");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, AppComponent_div_40_Template, 3, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, AppComponent_mat_grid_list_42_Template, 2, 3, "mat-grid-list", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.sectionCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.sortCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.wndowCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.imageData.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__.MatProgressBar, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__.MatGridTile, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__.MatGridTileText, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__.MatGridTileFooterCssMatStyler, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton], styles: ["p[_ngcontent-%COMP%] {\n  font-family: Lato;\n}\n\n\n\n.imgContainer[_ngcontent-%COMP%]{\n  max-height: 75%;\n  overflow-y: scroll;\n  border: 5px solid rgb(171, 171, 241);\n  background-color: rgb(185, 243, 158);\n  \n}\n\n.searchCriteria[_ngcontent-%COMP%]{\n  background-color: rgb(247, 243, 222);\n  align-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBOzs7O0dBSUc7O0FBRUg7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyxvQ0FBb0M7RUFDcEMsd0NBQXdDO0FBQzFDOztBQUlBO0VBQ0Usb0NBQW9DO0VBQ3BDLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICBmb250LWZhbWlseTogTGF0bztcbn1cblxuLyogLmltZ3tcbiAgbWFyZ2luOiAxMHB4O1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xufSAqL1xuXG4uaW1nQ29udGFpbmVye1xuICBtYXgtaGVpZ2h0OiA3NSU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgYm9yZGVyOiA1cHggc29saWQgcmdiKDE3MSwgMTcxLCAyNDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg1LCAyNDMsIDE1OCk7XG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImJnSW1nLmpwZ1wiKTsgKi9cbn1cblxuXG5cbi5zZWFyY2hDcml0ZXJpYXtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMjQzLCAyMjIpO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _hello_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hello.component */ 8324);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/grid-list */ 3346);
/* harmony import */ var _image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image.service */ 637);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-bar */ 9782);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [_image_service__WEBPACK_IMPORTED_MODULE_2__.ImageService], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__.MatProgressBarModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__.MatGridListModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _hello_component__WEBPACK_IMPORTED_MODULE_1__.HelloComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__.MatProgressBarModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__.MatGridListModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule] }); })();


/***/ }),

/***/ 8324:
/*!************************************!*\
  !*** ./src/app/hello.component.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelloComponent": () => (/* binding */ HelloComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class HelloComponent {
}
HelloComponent.ɵfac = function HelloComponent_Factory(t) { return new (t || HelloComponent)(); };
HelloComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HelloComponent, selectors: [["hello"]], inputs: { name: "name" }, decls: 2, vars: 1, template: function HelloComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hello ", ctx.name, "!");
    } }, styles: ["h1[_ngcontent-%COMP%] { font-family: Lato; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbGxvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxLQUFLLGlCQUFpQixFQUFFIiwiZmlsZSI6ImhlbGxvLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbImgxIHsgZm9udC1mYW1pbHk6IExhdG87IH0iXX0= */"] });


/***/ }),

/***/ 637:
/*!**********************************!*\
  !*** ./src/app/image.service.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageService": () => (/* binding */ ImageService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class ImageService {
    constructor(_httpclient) {
        this._httpclient = _httpclient;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Client-ID ${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.CLIENT_ID}`
        });
    }
    getImages(section, sort, wndow) {
        return this._httpclient.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.IMGUR_API_ENDPOINT}/${section}/${sort}/${wndow}.json`, { headers: this.headers });
    }
    handleError(err) {
    }
}
ImageService.ɵfac = function ImageService_Factory(t) { return new (t || ImageService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ImageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ImageService, factory: ImageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    IMGUR_API_ENDPOINT: 'https://api.imgur.com/3/gallery',
    CLIENT_ID: '3c9187c5272944b'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills */ 7435);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 6747);



_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule).then(ref => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherwise, log the boot error
}).catch(err => console.error(err));


/***/ }),

/***/ 7435:
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone */ 3484);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/
// import 'core-js/es6/reflect';
// import 'core-js/es7/reflect';
/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map