import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User, UsersDTO } from '../interfaces/user.interface';
import { map, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class DataService {

  private readonly URL = "https://randomuser.me/api?results=10";

  constructor(private http: HttpClient) { }

  public getData(): Observable<User[]> {
    return this.http.get<UsersDTO>(this.URL).pipe(map(data => data.results));
  }
}
