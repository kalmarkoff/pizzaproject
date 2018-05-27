import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Pizzas } from '../services/pizzas';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent  {
  public pizzas = [];
  public errorMsg;
  constructor(private _PizzasService: DataService) { }

  ngOnInit() {
    this._PizzasService.getPizzas()
      .subscribe(data => this.pizzas = data,
                error => this.errorMsg = error);
  }
}
