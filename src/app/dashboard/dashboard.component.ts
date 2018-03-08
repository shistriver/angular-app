import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero/hero';
import { HeroService } from '../hero/hero.service';

@Component({
	selector: 'my-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css'],
	providers: [HeroService],
})

export class DashboardComponent implements OnInit {
	// heroes: Hero[] = [];
	heroes: Hero[];

	constructor(private heroService: HeroService) { }

	ngOnInit(): void {
	    this.heroService.getHeroes()
	      .then(heroes => this.heroes = heroes.slice(1, 5));
  	}

  	/*getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit(): void {
        this.getHeroes();
    }*/
}