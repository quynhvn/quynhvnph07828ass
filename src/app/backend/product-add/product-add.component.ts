import { Component, OnInit } from '@angular/core';
import { Product } from '../../Product';
import { Router } from '@angular/router';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product: Product = new Product();

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  addProduct(){
    this.productService.addProduct(this.product).subscribe(data =>{
       this.router.navigateByUrl("/manage/product-manage")
    } );
  }

}