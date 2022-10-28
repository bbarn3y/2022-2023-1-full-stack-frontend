import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzButtonModule} from "ng-zorro-antd/button";
import {LoginComponent} from "src/app/modals/login/login.component";
import {NzModalModule} from "ng-zorro-antd/modal";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

const zorroModules = [
  NzButtonModule,
  NzLayoutModule,
  NzModalModule
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    ...zorroModules,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
