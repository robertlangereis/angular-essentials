import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-user',
  template: `
    <!-- <input type="text" (input)="onUserInput($event)" [value]="name" /> -->
    <input type="text" [(ngModel)]="name" />
    <p>Hello {{ name }}!</p>
    <p>I'm a user component</p>
  `
})
export class UserComponent {
  @Input() name = 'Robert'
  @Output() nameChanged = new EventEmitter<string>()

  onUserInput (e) {
    //   this.name = e.target.value;
    this.nameChanged.emit(e.target.value)
  }
}
