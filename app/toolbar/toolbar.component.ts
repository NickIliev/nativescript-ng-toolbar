import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'toolbar',
    moduleId: module.id,
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent {
    // using 'master' property from the parent component (MainComponent)
    @Input('master') masterName: string;

    // outputs the events fired from from our custom toolbar 
    @Output() toolbar: EventEmitter<string> = new EventEmitter<string>();

    goToFirst() {
        this.toolbar.emit("goToFirst");
    }

    goToSecond() {
        this.toolbar.emit("goToSecond");
    }

    goToThird() {
        this.toolbar.emit("goToThird");
    }
}