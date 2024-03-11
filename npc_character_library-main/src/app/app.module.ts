import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NpcListComponent } from './main-npc/npc-list/npc-list.component';
import { MainNpcComponent } from './main-npc/main-npc.component';
import { SelectedNpcComponent } from './main-npc/selected-npc/selected-npc.component';
import { AddNpcComponent } from './main-npc/add-npc/add-npc.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NPCService } from './shared/services/npc.service';
import { CeilPipe } from './ceil.pipe';
import { NpcImgSelectComponent } from './main-npc/add-npc/npc-img-select/npc-img-select.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    NpcListComponent,
    MainNpcComponent,
    SelectedNpcComponent,
    AddNpcComponent,
    PagenotfoundComponent,
    CeilPipe,
    NpcImgSelectComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [NPCService],

  bootstrap: [AppComponent],
})
export class AppModule {}
