import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: '@app/modules/main/main.module#MainModule' },
  // { path: 'lab', loadChildren: '@app/modules/lab/lab.module#LabModule' }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
