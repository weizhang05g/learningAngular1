import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import {filter,map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private request: RequestService) { }

  ngOnInit(): void {
    let data = this.request.getData();
    console.log(data);

    // this.request.getCallbackData((value) => {
    //   console.log(value);
    // });

    // let promiseData= this.request.getPromiseData();
    // promiseData.then((data) => {
    //   console.log(data);
    // });

    // var rxjsData = this.request.getRxjsData();
    // rxjsData.subscribe((data) => {
    //   console.log(data);
    // });

    var rxjsIntervalData = this.request.getRxjsIntervalData();
    rxjsIntervalData
    .pipe(
      filter((data) => data%2==0),
      map((data) => {
        return data * data;
      })
    )
    .subscribe((data) => {
      console.log(data);
    })
    
  }


}
