import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';

import { RegisterComponent } from './components/register/register.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskUpdateComponent } from './components/task-update/task-update.component';
import { TaskComponent } from './components/task/task.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
  
    {path: 'account', component: UserDetailComponent},
    {path: 'task', component: TaskComponent},
    {path: 'tasklist', component: TaskListComponent},
    {path: 'task', component: TaskUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
    constructor (router : Router) {}
}
