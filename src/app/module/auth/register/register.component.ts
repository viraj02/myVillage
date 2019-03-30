import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  registerForm: FormGroup;
  submitted = false;
  confPassFlag: boolean = true;
  errorMessage: string = "";
  successMessage: string = "";

    constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confpassword: ['', [Validators.required]]
        });
    }

   

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    cofPassword() {
      if (this.registerForm.value.confpassword == this.registerForm.value.password) {
          this.confPassFlag = false;
      } else if (this.registerForm.value.confpassword != this.registerForm.value.password) {
        this.confPassFlag = true;
      }
    }

    onSubmit() {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        if(this.confPassFlag == false) {
          localStorage.setItem('email',this.registerForm.value.email);
          localStorage.setItem('password',this.registerForm.value.password);
          this.errorMessage = this.authService.error;
          // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
          this.tryRegister(this.registerForm.value);
        }

       console.log(this.confPassFlag);
    }

    tryRegister(value){
      // this.authService.doRegister(value)
      // .then(res => {
      //   console.log(res);
      //   this.errorMessage = "";
      //   this.successMessage = "Your account has been created";
      // }, err => {
      //   console.log(err);
      //   this.errorMessage = err.message;
      //   this.successMessage = "";
      // })
      
      this.authService.logIn(this.registerForm.value.email,this.registerForm.value.password);
      

    }
}


