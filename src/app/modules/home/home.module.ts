import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserCardComponent } from "./components/user-card/user-card.component";
import { HomeComponent } from "./home.component";


@NgModule({
  declarations: [
    UserCardComponent,
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule
  ]

})
export class HomeModule { }