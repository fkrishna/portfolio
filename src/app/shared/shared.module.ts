import { NgModule } from '@angular/core';
import { LogoComponent } from './components/logo/logo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SafePipe } from './pipes/safe.pipe';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    LogoComponent,
    NavbarComponent, 
    FooterComponent,
    SafePipe,
    ModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  exports: [
    LogoComponent,
    NavbarComponent,
    FooterComponent,
    SafePipe
  ]
})
export class SharedModule { }
