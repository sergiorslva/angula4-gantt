import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GanttComponent } from './gantt/gantt.component';

import {TaskService} from './task.service';
import {LinkService} from './link.service';

@NgModule({
  declarations: [
    AppComponent,
    GanttComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TaskService,
    LinkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
