import { Component, OnInit } from '@angular/core';
import { Profile } from '../shared/login.model';
import { LoginService } from '../shared/login.service';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  isEditing: boolean = false;
  profileForInput: Profile;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public loginService: LoginService, private location: Location) { }

  ngOnInit(): void {
    this.profileForInput = {
      id: this.data.user.id,
      username: this.data.user.username,
      password: this.data.user.password,
      firstname: this.data.user.firstname,
      lastname: this.data.user.lastname,
      address: this.data.user.adress,
      phone: this.data.user.phone
    };
  }

  finishEditing(form: NgForm) {
    this.data.user.username = this.profileForInput.username;
    this.data.user.password = this.profileForInput.password;
    this.data.user.address = this.profileForInput.address;
    console.log(this.data.user);
    console.log(LoginService.dummyUserList);
    this.isEditing = false;
  }

  goBack() {
    this.isEditing = false;
  }
  
}
