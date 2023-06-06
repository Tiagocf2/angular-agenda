import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-new-task-dialog',
  templateUrl: './new-task-dialog.component.html',
  styleUrls: ['./new-task-dialog.component.scss'],
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRadioModule,
  ],
})
export class NewTaskDialogComponent {
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<NewTaskDialogComponent>
  ) {}

  formulario!: FormGroup;
  priority: number = 1;

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      title: [null, [Validators.required, Validators.minLength(4)]],
      description: [null],
      tags: [null],
      priority: [2, Validators.required],
    });
  }

  handleSubmit() {
    console.log('lasdsa');
    if (!this.formulario.valid) return;
    const values = this.formulario.value;
    const payload = {
      ...values,
      tags: (<string>values.tags)?.replace(/[^0-9A-z\-_,]+/g, '').split(','),
    };
    this.dialogRef.close(payload);
  }

  close() {
    if (confirm('Realmente deseja sair?')) {
      this.dialogRef.close();
    }
  }
}
