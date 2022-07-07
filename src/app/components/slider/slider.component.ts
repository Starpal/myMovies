import { Component, Input, OnInit } from '@angular/core';
import { animate, trigger, style, state, transition } from '@angular/animations';
import { Movie } from '../../models/movie';

@Component({
    selector: 'slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css'],
    animations: [
        // use a trigger to fire some animation
        trigger('slideFade', [
            // define the end stat of that div
            state('void', style({ opacity: 0 })),
            // transition > from original state * to end state 'void'
            transition('void <=> *', [animate('1s')])
        ]),
    ],
})
export class SliderComponent implements OnInit {
    // this component accept data and display them in that component
  @Input() items: Movie[] = [];
  
  currentSlideIndex: number = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.currentSlideIndex = this.currentSlideIndex++ % this.items.length;
    }, 5000);
  }
}
