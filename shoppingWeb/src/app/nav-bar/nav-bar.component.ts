import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
userName:any
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    let user = localStorage.getItem('userDetails')
    if(user != null){
      this.userName = JSON.parse(user)
    }
  }
  logOutUser(){
    localStorage.removeItem('userDetails');
    this.router.navigate([''])

  }
  addProduct(){
    this.router.navigate(['/addProduct'])
  }

  onHomeClick(){
    this.router.navigate(['/productList'])
  }


}
