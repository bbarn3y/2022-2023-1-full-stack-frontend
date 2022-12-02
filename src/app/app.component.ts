import { Component } from '@angular/core';
import {UtilService} from '@services/util.service';
import {NzModalService} from "ng-zorro-antd/modal";
import {LoginComponent} from "src/app/modals/login/login.component";
import {UserService} from "@services/user.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '2022-2023-1-full-stack-frontend';
  asd = '';
  array = [1, 2, 3];
  isLoggedIn: boolean;

  constructor(private nzModal: NzModalService,
              private translate: TranslateService,
              private userService: UserService,
              public utilService: UtilService) {
    this.translate.setDefaultLang('hu');
    console.log(this.translate.instant('AUTHENTICATION.LOGIN'));

    this.isLoggedIn = this.userService.isLoggedIn();
    this.userService.loggedInStatus.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  logout() {
    this.userService.removeToken();
  }

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
