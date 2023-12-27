import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesServicesService } from '../services/courses-services.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {
  courses: Observable<Course[]>
  displayedColumns = ['curso', 'category']

  // coursesService?: CoursesServicesService;

  constructor(private coursesService: CoursesServicesService){
    // this.courses = []
    // this.coursesService = new CoursesServices()
    this.courses = this.coursesService?.list()
  }

  ngOnInit(): void{

  }
}
