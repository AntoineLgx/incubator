import { Component, OnInit } from '@angular/core';
import { Consultant } from '../consultant/Consultant';
import { ConsultantService } from '../consultant/consultant.service';

@Component({
  selector: 'app-consultant-list',
  templateUrl: './consultant-list.component.html',
  styleUrls: ['./consultant-list.component.css']
})
export class ConsultantListComponent implements OnInit {

  consultants: Array<Consultant> = [];

  constructor(private consultantService: ConsultantService) { }

  ngOnInit() {
    this.consultants = [];
    console.log("Ng on init get all consultalts");
    this.consultants = this.consultantService.getAllConsultants();
  }

  deleteConsultant(_id: number){
    this.consultantService.removeConsultant(_id);
    this.consultants = this.consultantService.getAllConsultants();
  }

  editConsultant(consultant: Consultant){
    
  }

}
