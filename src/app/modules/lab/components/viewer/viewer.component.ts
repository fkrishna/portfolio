import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {

  constructor() { }

  @Input('project') project: any;

  ngOnInit() {
  }

}
