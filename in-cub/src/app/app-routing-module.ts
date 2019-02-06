
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { StartUpListComponent } from './start-up-list/start-up-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {title: 'Accueil'} },
  { path: 'signup', component: SignUpComponent, data: {title: 'Enregistrement'} },
  { path: 'startups', component: StartUpListComponent, data: {title: 'Liste des start-ups'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
