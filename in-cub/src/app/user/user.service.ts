import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User = null;

  constructor(private http: HttpClient, private router: Router) { }

  addUser(user: User){
    this.http.post<User>('localhost:3000/createAccount  ', user).subscribe((response) => {
        /* this function is executed every time there's a new output */
        console.log("VALUE RECEIVED: "+response);
      })
    this.router.navigate(["/register"]);
  }

  loginUser(login: string, password: string){
    this.http.post<User>('localhost:3000/login',{login : login, password:password});
  }
}
