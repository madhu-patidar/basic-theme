import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutComponent } from './layout/layout.component';
import { LayoutRoutingModule } from './common-routing.module';
import { HomeComponent } from './home/home.component';

//Third party packages 
import { ModalModule, BsDatepickerModule, CarouselModule, BsDropdownModule } from 'ngx-bootstrap';
import { DataTableModule } from "angular-6-datatable";


import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgSelectModule, NG_SELECT_DEFAULT_CONFIG } from '@ng-select/ng-select';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { ImageCropperModule } from 'ngx-image-cropper';
import { DataTablesModule } from 'angular-datatables';
import { SideBarComponent } from './share-components/side-bar/side-bar.component';
import { NavBarComponent } from './share-components/nav-bar/nav-bar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CalenderComponent } from './components/calender/calender.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { ImageCropperComponent } from './components/image-cropper/image-cropper.component';
import { SelectDropdownComponent } from './components/select-dropdown/select-dropdown.component';
import { DataTableComponent } from './components/data-table/data-table.component';

//pipes 

import { FilterPipe } from './pipes/filter.pipe'
//services
import { CommentService } from './services/comment.service';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

@NgModule({
  imports: [
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
    // DataTablesModule
    DataTableModule
  ],
  declarations: [LayoutComponent, HomeComponent, SideBarComponent, NavBarComponent, CarouselComponent, CalenderComponent, FileUploadComponent, ImageCropperComponent, SelectDropdownComponent, ReactiveFormComponent, DataTableComponent,
    FilterPipe ],
  providers: [
    FilterPipe,
    CommentService,
    {
        provide: NG_SELECT_DEFAULT_CONFIG,
        useValue: {
            notFoundText: 'Custom not found'
        }
    }
]
})
export class CommonAppModule { }
