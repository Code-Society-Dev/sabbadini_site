import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skilles/skills.component';
import { CursosComponent } from './cursos/cursos.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'skills',
    component: SkillsComponent,
    pathMatch: 'full',
  },
  {
    path: 'cursos',
    component: CursosComponent,
    pathMatch: 'full',
  },
  {
    path: 'sobreMi',
    component: SobreMiComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    component: Error404Component,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
