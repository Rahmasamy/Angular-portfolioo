import { Component, HostBinding, OnInit } from '@angular/core';
import {BreakpointObserver,Breakpoints } from '@angular/cdk/layout'
import { from } from 'rxjs';
@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent implements OnInit{
  @HostBinding('class.pc')PcMode=false
  constructor(private breakpointObserver:BreakpointObserver) {
    
  }
  ngOnInit(): void {
      console.log("hhhhhhhhh");
      this.breakpointObserver.observe([Breakpoints.HandsetPortrait,Breakpoints.WebLandscape]).subscribe(
        {
          next:(result:any) => {
            for (let breakpoint of Object.keys(result.breakpoints)){
              if(result.breakpoints[breakpoint]){
                if(breakpoint === Breakpoints.HandsetPortrait){
                    this.PcMode=false
                }
                if(breakpoint === Breakpoints.WebLandscape){
                  this.PcMode=true
                }
              

              }
            }
          }
        }
      )
  }
  path="https://blog.bydrec.com/hubfs/What%20do%20software%20developers%20do.jpg"
}
