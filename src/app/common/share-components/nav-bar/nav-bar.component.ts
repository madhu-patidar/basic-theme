import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
// import { AuthService } from 'angularx-social-login';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(
    private afAuth : AngularFireAuth
  ) { }

  ngOnInit() {
  }

  // signOut(): void {
  //   this.authService.signOut();
  // }

  signOut() {
    this.afAuth.auth.signOut();
  }

}
