import { Component, OnInit } from '@angular/core';
import { Profile } from '../shared/login.model';
import { LoginService } from '../shared/login.service';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import {Location} from '@angular/common';
import { LoginComponent } from '../auth/login/login.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  isEditing: boolean = false;
  //profileForInput: Profile;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public loginService: LoginService) { }

  ngOnInit(): void {
    /*this.profileForInput = {
      id: this.data.user.id,
      username: this.data.user.username,
      password: this.data.user.password,
      firstname: this.data.user.firstname,
      lastname: this.data.user.lastname,
      address: this.data.user.adress,
      phone: this.data.user.phone
    };*/

  }

  finishEditing(form: NgForm) {
    /*
    console.log(this.data.user);
    console.log(LoginService.dummyUserList);
    */

    this.loginService.selectedProfile.username = form.value.username;
    this.loginService.selectedProfile.password = form.value.password;
    this.loginService.selectedProfile.address = form.value.address;
    this.loginService.selectedProfile.firstname = form.value.firstname;
    this.loginService.selectedProfile.lastname = form.value.lastname;
    this.loginService.selectedProfile.lastname = form.value.phone;

    this.data.user.username = this.loginService.selectedProfile.username;
    this.data.user.password = this.loginService.selectedProfile.username;
    this.data.user.address = this.loginService.selectedProfile.username;
    this.data.user.firstname = this.loginService.selectedProfile.firstname;
    this.data.user.lastname = this.loginService.selectedProfile.lastname;
    this.data.user.phone = this.loginService.selectedProfile.phone;

    this.onEdit(this.loginService.selectedProfile);

    this.isEditing = false;
  }

  onEdit(profile: Profile) {
    this.loginService.selectedProfile = profile;
    this.loginService.putProfile(profile);
  }

  goBack() {
    this.isEditing = false;

    this.data.user.username = this.loginService.selectedProfile.username;
    this.data.user.password = this.loginService.selectedProfile.username;
    this.data.user.address = this.loginService.selectedProfile.username;
    this.data.user.firstname = this.loginService.selectedProfile.firstname;
    this.data.user.lastname = this.loginService.selectedProfile.lastname;
    this.data.user.phone = this.loginService.selectedProfile.phone;

    /*
    this.profileForInput = {
      id: this.data.user.id,
      username: this.data.user.username,
      password: this.data.user.password,
      firstname: this.data.user.firstname,
      lastname: this.data.user.lastname,
      address: this.data.user.adress,
      phone: this.data.user.phone
    };
    */
  }

}
