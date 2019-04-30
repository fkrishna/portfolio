import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LabComponent } from './pages/lab.component';
import { ProjectListComponent } from './pages/project-list/project-list.component';
// import { ProjectViewerComponent } from './pages/project-viewer/project-viewer.component';

const routes: Routes = [
  { 
    path: '', 
    component: LabComponent,
    children: [
      { path: '', component: ProjectListComponent }
      // { path: ':projectSlug', component: ProjectViewerComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabRoutingModule { }
