import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  productListArray: any;
  clothingFlag: boolean = false;

  constructor() { }

  ngOnInit(): void {
    let localData =localStorage.getItem("productArray")
    if(localData != null){
      this.productListArray =JSON.parse(localData)
    }
    this.getProductCategory()
  }

  getProductCategory(){
    console.log("getProductCategory",this.productListArray );
    
    // if(this.productListArray.category == 'Clothing'){
    //   this.clothingFlag = true
    // }
  }

  clothingCategory(){}

}
