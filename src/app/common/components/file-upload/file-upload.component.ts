import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  afuConfig:any;

  constructor() { 
    this.afuConfig = {
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
  }

  ngOnInit() {
  }

  DocUpload(event){}


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
