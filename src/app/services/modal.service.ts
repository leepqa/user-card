import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModalStateType } from '../constants/modal-state';


@Injectable({
  providedIn: 'root'
})

export class ModalService {
  private display = new BehaviorSubject(ModalStateType.CLOSE);

  watch(): Observable<ModalStateType> {

    return this.display.asObservable();
  }

  open() {
    this.display.next(ModalStateType.OPEN);
  }

  close() {
    this.display.next(ModalStateType.CLOSE);
  }
}
