import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SharedComponent } from './shared/shared.component';
import { AddTaskComponent } from './tasklist/add-task/add-task.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TasklistComponent } from './tasklist/tasklist.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SharedComponent,
    TasklistComponent,
    AddTaskComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
