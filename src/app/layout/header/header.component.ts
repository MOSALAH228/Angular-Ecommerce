import { Component, Input, OnInit } from '@angular/core';
import { product } from 'src/app/_models/product.model';
import { productService } from 'src/app/_services/productService.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
 arrayOfProducts: product[] = [];
// productService : productService = new productService();
  constructor(private productService: productService) { }

  ngOnInit(): void {
    this.productService.itemAdded.subscribe(
      (next)=>{
        this.arrayOfProducts.push(next);
        console.log(next);
      },
      (error)=>{},
      ()=>{},
    );
  }

}
