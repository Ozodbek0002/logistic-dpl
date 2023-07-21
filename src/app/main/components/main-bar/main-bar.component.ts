import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-main-bar',
  templateUrl: './main-bar.component.html',
  styleUrls: ['./main-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainBarComponent {
  one: boolean = true;
  two: boolean = false;
  three: boolean = false;

  
}
