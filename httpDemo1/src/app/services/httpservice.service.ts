import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor() { }

  getAxiosData(api) {

    return new Observable((observer) => {
      axios.get(api)
      .then(function (response) {
        // handle success
        // console.log(response);
        observer.next(response);
      });
    })


  }
}
