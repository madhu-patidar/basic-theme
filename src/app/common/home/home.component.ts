import { Component, OnInit, TemplateRef, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { ToastrService } from 'ngx-toastr';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { CommentService } from '../services/comment.service';

// import * as Highcharts from 'highcharts';
// import * as HC_map from 'highcharts/modules/map';
// HC_map(Highcharts);

import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
  ]
})
export class HomeComponent implements OnInit {
  // Highcharts = Highcharts; // required
  // chartConstructor = 'chart'; // optional string, defaults to 'chart'
  // chartOptions = {
  //     series: [{
  //       data: [1, 2, 3]
  //     }]
  //   }; // required
  // chartCallback = function (chart) {  } // optional function, defaults to null
  // updateFlag = false; // optional boolean
  // oneToOneFlag = true; // optional boolean, defaults to false

  modalRef: BsModalRef;
  @Output() rowSelected: EventEmitter<number> = new EventEmitter();
  dtOptions: DataTables.Settings = {};


  constructor(
    private toastr: ToastrService,
    private modalService: BsModalService,
    private commentService : CommentService
  ) { 
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength:5
    };
  }

  dtTrigger = new Subject();

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


onPost(){
  let input = {
    "body": "some comment2",
    "postId": 2
  }
  this.commentService.createComment(input).subscribe(res =>{
    console.log(res);
    })
}

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
    this.initDropDown(); ;  
  }
  
  private onRowSelect(indexes: number[]): void {
    this.rowSelected.emit(indexes[0])
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
