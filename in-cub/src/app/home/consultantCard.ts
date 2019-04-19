import { Component, Input } from '@angular/core';
import { Consultant } from '../consultant/Consultant';
import { ConsultantService } from '../consultant/consultant.service';

@Component({
    selector: 'card-consultant',
    template:
    `
    <div class="card">
        <div class="card-body">
            <h4 class="card-title">{{ consultant.nom | uppercase }} {{ consultant.prenom }}</h4>
            <p class="card-text">{{ consultant.description }}</p>
        </div>
    </div>
    `
})

export class ConsultantCard {
    
    @Input() consultant: Consultant;

}