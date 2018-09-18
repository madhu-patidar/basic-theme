import { NgModule, ModuleWithProviders }             from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: '/home/webwerks/basic-theme/src/app/common/common.module#CommonAppModule'
  },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes, config) ]

})

export class AppRoutingModule {}