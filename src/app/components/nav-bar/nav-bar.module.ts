import { NgModule } from '@angular/core';

import { NavBarComponent } from './nav-bar.component';
import { FruitcountComponent } from './fruitcount/fruitcount.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [
    NavBarComponent,
    FruitcountComponent
  ],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule
  ],
  exports:[
    NavBarComponent
  ]
})
export class NavBarModule { }
