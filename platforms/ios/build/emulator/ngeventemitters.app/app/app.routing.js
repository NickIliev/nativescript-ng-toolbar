"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var first_component_1 = require("./pages/first.component");
var second_component_1 = require("./pages/second.component");
var third_component_1 = require("./pages/third.component");
var main_component_1 = require("./pages/main.component");
var routes = [
    { path: "", redirectTo: "/main/(pagesOutlet:first)", pathMatch: "full" },
    { path: "main", component: main_component_1.MainComponent, children: [
            { path: "first", component: first_component_1.FirstComponent, outlet: "pagesOutlet" },
            { path: "second", component: second_component_1.SecondComponent, outlet: "pagesOutlet" },
            { path: "third", component: third_component_1.ThirdComponent, outlet: "pagesOutlet" }
        ] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFHdkUsMkRBQXlEO0FBQ3pELDZEQUEyRDtBQUMzRCwyREFBeUQ7QUFDekQseURBQXVEO0FBRXZELElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsMkJBQTJCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUN4RSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUUsUUFBUSxFQUFFO1lBQ2hELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFO1lBQ25FLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFHO1lBQ3RFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFHO1NBQ3ZFLEVBQUU7Q0FDTixDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEZpcnN0Q29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvZmlyc3QuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTZWNvbmRDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9zZWNvbmQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBUaGlyZENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL3RoaXJkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTWFpbkNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL21haW4uY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvbWFpbi8ocGFnZXNPdXRsZXQ6Zmlyc3QpXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcbiAgICB7IHBhdGg6IFwibWFpblwiLCBjb21wb25lbnQ6IE1haW5Db21wb25lbnQsIGNoaWxkcmVuOiBbXG4gICAgICAgIHsgcGF0aDogXCJmaXJzdFwiLCBjb21wb25lbnQ6IEZpcnN0Q29tcG9uZW50LCBvdXRsZXQ6IFwicGFnZXNPdXRsZXRcIiB9LFxuICAgICAgICB7IHBhdGg6IFwic2Vjb25kXCIsIGNvbXBvbmVudDogU2Vjb25kQ29tcG9uZW50LCBvdXRsZXQ6IFwicGFnZXNPdXRsZXRcIiAgfSxcbiAgICAgICAgeyBwYXRoOiBcInRoaXJkXCIsIGNvbXBvbmVudDogVGhpcmRDb21wb25lbnQsIG91dGxldDogXCJwYWdlc091dGxldFwiICB9XG4gICAgXSB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfSJdfQ==