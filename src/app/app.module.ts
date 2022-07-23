import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';


import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TaskComponent } from './components/task/task.component';
import { TaskUpdateComponent } from './components/task-update/task-update.component';
import { TaskListComponent } from './components/task-list/task-list.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    

    UserDetailComponent,
    TaskComponent,
    TaskUpdateComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
