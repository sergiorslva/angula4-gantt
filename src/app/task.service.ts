import { Injectable } from '@angular/core';
import { Task } from './task';
import { Observable } from 'rxjs/Observable';
import { Promise } from 'q';
import { of } from 'rxjs/observable/of';

@Injectable()
export class TaskService {

  private task: Task;
  private listTask: Task[];
  constructor() { }

 
  getTasks(): Observable<any>{
    return of ([
      {
        'id': 1,
        'text': 'Sergio',
        'start_date': '2017-11-19 00:00',
        'duration': 3,
        'progress': 0.6        
      },
      {
        'id': 2,
        'text': 'Vania',
        'start_date': '2017-11-20 00:00',
        'duration': 3,
        'progress': 0.6,
        'color': '#FF0000'
      }
    ]);
  }
}
