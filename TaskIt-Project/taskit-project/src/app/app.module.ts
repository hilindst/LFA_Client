import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './dashboard/tasklist/add-task/add-task.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { TasklistComponent } from './dashboard/tasklist/tasklist.component';
import { EditTaskComponent } from './dashboard/tasklist/edit-task/edit-task.component';
import { DeleteTaskComponent } from './dashboard/tasklist/delete-task/delete-task.component';
import { KanbanBoardComponent } from './dashboard/kanban-board/kanban-board.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './shared/auth/auth.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AddTaskComponent,
    EditTaskComponent,
    DeleteTaskComponent,
    KanbanBoardComponent,
    LandingPageComponent,
    DashboardComponent,
    TasklistComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],

})
export class AppModule { }
