"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var MainComponent = (function () {
    function MainComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    MainComponent.prototype.onNotify = function (message) {
        if (message === "goToFirst") {
            this.routerExtensions.navigate(["/main", { outlets: { pagesOutlet: ['first'] } }]);
        }
        else if (message === "goToSecond") {
            this.routerExtensions.navigate(["/main", { outlets: { pagesOutlet: ['second'] } }]);
        }
        else if (message === "goToThird") {
            this.routerExtensions.navigate(["/main", { outlets: { pagesOutlet: ['third'] } }]);
        }
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: "first",
            moduleId: module.id,
            templateUrl: "./main.component.html",
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUUxQyxzREFBK0Q7QUFPL0Q7SUFFSSx1QkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBSSxDQUFDO0lBRTNELGdDQUFRLEdBQVIsVUFBUyxPQUFlO1FBQ3BCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxXQUFXLEVBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZGLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLFdBQVcsRUFBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEYsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsV0FBVyxFQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUN2RixDQUFDO0lBQ0wsQ0FBQztJQVpRLGFBQWE7UUFMekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7eUNBR3dDLHlCQUFnQjtPQUY3QyxhQUFhLENBYXpCO0lBQUQsb0JBQUM7Q0FBQSxBQWJELElBYUM7QUFiWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImZpcnN0XCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL21haW4uY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgTWFpbkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxuXG4gICAgb25Ob3RpZnkobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmIChtZXNzYWdlID09PSBcImdvVG9GaXJzdFwiKSB7XG4gICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL21haW5cIiwgeyBvdXRsZXRzOiB7IHBhZ2VzT3V0bGV0IDogWydmaXJzdCddIH19XSk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZSA9PT0gXCJnb1RvU2Vjb25kXCIpIHtcbiAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbWFpblwiLCB7IG91dGxldHM6IHsgcGFnZXNPdXRsZXQgOiBbJ3NlY29uZCddIH19XSk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZSA9PT0gXCJnb1RvVGhpcmRcIikge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9tYWluXCIsIHsgb3V0bGV0czogeyBwYWdlc091dGxldCA6IFsndGhpcmQnXSB9fV0pO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==