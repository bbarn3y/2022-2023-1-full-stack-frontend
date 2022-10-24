import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() {}

  print(text: string | number): void {
    console.log(text);
  }
}
