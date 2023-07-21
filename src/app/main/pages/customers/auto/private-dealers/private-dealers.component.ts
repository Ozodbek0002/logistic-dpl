import { AfterViewInit, Component } from '@angular/core';
declare let initHeadline: any;

@Component({
  selector: 'app-private-dealers',
  templateUrl: './private-dealers.component.html',
  styleUrls: ['./private-dealers.component.scss']
})

export class PrivateDealersComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    initHeadline();
  }
}
