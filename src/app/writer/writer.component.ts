import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class WriterComponent implements OnInit, AfterViewInit, OnDestroy {

  currentTime: number;

  constructor(private cdr: ChangeDetectorRef,
              private http: HttpClient) {
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
    console.log('currentTime');
    return this.currentTime;
  }

}
