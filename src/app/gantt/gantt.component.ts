import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import 'dhtmlx-gantt';
import { } from '@types/dhtmlxgantt';
import { TaskService } from '../task.service';
import { LinkService } from '../link.service';
import { Task } from '../task';

@Component({
  selector: 'app-gantt',
  templateUrl: './gantt.component.html',
  styleUrls: ['./gantt.component.css']
})
export class GanttComponent implements OnInit {

  private task: Task;
  private listTask: Task[];
  @ViewChild('gantt_here') ganttContainer: ElementRef;

  constructor(
    private taskService: TaskService,
    private linkService: LinkService
  ) { }

  ngOnInit() {
    // gantt.config.xml_date = '%Y-%m-%d %H:%i';
    // gantt.config.scale_unit = 'day';
    // gantt.config.date_scale = '%d/%m/%Y';


    // let startDate = new Date(2017, 10, 1);
    // let endDate = new Date(2017, 10, 30);
    // gantt.init(this.ganttContainer.nativeElement, startDate, endDate);
    
    // this.taskService.getTasks().subscribe(
    //   data => {
    //     gantt.parse({data});
    //   }
    // );

    this.setViewToDay();
  }

  setViewToDay(){
    gantt.config.xml_date = '%Y-%m-%d %H:%i';
    gantt.config.scale_unit = 'day';
    gantt.config.date_scale = '%d/%m/%Y';

    this.setIniGannt();
  }

  setViewToWeek(){
    gantt.config.xml_date = '%Y-%m-%d %H:%i';
    gantt.config.scale_unit = 'week';
    gantt.config.date_scale = 'Semana %W';

    this.setIniGannt();
  }

  setIniGannt(){    
    let startDate = new Date(2017, 10, 1);
    let endDate = new Date(2017, 10, 30);
    gantt.init(this.ganttContainer.nativeElement, startDate, endDate);
    

    gantt.config.columns = [
      {name:"text",       label:"Tarefa",  width:"*", tree:false },
      {name:"start_date", label:"Inicio", align: "center" },
      {name:"duration",   label:"Duração",   align: "center" },
      {name:"add",        label:"",           width:0 }
    ];


    this.taskService.getTasks().subscribe(
      data => {
        gantt.parse({data});
      }
    );
  }
}
