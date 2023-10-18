import { NgModule } from "@angular/core";
import {Routes, RouterModule} from '@angular/router';
import { TasklistComponent } from "./tasklist/tasklist.component";
import { KanbanBoardComponent } from "./kanban-board/kanban-board.component";
import { AddTaskComponent } from "./tasklist/add-task/add-task.component";
import { EditTaskComponent } from "./tasklist/edit-task/edit-task.component";
import { DeleteTaskComponent } from "./tasklist/delete-task/delete-task.component";


const appRoutes: Routes = [
  {path: '', redirectTo: '/tasklist', pathMatch: 'full'},
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
