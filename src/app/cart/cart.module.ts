import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CartFormComponent } from './cart-form/cart-form.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ThankYouComponent } from './thank-you/thank-you.component';



const cartRoutes: Routes =[
  { path: 'cart', component: CartFormComponent, },
  { path: 'cart/checkout', component: CheckOutComponent },
  { path: 'cart/thanks', component: ThankYouComponent }
];

@NgModule({
  declarations: [
    CartFormComponent,
    CheckOutComponent,
    ThankYouComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(cartRoutes)
  ]
})
export class CartModule { 

}
