import { Component, OnInit, VERSION } from '@angular/core';
import { Product, ProductModel } from './model/product';
import { ProductService } from './service/product.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  productList:Product [];
  ProductListClone:Product [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProduct();
  }

  private getProduct():void {
    this.productService.getProduct().subscribe((ProductModel:ProductModel) => {
      this.productList = ProductModel.product;
      this.ProductListClone = ProductModel.product;
    });
  }

  public search(data:any):void {
    if(data.target.value){
      this.productList = this.ProductListClone.filter((product) => product.description.indexOf(data.target.value) >= 0 || product.title.indexOf(data.target.value) >=0)
     }else{
      this.productList =this.ProductListClone;
    }
   }
}
