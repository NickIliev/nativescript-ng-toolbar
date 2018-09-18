import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { NavigationExtras } from "@angular/router";

@Component({
    selector: "first",
    moduleId: module.id,
    templateUrl: "./main.component.html",
})
export class MainComponent {
    public master: string = 'Nick Iliev';

    constructor(private routerExtensions: RouterExtensions) { }

    // the EventEmitter will send the string value from ToolbarComponent
    onNotify(message: string): void {
        let navigationExtrasPageOne: NavigationExtras = {
            queryParams: {
                "id": "1",
                "name": "My First Page"
            }
        };

        let navigationExtrasPageTwo: NavigationExtras = {
            queryParams: {
                "id": "2",
                "name": "Second Page Loaded"
            }
        };

        let navigationExtrasPageThree: NavigationExtras = {
            queryParams: {
                "id": "3",
                "name": "Third Page is Blue"
            }
        };

        switch (message) {
            case "goToFirst":
                // pagesOutlet is the outlet name defined main-page.xml and in app-routing.ts
                this.routerExtensions.navigate(["/main", { outlets: { pagesOutlet: ['first-component'] } }], navigationExtrasPageOne);
                break;
            case "goToSecond":
                this.routerExtensions.navigate(["/main", { outlets: { pagesOutlet: ['second-component'] } }], navigationExtrasPageTwo);
                break;
            case "goToThird":
                this.routerExtensions.navigate(["/main", { outlets: { pagesOutlet: ['third-component'] } }], navigationExtrasPageThree);
                break;
            default:
                break;
        }
    }

    onAction() {
        this.routerExtensions.back();
    }
}