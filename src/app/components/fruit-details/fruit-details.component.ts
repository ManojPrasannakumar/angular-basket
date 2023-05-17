import { Component, OnInit } from '@angular/core';
import { CartService,itemType } from 'src/app/service/cart.service';

@Component({
  selector: 'app-fruit-details',
  templateUrl: './fruit-details.component.html',
  styleUrls: ['./fruit-details.component.scss']
})
export class FruitDetailsComponent implements OnInit {
  allItem: itemType[];

  constructor(private cartServ: CartService){  }
  
  ngOnInit(){
    this.cartServ.itemAdd.subscribe(()=>{
      this.allItem = this.cartServ.getAllItem();
      console.log('this.cart details',this.allItem);
    })
    }
}
