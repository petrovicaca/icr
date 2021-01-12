import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Profile } from './login.model';

@Injectable()
export class LoginService {

  selectedProfile: Profile;
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

}
