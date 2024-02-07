import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getBannerData,
  getNewEst,
  getRankingSongs,
  getRecommendSongs,
  getResidentSinger
} from '../service/recommend'

// 推荐歌单
export const fetchRecommendBannerData = createAsyncThunk('banner', async (arg, { dispatch }) => {
  const res = await getBannerData()

  dispatch(changeBannerDataAction(res.data.banners))
})
// 热门歌曲
export const fetchHotRecommendData = createAsyncThunk('hotRecommend', async (arg, { dispatch }) => {
  const res = await getRecommendSongs(10)
  dispatch(changeHotRecommend(res.data.playlists))
})
// 新碟上架
export const fetchNewestSongUpData = createAsyncThunk('newestSongUp', async (arg, { dispatch }) => {
  const res = await getNewEst()
  dispatch(changeNewestSongUp(res.data.albums))
})
export const fetchResidentArtistData = createAsyncThunk(
  'residentArtist',
  async (arg, { dispatch }) => {
    const res = await getResidentSinger()
    dispatch(changeResidentArtist(res.data.artists))
  }
)
// 榜单
// 1.为了确保每次获取到的数据都是同样的顺序 这里可以使用promise.all来并发请求
// 2.这里可以用for循环来请求多个榜单
// 3.Promise<T>的类型限制 是为了限制resolve的类型
const rankings = [19723756, 3779629, 2884035]
export const fetchRankingDatas = createAsyncThunk('rankingDatas', (arg, { dispatch }) => {
  const promises: Promise<any>[] = []
  for (const id of rankings) {
    promises.push(getRankingSongs(id))
    // console.log(res.data.playlist)
    Promise.all(promises).then((res: any) => {
      const playLists = res.map((item: any) => item.data.playlist)
      dispatch(changeRankingDatas(playLists))
    })
  }
})
interface IinitialState {
  banners: any[]
  hotRecommend: any[]
  newestSongUp: any[]
  rankingDatas: any[]
  residentArtistData: any[]
}
const initialState: IinitialState = {
  banners: [],
  hotRecommend: [],
  newestSongUp: [],
  rankingDatas: [],
  residentArtistData: []
}
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannerDataAction(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommend(state, { payload }) {
      state.hotRecommend = payload
    },
    changeNewestSongUp(state, { payload }) {
      state.newestSongUp = payload
    },
    changeRankingDatas(state, { payload }) {
      state.rankingDatas = payload
    },
    changeResidentArtist(state, { payload }) {
      state.residentArtistData = payload
    }
  }
})

export const {
  changeBannerDataAction,
  changeHotRecommend,
  changeNewestSongUp,
  changeRankingDatas,
  changeResidentArtist
} = recommendSlice.actions
export default recommendSlice.reducer
