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
    //  this.startUps.push(new StartUp(1, "Test", "Test", "Test", 1, "Test", "Mail", null));
    //  this.startUps.push(new StartUp(1, "Test", "Test", "Test", 2, "Test", null, null));
    //  this.startUps.push(new StartUp(1, "Test", "Test", "Test", 2, "Test", null, null));
    return this.startUps;
  }

  getStartUp(id: number){
    return this.http.get<StartUp>(this.url + id);
  }

  addStartUp(startUp: StartUp){
    this.http.post<StartUp>(this.url, startUp);
  }

  updateStartUp(startUp: StartUp){
    this.http.put<StartUp>(this.url, startUp);
  }

  removeStartUp(id: number){
    this.http.get<StartUp>(this.url + id);
  }

  genId(): number{
    this.getAllStartUps();
    return this.startUps.length > 0 ? Math.max(...this.startUps.map(s => s.id)) + 1 : 1;
  }
}
