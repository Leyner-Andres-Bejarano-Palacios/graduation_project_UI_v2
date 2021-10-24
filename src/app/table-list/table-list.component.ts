import { Component, OnInit } from '@angular/core';
import { TaskMap } from '../taskMap';
import { TaskService } from '../task.service'

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  tasks: TaskMap[];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  private getTasks(){
    this.taskService.getTasksMapList().subscribe(data => {
      this.tasks = data;
    });
  }

}
