import { Component } from '@angular/core';
import {UtilService} from '@services/util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '2022-2023-1-full-stack-frontend';
  asd = '';
  array = [1, 2, 3];

  constructor(public utilService: UtilService) {}
}
