import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() items = []
  newItem = ''
  @Output() addToCart = new EventEmitter<string>()

  constructor () {}

  // onUserInput (e) {
  //   this.newItem = e.target.value;
  // }
  addUserInputToCart () {
    this.addToCart.emit(this.newItem);
  }
  ngOnInit () {}
}
