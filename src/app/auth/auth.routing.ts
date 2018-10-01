import { NgModule, ModuleWithProviders, Component }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SocialLoginComponent } from './social-login/social-login.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
const routes: Routes = [
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
          { path: '', component: SocialLoginComponent },
          { path: 'social-login', component: SocialLoginComponent }
        ]
    }
  ];
// export const routing: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}