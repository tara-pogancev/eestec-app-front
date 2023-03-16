import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { HeaderBoardComponent } from './components/board/header-board/header-board.component';
import { SidebarBoardComponent } from './components/board/sidebar-board/sidebar-board.component';
import { CalendarBoardComponent } from './components/board/calendar-board/calendar-board.component';
import { MembersTableComponent } from './components/board/members-table/members-table.component';
import { MemberPageComponent } from './components/board/member-page/member-page.component';
import { EditMemberComponent } from './components/board/edit-member/edit-member.component';
import { TasksPreviewComponent } from './components/board/tasks-preview/tasks-preview.component';
import { NewTaskComponent } from './components/board/new-task/new-task.component';
import { LocalNotificationsDashComponent } from './components/board/local-notifications-dash/local-notifications-dash.component';
import { IntNotificationsDashComponent } from './components/board/int-notifications-dash/int-notifications-dash.component';
import { EventsDashComponent } from './components/board/events-dash/events-dash.component';
import { Page404Component } from './components/page404/page404.component';
import { PageUnauthorizedComponent } from './components/page-unauthorized/page-unauthorized.component';
import { BoardDashboardComponent } from './components/board/board-dashboard/board-dashboard.component';
import { MemberDashboardComponent } from './components/member/member-dashboard/member-dashboard.component';
import { MyTasksComponent } from './components/board/my-tasks/my-tasks.component';
import { GroupsComponent } from './components/board/groups/groups.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    EditProfileComponent,
    HeaderBoardComponent,
    SidebarBoardComponent,
    CalendarBoardComponent,
    MembersTableComponent,
    MemberPageComponent,
    EditMemberComponent,
    TasksPreviewComponent,
    NewTaskComponent,
    LocalNotificationsDashComponent,
    IntNotificationsDashComponent,
    EventsDashComponent,
    Page404Component,
    PageUnauthorizedComponent,
    BoardDashboardComponent,
    MemberDashboardComponent,
    MyTasksComponent,
    GroupsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
