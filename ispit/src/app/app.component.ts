import { Component }          from '@angular/core';
import { MatDialog }          from '@angular/material/dialog';
import { ProfileComponent }   from './profile/profile.component';
import { LoginService }       from './shared/login.service';
import { Profile }            from '../app/shared/login.model';
import { ChatService } from './shared/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ispit';
  profileOpened : boolean = false;
  loggedIn: boolean = false;

  constructor(public loginService: LoginService, private dialog : MatDialog, public chatService: ChatService) {}

  //profileX: String = this.loginService.getUserName();

  ngOnInit(): void{

  }

  openProfile() {
    this.profileOpened = true;

    const profileDialog = this.dialog.open(ProfileComponent, {
      disableClose: true,
      width: "30vw",
      data: { user: this.loginService.getByUsername }
    });``

    profileDialog.afterClosed().subscribe(result => {
      this.profileOpened = false;
    })
  }

  logout(){
    this.loggedIn = false;

    let emptyProfile: Profile = {
      _id: "",
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      address: "",
      phone: "",
      loggedIn: 0
    }

    LoginService.selectedProfile = emptyProfile;
  }

}
