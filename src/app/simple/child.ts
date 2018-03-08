import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector :'child',
    template: `
    This is a Child Component
    {{data}} <br />
    <button (click)="clickChild()">Click Me</button>
    `
})
export class Child{

    @Input()
    data:any;

    @Output()
    childEvent:EventEmitter<string> = new EventEmitter<string>();

    clickChild() {
        this.childEvent.next(new Date().toDateString());
    }

    dummyMethod(arg){
        console.log("I am a child method : " + arg);
    }
}