import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css']
})
export class TaskUpdateComponent implements OnInit {
  id: number;
  task: Task;

  constructor(private route: ActivatedRoute,private router: Router,
    private taskservice: TaskService) { }

  ngOnInit() {
    this.task = new Task();

    this.id = this.route.snapshot.params['id'];
    
    this.taskservice.getTask(this.id)
      .subscribe(data => {
        console.log(data)
        this.task = data;
      }, error => console.log(error));
  }

  updateTask() {
    this.taskservice.updateTask(this.id, this.task)
      .subscribe(data => {
        console.log(data);
        this.task = new Task();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateTask();    
  }

  gotoList() {
    this.router.navigate(['/tasks']);
  }
}

