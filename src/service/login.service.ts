import { Observable } from 'rxjs/Observable';
import { User } from './../model/User';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod, Request, Response } from '@angular/http';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {
    constructor (private http: Http) {}

    // 進資料庫驗證使用者..
    public login(user: User): Boolean {
        return user.userId == 'aaa' && user.password == 'aaa';
    }

    public doQuery(): Observable<any> {
        let url = "http://10.40.41.174/DWGateway/restful/Base/IPostSettingService/getBasPostcodeList/";
        let body = "{params: \"{}\", page: \"1\", pageRows: \"5\"}";
        let header = new Headers();
        header.append("Content-Type", "application/json;charset=utf-8");

        let result = this.http.post(url, body, { headers: header })
            .map(res => res.json().response)
            .catch(err => Promise.reject(err.message || err));           

        return result;
    }
}