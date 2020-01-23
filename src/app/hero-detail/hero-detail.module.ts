import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from './hero-detail.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailRoutingModule} from './hero-detail-routing.module';


@NgModule({
  imports: [
    CommonModule, FormsModule, HeroDetailRoutingModule
  ],
  declarations: [HeroDetailComponent],
  exports: [
    HeroDetailComponent
  ]
})
export class HeroDetailModule { }