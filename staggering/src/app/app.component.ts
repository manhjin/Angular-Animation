import { Component } from '@angular/core';
import {trigger, style, animate, keyframes, query, stagger, transition} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    trigger('listAnimation',[
      transition('* => *',[

        query(':enter',style({opacity:0}), {optional: true}),

        query(':leave',stagger('300ms',[
          animate('1s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: -5, transform: 'translateY(35px)', offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75px)', offset: 1})
          ]))
        ]), {optional: true}),
        query(':enter',stagger('300ms',[
          animate('1s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75px)', offset: 0}),
            style({opacity: -5, transform: 'translateY(35px)', offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1})
          ]))
        ]), {optional: true}),


      ]),

    ]),



  ]
})
export class AppComponent {
  items = [];
  constructor(){
    this.items = ['Hey this is item', 'Here is another one', 'This is awesome'];

  }
  pushItem(){
    this.items.push('Oh yeah, that is awesome');

  }

  removeItem(){
    this.items.pop();
  }
}
