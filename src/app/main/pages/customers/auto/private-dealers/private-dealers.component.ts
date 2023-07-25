import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
declare let initHeadline: any;

@Component({
  selector: 'app-private-dealers',
  templateUrl: './private-dealers.component.html',
  styleUrls: ['./private-dealers.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class PrivateDealersComponent implements AfterViewInit {

  constructor() {}



  send(form: NgForm) {
    console.log(form.value);
    form.onReset();
  }



  ngAfterViewInit(): void {
    initHeadline();
  }
}
