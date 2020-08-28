import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  propLegal = 'qualquer'

  constructor(private prodService: ProductService,
      private router: Router) { }

  ngOnInit(): void {

  }

  createProduct(): void {
    this.prodService.showMessage('Produto criado!')
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
