export interface PageResult {
  pageIndex: number;
  pageSize: number;
  sort: number;
  totalCount: number;
}

export interface UserCookieConfig {
  expires: number;
  secure: boolean;
  sameSite: string;
  path: string;
}
