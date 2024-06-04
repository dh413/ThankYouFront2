export const getBasePath = (path: string): string => {
  return path.split("/").slice(0, 2).join("/");
};
