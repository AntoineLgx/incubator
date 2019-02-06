import { Injectable } from '@angular/core';
import { Consultant } from './Consultant';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {

  consultants: Array<Consultant> = []

  constructor(private http: HttpClient) { }
  
  getAllConsultants(){
    this.http.get<Consultant[]>(`/api/Consultants`).subscribe(
      consultants => consultants.map(consultant => this.consultants.push(consultant))
    );
    return this.consultants;
  }

  getConsultant(id: number){
    return this.http.get<Consultant>('/api/Consultants/' + id)
  }

  addConsultant(consultant: Consultant){
    this.http.post<Consultant>('/api/eleves', consultant)
  }

  updateConsultant(consultant: Consultant){
    this.http.put<Consultant>('/api/eleves', consultant)
  }

  genId(): number{
    this.getAllConsultants();
    return this.consultants.length > 0 ? Math.max(...this.consultants.map(s => s.id)) + 1 : 1;
  }
}
