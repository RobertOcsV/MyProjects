import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [CoursesComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatToolbarModule
  ]
})
export class CoursesModule { }
