import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { Pizzas } from '../services/pizzas';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  public departmentId;
  public errorMsg;
  imageUrl:string ='';
  price:number;
  id:string="";

  constructor(private route:ActivatedRoute,private httpClient:HttpClient) { }

  ngOnInit() {
    let id = (this.route.snapshot.paramMap.get('id'));
    this.httpClient.get(`http://localhost:5555/Pizzas/?id=${id}`)
    .subscribe(
      (data:any[]) => {
        if(data.length) {
          this.imageUrl = data[0].imageUrl;
          this.price = data[0].price;
          this.id = data[0].id;
        }
    }
  )
}
}

