import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { ProductListingComponent } from './core/products/product-listing/product-listing.component';
import { ProductItemComponent } from './core/products/product-item/product-item.component';
import { FilterComponent } from './core/filter/filter.component';
import { DropDownComponent } from './shared/drop-down/drop-down.component';
import { productService } from './_services/productService.service';
import { AddProductComponent } from './core/products/add-product/add-product.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { PaymentTypesComponent } from './shared/payment-types/payment-types.component';
import { ProductDetailsComponent } from './core/products/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListingComponent,
    ProductItemComponent,
    FilterComponent,
    DropDownComponent,
    AddProductComponent,
    NotFoundComponent,
    PaymentTypesComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [productService],
  bootstrap: [AppComponent]
})
export class AppModule { }
