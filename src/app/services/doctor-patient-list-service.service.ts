import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { DoctorClientListNode } from '../Interfaces/DoctorClientListNode';

@Injectable({
  providedIn: 'root'
})
export class DoctorPatientListServiceService {

  constructor( private http: HttpClient ) { }

  private doctorClientListUrl = "http://localhost:50045/api/doctorpatientlist";

  getDoctorPatientList(id : number) : Observable<DoctorClientListNode[]> {
    return this.http.get<DoctorClientListNode[]>(this.doctorClientListUrl + "\\" + id)
      .pipe(catchError(this.handleError<DoctorClientListNode[]>('Error in get doctor client list', [])));
  }

  postCallNextPatient(id : number) : Observable<any> {
    return this.http.post<Observable<any>>(this.doctorClientListUrl + "\\" + id, null)
      .pipe(catchError(this.handleError<any>('Error in call next patient')));
  }
  putEndCurrentPatient(id : number) : Observable<any> {
    return this.http.put<Observable<any>>(this.doctorClientListUrl + "\\" + id, null)
      .pipe(catchError(this.handleError<any>('Error in call end of visit')));
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
