export const baseUrl = import.meta.env.BASE_URL

export function img(path) {
  return baseUrl.replace(/\/$/, '') + '/' + path.replace(/^\//, '')
}
