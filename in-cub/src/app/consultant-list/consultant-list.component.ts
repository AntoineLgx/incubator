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
    this.consultants = []
    this.consultants = this.consultantService.getAllConsultants();
  }

  deleteConsultant(id: number){
    this.consultantService.removeConsultant(id);
  }

  editConsultant(consultant: Consultant){
    
  }

}