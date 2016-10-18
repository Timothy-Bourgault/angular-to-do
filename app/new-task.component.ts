import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'new-task',
  template: `
  <h1>New Task</h1>
    <div>
      <label>Enter Task Description:</label>
      <input #newDescription>
    </div>
    <div>
      <label>Enter Task ID:</label>
      <input #newId>
      <select #newPriority>
        <option selected="selected">optional</option>
        <option>high</option>
        <option>medium</option>
        <option>low</option>
      </select>
      <button (click)="addClicked(newDescription.value, newId.value, newPriority.value);
      newDescription.value='';
      newId.value='';
      newPriority.value='optional';
      ">Add</button>
    </div>
  `
})

export class NewTaskComponent {
  @Output() newTaskSender = new EventEmitter();
  addClicked(description: string, id: number, priority: string) {
    var newTaskToAdd: Task = new Task(description, id, priority);
    this.newTaskSender.emit(newTaskToAdd);
  }
}
