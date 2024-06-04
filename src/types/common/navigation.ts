export interface NavgationType {
  URL: {
    [key: string]: string;
  };
  NAME: {
    [key: string]: string;
  };
}

export interface NavgationInfo {
  url: string;
  name: string;
  requiresAuth?: boolean;
  dropdown?: boolean;
  onClick?: () => void;
}
