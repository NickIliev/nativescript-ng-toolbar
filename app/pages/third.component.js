"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
require("rxjs/add/operator/switchMap");
var ThirdComponent = (function () {
    function ThirdComponent(pageRoute) {
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
    ThirdComponent = __decorate([
        core_1.Component({
            selector: "third",
            moduleId: module.id,
            templateUrl: "./third.component.html",
        }),
        __metadata("design:paramtypes", [router_1.PageRoute])
    ], ThirdComponent);
    return ThirdComponent;
}());
exports.ThirdComponent = ThirdComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGhpcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLHNEQUF3RDtBQUN4RCx1Q0FBcUM7QUFPckM7SUFJSSx3QkFBb0IsU0FBb0I7UUFBeEMsaUJBVUM7UUFWbUIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUhqQyxPQUFFLEdBQVcsQ0FBQyxDQUFDO1FBQ2YsU0FBSSxHQUFXLHdCQUF3QixDQUFDO1FBRzNDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYzthQUM1QixTQUFTLENBQUMsVUFBQSxjQUFjLElBQUksT0FBQSxjQUFjLENBQUMsV0FBVyxFQUExQixDQUEwQixDQUFDO2FBQ3ZELE9BQU8sQ0FBQyxVQUFDLE1BQU07WUFDWixLQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQWRRLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7eUNBS2lDLGtCQUFTO09BSi9CLGNBQWMsQ0FlMUI7SUFBRCxxQkFBQztDQUFBLEFBZkQsSUFlQztBQWZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGFnZVJvdXRlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwidGhpcmRcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3RoaXJkLmNvbXBvbmVudC5odG1sXCIsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUaGlyZENvbXBvbmVudCAgeyBcclxuICAgIHB1YmxpYyBpZDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcgPSBcIk5vIHBhcmFtcyBwYXNzZWQgeWV0Li5cIjtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlUm91dGU6IFBhZ2VSb3V0ZSkge1xyXG4gICAgICAgIHRoaXMucGFnZVJvdXRlLmFjdGl2YXRlZFJvdXRlXHJcbiAgICAgICAgLnN3aXRjaE1hcChhY3RpdmF0ZWRSb3V0ZSA9PiBhY3RpdmF0ZWRSb3V0ZS5xdWVyeVBhcmFtcylcclxuICAgICAgICAuZm9yRWFjaCgocGFyYW1zKSA9PiB7IFxyXG4gICAgICAgICAgICB0aGlzLmlkID0gK3BhcmFtc1tcImlkXCJdOyBcclxuICAgICAgICAgICAgdGhpcy5uYW1lID0gcGFyYW1zW1wibmFtZVwiXTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5uYW1lKTtcclxuICAgIH1cclxufSJdfQ==