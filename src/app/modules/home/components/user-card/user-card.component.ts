import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() public user: User | undefined;
  @Output() public deleteEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public deleteUser(): void {
    this.deleteEvent.emit(this.user?.login.uuid);
  }

}
