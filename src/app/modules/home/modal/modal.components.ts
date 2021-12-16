import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { map, Observable } from 'rxjs';
import { ModalStateType } from 'src/app/constants/modal-state';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalCompanent implements OnInit {

  public display$: Observable<boolean> | undefined;

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    this.watch();

  }
  public watch() {
    this.display$ = this.modalService.watch().pipe(map(res => res === ModalStateType.OPEN));
  }
  public close() {
    this.modalService.close();

  }
  public open() {
    this.modalService.open();
  }

}
