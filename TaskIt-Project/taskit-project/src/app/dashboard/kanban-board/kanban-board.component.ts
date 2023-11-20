import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskserviceService } from 'src/app/shared/services/taskservice.service';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.css']
})
export class KanbanBoardComponent implements OnInit{
  tasks = this.taskService.tasks;
  constructor (private taskService, TaskserviceService, private route: ActivatedRoute ) {}

  ngOnInit(): void {

  }

}
