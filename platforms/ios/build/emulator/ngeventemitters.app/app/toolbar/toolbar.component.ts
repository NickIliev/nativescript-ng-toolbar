import { Component, Output, EventEmitter } from '@angular/core';
import { Button } from "ui/button";

@Component({
    selector: 'toolbar',
    moduleId: module.id,
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent {
    @Output() notify: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

    goToFirst() {
        this.notify.emit("goToFirst");
    }

    goToSecond() {
        this.notify.emit("goToSecond");
    }

    goToThird() {
        this.notify.emit("goToThird");
    }
}