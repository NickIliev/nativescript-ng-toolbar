"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ToolbarComponent = (function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b29sYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF1RTtBQVN2RTtJQVBBO1FBV0kseURBQXlEO1FBQy9DLFlBQU8sR0FBeUIsSUFBSSxtQkFBWSxFQUFVLENBQUM7SUFhekUsQ0FBQztJQVhHLG9DQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQscUNBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxvQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQWZnQjtRQUFoQixZQUFLLENBQUMsUUFBUSxDQUFDOzt3REFBb0I7SUFHMUI7UUFBVCxhQUFNLEVBQUU7a0NBQVUsbUJBQVk7cURBQXNDO0lBTDVELGdCQUFnQjtRQVA1QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDekMsQ0FBQztPQUVXLGdCQUFnQixDQWtCNUI7SUFBRCx1QkFBQztDQUFBLEFBbEJELElBa0JDO0FBbEJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndG9vbGJhcicsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3Rvb2xiYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vdG9vbGJhci5jb21wb25lbnQuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUb29sYmFyQ29tcG9uZW50IHtcclxuICAgIC8vIHVzaW5nICdtYXN0ZXInIHByb3BlcnR5IGZyb20gdGhlIHBhcmVudCBjb21wb25lbnQgKE1haW5Db21wb25lbnQpXHJcbiAgICBASW5wdXQoJ21hc3RlcicpIG1hc3Rlck5hbWU6IHN0cmluZztcclxuXHJcbiAgICAvLyBvdXRwdXRzIHRoZSBldmVudHMgZmlyZWQgZnJvbSBmcm9tIG91ciBjdXN0b20gdG9vbGJhciBcclxuICAgIEBPdXRwdXQoKSB0b29sYmFyOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICAgIGdvVG9GaXJzdCgpIHtcclxuICAgICAgICB0aGlzLnRvb2xiYXIuZW1pdChcImdvVG9GaXJzdFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBnb1RvU2Vjb25kKCkge1xyXG4gICAgICAgIHRoaXMudG9vbGJhci5lbWl0KFwiZ29Ub1NlY29uZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBnb1RvVGhpcmQoKSB7XHJcbiAgICAgICAgdGhpcy50b29sYmFyLmVtaXQoXCJnb1RvVGhpcmRcIik7XHJcbiAgICB9XHJcbn0iXX0=