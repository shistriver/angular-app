import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero/hero';
import { HeroService } from '../hero/hero.service';


@Component({
	selector: 'hero-detail',
	templateUrl: './hero-detail.component.html',
	styleUrls: ['./hero-detail.component.css'],
	// providers: [HeroService]
})

export class HeroDetailComponent implements OnInit {
	hero: Hero;

	contructor(
	 	private heroService: HeroService,
	 	private route: ActivatedRoute,
	 	private location: Location
	 ) {}

	 /*ngOnInit(): void {
	 	this.route.paramMap
	 		.switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
	 		.subscribe(hero => this.hero = hero);
	 }*/

 	ngOnInit(): void {
 		// console.log(ActivatedRoute)
 		// console.log(ParamMap)
 		console.log(this)
	  	this.route.paramMap
	    	.switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
	    	.subscribe(hero => this.hero = hero);
	}
}