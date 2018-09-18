"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var FirstComponent = /** @class */ (function () {
    function FirstComponent(_activatedRoute) {
        this._activatedRoute = _activatedRoute;
        this.id = 0;
        this.name = "No params passed yet..";
        this.id = this._activatedRoute.snapshot.queryParams["id"];
        this.name = this._activatedRoute.snapshot.queryParams["name"];
    }
    FirstComponent = __decorate([
        core_1.Component({
            selector: "first",
            moduleId: module.id,
            templateUrl: "./first.component.html",
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], FirstComponent);
    return FirstComponent;
}());
exports.FirstComponent = FirstComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlyc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUFpRDtBQU9qRDtJQUlJLHdCQUFvQixlQUErQjtRQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFINUMsT0FBRSxHQUFXLENBQUMsQ0FBQztRQUNmLFNBQUksR0FBVyx3QkFBd0IsQ0FBQztRQUczQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBUFEsY0FBYztRQUwxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7U0FDeEMsQ0FBQzt5Q0FLdUMsdUJBQWM7T0FKMUMsY0FBYyxDQVF6QjtJQUFELHFCQUFDO0NBQUEsQUFSRixJQVFFO0FBUlcsd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImZpcnN0XCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2ZpcnN0LmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEZpcnN0Q29tcG9uZW50e1xuICAgIHB1YmxpYyBpZDogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nID0gXCJObyBwYXJhbXMgcGFzc2VkIHlldC4uXCI7XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLl9hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1tcImlkXCJdO1xuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLl9hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1tcIm5hbWVcIl07XG4gICAgfVxuIH0iXX0=