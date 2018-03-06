import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { MemberService } from './member.service';

interface Member {
	id: string;
	login: string;
	avatar_url: string;
}

@Component({
	selector: 'el-menbers',
	templateUrl: './menbers.component.html',
})

export class MembersComponent implements OnInit {
	members: Member[];

	constructor(private memberService: MemberService) { }

	ngOnInit() {
        this.memberService.getMembers()
            .subscribe(data => {
                if (data) this.members = data;
            });
    }
}