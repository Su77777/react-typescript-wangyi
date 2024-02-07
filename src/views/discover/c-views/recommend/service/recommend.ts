import SyAxios from '@/service'

export function getBannerData() {
  return SyAxios.get({
    url: '/banner'
  })
}
// 歌曲推荐
export function getRecommendSongs(limit = 10) {
  return SyAxios.get({
    url: '/top/playlist',
    params: {
      limit
    }
  })
}
// 新碟上架
export function getNewEst() {
  return SyAxios.get({
    url: '/album/newest'
  })
}
// 排行榜 默认获取的是飙升榜
export function getRankingSongs(id = 3779629) {
  return SyAxios.get({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}

// 入驻歌手
export function getResidentSinger(offset = 0, limit = 5) {
  return SyAxios.get({
    url: '/top/artists',
    params: {
      offset,
      limit
    }
  })
}
