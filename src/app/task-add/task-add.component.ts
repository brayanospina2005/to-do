import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  @Output() addTaskEventEmitter = new EventEmitter();
  taskForm : FormGroup;
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      taskTitle : ["", [Validators.required]]
    })
  }

  onKeyPress($event){
    if(this.taskForm.valid){
      this.addTaskEventEmitter.emit(this.taskForm.value);
      this.taskForm.patchValue({
        taskTitle : ''
      })
    }
  }

}
