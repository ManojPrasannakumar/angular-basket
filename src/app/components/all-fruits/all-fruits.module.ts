import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllFruitsComponent } from './all-fruits.component';
import { FruitButtonComponent } from './fruit-button/fruit-button.component';
import {MatButtonModule} from '@angular/material/button';
import { StandardModModule } from 'src/app/common/standard-mod/standard-mod.module';

@NgModule({
  declarations: [
    AllFruitsComponent,
    FruitButtonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    StandardModModule
  ],
  exports:[
    AllFruitsComponent
  ]
})
export class AllFruitsModule { }
