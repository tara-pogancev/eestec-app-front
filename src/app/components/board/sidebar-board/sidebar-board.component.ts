import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-board',
  templateUrl: './sidebar-board.component.html',
  styleUrls: ['./sidebar-board.component.scss'],
})
export class SidebarBoardComponent implements OnInit {
  tab: number = 0;

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      this.toggleSelectedMenuItem();
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.toggleSelectedMenuItem();
    }, 20);
  }

  toggleSelectedMenuItem() {
    switch (this.router.url) {
      case '/board/members':
        this.tab = 0;
        break;
      case '/board/groups':
        this.tab = 1;
        break;
      case '/board/tasks':
        this.tab = 2;
        break;
      case '/board/my-tasks':
        this.tab = 3;
        break;
      case '/board/calendar':
        this.tab = 4;
        break;
      case '/board/local-notifications':
        this.tab = 5;
        break;
      case '/board/int-notifications':
        this.tab = 6;
        break;
      default:
        this.tab = 0;
        break;
    }
  }
}
