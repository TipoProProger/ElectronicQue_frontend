import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DoctorClientListNode } from '../Interfaces/DoctorClientListNode';

@Injectable({
  providedIn: 'root'
})
export class DoctorPatientListServiceService {

  constructor( private http: HttpClient ) { }

  private doctorClientListUrl = "http://localhost:50045/api/doctorpatientlist";

  getDoctorPatientList(id : number) : Observable<DoctorClientListNode[]> {
    return this.http.get<DoctorClientListNode[]>(this.doctorClientListUrl + "\\" + id);
  }

  postCallNextPatient(id : number) : Observable<any> {
    return this.http.post<Observable<any>>(this.doctorClientListUrl + "\\" + id, null);
  }
  putEndCurrentPatient(id : number) : Observable<any> {
    return this.http.put<Observable<any>>(this.doctorClientListUrl + "\\" + id, null);
  }
}
