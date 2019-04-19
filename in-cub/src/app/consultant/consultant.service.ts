import { Injectable } from '@angular/core';
import { Consultant } from './Consultant';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {

  consultants: Array<Consultant> = []

  constructor(private http: HttpClient) { }
  url = "http://localhost:3000/consultant/";
  getAllConsultants(){
    this.consultants = [];
    this.http.get<Consultant[]>('http://localhost:3000/consultants').subscribe(
      
      consultants => consultants.map(consultant => 

        {
          console.log(consultant);
          this.consultants.push(consultant);
        })
      
    );
    console.log("Consultants : ",this.consultants);
    return this.consultants;
  }

  getConsultant(_id: number){
    return this.http.get<Consultant>('http://localhost:3000/consultant/' + _id)
  }

  addConsultant(consultant: Consultant){
    console.log("add consultant");
    this.http.post(this.url, consultant).subscribe(res => console.log(res));
  }

  updateConsultant(consultant: Consultant){
    this.http.put<Consultant>(this.url + consultant._id, consultant).subscribe(res => console.log(res));
  }

  removeConsultant(id: number){
    console.log("remove consultant",id);
    this.http.delete<Consultant>(this.url + id).subscribe(res => console.log(res));
  }

  genId(): number{
    this.getAllConsultants();
    return this.consultants.length > 0 ? Math.max(...this.consultants.map(s => s._id)) + 1 : 1;
  }
}
