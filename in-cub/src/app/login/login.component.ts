import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user/user.service';
import { User } from '../user/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
	loginControl: FormControl;
  passwordControl: FormControl;
  buttonSubmit: string;
  buttonOtherPage: string;

	constructor(private userService: UserService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) { 
		this.loginControl = this.fb.control('', [Validators.required, Validators.maxLength(20)]);
		this.passwordControl = this.fb.control('', [Validators.required, Validators.maxLength(20)]);

		this.userForm = this.fb.group({
			login: this.loginControl,
			password: this.passwordControl
    });
    
    this.buttonSubmit = this.route.snapshot.data[0]['state'] == "login" ? "Connexion" : "Inscription";
    this.buttonOtherPage = this.route.snapshot.data[0]['state'] == "login" ? "Inscription" : "Connexion";
	}

	ngOnInit() {
  }
  
  changePage(){
    if(this.buttonOtherPage == "Inscription"){
      this.router.navigate(['/register']);
    }
    if (this.buttonOtherPage == "Connexion"){
      this.router.navigate(['/login']);
    }
  }

	submitUser(){
    if(this.buttonSubmit == "Inscription"){
      this.addUser();
    }
    if (this.buttonSubmit == "Connexion"){
      this.loginUser();
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

  loginUser(){
    this.userService.loginUser(this.userForm.value.login, this.userForm.value.password);
  }
  
}