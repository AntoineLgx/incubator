import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: string = null;
  url: string = 'http://localhost:3000/'

  constructor(private http: HttpClient, private router: Router) { }

  addUser(user: User){
    this.http.post<User>(this.url + 'createAccount  ', user).subscribe((response) => {
        /* this function is executed every time there's a new output */
        console.log("VALUE RECEIVED: "+response);
      })
    this.router.navigate(["/login"]);
  }

  loginUser(login: string, password: string){
    this.http.post<string>(this.url + 'login',{login : login, password:password}).subscribe(
      (response) => {
        console.log(response);
         
        if(response['message'] == null){
          this.user = response;
          this.router.navigate(["/"]);  
        }
    });
  }
}
