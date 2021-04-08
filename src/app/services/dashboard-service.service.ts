import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PatientQueNode } from '../Interfaces/PatientQueNode';
import { BaseURL } from './BaseURL';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  constructor(private http : HttpClient,
    private baseUrl : BaseURL) { }

  private dashboardUrl = this.baseUrl.API_URL + "api/dashboard";

  getPatients() : Observable<PatientQueNode[]> {
    return this.http.get<PatientQueNode[]>(this.dashboardUrl)
      .pipe(catchError(this.handleError<PatientQueNode[]>('Error in get patients list fro dashboard', [])));
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    //this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
