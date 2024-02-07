import SyAxios from '@/service'
// 获取歌曲信息
export function getSongDetail(ids: number) {
  return SyAxios.get({
    url: '/song/detail',
    params: {
      ids
    }
  })
}
// 获取歌词信息
export function getLyric(id: number) {
  return SyAxios.get({
    url: '/lyric',
    params: {
      id
    }
  })
}
