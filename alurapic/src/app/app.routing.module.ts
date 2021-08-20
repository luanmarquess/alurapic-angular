import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';


const routes : Routes = [
  {path: 'user/:userName', component: PhotoListComponent}, //:userName == generic; parametriza a rota, redirecionando para o Notfound apenas ser não conter a o caminho "user/"
  {path: 'p/add', component: PhotoFormComponent},
  {path: '**', component: NotFoundComponent}
  //{path: '**', component: PhotoFormComponent} // qualquer tipo de requisição direciona para FormComponent
];


@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRountingModule{}
