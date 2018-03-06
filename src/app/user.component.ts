import { Component } from '@angular/core';

interface Address {
    province: string;
    city: string;
}

@Component({
	selector: 'el-user',
 	templateUrl: './user.component.html',
 	styleUrls: ['./user.component.css'],
})


export class UserComponent {
	name: string;
	address: Address;
	showSkills: boolean;
	skills: string[];
	username: string;
	versions: string;

	constructor(){
		this.name = 'Semlinker';
		this.username = 'angular';
		this.address = {
			province: '贵州',
			city: '凯里'
		};
		this.showSkills = true;
		this.skills = ['AngularJS 1.x', 'Angular 2.x', 'Angular 4.x'];
		this.versions = ['1.x', '2.x', '3.x'];
	}

	toggleSkills() {
        this.showSkills = !this.showSkills;
    }

    addSkill(skill: string) {
    	let skillStr = skill.trim();
    	if(this.skills.indexOf(skillStr) === -1){
    		this.skills.push(skillStr);
    		console.log(this.skills)
    	}
    }

    onSubmit(value){
    	console.dir(value);
    }
}