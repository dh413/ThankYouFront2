export interface NavType {
  URL: {
    [key: string]: string;
  };
  NAME: {
    [key: string]: string;
  };
}

export interface NavList {
  url: string;
  name: string;
  requiresAuth: boolean;
  dropdown?: boolean;
  onClick?: string;
}
