import { NgModule, ModuleWithProviders, Component }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CalenderComponent } from './components/calender/calender.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { ImageCropperComponent } from './components/image-cropper/image-cropper.component';
import { SelectDropdownComponent } from './components/select-dropdown/select-dropdown.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { HighChartComponent } from './components/high-chart/high-chart.component';
import { D3GraphComponent } from './components/d3-graph/d3-graph.component';
import { EmployeeComponent } from './components/employees/employee/employee.component';
import { EmployeeListComponent } from './components/employees/employee-list/employee-list.component';
import { EmployeesComponent } from './components/employees/employees.component';

const routes: Routes = [

      {
        path: '',
        component: LayoutComponent,
        children: [
          { path: '', component: HomeComponent },
          { path: 'home', component: HomeComponent },
          { path: 'carousel', component: CarouselComponent },
          { path: 'calender', component: CalenderComponent },
          { path: 'image-upload', component: FileUploadComponent },
          { path: 'image-cropper', component: ImageCropperComponent },
          { path: 'select-dropdown', component: SelectDropdownComponent },
          { path: 'reactive-form', component: ReactiveFormComponent },
          { path: 'datatable', component: DataTableComponent },
          { path: 'high-chart', component: HighChartComponent },
          { path: 'd3-chart', component: D3GraphComponent },
          { path: 'employee', component: EmployeeComponent },
          { path: 'employees', component: EmployeesComponent },
          { path: 'employee-list', component: EmployeeListComponent },
      ]
    }
  ];
// export const routing: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}