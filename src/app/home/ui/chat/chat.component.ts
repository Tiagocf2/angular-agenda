import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss', '../../styles/home.defaults.scss'],
})
export class ChatComponent {
  @Input() onSubmit?: (text: string) => void;
  static MAX_CHARS = 150;
  chars = 0;

  get maxlength(): string {
    return ChatComponent.MAX_CHARS + '';
  }

  count(event: any) {
    this.chars = (event.target.value || '').length;
  }

  handleSubmit(ref: any) {
    this.onSubmit && this.onSubmit(ref.value);
  }
}
