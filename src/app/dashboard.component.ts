import { Component } from "@angular/core";

@Component({
  selector: "app-dashboard",
  template: `
    <input type="text" (input)="onUserInput($event)" [value]="loadText" />
    <button (click)="changeLoading()">CLICK</button>
    <p>{{ loadText }}</p>
  `
})
export class DashboardComponent {
  loadState = true;
  loadText =  "loading";

  onUserInput(e) {
    this.loadText = e.target.value;
  }

  changeLoading() {
    this.loadState = !this.loadState;
    if(this.loadState) this.loadText = "loading"
    else this.loadText = "finished"
  }
}
