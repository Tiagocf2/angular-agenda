import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/data-access/api/api.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private api: ApiService) {}
  sendMessage(text: string, name: string): Observable<{ text: string }> {
    return this.api.post<{ text: string }>(
      '/openai',
      { text, name },
      { auth: true }
    );
  }
}
