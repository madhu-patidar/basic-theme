import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { DropzoneComponent , DropzoneDirective,
  DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  
  @ViewChild(DropzoneComponent) componentRef?: DropzoneComponent;
  @ViewChild(DropzoneDirective) directiveRef?: DropzoneDirective;

  afuConfig:any;
  imageUrl: any;
  public config: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 1,
    autoReset: null,
    errorReset: null,
    cancelReset: null
  };
  public type: string = 'component';
  onSuccess: boolean;
  
  constructor(
    private sanitizer: DomSanitizer,
  ) { 
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
  

  fileEvent(event){
    let input = event
    var files = event.target.files;
    var file = files[0];
    if (files && file) {
      var reader = new FileReader();
      reader.onload =this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  base64textString;
  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
           this.base64textString= btoa(binaryString);
           this.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl( 'data:image/jpg;base64,' +btoa(binaryString));
   }

   onUploadError(event){
     console.log(event)
   } 
   onUploadSuccess(event){
     this.onSuccess = true;
    console.log(event)
   }

   public resetDropzoneUploads(): void {
    if (this.type === 'directive' && this.directiveRef) {
      this.directiveRef.reset();
    } else if (this.type === 'component' && this.componentRef && this.componentRef.directiveRef) {
      this.componentRef.directiveRef.reset();
    }
    this.onSuccess = false;
  }
}
