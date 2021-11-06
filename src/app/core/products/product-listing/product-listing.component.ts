import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { filter } from 'src/app/_models/filter.model';
import { product } from 'src/app/_models/product.model';
import { AuthServiceService } from 'src/app/_services/auth-service.service';
import { productService } from 'src/app/_services/productService.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
@Input() productListArray!: product[];
@Input() numberOfItemsPerPage: number = 9;
@Input()  filterListArray!: filter[];
@Output() outPutItem = new EventEmitter<product>();
  noOfPagesArray: number[] = [];
  productsArrayToBeViewed: product[] = [];
  currentPage: number = 0;
  constructor(private productService: productService) {

     this.filterListArray = [
      {name: "Arts & Crafts"},
      {name: "Automotive"},
      {name: "Baby"},
      {name: "Books"},
      {name: "Eletronics"},
      {name: "Women's Fashion"},
      {name: "Men's Fashion"},
      {name: "Health & Household"},
      {name: "Home & Kitchen"},
      {name: "Military Accessories"},

  ];

  }


  ngOnInit(): void {

    this.productListArray = this.productService.getAllProducts();
    this.sliceArray();
    this.calculatePageNumbers();
    this.productService.productChanged.subscribe(
      (res)=>{
        console.log('product list', res);
        this.productListArray = res;
        this.sliceArray();
        this.calculatePageNumbers();
      }
    );

    console.log(this.productListArray);

    this.productService.itemDeleted.subscribe(
      (next:product[])=>{
        console.log(next);
        this.productListArray=next;
        this.sliceArray();
      }
    );

  }


  calculatePageNumbers() {
    const numberOfPages = Math.ceil(this.productListArray.length / this.numberOfItemsPerPage);
    for(let index = 0; index < numberOfPages; index++) {
      this.noOfPagesArray.push(index + 1);
    }
  }

  newItemAdded(product: product) {
    console.log(product);
  }

  sliceArray() {
    this.productsArrayToBeViewed = this.productListArray.slice(this.currentPage * this.numberOfItemsPerPage , (this.currentPage * this.numberOfItemsPerPage)+this.numberOfItemsPerPage)

  }

  onPagination(i: number) {
    if (i > -1 && i < this.noOfPagesArray.length) {
      this.currentPage = i;
      this.sliceArray();
    }
  }
}




