import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ViewProductPageComponent } from './view-product-page/view-product-page.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {
    path:'',
    component:SignInPageComponent
  },
  {
    path:'productList',
    component:ProductListComponent
  },
  {
    path:'viewProduct',
    component:ViewProductPageComponent
  },
  {
    path:'addProduct',
    component:AddProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
