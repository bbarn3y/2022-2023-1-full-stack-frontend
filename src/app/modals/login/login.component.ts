import { Component } from '@angular/core';
import {FormService} from "@services/form.service";
import {FormGroup} from "@angular/forms";
import {ClientService} from "@services/client.service";
import {UserService} from "@services/user.service";
import {Router} from "@angular/router";
import {NzModalRef} from "ng-zorro-antd/modal";

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private clientService: ClientService,
              private formService: FormService,
              private modalRef: NzModalRef,
              private router: Router,
              private userService: UserService) {
    this.loginForm = this.formService.loginForm();
  }

  login(event: any) {
    this.clientService.login(this.loginForm.controls['mail'].value, this.loginForm.controls['password'].value)
      .subscribe((response) => {
        console.log('response', response);
        this.userService.storeToken(response.token);
        this.router.navigateByUrl('/writer');
        this.modalRef.close();
      })
  }


}
