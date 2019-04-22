import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-project-viewer',
  templateUrl: './project-viewer.component.html',
  styleUrls: ['./project-viewer.component.scss']
})
export class ProjectViewerComponent implements OnInit {

  project: any;
  found: boolean;

  constructor(private route:ActivatedRoute, private projectsService:ProjectsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.project = this.projectsService.get(params.projectSlug)
      this.found = ( this.project ) ? true : false;
      console.log(this.found);
    });
  }

  onLoadIframe() {
    
  }

}
