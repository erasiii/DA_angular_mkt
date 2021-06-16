import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


const productRoutes: Routes = [
  { path: 'product', component: ProductListComponent },
  { path: 'product/product-detail', component: ProductDetailComponent },
];

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes)
  ]
})
export class ProductModule { }
