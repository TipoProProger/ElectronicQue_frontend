import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class BaseURL {
  API_URL :String;

  constructor() {
    this.API_URL = 'http://localhost:80/backend/';
  }
}