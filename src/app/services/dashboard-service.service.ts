import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PatientQueNode } from '../Interfaces/PatientQueNode';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  constructor(private http : HttpClient) { }

  private dashboardUrl = "http://localhost:50045/api/dashboard";

  getPatients() : Observable<PatientQueNode[]> {
    return this.http.get<PatientQueNode[]>(this.dashboardUrl);
  }
}
