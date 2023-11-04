import { Component, OnInit } from '@angular/core';
import { ShowAddTask } from 'src/app/shared/services/show-add-task.service';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Task } from 'src/app/shared/task.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit{
  idx: number;
  isEditMode = false;
  addTaskForm : FormGroup;
  taskDetails: Task = {
    title: "",
    details: "",
    date: "",
    priority: "",
    status: ""
  };

  constructor(public showAddTask: ShowAddTask, private router: Router, private route: ActivatedRoute){}
//create Task Service like the bookshelf service
  ngOnInit() {
  this.addTaskForm = new FormGroup ({
    title: new FormControl(null, Validators.required),
    details: new FormControl(null, Validators.required),
    date: new FormControl(null),
    priority: new FormControl('Medium'),
    status: new FormControl('To Do')
  });
    this.route.params.subscribe((params: Params) => {
      this.idx = +params["id"];
      this.isEditMode = params["id"] != null;
      if (this.isEditMode) {
        this.taskDetails = this.taskService.getTask(this.idx);
      }
    });
  }

  onCreate(formObj; NgForm){
    console.log('created!', this.addTaskForm);
    const {title, details, date, priority, status} = formObj.value;
    this.taskDetails = new Task(title, details, date, priority, status);
    if (this.isEditMode) {
      this.taskService.updateTask(this.idx, this.taskDetails);
    } else {
      this.taskService.addTask(this.taskDetails);
    }
    this.onResetForm();
  }

  onResetForm(){
    this.router.navigate(["../"], {relativeTo: this.route});
  }
}
