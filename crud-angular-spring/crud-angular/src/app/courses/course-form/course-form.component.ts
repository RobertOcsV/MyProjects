import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

import { CoursesService } from '../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.scss'
})
export class CourseFormComponent {

  form: FormGroup;

    constructor(private _snackBar: MatSnackBar,
      private formBuilder: FormBuilder,
      private service: CoursesService,
      private location: Location){
      this.form = this.formBuilder.group({
        name: [null],
        category: [null]
      })
    }

    onSubmit() {
      this.service.save(this.form.value).subscribe({
        next: () => this.onSucess(),
        error: () => {
          this.onError();
        },
      });
    }

    onCancel(){
      this.location.back();
    }


    private onSucess() {
      this._snackBar.open('Curso Salvo com sucesso!', '', {duration: 5000})
      this.onCancel();
    }

    private onError() {
      this._snackBar.open('Erro ao Salvar curso.', '', {duration: 5000});
    }
}
