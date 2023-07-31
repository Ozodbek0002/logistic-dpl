import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { SpinnerService } from './core/services/spinner.service';
import { filter } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'logistic-dpl';

  constructor(private router: Router, private spinnerService: SpinnerService, private translate: TranslateService) {
    this.translate.addLangs(['en', 'ru', 'uz']);
    this.translate.use('en');
  }

  ngOnInit() {
    this.router
      .events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event: any) => {
        this.spinnerService.loading();
      });
  }
}
