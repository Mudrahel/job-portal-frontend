import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseURL = "http://localhost:8080/api/v1/login"

  constructor(private httClient: HttpClient) { }

  login(user: User): Observable<Object> {
    return this.httClient.post(`${this.baseURL}`, user);
  }
}
