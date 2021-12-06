import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { ModulesComponent } from './modules/modules.component';
import { ComponentsComponent } from './components/components.component';
import { HomeComponent } from './modules/home/home.component';
import { UserCardComponent } from './modules/home/components/user-card/user-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    ModulesComponent,
    ComponentsComponent,
    HomeComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
