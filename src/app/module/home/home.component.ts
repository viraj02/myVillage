import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showFeedback: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    console.log(this.authService.getCurrentUser())
    
  }

  userFeedback(event)  {

    if(this.showFeedback == false && event == false) {
      this.showFeedback = true;
    } else if(this.showFeedback == true && event == true){
      this.showFeedback = false;
    } else {
      this.showFeedback = event;
    }
  }

}
