import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss'],
})
export class PreloaderComponent {
  progress: number = 0;
  intervalId: any;
  render = true;
  @Input() hide: boolean = false;
  @Input() autoDispose: boolean = true;
  @Input() onAnimationEnd?: () => void;

  ngOnInit() {
    this.intervalId = setInterval(this.fakeLoading.bind(this), 100);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  handleOnAnimationEnd() {
    if (this.onAnimationEnd) this.onAnimationEnd();
    if (this.autoDispose) this.render = false;
    clearInterval(this.intervalId);
  }

  private fakeLoading() {
    this.progress = (this.progress + 2) % 102;
  }
}
