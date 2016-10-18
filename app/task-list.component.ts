import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template: `
  <label>Sort By Doneness</label>
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="all">Show All</option>
    <option value="isDone">Show Done</option>
    <option value="notDone" selected="selected">Show Not Done</option>
  </select>
  <label>Sort By Priority</label>
  <select (change)="priorityChange($event.target.value)" class="filter">
    <option selected="selected" >Show All</option>
    <option>high</option>
    <option>medium</option>
    <option>low</option>
  </select>
  <div *ngFor="let currentTask of childTaskList | completeness:selectedCompleteness | prioritiness:selectedPrioritiness">
    <task-display [task]="currentTask"></task-display>
    <button (click)="editButtonHasBeenClicked(currentTask)">Edit</button>
  </div>
  `
})

export class TaskListComponent {
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();
  public selectedCompleteness: string = "show";
  public selectedPrioritiness: string = "Show All";
  onChange(optionFromMenu) {
   this.selectedCompleteness = optionFromMenu;
   console.log(this.selectedCompleteness);
  }
  priorityChange(optionFromMenu){
   this.selectedPrioritiness = optionFromMenu;
   console.log(this.selectedPrioritiness);
  }
  editButtonHasBeenClicked(taskToEdit: Task) {
   this.clickSender.emit(taskToEdit);
  }
}
