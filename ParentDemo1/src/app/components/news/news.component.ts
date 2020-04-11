import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
@ViewChild('footer') footer:any;
  constructor() { }

  ngOnInit(): void {
  }

  getChildMsg() {
    alert(this.footer.msg);
  }

  getChildRun() {
    this.footer.run();
  }

  run(e) {
    console.log(e);
    alert('我是父组件的run方法');
  }
}
