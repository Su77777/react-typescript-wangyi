interface ILyric {
  time: number
  text: string
}
const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
function formatLyric(lyricString: any) {
  const lineStrings: string[] = lyricString.split('\n')
  const lyrics: ILyric[] = []
  for (const line of lineStrings) {
    const result = timeRegExp.exec(line)
    if (!result) continue
    // 把分钟转为 毫秒
    const time1 = Number(result[1]) * 60 * 1000
    // 把秒转为 毫秒
    const time2 = Number(result[2]) * 1000
    // 判断毫秒length位数,如果是3位则不动,如果是2位则乘以10
    const time3 = result[3].length === 3 ? Number(result[3]) : Number(result[3]) * 10
    const time = time1 + time2 + time3
    const text = line.replace(timeRegExp, '').trim()
    lyrics.push({ time, text })
  }
  return lyrics
}

export default formatLyric
