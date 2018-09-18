import { NgModule, ModuleWithProviders, Component }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

      {
        path: '',
        component: LayoutComponent,
        children: [
          { path: '', component: HomeComponent },
          { path: 'home', component: HomeComponent }
      ]
    }
  ];
// export const routing: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}