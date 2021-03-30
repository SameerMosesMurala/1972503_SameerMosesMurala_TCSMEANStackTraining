import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../task-service.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {
  tasksData:Array<Task>=[];
  constructor(public taskSer:TaskServiceService) { }

  ngOnInit(): void {
    setInterval(() => {  this.getTasks() }, 100);
  }

  storeTask(taskRef:any)
  {
  this.taskSer.storeTasks(taskRef);
  }
  headers = ["id", "name","task","deadline"];
  getTasks()
  {
    this.taskSer.getTasks().subscribe(data=>this.tasksData=data); 
  }

  deleteTasks(){
    this.taskSer.deleteTasks().subscribe();
  }

  

}
