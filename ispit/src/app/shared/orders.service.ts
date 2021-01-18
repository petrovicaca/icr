import { Injectable } from "@angular/core";
import { Order } from "./orders.model";

@Injectable()
export class OrdersService {

  static selectedOrder: Order = {
    items: [],
    price: 0,
    status: 'in progress'
  }

  static orderHistory: Array<Order> = [];
  static orderSource;

  /*
  private orders : Order [] = [
    { items: '1, 2, 3', price: 100,   status: 'in progress' },
    { items: '1, 2, 3', price: 100,   status: 'in progress' }
  ]

  getOrders() {
      return this.orders;
  }*/


}


/*

  selectedCandy: Candy ={
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
/*
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
*/
