import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { StartUp } from '../startUp/StartUp';
import { StartUpService } from '../startUp/start-up.service';

@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

	startUpForm: FormGroup;
	nomControl: FormControl;
	secteurControl: FormControl;
	nomRepLegControl: FormControl;
	nbrFondaControl: FormControl;
	descriptionControl: FormControl;
	emailControl: FormControl;

	constructor(private startUpService: StartUpService, private fb: FormBuilder) { 
		this.nomControl = this.fb.control('', [Validators.required, Validators.maxLength(20)]);
		this.secteurControl = this.fb.control('', [Validators.required, Validators.maxLength(10)]);
		this.nomRepLegControl = this.fb.control('', [Validators.required, Validators.maxLength(15)]);
		this.nbrFondaControl = this.fb.control('', Validators.required);
		this.descriptionControl = this.fb.control('', [Validators.required, Validators.maxLength(250)]);
		this.emailControl = this.fb.control('', [Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.maxLength(25)]);

		this.startUpForm = this.fb.group({
			nom: this.nomControl,
			secteur: this.secteurControl,
			repLeg: this.nomRepLegControl,
			fondateurs: this.nbrFondaControl,
			desc: this.descriptionControl,
			mail: this.emailControl
		  });
	}

	ngOnInit() {
	}

	addStartUp(){
		const startUp : StartUp = {
			id: this.startUpService.genId(),
			nom: this.startUpForm.value.nom,
			secteur: this.startUpForm.value.prenom,
			representantLegal: this.startUpForm.value.repLeg,
			nbrFondateurs: parseInt(this.startUpForm.value.fondateurs),
			description: this.startUpForm.value.desc,
			mail: this.startUpForm.value.mail
		  };
		  this.startUpService.addStartUp(startUp);
		  this.startUpForm.reset();
	}
}
