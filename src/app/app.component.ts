import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testapp';
  parentData : string = "";
  view = "recipes";

  parentFn(event: any){
    this.parentData = event;
    console.log(event)
  }

  displayView(event: string){
    this.view = event;    
  }
}
