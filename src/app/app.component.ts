import { Component } from '@angular/core';
import { product } from './_models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  productArray: product[] = [];
  buttonClicked = 'add-product';

  // exampleProducts =
  // exampleFilter = [

  //     {name: "Arts & Crafts"},
  //     {name: "Automotive"},
  //     {name: "Baby"},
  //     {name: "Books"},
  //     {name: "Eletronics"},
  //     {name: "Women's Fashion"},
  //     {name: "Men's Fashion"},
  //     {name: "Health & Household"},
  //     {name: "Home & Kitchen"},
  //     {name: "Military Accessories"},

  // ];
  title = 'angular-test';

  // outPutItemAdded(product: product) {
  //   console.log(product);
  //   this.productArray.push(product);
  // }
}
