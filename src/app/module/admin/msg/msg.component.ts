import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.css']
})
export class MsgComponent implements OnInit {

  message: any = "";
  header: any = "";
  isBtnHidden: boolean = true;
  wordLength: number = 10;
  selectedType: string;

  constructor(private adminService: AdminService) {
   }

  ngOnInit() {
  }

  logOut()  {
    this.adminService.randomNumberAuth();
  }

  btnCheck() {

    this.wordLength = 10 - this.message.trim('').length;

    this.wordLength = this.wordLength <= 0 ? 0 : this.wordLength;

    if(this.message.trim().length >= 10) {
      this.isBtnHidden = false;
    } else 
    this.isBtnHidden = true;
  }

  publishMsg() {
    this.adminService.createAdminMsg(this.selectedType,this.header,this.message);
  }

  typeSelect() {
    // console.log(this.selectedType);
  }

}
