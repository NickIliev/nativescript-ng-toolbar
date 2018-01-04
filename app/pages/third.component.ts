import { Component } from "@angular/core";
import { PageRoute } from "nativescript-angular/router";
import "rxjs/add/operator/switchMap";

@Component({
    selector: "third",
    moduleId: module.id,
    templateUrl: "./third.component.html",
})
export class ThirdComponent  { 
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