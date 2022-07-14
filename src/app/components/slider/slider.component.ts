import { Component, Input, OnInit } from '@angular/core';
import { animate, trigger, style, state, transition } from '@angular/animations';
import { Movie } from '../../models/movie';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';

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
            transition('void <=> *', [animate('1s')]),
        ]),
    ],
})
export class SliderComponent implements OnInit {
    // this component accept data and display them in that component
    @Input() items: Movie[] = [];
    @Input() isBanner: boolean = false;

    currentSlideIndex: number = 0;

    readonly imagesSizes = IMAGES_SIZES;

    ngOnInit(): void {
        if (!this.isBanner) {
            setInterval(() => {
                this.currentSlideIndex = ++this.currentSlideIndex % this.items.length;
            }, 5000);
        }
    }
}
