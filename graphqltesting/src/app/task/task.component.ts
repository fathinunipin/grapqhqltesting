import { Component, OnInit } from '@angular/core';
import { GraphqlService } from './graphql.service';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss']
})

export class TaskComponent implements OnInit {
    tasks: any[] = [];
    newTask: any = {};
    loading = true;
    error: string[] =[];
  
    constructor(private graphqlService: GraphqlService) {}
  
    ngOnInit() {
      this.graphqlService.getTasks().subscribe(
        (response: any) => {
          const { data } = response as { data: { tasks: any[] } };
          this.tasks = data.tasks;
          this.loading = false;
          console.log('true');
        },
        (error) => {
          this.error = error.message;
          this.loading = false;
          console.log('error');
        }
      );
    }
  
    createTask() {
      this.graphqlService.createTask(this.newTask.title, this.newTask.description).subscribe(
        (response: any) => {
          const { data } = response as { data: { createTask: any } };
          this.tasks.push(data.createTask);
          this.newTask = {};
          console.log('work');
        },
        (error) => {
          this.error = error.message;
          console.log('not work');
        }
      );
    }
  
    updateTask(task: any) {
      this.graphqlService.updateTask(task.id, task.title, task.description, task.completed).subscribe(
        (response: any) => {
          const { data } = response as { data: { updateTask: any } };
          const updatedTask = data.updateTask;
          const index = this.tasks.findIndex(t => t.id === updatedTask.id);
          this.tasks[index] = updatedTask;
        },
        (error) => {
          this.error = error.message;
        }
      );
    }
  
    deleteTask(id: string) {
      this.graphqlService.deleteTask(id).subscribe(
        (response: any) => {
          const { data } = response as { data: boolean };
          if (data) {
            const index = this.tasks.findIndex(t => t.id === id);
            this.tasks.splice(index, 1);
          }
        },
        (error) => {
          this.error = error.message;
        }
      );
    }
  }