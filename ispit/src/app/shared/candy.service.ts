import { Injectable } from '@angular/core';
import { getLocaleCurrencyCode } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Candy } from "./candy.model";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Observable} from 'rxjs/Observable';

@Injectable()
export class CandyService {

  static keyword: String;

  static selectedCandy: Candy ={
    id: "",
    name: "",
    weight: 0,
    price: 0,
    picture: "",
    category: "candies",
    description: "",
    shipping: 0,
    rating: 0
}

  candies: Candy[];
  readonly baseURL = 'http://localhost:3000/candies';

  constructor(private http: HttpClient) { }

  postCandy(candy: Candy) {
    return this.http.post(this.baseURL, candy);
  }

  getCandyList():Observable<Candy[]> {
    return this.http.get<Candy[]>(this.baseURL);
  }

/*
  getSpecificCandy(name: String){
    return this.http.get(this.baseURL + `/${username}` + `/${password}`);
  }
*/

  getByName(name: String){
    return this.http.get(this.baseURL + `/${name}`);
  }

  putCandy(candy: Candy) {
    return this.http.put(this.baseURL + `/${candy.id}`, candy);
  }

  deleteCandy(id: string) {
    return this.http.delete(this.baseURL + `/${id}`);
  }

}
