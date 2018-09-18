import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // required animations module,
    AppRoutingModule,
    ToastrModule.forRoot(
      {maxOpened : 4}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
