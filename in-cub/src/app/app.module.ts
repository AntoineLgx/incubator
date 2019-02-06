import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { StartUpListComponent } from './start-up-list/start-up-list.component';
import { AppRoutingModule } from './app-routing-module';
import { NavbarComponent } from './navbar/navbar.component';
import { NbrFondateurPipe } from './start-up-list/nbr-fondateur.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    StartUpListComponent,
    HomeComponent,
    SignUpComponent,
    NavbarComponent,
    NbrFondateurPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
