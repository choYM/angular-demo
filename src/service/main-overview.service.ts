import { PaginationQueryResult } from './../model/PaginationQueryResult';
import { UserProject } from './../model/UserProject';
import { Project } from './../model/Project';
import { User } from './../model/User';
import { Injectable } from '@angular/core';

@Injectable()
export class MainOverviewService {
    /**
     * 取得用戶專案權限(USER_PROJECT)
     */
    public getUserProject(user: User, page: number, pageRows: number): PaginationQueryResult {
        // query UserProject data
        let allUserProjects: Array<UserProject> = UserProject.queryUserProject(21);

        // 1. 取得資料總筆數(共假設21筆...)
        let totalRow = allUserProjects.length;

        // 取得指定start到start+pageRows區間的資料 (SELECT * FROM USER_PROJECT LIMIT start, pageRows)    
        // 因為後端還沒好 用隨機產生資料代替...
        let start = pageRows * (page - 1); // 資料起始index
        let userProjects: Array<UserProject> = allUserProjects.slice(start, start + pageRows);

        let paginationQueryResult = new PaginationQueryResult(pageRows, totalRow);
        paginationQueryResult.setCurrentPage(page, userProjects);

        return paginationQueryResult;
    }

    public getProjects(user: User, page: number, pageRows: number): PaginationQueryResult {
        // 取得用戶專案權限USER_PROJECT
        let userProjectsQueryResult = this.getUserProject(user, page, pageRows);

        // 根據用戶專案權限 取得專案PROJECT
        let projects: Array<Project> = new Array<Project>();
        for (var i = 0; i < userProjectsQueryResult.data.length; i++) {
            projects[i] = {
                projectCode: userProjectsQueryResult.data[i].projectCode,
                projectName: "我是專案" + userProjectsQueryResult.data[i].projectCode,
                description: "我是描述" + userProjectsQueryResult.data[i].projectCode,
                status: (Math.floor(Math.random() * 2) + 1) % 2 == 0 ? "Y" : "N",
                manage: userProjectsQueryResult.data[i].manage
            }
        }

        let paginationQueryResult = new PaginationQueryResult(pageRows, userProjectsQueryResult.rowCount);
        paginationQueryResult.setCurrentPage(page, projects);

        return paginationQueryResult;
    }
}