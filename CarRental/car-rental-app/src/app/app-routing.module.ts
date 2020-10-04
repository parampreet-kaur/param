import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/paycarz-home', pathMatch: 'full' },
  { path: 'paycarz-home', component: HomePageComponent },
  { path: 'paycarz-home/:selectedComponent', component: HomePageComponent },
  { path: '**', redirectTo: '/paycarz-home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }