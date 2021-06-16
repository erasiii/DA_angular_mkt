import { EventEmitter, Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable({
    providedIn: 'root',
})

export class ProductService{
    productSelected = new EventEmitter<Product>();

    private products: Product[]=[   
    new Product(
      '1', 
      'iPhone 12 Pro Max - Silver',
      '/assets/images/product/product-1.jpg',
      '1099',
      '',
      ''),
    new Product(
      '2',
      'iPhone 12 Pro Max - Pacific Blue',
      '/assets/images/product/product-2.jpg',
      '1099',
      '',
      ''),
    new Product(
      '3', 
      'iPhone 12 Pro Max - Gold',
      '/assets/images/product/product-3.jpg',
      '1099',
      '',
      ''),
    new Product(
      '4',
      'iPhone 12 Pro Max - Graphite',
      '/assets/images/product/product-4.jpg',
      '1099',
      '',
      ''
    ),
    new Product(
      '5', 
      'iPhone 12 Pro Max - Silver',
      '/assets/images/product/product-1.jpg',
      '1099',
      '',
      ''),
    new Product(
      '6',
      'iPhone 12 Pro Max - Pacific Blue',
      '/assets/images/product/product-2.jpg',
      '1099',
      '',
      ''),
    new Product(
      '7', 
      'iPhone 12 Pro Max - Gold',
      '/assets/images/product/product-3.jpg',
      '1099',
      '',
      ''),
    new Product(
      '8',
      'iPhone 12 Pro Max - Graphite',
      '/assets/images/product/product-4.jpg',
      '1099',
      '',
      ''),
    new Product(
      '9', 
      'iPhone 12 Pro Max - Silver',
      '/assets/images/product/product-1.jpg',
      '1099',
      '',
      ''),
    ];

    getProduct(index: number)
    {
        return this.products[index];
    }

    getProducts(){
        return this.products;
    }
   

    addProduct(product: Product) {
        this.products.push(product);
        }
        
    updateProduct(index: number, newProduct: Product) {
    this.products[index] = newProduct;
    }

    deleteProduct(index: number){
        this.products.splice(index,1);
    }
}