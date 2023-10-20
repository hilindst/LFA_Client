import { Component, OnInit } from '@angular/core';
import { ShowDeleteTask } from 'src/app/shared/services/show-delete-task.service';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css']
})
export class DeleteTaskComponent implements OnInit {
  constructor(public showDeleteTask: ShowDeleteTask){}

  ngOnInit(): void {

  }

}
