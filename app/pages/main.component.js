"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var MainComponent = (function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFRL0Q7SUFHSSx1QkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFGL0MsV0FBTSxHQUFXLFlBQVksQ0FBQztJQUVxQixDQUFDO0lBRTNELG9FQUFvRTtJQUNwRSxnQ0FBUSxHQUFSLFVBQVMsT0FBZTtRQUVwQixJQUFJLHVCQUF1QixHQUFxQjtZQUM1QyxXQUFXLEVBQUU7Z0JBQ1QsSUFBSSxFQUFFLEdBQUc7Z0JBQ1QsTUFBTSxFQUFFLGVBQWU7YUFDMUI7U0FDSixDQUFDO1FBRUYsSUFBSSx1QkFBdUIsR0FBcUI7WUFDNUMsV0FBVyxFQUFFO2dCQUNULElBQUksRUFBRSxHQUFHO2dCQUNULE1BQU0sRUFBRSxvQkFBb0I7YUFDL0I7U0FDSixDQUFDO1FBRUYsSUFBSSx5QkFBeUIsR0FBcUI7WUFDOUMsV0FBVyxFQUFFO2dCQUNULElBQUksRUFBRSxHQUFHO2dCQUNULE1BQU0sRUFBRSxvQkFBb0I7YUFDL0I7U0FDSixDQUFDO1FBR0YsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNkLEtBQUssV0FBVztnQkFDWixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztnQkFDNUcsS0FBSyxDQUFDO1lBQ1YsS0FBSyxZQUFZO2dCQUNiLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO2dCQUM3RyxLQUFLLENBQUM7WUFDVixLQUFLLFdBQVc7Z0JBQ1osSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLHlCQUF5QixDQUFDLENBQUM7Z0JBQzlHLEtBQUssQ0FBQztZQUNWO2dCQUNJLEtBQUssQ0FBQztRQUNkLENBQUM7SUFDTCxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBL0NRLGFBQWE7UUFMekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7eUNBSXdDLHlCQUFnQjtPQUg3QyxhQUFhLENBZ0R6QjtJQUFELG9CQUFDO0NBQUEsQUFoREQsSUFnREM7QUFoRFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImZpcnN0XCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9tYWluLmNvbXBvbmVudC5odG1sXCIsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYWluQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBtYXN0ZXI6IHN0cmluZyA9ICdOaWNrIElsaWV2JztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxyXG5cclxuICAgIC8vIHRoZSBFdmVudEVtaXR0ZXIgd2lsbCBzZW5kIHRoZSBzdHJpbmcgdmFsdWUgZnJvbSBUb29sYmFyQ29tcG9uZW50XHJcbiAgICBvbk5vdGlmeShtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgbGV0IG5hdmlnYXRpb25FeHRyYXNQYWdlT25lOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIjFcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk15IEZpcnN0IFBhZ2VcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbGV0IG5hdmlnYXRpb25FeHRyYXNQYWdlVHdvOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIjJcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlNlY29uZCBQYWdlIExvYWRlZFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBsZXQgbmF2aWdhdGlvbkV4dHJhc1BhZ2VUaHJlZTogTmF2aWdhdGlvbkV4dHJhcyA9IHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCIzXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJUaGlyZCBQYWdlIGlzIEJsdWVcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHN3aXRjaCAobWVzc2FnZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiZ29Ub0ZpcnN0XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL21haW5cIiwgeyBvdXRsZXRzOiB7IHBhZ2VzT3V0bGV0OiBbJ2ZpcnN0J10gfSB9XSwgbmF2aWdhdGlvbkV4dHJhc1BhZ2VPbmUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJnb1RvU2Vjb25kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL21haW5cIiwgeyBvdXRsZXRzOiB7IHBhZ2VzT3V0bGV0OiBbJ3NlY29uZCddIH0gfV0sIG5hdmlnYXRpb25FeHRyYXNQYWdlVHdvKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZ29Ub1RoaXJkXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL21haW5cIiwgeyBvdXRsZXRzOiB7IHBhZ2VzT3V0bGV0OiBbJ3RoaXJkJ10gfSB9XSwgbmF2aWdhdGlvbkV4dHJhc1BhZ2VUaHJlZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkFjdGlvbigpIHtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xyXG4gICAgfVxyXG59Il19