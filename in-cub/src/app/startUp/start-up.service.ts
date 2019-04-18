import { Injectable } from '@angular/core';
import { StartUp } from './StartUp';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StartUpService {

  startUps: Array<StartUp> = [];

  constructor(private http: HttpClient) { }

  getAllStartUps(){
    this.startUps = [];
    this.http.get<StartUp[]>(`/api/startups`).subscribe(
      startUps => startUps.map(startUp => this.startUps.push(startUp))
    );
    //  this.startUps.push(new StartUp(1, "Test", "Test", "Test", 1, "Test", "Mail", null));
    //  this.startUps.push(new StartUp(1, "Test", "Test", "Test", 2, "Test", null, null));
    //  this.startUps.push(new StartUp(1, "Test", "Test", "Test", 2, "Test", null, null));
    return this.startUps;
  }

  getStartUp(id: number){
    return this.http.get<StartUp>('/api/startups/' + id)
  }

  addStartUp(startUp: StartUp){
    this.http.post<StartUp>('/api/startups', startUp)
  }

  updateStartUp(startUp: StartUp){
    this.http.put<StartUp>('/api/startups', startUp)
  }

  removeStartUp(id: number){
    this.http.delete<StartUp>('/api/startups/' + id)
  }

  genId(): number{
    this.getAllStartUps();
    return this.startUps.length > 0 ? Math.max(...this.startUps.map(s => s.id)) + 1 : 1;
  }
}
