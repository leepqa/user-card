import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UsersDTO } from '../interfaces/user.interface';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class DataService {

  private readonly URL = "https://randomuser.me/api?results=10";

  constructor(private http: HttpClient) { }

  public getData(): Observable<UsersDTO> {
    return this.http.get<UsersDTO>(this.URL);
  }
}
