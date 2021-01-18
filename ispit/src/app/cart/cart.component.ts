import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Candy } from '../shared/candy.model';
import { CandyService } from '../shared/candy.service';
import { CartService } from '../shared/cart.service';
import { OrdersService } from '../shared/orders.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService, private candyService: CandyService) { }

  candyForInput: Candy = CandyService.selectedCandy;
  cartSource;

  ngOnInit(): void {
    //this.cartService.selectedCart.candy.push(CandyService.selectedCandy);
    //this.cartSource = new MatTableDataSource(this.cartService.selectedCart.candy);
    //console.log(this.cartService.selectedCart);
  }

  addToCart(): void{
    if(CandyService.selectedCandy.name !== ""){
      CartService.selectedCart.candy.push(CandyService.selectedCandy);
    }

    this.cartSource        = new MatTableDataSource(CartService.selectedCart.candy);
    CartService.cartSource = this.cartSource;
    console.log(CartService.selectedCart);
  }

}
