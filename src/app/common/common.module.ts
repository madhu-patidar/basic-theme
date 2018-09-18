import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutComponent } from './layout/layout.component';
import { LayoutRoutingModule } from './common-routing.module';
import { HomeComponent } from './home/home.component';

//Third party packages 
import { ModalModule, BsDatepickerModule, CarouselModule, BsDropdownModule } from 'ngx-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgSelectModule, NG_SELECT_DEFAULT_CONFIG } from '@ng-select/ng-select';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { ImageCropperModule } from 'ngx-image-cropper';
import { DataTablesModule } from 'angular-datatables';
import { SideBarComponent } from './share-components/side-bar/side-bar.component';
import { NavBarComponent } from './share-components/nav-bar/nav-bar.component';

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
  ],
  declarations: [LayoutComponent, HomeComponent, SideBarComponent, NavBarComponent],
  providers: [
    {
        provide: NG_SELECT_DEFAULT_CONFIG,
        useValue: {
            notFoundText: 'Custom not found'
        }
    }
]
})
export class CommonAppModule { }
