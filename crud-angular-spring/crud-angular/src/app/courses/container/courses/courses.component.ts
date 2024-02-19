import { Component } from '@angular/core';
import { Course } from '../../model/course';
import { CoursesService } from '../../services/courses.service';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from '../../../shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  courses$: Observable<Course[]> | null = null;
  displayedColumns = ['curso', 'category', 'actions']

  // coursesService?: CoursesServicesService;

  constructor(private snackBar: MatSnackBar,
    private coursesService: CoursesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.refresh();
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }

  onEdit(course: Course) {
    this.router.navigate(['edit', course._id], { relativeTo: this.route })
  }

  refresh() {
    this.courses$ = this.coursesService?.list().pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos')
        return of([])
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  onDelete(course: Course) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que deseja remover esse curso?'
    })

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.coursesService.delete(course._id).subscribe({
          next: () => {
            this.refresh();
            this.snackBar.open('Curso Removido com sucesso!', 'X', {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition: 'center',
            });
          },
          error: () => this.onError('Erro ao tentar remover curso.')
        });
      }
    })
  }
}
