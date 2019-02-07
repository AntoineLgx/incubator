import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StartUpFormComponent } from './start-up-form/start-up-form.component';
import { StartUpListComponent } from './start-up-list/start-up-list.component';
import { AppRoutingModule } from './app-routing-module';
import { NavbarComponent } from './navbar/navbar.component';
import { NbrFondateurPipe } from './start-up-list/nbr-fondateur.pipe';
import { ConsultantListComponent } from './consultant-list/consultant-list.component';
import { ConsultantFormComponent } from './consultant-form/consultant-form.component';
import { InMemoryDataService } from './in-memory/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
    StartUpFormComponent,
    StartUpListComponent,
    HomeComponent,
    NavbarComponent,
    NbrFondateurPipe,
    ConsultantListComponent,
    ConsultantFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
