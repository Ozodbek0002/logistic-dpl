import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-how-does-auto',
  templateUrl: './how-does.component.html',
  styleUrls: ['./how-does.component.scss']
})
export class HowDoesComponent {

  constructor() {}


  send(form: NgForm) {
    console.log(form.value);
    form.onReset();
    
  }
}
