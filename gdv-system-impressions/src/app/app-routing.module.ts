import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeUserComponent } from './home-user/home-user.component';
import { HomeAdmComponent } from './home-adm/home-adm.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home-user' },
  {
    path: 'home-user',
    component: HomeUserComponent
  },
  {
    path: 'home-adm',
    component: HomeAdmComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
