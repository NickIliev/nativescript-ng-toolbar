"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
require("rxjs/add/operator/switchMap");
var FirstComponent = (function () {
    function FirstComponent(pageRoute) {
        var _this = this;
        this.pageRoute = pageRoute;
        this.id = 0;
        this.name = "No params passed yet..";
        this.pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.queryParams; })
            .forEach(function (params) {
            if (params["id"]) {
                _this.id = +params["id"];
                _this.name = params["name"];
            }
        });
        console.log(this.id);
        console.log(this.name);
    }
    FirstComponent = __decorate([
        core_1.Component({
            selector: "first",
            moduleId: module.id,
            templateUrl: "./first.component.html",
        }),
        __metadata("design:paramtypes", [router_1.PageRoute])
    ], FirstComponent);
    return FirstComponent;
}());
exports.FirstComponent = FirstComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlyc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLHNEQUF3RDtBQUN4RCx1Q0FBcUM7QUFPckM7SUFJSSx3QkFBb0IsU0FBb0I7UUFBeEMsaUJBWUM7UUFabUIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUhqQyxPQUFFLEdBQVcsQ0FBQyxDQUFDO1FBQ2YsU0FBSSxHQUFXLHdCQUF3QixDQUFDO1FBRzNDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYzthQUM1QixTQUFTLENBQUMsVUFBQSxjQUFjLElBQUksT0FBQSxjQUFjLENBQUMsV0FBVyxFQUExQixDQUEwQixDQUFDO2FBQ3ZELE9BQU8sQ0FBQyxVQUFDLE1BQU07WUFDWixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNmLEtBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3hCLEtBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQy9CLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFoQlEsY0FBYztRQUwxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7U0FDeEMsQ0FBQzt5Q0FLaUMsa0JBQVM7T0FKL0IsY0FBYyxDQWlCekI7SUFBRCxxQkFBQztDQUFBLEFBakJGLElBaUJFO0FBakJXLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGFnZVJvdXRlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiZmlyc3RcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2ZpcnN0LmNvbXBvbmVudC5odG1sXCIsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaXJzdENvbXBvbmVudHtcclxuICAgIHB1YmxpYyBpZDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcgPSBcIk5vIHBhcmFtcyBwYXNzZWQgeWV0Li5cIjtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlUm91dGU6IFBhZ2VSb3V0ZSkge1xyXG4gICAgICAgIHRoaXMucGFnZVJvdXRlLmFjdGl2YXRlZFJvdXRlXHJcbiAgICAgICAgLnN3aXRjaE1hcChhY3RpdmF0ZWRSb3V0ZSA9PiBhY3RpdmF0ZWRSb3V0ZS5xdWVyeVBhcmFtcylcclxuICAgICAgICAuZm9yRWFjaCgocGFyYW1zKSA9PiB7IFxyXG4gICAgICAgICAgICBpZiAocGFyYW1zW1wiaWRcIl0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaWQgPSArcGFyYW1zW1wiaWRcIl07IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lID0gcGFyYW1zW1wibmFtZVwiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5hbWUpO1xyXG4gICAgfVxyXG4gfSJdfQ==