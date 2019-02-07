
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartUpFormComponent } from './start-up-form/start-up-form.component';
import { StartUpListComponent } from './start-up-list/start-up-list.component';
import { ConsultantListComponent } from './consultant-list/consultant-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: [{title: 'Accueil'}] },
  { path: 'signup', component: StartUpFormComponent, data: [{title: 'Enregistrement'}] },
  { path: 'startups', component: StartUpListComponent, data: [{title: 'Liste des start-ups'}] },
  { path: 'consultants', component: ConsultantListComponent, data: [{title: 'Liste des consultants'}] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
