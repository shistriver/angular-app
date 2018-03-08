import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http'; //引入 Http 模块
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { MembersComponent } from './members.component';
import { MemberService} from './member.service';

import { HeroesComponent } from './hero/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component'

import { HeroDetailComponent } from './heroDetail/hero-detail.component';

export const ROUTES: Routes = [
  	{ path: '', pathMatch: 'full', redirectTo: 'members' },
    { path: 'heroes', component: HeroesComponent },
  	{ path: 'members', component: MembersComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule ({
  declarations: [
    AppComponent,
    MembersComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent
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
