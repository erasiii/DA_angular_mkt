import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  product: Product[] = [
    new Product(
      '1', 
      'iPhone 12 Pro Max - Silver',
      '/assets/images/product/product-1.jpg',
      '1099',
      '',
      ''),
    new Product(
      '2',
      'iPhone 12 Pro Max - Silver',
      '/assets/images/product/product-1.jpg',
      '1099',
      '',
      ''),
    new Product(
      '3', 
      'iPhone 12 Pro Max - Silver',
      '/assets/images/product/product-1.jpg',
      '1099',
      '',
      ''),
    new Product(
      '4',
      'iPhone 12 Pro Max - Silver',
      '/assets/images/product/product-1.jpg',
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
      'iPhone 12 Pro Max - Silver',
      '/assets/images/product/product-1.jpg',
      '1099',
      '',
      ''),
    new Product(
      '7', 
      'iPhone 12 Pro Max - Silver',
      '/assets/images/product/product-1.jpg',
      '1099',
      '',
      ''),
    new Product(
      '8',
      'iPhone 12 Pro Max - Silver',
      '/assets/images/product/product-1.jpg',
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

  constructor() {}

  ngOnInit(): void {}
}
