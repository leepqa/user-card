import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModalStateType } from '../constants/modal-state';



@Injectable({
  providedIn: 'root'
})

export class ModalService {

  private display = new BehaviorSubject(ModalStateType.CLOSE);

  constructor() { }

  public watch(): Observable<ModalStateType> {
    return this.display.asObservable();
  }

  public open() {
    this.display.next(ModalStateType.OPEN);
  }

  public close() {
    this.display.next(ModalStateType.CLOSE);
  }

}















// this.userProfile = this.fb.group({
//   cell: "",
//   dob: this.fb.group({
//     date: "",
//     age: Number
//   }),
//   email: "",
//   gender: "",
//   id: this.fb.group({
//     name: "",
//     value: ""
//   }),
//   location: this.fb.group({
//     city: "",
//     coordinates: this.fb.group({
//       latitude: "",
//       longitude: ""
//     }),
//     country: "",
//     postcode: Number,
//     state: "",
//     street: this.fb.group({
//       number: Number,
//       name: ""
//     }),
//     timezone: this.fb.group({
//       offset: "",
//       description: ""
//     })
//   }),
//   login: this.fb.group({
//     md5: "",
//     password: "",
//     salt: "",
//     sha1: "",
//     sha256: "",
//     username: "",
//     uuid: ""
//   }),
//   name: this.fb.group({
//     title: "",
//     first: "",
//     last: ""
//   }),
//   nat: "",
//   phone: "",
//   picture: this.fb.group({
//     large: "",
//     medium: "",
//     thumbnail: ""
//   }),
//   registered: this.fb.group({
//     age: "",
//     date: ""
//   })
// });
