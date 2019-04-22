import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projects = [
    {
      name: 'todo list',
      url: 'https://codepen.io/ziga-miklic/full/Fagmh',
      color: "#f5f5f5",
      slug: 'todo-list',
      desc: 'converter tool between the most common numeral systems'
    },
    {
      name: 'card validator',
      url: 'https://codepen.io/tusharbandal/full/mdujc',
      color: "#C5CAE9",
      slug: 'card-validator',
      desc: 'converter tool between the most common numeral systems'
    },
    {
      name: 'card validator',
      url: 'hangedman',
      color: "#C5CAE9",
      slug: 'hangman',
      desc: 'converter tool between the most common numeral systems'
    }
  ]

  constructor() { }

  get(slug:string): any {
    console.log(slug);
    return this.projects.find(project => project.slug === slug)
  }
}
