import { Injectable } from '@angular/core';
import {delay, Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient: HttpClient) { }

  login(mail: string, password: string): Observable<{ token: string }> {
    // return of({token: "asdasdasdasd"})
    //   .pipe(delay(2000));

    return this.httpClient.post<{token: string}>(`http://localhost:8001/api/login`, {
      mail, password
    }, {
    });
  }
}
