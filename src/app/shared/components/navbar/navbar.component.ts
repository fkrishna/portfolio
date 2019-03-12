import { Component, OnInit } from '@angular/core';

declare var UIkit;

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() {}

  ngOnInit() {

    console.log(UIkit.navbar);

  }
}
