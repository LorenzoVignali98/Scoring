import { NgModule, ApplicationRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { UploadService } from './upload.service';
import { ApiService } from './api.service';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    
  ],
  imports: [
    NgbCollapseModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    CommonModule,
    CollapseModule.forRoot(),
    NgbModule
  ],
  providers: [UploadService, ApiService],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(private appRef: ApplicationRef) {}

  ngDoBootstrap() {
    this.appRef.bootstrap(AppComponent);
  }
}