import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task.model';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  tasks: Task[] = [];

  ngOnInit(): void {

  }

}
