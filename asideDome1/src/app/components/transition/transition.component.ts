import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.scss']
})
export class TransitionComponent implements OnInit {
  @ViewChild('aside') aside:any;
  asideIsOpen = false;
  constructor() { }

  ngOnInit(): void {
  }

  open() {
    // var aside:any =document.getElementById('aside');
    // if(!this.asideIsOpen){ 
    //   aside.style.transform = "translate(0,0)";
    //   this.asideIsOpen = !this.asideIsOpen;
    // }else {
    //   aside.style.transform = "translate(100%,0)";
    //   this.asideIsOpen = !this.asideIsOpen;
    // }

    if(!this.asideIsOpen){
      this.aside.nativeElement.style.transform = "translate(0,0)";
      this.asideIsOpen = !this.asideIsOpen;
    }else {
      this.aside.nativeElement.style.transform = "translate(100%,0)";
      this.asideIsOpen = !this.asideIsOpen;
    }

  }
}
