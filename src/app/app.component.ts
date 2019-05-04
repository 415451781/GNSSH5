import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import{WeixinJSBridge}from '../../node_modules/weixin-js-sdk/index.js'
// "./node_modules/weixin-js-sdk/index.original.js",

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Frist Angular App';

  // var wx = require('weixin-js-sdk');
  // console.log(wx);

  // public WeixinJSBridge: any;
  // constructor(private http:HttpClient){
  //
  //     if (this.WeixinJSBridge) {
  //         console.log("微信库加载成功");
  //       }
  //       else {
  //         console.log(this.WeixinJSBridge);
  //         console.log("必须在微信中打开，进行支付");
  //       }
  //
  // }

  // payWeiXin(): void{
  //     alert("payWeinXin");
  // }
  // payAli(): void{
  //     alert("payAli");
  // }

}
