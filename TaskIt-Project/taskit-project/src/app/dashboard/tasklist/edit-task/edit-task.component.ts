import { Component, OnInit } from '@angular/core';
import { ShowEditTask } from 'src/app/shared/services/show-edit-task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit{

  constructor(public ShowEditTask: ShowEditTask){}

  ngOnInit(): void {

  }
}
