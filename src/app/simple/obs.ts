import { Component } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Component({
    template:`
    First:{{first}}<br/>
    Second:{{second}}
    `
})

export class Obs{
    first:number;
    second:number;
    ngOnInit(){
        //Server side
    let obs=new Observable(observer => {
            setTimeout(() => observer.next(1),100);
            setTimeout(() => observer.next(2),500);
            setTimeout(() => observer.next(3),1000);
            setTimeout(() => observer.next(4),1500);
    });
        //Client side
    setTimeout(()=> obs.subscribe((d:number)=>this.first=d),500);
    setTimeout(()=> obs.subscribe((d:number)=>this.second=d),500);
}
}