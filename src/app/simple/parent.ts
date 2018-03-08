import { Component, ViewChild } from "@angular/core";
import { Child } from './child';

@Component({
    template:`
       This is Parent <br />
       <child (childEvent)="doTask($event)" data="Simple Data"></child>
       <button (click)="callChild()">Call Child</button>         
    `
})
export class Parent{
    @ViewChild(Child)
    child:Child;

    doTask(info){
        console.log("This is event from child!!!" + info);
    }

    callChild(){
        this.child.dummyMethod("dummy args ....");
    }

}