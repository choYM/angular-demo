import { MainOverviewService } from './../service/main-overview.service';
import { PageList } from './../model/PageList';
import { PaginationQueryResult } from './../model/PaginationQueryResult';
import { Project } from './../model/Project';
import { User } from './../model/User';
import { Router, ActivatedRoute } from '@angular/router';
import { OnInit, Component, OnDestroy } from '@angular/core';

/**
 * 主頁-專案總覽conpoment
 */
@Component({
    selector: 'main-overview',
    templateUrl: '../view/main-overview.html',
    styleUrls: ['../css/main-overview.css'],
    providers: [MainOverviewService]

})
export class MainOverviewComponent implements OnInit, OnDestroy {
    private sub: any;
    private user: User = new User();
    private projects: Project[];
    private paginationQueryResult: PaginationQueryResult;
    private pageList: PageList;        // 頁數元件model
    private pageSize: number = 8;      // 每頁資料筆數

    constructor(private route: ActivatedRoute, private service: MainOverviewService) { }

    ngOnInit() {
        // 接收user資料
        this.sub = this.route.parent.params.subscribe(params => {
            this.user = JSON.parse(params['user']);
        });

        // 取得user的所有專案
        this.paginationQueryResult = this.service.getProjects(this.user, 1, this.pageSize);

        // 初始化頁碼model
        this.pageList = new PageList(this.paginationQueryResult.pageCount);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    /**
     * 第一頁
     */
    onClickFirstPage(): void {
        this.pageList.selectedPage = 1;
        this.paginationQueryResult = this.service.getProjects(this.user, this.pageList.selectedPage, this.pageSize);
    }

    /**
     * 上一頁
     */
    onClickPreviousPage(): void {
        this.pageList.selectedPage -= 1;
        this.paginationQueryResult = this.service.getProjects(this.user, this.pageList.selectedPage, this.pageSize);
    }

    /**
     * 下一頁
     */
    onClickNextPage(): void {
        this.pageList.selectedPage += 1;
        this.paginationQueryResult = this.service.getProjects(this.user, this.pageList.selectedPage, this.pageSize);
    }

    /**
     * 最後一頁
     */
    onClickLastPage(): void {
        this.pageList.selectedPage = this.pageList.list[this.pageList.list.length - 1];
        this.paginationQueryResult = this.service.getProjects(this.user, this.pageList.selectedPage, this.pageSize);
    }

    /**
     * 指定頁次的換頁
     */
    onChangePage(newPage) {
        this.pageList.selectedPage = newPage;
        this.paginationQueryResult = this.service.getProjects(this.user, this.pageList.selectedPage, 8);
    }
}