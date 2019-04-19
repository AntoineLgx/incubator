import { Injectable } from '@angular/core';
import { StartUp } from './StartUp';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StartUpService {

  startUps: Array<StartUp> = [];
  url = "http://localhost:3000/startup/";
  constructor(private http: HttpClient) { }

  getAllStartUps(){
    this.startUps = [];
    
    this.http.get<StartUp[]>('http://localhost:3000/startups').subscribe(
      startUps => startUps.map(startUp => this.startUps.push(startUp))
    );
    console.log("Start-ups : ",this.startUps);
    return this.startUps;
  }

  getStartUp(_id: number){
    return this.http.get<StartUp>(this.url + _id);
  }

  addStartUp(startUp: StartUp){
  
    this.http.post("http://localhost:3000/startup", startUp).subscribe(res => console.log(res));
  }

  updateStartUp(startUp: StartUp){
    this.http.put<StartUp>(this.url, startUp);
  }

  deleteStartUp(_id: number){
    this.http.delete<StartUp>(this.url + _id).subscribe(res => console.log(res));
  }

  genId(): number{
    this.getAllStartUps();
    return this.startUps.length > 0 ? Math.max(...this.startUps.map(s => s._id)) + 1 : 1;
  }
}
