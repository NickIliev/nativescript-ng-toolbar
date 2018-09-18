"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
        // outputs the events fired from from our custom toolbar 
        this.toolbar = new core_1.EventEmitter();
    }
    ToolbarComponent.prototype.goToFirst = function () {
        this.toolbar.emit("goToFirst");
    };
    ToolbarComponent.prototype.goToSecond = function () {
        this.toolbar.emit("goToSecond");
    };
    ToolbarComponent.prototype.goToThird = function () {
        this.toolbar.emit("goToThird");
    };
    __decorate([
        core_1.Input('master'),
        __metadata("design:type", String)
    ], ToolbarComponent.prototype, "masterName", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ToolbarComponent.prototype, "toolbar", void 0);
    ToolbarComponent = __decorate([
        core_1.Component({
            selector: 'toolbar',
            moduleId: module.id,
            templateUrl: './toolbar.component.html',
            styleUrls: ['./toolbar.component.css']
        })
    ], ToolbarComponent);
    return ToolbarComponent;
}());
exports.ToolbarComponent = ToolbarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b29sYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF1RTtBQVN2RTtJQVBBO1FBV0kseURBQXlEO1FBQy9DLFlBQU8sR0FBeUIsSUFBSSxtQkFBWSxFQUFVLENBQUM7SUFhekUsQ0FBQztJQVhHLG9DQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQscUNBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxvQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQWZnQjtRQUFoQixZQUFLLENBQUMsUUFBUSxDQUFDOzt3REFBb0I7SUFHMUI7UUFBVCxhQUFNLEVBQUU7a0NBQVUsbUJBQVk7cURBQXNDO0lBTDVELGdCQUFnQjtRQVA1QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDekMsQ0FBQztPQUVXLGdCQUFnQixDQWtCNUI7SUFBRCx1QkFBQztDQUFBLEFBbEJELElBa0JDO0FBbEJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndG9vbGJhcicsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdG9vbGJhci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vdG9vbGJhci5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBUb29sYmFyQ29tcG9uZW50IHtcbiAgICAvLyB1c2luZyAnbWFzdGVyJyBwcm9wZXJ0eSBmcm9tIHRoZSBwYXJlbnQgY29tcG9uZW50IChNYWluQ29tcG9uZW50KVxuICAgIEBJbnB1dCgnbWFzdGVyJykgbWFzdGVyTmFtZTogc3RyaW5nO1xuXG4gICAgLy8gb3V0cHV0cyB0aGUgZXZlbnRzIGZpcmVkIGZyb20gZnJvbSBvdXIgY3VzdG9tIHRvb2xiYXIgXG4gICAgQE91dHB1dCgpIHRvb2xiYXI6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgICBnb1RvRmlyc3QoKSB7XG4gICAgICAgIHRoaXMudG9vbGJhci5lbWl0KFwiZ29Ub0ZpcnN0XCIpO1xuICAgIH1cblxuICAgIGdvVG9TZWNvbmQoKSB7XG4gICAgICAgIHRoaXMudG9vbGJhci5lbWl0KFwiZ29Ub1NlY29uZFwiKTtcbiAgICB9XG5cbiAgICBnb1RvVGhpcmQoKSB7XG4gICAgICAgIHRoaXMudG9vbGJhci5lbWl0KFwiZ29Ub1RoaXJkXCIpO1xuICAgIH1cbn0iXX0=