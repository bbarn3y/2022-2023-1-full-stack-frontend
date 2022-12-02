import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ClientService} from "@services/client.service";

@Component({
  selector: 'app-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class WriterComponent implements OnInit, AfterViewInit, OnDestroy {

  currentTime: number;

  constructor(private cdr: ChangeDetectorRef,
              private clientService: ClientService) {
    this.currentTime = Date.now();
  }

  ngOnInit(): void {
    setInterval(() => {
      this.currentTime = Date.now();
      this.cdr.detectChanges();
    }, 1000);
  }

  ngAfterViewInit() {
    // this.http.get()
  }

  ngOnDestroy() {

  }

  getCurrentTime() {
    // console.log('currentTime');
    return this.currentTime;
  }

  authenticationFailure() {
    this.clientService.login('asdads', 'asdasd')
      .subscribe((response) => response);
  }

}
