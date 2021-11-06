import { Component, ElementRef, NgModule, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { categorie } from 'src/app/_models/categorie.model';
import { paymentType } from 'src/app/_models/payment-type.model';
import { product } from 'src/app/_models/product.model';
import { CategoryService } from 'src/app/_services/category.service';
import { PaymentTypeService } from 'src/app/_services/payment-type.service';
import { productService } from 'src/app/_services/productService.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
categories!: categorie[];
paymentTypeMethods!: paymentType[];
product = <product>{};
isEditMode = false;
@ViewChild('myForm') form!: ElementRef;

  constructor(private categoryService: CategoryService, private paymentTypeService : PaymentTypeService, private productService: productService, private router: Router, private activatedRoute: ActivatedRoute) {
   this.product = {basicData:[{},], paymentTypeMethods: [], tag: [], imgUrls: []};

  }

  ngOnInit(): void {
    this.categories = this.categoryService.getAllCategories();
    this.paymentTypeMethods = this.paymentTypeService.getAllPaymentTypes();
    const productId = this.activatedRoute.snapshot.params.productId;
    const product = this.productService.getProductById(+productId);
    if (product) {
      this.product = {...product};
      this.isEditMode = true;
    }
  }

  onSubmit(form: NgForm, txtInput: NgModel) {
    // this.product = {...form.value}
    const cat = this.categoryService.getCategoryById(+form.value.category);
    // this.product =  {basicData:[{name: form.value.nameInputField, desc: form.value.descInputField, lang: {id: 1, name: 'English'},},], category: {name: ''}, paymentTypeMethods: [{id: 1, name: 'Visa'}], price: 100, discount: 50, imgUrls: ['assets/img/layout-styles.png']};

    // this.product.basicData[0].name = form.value.nameInputField;
    // this.product.basicData[0].desc = form.value.descInputField;
    if(cat) {
      this.product.category = cat;
    }

    this.product.paymentTypeMethods = [];

    for (let index = 0; index < this.paymentTypeMethods.length; index++) {
      if(form.value['check_'+index]){
        this.product.paymentTypeMethods.push(this.paymentTypeMethods[index]);
      }
    }

    if (this.isEditMode) {
      this.productService.updateProduct(this.product);
    } else {
      this.productService.addProduct(this.product);
    }

    this.productService.addProduct(this.product);
    this.router.navigateByUrl('home');
    console.log(this.product);
    console.log(form);
    console.log('txtInput', txtInput);
  }

  onTagAdded(tagInput: HTMLInputElement){
    if(!this.product.tag) {
      this.product.tag = [];
    }
    this.product.tag?.push({ name: tagInput.value });
    tagInput.value = '';
  }
}
