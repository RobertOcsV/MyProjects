import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesServicesService } from '../services/courses-services.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [{
    _id: "1",
    name: "Angular",
    category: "front-end"
  }];
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
