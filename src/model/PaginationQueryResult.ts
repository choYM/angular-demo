/**
 * 分頁查詢
 */
export class PaginationQueryResult {
    /**
     * 資料總筆數
     */
    rowCount: number;

    /**
     * 總頁數
     */
    pageCount: number;

    /**
     * 每頁資料筆數
     */
    pageSize: number;

    /**
     * 當前頁次
     */
    currentPage: number = 1;

    /**
     * 當前頁面資料
     */
    data: Array<any>;

    constructor(pageSize: number, rowCount: number) {
        this.pageSize = pageSize;
        this.rowCount = rowCount;
        this.pageCount = rowCount == 0 ? 0 : Math.floor(((rowCount - 1) / pageSize) + 1);
        this.currentPage = rowCount > 0 ? 1 : 0;
    }

    /**
     * 設定當前頁面
     */
    public setCurrentPage(currentPage: number, data: Array<any>): void {
        this.currentPage = currentPage;
        this.data = data;
    }
}