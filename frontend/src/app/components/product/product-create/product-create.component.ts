import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './../product.models';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  
  product: Product = {
   id: null,
   name: '',
   price: null,
   url: ''
 }

  constructor(private productService: ProductService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage(`Produto '${this.product.name}' foi criado!`)
      this.router.navigate(['/products'])
    })
    
  }

  exibir(): void {}

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
