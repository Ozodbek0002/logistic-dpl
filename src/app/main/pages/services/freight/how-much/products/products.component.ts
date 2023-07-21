import { Component } from '@angular/core';
import { ProductGroupModel } from 'src/app/core/models/productGroup.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  data: ProductGroupModel[] = [
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




  addGroup() {
    console.log('add group');
  }


  deleteGroup(id: number) {
    console.log(id);
  }



  addProduct(group_id: number) {
    console.log(group_id);
  }


  editProduct(id: number) {
    console.log(id);
  }


  deleteProduct(id: number) {
    console.log(id);
  }
}


