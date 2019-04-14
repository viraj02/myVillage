import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private db: AngularFireDatabase) { }

  randomNumberAuth()  {
    var counts = {};
    for (var i = 0; i < 100000; i++) {
      var c = this.randomInt(0, 4);
      counts[c] = (counts[c] == null ? 0 : counts[c]) + 1;
    }
    console.log(counts)
  }

  randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }

 createAdminMsg(type,header,subject){

  const adminData = this.db.list('adminMsg');
  adminData.set('type',type);
  adminData.set('header',header);
  adminData.set('subject',subject);
  alert('Message Publish Successfully!!!');

  // return this.db.collection('users').add({
  //   name: value.name,
  //   nameToSearch: value.name.toLowerCase(),
  //   surname: value.surname,
  //   age: parseInt(value.age),
  //   avatar: avatar
  // });
}

}
