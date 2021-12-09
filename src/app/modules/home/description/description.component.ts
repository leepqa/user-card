import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  public user: Observable<User> | undefined;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    //     this.user = this.dataService.getUserByUuid()
  }
};
