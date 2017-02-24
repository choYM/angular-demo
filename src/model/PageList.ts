/**
 * 頁碼select元件的model
 */
export class PageList {
    public selectedPage: number;
    public list: Array<number>;

    constructor(n: number) {
        this.selectedPage = 1;

        this.list = new Array<number>();
        for(var i=0; i<n; i++) {
            this.list[i] = i+1;
        }
    }
}