import { Component} from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "second",
    moduleId: module.id,
    templateUrl: "./second.component.html",
})
export class SecondComponent { 
    public id: number = 0;
    public name: string = "No params passed yet..";
    
    constructor(private _activatedRoute: ActivatedRoute) {
        this.id = this._activatedRoute.snapshot.queryParams["id"];
        this.name = this._activatedRoute.snapshot.queryParams["name"];
    }
}