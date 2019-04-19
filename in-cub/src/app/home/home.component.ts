import { Component, OnInit } from '@angular/core';
import { StartUpService } from '../startUp/start-up.service';
import { ConsultantService } from '../consultant/consultant.service';
import { StartUp } from '../startUp/StartUp';
import { Consultant } from '../consultant/Consultant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private startups: StartUp[];
  private consultants: Consultant[];

  constructor(private startupService: StartUpService, private consultantService: ConsultantService) { }

  ngOnInit() {
    this.startups = this.startupService.getAllStartUps().reverse();
    if (this.startups.length > 3)
      this.startups.length = 3;
    this.consultants = this.consultantService.getAllConsultants().reverse();
    if (this.consultants.length > 3)
      this.consultants.length = 3;
  }

}
