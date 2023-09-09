import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  signInUserArray:any []=[];
  signInUserObj:any ={};
  loginUserObj:any ={};
  localData : any;


  constructor() { }

  ngOnInit(): void {
    this.localData = localStorage.getItem('signInUserArray')
    if(this.localData != null){
      this.signInUserArray = JSON.parse(this.localData)
    }
    console.log("this.signInUserArray ",this.signInUserArray );
    
    
  }

  onSignUpClick(){
    this.signInUserArray.push(this.signInUserObj)
    localStorage.setItem('signInUserArray',JSON.stringify(this.signInUserArray))
    this.signInUserObj = {}
  }

  onLoginClick(){
    debugger
    let isUserExist = this.signInUserArray 
    this.signInUserArray.find(m=> m.userName == this.loginUserObj.userName && m.password == this.loginUserObj.password)
    if(isUserExist != undefined){
      alert('User Logged in Successfully')
    } else{
      alert('Wrong Credentials')
    }


  }

}
