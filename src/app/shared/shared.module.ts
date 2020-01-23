import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, HttpClientModule],
  declarations: [
    HeroSearchComponent
  ],
  exports: [
    CommonModule,
    FormsModule, HeroSearchComponent, HttpClientModule
    
  ]
})
export class SharedModule {
}