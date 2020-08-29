import { ProductService } from './../product.service';
import { Product } from './../product.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.scss']
})
export class ProductReadComponent implements OnInit {


  products: Product[]
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(private prodService: ProductService) { }

  ngOnInit(): void {
    this.prodService.read().subscribe(res => {
      this.products = res
      console.log(res)
    })
  }

}
