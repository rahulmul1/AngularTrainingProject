import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { HomeComponent } from './home/home.component';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';

const routes:Routes=[
  {
    path : '',component:HomeComponent
  },
  {
    path : 'list',component:RestaurantListComponent
  },
  {
    path : 'menu/:id',component:RestaurantMenuComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    RestaurantListComponent,
    StarRatingComponent,
    HomeComponent,
    RestaurantMenuComponent
  ],
  imports: [
    BrowserModule, RouterModule,FormsModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
