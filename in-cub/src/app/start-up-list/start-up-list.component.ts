import { Component, OnInit } from '@angular/core';
import { StartUp } from '../startUp/StartUp';
import { StartUpService } from '../startUp/start-up.service';

@Component({
  selector: 'app-start-up-list',
  templateUrl: './start-up-list.component.html',
  styleUrls: ['./start-up-list.component.css']
})
export class StartUpListComponent implements OnInit {

  startUps: Array<StartUp> = [];

  constructor(private startUpService: StartUpService) { }

  ngOnInit() {
    this.startUps = this.startUpService.getAllStartUps();
    this.startUps.push(new StartUp(1, "Test", "Test", "Test", 1, "Test", "Mail"));
    this.startUps.push(new StartUp(1, "Test", "Test", "Test", 2, "Test", null));
  }

  deleteStartUp(startUp: StartUp){

  }

  editStartUp(startUp: StartUp){
    
  }

}
