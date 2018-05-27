(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-quote></app-quote>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quote */ "./src/app/quote.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.quotes = [
            new _quote__WEBPACK_IMPORTED_MODULE_1__["Quote"](0, 'dfdsf', 'ssdfsdf', 'dsaf', 0, 0, new Date("a few ago"))
        ];
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _quote_quote_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quote/quote.component */ "./src/app/quote/quote.component.ts");
/* harmony import */ var _quote_info_quote_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quote-info/quote-info.component */ "./src/app/quote-info/quote-info.component.ts");
/* harmony import */ var _quote_form_quote_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quote-form/quote-form.component */ "./src/app/quote-form/quote-form.component.ts");
/* harmony import */ var _time_ago_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./time-ago.pipe */ "./src/app/time-ago.pipe.ts");
/* harmony import */ var _highlight_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./highlight.directive */ "./src/app/highlight.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _quote_quote_component__WEBPACK_IMPORTED_MODULE_4__["QuoteComponent"],
                _quote_info_quote_info_component__WEBPACK_IMPORTED_MODULE_5__["QuoteInfoComponent"],
                _quote_form_quote_form_component__WEBPACK_IMPORTED_MODULE_6__["QuoteFormComponent"],
                _time_ago_pipe__WEBPACK_IMPORTED_MODULE_7__["TimeAgoPipe"],
                _highlight_directive__WEBPACK_IMPORTED_MODULE_8__["HighlightDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/highlight.directive.ts":
/*!****************************************!*\
  !*** ./src/app/highlight.directive.ts ***!
  \****************************************/
/*! exports provided: HighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function() { return HighlightDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HighlightDirective = /** @class */ (function () {
    function HighlightDirective(el) {
        el.nativeElement.style.background = 'yellow';
    }
    HighlightDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appHighlight]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HighlightDirective);
    return HighlightDirective;
}());



/***/ }),

/***/ "./src/app/quote-form/quote-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/quote-form/quote-form.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#label{\n  padding-left: 36px;\n}\n.form-control{\n  margin-left: 30%;\n}\n.btn{\n  margin-left: 30%;\n}\n"

/***/ }),

/***/ "./src/app/quote-form/quote-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/quote-form/quote-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"conatainer-fluid\">\n  <div class=\"row\">\n    <form (ngSubmit)='submitQuote()' #quoteForm='ngForm'>\n      <div class=\"form-group\">\n        <label id=\"label\"for=\"quote\">Enter Quote:</label>\n        <textarea class=\"form-control\" id=\"quote\" rows=\"8\" [(ngModel)]=\"newQuote.quoteDisplay\" name=\"quoteDisplay\" #quoteDisplay=\"ngModel\"></textarea>\n      </div>\n      <div class=\"form-group\">\n        <label id=\"label\" for=\"author\">Author:</label>\n        <input type=\"text\" class=\"form-control\" id=\"author\" [(ngModel)]=\"newQuote.author\" name=\"author\" #author=\"ngModel\">\n      </div>\n      <div class=\"form-group\">\n        <label id=\"label\" for=\"submittedBy\">Submitted By:</label>\n        <input type=\"text\" class=\"form-control\" id=\"submittedBy\" [(ngModel)]=\"newQuote.submittedBy\" name=\"submittedBy\" #submittedBy=\"ngModel\">\n      </div>\n\n      <button class=\"btn btn-outline-info\" type=\"submit\">Add Quote</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/quote-form/quote-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/quote-form/quote-form.component.ts ***!
  \****************************************************/
/*! exports provided: QuoteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteFormComponent", function() { return QuoteFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../quote */ "./src/app/quote.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuoteFormComponent = /** @class */ (function () {
    function QuoteFormComponent() {
        this.newQuote = new _quote__WEBPACK_IMPORTED_MODULE_1__["Quote"](0, "", "", "", 0, 0, new Date());
        this.addQuote = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    QuoteFormComponent.prototype.submitQuote = function () {
        this.addQuote.emit(this.newQuote);
        this.newQuote = new _quote__WEBPACK_IMPORTED_MODULE_1__["Quote"](0, "", "", "", 0, 0, new Date());
    };
    QuoteFormComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], QuoteFormComponent.prototype, "addQuote", void 0);
    QuoteFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quote-form',
            template: __webpack_require__(/*! ./quote-form.component.html */ "./src/app/quote-form/quote-form.component.html"),
            styles: [__webpack_require__(/*! ./quote-form.component.css */ "./src/app/quote-form/quote-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuoteFormComponent);
    return QuoteFormComponent;
}());



