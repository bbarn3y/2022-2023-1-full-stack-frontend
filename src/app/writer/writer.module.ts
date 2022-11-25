import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriterComponent } from './writer.component';
import {RouterModule} from "@angular/router";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzIconModule} from "ng-zorro-antd/icon";

const routes = [
  {
    path: '',
    component: WriterComponent
  }
]

@NgModule({
  declarations: [
    WriterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzCardModule,
    NzIconModule
  ]
})
export class WriterModule { }
