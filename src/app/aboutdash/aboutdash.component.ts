import { Component, OnInit } from '@angular/core';
import { CardsserviceService } from '../cardsservice.service';
import { Cards } from '../cards';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'aboutdash',
  templateUrl: './aboutdash.component.html',
  styleUrls: ['./aboutdash.component.css']
})
export class AboutdashComponent {

  public cards = [];
  public errorMsg;
  constructor(private _CardsService: CardsserviceService) { }

  ngOnInit() {
    this._CardsService.getCards()
      .subscribe(data => this.cards = data,
                error => this.errorMsg = error);
  }
}
