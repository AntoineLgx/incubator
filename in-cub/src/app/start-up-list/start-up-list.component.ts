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
  }

  deleteStartUp(_id: number){
    this.startUpService.deleteStartUp(_id)
    this.startUps = this.startUpService.getAllStartUps();
  }

  editStartUp(startUp: StartUp){
    
  }

}
