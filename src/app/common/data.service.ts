import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class DataService {

  baseUrl:string = "http://localhost:3000"
  constructor(private http:Http) { }

  getRestaurants():Observable<any[]>{
    return this.http.get(`${this.baseUrl}/restaurants`).map(d=>d.json());
  }

  getRestaurant(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/restaurants/${id}`).map(d=>d.json());
  }

  getMenuItems(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/menuItems/${id}`).map(d=>d.json()).map(d=>d.menu);
  }

}
