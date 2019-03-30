import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PopModelComponent } from '../../pop-model/pop-model.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  confPassFlag: boolean = true;
  popup: boolean = false;

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

        // if(localStorage.getItem('email')== this.loginForm.value.email && localStorage.getItem('password') == this.loginForm.value.password) {
        //   alert('success!!');
        //   this.router.navigateByUrl('/home');
        // }

    }

    /** Reset Password */
    resetPassword() {
      this.popup = false;
      // this.authService.sendPasswordResetEmail();
    }

}
