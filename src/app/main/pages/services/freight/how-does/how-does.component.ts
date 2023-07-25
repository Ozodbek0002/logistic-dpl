import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

declare let Swiper: any;

@Component({
  selector: 'app-how-does',
  templateUrl: './how-does.component.html',
  styleUrls: ['./how-does.component.scss']
})
export class HowDoesComponent {

  constructor() {}


  send(form: NgForm) {
    console.log(form.value);
    form.onReset();
    
  }

  ngAfterViewInit(): void {
    let swiper = new Swiper('#block-carousel-freight .swiper', {
      loop: true,
      centeredSlides: false,
      navigation: {
        nextEl: '.swiper-button-next--freight',
        prevEl: '.swiper-button-prev--freight'
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
      grabCursor: true,
      spaceBetween: 30,
      breakpoints: {
        1400: {
          slidesPerView: 3,
        },
        772: {
          slidesPerView: 2.5,
        },
        500: {
          slidesPerView: 1.7,
        },
        400: {
          slidesPerView: 1.2,
        }
      }
    });
  }

}
