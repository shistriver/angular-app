import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <h3>欢迎来到Angular的世界</h3>
      <nav>
        <a routerLink="/user">我的</a>
        <a routerLink="/members">Angular成员</a>
      </nav>
      <br>
      <router-outlet></router-outlet>
    </div>
  `,
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
