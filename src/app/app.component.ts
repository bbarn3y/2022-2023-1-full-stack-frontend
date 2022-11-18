import { Component } from '@angular/core';
import {UtilService} from '@services/util.service';
import {NzModalService} from "ng-zorro-antd/modal";
import {LoginComponent} from "src/app/modals/login/login.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '2022-2023-1-full-stack-frontend';
  asd = '';
  array = [1, 2, 3];

  constructor(private nzModal: NzModalService,
              public utilService: UtilService) {}

  openLogin() {
    const modal = this.nzModal.create({
      nzTitle: 'Modal Title',
      nzContent: LoginComponent,
      nzOnOk: () => {
        console.log('OK!')
      },
      nzOnCancel: () => {
        console.log('Cancel!')
      },
      nzOkText: "OK",
      nzCancelText: "Cancel",
      nzFooter: null
    });
  }
}
