import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/task.model';
import { ShowAddTask } from 'src/app/shared/services/show-add-task.service';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit{

  constructor(public showAddTask: ShowAddTask){}

  ngOnInit() {}


}
