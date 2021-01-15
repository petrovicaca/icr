import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Profile } from './login.model';

@Injectable()
export class LoginService {

  selectedProfile: Profile ={
      id: "",
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      address: "",
      phone: ""
  };

  profiles: Profile[];
  readonly baseURL = 'http://localhost:3000/profiles';

  constructor(private http: HttpClient) { }

  postProfile(profile: Profile) {
    return this.http.post(this.baseURL, profile);
  }

  getProfileList() {
    return this.http.get(this.baseURL);
  }

  getSpecificProfile(username: String, password: String){
    return this.http.get(this.baseURL + `/${username}` + `/${password}`);
  }

  getByUsername(username: String){
    return this.http.get(this.baseURL + `/${username}`);
  }

  putProfile(profile: Profile) {
    return this.http.put(this.baseURL + `/${profile.id}`, profile);
  }

  deleteProfile(id: string) {
    return this.http.delete(this.baseURL + `/${id}`);
  }






  //STATIC PROFILE DUMMY DATA
/*
  static dummyUserList: Array<Profile> = [
    {
      id: "1",
      username: "test1@test.com ",
      password: "test12345",
      firstname: "First name 1",
      lastname: "Last name 1",
      address: "Adress 1",
      phone: "Phone number 1"
    },
    {
      id: "2",
      username: "test2@test.com ",
      password: "test6789",
      firstname: "First name 1",
      lastname: "Last name 1",
      address: "Adress 2",
      phone: "Phone number 2"
    }
  ]

  getUserName(user: Profile) : string {
    return user.username;
  }

  currentUser: Profile = LoginService.dummyUserList[0];

  getUserById(id: string) : Profile {
    var foundUser : Profile;
    LoginService.dummyUserList.forEach(user => {
      if(user.id == id) {
        foundUser = user;
      }
    });

    this.currentUser = foundUser;
    return foundUser;
  }

  getUser(username: string) : Profile {
    this.currentUser = LoginService.dummyUserList.find(userToFind => userToFind.username == username);
    return this.currentUser;
  }

  registerUser(id: string, username: string, password: string, firstname: string, lastname: string, address: string, phone: string) : Profile {
    var user: Profile = {id, username, password, firstname, lastname, address, phone };

    LoginService.dummyUserList.push(user);

    this.currentUser = user;
    console.log(user);
    return user;
  }
*/
  //END OF STATIC DUMMY DATA

}
