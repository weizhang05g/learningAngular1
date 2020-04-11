import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newcontent',
  templateUrl: './newcontent.component.html',
  styleUrls: ['./newcontent.component.scss']
})
export class NewcontentComponent implements OnInit {

  constructor(public router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe((data:any) => {
      console.log(data);
    })
  }

}
