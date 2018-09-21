import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.css']
})
export class ImageCropperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
