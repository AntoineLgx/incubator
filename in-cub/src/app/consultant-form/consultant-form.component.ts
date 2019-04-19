import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ConsultantService } from '../consultant/consultant.service';
import { Consultant } from '../consultant/Consultant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultant-form',
  templateUrl: './consultant-form.component.html',
  styleUrls: ['./consultant-form.component.css']
})
export class ConsultantFormComponent implements OnInit {

  consultantForm: FormGroup;
	nomControl: FormControl;
	prenomControl: FormControl;
	descriptionControl: FormControl;

	constructor(private consultantService: ConsultantService, private fb: FormBuilder, private router: Router) { 
		this.nomControl = this.fb.control('', [Validators.required, Validators.maxLength(20)]);
		this.prenomControl = this.fb.control('', [Validators.required, Validators.maxLength(20)]);
		this.descriptionControl = this.fb.control('', [Validators.required, Validators.maxLength(250)]);

		this.consultantForm = this.fb.group({
			nom: this.nomControl,
			prenom: this.prenomControl,
			desc: this.descriptionControl
		});
	}

	ngOnInit() {
	}

	addConsultant(){
		const consultant : Consultant = {
			_id: this.consultantService.genId(),
			nom: this.consultantForm.value.nom,
			prenom: this.consultantForm.value.prenom,
			description: this.consultantForm.value.desc
		  };
			this.consultantService.addConsultant(consultant);
			this.consultantForm.reset();
			this.router.navigate(['/consultants']);
	}
}
