import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Pizzas } from './pizzas';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {
  private _url: string = "http://localhost:5555/Pizzas";

  constructor(private http:HttpClient) { }

  getPizzas(): Observable<Pizzas[]>{
    return this.http.get<Pizzas[]>(this._url)
                    .catch(this.errorHandler);
  }
  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }

}
