import { Component } from '@angular/core';
import { Task } from 'src/app/shared/task.model';
import { GeneralService } from 'src/app/shared/services/general.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent{
  constructor(public generalService: GeneralService){}

  ngOnInit() {}

  resetForm() {

}
}
