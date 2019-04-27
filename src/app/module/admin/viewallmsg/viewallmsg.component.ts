import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-viewallmsg',
  templateUrl: './viewallmsg.component.html',
  styleUrls: ['./viewallmsg.component.css']
})
export class ViewallmsgComponent implements OnInit {

  adminMsg: any = [];
  today: Date;
  minDate: any;

  constructor(db: AngularFireDatabase) { 

    var adMsg: any = {
      expdate: "",
      header: "",
      subject: "",
      type: ""
    }


    // this.policyService.getPolicies().subscribe(data => {
    //   this.policies = data.map(e => {
    //     return {
    //       id: e.payload.doc.id,
    //       ...e.payload.doc.data()
    //     } as Policy;
    //   })
    // });

    db.list('adminMsg').valueChanges().subscribe(
      e =>{
        
          // for(let data in e) {
           
            // this.adminMsg.push({ "expdate": e[0], "header": e[1], "subject": e[2], "type": e[3] });
          // }

          adMsg.expdate = e[0];
          adMsg.header = e[1];
          adMsg.id = e[2];
          adMsg.subject = e[3];
          adMsg.type = e[4];

          this.adminMsg.push(adMsg);

          // this.adminMsg = adMsg;
        
        // this.adminMsg.header = e[0];
        // this.adminMsg.subject = e[1];
      }
    )
    
    // setInterval(() => {
    //   console.log(this.adminMsg);
    // },2000)
  }


  ngOnInit() {
    
  }

  deleteMsg(data) {
    console.log(data)
  }

  deleteAfterExpDate() {
    this.today = new Date();
    this.minDate = formatDate(this.today,'yyyy-MM-dd','en-US', '+0530');

    /**
     * 1. For Loop To iterate Array
     * 2. Check current date with array date
     * 3. If current date appears in array delete that data else don't delete
     */

    if(this.minDate == this.adminMsg[0].expdate) {
      alert("Same");
    }

  }

}
 