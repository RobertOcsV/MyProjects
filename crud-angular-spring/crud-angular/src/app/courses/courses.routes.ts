import { CourseFormComponent } from './container/course-form/course-form.component';
import { CoursesComponent } from './container/courses/courses.component';
import { Routes } from "@angular/router";
import { courseResolver } from './guards/course.resolver';



export const COURSES_ROUTES: Routes = [
  {path: '', component: CoursesComponent },
  {path: 'new', component: CourseFormComponent, resolve: { course: courseResolver } },
  {path: 'edit/:id', component: CourseFormComponent, resolve: { course: courseResolver } }
  ];
