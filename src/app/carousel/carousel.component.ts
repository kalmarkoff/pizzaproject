import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig]
})
export class CarouselComponent   {
  
  images = [
    {img:'https://cdn.discordapp.com/attachments/401708831920488449/438664940820103178/slide1.png'},
    {img:'https://cdn.discordapp.com/attachments/401708831920488449/438664942061879298/slide2.jpg'},
    {img:'https://cdn.discordapp.com/attachments/401708831920488449/438664945249288202/slide3.jpg'}
  ]

  }
