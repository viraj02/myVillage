import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { ApiglobalnameService } from 'src/app/services/apiglobalname.service';

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
    email: any = "";

    adminMessage: any = {
      header: "",
      subject: ""
    };
  conf: boolean = false;
    
    constructor(private formBuilder: FormBuilder, private router: Router, 
      private authService: AuthService, 
      db: AngularFireDatabase, private _httpName: ApiglobalnameService) {
      db.list('adminMsg').valueChanges().subscribe(
        e =>{
          this.adminMessage.header = e[0];
          this.adminMessage.subject = e[1];
        }
      );
     }

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

    /** Enter Value to Reset Email (Password) Textfield  */

    setResetEmail() {
      this.email = this.loginForm.value.email;
    }

    /** Reset Password */
    resetPassword() {
      this.restPassHidden = !this.restPassHidden;
     
      // this.authService.sendPasswordResetEmail();
    }

    sendResetEmail() { 

        this.conf = confirm(`Please verify Email ID ${this.loginForm.value.email} is correct!`);
        if(this.conf) {
          this.authService.sendPasswordResetEmail(this.loginForm.value.email);
        }
    }
}