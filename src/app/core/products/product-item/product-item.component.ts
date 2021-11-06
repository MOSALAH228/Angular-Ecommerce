import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { product } from 'src/app/_models/product.model';
import { productService } from 'src/app/_services/productService.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
@Input() product!: product;
// @ViewChild('inputNumber') inputElement !: ElementRef;
// @ViewChild('divSale') divElement !: ElementRef;
// @Output() itemAdded = new EventEmitter<product>();
// productService: productService = new productService();
  constructor(private productService: productService) {

  }

  ngOnInit(): void {

  }

  getPrice() {
    return this.product.price ? this.product.discount ? this.product.price - this.product.discount: this.product.price: 0;
  }

  itemAddedToCart() {
    // const message = `item ${this.product.name} has been added`;
    // alert(message);
    // console.log(htmlEl)
    // htmlEl.value = this.product.price.toString();

    // const inputElementCasted = this.inputElement.nativeElement as HTMLInputElement;
    // console.log('div', this.divElement);
    // console.log('div', this.inputElement.nativeElement.value);
    this.productService.itemAdded.emit(this.product);
  }

  delete(id:number|undefined){
    this.productService.deletProduct(id);
    console.log(id);
  }
}
