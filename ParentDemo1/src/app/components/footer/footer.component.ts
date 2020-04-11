import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Output() private  outer = new EventEmitter();
  public msg="footer msg";
  constructor() { }

  ngOnInit(): void {
  }

  run() {
    alert('footer component run()');
  }

  sendParent() {
    this.outer.emit('我是子组件的数据');
  }
}
