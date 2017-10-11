"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var MainComponent = (function () {
    function MainComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.master = 'Nick Iliev';
    }
    MainComponent.prototype.onNotify = function (message) {
        switch (message) {
            case "goToFirst":
                this.routerExtensions.navigate(["/main", { outlets: { pagesOutlet: ['first'] } }]);
                break;
            case "goToSecond":
                this.routerExtensions.navigate(["/main", { outlets: { pagesOutlet: ['second'] } }]);
                break;
            case "goToThird":
                this.routerExtensions.navigate(["/main", { outlets: { pagesOutlet: ['third'] } }]);
                break;
            default:
                break;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCxzREFBK0Q7QUFPL0Q7SUFHSSx1QkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFGL0MsV0FBTSxHQUFXLFlBQVksQ0FBQztJQUVxQixDQUFDO0lBRTNELGdDQUFRLEdBQVIsVUFBUyxPQUFlO1FBQ3BCLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDZCxLQUFLLFdBQVc7Z0JBQ1osSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ25GLEtBQUssQ0FBQztZQUNWLEtBQUssWUFBWTtnQkFDYixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDcEYsS0FBSyxDQUFDO1lBQ1YsS0FBSyxXQUFXO2dCQUNaLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNuRixLQUFLLENBQUM7WUFDVjtnQkFDSSxLQUFLLENBQUM7UUFDZCxDQUFDO0lBQ0wsQ0FBQztJQW5CUSxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDO3lDQUl3Qyx5QkFBZ0I7T0FIN0MsYUFBYSxDQW9CekI7SUFBRCxvQkFBQztDQUFBLEFBcEJELElBb0JDO0FBcEJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJmaXJzdFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9tYWluLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIE1haW5Db21wb25lbnQge1xuICAgIHB1YmxpYyBtYXN0ZXI6IHN0cmluZyA9ICdOaWNrIElsaWV2JztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykgeyB9XG5cbiAgICBvbk5vdGlmeShtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgc3dpdGNoIChtZXNzYWdlKSB7XG4gICAgICAgICAgICBjYXNlIFwiZ29Ub0ZpcnN0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9tYWluXCIsIHsgb3V0bGV0czogeyBwYWdlc091dGxldDogWydmaXJzdCddIH0gfV0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImdvVG9TZWNvbmRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL21haW5cIiwgeyBvdXRsZXRzOiB7IHBhZ2VzT3V0bGV0OiBbJ3NlY29uZCddIH0gfV0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImdvVG9UaGlyZFwiOlxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbWFpblwiLCB7IG91dGxldHM6IHsgcGFnZXNPdXRsZXQ6IFsndGhpcmQnXSB9IH1dKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59Il19