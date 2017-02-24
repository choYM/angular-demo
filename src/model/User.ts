import { Manage } from './Manage';

/**
 * USER(用戶管理-主表)
 */
export class User {
  /**
   * 用戶編號
   */
  userId: string;

  /**
   * 用戶名稱
   */
  userName: string;

  /**
   * 密碼
   */
  password: string;

  /**
   * 狀態（Y-有效；N-無效）
   */
  status: string;

  /**
   * 角色 (1-管理:2-一般)
   */
  role: string;

  /**
   * E-MAIL
   */
  email: string;

  /**
   * 管理欄位
   */
  manage: Manage;
}