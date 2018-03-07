import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http'; //引入 Http 模块
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { MembersComponent } from './members.component';
import { MemberService} from './member.service';

import { HeroDetailComponent } from './heroDetail/hero-detail.component';

export const ROUTES: Routes = [
  	{ path: '', pathMatch: 'full', redirectTo: 'members' },
  	{ path: 'members', component: MembersComponent }
];

@NgModule ({
  declarations: [
    AppComponent,
    MembersComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
