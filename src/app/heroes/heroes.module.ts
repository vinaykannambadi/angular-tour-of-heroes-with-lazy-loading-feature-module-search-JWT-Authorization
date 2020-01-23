import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroesRoutingModule} from './heroes-routing.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, HeroesRoutingModule
  ],
  declarations: [
    HeroesComponent
  ],
  exports: [
    HeroesComponent
  ]
})
export class HeroesModule { }