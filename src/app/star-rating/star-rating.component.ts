import { Component, OnInit, Input } from '@angular/core';

@Component({
 selector: 'app-star-rating',
 templateUrl: './star-rating.component.html',
 styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {

 stars:Star[]=[];
 @Input()
 max;
 @Input()
 rating;

 constructor() { }

 ngOnInit() {
   for(let i=0;i<this.max;i++){
     this.stars.push({filled: i < this.rating});
   }
 }
}

interface Star{
 filled:boolean;
}