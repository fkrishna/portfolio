import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-section',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  private skills = [
    { name: 'c language', src: 'assets/img/skills/c.png' },
    { name: 'python', src: 'assets/img/skills/python.png' },
    { name: 'PHP', src: 'assets/img/skills/php.png' },
    { name: 'HTML5', src: 'assets/img/skills/html.png' },
    { name: 'CSS3', src: 'assets/img/skills/css.png' },
    { name: 'javascript', src: 'assets/img/skills/js.png' },
    { name: 'bootstrap', src: 'assets/img/skills/bootstrap.png' },
    { name: 'uikit', src: 'assets/img/skills/uikit.png' },
    { name: 'sass', src: 'assets/img/skills/sass.png' },
    { name: 'ionic', src: 'assets/img/skills/ionic.png' },
    { name: 'angular', src: 'assets/img/skills/angular.png' },
    { name: 'flask', src: 'assets/img/skills/flask.png' },
    { name: 'vagrant', src: 'assets/img/skills/vagrant.png' },
    { name: 'mySQL', src: 'assets/img/skills/mysql.png' },
    { name: 'postgreSQL', src: 'assets/img/skills/psql.png' },
    { name: 'codeigniter', src: 'assets/img/skills/codeigniter.png' }
  ];

  private certificates = [
    { 
      desc: 'full stack web developer', 
      logo: 'assets/img/udacity.png',
      src: 'assets/files/certificates/udacity-fullstack-web-dev-certificate.pdf' 
    },
    { 
      desc: 'First Aid/CPR/AED', 
      logo: 'assets/img/redcross.png',
      src: 'assets/files/certificates/american-redcross-certificate.pdf'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
