import { Component } from "@angular/core";
import { PageRoute } from "nativescript-angular/router";
import "rxjs/add/operator/switchMap";

@Component({
    selector: "first",
    moduleId: module.id,
    templateUrl: "./first.component.html",
})
export class FirstComponent{
    public id: number = 0;
    public name: string = "No params passed yet..";
    
    constructor(private pageRoute: PageRoute) {
        this.pageRoute.activatedRoute
        .switchMap(activatedRoute => activatedRoute.queryParams)
        .forEach((params) => { 
            if (params["id"]) {
                this.id = +params["id"]; 
                this.name = params["name"];
            }
        });

        console.log(this.id);
        console.log(this.name);
    }
 }