import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "http://localhost:8080/api/v1/users"

  constructor(private httClient: HttpClient) { }

  createUser(user: User): Observable<Object> {
    return this.httClient.post(`${this.baseURL}`, user);
  }
}
