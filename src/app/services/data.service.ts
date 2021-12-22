import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User, UsersDTO } from '../interfaces/user.interface';
import { map, Observable, of, tap, find } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class DataService {

  private readonly URL = "https://randomuser.me/api?results=3";
  private users: User[] = [];


  constructor(private http: HttpClient) { }

  public saveUser(): void {
    const user: User = {
      cell: "",
      dob: {
        age: 22,
        date: ""
      },
      email: "",
      gender: "",
      id: {
        name: "",
        value: ""
      },
      location: {
        city: "",
        coordinates: {
          latitude: "",
          longtitude: ""
        },
        country: "",
        postcode: 123586,
        state: "",
        street: {
          number: 78966,
          name: ""
        },
        timezone: {
          offset: "",
          descriptoin: ""
        }
      },
      login: {
        md5: "",
        password: "",
        salt: "",
        sha1: "",
        sha256: "",
        username: "",
        uuid: ""
      },
      name: {
        first: "",
        last: "",
        title: ""
      },
      nat: "",
      phone: "",
      picture: {
        large: "",
        medium: "",
        thumbnail: ""
      },
      registered: {
        age: 21,
        date: ""
      }
    }
    this.users = [user, ...this.users];
  }

  public getData(): Observable<User[]> {

    if (this.users.length) {
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
