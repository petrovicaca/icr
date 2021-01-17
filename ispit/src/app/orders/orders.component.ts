import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Orders } from '../shared/orders.model';
import { OrdersService } from '../shared/orders.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit, AfterViewInit {

  displayedColumnsCart = ["actions"];
  displayedColumnsOrders = ["status","actions"];
  ordersSource = new MatTableDataSource<Orders>();

  @ViewChild(MatSort) sort : MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator : MatPaginator;

  constructor(private ordersService : OrdersService) { }

  ngOnInit(): void {
    this.ordersSource.data = this.ordersService.getOrders();
  }

  ngAfterViewInit() {
    this.ordersSource.sort = this.sort;
    this.ordersSource.paginator = this.paginator;
  }

  doFilter(filterValue : string) {
    this.ordersSource.filter = filterValue.trim().toLowerCase();
  }

}
