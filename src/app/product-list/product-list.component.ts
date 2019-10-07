import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('Este Producto ha sido compartido!!');
  }

  onNotify() {
    window.alert('Seras notificado cuando el producto salga a la venta');
  }
}


