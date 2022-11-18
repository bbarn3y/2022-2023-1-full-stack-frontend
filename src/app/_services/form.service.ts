import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private fb: FormBuilder) { }

  loginForm(): FormGroup {
    return this.fb.group({
      mail: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }
}
