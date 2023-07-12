import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
declare let jarallax: any;

@Component({
  selector: 'app-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class BreadCrumbsComponent {
  @Input() img_url: any;

  ngAfterViewInit(): void {
    jarallax(document.querySelectorAll('.jarallax'), {speed: 0.5});
  }
}