/***/ }),

/***/ "./src/app/quote-info/quote-info.component.css":
/*!*****************************************************!*\
  !*** ./src/app/quote-info/quote-info.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/quote-info/quote-info.component.html":
/*!******************************************************!*\
  !*** ./src/app/quote-info/quote-info.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <p>Author:{{quote.author}} and submitted by:{{quote.submittedBy}}</p>\n  <p>{{quote.timePost | timeAgo}}</p>\n\n  <button class=\"btn btn-outline-danger\" (click)='quoteDelete(true)'>Delete Quote</button>\n</div>\n"

/***/ }),

/***/ "./src/app/quote-info/quote-info.component.ts":
/*!****************************************************!*\
  !*** ./src/app/quote-info/quote-info.component.ts ***!
  \****************************************************/
/*! exports provided: QuoteInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteInfoComponent", function() { return QuoteInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../quote */ "./src/app/quote.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuoteInfoComponent = /** @class */ (function () {
    function QuoteInfoComponent() {
        this.quote = _quote__WEBPACK_IMPORTED_MODULE_1__["Quote"];
        this.isComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    QuoteInfoComponent.prototype.quoteDelete = function (complete) {
        this.isComplete.emit(complete);
    };
    QuoteInfoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], QuoteInfoComponent.prototype, "quote", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], QuoteInfoComponent.prototype, "isComplete", void 0);
    QuoteInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quote-info',
            template: __webpack_require__(/*! ./quote-info.component.html */ "./src/app/quote-info/quote-info.component.html"),
            styles: [__webpack_require__(/*! ./quote-info.component.css */ "./src/app/quote-info/quote-info.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuoteInfoComponent);
    return QuoteInfoComponent;
}());



/***/ }),

/***/ "./src/app/quote.ts":
/*!**************************!*\
  !*** ./src/app/quote.ts ***!
  \**************************/
/*! exports provided: Quote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quote", function() { return Quote; });
var Quote = /** @class */ (function () {
    function Quote(id, quoteDisplay, author, submittedBy, upvote, downvote, timePost) {
        this.id = id;
        this.quoteDisplay = quoteDisplay;
        this.author = author;
        this.submittedBy = submittedBy;
        this.upvote = upvote;
        this.downvote = downvote;
        this.timePost = timePost;
        this.upvote = 0;
        this.downvote = 0;
        this.timePost = new Date();
    }
    return Quote;
}());



/***/ }),

/***/ "./src/app/quote/quote.component.css":
/*!*******************************************!*\
  !*** ./src/app/quote/quote.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\n  text-align: center;\n}\n.container-fluid{\n  background-color: black;\n  color: red;\n}\n.container{\n  background-color: black;\n  color: red;\n}\n"

/***/ }),

/***/ "./src/app/quote/quote.component.html":
/*!********************************************!*\
  !*** ./src/app/quote/quote.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Quote</h1>\n  <div class=\"note row\">\n    <app-quote-form (addQuote)=\"addNewQuote($event)\"></app-quote-form>\n  </div>\n  <div class=\"container-fluid\" *ngFor='let quote of quotes;let i = index'>\n    <p appHighlight *ngIf=\"getHighest()===quote.upvote && quote.upvote>0\">{{quote.quoteDisplay}}</p>\n    <p *ngIf=\"getHighest()!==quote.upvote || quote.upvote===0\">{{quote.quoteDisplay}}</p>\n\n    <app-quote-info [quote]='quote' (isComplete)='deleteQuote($event,i)'></app-quote-info>\n\n    <div class=\"row\">\n      <div (click)=\"upV(i)\" class=\"col-md-6\">\n        Upvote : {{quote.upvote}}\n      </div>\n      <div (click)=\"downV(i)\" class=\"col-md-6\">\n        Downvote : {{quote.downvote}}\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/quote/quote.component.ts":
/*!******************************************!*\
  !*** ./src/app/quote/quote.component.ts ***!
  \******************************************/
