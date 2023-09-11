import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
      productListArray :any= []
   

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    let localData =localStorage.getItem("productArray")
    if(localData != null){
      this.productListArray =JSON.parse(localData)
    }

  }

  viewProduct(){
    this.router.navigate(['/viewProduct'])
  }

}
