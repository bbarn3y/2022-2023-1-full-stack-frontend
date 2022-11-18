import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WriterGuard} from "src/app/_guards/writer.guard";

const routes: Routes = [
  {
    path: 'writer',
    canActivate: [WriterGuard],
    canActivateChild: [WriterGuard],
    loadChildren: () => import('./writer/writer.module').then(m => m.WriterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
