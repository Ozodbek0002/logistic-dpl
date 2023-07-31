import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent {

  defult = {
    "country": ".",
    "state": ".",
    "city": "Loading..."
  };

  searchResultFrom: any = signal(this.defult);
  searchResultTo: any = signal(this.defult);



  constructor(private http: HttpClient) {}


  send(form: NgForm) {
    // {
    //   "from": "LENOX DALE, MA 12420",
    //   "to": "CRAGSMOOR, NY 12420",
    //   "first_name": "Nick",
    //   "last_name": "Bernard",
    //   "phone": "930939200",
    //   "email": "test@gmail.com"
    // }

    if(form.valid) {
      localStorage.setItem('client_informations', JSON.stringify(form.value));
      form.onReset();
    }
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
