import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user/user.service';
import { User } from '../user/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
	loginControl: FormControl;
  passwordControl: FormControl;
  textButton: string;

	constructor(private userService: UserService, private fb: FormBuilder, private route: ActivatedRoute) { 
		this.loginControl = this.fb.control('', [Validators.required, Validators.maxLength(20)]);
		this.passwordControl = this.fb.control('', [Validators.required, Validators.maxLength(20)]);

		this.userForm = this.fb.group({
			login: this.loginControl,
			password: this.passwordControl
    });
    
    this.textButton = this.route.snapshot.data[0]['state'];
	}

	ngOnInit() {
	}

	submitUser(){
    if(this.textButton == "register"){
      this.registerUser();
    }
    else if (this.textButton == "login"){
      this.addUser();
    }
  }

  addUser(){
    const user : User = {
      id: null,
      login: this.userForm.value.login,
      password: this.userForm.value.password,
    };
    this.userService.addUser(user);
  }

  registerUser(){
    this.userService.registerUser(this.userForm.value.login, this.userForm.value.password);
  }
  
}