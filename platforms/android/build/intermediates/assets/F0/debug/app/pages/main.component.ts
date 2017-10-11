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
        if (message === "goToFirst") {
            this.routerExtensions.navigate(["/main", { outlets: { pagesOutlet : ['first'] }}]);
        } else if (message === "goToSecond") {
            this.routerExtensions.navigate(["/main", { outlets: { pagesOutlet : ['second'] }}]);
        } else if (message === "goToThird") {
            this.routerExtensions.navigate(["/main", { outlets: { pagesOutlet : ['third'] }}]);
        }
    }
}