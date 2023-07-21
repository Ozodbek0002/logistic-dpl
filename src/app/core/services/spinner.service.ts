import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  readonly loading$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  setLoading () {
    this.loading$$.next(false);
  }

  stopLoading () {
    this.loading$$.next(true);
  }

  loading() {
    this.loading$$.next(false);

    setTimeout( () => this.loading$$.next(true), 500);
  }
}
