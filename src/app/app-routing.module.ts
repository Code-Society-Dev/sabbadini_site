import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error404/error404.component';


const routes: Routes = [
  {
    path:'',
   loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)
  },
  {
    path:'skills',
   loadChildren: () => import('./skills/skills.module').then((m) => m.SkillsModule)
  },
  {
    path:'**',
    component:  Error404Component 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }