import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GravatarModule } from 'ngx-gravatar';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    GravatarModule,
  ],
  exports: [ProfileComponent],
})
export class ProfileModule {}
