import { PageList } from './../model/PageList';
import { FormsModule } from '@angular/forms';
import { PaginationQueryResult } from './../model/PaginationQueryResult';
import { Project } from './../model/Project';
import { MainService } from './../service/main.service';
import { User } from './../model/User';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

/**
 * 主頁header & footer component
 */
@Component({
  selector: 'main',
  templateUrl: '../view/main.html',
  styleUrls: ['../css/main.css'],
  providers: [MainService]
})
export class MainComponent implements OnInit, OnDestroy {
  private sub: any;
  private user = new User();

  constructor(private route: ActivatedRoute, private service: MainService) { }

  ngOnInit() {
    // 接收user資料
    this.sub = this.route.params.subscribe(params => {
      this.user = JSON.parse(params['user']);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  // 登出
  onLogOut(): void {
    this.service.logOut(this.user);
  }
}