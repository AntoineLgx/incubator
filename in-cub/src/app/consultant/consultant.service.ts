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
    console.log("getting all consultants");
    this.consultants = [];
    this.http.get<Consultant[]>('http://localhost:3000/consultants').subscribe(
      
      consultants => consultants.map(consultant => 

        {
          console.log(consultant);
          this.consultants.push(consultant);
        })
      
    );
    // this.consultants.push(new Consultant(1, "Test", "Test", "Test"));
    // this.consultants.push(new Consultant(2, "Nom", "Prenom", "Test"));
    // this.consultants.push(new Consultant(2, "Nom", "Prenom", "Test"));
    console.log("Consultants",this.consultants);
    return this.consultants;
  }

  getConsultant(id: number){
    return this.http.get<Consultant>('http://localhost:3000/consultant/' + id)
  }

  addConsultant(consultant: Consultant){
    this.http.post<Consultant>('/api/consultants', consultant)
  }

  updateConsultant(consultant: Consultant){
    this.http.put<Consultant>('/api/consultants', consultant)
  }

  removeConsultant(id: number){
    this.http.delete<Consultant>('/api/consultants/' + id);
  }

  genId(): number{
    this.getAllConsultants();
    return this.consultants.length > 0 ? Math.max(...this.consultants.map(s => s.id)) + 1 : 1;
  }
}
