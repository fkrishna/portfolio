import { Component, OnInit } from '@angular/core';

declare var vis: any;

@Component({
  selector: 'skills-section',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  constructor() { }

//   ngOnInit() {

//     var DIR = 'img/soft-scraps-icons/';

//     var nodes = null;
//     var edges = null;
//     var network = null;
//     draw();
//     // Called when the Visualization API is loaded.
//     function draw() {
//       // create people.
//       // value corresponds with the age of the person
//       var DIR = 'assets/img/';
//       nodes = [
//         {id: 1,  shape: 'circularImage', image: DIR + 'angular.png', label:"Angular"},
//         {id: 2,  shape: 'circularImage', image: DIR + 'html.png', label:"Html"},
//         {id: 3,  shape: 'circularImage', image: DIR + 'css.png'},
//         {id: 4,  shape: 'circularImage', image: DIR + 'c.png', label:"C"},
//         {id: 5,  shape: 'circularImage', image: DIR + 'c++.png', label:"C++"},
//         {id: 6,  shape: 'circularImage', image: DIR + 'c_sharp.png', label:"C#"},
//         {id: 7,  shape: 'circularImage', image: DIR + 'angular.png', label:"Angular"},
//       ];

//       // create connections between people
//       // value corresponds with the amount of contact between two people
//       edges = [
//         {from: 1, to: 2},
//         {from: 2, to: 3},
//         {from: 2, to: 4},
//         {from: 4, to: 5},
//         {from: 4, to: 10},
//         {from: 4, to: 6},
//         {from: 6, to: 7},
//         {from: 7, to: 8},
//         {from: 8, to: 9},
//         {from: 8, to: 10},
//         {from: 10, to: 11},
//         {from: 11, to: 12},
//         {from: 12, to: 13},
//         {from: 13, to: 14},
//         {from: 9, to: 16}
//       ];

//       // create a network
//       var container = document.getElementById('mynetwork');
//       var data = {
//         nodes: nodes,
//         edges: edges
//       };
//       var options = {
//         nodes: {
//           borderWidth:0,
//           size:30,
//         color: {
//             border: '#ddd',
//             background: 'transparent'
//           },
//           font:{color:'#fff'}
//         },
//         edges: {
//           color: '#0000ff'
//         }
//       };
//       network = new vis.Network(container, data, options);
//   }

// }
}
  