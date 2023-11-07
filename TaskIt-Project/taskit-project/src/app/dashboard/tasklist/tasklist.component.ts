import { Component, OnInit} from '@angular/core';
import { Task } from 'src/app/shared/task.model';
import { AddTaskComponent } from './add-task/add-task.component';
import { ShowAddTask } from 'src/app/shared/services/show-add-task.service';
import { ShowEditTask } from 'src/app/shared/services/show-edit-task.service';
import { ShowDeleteTask } from 'src/app/shared/services/show-delete-task.service';
import { ActivatedRoute, Router} from '@angular/router';
import { TaskserviceService } from 'src/app/shared/services/taskservice.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  tasks = this.taskService.tasks;

constructor(public showAddTask: ShowAddTask, public showEditTask: ShowEditTask, public showDeleteTask: ShowDeleteTask, private router: Router, private route: ActivatedRoute, private taskService: TaskserviceService ){

}



  //Modal//

  ngOnInit(): void {

  }

}
