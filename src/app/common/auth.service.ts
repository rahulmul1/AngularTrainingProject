import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthService implements CanActivate{

  constructor() { }

  canActivate(): boolean {
    let user = localStorage.getItem("name");
    if(user) {
      return true;
    } else {
      return false;
    }
  }
}