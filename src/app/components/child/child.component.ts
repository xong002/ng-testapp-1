import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  childData: string = "pass this data from child to parent"
  username = ""
  showDisplayDetails = true;
  logArray: number[] = [];

  @Output() eventEmitted: EventEmitter<any> = new EventEmitter();

  onInput(event: Event) {
    console.log((<HTMLInputElement>event.target).value);
    this.childData = (<HTMLInputElement>event.target).value;
  }

  btnClicked() {
    this.eventEmitted.emit(this.childData);
  }

  resetInput() {
    this.username = "";
  }

  getColor() {
    return this.username === '' ? 'red' : 'green'
  }

  toggleShowSecretPassword() {
    this.showDisplayDetails = !this.showDisplayDetails;
    this.logArray.push(this.logArray.length + 1)
  }


}
