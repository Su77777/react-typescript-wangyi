function formatImageUrl(url: string, width: string, height = width): string {
  return url + `?param=${width + 'y' + height}`
}
export default formatImageUrl
