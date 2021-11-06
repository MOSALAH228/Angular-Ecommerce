import { EventEmitter } from "@angular/core";
import { Observable } from "rxjs";
import { product } from "../_models/product.model";

export class productService {

 private  products: product[] = [

    {id: 1, basicData:[{id: 1, name: 'camera 1', desc: 'this is camera', lang: {id: 1, name: 'English'},},], category: {id: 1, name: 'Arts'}, paymentTypeMethods: [{id: 1, name: 'Visa'}], price: 100, discount: 50, imgUrls: ['assets/img/layout-styles.png'], relatedProductsIds: [2,3,4,5]},
    {id: 2, basicData:[{id: 1, name: 'camera 2', desc: 'this is camera', lang: {id: 1, name: 'English'},},], category: {id: 1, name: 'Arts'}, paymentTypeMethods: [{id: 1, name: 'Visa'}], price: 100, discount: 50, imgUrls: ['assets/img/layout-styles.png'], relatedProductsIds: [1,3,4,5]},
    {id: 3, basicData:[{id: 1, name: 'camera 3', desc: 'this is camera', lang: {id: 1, name: 'English'},},], category: {id: 1, name: 'Arts'}, paymentTypeMethods: [{id: 1, name: 'Visa'}], price: 100, discount: 50, imgUrls: ['assets/img/layout-styles.png'], relatedProductsIds: [2,6,4,5]},
    {id: 4, basicData:[{id: 1, name: 'camera 4', desc: 'this is camera', lang: {id: 1, name: 'English'},},], category: {id: 1, name: 'Arts'}, paymentTypeMethods: [{id: 1, name: 'Visa'}], price: 100, discount: 50, imgUrls: ['assets/img/layout-styles.png'], relatedProductsIds: [2,3,8,5]},
    {id: 5, basicData:[{id: 1, name: 'camera 5', desc: 'this is camera', lang: {id: 1, name: 'English'},},], category: {id: 1, name: 'Arts'}, paymentTypeMethods: [{id: 1, name: 'Visa'}], price: 100, discount: 50, imgUrls: ['assets/img/layout-styles.png'], relatedProductsIds: [2,3,4,9]},
    {id: 6, basicData:[{id: 1, name: 'camera 6', desc: 'this is camera', lang: {id: 1, name: 'English'},},], category: {id: 1, name: 'Arts'}, paymentTypeMethods: [{id: 1, name: 'Visa'}], price: 100, discount: 50, imgUrls: ['assets/img/layout-styles.png'], relatedProductsIds: [6,3,4,5]},
    {id: 7, basicData:[{id: 1, name: 'camera 7', desc: 'this is camera', lang: {id: 1, name: 'English'},},], category: {id: 1, name: 'Arts'}, paymentTypeMethods: [{id: 1, name: 'Visa'}], price: 100, discount: 50, imgUrls: ['assets/img/layout-styles.png'], relatedProductsIds: [2,3,6,5]},
    {id: 8, basicData:[{id: 1, name: 'camera 8', desc: 'this is camera', lang: {id: 1, name: 'English'},},], category: {id: 1, name: 'Arts'}, paymentTypeMethods: [{id: 1, name: 'Visa'}], price: 100, discount: 50, imgUrls: ['assets/img/layout-styles.png'], relatedProductsIds: [4,3,4,5]},
    {id: 9, basicData:[{id: 1, name: 'camera 9', desc: 'this is camera', lang: {id: 1, name: 'English'},},], category: {id: 1, name: 'Arts'}, paymentTypeMethods: [{id: 1, name: 'Visa'}], price: 100, discount: 50, imgUrls: ['assets/img/layout-styles.png'], relatedProductsIds: [2,9,4,5]},

];


public  itemAdded = new EventEmitter<product>();
public productChanged = new EventEmitter<product[]>();
public itemDeleted = new EventEmitter();

  getAllProducts(): any {
    console.log('getAll products')

    this.productChanged.emit(this.products);
    return [...this.products];
    // return this.productChanged;
  }

  getProductById(id: number): product | undefined{
    return this.products.find((product)=> product.id === id);
  }

  addProduct(product: product): product[] {
    this.products.push(product);
    this.productChanged.emit([...this.products]);
    return [...this.products]
  }

  updateProduct(product: product): product[] {
    const index = this.products.findIndex((p)=>p.id === product.id);
    this.products[index] = product;
    return [...this.products];
  }

  deletProduct(id: number|undefined) {
    const index = this.products.findIndex((p)=>p.id === id);
    this.products.splice(index,1);
    this.itemDeleted.emit([...this.products]);
  }
}
