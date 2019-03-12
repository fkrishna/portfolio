import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './pages/main.component';
import { HomeComponent } from './components/sections/home/home.component'
import { AboutComponent } from './components/sections/about/about.component';
import { ProjectsComponent } from './components/sections/projects/projects.component';
import { ServicesComponent } from './components/sections/services/services.component';
import { ContactComponent } from './components/sections/contact/contact.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ScrollSpyDirective } from '@app/shared/directives/scroll-spy.directive';
import { SkillsComponent } from './components/sections/skills/skills.component';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ],
  declarations: [
    MainComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent, 
    SkillsComponent,
    ProjectsComponent,
    ServicesComponent,
    ContactComponent,
    ScrollSpyDirective
  ]
})
export class MainModule { }
