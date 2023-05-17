import { Component, Input, OnInit } from '@angular/core';
import { CartService, itemType } from 'src/app/service/cart.service';

@Component({
  selector: 'app-fruit-button',
  templateUrl: './fruit-button.component.html',
  styleUrls: ['./fruit-button.component.scss']
})
export class FruitButtonComponent implements OnInit{
  itemName:string='';
  @Input() item:itemType;
 
  constructor(private cartServ:CartService){}
  ngOnInit(){
    this.itemName= this.item.name;
  }
  addFruit(){
    this.cartServ.addItem(this.item);
  }
/* 
  typeCheck((item:any)=>{
    item.type === 'veg' ? 'accent' : 'primary'";
  }
 */

}
