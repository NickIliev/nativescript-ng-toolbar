import { Component} from "@angular/core";
import { PageRoute } from "nativescript-angular/router";
import "rxjs/add/operator/switchMap";

@Component({
    selector: "second",
    moduleId: module.id,
    templateUrl: "./second.component.html",
})
export class SecondComponent { 
    public id: number = 0;
    public name: string = "No params passed yet..";
    
    constructor(private pageRoute: PageRoute) {
        this.pageRoute.activatedRoute
        .switchMap(activatedRoute => activatedRoute.queryParams)
        .forEach((params) => { 
            this.id = +params["id"]; 
            this.name = params["name"];
        });

        console.log(this.id);
        console.log(this.name);
    }
}