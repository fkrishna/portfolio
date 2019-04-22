import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '@app/modules/lab/services/projects.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  constructor(private projectsServices:ProjectsService) { }

  ngOnInit() {
  }

  setPrefx(prefx:string, str:string) {
    return prefx + str;
  }
}
