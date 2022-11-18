import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriterComponent } from './writer.component';
import {RouterModule} from "@angular/router";

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
    RouterModule.forChild(routes)
  ]
})
export class WriterModule { }
