import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-section',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  private skills = [
    { name: 'c language', src: 'assets/img/skills/c.png', size: 100 },
    { name: 'python', src: 'assets/img/skills/python.png', size: 120 },
    { name: 'PHP', src: 'assets/img/skills/php.png', size: 100 },
    { name: 'html 5', src: 'assets/img/skills/html.png', size: 100 },
    { name: 'CSS', src: 'assets/img/skills/css.png', size: 100 },
    { name: 'javascript', src: 'assets/img/skills/js.jpg', size: 100 },
    { name: 'bootstrap', src: 'assets/img/skills/bootstrap.png', size: 100 },
    { name: 'uikit', src: 'assets/img/skills/uikit.png', size: 100 },
    { name: 'sass', src: 'assets/img/skills/sass.png', size: 100 },
    { name: 'ionic', src: 'assets/img/skills/ionic.png', size: 100 },
    { name: 'angular', src: 'assets/img/skills/angular.png', size: 100 },
    { name: 'flask', src: 'assets/img/skills/python.png', size: 120 },
    { name: 'vagrant', src: 'assets/img/skills/python.png', size: 120 },
  ];

  constructor() { }

  ngOnInit() {
  }

}
