import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    submitted = false;
    confPassFlag: boolean = true;
    passText: any = "";
    restPassHidden: boolean = true;
    errorMessage: any = "";

    constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        
        this.authService.signIn(this.loginForm.value.email,this.loginForm.value.password);

    }

    /** Reset Password */
    resetPassword() {
      this.restPassHidden = !this.restPassHidden;
     
      // this.authService.sendPasswordResetEmail();
    }

    sendResetEmail() {
      this.authService.sendPasswordResetEmail('');
    }

}