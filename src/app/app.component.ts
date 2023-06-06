import { Component } from '@angular/core';
import { AppState } from './core/data-access/store/reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private store: Store<AppState>) {
    store.select((s) => s).subscribe(console.log);
  }
}
