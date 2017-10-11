"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ToolbarComponent = (function () {
    function ToolbarComponent() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b29sYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF1RTtBQVN2RTtJQVBBO1FBU2MsWUFBTyxHQUF5QixJQUFJLG1CQUFZLEVBQVUsQ0FBQztJQWF6RSxDQUFDO0lBWEcsb0NBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxxQ0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELG9DQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBYmdCO1FBQWhCLFlBQUssQ0FBQyxRQUFRLENBQUM7O3dEQUFvQjtJQUMxQjtRQUFULGFBQU0sRUFBRTtrQ0FBVSxtQkFBWTtxREFBc0M7SUFGNUQsZ0JBQWdCO1FBUDVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUN6QyxDQUFDO09BRVcsZ0JBQWdCLENBZTVCO0lBQUQsdUJBQUM7Q0FBQSxBQWZELElBZUM7QUFmWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Rvb2xiYXInLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3Rvb2xiYXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3Rvb2xiYXIuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgVG9vbGJhckNvbXBvbmVudCB7XG4gICAgQElucHV0KCdtYXN0ZXInKSBtYXN0ZXJOYW1lOiBzdHJpbmc7XG4gICAgQE91dHB1dCgpIHRvb2xiYXI6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgICBnb1RvRmlyc3QoKSB7XG4gICAgICAgIHRoaXMudG9vbGJhci5lbWl0KFwiZ29Ub0ZpcnN0XCIpO1xuICAgIH1cblxuICAgIGdvVG9TZWNvbmQoKSB7XG4gICAgICAgIHRoaXMudG9vbGJhci5lbWl0KFwiZ29Ub1NlY29uZFwiKTtcbiAgICB9XG5cbiAgICBnb1RvVGhpcmQoKSB7XG4gICAgICAgIHRoaXMudG9vbGJhci5lbWl0KFwiZ29Ub1RoaXJkXCIpO1xuICAgIH1cbn0iXX0=