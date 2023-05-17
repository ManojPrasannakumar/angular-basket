import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarModule } from './components/nav-bar/nav-bar.module';
import { AllFruitsModule } from './components/all-fruits/all-fruits.module';
import { FruitDetailsModule } from './components/fruit-details/fruit-details.module';
import { StandardModModule } from './common/standard-mod/standard-mod.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NavBarModule,
    AllFruitsModule,
    FruitDetailsModule,
    StandardModModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
