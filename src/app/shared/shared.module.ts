import { NgModule } from '@angular/core';
import { LogoComponent } from './components/logo/logo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LogoComponent, NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  exports: [
    LogoComponent,
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
