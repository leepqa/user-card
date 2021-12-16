import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User, UsersDTO } from '../interfaces/user.interface';
import { map, Observable, of, tap, find } from 'rxjs';




@Injectable({
  providedIn: 'root'
})

export class DataService {

  private readonly URL = "https://randomuser.me/api?results=3";
  private users: User[] | undefined;

  constructor(private http: HttpClient) { }

  public getData(): Observable<User[]> {

    if (this.users) {
      return of(this.users);
    }

    return this.http.get<UsersDTO>(this.URL).pipe(
      map(data => data.results),
      tap(users => this.users = users)
    );
  }

  public getUserByUuid(uuid: string): Observable<User> {
    const user = this.users?.find(users => users.login.uuid === uuid) as User;
    return of(user);
  }
}
