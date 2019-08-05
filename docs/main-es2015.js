(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n  <app-categorias></app-categorias>\r\n\r\n\r\n  <app-productos></app-productos>\r\n\r\n  <app-carrito></app-carrito>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/carrito/carrito.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/carrito/carrito.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"_servVirtualShop.view == 'carrito'\">\r\n\r\n    <header>\r\n        <div class=\"header__bg\"></div>\r\n\r\n        <h1 id=\"title\">My cart:</h1>\r\n        <!-- <img src=\"http://erikdkennedy.com/r-r-r-random/divider-triangle.png\" class=\"divider\" /> -->\r\n    </header>\r\n\r\n  <div class=\"container mt-5\">\r\n\r\n    <div class=\"row\">\r\n        <button (click)=\"back()\" id=\"backBtn\" class=\"btn btn-info btn-lg mt-5\">Go back</button>\r\n    </div>\r\n    <div class=\"row\">\r\n\r\n      <table class=\"col-7 table table-striped table-responsive table-dark \">\r\n        <thead>\r\n          <th class=\"w-50\">Item</th>\r\n          <th class=\"w-25\">Price</th>\r\n          <th class=\"w-25\">Amount</th>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let element of _servVirtualShop.arrCart;let i = 'index'\">\r\n            <td>{{element[\"name\"]}}</td>\r\n            <td>{{element[\"price\"]}}{{element[\"unit\"]}}</td>\r\n            <td><button class=\"btn btn-outline-danger\" id=\"reduceAmount\" (click)=\"reduceAmount(i)\">-</button>&nbsp;&nbsp;{{element[\"amount\"]}}&nbsp;&nbsp;\r\n              <button class=\"btn btn-outline-success\" id=\"increaseAmount\" (click)=\"increaseAmount(i)\">+</button></td>\r\n           <!--  <td>\r\n            <nav aria-label=\"Page navigation example\">\r\n                <ul class=\"pagination\">\r\n                  \r\n                  <li class=\"page-item \"><a class=\"page-link\" id=\"reduceAmount\" href=\"#\">-</a></li>\r\n                  <li class=\"page-item\">&nbsp;{{element[\"amount\"]}}&nbsp;</li>\r\n                  <li class=\"page-item increaseAmount\"><a class=\"page-link\" href=\"#\">+</a></li>\r\n                  \r\n                </ul>\r\n              </nav>\r\n            </td> -->\r\n\r\n          </tr>\r\n        </tbody>\r\n        <tfoot>\r\n          <th style=\"text-align: right\">Total cost:</th>\r\n          <th>{{_servVirtualShop.totalCost}}$</th>\r\n          <th><button class=\"btn btn-success\" (click)=\"checkout()\" data-toggle=\"modal\" data-target=\"#saleConfirmedModal\" [disabled] = \"_servVirtualShop.numProducts() == 0\"><i class=\"fas fa-shopping-cart\"></i></button></th>\r\n        </tfoot>\r\n      </table>\r\n\r\n\r\n\r\n      <!--  -->\r\n      <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" id=\"saleConfirmedModal\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h5 class=\"modal-title\">Sale complete!</h5>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <p>Thank you very much for your purchase.</p>\r\n              <p>Do not hesitate to continue browsing our products!</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-primary\" (click)=\"_servVirtualShop.setView('categories')\">OK</button>\r\n              <!-- <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--  -->\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/categorias/categorias.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/categorias/categorias.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"_servVirtualShop.view == 'categories'\">\r\n  <div style=\"padding-bottom: 70px\"></div>\r\n\r\n  <div class=\"container\">\r\n    <ol class=\"list\">\r\n      <li *ngFor=\"let element of _servVirtualShop.arrCategories; let i = 'index'\">\r\n        <h4 (click)=\"loadProd(element['id'])\"> {{element[\"name\"]}}</h4>\r\n      </li>\r\n\r\n\r\n    </ol>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Fixed navbar -->\r\n\r\n\r\n\r\n<nav class=\"navbar navbar-expand-sm navbar-dark bg-dark fixed-top\">\r\n  <a class=\"navbar-brand\" href=\"#\" (click)=\"home()\">My shop!</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\"\r\n    aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\r\n      <div class=\"dropdown\">\r\n          <button class=\"btn btn-dark dropdown-toggle ml-5\" type=\"button\" data-toggle=\"dropdown\">Categories\r\n          <span class=\"caret\"></span></button>\r\n          <ul class=\"dropdown-menu bg-dark text-white ml-5\">\r\n              <li *ngFor=\"let element of _servVirtualShop.arrCategories; let i = 'index'\" class=\"ml-2\">\r\n                  <p (click)=\"loadProd(element['id'])\"> {{element[\"name\"]}}</p>\r\n                </li>\r\n          </ul>\r\n        </div>\r\n\r\n    <form class=\"form-inline mt-2 mt-md-0 ml-auto\">\r\n      <button class=\"btn btn-outline-success my-2 my-sm-0 ml-auto mr-3\" type=\"button\" (click)=\"checkout()\"><i\r\n          class=\"fas fa-shopping-cart\"></i><span\r\n          class=\"badge\">{{_servVirtualShop.numProducts()}}</span></button>\r\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\r\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n    </form>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/productos/productos.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/productos/productos.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"_servVirtualShop.view == 'products'\">\r\n\r\n<header>\r\n    <div class=\"header__bg\"></div>\r\n\r\n    <h1 id=\"title\">{{_servVirtualShop.currentCategory}}</h1>\r\n    <!-- <img src=\"http://erikdkennedy.com/r-r-r-random/divider-triangle.png\" class=\"divider\" /> -->\r\n</header>\r\n  <div class=\"container mt-5\">\r\n      \r\n\r\n    <div class=\"row justify-content-center mb-2\">\r\n      <button (click)=\"back()\" id=\"backBtn\" class=\"btn btn-info btn-lg\">Go back</button>\r\n      <button (click)=\"checkout()\" id=\"checkoutBtn\" class=\"btn btn-success btn-lg\">Checkout  <i\r\n        class=\"fas fa-shopping-cart\"></i></button>\r\n    </div>\r\n    <div class=\"row\">\r\n\r\n\r\n\r\n\r\n\r\n      <!--  -->\r\n\r\n      <div class=\"col-md-4\" *ngFor=\"let element of _servVirtualShop.arrProducts\">\r\n        <figure class=\"card card-product\">\r\n          <div class=\"img-wrap\"><img src=\"{{element['imageURL']}}\"></div>\r\n          <figcaption class=\"info-wrap\">\r\n            <h4 class=\"title\">{{element[\"name\"]}}</h4>\r\n            <p class=\"desc\">{{element[\"description\"]}}</p>\r\n            <div class=\"rating-wrap\">\r\n              <div class=\"label-rating\">132 reviews</div>\r\n              <div class=\"label-rating\">154 orders </div>\r\n            </div> <!-- rating-wrap.// -->\r\n          </figcaption>\r\n          <div class=\"bottom-wrap\">\r\n            <!-- <a href=\"\" class=\"btn btn-sm btn-primary float-right\">Order Now</a>  -->\r\n            <button class=\"btn btn-sm btn-primary float-right\" (click)=\"addCart(element)\">Add to cart</button>\r\n            <div class=\"price-wrap h5\">\r\n              <span class=\"price-new\"> New price {{element[\"price\"]}}{{element[\"unit\"]}}</span> <br> <del\r\n                class=\"price-old\">{{element[\"price\"]*1.25}}{{element[\"unit\"]}}</del>\r\n            </div> <!-- price-wrap.// -->\r\n          </div> <!-- bottom-wrap.// -->\r\n        </figure>\r\n      </div> <!-- col // -->\r\n      <!--  -->\r\n\r\n      <!-- <div class=\"card col-4\" *ngFor=\"let element of _servVirtualShop.arrProducts\">\r\n          \r\n        <div class=\"img-wrap\"><img src=\"{{element['imageURL']}}\" alt=\"\"></div>\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">{{element[\"name\"]}}</h5>\r\n          <p class=\"card-text\">{{element[\"description\"]}}</p>\r\n          <button (click)=\"addCart(element)\" class=\"btn btn-primary\">Add to cart</button>\r\n          <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n        </div>\r\n      </div> -->\r\n\r\n      <!-- <div class=\"col-6\" *ngFor=\"let element of _servVirtualShop.arrProducts\">\r\n        <ul>\r\n          <li>\r\n                <button (click)=\"addCart(element)\">Add to cart</button>\r\n\r\n            <h4>{{element[\"name\"]}} </h4>\r\n            <h5>{{element[\"price\"]}}{{element[\"unit\"]}}</h5>\r\n            <img style=\"height: 150px; width: auto; float: right;\" src=\"{{element['imageURL']}}\" alt=\"\">\r\n\r\n            <p style=\"text-align: justify\">{{element[\"description\"]}}</p>\r\n            \r\n\r\n          </li>\r\n\r\n        </ul>\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_serv_virtual_shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/-serv-virtual-shop.service */ "./src/app/services/-serv-virtual-shop.service.ts");



let AppComponent = class AppComponent {
    constructor(_servVirtualShop) {
        this._servVirtualShop = _servVirtualShop;
        this.title = 'TiendaVirtual';
        this.view = "categories";
    }
    ngOnInit() {
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_serv_virtual_shop_service__WEBPACK_IMPORTED_MODULE_2__["ServVirtualShopService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _categorias_categorias_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categorias/categorias.component */ "./src/app/categorias/categorias.component.ts");
/* harmony import */ var _productos_productos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./productos/productos.component */ "./src/app/productos/productos.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _carrito_carrito_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./carrito/carrito.component */ "./src/app/carrito/carrito.component.ts");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _categorias_categorias_component__WEBPACK_IMPORTED_MODULE_4__["CategoriasComponent"],
            _productos_productos_component__WEBPACK_IMPORTED_MODULE_5__["ProductosComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
            _carrito_carrito_component__WEBPACK_IMPORTED_MODULE_7__["CarritoComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/carrito/carrito.component.css":
/*!***********************************************!*\
  !*** ./src/app/carrito/carrito.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#backBtn {\r\n  border: 2px solid black;\r\n  margin: 0 1em 1em 1em;\r\n  border-radius: 15px 15px;\r\n}\r\n\r\n\r\n#reduceAmount, #increaseAmount {\r\n width: 2.5em;\r\n  }\r\n\r\n\r\n/* #reduceAmount::before {\r\n  content: '';\r\n  display: block;\r\n  width: 10px;\r\n  position: absolute;\r\n  right: -10px;\r\n  height: 100%;\r\n  top: 0;\r\n  background: transparent url('data:image/svg+xml; charset=utf-8,<svg width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 10 20\" preserveAspectRatio=\"none\"><path d=\"m0,0 l10,10 l-10,10 l-0,-20z\" stroke-width=\"1.5\" fill=\"#000\"/></svg>') 0 0 no-repeat;\r\n}\r\n */\r\n\r\n\r\n#title{\r\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\r\n  }\r\n\r\n\r\nheader {\r\n    position: relative;\r\n    height: 300px;\r\n    overflow: hidden;\r\n  }\r\n\r\n\r\n.header__bg {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#6eb6f1), to(#3d698e));\r\n    background-image: linear-gradient(#6eb6f1, #3d698e);\r\n    -webkit-transform: skewY(-6deg);\r\n            transform: skewY(-6deg);\r\n    -webkit-transform-origin: top left;\r\n            transform-origin: top left;\r\n  }\r\n\r\n\r\nh1 {\r\n    margin: 0;\r\n    padding: 100px 0;\r\n    font: 44px \"Arial\";\r\n    text-align: center;\r\n  }\r\n\r\n\r\nheader h1 {\r\n    position: relative;\r\n    color: white;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fycml0by9jYXJyaXRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLHdCQUF3QjtBQUMxQjs7O0FBR0E7Q0FDQyxZQUFZO0VBQ1g7OztBQUdGOzs7Ozs7Ozs7O0VBVUU7OztBQUVEO0lBQ0csc0VBQXNFO0VBQ3hFOzs7QUFFRDtJQUNHLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCOzs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULFFBQVE7SUFDUixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWiw2RkFBbUQ7SUFBbkQsbURBQW1EO0lBQ25ELCtCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsa0NBQTBCO1lBQTFCLDBCQUEwQjtFQUM1Qjs7O0FBRUE7SUFDRSxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7OztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZCIsImZpbGUiOiJzcmMvYXBwL2NhcnJpdG8vY2Fycml0by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JhY2tCdG4ge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIG1hcmdpbjogMCAxZW0gMWVtIDFlbTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHg7XHJcbn1cclxuXHJcblxyXG4jcmVkdWNlQW1vdW50LCAjaW5jcmVhc2VBbW91bnQge1xyXG4gd2lkdGg6IDIuNWVtO1xyXG4gIH1cclxuICBcclxuXHJcbi8qICNyZWR1Y2VBbW91bnQ6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAtMTBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybCgnZGF0YTppbWFnZS9zdmcreG1sOyBjaGFyc2V0PXV0Zi04LDxzdmcgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDEwIDIwXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIj48cGF0aCBkPVwibTAsMCBsMTAsMTAgbC0xMCwxMCBsLTAsLTIwelwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIGZpbGw9XCIjMDAwXCIvPjwvc3ZnPicpIDAgMCBuby1yZXBlYXQ7XHJcbn1cclxuICovXHJcblxyXG4gI3RpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6IEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgJ0FyaWFsIE5hcnJvdyBCb2xkJywgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgXHJcbiBoZWFkZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkZXJfX2JnIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCM2ZWI2ZjEsICMzZDY5OGUpO1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WSgtNmRlZyk7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcclxuICB9XHJcbiAgXHJcbiAgaDEge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMTAwcHggMDtcclxuICAgIGZvbnQ6IDQ0cHggXCJBcmlhbFwiO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICBoZWFkZXIgaDEge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/carrito/carrito.component.ts":
/*!**********************************************!*\
  !*** ./src/app/carrito/carrito.component.ts ***!
  \**********************************************/
/*! exports provided: CarritoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarritoComponent", function() { return CarritoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_serv_virtual_shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/-serv-virtual-shop.service */ "./src/app/services/-serv-virtual-shop.service.ts");



let CarritoComponent = class CarritoComponent {
    constructor(_servVirtualShop) {
        this._servVirtualShop = _servVirtualShop;
    }
    back() {
        this._servVirtualShop.setView(this._servVirtualShop.previous);
    }
    checkout() {
        this._servVirtualShop.checkout();
    }
    reduceAmount(i) {
        this._servVirtualShop.reduceAmount(i);
    }
    increaseAmount(i) {
        this._servVirtualShop.increaseAmount(i);
    }
    ngOnInit() {
    }
};
CarritoComponent.ctorParameters = () => [
    { type: _services_serv_virtual_shop_service__WEBPACK_IMPORTED_MODULE_2__["ServVirtualShopService"] }
];
CarritoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-carrito',
        template: __webpack_require__(/*! raw-loader!./carrito.component.html */ "./node_modules/raw-loader/index.js!./src/app/carrito/carrito.component.html"),
        styles: [__webpack_require__(/*! ./carrito.component.css */ "./src/app/carrito/carrito.component.css")]
    })
], CarritoComponent);



/***/ }),

/***/ "./src/app/categorias/categorias.component.css":
/*!*****************************************************!*\
  !*** ./src/app/categorias/categorias.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li h4 {\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\nli h4:hover{\r\n    cursor: pointer;\r\n    color: orangered;\r\n    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\r\n}\r\n.list{\r\n    font-size: 1.5rem;\r\n    text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;\r\n}\r\n.container {\r\n    margin-left: 10%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmlhcy9jYXRlZ29yaWFzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpRUFBaUU7QUFDckU7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpRUFBaUU7QUFDckU7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpYXMvY2F0ZWdvcmlhcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGkgaDQge1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcbmxpIGg0OmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IG9yYW5nZXJlZDtcclxuICAgIHRleHQtc2hhZG93OiAtMXB4IDAgYmxhY2ssIDAgMXB4IGJsYWNrLCAxcHggMCBibGFjaywgMCAtMXB4IGJsYWNrO1xyXG59XHJcblxyXG4ubGlzdHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgdGV4dC1zaGFkb3c6IC0xcHggMCB3aGl0ZSwgMCAxcHggd2hpdGUsIDFweCAwIHdoaXRlLCAwIC0xcHggd2hpdGU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/categorias/categorias.component.ts":
/*!****************************************************!*\
  !*** ./src/app/categorias/categorias.component.ts ***!
  \****************************************************/
/*! exports provided: CategoriasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasComponent", function() { return CategoriasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_serv_virtual_shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/-serv-virtual-shop.service */ "./src/app/services/-serv-virtual-shop.service.ts");



let CategoriasComponent = class CategoriasComponent {
    constructor(_servVirtualShop) {
        this._servVirtualShop = _servVirtualShop;
        this.listCategories = [];
        this.loadCat();
    }
    loadCat() {
        /* this.listCategories = */
        this._servVirtualShop.getCategories("https://raw.githubusercontent.com/JoseHervas/fullstack-bootcamp/master/Contents/01-Front-end/03-JavaScript/02-jQuery/03-AJAX/dummyShop/categories.json");
    }
    loadProd(id) {
        /* this.listCategories = */
        this._servVirtualShop.getProducts(id);
    }
    ngOnInit() { }
};
CategoriasComponent.ctorParameters = () => [
    { type: _services_serv_virtual_shop_service__WEBPACK_IMPORTED_MODULE_2__["ServVirtualShopService"] }
];
CategoriasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categorias',
        template: __webpack_require__(/*! raw-loader!./categorias.component.html */ "./node_modules/raw-loader/index.js!./src/app/categorias/categorias.component.html"),
        styles: [__webpack_require__(/*! ./categorias.component.css */ "./src/app/categorias/categorias.component.css")]
    })
], CategoriasComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-menu li:hover{\r\n    cursor: pointer;\r\n    font-weight: bolder;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bi1tZW51IGxpOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_serv_virtual_shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/-serv-virtual-shop.service */ "./src/app/services/-serv-virtual-shop.service.ts");



