import { Component } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  navs = [
    { name: 'home', icon: 'home', active: false },
    { name: 'about', icon: 'user', active: false },
    // { name: 'skills', icon: 'star', active: false },
    { name: 'projects', icon: 'code', active: false },
    { name: 'services', icon: 'cog', active: false },
    { name: 'contact', icon: 'mail', active: false }
  ];

  constructor() { }

}
