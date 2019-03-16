import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fireDatabase: Array<any> = [];

  constructor(db: AngularFireDatabase) {
    // db.list('/test/')
    db.list('test').valueChanges().subscribe(
      e =>{ this.fireDatabase = e;
         console.log(e) }
    )
  }

}
