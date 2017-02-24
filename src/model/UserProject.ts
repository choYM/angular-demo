import { Manage } from './Manage';

/**
 * USER_PROJECT(用戶的專案權限)-身
 */
export class UserProject {
    /**
     * 用戶編號
     */
    userId: string;

    /**
     * 專案編號
     */
    projectCode: string;

    /**
     * 管理欄位
     */
    manage: Manage;

    /**
     * 隨機產生n個UserProject資料(模仿從資料庫取資料...)
     */
    public static queryUserProject(n: number): Array<UserProject> {
        let userProjects: Array<UserProject> = new Array<UserProject>();
        for (var i = 0; i < n; i++) {
            userProjects[i] = {
                userId: "aaa",
                projectCode: "project_" + (i+1),
                manage: {
                    createDate: null,
                    creator: null,
                    modiDate: new Date(),
                    modiby: null,
                    flag: null
                }
            }
        }
        return userProjects;
    }
}