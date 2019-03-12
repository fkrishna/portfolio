import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'services-section',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services = [
    {
      name: 'web development',
      content: 'From frontend to backend developement. Let\'s watch your project come alive in the browser. I create responsive websites that work on a wide range of devices',
      icon: 'icon:world; ratio:2.8',
    },
    {
      name: 'software development',
      content: 'I create sofware applications that runs stand alone in a desktop or laptop computer. Contrasting with Web-based application, which requires the Web browser to run',
      icon: 'icon:laptop; ratio:2.8',
    },
    {
      name: 'mobile development',
      content: 'Simple is Beautiful, when it comes to mobile applications I like to keep things simple, while carefully including the finest details and interactions',
      icon: 'icon:phone; ratio:2.8',
    },
  ]

  constructor() { }

  ngOnInit() {
   
  }

}
