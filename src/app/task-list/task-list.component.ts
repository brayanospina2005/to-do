import { Component, Input, OnInit } from '@angular/core';
import { TaskStatus } from '../enum/enum';
import { Task } from '../model/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() tasks;
  constructor() { }

  ngOnInit(): void {
  }

  changeStatus(task : Task){
    if(task.status == TaskStatus.Active){
      task.status = TaskStatus.Done;
    } else {
      task.status = TaskStatus.Active;
    }
  }

  deleteTask(task){
    let index = this.tasks.findIndex(item => item['id'] == task.id);
    this.tasks.splice(index, 1);
  }

}
