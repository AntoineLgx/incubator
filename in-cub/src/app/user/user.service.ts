import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User = null;

  constructor(private http: HttpClient, private router: Router) { }

  addUser(user: User){
    this.http.post<User>('/api/user', user)
    this.router.navigate(["/register"]);
  }
}