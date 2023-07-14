import { Component } from '@angular/core';

declare let Swiper: any;

@Component({
  selector: 'app-box-trucks',
  templateUrl: './box-trucks.component.html',
  styleUrls: ['./box-trucks.component.scss']
})
export class BoxTrucksComponent {

  ngAfterViewInit(): void {
    let swiper = new Swiper('#icon-carousel .swiper', {
      loop: false,
      centeredSlides: true,
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
        770: {
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
