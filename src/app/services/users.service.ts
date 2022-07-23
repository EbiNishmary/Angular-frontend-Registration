import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Token } from '../models/Token';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
    constructor(private http : HttpClient) { }

    register ( username : string, email : string, password : string) : Observable<Token> {
        return this.http.post<Token>(`${environment.API_URL}/register`, {
            
            username,
            email,
            password,
            
           
            
        })
    }

    login (email : string, password : string) : Observable<Token> {
        return this.http.post<Token>(`${environment.API_URL}/login`, {
            email,
            password,
        })
    }

    createToken (email : string) : Observable<Token> {
        return this.http.post<Token>(`${environment.API_URL}/api/create-token`, {
            email
        });
    }

    getUsers () : Observable<User[]> {
        return this.http.get<User[]>(`${environment.API_URL}/api/users`);
    }

    getUser (id : string) : Observable<User> {
        return this.http.get<User>(`${environment.API_URL}/api/users/${id}`);
    }

    getUserByToken () : Observable<User> {
        return this.http.get<User>(`${environment.API_URL}/user`, {
            headers: new HttpHeaders({
              'Authorization': 'Bearer ' + localStorage.getItem('token'),
              'Content-Type': 'application/json'
            })
        });
    }
}