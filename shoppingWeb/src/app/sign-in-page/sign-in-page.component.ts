import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {
  userExist:boolean=false
  signInUserObj: any ={}
  loginInUserObj: any ={}
  loginUser: any;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    let user = localStorage.getItem('userDetails')
    if(user != null){
      this.loginUser = JSON.parse(user)
    }
    
  }

  signInUser(){
    console.log("signInUserObj",this.signInUserObj);
    localStorage.setItem('userDetails',JSON.stringify(this.signInUserObj))
    this.router.navigate(['/productList'])
  }
  openLoginForm(){
    this.userExist = true
   
  }
  signIn(){
    // debugger
    console.log("loginInUserObj",this.loginInUserObj.email,this.loginUser.email  )
    if(this.loginInUserObj.email == this.loginUser.email && this.loginInUserObj.password == this.loginUser.password ){
      this.router.navigate(['/productList'])
    }else{
      alert('Please use Correct Credentials')
    }
  }
}
