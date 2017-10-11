import { Component } from "@angular/core";

import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "first",
    moduleId: module.id,
    templateUrl: "./main.component.html",
})
export class MainComponent {

    constructor(private routerExtensions: RouterExtensions) { }

    onNotify(message: string): void {
        switch (message) {
            case "goToFirst":
                this.routerExtensions.navigate(["/main", { outlets: { pagesOutlet: ['first'] } }]);
                break;
            case "goToSecond":
                this.routerExtensions.navigate(["/main", { outlets: { pagesOutlet: ['second'] } }]);
                break;
            case "goToThird":
                this.routerExtensions.navigate(["/main", { outlets: { pagesOutlet: ['third'] } }]);
                break;
            default:
                break;
        }
    }
}