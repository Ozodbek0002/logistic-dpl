import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductCubeModel, ProductSlinderModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly selectedProduct$$ = new BehaviorSubject<ProductCubeModel[] | ProductSlinderModel[]>([]);
  public productList = [
    {
      id: 1,
      name: "box",
      icon: "./assets/images/fright-form/box.svg",
      image: "./assets/images/fright-form/box1.svg",
      parametrs: [
        { name: "length", label: "Length", value: 100 },
        { name: "width", label: "Width", value: 100 },
        { name: "height", label: "Height", value: 100 },
        { name: "weight", label: "Weight", value: 1 },
        { name: "quantity", label: "Quantity", value: 1 }
      ]
    },
    {
      id: 2,
      name: "bigbags",
      icon: "./assets/images/fright-form/bigbags.svg",
      image: "./assets/images/fright-form/bigbags1.svg",
      parametrs: [
        { name: "length", label: "Length", value: 100 },
        { name: "width", label: "Width", value: 100 },
        { name: "height", label: "Height", value: 100 },
        { name: "weight", label: "Weight", value: 1 },
        { name: "quantity", label: "Quantity", value: 1 }
      ]
    },
    {
      id: 3,
      name: "cacks",
      icon: "./assets/images/fright-form/sacks.svg",
      image: "./assets/images/fright-form/sacks1.svg",
      parametrs: [
        { name: "length", label: "Length", value: 100 },
        { name: "width", label: "Width", value: 100 },
        { name: "height", label: "Height", value: 100 },
        { name: "weight", label: "Weight", value: 1 },
        { name: "quantity", label: "Quantity", value: 1 }
      ]
    },
    {
      id: 4,
      name: "barrels",
      icon: "./assets/images/fright-form/barrels1.svg",
      image: "./assets/images/fright-form/barrels.svg",
      parametrs: [
        { name: "radius", label: "Radius", value: 100 },
        { name: "height", label: "Height", value: 100 },
        { name: "weight", label: "Weight", value: 1 },
        { name: "quantity", label: "Quantity", value: 1 }
      ]
    },
    {
      id: 5,
      name: "roll",
      icon: "./assets/images/fright-form/rolls.svg",
      image: "./assets/images/fright-form/roll.svg",
      parametrs: [
        { name: "radius", label: "Radius", value: 100 },
        { name: "height", label: "Height", value: 100 },
        { name: "weight", label: "Weight", value: 1 },
        { name: "quantity", label: "Quantity", value: 1 }
      ]
    }
  ];


  defultProductGroup = {
    id: 0,
    name: "New group",
    details: [
      {
        id: 1,
        name: 'Olma',
        product: [
          {
            id: 1,
            name: "box",
            icon: "./assets/images/fright-form/box.svg",
            image: "./assets/images/fright-form/box1.svg",
            parametrs: [
              { name: "length", label: "Length", value: 100 },
              { name: "width", label: "Width", value: 100 },
              { name: "height", label: "Height", value: 100 },
              { name: "weight", label: "Weight", value: 1 },
              { name: "quantity", label: "Quantity", value: 1 }
            ]
          }
        ]
      },
      {
        id: 2,
        name: 'Nok',
        product: [
          {
            id: 2,
            name: "bigbags",
            icon: "./assets/images/fright-form/bigbags.svg",
            image: "./assets/images/fright-form/bigbags1.svg",
            parametrs: [
              { name: "length", label: "Length", value: 100 },
              { name: "width", label: "Width", value: 100 },
              { name: "height", label: "Height", value: 100 },
              { name: "weight", label: "Weight", value: 1 },
              { name: "quantity", label: "Quantity", value: 1 }
            ]
          }
        ]
      },
      {
        id: 3,
        name: 'Moloko',
        product: [
          {
            id: 3,
            name: "cacks",
            icon: "./assets/images/fright-form/sacks.svg",
            image: "./assets/images/fright-form/sacks1.svg",
            parametrs: [
              { name: "length", label: "Length", value: 100 },
              { name: "width", label: "Width", value: 100 },
              { name: "height", label: "Height", value: 100 },
              { name: "weight", label: "Weight", value: 1 },
              { name: "quantity", label: "Quantity", value: 1 }
            ]
          }
        ]
      }
    ]
  };


  constructor() { }



  getDefultGroup() {
    this.defultProductGroup.id = this.getRandomId();
    console.log(this.defultProductGroup);
    return this.defultProductGroup;
  }


  selectProduct(id: number) {
    const findData: any = this.productList.find(item => item.id == id);

    if (findData != undefined)
      this.selectedProduct$$.next(findData);
  }


  getSelectedProduct() {
    this.selectedProduct$$.asObservable();
  }


  getRandomId() {
    return Math.floor(Math.random() * 100);
  }

}
