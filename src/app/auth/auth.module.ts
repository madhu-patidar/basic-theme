import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import  { AuthRoutingModule } from './auth.routing'
import { SocialLoginComponent } from './social-login/social-login.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { AuthService } from './services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    SocialLoginComponent,
    AuthLayoutComponent
  ],
  providers: [
    AuthService,
    AngularFireAuth
  ]
})
export class AuthModule { }
