import { Router, ActivatedRoute } from '@angular/router';
import { User } from './../model/User';
import { OnInit, OnDestroy, Component } from '@angular/core';

/**
 * 主頁-新增專案component
 */
@Component({
    selector: 'main-newproject2',
    templateUrl: '../view/main-newproject2.html',
    styleUrls: ['../css/main-newproject2.css'],
    providers: []

})
export class MainNewProjectComponent2 implements OnInit, OnDestroy {
    private sub: any;
    private user: User = new User();
    private selectedOption: number = 0;    // 新增建置步驟的select index

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
     * 指定頁次的換頁
     */
    onChangeOption(newSelection) {
        this.selectedOption = newSelection;
    }

    /**
     * 增加一行命令列
     */
    onClickAddCmd() {
        let input = document.createElement("input");
        input.type = "checkbox";
        input.className = "col-md-2";
        let textArea = document.createElement("textarea");
        textArea.className = "col-md-10";
        let p = document.createElement("p");
        p.className = "row";
        p.appendChild(input);
        p.appendChild(textArea);

        document.getElementById("cmdZone").appendChild(p);
    }

    /**
     * 刪除一行命令列
     */
    onClickDeleteCmd() {
        if (document.getElementById("cmdZone").childElementCount > 1) {
            document.getElementById("cmdZone").removeChild(document.getElementById("cmdZone").lastChild);
        }
    }
}