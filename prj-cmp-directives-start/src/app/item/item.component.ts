import { Component, OnInit, Input } from '@angular/core'
import { StarWarsService } from '../star-wars.service'
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() character;
  swService: StarWarsService;

  constructor (swService: StarWarsService) {
    this.swService = swService
  }

  changeSides (newSide) {
    // this.sideChanged.emit({ name: this.character.name, side: newSide })
    this.swService.onSideChosen({
      name: this.character.name,
      side: newSide
    })
  }
  ngOnInit () {}
}
