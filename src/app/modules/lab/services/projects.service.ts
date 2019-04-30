import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  public projects = [
    {
      name: 'todo list',
      url: 'https://fkrishna.github.io/todolist',
      color: "#FAFAFA",
      slug: 'todo-list',
      desc: 'A simple todo list build with angular. All tasks are stored locally using web storage api'
    },
    {
      name: 'card validator',
      url: 'https://credit-card-auto-detection.stackblitz.io/',
      color: "#E8EAF6",
      slug: 'card-validator',
      desc: 'Will detect the credit card type and check to see if it\'s a valid number using luhn algorithm.'
    },
    // {
    //   name: 'hangman',
    //   url: 'https://card-provider.stackblitz.io/',
    //   color: "#FFFDE7",
    //   slug: 'card-validator',
    //   desc: 'converter tool between the most common numeral systems'
    // }
  ]

  constructor() { }

  get(slug:string): any {
    console.log(slug);
    return this.projects.find(project => project.slug === slug)
  }
}
