import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { ProductService } from './product/product.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThankYouComponent } from './cart/thank-you/thank-you.component';


const appRoutes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: '', redirectTo:'index', pathMatch:'full' },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'product', component: ProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'thank-you', component: ThankYouComponent },
  { path: '**', component: NotFoundComponent },
  // { path: '', redirectTo: '/admin', pathMatch: 'full'},
  //       {path: 'admin', component: AdminComponent, children:[
  //           {path: '', component: AdminProductStartComponent},
  //           {path: 'new', component: AdminProductEditComponent},
  //           {path: ':id', component: AdminProductDetailComponent},
  //           {path: ':id/edit', component: AdminProductEditComponent}
  //       ]}
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    ProductComponent,
    CartComponent,
    LoginComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ProductModule,
    CartModule,
    LoginModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }