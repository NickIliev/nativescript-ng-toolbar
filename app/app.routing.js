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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFHdkUsMkRBQXlEO0FBQ3pELDZEQUEyRDtBQUMzRCwyREFBeUQ7QUFDekQseURBQXVEO0FBRXZELElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsMkJBQTJCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUN4RSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUUsUUFBUSxFQUFFO1lBQ2hELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFO1lBQ25FLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFHO1lBQ3RFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFHO1NBQ3ZFLEVBQUU7Q0FDTixDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgRmlyc3RDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9maXJzdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2Vjb25kQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvc2Vjb25kLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUaGlyZENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL3RoaXJkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBNYWluQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvbWFpbi5jb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9tYWluLyhwYWdlc091dGxldDpmaXJzdClcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxyXG4gICAgeyBwYXRoOiBcIm1haW5cIiwgY29tcG9uZW50OiBNYWluQ29tcG9uZW50LCBjaGlsZHJlbjogW1xyXG4gICAgICAgIHsgcGF0aDogXCJmaXJzdFwiLCBjb21wb25lbnQ6IEZpcnN0Q29tcG9uZW50LCBvdXRsZXQ6IFwicGFnZXNPdXRsZXRcIiB9LFxyXG4gICAgICAgIHsgcGF0aDogXCJzZWNvbmRcIiwgY29tcG9uZW50OiBTZWNvbmRDb21wb25lbnQsIG91dGxldDogXCJwYWdlc091dGxldFwiICB9LFxyXG4gICAgICAgIHsgcGF0aDogXCJ0aGlyZFwiLCBjb21wb25lbnQ6IFRoaXJkQ29tcG9uZW50LCBvdXRsZXQ6IFwicGFnZXNPdXRsZXRcIiAgfVxyXG4gICAgXSB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxyXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9Il19