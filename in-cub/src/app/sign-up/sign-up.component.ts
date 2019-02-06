import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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

	constructor(private fb: FormBuilder) { 
		this.nomControl = this.fb.control('');
		this.secteurControl = this.fb.control('');
		this.nomRepLegControl = this.fb.control('', [Validators.required, Validators.maxLength(25)]);
		this.nbrFondaControl = this.fb.control('', [Validators.required, Validators.maxLength(25)]);
		this.descriptionControl = this.fb.control('');
		this.emailControl = this.fb.control('', 	Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'));

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
	}
}
