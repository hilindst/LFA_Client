import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SharedComponent } from './shared/shared.component';
import { AddTaskComponent } from './tasklist/add-task/add-task.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { EditTaskComponent } from './tasklist/edit-task/edit-task.component';
import { DeleteTaskComponent } from './tasklist/delete-task/delete-task.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SharedComponent,
    TasklistComponent,
    AddTaskComponent,
    EditTaskComponent,
    DeleteTaskComponent,
    KanbanBoardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
