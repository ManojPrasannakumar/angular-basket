import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-fruitcount',
  templateUrl: './fruitcount.component.html',
  styleUrls: ['./fruitcount.component.scss']
})
export class FruitcountComponent implements OnInit {
  totalQty:number=0;
  totalAmt:number=0;
  gTotal:number=0;
  
  constructor(private cartServ:CartService){
  }

  ngOnInit(){
    this.cartServ.itemAdd.subscribe(()=>{
      this.totalQty=0;
      this.gTotal=0;
      this.cartServ.getAllItem().forEach((item)=>{
      this.totalQty = item.qty + this.totalQty;
      this.totalAmt = item.amt*item.qty;
      this.gTotal += this.totalAmt;
      console.log(this.gTotal);
     }) 
    })
    
  }
}
