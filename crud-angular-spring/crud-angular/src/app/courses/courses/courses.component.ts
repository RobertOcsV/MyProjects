import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { Observable, catchError, of } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>
  displayedColumns = ['curso', 'category']

  // coursesService?: CoursesServicesService;

  constructor(private coursesService: CoursesService){
    // this.courses = []
    // this.coursesService = new CoursesServices()
    this.courses$ = this.coursesService?.list().pipe(
       catchError( error => {
        console.log(error);
          return of([])
       })
    );
  }

  ngOnInit(): void{

  }
}
