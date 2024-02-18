import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = "api/courses";

  constructor(private httpClient: HttpClient) { }

 list() {
    return this.httpClient.get<Course[]>(this.API).pipe(
      first(),
      // delay(5000), //testing
      tap( courses => console.log(courses))
    );
 }

 save(record: Partial<Course>){
  console.log('record');
  if(record._id) {
    console.log('update')
    return this.update(record)
  };
  console.log('create')
  return this.create(record);
 }

 loadById(id: string){
  return this.httpClient.get<Course>(`${this.API}/${id}`);
 }

 private create(record: Partial<Course>){
  return this.httpClient.post<Course>(this.API, record).pipe(first());
 }

 private update(record: Partial<Course>){
  return this.httpClient.put<Course>(`${this.API}/${record._id}`, record).pipe(first());
 }

}
