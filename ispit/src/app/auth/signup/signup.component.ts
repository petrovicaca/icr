import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/login.service';
import { Profile } from '../../shared/login.model';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [LoginService]
})
export class SignupComponent implements OnInit {

  hide = true;

  constructor(public loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.resetForm();
  }

  onSubmit(form : NgForm) {
    console.log(form);
  }

  onRegister(form: NgForm){

    let profile: Profile = {
      _id: form.value._id,
      username: form.value.username,
      password: form.value.password,
      firstname: form.value.firstname,
      lastname: form.value.lastname,
      address: form.value.address,
      phone: form.value.phone,
      loggedIn: 0
    }


    document.getElementById("ertx").textContent = "This user already exists!";
    this.loginService.postProfile(profile).subscribe((res) => {
        this.router.navigate(['']);
    });

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


}


