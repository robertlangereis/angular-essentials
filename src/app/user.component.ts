import { Component } from "@angular/core";

@Component({
  selector: "app-user",
  template: `
    <!-- <input type="text" (input)="onUserInput($event)" [value]="name" /> -->
    <input type="text" [(ngModel)]="name" />
    <p>Hello {{ name }}!</p>
    <p>I'm a user component</p>
  `
})
export class UserComponent {
  name = "Robert";

  // onUserInput(e) {
  //   this.name = e.target.value;
  // }
}
