import { Component } from '@angular/core';
import {FormService} from "@services/form.service";
import {FormGroup} from "@angular/forms";
import {ClientService} from "@services/client.service";

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private clientService: ClientService,
              private formService: FormService) {
    this.loginForm = this.formService.loginForm();
  }

  login(event: any) {
    this.clientService.login(this.loginForm.controls['mail'].value, this.loginForm.controls['password'].value)
      .subscribe((response) => {
        console.log('response', response);
      })
  }


}
