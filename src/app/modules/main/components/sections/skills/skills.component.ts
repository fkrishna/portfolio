import { Component, OnInit } from '@angular/core';

declare var vis: any;

@Component({
  selector: 'skills-section',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  private skills = [
    { name: 'c', src: 'assets/img/c.png' },
    { name: 'css 3', src: 'assets/img/css.png' },
    { name: 'html 5', src: 'assets/img/html.png' },
    { name: 'javascript', src: 'assets/img/js.jpg' },
  ];

  constructor() { }

  ngOnInit() {

  }
}
