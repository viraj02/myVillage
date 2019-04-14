import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popupmodel',
  templateUrl: './popupmodel.component.html',
  styleUrls: ['./popupmodel.component.css']
})
export class PopupmodelComponent implements OnInit {

  display: any = "block";
  constructor() { }

  ngOnInit() {
  }

  onCloseHandled() {
    this.display = "none";
  }

}
