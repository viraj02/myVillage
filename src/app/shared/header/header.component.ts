import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  show: boolean = false;

  @Output() showfeedback = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
    if(this.router.url == '/home') {
      this.show = true;
    }
  }

  userComment() {
    this.showfeedback.emit(this.show);
    this.show = !this.show;
  }

}
