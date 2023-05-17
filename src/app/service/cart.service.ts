import { EventEmitter, Injectable } from '@angular/core';

export interface itemType{
  name:string,
  id:string,
  amt:number,
  qty:number,
  type?:'veg'|'fruit'
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
           
  allItems:itemType[]=[];
  totalAmount: number;
  itemAdd= new EventEmitter();
  
  constructor() { }

  addItem(item:itemType){
    const prevItem= this.allItems.findIndex((fruitItem)=>{
      return fruitItem.id=== item.id;
    });

    if(prevItem>=0){
      this.allItems[prevItem].qty=this.allItems[prevItem].qty+1;
    }else{
      this.allItems.push(item);
    }
    
    this.itemAdd.emit();
  }

  getAllItem(){
    return this.allItems;
  }

  getTotal(item:itemType){
    this.totalAmount = item.qty*item.amt;
  }

}
