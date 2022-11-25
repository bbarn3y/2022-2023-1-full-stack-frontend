import {inject, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserService} from "@services/user.service";

const routes: Routes = [
  {
    path: 'writer',
    // canActivate: [WriterGuard],
    canActivate: [() => inject(UserService).loggedIn],
    canActivateChild: [() => inject(UserService).loggedIn],
    // canActivateChild: [WriterGuard],
    loadChildren: () => import('./writer/writer.module').then(m => m.WriterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
