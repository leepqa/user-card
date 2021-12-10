import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private dataService: DataService, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const uuid = this.activatedRoute.snapshot.params['uuid'];
    console.log(uuid);

    this.dataService.getUserByUuid(uuid); {
      ((uuid: Observable<User> | undefined) => this.user = uuid);
    }
  }
  public backToHome(): void {
    this.route.navigate(['/home'])
  }

}
