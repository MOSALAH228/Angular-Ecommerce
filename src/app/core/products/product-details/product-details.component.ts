import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/_models/product.model';
import { productService } from 'src/app/_services/productService.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product!: product;
  relatedProductArray: product[] = [];
  constructor(private productService: productService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.params.subscribe(
      (res)=>{
        const product = this.productService.getProductById(+res.id);
        if (!product) {
          alert('Error Happend');
        } else {
          this.product = product;
          this.relatedProductArray = [];
          this.product.relatedProductsIds?.map((productId) => {
            const rProduct = this.productService.getProductById(productId);
            rProduct && this.relatedProductArray.push(rProduct);
          })
        }
      }
    );

  }

}
