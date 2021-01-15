import { Component }          from '@angular/core';
import { MatDialog }          from '@angular/material/dialog';
import { ProfileComponent }   from './profile/profile.component';
import { LoginService }       from './shared/login.service';
import { Profile }            from '../app/shared/login.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ispit';

  profileOpened : boolean = false;

  constructor(private loginService: LoginService, private dialog : MatDialog) {}

  //profileX: String = this.loginService.getUserName();


  openProfile() {
    this.profileOpened = true;

    const profileDialog = this.dialog.open(ProfileComponent, {
      disableClose: true,
      width: "30vw",
      data: { user: this.loginService.getByUsername }
    });

    profileDialog.afterClosed().subscribe(result => {
      this.profileOpened = false;
    })
  }
}
