import { Injectable } from '@angular/core';
import { getLocaleCurrencyCode } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Candy } from "./candy.model";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Observable} from 'rxjs/Observable';

@Injectable()
export class CandyService {

  selectedCandy: Candy ={
    id: "",
    name: "",
    weight: "",
    calories: "",
    picture: "",
    type: "candies"
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

// CHUPA CHUPS --- CHUPA CHUPS --- CHUPA CHUPS --- CHUPA CHUPS --- CHUPA CHUPS --- CHUPA CHUPS --- CHUPA CHUPS --- CHUPA CHUPS

    private candiesStatic: Candy [] = [
        { id: '1', name: 'Chocolate candy 1', weight: '10 gr', calories: '24 cal', picture: " ", type: 'chocolate' },
        { id: '2', name: 'Chocolate candy 2', weight: '20 gr', calories: '25 cal', picture: " ", type: 'chocolate' },
        { id: '3', name: 'Chocolate candy 3', weight: '30 gr', calories: '26 cal', picture: " ", type: 'chocolate' },
        { id: '4', name: 'Chocolate candy 4', weight: '40 gr', calories: '27 cal', picture: " ", type: 'chocolate' },
        { id: '5', name: 'Chocolate candy 5', weight: '50 gr', calories: '28 cal', picture: " ", type: 'chocolate' }
    ]

    getCandy() {
        return this.candies;
    }
}
