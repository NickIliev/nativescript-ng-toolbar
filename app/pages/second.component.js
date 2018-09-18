"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var SecondComponent = /** @class */ (function () {
    function SecondComponent(_activatedRoute) {
        this._activatedRoute = _activatedRoute;
        this.id = 0;
        this.name = "No params passed yet..";
        this.id = this._activatedRoute.snapshot.queryParams["id"];
        this.name = this._activatedRoute.snapshot.queryParams["name"];
    }
    SecondComponent = __decorate([
        core_1.Component({
            selector: "second",
            moduleId: module.id,
            templateUrl: "./second.component.html",
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], SecondComponent);
    return SecondComponent;
}());
exports.SecondComponent = SecondComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vjb25kLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlY29uZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsMENBQWlEO0FBT2pEO0lBSUkseUJBQW9CLGVBQStCO1FBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUg1QyxPQUFFLEdBQVcsQ0FBQyxDQUFDO1FBQ2YsU0FBSSxHQUFXLHdCQUF3QixDQUFDO1FBRzNDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFQUSxlQUFlO1FBTDNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHlCQUF5QjtTQUN6QyxDQUFDO3lDQUt1Qyx1QkFBYztPQUoxQyxlQUFlLENBUTNCO0lBQUQsc0JBQUM7Q0FBQSxBQVJELElBUUM7QUFSWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzZWNvbmRcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc2Vjb25kLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIFNlY29uZENvbXBvbmVudCB7IFxuICAgIHB1YmxpYyBpZDogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nID0gXCJObyBwYXJhbXMgcGFzc2VkIHlldC4uXCI7XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLl9hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1tcImlkXCJdO1xuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLl9hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1tcIm5hbWVcIl07XG4gICAgfVxufSJdfQ==