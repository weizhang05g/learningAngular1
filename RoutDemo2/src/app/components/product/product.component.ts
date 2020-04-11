import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  goNewsContent() {
    let queryParams={
      queryParams:{'aid':123}
    }
    this.router.navigate(['/newscontent'],queryParams)
  }
}
