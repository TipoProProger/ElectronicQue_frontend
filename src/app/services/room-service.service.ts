import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';
import { RoomNode } from '../Interfaces/RoomNode';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {

  constructor(private http : HttpClient) { }

  private roomUrl = "http://localhost:50045/api/room";

  getRoom(id : number) : Observable<RoomNode> {
    return this.http.get<RoomNode>(this.roomUrl + "\\" + id)
      .pipe(catchError(this.handleError<RoomNode>('Error in get room method', {} as RoomNode)));
  }

  postRoom(room : RoomNode) : Observable<any> {
    return this.http.post<any>(this.roomUrl, room)
      .pipe(catchError(this.handleError<any>('Error in set room number method'))); 
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
