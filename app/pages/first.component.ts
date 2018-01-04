import { Component } from "@angular/core";
import { PageRoute } from "nativescript-angular/router";
import "rxjs/add/operator/switchMap";

@Component({
    selector: "first",
    moduleId: module.id,
    templateUrl: "./first.component.html",
})
export class FirstComponent{
    public id: number;
    
    constructor(private pageRoute: PageRoute) {
        this.pageRoute.activatedRoute
        .switchMap(activatedRoute => activatedRoute.params)
        .forEach((params) => { this.id = +params["id"]; });
    }
 }