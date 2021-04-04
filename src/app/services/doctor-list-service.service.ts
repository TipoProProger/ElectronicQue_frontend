import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { DoctorListNode } from '../Interfaces/DoctorListNode';
import { CitizenNode } from '../Interfaces/CitizenNode';

@Injectable({
  providedIn: 'root'
})
export class DoctorListServiceService {

  constructor( private http: HttpClient ) { }

  private doctorsUrl = "http://localhost:50045/api/doctors"

  getDoctors() : Observable<DoctorListNode[]> {
    return this.http.get<DoctorListNode[]>(this.doctorsUrl);
  }

  findDoctorByFIO(citizen : CitizenNode) : Observable<DoctorListNode[]> {
    return this.http.post<DoctorListNode[]>(this.doctorsUrl, citizen);
  }
}
