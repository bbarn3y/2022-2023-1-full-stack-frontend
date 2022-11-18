import { Injectable } from '@angular/core';
import {delay, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  login(mail: string, password: string): Observable<{ token: string }> {
    return of({token: "asdasdasdasd"})
      .pipe(delay(2000));
  }
}
