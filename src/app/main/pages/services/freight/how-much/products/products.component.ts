import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductModel, UserProductModel } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  public selectedProductNumber: number = 1;
  public selectEvet: boolean = true;

  selectedProductList$: Observable<UserProductModel[]> = new Observable<UserProductModel[]>();
  userProducts: UserProductModel[] = [];
  productList: ProductModel[] = [];


  constructor(private productService: ProductService) {
    this.load();
  }


  load() {
    let localProducts = localStorage.getItem('products');
    if (localProducts != null)
      this.userProducts = JSON.parse(localProducts);
    else
      this.userProducts = this.productService.defultProductGroup;

    this.selectedProductList$ = this.productService.getSelectedProduct();
    this.productList = this.productService.productList;

    localStorage.setItem('products', JSON.stringify(this.userProducts));
  }


  selectedProduct(id: number) {
    if (this.selectEvet) {
      this.productService.selectProduct(id);
      this.selectedProductNumber = id;
    }
  }



  addProduct(form: NgForm) {

    let oldData = this.userProducts.find(item => item.id == form.value.product_id);

    if (oldData == undefined) {

      let product = this.productList.filter((item: any) => item.id == form.value.product_type_id);

      product[0]['parametrs'][0]['value'] = (form.value.length != undefined) ? parseInt(form.value.length) : undefined;
      product[0]['parametrs'][1]['value'] = (form.value.width != undefined)  ? parseInt(form.value.width) : parseInt(form.value.radius);
      product[0]['parametrs'][2]['value'] = parseInt(form.value.height);
      product[0]['parametrs'][3]['value'] = parseInt(form.value.weight);
      product[0]['parametrs'][4]['value'] = parseInt(form.value.quantity);


      let newProduct =
      {
        id: this.productService.getRandomId(),
        name: form.value.product_name,
        product
      };

      this.selectEvet = true;
      this.selectedProduct(1);
      this.userProducts.push(newProduct);
    }

    this.selectEvet = true;
    this.selectedProduct(1);
    console.log(this.userProducts);
    
    localStorage.setItem('products', JSON.stringify(this.userProducts));
  }


  editProduct(id: number) {
    this.selectEvet = false;
    this.selectedProductNumber = id;
    let data = this.userProducts.filter(item => item.id == id);


    this.productService.setProduct(data);
  }


  deleteProduct(id: number) {
    this.userProducts = this.userProducts.filter(item => item.id != id);

    localStorage.setItem('products', JSON.stringify(this.userProducts));
  }


  trackByFn(index: number, item: any): any {
    return item.id;
  }
  
}
