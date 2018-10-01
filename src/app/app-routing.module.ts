import { NgModule, ModuleWithProviders }             from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: 'src/app/common/common.module#CommonAppModule'
  },
  {
    path: "auth",
    loadChildren: 'src/app/auth/auth.module#AuthModule'
  },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  exports: [ RouterModule ],
  imports: [ 
    RouterModule.forRoot(routes, config)
   ]

})

export class AppRoutingModule {}