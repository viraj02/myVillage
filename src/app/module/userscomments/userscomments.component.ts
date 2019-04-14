import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-userscomments',
  templateUrl: './userscomments.component.html',
  styleUrls: ['./userscomments.component.css']
})
export class UserscommentsComponent implements OnInit {

  @Output() closePop = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.closePop.emit(false);
  }

}
