import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'src/app/core/services/message.service';
import { environment } from 'src/environments/environment.development';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dealarships',
  templateUrl: './dealarships.component.html',
  styleUrls: ['./dealarships.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DealarshipsComponent {
  defult = [{ "name": "Loading..." }];

  companies: Array<any> = this.defult;
  api = environment.companyApi;


  constructor(private http: HttpClient, private smsService: MessageService  ) { }


  send(form: NgForm) {
    // {
    //   "company_name": "Tesla",
    //   "first_name": "Nick",
    //   "last_name": "Bernard",
    //   "phone": "930939200",
    //   "email": "test@gmail.com",
    //   "role": "manager"
    // }


    if (form.valid) {
      const chanel_name = 'dealershipsdpl';

      let data = 'Dealership Form' +
        '\nFirst name:  ' + form.value.first_name +
        '\nLast name:  ' + form.value.last_name +
        '\nPhone:  ' + form.value.phone +
        '\nEmail:  ' + form.value.email +
        '\nCompany_name:  ' + form.value.company_name +
        '\nRole:  ' + form.value.role;

      data = encodeURI(data);

      this.smsService.sendSms(data, chanel_name).subscribe(() => {
        form.onReset();
        Swal.fire('Thank you', 'Your message has been sent successfully and we will contact you shortly.', 'success');
      });
    }
  }



  findCompany(searchText: string) {
    if (searchText.length > 3)
      this.http.get(this.api + searchText).subscribe((res: any) => this.companies = res.companies);
    else
      this.companies = this.defult;
  }
}