/*! exports provided: QuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteComponent", function() { return QuoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuoteComponent = /** @class */ (function () {
    function QuoteComponent() {
        this.quotes = [];
    }
    QuoteComponent.prototype.upV = function (id) {
        this.quotes[id].upvote += 1;
    };
    QuoteComponent.prototype.downV = function (id) {
        this.quotes[id].downvote += 1;
    };
    QuoteComponent.prototype.addNewQuote = function (quote) {
        var quoteLength = this.quotes.length;
        quote.id = quoteLength + 1;
        this.quotes.push(quote);
    };
    QuoteComponent.prototype.deleteQuote = function (isComplete, index) {
        if (isComplete) {
            this.quotes.splice(index, 1);
        }
    };
    QuoteComponent.prototype.voteGet = function (i) {
        return this.quotes[i].upvote - this.quotes[i].downvote;
    };
    QuoteComponent.prototype.getHighest = function () {
        var highestVotes = this.quotes.reduce(function (l, e) {
            return e.upvote > l.upvote ? e : l;
        });
        return highestVotes.upvote;
    };
    QuoteComponent.prototype.ngOnInit = function () {
    };
    QuoteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quote',
            template: __webpack_require__(/*! ./quote.component.html */ "./src/app/quote/quote.component.html"),
            styles: [__webpack_require__(/*! ./quote.component.css */ "./src/app/quote/quote.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuoteComponent);
    return QuoteComponent;
}());



/***/ }),

/***/ "./src/app/time-ago.pipe.ts":
/*!**********************************!*\
  !*** ./src/app/time-ago.pipe.ts ***!
  \**********************************/
/*! exports provided: TimeAgoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeAgoPipe", function() { return TimeAgoPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimeAgoPipe = /** @class */ (function () {
    function TimeAgoPipe(ChangeDetectorRef, NgZone) {
        this.ChangeDetectorRef = ChangeDetectorRef;
        this.NgZone = NgZone;
    }
    TimeAgoPipe.prototype.transform = function (value) {
        var _this = this;
        this.removeTimer();
        var t = new Date(value);
        var rightNow = new Date();
        var seconds = Math.round(Math.abs((rightNow.getTime() - t.getTime()) / 1000));
        var postToUpdate = (Number.isNaN(seconds)) ? 1000 : this.getSecondsUntilUpdate(seconds) * 1000;
        this.timer = this.NgZone.runOutsideAngular(function () {
            if (typeof window !== 'undefined') {
                return window.setTimeout(function () {
                    _this.NgZone.run(function () { return _this.ChangeDetectorRef.markForCheck(); });
                }, postToUpdate);
            }
            return null;
        });
        var minutes = Math.round(Math.abs(seconds / 60));
        var hours = Math.round(Math.abs(minutes / 60));
        var days = Math.round(Math.abs(hours / 24));
        var months = Math.round(Math.abs(days / 30.416));
        var years = Math.round(Math.abs(days / 365));
        if (Number.isNaN(seconds)) {
            return '';
        }
        else if (seconds <= 45) {
            return 'a few seconds ago';
        }
        else if (seconds <= 90) {
            return 'a minute ago';
        }
        else if (minutes <= 45) {
            return minutes + ' minutes ago';
        }
        else if (minutes <= 90) {
            return 'an hour ago';
        }
        else if (hours <= 22) {
            return hours + ' hours ago';
        }
        else if (hours <= 36) {
            return 'a day ago';
        }
        else if (days <= 25) {
            return days + ' days ago';
        }
        else if (days <= 45) {
            return 'a month ago';
        }
        else if (days <= 345) {
            return months + ' months ago';
        }
        else if (days <= 545) {
            return 'a year ago';
        }
        else {
            return years + ' years ago';
        }
    };
    TimeAgoPipe.prototype.ngOnDestroy = function () {
        this.removeTimer();
    };
    TimeAgoPipe.prototype.removeTimer = function () {
        if (this.timer) {
            window.clearTimeout(this.timer);
            this.timer = null;
        }
    };
    TimeAgoPipe.prototype.getSecondsUntilUpdate = function (seconds) {
        var min = 60;
        var hr = min * 60;
        var day = hr * 24;
        if (seconds < min) {
            return 3;
        }
        else if (seconds < hr) {
            return 30;
        }
        else if (seconds < day) {
            return 300;
        }
        else {
            return 3600;
        }
    };
    TimeAgoPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'timeAgo',
            pure: false
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], TimeAgoPipe);
    return TimeAgoPipe;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sam/angular/Quote/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map