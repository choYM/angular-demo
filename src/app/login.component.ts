import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions, RequestMethod, Request, Response } from '@angular/http';
import { Router, NavigationExtras } from '@angular/router';
import { LoginService } from './../service/login.service';
import { User } from './../model/User';
import { Component } from '@angular/core';
import 'rxjs/add/operator/toPromise';

/**
 * 登入頁面component
 */
@Component({
  selector: 'login',
  templateUrl: '../view/login.html',
  styleUrls: ['../css/login.css'],
  providers: [LoginService]
})
export class LoginComponent {
  title = '部屬中心登入';
  user: User = new User();
  isRememberMe: Boolean = false;
  isHidden: Boolean = true;
  result: Object;

  constructor(private loginService: LoginService, private router: Router,
    private http: Http) { }

  public onClickLogin(): void {
    // 1. 執行登入
    if (this.loginService.login(this.user)) {
      console.log("登入成功");
      // 轉址: 進入主頁面(登入資訊一併傳到主頁面)
      this.router.navigate(['/main', JSON.stringify(this.user)]);
    } else {
      console.log("登入失敗");
      this.isHidden = false;
    }

    // 2. 執行記住我
  }

  public httpTest() {
    this.loginService.doQuery().subscribe(
      data => { this.result = JSON.stringify(data) },
      err => console.log(err),
      () => console.log('done')
    );

    // let url = "http://10.40.41.174/DWGateway/restful/Base/IPostSettingService/getBasPostcodeList/";
    // let body = "{params: \"{}\", page: \"1\", pageRows: \"5\"}";
    // let header = new Headers();
    // header.append("Content-Type", "application/json;charset=utf-8");


    // this.http.post(url, body, { headers: header })
    //   .map((res: Response) => res.json())
    //   .subscribe(
    //   data => this.result = JSON.stringify(data),
    //   err => console.error(err),
    //   () => console.log('done')
    //   )
  }
}