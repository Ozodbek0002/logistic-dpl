import { ViewportScroller } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuctionsComponent {
  constructor(private scroller: ViewportScroller) {}


  goTo(block: string) {
    this.scroller.scrollToAnchor(block);
  }
}
