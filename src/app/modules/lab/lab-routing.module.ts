import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LabComponent } from './pages/lab.component';

const routes: Routes = [
  { path: '', component: LabComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabRoutingModule { }
