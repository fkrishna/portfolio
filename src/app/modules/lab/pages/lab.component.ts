import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.scss']
})
export class LabComponent implements OnInit {

  data = {
    name: 'todo list',
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quisquam amet ipsam culpa qui,
    quaerat ex voluptatem facere rerum pariatur. Culpa eaque incidunt fugit rerum labore suscipit
    libero voluptate quod!`,
    codeUrl: 'http://github.com',
    webUrl: 'http://todomvc.com/'
  };

  constructor() { }

  ngOnInit() {
  }

}
