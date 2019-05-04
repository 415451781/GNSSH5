import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-pay-component',
  templateUrl: './pay-component.component.html',
  styleUrls: ['./pay-component.component.css']
})

export class PayComponentComponent implements OnInit {


  constructor(private http:HttpClient) {
  }

  payweixin() {
    console.log('payweinxin');
    return this.http.post( 'http://localhost:3000/v1/ali/pay/notify',{})
    .subscribe(msg => {
    });

   }

  payali() {
    console.log('payali');
    return this.http.post( 'https://www.zszz.net.cn/v1/ali/pay/notify',{})
    .subscribe(msg => {
    });
   }


  ngOnInit() {
  }

}
