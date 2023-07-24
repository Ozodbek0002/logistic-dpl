import { Component } from '@angular/core';
import { ProductGroupModel } from 'src/app/core/models/productGroup.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  data: any = [
    {
      id: 12,
      name: "First group",
      details: [
        {
          id: 21,
          name: 'Olma',
          image: 'link',
          length: 1000,
          width: 1000,
          height: 1000,
          weight: 10,
          quantity: 10
        },
        {
          id: 23,
          name: 'Nok',
          image: 'link',
          length: 300,
          width: 200,
          height: 500,
          weight: 200,
          quantity: 10
        },
        {
          id: 32,
          name: 'Moloko',
          image: 'link',
          length: 300,
          width: 200,
          height: 500,
          weight: 200,
          quantity: 10
        }
      ]
    },
    {
      id: 9,
      name: "Second group",
      details: [
        {
          id: 21,
          name: 'Olma',
          image: 'link',
          length: 1000,
          width: 1000,
          height: 1000,
          weight: 10,
          quantity: 10
        },
        {
          id: 23,
          name: 'Nok',
          image: 'link',
          length: 300,
          width: 200,
          height: 500,
          weight: 200,
          quantity: 10
        },
        {
          id: 32,
          name: 'Moloko',
          image: 'link',
          length: 300,
          width: 200,
          height: 500,
          weight: 200,
          quantity: 10
        }
      ]
    }
  ];
}
