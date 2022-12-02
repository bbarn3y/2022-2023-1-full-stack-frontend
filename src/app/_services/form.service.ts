import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidatorService} from "@services/valaidators.service";

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private fb: FormBuilder,
              private validatorService: ValidatorService) { }

  loginForm(): FormGroup {
    return this.fb.group({
      mail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.validatorService.strong()]]
    })
  }
}
