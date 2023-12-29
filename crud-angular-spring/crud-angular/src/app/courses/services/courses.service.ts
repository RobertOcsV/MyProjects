import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = "assets/courses.json";

  constructor(private httpCliente: HttpClient) { }

 list() {
    return this.httpCliente.get<Course[]>(this.API).pipe(
      first(),
      tap( courses => console.log(courses))
    );
 }

}
