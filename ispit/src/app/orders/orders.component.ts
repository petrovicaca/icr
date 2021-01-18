import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Candy } from '../shared/candy.model';
import { CandyService } from '../shared/candy.service';
import { CartService } from '../shared/cart.service';
import { Order } from '../shared/orders.model';
import { OrdersService } from '../shared/orders.service';
import { CartComponent } from '../cart/cart.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit, AfterViewInit {

  displayedColumnsCart = ["name", "category", "price", "actions"];
  displayedColumnsOrders = ["items", "price", "status", "actions"];
  displayedColumnsOrders2 = ["items", "price", "status", "rate", "actions"];
  editable: boolean = false;
  money: Number = CartService.money;

  rateOpened = false;
  currentRate = 0;

  @ViewChild(MatSort) sort : MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator : MatPaginator;

  constructor(private ordersService : OrdersService, private candyService: CandyService, private cartService: CartService) { }

  candySource;

  candyForInput: Candy = CandyService.selectedCandy;
  cartSource;
  ordersSource;
  ordersSource2;
  orders: Array<Order> = [];

  ngOnInit(): void {
    this.cartSource = CartService.cartSource;
    this.ordersSource = OrdersService.orderSource;
    this.ordersSource2 = OrdersService.orderHistory;
    //this.ordersSource = OrdersService.orderSource;
    //this.ordersSource.data = this.ordersService.getOrders();
    //console.log(this.ordersService.getOrders());
  }

  delete(e): void{
    //const index = this.cartService.selectedCart.candy.splice(e.id);
    CartService.selectedCart.candy.splice(e, 1);

    this.cartSource = new MatTableDataSource(CartService.selectedCart.candy);
    //console.log(this.cartService.selectedCart);
  }


  deleteOrder(e): void{
    //this.ordersService.selectedOrder.items.splice(e, 1);
    this.orders.splice(e, 1);
    this.ordersSource = new MatTableDataSource(this.orders);
  }

  deleteOrderHistory(e): void{
    //this.ordersService.selectedOrder.items.splice(e, 1);
    OrdersService.orderHistory.splice(e, 1);
    this.ordersSource2 = new MatTableDataSource(OrdersService.orderHistory);
  }


  buy(): void{

    var data = CartService.selectedCart.candy.map(t=>t.name);
    var data2 = CartService.selectedCart.candy.map(d=>d.price);

    for (let i = 0; i < data.length; i++) {
      OrdersService.selectedOrder.items.push(data[i]);
      OrdersService.selectedOrder.price = OrdersService.selectedOrder.price + data2[i];
      console.log(data[i]);
      console.group(data2[i]);
    }

    this.orders.push(OrdersService.selectedOrder);

    this.ordersSource         = new MatTableDataSource(this.orders);
    OrdersService.orderSource = this.ordersSource;

    this.cartSource = new MatTableDataSource();
  }

  edit(): void{
    this.editable = true;
  }

  edit2(): void{
    this.editable = false;
  }

  finish(e): void{
    e.status = "finished";
    OrdersService.orderHistory.push(e);
    this.ordersSource = new MatTableDataSource();
    this.ordersSource2 = new MatTableDataSource(OrdersService.orderHistory);
  }

  ngAfterViewInit() {
    this.ordersSource.sort = this.sort;
    this.ordersSource.paginator = this.paginator;
  }

  doFilter(filterValue : string) {
    this.ordersSource.filter = filterValue.trim().toLowerCase();
  }

}
