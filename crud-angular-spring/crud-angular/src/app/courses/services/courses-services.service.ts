import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesServicesService {

  private readonly API = "assets/courses.json";

  constructor(private httpCliente: HttpClient) { }

 list() {
    return this.httpCliente.get<Course[]>(this.API)
 }

}
