import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productcontent',
  templateUrl: './productcontent.component.html',
  styleUrls: ['./productcontent.component.scss']
})
export class ProductcontentComponent implements OnInit {

  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe((data:any) => {
      console.log(data);
    })
  }

}
