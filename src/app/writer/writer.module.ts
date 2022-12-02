import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriterComponent } from './writer.component';
import {RouterModule} from "@angular/router";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzButtonModule} from "ng-zorro-antd/button";

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
    NzButtonModule,
    NzCardModule,
    NzIconModule
  ]
})
export class WriterModule { }
