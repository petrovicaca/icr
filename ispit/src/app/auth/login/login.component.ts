import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Profile } from '../../shared/login.model';


import { LoginService } from '../../shared/login.service';
//import { Profile } from '../../shared/login.model';

declare var M: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  constructor(public loginService: LoginService) { }

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
    let username: String;
    let password: String;

    let lista: Profile[];



    //lista = JSON.parse(this.loginService.getProfileList);

    // lista = Array.of(this.loginService.getProfileList);
    /*
    let duzina = this.loginService.getProfileList.length;

    for(let i = 0; i < duzina; i++){
      let lokal = this.loginService.getProfileList;

      lista.push();
    }*/

    //let obj: { string: Profile[]} = JSON.parse()

    //lista = Array.of(this.loginService.getProfileList);



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
