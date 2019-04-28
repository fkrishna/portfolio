import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projects = [
    {
      name: 'todo list',
      url: 'assets/files/TodoList/index.html',
      color: "#f5f5f5",
      slug: 'todo-list',
      desc: 'converter tool between the most common numeral systems'
    },
    {
      name: 'card validator',
      url: 'https://stackblitz.com/edit/card-provider?embed=1&file=index.js&hideExplorer=1&hideNavigation=1&view=preview',
      color: "#C5CAE9",
      slug: 'card-validator',
      desc: 'converter tool between the most common numeral systems'
    },
    {
      name: 'hangman',
      url: 'https://card-provider.stackblitz.io/',
      color: "#CDDAE9",
      slug: 'card-validator',
      desc: 'converter tool between the most common numeral systems'
    }
  ]

  constructor() { }

  get(slug:string): any {
    console.log(slug);
    return this.projects.find(project => project.slug === slug)
  }
}
