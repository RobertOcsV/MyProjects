import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesServicesService {

  constructor(private httpCliente: HttpClient) { }

 list(): Course[] {
    return [
      { _id: '1', name: 'Angular', category: 'front'}
    ];
 }

}
