// 歌曲总时间格式化
function formatDuration(duration: number) {
  const newDuration = duration / 1000
  const minute = Math.floor(newDuration / 60)
  const second = Math.floor(newDuration) % 60
  const formatMinute = minute.toString().padStart(2, '0')
  const formatSecond = second.toString().padStart(2, '0')
  return `${formatMinute}:${formatSecond}`
}
export default formatDuration
