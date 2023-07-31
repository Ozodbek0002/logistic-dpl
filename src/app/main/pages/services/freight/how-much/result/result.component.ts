import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  products: any;
  user_truck: any;
  client_information: any;

  constructor() {

    let localProducts = localStorage.getItem('products');
    let localUserTruck = localStorage.getItem('truck');
    let localClientInformation = localStorage.getItem('client_informations');


    if (localProducts != null)
      this.products = JSON.parse(localProducts);

    if (localUserTruck != null)
      this.user_truck = JSON.parse(localUserTruck);

    if (localClientInformation != null)
      this.client_information = JSON.parse(localClientInformation);
  }


  printPage() {}


  send(form: NgForm) {
    console.log(form.value);
  }
}
