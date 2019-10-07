import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  producto;
  constructor(private route: ActivatedRoute,private cartService: CartService) { }

  addToCart(producto) {
    window.alert('Tu Producto ya esta en el carrito!');
    this.cartService.addToCart(producto);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    this.producto = products[+params.get('productId')];
  });
  }

}