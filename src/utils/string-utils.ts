export const getPathString = (path: string[] | undefined): string => {
  return !path?.length ? '/' : `/${path.join('/')}`
}

export const ensureNoTrailingSlash = (path: string): string => {
  return path.endsWith('/') ? path.slice(0, -1) : path
}
