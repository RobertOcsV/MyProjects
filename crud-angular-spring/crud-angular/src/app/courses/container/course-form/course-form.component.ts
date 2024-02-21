import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { CoursesService } from '../../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../model/course';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.scss'
})
export class CourseFormComponent {

  form = this.formBuilder.group({
    _id: [''],
    name: ['', [Validators.required, Validators.maxLength(200)]],
    category: ['', [Validators.required]]
  })

  constructor(private _snackBar: MatSnackBar,
    private formBuilder: NonNullableFormBuilder,
    private service: CoursesService,
    private location: Location,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const course: Course = this.route.snapshot.data['course'];
    this.form.setValue(course);
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe({
      next: () => this.onSucess(),
      error: () => {
        this.onError();
      },
    });
  }


  onCancel() {
    this.location.back();
  }

  private onSucess() {
    this._snackBar.open('Curso Salvo com sucesso!', '', { duration: 5000 })
    this.onCancel();
  }

  private onError() {
    this._snackBar.open('Erro ao Salvar curso.', '', { duration: 5000 });
  }

  getErrorMessage(fieldName: string) {
    const field = this.form.get(fieldName)
    if (field?.hasError('required')) {
      return "Campo obrigatório"
    }

    if(field?.hasError('minlength')){
      const requiredLength: number = field.errors ? field.errors['minlength']['requiredlength'] : 5;
      return `o Tamanho mínimo precisa ser de ${requiredLength} caracteres`
    }

    if(field?.hasError('maxlength')){
      const requiredLength: number = field.errors ? field.errors['maxlength']['requiredlength'] : 200;
      return `o Tamanho mínimo precisa ser de ${requiredLength} caracteres`
    }
    return 'Campo inválido'
  }
}
