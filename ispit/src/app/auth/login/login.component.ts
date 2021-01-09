import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Profile } from '../../shared/login.model';


import { LoginService } from '../../shared/login.service';
//import { Profile } from '../../shared/login.model';
import { Router } from '@angular/router';

declare var M: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  constructor(public loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.loginService.selectedProfile = {
      _id: "",
      username: "",
      password: ""
    }
  }


  // Login
  onLogin(form: NgForm){
    let username = form.value.username;
    let password = form.value.password;

    this.loginService.getSpecificProfile(username, password).subscribe((res) => {
      this.resetForm(form);

      // Lokalno sacuvati objekat koji je funkcija vratila
      this.loginService.selectedProfile = res as Profile;


      if(username == this.loginService.selectedProfile.username && password == this.loginService.selectedProfile.password){
        console.log("Uspesno logovanje");
        this.router.navigate(['']);
      }

    });
}


  // Create new user
  onRegister(form: NgForm){
    if (form.value._id == "") {
      this.loginService.postProfile(form.value).subscribe((res) => {
        this.resetForm(form);

        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }

    else {
      this.loginService.putProfile(form.value).subscribe((res) => {
        this.resetForm(form);

        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }

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
