import * as EmailValidator from 'email-validator';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from './../model/User';
import { OnInit, OnDestroy, Component } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';

/**
 * 主頁-新增專案component
 */
@Component({
    selector: 'main-newproject3',
    templateUrl: '../view/main-newproject3.html',
    styleUrls: ['../css/main-newproject3.css'],
    providers: []
})
export class MainNewProjectComponent3 implements OnInit, OnDestroy {
    private sub: any;
    private user: User = new User();
    private emails: Array<String> = new Array<String>();
    private validators = [this.isEmail];    // email驗證器
    private errorMessages = {
        'wrongEmailFormat': 'Wrong Email Format!!'
    };

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        // 接收user資料
        this.sub = this.route.parent.params.subscribe(params => {
            this.user = JSON.parse(params['user']);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    /**
     * 檢查輸入是否為email格式
     */
    private isEmail(control: FormControl) {
        if (!EmailValidator.validate(control.value)) {
            return {
                'wrongEmailFormat': true
            };
        }

        return null;
    }

    /**
     * 增加email
     */
    public onEmailAdd(email: String) {
        console.log(email);
        this.emails.push(email);
    }
}