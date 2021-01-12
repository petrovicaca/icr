import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Profile } from '../../shared/login.model';

import { LoginService } from '../../shared/login.service';
import { Router } from '@angular/router';

declare var M: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  // loggedInUser: Profile;

  constructor(public loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.loginService.selectedProfile = {
      id: "",
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      address: "",
      phone: ""
    }
  }

  // Login
  onLogin(form: NgForm){
    let username = form.value.username;
    let password = form.value.password;

    this.loginService.getSpecificProfile(username, password).subscribe((res) => {
      this.resetForm(form);

      // Lokalno sacuvati objekat koji je funkcija vratila
      if(res !== null){
        this.loginService.selectedProfile = res as Profile;
      }

      document.getElementById("ertx").textContent = "This combination of username & password doesn't exist.";

      if(username == this.loginService.selectedProfile.username && password == this.loginService.selectedProfile.password){
        this.router.navigate(['']);
      }

    });
}

  errorMessage(){

  }


/*
  onEdit(profile: Profile) {
    this.loginService.selectedProfile = profile;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.loginService.deleteProfile(_id).subscribe((res) => {
        this.resetForm(form);

        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }
*/
}
