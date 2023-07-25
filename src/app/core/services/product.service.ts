import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public productList: ProductModel[] = [
    {
      id: 1,
      name: "box",
      icon: "./assets/images/fright-form/box.svg",
      image: "./assets/images/fright-form/box1.svg",
      parametrs: [
        { name: "length", label: "Length", unity: "inc", value: 100 },
        { name: "width", label: "Width", unity: "inc", value: 100 },
        { name: "height", label: "Height", unity: "inc", value: 100 },
        { name: "weight", label: "Weight", unity: "kg", value: 1 },
        { name: "quantity", label: "Quantity", unity: undefined, value: 1 }
      ]
    },
    {
      id: 2,
      name: "bigbags",
      icon: "./assets/images/fright-form/bigbags.svg",
      image: "./assets/images/fright-form/bigbags1.svg",
      parametrs: [
        { name: "length", label: "Length", unity: "inc", value: 100 },
        { name: "width", label: "Width", unity: "inc", value: 100 },
        { name: "height", label: "Height", unity: "inc", value: 100 },
        { name: "weight", label: "Weight", unity: "kg", value: 1 },
        { name: "quantity", label: "Quantity", unity: undefined, value: 1 }
      ]
    },
    {
      id: 3,
      name: "sacks",
      icon: "./assets/images/fright-form/sacks.svg",
      image: "./assets/images/fright-form/sacks1.svg",
      parametrs: [
        { name: "length", label: "Length", unity: "inc", value: 100 },
        { name: "width", label: "Width", unity: "inc", value: 100 },
        { name: "height", label: "Height", unity: "inc", value: 100 },
        { name: "weight", label: "Weight", unity: "kg", value: 1 },
        { name: "quantity", label: "Quantity", unity: undefined, value: 1 }
      ]
    },
    {
      id: 4,
      name: "barrels",
      icon: "./assets/images/fright-form/barrels1.svg",
      image: "./assets/images/fright-form/barrels.svg",
      parametrs: [
        { name: "length", label: "Length", unity: "inc", value: undefined },
        { name: "radius", label: "Radius", unity: "inc", value: 100 },
        { name: "height", label: "Height", unity: "inc", value: 100 },
        { name: "weight", label: "Weight", unity: "kg", value: 1 },
        { name: "quantity", label: "Quantity", unity: undefined, value: 1 }
      ]
    },
    {
      id: 5,
      name: "roll",
      icon: "./assets/images/fright-form/rolls.svg",
      image: "./assets/images/fright-form/roll.svg",
      parametrs: [
        { name: "length", label: "Length", unity: "inc", value: undefined },
        { name: "radius", label: "Radius", unity: "inc", value: 100 },
        { name: "height", label: "Height", unity: "inc", value: 100 },
        { name: "weight", label: "Weight", unity: "kg", value: 1 },
        { name: "quantity", label: "Quantity", unity: undefined, value: 1 }
      ]
    }
  ];


  public defultProductGroup = [
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
            { name: "length", label: "Length", unity: "inc", value: 100 },
            { name: "width", label: "Width", unity: "inc", value: 100 },
            { name: "height", label: "Height", unity: "inc", value: 100 },
            { name: "weight", label: "Weight", unity: "kg", value: 1 },
            { name: "quantity", label: "Quantity", unity: undefined, value: 1 }
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
            { name: "length", label: "Length", unity: "inc", value: 100 },
            { name: "width", label: "Width", unity: "inc", value: 100 },
            { name: "height", label: "Height", unity: "inc", value: 100 },
            { name: "weight", label: "Weight", unity: "kg", value: 1 },
            { name: "quantity", label: "Quantity", unity: undefined, value: 1 }
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
          name: "sacks",
          icon: "./assets/images/fright-form/sacks.svg",
          image: "./assets/images/fright-form/sacks1.svg",
          parametrs: [
            { name: "length", label: "Length", unity: "inc", value: 100 },
            { name: "width", label: "Width", unity: "inc", value: 100 },
            { name: "height", label: "Height", unity: "inc", value: 100 },
            { name: "weight", label: "Weight", unity: "kg", value: 1 },
            { name: "quantity", label: "Quantity", unity: undefined, value: 1 }
          ]
        }
      ]
    }
  ];


  public defultSelectProduct = [{
    id: this.getRandomId(),
    name: "New Product",
    product: [{
      id: 1,
      name: "box",
      icon: "./assets/images/fright-form/box.svg",
      image: "./assets/images/fright-form/box1.svg",
      parametrs: [
        { name: "length", label: "Length", unity: "inc", value: 100 },
        { name: "width", label: "Width", unity: "inc", value: 100 },
        { name: "height", label: "Height", unity: "inc", value: 100 },
        { name: "weight", label: "Weight", unity: "kg", value: 1 },
        { name: "quantity", label: "Quantity", unity: undefined, value: 1 }
      ]
    }]
  }];



  private selectedProduct$$ = new BehaviorSubject<any>(this.defultSelectProduct);




  constructor() { }



  selectProduct(id: number) {
    let findData: any = this.productList.filter(item => item.id == id);

    let data = [{
      id: this.getRandomId(),
      name: 'New product',
      product: findData
    }];

    console.log(data);
    

    if (findData != undefined)
      this.selectedProduct$$.next(data);
  }


  setProduct(data: any) {
    this.selectedProduct$$.next(data);
  }



  getSelectedProduct() {
    return this.selectedProduct$$.asObservable();
  }



  getRandomId() {
    return Math.floor(Math.random() * 1000);
  }

}
