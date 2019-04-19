import { Component, Input } from '@angular/core';
import { StartUp } from '../startUp/StartUp';
import { Consultant } from '../consultant/Consultant';
import { ConsultantService } from '../consultant/consultant.service';

@Component({
    selector: 'card-start-up',
    template:
    `
    <div class="card">
        <div class="card-body">
            <h4 class="card-title">{{ startUp.nom }}</h4>
            <h6 class="card-subtitle mb-2 text-muted">{{ startUp.nbrFondateurs | nbrFondateur }}</h6>
            <p class="card-text">{{ startUp.description }}</p>
            <!--<h6 class="card-subtitle mb-2 text-muted">Consultant : {{ consultant.nom | uppercase }} {{ consultant.prenom }}</h6>-->
        </div>
    </div>
    `
})

export class StartUpCard {
    @Input() startUp: StartUp;
    consultant: Consultant;

    constructor(private consultantService: ConsultantService){}

    ngOnInit(){
        this.consultantService.getConsultant(this.startUp.consultant).subscribe(data => this.consultant = data);
    }
}