import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bai1';


  width: number = 10.5;
  height: number = 20;

  area: number = this.width*this.height;

}
