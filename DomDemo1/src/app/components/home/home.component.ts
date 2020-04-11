import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('mybox') mybox:any;
  @ViewChild('header') header:any;
  constructor() { }

  ngOnInit(): void {
    var oBox:any = document.getElementById('box');
    console.log(oBox.innerHTML);
    oBox.style.color = 'red';
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this.mybox.nativeElement);
    this.mybox.nativeElement.style.width='200px';
    this.mybox.nativeElement.style.height='100px';
    this.mybox.nativeElement.style.background = 'green';
    console.log(this.mybox.nativeElement.innerHTML);
    console.log(this.header);
    this.header.run();
  }
}
