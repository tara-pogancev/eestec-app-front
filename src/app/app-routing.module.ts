import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardDashboardComponent } from './components/board/board-dashboard/board-dashboard.component';
import { CalendarBoardComponent } from './components/board/calendar-board/calendar-board.component';
import { EditMemberComponent } from './components/board/edit-member/edit-member.component';
import { EventsDashComponent } from './components/board/events-dash/events-dash.component';
import { GroupsComponent } from './components/board/groups/groups.component';
import { IntNotificationsDashComponent } from './components/board/int-notifications-dash/int-notifications-dash.component';
import { LocalNotificationsDashComponent } from './components/board/local-notifications-dash/local-notifications-dash.component';
import { MemberPageComponent } from './components/board/member-page/member-page.component';
import { MembersTableComponent } from './components/board/members-table/members-table.component';
import { MyTasksComponent } from './components/board/my-tasks/my-tasks.component';
import { NewTaskComponent } from './components/board/new-task/new-task.component';
import { TasksPreviewComponent } from './components/board/tasks-preview/tasks-preview.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MemberDashboardComponent } from './components/member/member-dashboard/member-dashboard.component';
import { PageUnauthorizedComponent } from './components/page-unauthorized/page-unauthorized.component';
import { Page404Component } from './components/page404/page404.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';

var baseTitle = 'App • EESTEC';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginPageComponent,
    title: 'Login - ' + baseTitle,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
    title: 'Register - ' + baseTitle,
  },
  {
    path: 'board',
    component: BoardDashboardComponent,
    children: [
      {
        path: '',
        component: MembersTableComponent,
        title: 'Members - ' + baseTitle,
      },
      {
        path: 'members',
        component: MembersTableComponent,
        title: 'Members - ' + baseTitle,
      },
      {
        path: 'groups',
        component: GroupsComponent,
        title: 'Groups - ' + baseTitle,
      },
      {
        path: 'calendar',
        component: CalendarBoardComponent,
        title: 'Calendar - ' + baseTitle,
      },
      {
        path: 'edit-member/:id',
        component: EditMemberComponent,
        title: 'Edit Member - ' + baseTitle,
      },
      {
        path: 'events',
        component: EventsDashComponent,
        title: 'Events - ' + baseTitle,
      },
      {
        path: 'int-notifications',
        component: IntNotificationsDashComponent,
        title: 'International Notifications - ' + baseTitle,
      },
      {
        path: 'local-notifications',
        component: LocalNotificationsDashComponent,
        title: 'Local Notifications - ' + baseTitle,
      },
      {
        path: 'member/:id',
        component: MemberPageComponent,
        title: 'Member - ' + baseTitle,
      },
      {
        path: 'new-task',
        component: NewTaskComponent,
        title: 'New Task - ' + baseTitle,
      },
      {
        path: 'tasks',
        component: TasksPreviewComponent,
        title: 'All Tasks - ' + baseTitle,
      },
      {
        path: 'my-tasks',
        component: MyTasksComponent,
        title: 'My Tasks - ' + baseTitle,
      },
    ],
  },
  {
    path: 'member',
    component: MemberDashboardComponent,
  },
  {
    path: 'unauth',
    component: PageUnauthorizedComponent,
    title: 'Unauthorized - ' + baseTitle,
  },
  {
    path: '**',
    component: Page404Component,
    title: '404 - ' + baseTitle,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
