import { AfterViewInit, Component } from '@angular/core';

declare let Swiper: any;

@Component({
  selector: 'app-news-carousel',
  templateUrl: './news-carousel.component.html',
  styleUrls: ['./news-carousel.component.scss']
})
export class NewsCarouselComponent implements AfterViewInit {

  reviews: any = [
    {
      id: 1,
      fullname: "John Doe",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident hic sit labore sapiente iusto. Possimus accusantium veritatis et maxime ullam unde.",
      date: "12.03.2023",
      logo: "group.png"
    }
  ];

  ngAfterViewInit(): void {
    let swiper = new Swiper('#reviews .swiper', {
      loop: false,
      pagination: false,
      centeredSlides: false,
      grabCursor: true,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next-reviews',
        prevEl: '.swiper-button-prev-reviews'
      },
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
