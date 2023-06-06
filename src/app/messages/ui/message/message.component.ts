import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { Message } from '../../models/message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements AfterViewInit {
  @Input({ alias: 'message', required: true }) _message?: Message;
  @Input() onExit?: (msg: Message) => void;
  @Input() index: number = 0;
  @ViewChild('ref') ref!: ElementRef;

  get message(): Message {
    if (!this._message) throw new Error('Message is Required');
    return this._message!;
  }

  get messageClass(): string {
    return `message message--${this.message.type.toLowerCase()}`;
  }

  ngAfterViewInit(): void {
    if (!this.onExit) return;
    this.ref.nativeElement.addEventListener(
      'animationend',
      this.onExitHandler.bind(this)
    );
  }

  close() {
    this.message.exit();
  }

  onExitHandler(force: boolean = false) {
    if (!this.onExit) return;
    if (this.message.status !== 'exiting') return;
    this.onExit(this.message);
  }
}
