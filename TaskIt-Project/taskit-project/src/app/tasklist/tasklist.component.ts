import { Component, OnInit} from '@angular/core';
import { Task } from '../shared/task.model';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from './add-task/add-task.component';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  tasks: Task[] = [
    new Task("Clean Out Garage", "Nov 23, 2023", "High", "To Do"),
    new Task("Clean Out Garage", "Nov 23, 2023", "High", "To Do"),
    new Task("Clean Out Garage", "Nov 23, 2023", "High", "To Do"),
    new Task("Clean Out Garage", "Nov 23, 2023", "High", "To Do"),
    new Task("Clean Out Garage", "Nov 23, 2023", "High", "To Do"),

  ];

  //Modal//
  name: string;
  color: string;
  constructor(public dialog: MatDialog) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(AddTaskComponent, {
      width: '400px',
      data: { name: this.name, color: this.color },
    });
    dialogRef.afterClosed().subscribe((res) => {
      this.color = res;
    });
  }



  ngOnInit(): void {

  }

}
