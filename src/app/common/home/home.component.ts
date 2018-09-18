import { Component, OnInit, TemplateRef, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { ToastrService } from 'ngx-toastr';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import * as $ from 'jquery';
import 'datatables.net'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
  ]
})
export class HomeComponent implements OnInit {

  modalRef: BsModalRef;
  @Output() rowSelected: EventEmitter<number> = new EventEmitter();

  constructor(
    private toastr: ToastrService,
    private modalService: BsModalService
  ) { }

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png",
    maxSize: "1",
    uploadAPI:  {
      url:"https://example-file-upload-api",
      headers: {
     "Content-Type" : "text/plain;charset=UTF-8",
      }
    },
    theme: "dragNDrop",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: true
};

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  data = [
    {name: "abc", lastName : 'def'},
    {name: "abc", lastName : 'def'},
    {name: "abc", lastName : 'def'},
    {name: "abc", lastName : 'def'},
    {name: "abc", lastName : 'def'},
    {name: "abc", lastName : 'def'},
    {name: "abc", lastName : 'def'},
    {name: "abc", lastName : 'def'},
    {name: "abc", lastName : 'def'},
    {name: "abc", lastName : 'def'},
    {name: "abc", lastName : 'def'},
    {name: "abc", lastName : 'def'},
    {name: "abc", lastName : 'def'},
    {name: "abc", lastName : 'def'},
    {name: "abc", lastName : 'def'},
    {name: "abc", lastName : 'def'},
    {name: "abc", lastName : 'def'},
    {name: "abc", lastName : 'def'},
    {name: "abc", lastName : 'def'},
    {name: "abc", lastName : 'def'},
    {name: "abc", lastName : 'def'},
  ]
  public tableWidget: any;

  ngOnInit () {
    this.initDropDown(); 
    this.initDatatable();  
  }


  /**
   * data table 
   */

  private initDatatable(): void {
    let exampleId: any = $('#example');
    this.tableWidget = exampleId.DataTable({
      select: true
    });
    this.tableWidget.on('select',
      (e, dt, type, indexes) => this.onRowSelect(indexes))
  }
  
  private onRowSelect(indexes: number[]): void {
    this.rowSelected.emit(indexes[0])
  }

  // private initDatatable(): void {
  //   let exampleId: any = $('#example');
  //   this.tableWidget = exampleId.DataTable({
  //     select: true
  //   });
  // }

  private reInitDatatable(): void {
    if (this.tableWidget) {
      this.tableWidget.destroy()
      this.tableWidget=null
    }
    setTimeout(() => this.initDatatable(),0)
  }

  public deleteRow(): void {
    this.data.pop();
    this.reInitDatatable()
  }

  /**
   * Initilized Drop dwon 
   */
  initDropDown(){
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  onItemSelect (item:any) {
    console.log(item);
  }
  onSelectAll (items: any) {
    console.log(items);
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  /**
   * Sweet alert
   */
  onClick(){
    Swal({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

   /**
   * Modal pop 
   */
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  /**
   * Image cropper functionality 
   */

  imageChangedEvent: any = '';
  croppedImage: any = '';

  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
  }
  imageCropped(image: string) {
      this.croppedImage = image;
  }
  imageLoaded() {
      // show cropper
  }
  loadImageFailed() {
      // show message
  }


}
