import { ViewportScroller } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-online-car-buyers',
  templateUrl: './online-car-buyers.component.html',
  styleUrls: ['./online-car-buyers.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OnlineCarBuyersComponent {

  constructor(private scroller: ViewportScroller) {}


  goTo(block: string) {
    this.scroller.scrollToAnchor(block);
  }
}
