import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service'

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  propLegal = 'qualquer'

  constructor(private prodService: ProductService ) { }

  ngOnInit(): void {
    this.prodService.showConsole('teste....')
  }

  fazerAlgo(): void {
    console.log('fazendo algo')
  }

}
