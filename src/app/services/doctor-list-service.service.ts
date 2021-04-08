import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { DoctorListNode } from '../Interfaces/DoctorListNode';
import { CitizenNode } from '../Interfaces/CitizenNode';
import { catchError } from 'rxjs/operators';
import { BaseURL } from './BaseURL';

@Injectable({
  providedIn: 'root'
})
export class DoctorListServiceService {

  constructor( private http: HttpClient,
    private baseUrl: BaseURL ) { }

  private doctorsUrl = this.baseUrl.API_URL + "api/doctors"

  getDoctors() : Observable<DoctorListNode[]> {
    return this.http.get<DoctorListNode[]>(this.doctorsUrl)
      .pipe(catchError(this.handleError<DoctorListNode[]>('Error in get doctors list', [])));
  }

  findDoctorByFIO(citizen : CitizenNode) : Observable<DoctorListNode[]> {
    return this.http.post<DoctorListNode[]>(this.doctorsUrl, citizen)
      .pipe(catchError(this.handleError<DoctorListNode[]>('Error in get doctors list with filters', [])));
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
