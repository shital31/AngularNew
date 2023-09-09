import { Component, HostBinding, OnInit } from '@angular/core';
// import {LayoutModule} from '@angular/cdk/layout';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  constructor(
    private breakpointObserver : BreakpointObserver
  ) { }

  ngOnInit(): void {
   
  }

}
