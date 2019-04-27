import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {map} from "rxjs/operators";
import { auth } from 'firebase';
import {Router} from "@angular/router";
import { BehaviorSubject } from 'rxjs';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { AngularFireDatabase } from 'angularfire2/database';
// import firebase from 'firebase/app'

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  subject = new BehaviorSubject('First');
  data = this.subject.asObservable();

  error: string = "";
  emailSent = false;

  adminUser = {
    adminEmail: null,
    adminPass: null
  };

  //user instance
  user = this.afAuth.authState.pipe(
    map(authState =>{
      if(!authState){
        return null;
      }else{
        return authState.email;
      }
    })
  );

  constructor(private afAuth: AngularFireAuth, private router: Router,db: AngularFireDatabase) { 
    db.list('admin').valueChanges().subscribe(
      e =>{ this.adminUser.adminEmail = e[0];
            this.adminUser.adminPass = e[1];
      }
    )
  }
  
  //create the account
  logIn(email:string, password:string){

     this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user)=>{

        

        // email verification
        this.afAuth.user.subscribe( x => {
          if(x){
            x.sendEmailVerification()
            .then(()=>{
              
              console.log("Email verification sent");
            })
            .catch(err => {
              console.log("Error: ", err);
            })
          
          }
        })


        console.log(user.user.email)
        this.error = "";
        this.router.navigate(["/login"]);
      })
      .catch((err)=>{

        console.log("An error ocurred");
       this.error = err.message;
      })
  }


  //logout function
  logOut(){
    this.afAuth.auth.signOut()
    .then(()=>{
      console.log("user signed Out successfully");
      this.router.navigate(["/"]);
    }).catch((err) => {
      console.log(err);
    })
  }


  //sign in with email and password
  signIn(email:string, password:string){
      /**
     * For Admin
     */
    if(email == this.adminUser.adminEmail && password == this.adminUser.adminPass) {
      this.router.navigateByUrl("/adminMsg");
    } 
    else {
     
      this.afAuth.user.subscribe( x => {
        if(!x.emailVerified){
          alert(`You are not verified user. Please check you mail ${email}`);
          return;
        } else {
          this.afAuth.auth.signInWithEmailAndPassword(email, password)
          .then((user)=>{
            console.log(user.user.email);
            this.error = "";
            this.router.navigate(["/home"]);
          })
          .catch((err)=>{
            console.log("An error ocurred");
            // this.error = err.message;
            alert(err.message);
          })
        }
      });
  }
  }

  //google sign in
  signInWithProvider(){
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
    .then(()=>{
      this.router.navigate(["/private"]);
    });

  }

  //sends the email to verify the user
  async sendEmailLink(email: string){
    const actionCodeSettings = {
      url: "http://localhost:4200/passwordless",
      handleCodeInApp: true
    };

    try{
      await this.afAuth.auth.sendSignInLinkToEmail(
        email,
        actionCodeSettings
      );
        console.log("Sent Email verification")
       //set the email in localStorage
       window.localStorage.setItem('signInEmail', email);
        this.emailSent = true;
    }catch(err){
        this.error = err.message;
    }

  }

  async confirmSignIn(url: string) {
    try{
      if(this.afAuth.auth.isSignInWithEmailLink(url)){
        let email = window.localStorage.getItem("signInEmail");

        if(!email){
          email = window.prompt("Confirm Your Email Please");
        }
        const result = await this.afAuth.auth.signInWithEmailLink(email, url);
        if(result){
          this.router.navigate(["/private"]);
          //clean localStorage
          window.localStorage.removeItem("signInEmail");
        } else{
          console.log("an error ocurred");
        }


      }
    }catch(err){
       this.error = err.message;
    }
  }

  async sendPasswordResetEmail(passwordResetEmail: string) {
    try {
      return await this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);
    }
    catch(err) {
      this.subject.next("Please check Email ID");
    }
  }

  getCurrentUser()  {
    console.log(firebase.auth().currentUser);
  }

}