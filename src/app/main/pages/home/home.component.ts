import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation, signal } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  // forms default propertys
  type = 'LTL';
  lenght = 34;
  width = 25;
  height = 30;
  unit_of_length = 'in';
  weight = 15;
  unit_of_weight = 'kg';

  defult = {
    "country": ".",
    "state": ".",
    "city": "..."
  };

  searchResultFrom: any = signal(this.defult);
  searchResultTo: any = signal(this.defult);



  constructor(private http: HttpClient) {}




  send(form: NgForm) {
    console.log(form.value);
    form.onReset();
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
