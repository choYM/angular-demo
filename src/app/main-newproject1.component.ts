import { Router, ActivatedRoute } from '@angular/router';
import { User } from './../model/User';
import { OnInit, OnDestroy, Component } from '@angular/core';

/**
 * 主頁-新增專案component
 */
@Component({
    selector: 'main-newproject1',
    templateUrl: '../view/main-newproject1.html',
    styleUrls: ['../css/main-newproject1.css'],
    providers: []

})
export class MainNewProjectComponent1 implements OnInit, OnDestroy {
    private sub: any;
    private user: User = new User();
    
    constructor(private route: ActivatedRoute){}
    
    ngOnInit() {
        // 接收user資料
        this.sub = this.route.parent.params.subscribe(params => {
            this.user = JSON.parse(params['user']);
        });
    }
    
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}