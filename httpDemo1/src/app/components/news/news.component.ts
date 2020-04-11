import { Component, OnInit } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { HttpserviceService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public list:any[] = [];
  constructor(public http:HttpClient, public httpService: HttpserviceService) { }

  ngOnInit(): void {
  }

  getData() {
    let api= "http://a.itying.com/api/productlist";
    this.http.get(api).subscribe((response:any) => {
      console.log(response);
      this.list = response.result;
    })
  }

  getAxiosData() {
    let api= "http://a.itying.com/api/productlist";
    this.httpService.getAxiosData(api).subscribe((res) => {
      console.log(res);
    })
  }
}
