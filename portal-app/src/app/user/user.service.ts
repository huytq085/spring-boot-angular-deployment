import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private userUrl = '/api/users';
  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }
  public createUser(user: User): Observable<User> {
    console.log(user);
    return this.http.post<User>(this.userUrl, user);
  }
  public deleteUser(user: User): Observable<User>{
    return this.http.delete<User>(this.userUrl + `/${user.id}`);
  }

}
