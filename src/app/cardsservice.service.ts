import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Cards } from './cards';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class CardsserviceService {
  private _url: string = "http://localhost:5555/Cards";

  constructor(private http:HttpClient) { }

  getCards(): Observable<Cards[]>{
    return this.http.get<Cards[]>(this._url)
                    .catch(this.errorHandler);
  }
  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }
}
