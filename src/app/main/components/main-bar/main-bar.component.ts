import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, debounceTime, distinctUntilChanged, from } from 'rxjs';
import { CarModel } from 'src/app/core/models/car.model';
import { CarsService } from 'src/app/core/services/cars.service';

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
  defult = {
    "country": ".",
    "state": ".",
    "city": "..."
  };

  searchResultFrom: any = signal(this.defult);
  searchResultTo: any = signal(this.defult);

  car: Observable<CarModel[]> = new Observable<CarModel[]>();
  model: Observable<any> = new Observable();
  type: Observable<any> = new Observable();

  constructor(private http: HttpClient, private carService: CarsService) {
    this.load();
  }


  load() {
    this.car = this.carService.getCars();
    this.model = this.carService.getModels();
    this.type = this.carService.getTypes();
  }



  send(form: NgForm) {
    console.log(form.value);
    form.reset();
  }


  findCityByZipCodeFrom(zip_code: string) {
    this.http.get('https://ziptasticapi.com/' + zip_code)
      .subscribe(
        (res: any) => {
          if (res.error)
            this.searchResultFrom.set(this.defult);
          else
            this.searchResultFrom.set(res);
        },
        (err) => { }
      );
  }


  findCityByZipCodeTo(zip_code: string) {
    this.http.get('https://ziptasticapi.com/' + zip_code)
      .subscribe(
        (res: any) => {
          if (res.error)
            this.searchResultTo.set(this.defult);
          else
            this.searchResultTo.set(res);
        },
        (err) => { }
      );
  }
}
