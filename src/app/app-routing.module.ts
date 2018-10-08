import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'databuku',
    loadChildren:'./databuku/databuku.module#DatabukuModule'
  },
  {
    path: '',
    redirectTo: 'databuku',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
