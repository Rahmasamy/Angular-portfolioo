import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  logo:string="user dashboard";
  name:String="mohamed";
  changeName(name :String){
    this.name=name
  }
  path="https://img.icons8.com/?size=100&id=61977&format=png&color=000000"
 
}
