import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public users: User[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData()
      .subscribe(data => this.users = data);
  }

  public deleteUser(uuid: string): void {
    console.log(uuid);
    this.users = this.users.filter(item => item.login.uuid !== uuid)
  }
}



