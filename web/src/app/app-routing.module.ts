import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerModule } from './modules/career/career.module';
import { HomeModule } from './modules/home/home.module';
import { LoginModule } from './modules/login/login.module';

const routes: Routes = [
  {path: '', loadChildren: () => LoginModule},
  {path: 'login', loadChildren: () => LoginModule},
  {path: 'home', loadChildren: () => HomeModule},
  {path: 'career', loadChildren: () => CareerModule},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
