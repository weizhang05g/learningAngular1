import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  content = "我是一个HTML标签";
  ihtml= "<h2>H2标签<h2>";
  items = ['1111','2222','3333'];
  constructor() { }

  ngOnInit(): void {
  }

}
