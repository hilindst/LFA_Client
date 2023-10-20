import { NgModule } from "@angular/core";
import {Routes, RouterModule} from '@angular/router';
import { TasklistComponent } from "./dashboard/tasklist/tasklist.component";
import { KanbanBoardComponent } from "./dashboard/kanban-board/kanban-board.component";
import { AddTaskComponent } from "./dashboard/tasklist/add-task/add-task.component";
import { EditTaskComponent } from "./dashboard/tasklist/edit-task/edit-task.component";
import { DeleteTaskComponent } from "./dashboard/tasklist/delete-task/delete-task.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";


const appRoutes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: LandingPageComponent},
  {path: 'tasklist', component: TasklistComponent, children: [
    /*  {path:'', component: RecipeStartComponent }, */
    {path: 'new', component: AddTaskComponent},
    {path: ':id/edit', component: EditTaskComponent},
    {path: ':id/delete', component: DeleteTaskComponent}
  ] },
  {path: 'kanban-board', component: KanbanBoardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export  class AppRoutingModule {

}
