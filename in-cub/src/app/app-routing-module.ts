
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartUpListComponent } from './start-up-list/start-up-list.component';
import { ConsultantListComponent } from './consultant-list/consultant-list.component';
import { NotFound404Component } from './not-found404/not-found404.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', /*canActivate: [AuthGuard],*/ component: HomeComponent, data: {title: 'Accueil'} },
  { path: 'login', component: LoginComponent, data: {title: 'Enregistrement', state: "login"} },
  { path: 'register', component: LoginComponent, data: {title: 'Connexion', state: "register"} },
  { path: 'startups', /*canActivate: [AuthGuard], */component: StartUpListComponent, data: {title: 'Liste des start-ups'} },
  { path: 'consultants', /*canActivate: [AuthGuard], */component: ConsultantListComponent, data: {title: 'Liste des consultants'} },
  { path: '**', component: NotFound404Component, data: {title: '404 - Not found', 404: true} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
