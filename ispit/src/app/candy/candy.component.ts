import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { Candy } from '../shared/candy.model';
import { CandyService } from '../shared/candy.service';

import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-candy',
  templateUrl: './candy.component.html',
  styleUrls: ['./candy.component.css']
})
export class CandyComponent implements OnInit, AfterViewInit {

  displayedColumns = ["name", "weight", "calories", "picture", "type", "order"];
  candySource = new MatTableDataSource<Candy>();

  @ViewChild(MatSort, {static: false}) sort : MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator : MatPaginator;

  constructor(private candyService : CandyService) { }

  ngOnInit(): void {
    this.candySource.data = this.candyService.getCandy();
  }

  ngAfterViewInit() {
    this.candySource.sort = this.sort;
    this.candySource.paginator = this.paginator;
  }

  doFilter(filterValue : string) {
    this.candySource.filter = filterValue.trim().toLowerCase();
  }

}
