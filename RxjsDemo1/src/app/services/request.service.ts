import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }

  getData() {
    return 'this is service data';
  }
  
  getCallbackData(cb) {
    setTimeout(()=>{
      var username='张三';
      cb(username);
    },1000);
  }

  getPromiseData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        var username = '张三---Promise';
        resolve(username);
       },3000 );
    });
  }

  getRxjsData() {
    return new Observable<any>((observer) => {
      setTimeout(() => {
        var username= '张三---Rxjs';
        observer.next(username);
      },4000);
    })
  }

  getRxjsIntervalData() {
    let count = 0;
    return new Observable<any>((observer) => {
      setInterval(() => {
        count++;
        observer.next(count);
      },2000);
    })
  }
}
