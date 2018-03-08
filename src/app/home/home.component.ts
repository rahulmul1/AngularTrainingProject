import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name:string;
  address:string;
  constructor(private router:Router) { }

  ngOnInit() {
    this.name = localStorage.getItem("name");
    this.address = localStorage.getItem("address");
  }

  changeDeliveryDetails(){
    localStorage.setItem("name",this.name);
    localStorage.setItem("address",this.address);
    this.router.navigate(["/list"]);
  }

}
