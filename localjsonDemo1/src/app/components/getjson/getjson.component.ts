import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {filter,map}from 'rxjs/operators';
@Component({
  selector: 'app-getjson',
  templateUrl: './getjson.component.html',
  styleUrls: ['./getjson.component.scss']
})
export class GetjsonComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let appjson:any =this.http.get("assets/tmp/app-data.json")
    // .pipe(
    //   map((res:Response) => res.json())
    // );
    .subscribe((data:any) => {
      console.log(data);
      console.log(data.app.name)
    })
    // console.log(appjson);
  }

}
