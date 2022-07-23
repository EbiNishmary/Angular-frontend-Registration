import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  task: Task = new Task();
  submitted = false;

  constructor(private taskservice: TaskService,
    private router: Router) { }

  ngOnInit() {
  }

  newTask(): void {
    this.submitted = false;
    this.task = new Task();
  }

  save() {
    this.taskservice
    .createTask(this.task).subscribe(data => {
      console.log(data)
      this.task = new Task();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/tasklist']);
  }
}
