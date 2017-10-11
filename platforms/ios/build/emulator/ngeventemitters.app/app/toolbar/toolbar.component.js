"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ToolbarComponent = (function () {
    function ToolbarComponent() {
        this.notify = new core_1.EventEmitter();
    }
    ToolbarComponent.prototype.goToFirst = function () {
        this.notify.emit("goToFirst");
    };
    ToolbarComponent.prototype.goToSecond = function () {
        this.notify.emit("goToSecond");
    };
    ToolbarComponent.prototype.goToThird = function () {
        this.notify.emit("goToThird");
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ToolbarComponent.prototype, "notify", void 0);
    ToolbarComponent = __decorate([
        core_1.Component({
            selector: 'toolbar',
            moduleId: module.id,
            templateUrl: './toolbar.component.html',
            styleUrls: ['./toolbar.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());
exports.ToolbarComponent = ToolbarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b29sYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRTtBQVVoRTtJQUdJO1FBRlUsV0FBTSxHQUF5QixJQUFJLG1CQUFZLEVBQVUsQ0FBQztJQUVwRCxDQUFDO0lBRWpCLG9DQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQscUNBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxvQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQWRTO1FBQVQsYUFBTSxFQUFFO2tDQUFTLG1CQUFZO29EQUFzQztJQUQzRCxnQkFBZ0I7UUFQNUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3pDLENBQUM7O09BRVcsZ0JBQWdCLENBZ0I1QjtJQUFELHVCQUFDO0NBQUEsQUFoQkQsSUFnQkM7QUFoQlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInVpL2J1dHRvblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Rvb2xiYXInLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3Rvb2xiYXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3Rvb2xiYXIuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgVG9vbGJhckNvbXBvbmVudCB7XG4gICAgQE91dHB1dCgpIG5vdGlmeTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBnb1RvRmlyc3QoKSB7XG4gICAgICAgIHRoaXMubm90aWZ5LmVtaXQoXCJnb1RvRmlyc3RcIik7XG4gICAgfVxuXG4gICAgZ29Ub1NlY29uZCgpIHtcbiAgICAgICAgdGhpcy5ub3RpZnkuZW1pdChcImdvVG9TZWNvbmRcIik7XG4gICAgfVxuXG4gICAgZ29Ub1RoaXJkKCkge1xuICAgICAgICB0aGlzLm5vdGlmeS5lbWl0KFwiZ29Ub1RoaXJkXCIpO1xuICAgIH1cbn0iXX0=