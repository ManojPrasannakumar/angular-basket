import { Component } from '@angular/core';
import { itemType } from 'src/app/service/cart.service';

@Component({
  selector: 'app-all-fruits',
  templateUrl: './all-fruits.component.html',
  styleUrls: ['./all-fruits.component.scss']
})
export class AllFruitsComponent {

  allFruits:itemType[]=[
  {
    name:'Mangos',
    id:'Mango',
    amt:6,
    qty:1
  }, {
    name:'Beetroot',
    id:'Beetroot',
    amt:20,
    qty:1,
    type:'veg'
  },
  {
    name:'Apples',
    id:'Apple',
    amt:10,
    qty:1
  },
  {
    name:'Bananas',
    id:'Banana',
    amt:3,
    qty:1
  },
  {
    name:'Spinach',
    id:'Spinach',
    amt:15,
    qty:1,
    type:'veg'
  },
  {
    name:'Guavas',
    id:'Guava',
    amt:2,
    qty:1
  },
  {
    name:'Strawberrys',
    id:'strawberry',
    amt:8,
    qty:1
  }];
  // vegName="beans" vegName="carrot" vegName="beetroot" vegName="capsicum" vegName="spinach"
  allVeggies:itemType[]=[
    {
      name:'Beans',
      id:'Beans',
      amt:20,
      qty:1,
      type:'veg'
    },
    {
      name:'Carrots',
      id:'Carrot',
      amt:40,
      qty:1,
      type:'veg'
    },
    {
      name:'Capsicum',
      id:'Capsicum',
      amt:30,
      qty:1,
      type:'veg'
    }];
}
