import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { ValueTransformer } from '@angular/compiler/src/util';

@Component({
  selector: 'app-create-own',
  templateUrl: './create-own.component.html',
  styleUrls: ['./create-own.component.css']
})
export class CreateOwnComponent implements OnInit {

  sizechoosed:boolean = false;
  total:number= 0;
  products: string [];
  choosedproduct: number = 0;
  ngOnInit() {
  }

    

  sizes = [
    {size:'20',img:'https://cdn.discordapp.com/attachments/401708831920488449/448787409358815232/pizza_size5.png'},
    {size:'26',img:'https://cdn.discordapp.com/attachments/401708831920488449/448787413049802753/pizza_size1.png'},
    {size:'32',img:'https://cdn.discordapp.com/attachments/401708831920488449/448787415616978944/pizza_size2.png'}
  ]
  seafood = [
      {price: 10, name :'Squid',img:'https://cdn.discordapp.com/attachments/401708831920488449/448635986386354176/DCTM_Penguin_UK_DK_AL639403_k3qity.png'}, 
      {price: 15, name: 'Crab',img:'https://cdn.discordapp.com/attachments/401708831920488449/448636060084338689/slider_image_crab_700_mob.png' }, 
      {price:20, name: 'Shrimp',img:'https://cdn.discordapp.com/attachments/401708831920488449/448636247875911701/Shrimp-Prawn-Northern-pandalus_borealis_sw.png'},
      {price:30,name:'Mussel',img:'https://cdn.discordapp.com/attachments/401708831920488449/448636316251324446/mejillon.png' }
  ]
  vegetables = [
    {name:'Pepper',price: 3,img:'https://cdn.discordapp.com/attachments/401708831920488449/448636879441494016/2440_erin_m_5f0ffd9a-29da-46b6-bae4-f9ba605cf59f.png' },
    {name:'Mushrooms',price: 5,img:'https://cdn.discordapp.com/attachments/401708831920488449/448637007619555330/portobello-2006620_960_720.png'},
    {name:'tomato', price: 4 ,img:'https://cdn.discordapp.com/attachments/401708831920488449/448637149445750804/latest.png'},
  ]
  meats =[
    {name:'Ham',price: 1,img:'https://cdn.discordapp.com/attachments/401708831920488449/448798249919447040/sliced-Cooked-Ham.png'},
    {name:'Bacon', price: 1,img:'https://cdn.discordapp.com/attachments/401708831920488449/448638331799207966/bacon-png.png'},
    {name:'sausages', price: 1,img:'https://cdn.discordapp.com/attachments/401708831920488449/448800284919988245/21-31-img-2710-kolbaski-okhotn-726x340.png' }
  ]
  cheeses =[
    {name:'Mozzarella',price: 1,img:'https://cdn.discordapp.com/attachments/401708831920488449/448801637339758592/31khDX0tgyL.png'},
    {name:'Parmesan', price: 1 ,img:'https://cdn.discordapp.com/attachments/401708831920488449/448801639772717066/parmesan.png'},
    {name:'Maasdam', price: 1,img:'https://cdn.discordapp.com/attachments/401708831920488449/448801640703590400/maasdam-45.png'},
    
  ]

  choosesize(){
    this.sizechoosed = true;
    this.choosedproduct = 2;
  }

  meatandseafood(event){
      this.choosedproduct = event
  }

  test(event){
    const target = event.target
    this.total = this.total+event
    this.choosedproduct = this.choosedproduct+1 
  }
  startagain(){
    this.sizechoosed = false
    this.total = 0
    this.choosedproduct = 0
  }
}
