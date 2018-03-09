import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { HomeComponent } from './home/home.component';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';
import { Child } from './simple/child';
import { Parent } from './simple/parent';
import { AuthService } from './common/auth.service';
import { Obs } from './simple/obs';
import {HttpModule} from '@angular/http';
import { DataService } from './common/data.service';

const routes:Routes=[
{path:'',component:HomeComponent},
{path:'list',component:RestaurantListComponent,canActivate : [AuthService]},
{path:'menu/:id',component:RestaurantMenuComponent,canActivate : [AuthService]},
{path:'simple',component:Parent},
{path:'obs',component:Obs}
]

@NgModule({
  declarations: [
    AppComponent,
    RestaurantListComponent,
    StarRatingComponent,
    HomeComponent,
    RestaurantMenuComponent,
    Parent,
    Child,
    Obs
  ],
  imports: [
    BrowserModule,RouterModule,FormsModule,RouterModule.forRoot(routes),HttpModule
  ],
  providers: [AuthService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
