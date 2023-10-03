import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedComponent } from './shared/shared.component';
import { LoginFloatComponent } from './sidebar/login-float/login-float.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SharedComponent,
    LoginFloatComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
