import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testapp';
  parentData : string = "";

  parentFn(event: any){
    this.parentData = event;
    console.log(event)
  }
}
