import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  doRegister(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res);
        this.sendEmailVerification();
      }, err => reject(err))
    })
  }

  async sendEmailVerification() {
    await this.afAuth.auth.currentUser.sendEmailVerification()
   // this.router.navigate(['admin/verify-email']);
}

async sendPasswordResetEmail(passwordResetEmail: string) {
  return await this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);
}

async logout(){
  await this.afAuth.auth.signOut();
  localStorage.removeItem('user');
  //this.router.navigate(['admin/login']);
}

get isLoggedIn(): boolean {
  const  user  =  JSON.parse(localStorage.getItem('user'));
  return  user  !==  null;
}

}
