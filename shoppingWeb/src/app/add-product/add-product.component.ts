import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productArray:any=[];
  registerForm: any;
  submitted = false;
  productObj:any={
    id: 0
  }
  localStoreProductArray:any = []
  constructor(
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    let localData =localStorage.getItem("productArray")
    if(localData != null){
      this.productArray =JSON.parse(localData)
    }
  }
  
  submitForm(){
      this.productObj.id = this.productArray.length + 1
      console.log("productObj",this.productObj);
      this.productArray.push(this.productObj)
      localStorage.setItem('productArray',JSON.stringify(this.productArray))
      this.productObj = {}
    
  
    // this.router.navigate(['/productList'])
  }
  editProduct(item:any){
    console.log("item",item);
    this.productObj = item
    localStorage.setItem('productArray',JSON.stringify(this.productArray))
  }

  deleteProduct(id:number){
    debugger
    for(let i=0;i<=this.productArray.length;i++){
      if(this.productArray[i].id == id){
        this.productArray.splice(i,1)
        localStorage.setItem('productArray',JSON.stringify(this.productArray))
        alert('Product Deleted Successfully')
      }
      // else{
      //   alert('Data Not Found')
      // }
    }
    

  }
  updateForm(){
    this.productObj = {}
    
    // need to close the form on update click
  }

}
