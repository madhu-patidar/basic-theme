import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  afuConfig:any;
  imageUrl: any;

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
}
