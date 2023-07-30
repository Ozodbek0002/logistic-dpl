import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { MessageService } from 'src/app/core/services/message.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-private-dealers',
  templateUrl: './private-dealers.component.html',
  styleUrls: ['./private-dealers.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PrivateDealersComponent {

  constructor(private smsService: MessageService) { }



  send(form: NgForm) {

    // {
    //   "first_name": "Nick",
    //   "last_name": "Bernard",
    //   "phone": "930939200",
    //   "email": "test@gmail.com",
    //   "volume": "5-10"
    // }


    if (form.valid) {
      const chanel_name = 'privatedealersdpl';

      let data = 'Private dealers Form' +
        '\nFirst name:  ' + form.value.first_name +
        '\nLast name:  ' + form.value.last_name +
        '\nPhone:  ' + form.value.phone +
        '\nEmail:  ' + form.value.email +
        '\nvolume:  ' + form.value.volume;

      data = encodeURI(data);

      this.smsService.sendSms(data, chanel_name).subscribe(() => {
        form.onReset();
        Swal.fire('Thank you', 'Your message has been sent successfully and we will contact you shortly.', 'success');
      });
    }
  }

}
