import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = "assets/acourses.json";

  constructor(private httpCliente: HttpClient) { }

 list() {
    return this.httpCliente.get<Course[]>(this.API).pipe(
      first(),
      delay(5000),
      tap( courses => console.log(courses))
    );
 }

}
