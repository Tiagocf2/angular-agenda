import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { TaskData } from 'src/app/shared/data-access/tasks/tasks.interface';

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
    public dialogRef: MatDialogRef<NewTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data?: TaskData
  ) {}

  formulario!: FormGroup;
  priority: number = 1;

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      title: [this.data?.title, [Validators.required, Validators.minLength(4)]],
      description: [this.data?.description],
      priority: [this.data?.priority || 2, Validators.required],
      dueDate: [this.data?.dueDate || new Date()],
    });
  }

  handleSubmit() {
    if (!this.formulario.valid) return;
    const values = this.formulario.value;
    const payload = {
      ...values,
    };
    this.dialogRef.close(payload);
  }

  close(event: any) {
    event.preventDefault();
    this.dialogRef.close();
  }
}
