import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabRoutingModule } from './lab-routing.module';
import { LabComponent } from './pages/lab.component';
import { ViewerComponent } from './components/viewer/viewer.component';
import { SafePipe } from '@app/shared/pipes/safe.pipe';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    LabRoutingModule,
    SharedModule
  ],
  declarations: [
    LabComponent,  
    ViewerComponent,
    SafePipe,
  ]
})
export class LabModule { }
