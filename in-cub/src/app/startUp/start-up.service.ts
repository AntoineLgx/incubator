import { Injectable } from '@angular/core';
import { StartUp } from './StartUp';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StartUpService {

  constructor(private http: HttpClient) { }

  getAllStartUps(){
    return this.http.get<StartUp[]>(`/api/startups`)
  }

  getStartUp(id: number){
    return this.http.get<StartUp>('/api/startups/' + id)
  }

  addStartUp(startUp: StartUp){
    this.http.post<StartUp>('/api/eleves', startUp)
  }

  updateStartUp(startUp: StartUp){
    this.http.put<StartUp>('/api/eleves', startUp)
  }
}
