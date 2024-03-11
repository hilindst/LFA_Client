import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { MainNpcComponent } from './main-npc/main-npc.component';
import { NpcListComponent } from './main-npc/npc-list/npc-list.component';
import { SelectedNpcComponent } from './main-npc/selected-npc/selected-npc.component';
import { AddNpcComponent } from './main-npc/add-npc/add-npc.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { authGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'new', component: AddNpcComponent, canActivate: [authGuard] },
  {
    path: 'main',
    component: MainNpcComponent,
    children: [
      // {path: 'list', component: NpcListComponent},
      // {path: ':id', component: SelectedNpcComponent},
      // {path: 'new', component: AddNpcComponent}
      //{path: ':id/edit, component: EditNpcComponent}
    ],
    canActivate: [authGuard],
  },
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent },
  //Potentially an {path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
