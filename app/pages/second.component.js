"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
require("rxjs/add/operator/switchMap");
var SecondComponent = (function () {
    function SecondComponent(pageRoute) {
        var _this = this;
        this.pageRoute = pageRoute;
        this.id = 0;
        this.name = "No params passed yet..";
        this.pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.queryParams; })
            .forEach(function (params) {
            _this.id = +params["id"];
            _this.name = params["name"];
        });
        console.log(this.id);
        console.log(this.name);
    }
    SecondComponent = __decorate([
        core_1.Component({
            selector: "second",
            moduleId: module.id,
            templateUrl: "./second.component.html",
        }),
        __metadata("design:paramtypes", [router_1.PageRoute])
    ], SecondComponent);
    return SecondComponent;
}());
exports.SecondComponent = SecondComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vjb25kLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlY29uZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsc0RBQXdEO0FBQ3hELHVDQUFxQztBQU9yQztJQUlJLHlCQUFvQixTQUFvQjtRQUF4QyxpQkFVQztRQVZtQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBSGpDLE9BQUUsR0FBVyxDQUFDLENBQUM7UUFDZixTQUFJLEdBQVcsd0JBQXdCLENBQUM7UUFHM0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjO2FBQzVCLFNBQVMsQ0FBQyxVQUFBLGNBQWMsSUFBSSxPQUFBLGNBQWMsQ0FBQyxXQUFXLEVBQTFCLENBQTBCLENBQUM7YUFDdkQsT0FBTyxDQUFDLFVBQUMsTUFBTTtZQUNaLEtBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIsS0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBZFEsZUFBZTtRQUwzQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx5QkFBeUI7U0FDekMsQ0FBQzt5Q0FLaUMsa0JBQVM7T0FKL0IsZUFBZSxDQWUzQjtJQUFELHNCQUFDO0NBQUEsQUFmRCxJQWVDO0FBZlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBhZ2VSb3V0ZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInNlY29uZFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc2Vjb25kLmNvbXBvbmVudC5odG1sXCIsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWNvbmRDb21wb25lbnQgeyBcclxuICAgIHB1YmxpYyBpZDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcgPSBcIk5vIHBhcmFtcyBwYXNzZWQgeWV0Li5cIjtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlUm91dGU6IFBhZ2VSb3V0ZSkge1xyXG4gICAgICAgIHRoaXMucGFnZVJvdXRlLmFjdGl2YXRlZFJvdXRlXHJcbiAgICAgICAgLnN3aXRjaE1hcChhY3RpdmF0ZWRSb3V0ZSA9PiBhY3RpdmF0ZWRSb3V0ZS5xdWVyeVBhcmFtcylcclxuICAgICAgICAuZm9yRWFjaCgocGFyYW1zKSA9PiB7IFxyXG4gICAgICAgICAgICB0aGlzLmlkID0gK3BhcmFtc1tcImlkXCJdOyBcclxuICAgICAgICAgICAgdGhpcy5uYW1lID0gcGFyYW1zW1wibmFtZVwiXTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5uYW1lKTtcclxuICAgIH1cclxufSJdfQ==