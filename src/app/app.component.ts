import { Component } from '@angular/core';
import { Task } from '../app/model/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';

  tasks : Task[];

  constructor(){
    this.tasks = [];
  }

  addTaskEventEmitter($event){
    this.tasks.push(new Task($event.taskTitle));
    console.log('Tasks are ', this.tasks);
  }
}
