import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  public user$: Observable<User> | undefined;

  constructor(private dataService: DataService, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    // this.activatedRoute.params
    //   .subscribe(params => {
    //     const uuid = params['uuid']
    //     this.user$ = this.dataService.getUserByUuid(uuid);
    //   })

    this.user$ = this.activatedRoute.params
      .pipe(switchMap(params => this.dataService.getUserByUuid(params['uuid'])))

  }
  public backToHome(): void {
    this.route.navigate(['/home'])
  }

}

