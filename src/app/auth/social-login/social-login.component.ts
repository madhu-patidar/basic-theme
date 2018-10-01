import { Component, OnInit } from '@angular/core';
// import { AuthService, SocialUser } from "angularx-social-login";
// import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider } from "angularx-social-login";
import {
  SocialAuthService,
  FacebookLoginProvider,
  GoogleLoginProvider,
} from 'ng-social';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.css']
})
export class SocialLoginComponent implements OnInit {
  
  // private user: SocialUser;
 
  private loggedIn: boolean;
  currentUser:any;

  constructor(
    private router : Router,
    private socialAuthService: SocialAuthService,
    private authService : AuthService,
    private toastr: ToastrService,
  ){}
  
  public socialLogin(platform: string) {
    let socialPlatformProvider;

    if(platform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if(platform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then((userData) => {
      this.currentUser = userData;
      this.afterLogin();
      console.log(platform + " login in data : " , userData);
      
    });

  }

  doTwitterLogin(){
    this.authService.doTwitterLogin().then((userData)=>{
      this.currentUser = userData;
      this.toastr.success('', userData.user.displayName+  " you are successfully loged in ");
      this.afterLogin();
    });
  }

  afterLogin(){
    if(confirm('You has been successfully loged in you want to move home page')){
      this.router.navigate(['/home']);
    }
  }
  
  onSubmit(fc: NgForm) {
    console.log(fc.value);  // { first: '', last: '' }
    console.log(fc.valid);  // false
  }

  ngOnInit() {
    // this.authService.authState.subscribe((user) => {
    //   this.user = user;
    //   this.loggedIn = (user != null);
    // });
  }
  // signInWithGoogle(): void {
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  // }
 
  // signInWithFB(): void {
  //   this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  // }
  
  // signInWithLinkedIn(): void {
  //   this.authService.signIn(LinkedInLoginProvider.PROVIDER_ID);
  // }  
 
  // signOut(): void {
  //   this.authService.signOut();
  // }

}
