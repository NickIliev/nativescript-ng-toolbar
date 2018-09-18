"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var MainComponent = /** @class */ (function () {
    function MainComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.master = 'Nick Iliev';
    }
    // the EventEmitter will send the string value from ToolbarComponent
    MainComponent.prototype.onNotify = function (message) {
        var navigationExtrasPageOne = {
            queryParams: {
                "id": "1",
                "name": "My First Page"
            }
        };
        var navigationExtrasPageTwo = {
            queryParams: {
                "id": "2",
                "name": "Second Page Loaded"
            }
        };
        var navigationExtrasPageThree = {
            queryParams: {
                "id": "3",
                "name": "Third Page is Blue"
            }
        };
        switch (message) {
            case "goToFirst":
                this.routerExtensions.navigate(["/main", { outlets: { pagesOutlet: ['first'] } }], navigationExtrasPageOne);
                break;
            case "goToSecond":
                this.routerExtensions.navigate(["/main", { outlets: { pagesOutlet: ['second'] } }], navigationExtrasPageTwo);
                break;
            case "goToThird":
                this.routerExtensions.navigate(["/main", { outlets: { pagesOutlet: ['third'] } }], navigationExtrasPageThree);
                break;
            default:
                break;
        }
    };
    MainComponent.prototype.onAction = function () {
        this.routerExtensions.back();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxzREFBK0Q7QUFRL0Q7SUFHSSx1QkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFGL0MsV0FBTSxHQUFXLFlBQVksQ0FBQztJQUVxQixDQUFDO0lBRTNELG9FQUFvRTtJQUNwRSxnQ0FBUSxHQUFSLFVBQVMsT0FBZTtRQUNwQixJQUFJLHVCQUF1QixHQUFxQjtZQUM1QyxXQUFXLEVBQUU7Z0JBQ1QsSUFBSSxFQUFFLEdBQUc7Z0JBQ1QsTUFBTSxFQUFFLGVBQWU7YUFDMUI7U0FDSixDQUFDO1FBRUYsSUFBSSx1QkFBdUIsR0FBcUI7WUFDNUMsV0FBVyxFQUFFO2dCQUNULElBQUksRUFBRSxHQUFHO2dCQUNULE1BQU0sRUFBRSxvQkFBb0I7YUFDL0I7U0FDSixDQUFDO1FBRUYsSUFBSSx5QkFBeUIsR0FBcUI7WUFDOUMsV0FBVyxFQUFFO2dCQUNULElBQUksRUFBRSxHQUFHO2dCQUNULE1BQU0sRUFBRSxvQkFBb0I7YUFDL0I7U0FDSixDQUFDO1FBRUYsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNkLEtBQUssV0FBVztnQkFDWixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztnQkFDNUcsS0FBSyxDQUFDO1lBQ1YsS0FBSyxZQUFZO2dCQUNiLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO2dCQUM3RyxLQUFLLENBQUM7WUFDVixLQUFLLFdBQVc7Z0JBQ1osSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLHlCQUF5QixDQUFDLENBQUM7Z0JBQzlHLEtBQUssQ0FBQztZQUNWO2dCQUNJLEtBQUssQ0FBQztRQUNkLENBQUM7SUFDTCxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBN0NRLGFBQWE7UUFMekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7eUNBSXdDLHlCQUFnQjtPQUg3QyxhQUFhLENBOEN6QjtJQUFELG9CQUFDO0NBQUEsQUE5Q0QsSUE4Q0M7QUE5Q1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImZpcnN0XCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL21haW4uY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgTWFpbkNvbXBvbmVudCB7XG4gICAgcHVibGljIG1hc3Rlcjogc3RyaW5nID0gJ05pY2sgSWxpZXYnO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cblxuICAgIC8vIHRoZSBFdmVudEVtaXR0ZXIgd2lsbCBzZW5kIHRoZSBzdHJpbmcgdmFsdWUgZnJvbSBUb29sYmFyQ29tcG9uZW50XG4gICAgb25Ob3RpZnkobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzUGFnZU9uZTogTmF2aWdhdGlvbkV4dHJhcyA9IHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIjFcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNeSBGaXJzdCBQYWdlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgbmF2aWdhdGlvbkV4dHJhc1BhZ2VUd286IE5hdmlnYXRpb25FeHRyYXMgPSB7XG4gICAgICAgICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogXCIyXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiU2Vjb25kIFBhZ2UgTG9hZGVkXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgbmF2aWdhdGlvbkV4dHJhc1BhZ2VUaHJlZTogTmF2aWdhdGlvbkV4dHJhcyA9IHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIjNcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJUaGlyZCBQYWdlIGlzIEJsdWVcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHN3aXRjaCAobWVzc2FnZSkge1xuICAgICAgICAgICAgY2FzZSBcImdvVG9GaXJzdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbWFpblwiLCB7IG91dGxldHM6IHsgcGFnZXNPdXRsZXQ6IFsnZmlyc3QnXSB9IH1dLCBuYXZpZ2F0aW9uRXh0cmFzUGFnZU9uZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZ29Ub1NlY29uZFwiOlxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbWFpblwiLCB7IG91dGxldHM6IHsgcGFnZXNPdXRsZXQ6IFsnc2Vjb25kJ10gfSB9XSwgbmF2aWdhdGlvbkV4dHJhc1BhZ2VUd28pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImdvVG9UaGlyZFwiOlxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbWFpblwiLCB7IG91dGxldHM6IHsgcGFnZXNPdXRsZXQ6IFsndGhpcmQnXSB9IH1dLCBuYXZpZ2F0aW9uRXh0cmFzUGFnZVRocmVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkFjdGlvbigpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcbiAgICB9XG59Il19