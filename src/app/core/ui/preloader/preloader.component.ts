import { Component } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss'],
})
export class PreloaderComponent {
  progress: number = 0;
  intervalId: any;
  constructor() {}
  ngOnInit() {
    this.intervalId = setInterval(this.fakeLoading.bind(this), 100);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  private fakeLoading() {
    this.progress = (this.progress + 2) % 102;
  }
}
