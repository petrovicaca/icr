import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ispit';

  profileOpened : boolean = false;

  constructor(private dialog : MatDialog) {}

  openProfile() {
    this.profileOpened = true;

    const profileDialog = this.dialog.open(ProfileComponent, {
      disableClose: true,
      width: "30vw"
    });

    profileDialog.afterClosed().subscribe(result => {
      this.profileOpened = false;
    })
  }
}
