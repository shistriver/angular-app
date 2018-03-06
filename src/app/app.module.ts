import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http'; //引入 Http 模块
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { UserComponent } from './user.component';
import { MembersComponent } from './members.component';
import { MemberService} from './member.service';

export const ROUTES: Routes = [
  	{ path: '', pathMatch: 'full', redirectTo: 'user' },
  	{ path: 'user', component: UserComponent },
  	{ path: 'members', component: MembersComponent }
];

@NgModule ({
  declarations: [
    AppComponent,
    UserComponent,
    MembersComponent
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
