import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutComponent } from './layout/layout.component';
import { LayoutRoutingModule } from './common-routing.module';
import { HomeComponent } from './home/home.component';

//Third party packages 
import { ModalModule, BsDatepickerModule, CarouselModule, BsDropdownModule } from 'ngx-bootstrap';
import { DoughnutChartComponent, PieChartComponent, BarChartComponent } from 'angular-d3-charts'; // this is needed!
import { DataTableModule } from "angular-6-datatable";
import { PerfectScrollbarModule,
          PERFECT_SCROLLBAR_CONFIG,
          PerfectScrollbarConfigInterface
        } 
from 'ngx-perfect-scrollbar';
import { DataTablesModule } from 'angular-datatables';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../../environments/environment';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';
import * as highstock from 'highcharts/modules/stock.src';
// import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
// import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider} from "angularx-social-login"; 

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgSelectModule, NG_SELECT_DEFAULT_CONFIG } from '@ng-select/ng-select';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { ImageCropperModule } from 'ngx-image-cropper';
import { SideBarComponent } from './share-components/side-bar/side-bar.component';
import { NavBarComponent } from './share-components/nav-bar/nav-bar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CalenderComponent } from './components/calender/calender.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { ImageCropperComponent } from './components/image-cropper/image-cropper.component';
import { SelectDropdownComponent } from './components/select-dropdown/select-dropdown.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { D3GraphComponent } from './components/d3-graph/d3-graph.component';
//pipes
import { FilterPipe } from './pipes/filter.pipe'
//services
import { CommentService } from './services/comment.service';
import { EmployeeService } from './components/employees/employee.service';

import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { HighChartComponent } from './components/high-chart/high-chart.component';
import { SafePipe } from './pipes/safe.pipe';
import { EmployeeComponent } from './components/employees/employee/employee.component';
import { EmployeeListComponent } from './components/employees/employee-list/employee-list.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { SocialLoginComponent } from './components/social-login/social-login.component';
import { AuthService } from './services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
 

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    DataTablesModule,
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgSelectModule,
    AngularFileUploaderModule,
    ImageCropperModule,
    BsDropdownModule.forRoot(),
    DataTableModule,
    PerfectScrollbarModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ChartModule,
    // DoughnutChartComponent
  ],
  declarations: [LayoutComponent, HomeComponent, SideBarComponent, NavBarComponent, 
  CarouselComponent, CalenderComponent, FileUploadComponent, ImageCropperComponent, SelectDropdownComponent, ReactiveFormComponent, DataTableComponent,HighChartComponent,
  D3GraphComponent,
    DoughnutChartComponent, 
    PieChartComponent, 
    BarChartComponent,
     EmployeeComponent, EmployeeListComponent, EmployeesComponent, SocialLoginComponent, SafePipe, FilterPipe
  ],
  providers: [
    FilterPipe,
    CommentService,
    {
        provide: NG_SELECT_DEFAULT_CONFIG,
        useValue: {
            notFoundText: 'Custom not found'
        }
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    { provide: HIGHCHARTS_MODULES, useFactory: () => [ more, exporting, highstock ] },
    EmployeeService,
    AuthService,
    AngularFireAuth
    
]
})
export class CommonAppModule { }
