import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../common/data.service';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.css']
})
export class RestaurantMenuComponent implements OnInit {
  restaurant:any= {};
  //menuItems:any = {};
  
  items:any[] = [];
  cart:any[] = [];

  constructor(private route: ActivatedRoute,private dataService:DataService) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get("id");
    this.getRestaurant(id);
    this.getMenuItems(id);
  }

  getRestaurant(id:number) {
    //this.restaurant = this.restaurants.filter(r => r.id == id)[0];
    this.dataService.getRestaurant(id).subscribe(data=>{this.restaurant= data});
    
  }

  getMenuItems(id:number) {
    this.items = this.menuItems.filter(m => m.id == id).map(m => m.menu)[0];
    //this.dataService.getMenuItems(id).subscribe(data=>{this.menuItems= data});
   
  }

  addToCart(id:number,item:any){
    item['qty'] = 1;
    this.cart.push(item);
  }

  /** 
  restaurants:any[] =  [
    {
        "id": 1,
        "name": "babythai",
        "description": "Thai food the way you like it!!!.Fresh and grilled",
        "cuisine": "Thai",
        "rating": 4,
        "price": 4
    },
    {
        "id": 2,
        "name": "curryup",
        "description": "Indian food with a modern twist. We use all-natural ingredients and the finest spices to delight and tempt your pallate",
        "cuisine": "Indian",
        "rating": 4,
        "price": 3
    },
    {
        "id": 3,
        "name": "dragon",
        "description": "Chinese food with a modern twist. We use all-natural ingredients and the finest spices to delight and tempt your pallate",
        "cuisine": "Chinese",
        "rating": 3,
        "price": 4
    }, {
        "id": 4,
        "name": "beijing",
        "description": "Chinese food with a modern twist. Fresh and Grilled",
        "cuisine": "Chinese",
        "rating": 4,
        "price": 5
    },
    {
        "id": 5,
        "name": "pizza76",
        "description": "Famous for Italian-American cuisine menu including pizza and pasta, as well as side dishes and desserts",
        "cuisine": "Italian",
        "rating": 4,
        "price": 3
    }
];
*/


menuItems = [
  {
    "id":1,
    "menu": [
      {"name" : "1_item 1", "price" : 458},
      {"name" : "1_item 2 ", "price" : 892},
      {"name" : "1_item 3", "price" : 120},
      {"name" : "1_item 4", "price" : 800},
      {"name" : "1_item 5", "price" : 300}
    ]
  },
  {
    "id":2,
    "menu": [
      {"name" : "2_item 1", "price" : 788},
      {"name" : "2_item 2 ", "price" : 532},
      {"name" : "2_item 3", "price" : 120},
      {"name" : "2_item 4", "price" : 800}
    ]
  }

];


}
