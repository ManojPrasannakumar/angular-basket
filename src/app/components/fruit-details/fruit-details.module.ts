import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FruitDetailsComponent } from './fruit-details.component';
import {MatListModule} from '@angular/material/list';
import { StandardModModule } from 'src/app/common/standard-mod/standard-mod.module';

@NgModule({
  declarations: [FruitDetailsComponent],
  imports: [
    CommonModule,
    MatListModule,
    StandardModModule
  ],
  exports:[
    FruitDetailsComponent
  ]
})
export class FruitDetailsModule { }
