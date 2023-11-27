import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/shared/services/taskservice.service';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.css']
})
export class KanbanBoardComponent implements OnInit{
  name: string;
  dueDate: Date;
  priority: string;
  status: string;
  tasks = this.taskService.taskList;
  constructor (private taskService: TaskService, private route: ActivatedRoute ) {}

  ngOnInit(): void {

  }

}
