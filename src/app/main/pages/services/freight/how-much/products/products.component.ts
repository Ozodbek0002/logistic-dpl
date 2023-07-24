import { Component } from '@angular/core';
import { ProductGroupModel } from 'src/app/core/models/productGroup.model';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  productList: any;
  userProducts: Array<any> = [];


  constructor(private productService: ProductService) {
    this.userProducts.push(productService.getDefultGroup());
    this.productList = this.productList;
  }



  editGroup(id: number) {
    console.log(id);
  }



  addGroup() {
    this.userProducts.push(this.productService.getDefultGroup());
  }



  deleteGroup(id: number) {
    this.userProducts = this.userProducts.filter((item: any) => item.id != id);
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


