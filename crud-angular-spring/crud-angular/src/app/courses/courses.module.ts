import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './container/courses/courses.component';


import { ReactiveFormsModule } from '@angular/forms';
import { CourseFormComponent } from './container/course-form/course-form.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';

@NgModule({
    imports: [
    CommonModule,
    CoursesRoutingModule,
    ReactiveFormsModule,
    CoursesComponent, CourseFormComponent, CoursesListComponent
]
})
export class CoursesModule { }
