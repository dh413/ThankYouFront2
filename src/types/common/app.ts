export interface NavType {
  URL: {
    [key: string]: string;
  };
  NAME: {
    [key: string]: string;
  };
}

export interface NavInfo {
  url: string;
  name: string;
  requiresAuth: boolean;
  dropdown?: boolean;
  onClick?: () => void;
}
