import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-pop-model',
  templateUrl: './pop-model.component.html',
  styleUrls: ['./pop-model.component.css']
})
export class PopModelComponent implements OnInit {

  show: boolean = false;

  constructor() {}

  ngOnInit() {
  }
 
  // openModal(template: TemplateRef<any>) {
  //   console.log(template)
  //   this.modalRef = this.modalService.show(template, this.config);
  // }
}
