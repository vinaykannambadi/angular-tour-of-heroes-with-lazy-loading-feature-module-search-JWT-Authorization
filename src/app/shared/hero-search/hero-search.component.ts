import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Observable, Subject} from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap, } from 'rxjs/operators';
import { of } from 'rxjs/index';

import{Hero} from '../../heroes/hero';
import {HeroSearchService} from '../../services/hero-search.service';


@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
  providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {
heroes;
private searchTerms = new Subject<string>();
  constructor(private heroSearchService: HeroSearchService, private router: Router) { }

  ngOnInit() {
    this.searchTerms
        .pipe(debounceTime(300),    
        distinctUntilChanged(), 
        switchMap(term => term  
        ?this.heroSearchService.search(term)
        : of<Hero[]>([])),
         catchError(error => {
          // TODO: add real error handling
          console.log(error);
          return of<Hero[]>([]);
        })).subscribe(heroes => {this.heroes = heroes});
  }
  
  //push a search tyerm to Observable
  search(term: string): void {
    this.searchTerms.next(term);
  }

goToDetail(hero: Hero):void {
  let link = ['/detail', hero.id];
  this.router.navigate(link);
}

}