let NavbarComponent = class NavbarComponent {
    constructor(_servVirtualShop) {
        this._servVirtualShop = _servVirtualShop;
    }
    checkout() {
        this._servVirtualShop.loadCart(this._servVirtualShop.view);
    }
    home() {
        console.log("home");
        this._servVirtualShop.setView("categories");
    }
    loadProd(id) {
        /* this.listCategories = */
        this._servVirtualShop.getProducts(id);
    }
    ngOnInit() {
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _services_serv_virtual_shop_service__WEBPACK_IMPORTED_MODULE_2__["ServVirtualShopService"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/productos/productos.component.css":
/*!***************************************************!*\
  !*** ./src/app/productos/productos.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".desc {\r\n  font-size: 0.8rem;\r\n  text-align: justify;\r\n}\r\n\r\n.card-product .img-wrap {\r\n  border-radius: 3px 3px 0 0;\r\n  overflow: hidden;\r\n  position: relative;\r\n  height: 220px;\r\n  text-align: center;\r\n}\r\n\r\n.card-product .img-wrap img {\r\n  max-height: 100%;\r\n  max-width: 100%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  margin: 1em;\r\n}\r\n\r\n.card-product .info-wrap {\r\n  overflow: hidden;\r\n  padding: 15px;\r\n  border-top: 1px solid #eee;\r\n}\r\n\r\n.card-product .bottom-wrap {\r\n  padding: 15px;\r\n  border-top: 1px solid #eee;\r\n}\r\n\r\n.label-rating {\r\n  margin-right: 10px;\r\n  color: #333;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n}\r\n\r\n.card-product .price-old {\r\n  color: #999;\r\n}\r\n\r\n.card-product {\r\n  margin-bottom: 2em;\r\n  border: 2px solid darkblue;\r\n}\r\n\r\nbutton {\r\n  border: 2px solid black;\r\n  margin-right: 1em;\r\n  margin-left: 1em;\r\n  border-radius: 15px 15px;\r\n}\r\n\r\n#title{\r\n  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\r\n}\r\n\r\n/*  */\r\n\r\nheader {\r\n  position: relative;\r\n  height: 300px;\r\n  overflow: hidden;\r\n}\r\n\r\n.header__bg {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#6eb6f1), to(#3d698e));\r\n  background-image: linear-gradient(#6eb6f1, #3d698e);\r\n  -webkit-transform: skewY(-6deg);\r\n          transform: skewY(-6deg);\r\n  -webkit-transform-origin: top left;\r\n          transform-origin: top left;\r\n}\r\n\r\nh1 {\r\n  margin: 0;\r\n  padding: 100px 0;\r\n  font: 44px \"Arial\";\r\n  text-align: center;\r\n}\r\n\r\nheader h1 {\r\n  position: relative;\r\n  color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdG9zL3Byb2R1Y3Rvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHNFQUFzRTtBQUN4RTs7QUFFQSxLQUFLOztBQUVMO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxRQUFRO0VBQ1IsT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osNkZBQW1EO0VBQW5ELG1EQUFtRDtFQUNuRCwrQkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGtDQUEwQjtVQUExQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdG9zL3Byb2R1Y3Rvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc2Mge1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi5jYXJkLXByb2R1Y3QgLmltZy13cmFwIHtcclxuICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDIyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmQtcHJvZHVjdCAuaW1nLXdyYXAgaW1nIHtcclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBtYXJnaW46IDFlbTtcclxufVxyXG5cclxuLmNhcmQtcHJvZHVjdCAuaW5mby13cmFwIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XHJcbn1cclxuXHJcbi5jYXJkLXByb2R1Y3QgLmJvdHRvbS13cmFwIHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xyXG59XHJcblxyXG4ubGFiZWwtcmF0aW5nIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5jYXJkLXByb2R1Y3QgLnByaWNlLW9sZCB7XHJcbiAgY29sb3I6ICM5OTk7XHJcbn1cclxuXHJcbi5jYXJkLXByb2R1Y3Qge1xyXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcclxuICBib3JkZXI6IDJweCBzb2xpZCBkYXJrYmx1ZTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweDtcclxufVxyXG5cclxuI3RpdGxle1xyXG4gIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi8qICAqL1xyXG5cclxuaGVhZGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uaGVhZGVyX19iZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCM2ZWI2ZjEsICMzZDY5OGUpO1xyXG4gIHRyYW5zZm9ybTogc2tld1koLTZkZWcpO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDEwMHB4IDA7XHJcbiAgZm9udDogNDRweCBcIkFyaWFsXCI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5oZWFkZXIgaDEge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/productos/productos.component.ts":
/*!**************************************************!*\
  !*** ./src/app/productos/productos.component.ts ***!
  \**************************************************/
/*! exports provided: ProductosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosComponent", function() { return ProductosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_serv_virtual_shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/-serv-virtual-shop.service */ "./src/app/services/-serv-virtual-shop.service.ts");



let ProductosComponent = class ProductosComponent {
    constructor(_servVirtualShop) {
        this._servVirtualShop = _servVirtualShop;
        this.carrito = [];
    }
    back() {
        this._servVirtualShop.setView("categories");
    }
    addCart(producto) {
        let alreadyAdded = this.carrito.indexOf(producto);
        if (alreadyAdded < 0) {
            this.carrito.push(producto);
            this.carrito[this.carrito.length - 1]["amount"] = 1;
        }
        else {
            this.carrito[alreadyAdded]["amount"]++;
        }
        this._servVirtualShop.updateCart(this.carrito);
    }
    checkout() {
        this._servVirtualShop.loadCart("products");
    }
    ngOnInit() { }
};
ProductosComponent.ctorParameters = () => [
    { type: _services_serv_virtual_shop_service__WEBPACK_IMPORTED_MODULE_2__["ServVirtualShopService"] }
];
ProductosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-productos',
        template: __webpack_require__(/*! raw-loader!./productos.component.html */ "./node_modules/raw-loader/index.js!./src/app/productos/productos.component.html"),
        styles: [__webpack_require__(/*! ./productos.component.css */ "./src/app/productos/productos.component.css")]
    })
], ProductosComponent);



