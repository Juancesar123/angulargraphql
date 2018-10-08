import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthguardGuard } from './../auth/authguard.guard';
import { ContentComponent } from './content/content.component';
const routes: Routes = [
  {
    path:'',
    component:ContentComponent,
    canActivate:[AuthguardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class DatabukuRoutingModule { }
