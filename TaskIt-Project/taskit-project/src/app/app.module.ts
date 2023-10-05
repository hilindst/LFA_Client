import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedComponent } from './shared/shared.component';
import { TasklistComponent } from './tasklist/tasklist.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SharedComponent,
    TasklistComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
