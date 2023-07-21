import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { SpinnerService } from './core/services/spinner.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'logistic-dpl';

  constructor(private router: Router, private spinnerService: SpinnerService) {}

  ngOnInit() {
    this.router
        .events
        .pipe(filter((event) => event instanceof NavigationStart))
        .subscribe((event: any) => {
          this.spinnerService.loading();
        });
  }
}
