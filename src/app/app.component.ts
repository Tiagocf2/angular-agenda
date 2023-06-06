import { Component } from '@angular/core';
import { AppState } from './core/data-access/store/reducers';
import { Store } from '@ngrx/store';
import { MessagesService } from './messages/messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