/***/ }),

/***/ "./src/app/services/-serv-virtual-shop.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/-serv-virtual-shop.service.ts ***!
  \********************************************************/
/*! exports provided: ServVirtualShopService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServVirtualShopService", function() { return ServVirtualShopService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ServVirtualShopService = class ServVirtualShopService {
    constructor() {
        this.arrCategories = [];
        this.arrProducts = [];
        this.arrCart = [];
        this.totalCost = 0;
        this.view = "categories";
        this.previous = "";
        this.currentCategory = "";
    }
    updateCart(newCart) {
        this.arrCart = newCart;
    }
    numProducts() {
        let num = 0;
        for (let i = 0; i < this.arrCart.length; i++) {
            num += this.arrCart[i]["amount"];
        }
        return num;
    }
    loadCart(previousView) {
        this.view = "carrito";
        this.previous = previousView;
        this.totalCost = 0;
        for (let i = 0; i < this.arrCart.length; i++) {
            this.totalCost += this.arrCart[i]["price"] * this.arrCart[i]["amount"];
        }
    }
    checkout() {
        this.httpPostAsync("https://cors-anywhere.herokuapp.com/https://myonlineshop.requestcatcher.com/test", this.afterSold);
    }
    afterSold(arrCart) {
        arrCart.splice(0, arrCart.length);
    }
    httpPostAsync(url, callback) {
        let body = JSON.stringify(this.arrCart);
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = () => {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                callback(this.arrCart);
            }
        };
        xmlHttp.open("POST", url, true); // true for asynchronous
        xmlHttp.send(body);
    }
    setView(newView) {
        this.view = newView;
        // console.log(this.view)
    }
    getCategories(url) {
        // console.log(url)
        this.httpGetAsync(url, this.loadCategories, this.arrCategories);
    }
    httpGetAsync(url, callback, arrItems) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                callback(JSON.parse(xmlHttp.responseText), arrItems);
            }
        };
        xmlHttp.open("GET", url, true); // true for asynchronous
        xmlHttp.send(null);
    }
    loadCategories(categoriesData, arrCategories) {
        for (let i = 0; i < categoriesData["categories"].length; i++) {
            arrCategories.push(categoriesData["categories"][i]);
        }
        console.log("loaded categories: ", arrCategories);
    }
    getProducts(id) {
        this.arrProducts = [];
        let url = "https://raw.githubusercontent.com/JoseHervas/fullstack-bootcamp/master/Contents/01-Front-end/03-JavaScript/02-jQuery/03-AJAX/dummyShop/" + id + ".json";
        this.currentCategory = this.arrCategories[id - 1]["name"];
        this.httpGetAsync(url, this.loadProducts, this.arrProducts);
        this.view = "products";
    }
    loadProducts(productsData, arrProducts) {
        for (let i = 0; i < productsData["products"].length; i++) {
            arrProducts.push(productsData["products"][i]);
        }
    }
    reduceAmount(i) {
        if (this.arrCart[i]["amount"] > 0) {
            this.arrCart[i]["amount"]--;
            this.totalCost -= this.arrCart[i]["price"];
        }
    }
    increaseAmount(i) {
        this.arrCart[i]["amount"]++;
        this.totalCost += this.arrCart[i]["price"];
    }
};
ServVirtualShopService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ServVirtualShopService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\eric_\Desktop\Workspace\Angular\Online_Shop\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map