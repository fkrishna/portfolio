import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabRoutingModule } from './lab-routing.module';
import { LabComponent } from './pages/lab.component';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { ProjectViewerComponent } from './pages/project-viewer/project-viewer.component';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    LabRoutingModule,
    SharedModule
  ],
  declarations: [
    LabComponent,  
    ProjectListComponent,
    ProjectViewerComponent
  ]
})
export class LabModule { }
