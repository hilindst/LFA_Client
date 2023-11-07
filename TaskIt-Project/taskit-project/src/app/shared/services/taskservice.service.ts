import { Injectable } from '@angular/core';
import { Task } from '../task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {

  constructor() { }
  tasks: Task[] = [
    new Task("Clean Out Garage", "Clean Out Garage", "Nov 23, 2023", "High", "To Do"),
    new Task("Clean Out Garage", "Clean Out Garage", "Nov 23, 2023", "High", "To Do"),

  ];

  updateTask(){

  }

  getTask(){

  }

  addTask(){

  }

}
