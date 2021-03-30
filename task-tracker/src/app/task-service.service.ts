import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(public httpClient:HttpClient) { }

  storeTasks(task:any){
    this.httpClient.post('http://localhost:3000/tasks',task).
    subscribe(result=>console.log(result),error=>console.log(error)
    );
  }

    getTasks():Observable<Task[]>{
      return this.httpClient.get<Task[]>("http://localhost:3000/tasks");
}

deleteTasks():any{
  return this.httpClient.delete('http://localhost:3000/tasks/333');
}
}
