import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Profile } from '../../shared/login.model';

import { LoginService } from '../../shared/login.service';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

declare var M: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  loggedInUser: Profile = LoginService.selectedProfile;

  constructor(private loginService: LoginService, private router: Router, private app: AppComponent) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();


      LoginService.selectedProfile = {
      _id: "",
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      address: "",
      phone: "",
      loggedIn: 0
    }
  }

  // Login
  onLogin(form: NgForm){
    let username = form.value.username;
    let password = form.value.password;

    this.loginService.getSpecificProfile(username, password).subscribe((res) => {
      this.resetForm(form);

      // Lokalno sacuvati objekat koji je funkcija vratila pre provere
      if(res !== null){
        LoginService.selectedProfile = res as Profile;
      }

      document.getElementById("ertx").textContent = "This combination of username & password doesn't exist.";

      if(username == LoginService.selectedProfile.username && password == LoginService.selectedProfile.password){
        this.router.navigate(['']);

        // sačuvati ga ako je uspešno ulogovan i staviti mu flag loggedIn na true
        LoginService.selectedProfile = res as Profile;
        LoginService.selectedProfile.loggedIn = 1;
        this.app.loggedIn = true;
      } else {
        LoginService.selectedProfile = {
          _id        : "",
          username  : "",
          password  : "",
          firstname : "",
          lastname  : "",
          address   : "",
          phone     : "",
          loggedIn  : 0
        }
      }

    });
}

  errorMessage(){

  }



/*
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
