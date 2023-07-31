import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/core/models/product.model';
import { MessageService } from 'src/app/core/services/message.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  products: any;
  user_truck: any;
  client_information: any;

  constructor(private smsService: MessageService, private router: Router) {

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


  printPage() { }


  send() {

    const chanel_name = 'freightquotedpl';

    let data = 'Freight Form' +
      '\nFirst name:  ' + this.client_information.first_name +
      '\nLast name:  ' + this.client_information.last_name +
      '\nPhone:  ' + this.client_information.phone +
      '\nEmail:  ' + this.client_information.email +
      '\nFrom:  ' + this.client_information.from +
      '\nTo:  ' + this.client_information.to + '\n';

    data += '\nTruck type:  ' + this.user_truck[0]['type'] + '\n';


    this.products.forEach((element: any) => {
      element.product.forEach((item: ProductModel) => {
        data += "\nProduct type:  " + item.name;

        item.parametrs.forEach(param => {
          data += '\n' + param.label + ': ' + param.value;
        });
      });
    });


    data = encodeURI(data);

    this.smsService.sendSms(data, chanel_name).subscribe(() => {
      Swal.fire('Thank you', 'Your message has been sent successfully and we will contact you shortly.', 'success');
    });

    setTimeout(() => {
      localStorage.clear();
      this.router.navigateByUrl('/app/services/freight/how-much-does-it-cost');
    }, 3000);

  }
}
