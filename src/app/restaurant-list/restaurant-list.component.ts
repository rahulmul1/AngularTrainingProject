import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.originalRestaurants = this.restaurants;
  }

  selectRestaurants(cuisine:Cuisine) {
    cuisine.selected = !cuisine.selected;
    let selectedCuisineNames = this.cuisines.filter(c => c.selected).map(c => c.name);
    console.log(selectedCuisineNames);
    this.restaurants = []; 
    this.originalRestaurants.forEach(
      r => {
        selectedCuisineNames.forEach(c => {
          if(r.cuisine == c) {
            this.restaurants.push(r);
          }
        })
      }
    );
  }

  cuisines : Cuisine[] = [
    {"name":"Indian","value":"Indian","selected":false},
    {"name":"Chinese","value":"Chinese","selected":true},
    {"name":"Thai","value":"Thai","selected":false},
    {"name":"Veg","value":"Veg","selected":false},
  ];

  originalRestaurants:any[];
  restaurants:any[] = [
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
}

interface Cuisine{
  name:string;
  value:string;
  selected:boolean;
}

 