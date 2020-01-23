import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, pipe} from 'rxjs';
import {map, filter, tap} from 'rxjs/operators';

import {Hero} from '../heroes/hero';
import {HeroService} from './hero.service';



@Injectable()
export class HeroSearchService {
  
  constructor(private httpClient:HttpClient, private heroService: HeroService) { }
// for exact match
 /* search(term: string): Observable<Hero[]> {
    return this.heroService.getHeroes().pipe(map((heroes: Hero[]) => heroes.filter((hero) => {return hero.name.toLowerCase() === term.toLowerCase()}))
    );
    
  }*/

  // for Regex match
  /*search(term: string): Observable<Hero[]> {
    const regexp = new RegExp(term, 'i');
    return this.heroService.getHeroes().pipe(map((heroes: Hero[]) => heroes.filter((hero) => {return regexp.test(hero.name)}))
    );
    
  }*/

  // for Includes match
  search(term: string): Observable<Hero[]> {
    return this.heroService.getHeroes().pipe(map((heroes: Hero[]) => heroes.filter((hero) => {return hero.name.toLowerCase().includes(term.toLowerCase())}))
    );
    
  }

}