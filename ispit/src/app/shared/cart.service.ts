import { Injectable } from '@angular/core';
import { getLocaleCurrencyCode } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Candy } from "./candy.model";
import { Cart  } from "./cart.model";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Observable} from 'rxjs/Observable';

@Injectable()
export class CartService {

  static money: number = 0;

  static selectedCart: Cart = {
    name: "userCart",
    candy: []
  }

  static cartSource;

  readonly baseURL = 'http://localhost:3000/cart';

  constructor(private http: HttpClient) { }

  postCart(cart: Cart) {
    return this.http.post(this.baseURL, cart);
  }


  getCartList():Observable<Cart[]> {
    return this.http.get<Cart[]>(this.baseURL);
  }

/*
  getSpecificCandy(name: String){
    return this.http.get(this.baseURL + `/${username}` + `/${password}`);
  }
*/

  getByName(name: String){
    return this.http.get(this.baseURL + `/${name}`);
  }
/*
  putCart(cart: Cart) {
    return this.http.put(this.baseURL + `/${cart.id}`, cart);
  }

  deleteCart(id: string) {
    return this.http.delete(this.baseURL + `/${id}`);
  }*/

}
