import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-essentials'
  rootName = 'Peter'
  shoppingList = ['apples', 'pears', 'bananas']

  addToArray (newItem) {
    console.log('newItem', newItem);
    this.shoppingList.push(newItem);
    console.log('this.shoppingList', this.shoppingList);
  }
  onNameChanged (newName) {
    this.rootName = newName
  }
}
