"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SharedModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var card_1 = require("@angular/material/card");
var sidenav_1 = require("@angular/material/sidenav");
var flex_layout_1 = require("@angular/flex-layout");
var list_1 = require("@angular/material/list");
var icon_1 = require("@angular/material/icon");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            declarations: [],
            imports: [
                common_1.CommonModule,
                card_1.MatCardModule,
                sidenav_1.MatSidenavModule,
                flex_layout_1.FlexLayoutModule,
                list_1.MatListModule,
                icon_1.MatIconModule
            ],
            exports: [
                card_1.MatCardModule,
                sidenav_1.MatSidenavModule,
                flex_layout_1.FlexLayoutModule,
                list_1.MatListModule,
                icon_1.MatIconModule
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;