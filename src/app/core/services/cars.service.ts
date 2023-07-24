import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CarModel } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private car$$: BehaviorSubject<CarModel[]> = new BehaviorSubject<CarModel[]>([]);
  private model$$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private type$$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);



  constructor(private _http: HttpClient) {
    this.load();
  }


  load() {
    this._http.get('./assets/data/car-type.json').subscribe((res: any) => this.type$$.next(res));
    this._http.get('./assets/data/car-model.json').subscribe((res: any) => this.model$$.next(res));
    this._http.get<CarModel[]>('./assets/data/car.json').subscribe((res: CarModel[]) => this.car$$.next(res));
  }


  getCars() {
    return this.car$$.asObservable();
  }


  getTypes() {
    return this.type$$.asObservable();
  }


  getModels() {
    return this.model$$.asObservable();
  }


}
