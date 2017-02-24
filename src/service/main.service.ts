import { PaginationQueryResult } from './../model/PaginationQueryResult';
import { UserProject } from './../model/UserProject';
import { Project } from './../model/Project';
import { User } from './../model/User';
import { Injectable } from '@angular/core';

@Injectable()
export class MainService {
    // 登出..
    public logOut(user: User): void {
        user = null;
    }
}