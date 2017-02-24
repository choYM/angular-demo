import { Manage } from './Manage';

/**
 * PROJCET(專案)-主表
 */
export class Project {
    /**
     * 專案編號
     */
    projectCode: string;

    /**
     * 專案名稱
     */
    projectName: string;

    /**
     * 專案描述
     */
    description: string;

    /**
     * 狀態（Y-有效；N-無效）
     */
    status: string;

    /**
     * 管理欄位
     */
    manage: Manage;

}