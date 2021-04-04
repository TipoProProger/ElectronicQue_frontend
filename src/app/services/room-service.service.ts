import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RoomNode } from '../Interfaces/RoomNode';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {

  constructor(private http : HttpClient) { }

  private roomUrl = "http://localhost:50045/api/room";

  getRoom(id : number) : Observable<RoomNode> {
    return this.http.get<RoomNode>(this.roomUrl + "\\" + id);
  }

  postRoom(room : RoomNode) : Observable<any> {
    return this.http.post<any>(this.roomUrl, room); 
  }
}
