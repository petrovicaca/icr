import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { Candy } from '../shared/candy.model';
import { CandyService } from '../shared/candy.service';

import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {Observable} from 'rxjs/Observable';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-candy',
  templateUrl: './candy.component.html',
  styleUrls: ['./candy.component.css'],
  providers: [CandyService]
})
export class CandyComponent implements OnInit, AfterViewInit {

  displayedColumns = ["name", "weight", "price", "picture", "category", "description", "shipping", "rating", "order"];

  candySource; //new MatTableDataSource<Candy>();

  cartOpened : boolean = false;

  @ViewChild(MatSort, {static: false}) sort : MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator : MatPaginator;

  constructor(private candyService : CandyService, private dialog: MatDialog) { }

  ngOnInit(): void {
    //this.candySource.data = this.candyService.getCandyList();

    this.candyService.getCandyList().subscribe(
      resp => {
        this.candySource = new MatTableDataSource(resp);
      }, err => {
        console.log(err);
      }
    )

  }

  ngAfterViewInit() {
    this.candySource.sort = this.sort;
    this.candySource.paginator = this.paginator;
  }

  doFilter(filterValue : string) {
    this.candySource.filter = filterValue.trim().toLowerCase();
  }

  openCart() {
    this.cartOpened = true;

    const profileDialog = this.dialog.open(CartComponent, {
      disableClose: true,
    });

    profileDialog.afterClosed().subscribe(result => {
      this.cartOpened = false;
    })
  }

}
