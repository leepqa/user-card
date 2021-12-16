import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserCardComponent } from "./components/user-card/user-card.component";
import { HomeComponent } from "./home.component";
import { ModalCompanent } from './modal/modal.components';



@NgModule({
  declarations: [
    UserCardComponent,
    HomeComponent,
    ModalCompanent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      }
    ])
  ]

})
export class HomeModule { }
