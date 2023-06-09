import { Component } from '@angular/core';
import { AppState } from 'src/app/core/data-access/store/reducers';
import { Store } from '@ngrx/store';
import { skipWhile, take } from 'rxjs';
import { ChatService } from '../../data-access/chat.service';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss', '../../styles/home.defaults.scss'],
})
export class ActionBarComponent {
  constructor(
    private chatService: ChatService,
    private store: Store<AppState>
  ) {}

  name?: string;
  chatResponse?: { text: string };
  isLoading = false;

  ngOnInit() {
    this.store
      .select((state) => state.user.name)
      .pipe(
        skipWhile((name) => name == null),
        take(1)
      )
      .subscribe((v) => (this.name = v));
  }

  handleSubmit(text: string) {
    this.isLoading = true;
    this.chatService
      .sendMessage(text, this.name || '')
      .pipe(take(1))
      .subscribe((result) => {
        this.isLoading = false;
        this.chatResponse = result;
      });
  }
}
