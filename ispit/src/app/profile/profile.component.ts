import { Component, OnInit } from '@angular/core';
import { Profile, Profile2 } from '../shared/login.model';
import { LoginService } from '../shared/login.service';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import {Location} from '@angular/common';
import { LoginComponent } from '../auth/login/login.component';

declare var M: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  isEditing: boolean = false;
  profileForInput: Profile = LoginService.selectedProfile;
  localId: String = LoginService.selectedProfile._id;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private loginService: LoginService) { }

  ngOnInit(): void {
    /*let profileX: Profile = {
      _id: "6001b9191169703b54644dda",
      username: "Aca",
      password: "test123",
      firstname: "Aca",
      lastname: "Aca",
      address: "Aca",
      phone: "Aca",
      loggedIn: 1
    };

  this.loginService.putProfile(profileX);*/


  }

  finishEditing(form: NgForm) {
    /*
    console.log(this.data.user);
    console.log(LoginService.dummyUserList);
    */

    LoginService.selectedProfile._id       = form.value._id;
    LoginService.selectedProfile.username  = form.value.username;
    LoginService.selectedProfile.password  = form.value.password;
    LoginService.selectedProfile.address   = form.value.address;
    LoginService.selectedProfile.firstname = form.value.firstname;
    LoginService.selectedProfile.lastname  = form.value.lastname;
    LoginService.selectedProfile.phone     = form.value.phone;
    console.log(LoginService.selectedProfile);


    let profileForPutting: Profile2 = {
      username: LoginService.selectedProfile.username,
      password: LoginService.selectedProfile.password,
      firstname: LoginService.selectedProfile.firstname,
      lastname: LoginService.selectedProfile.lastname,
      address: LoginService.selectedProfile.address,
      phone: LoginService.selectedProfile.phone,
      loggedIn: 1
    }

    console.log(profileForPutting);

    let idForPut: String = LoginService.selectedProfile._id;
    console.log(idForPut);
    //this.profileForInput = LoginService.selectedProfile;

    this.loginService.putProfile(profileForPutting, idForPut).subscribe((res) => {
      M.toast({ html: 'Saved successfully', classes: 'rounded' });
    });


    this.isEditing = false;
  }


/*
  onEdit(profile: Profile) {
    this.loginService.putProfile(profile, this.localId);
  }*/

  goBack() {
    this.isEditing = false;

    this.data.user.username   = LoginService.selectedProfile.username;
    this.data.user.password   = LoginService.selectedProfile.password;
    this.data.user.address    = LoginService.selectedProfile.address;
    this.data.user.firstname  = LoginService.selectedProfile.firstname;
    this.data.user.lastname   = LoginService.selectedProfile.lastname;
    this.data.user.phone      = LoginService.selectedProfile.phone;
    this.data.user.loggedIn   = LoginService.selectedProfile.loggedIn;

    /*
    this.profileForInput = {
      id:         LoginService.selectedProfile.id,
      username:   LoginService.selectedProfile.username,
      password:   LoginService.selectedProfile.password,
      firstname:  LoginService.selectedProfile.firstname,
      lastname:   LoginService.selectedProfile.lastname,
      address:    LoginService.selectedProfile.address,
      phone:      LoginService.selectedProfile.phone,
      loggedIn:   LoginService.selectedProfile.loggedIn
    };
    */
  }

}
