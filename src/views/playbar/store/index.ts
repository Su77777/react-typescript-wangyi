import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getLyric, getSongDetail } from '../service'
import formatLyric from '@/utils/formatLyric'
import { IRootState } from '@/store'
import { log } from 'console'
// createAsyncThunk 的动态类型有三个 第一个void是回调函数的返回值类型,第二个是回到函数参数的类型,第三个的getState的类型
export const fetchSongDetailData = createAsyncThunk<void, number, { state: IRootState }>(
  'songDetail',
  async (ids, { dispatch, getState }) => {
    // 获取歌的存放列表
    const playList = getState().playbar.playList
    // 查看传进来的歌曲id是否在播放列表中
    const findIndex = playList.findIndex((item: any) => item.id === ids)
    // 如果没有在播放列表中,则请求歌曲
    if (findIndex === -1) {
      // 获取歌词详情
      getSongDetail(ids).then((res) => {
        const song = res.data.songs[0]
        const newPlayList = [...playList]
        newPlayList.push(song)
        dispatch(changeSongDetailDataAction(song))
        dispatch(changePlayListAction(newPlayList))
        dispatch(changePlayListIndexAction(newPlayList.length - 1))
      })
    } else {
      // 如果在播放列表当中 直接取出来 进行播放
      const song = playList[findIndex]
      dispatch(changeSongDetailDataAction(song))
      dispatch(changePlayListIndexAction(findIndex))
    }

    // 获取歌词并且解析歌词
    getLyric(ids).then((res) => {
      const lyricString = res.data.lrc.lyric
      const lyrics = formatLyric(lyricString)
      console.log(lyrics)
      dispatch(changeLyricsAction(lyrics))
    })
  }
)
export const changeMusicAction = createAsyncThunk<void, boolean, { state: IRootState }>(
  'changeMusic',
  (isNext, { dispatch, getState }) => {
    const playList = getState().playbar.playList
    const playListIndex = getState().playbar.playListIndex
    const playMode = getState().playbar.playmode
    let newIndex = playListIndex
    if (playMode === 2) {
      // 随机播放
      newIndex = Math.floor(Math.random() * playList.length)
    } else {
      // 顺序和单曲循环
      newIndex = isNext ? playListIndex + 1 : playListIndex - 1
      // 边界判断
      if (newIndex > playList.length - 1) newIndex = 0
      if (newIndex < 0) newIndex = playList.length - 1
    }
    const song = playList[newIndex]
    // 重新获取歌词
    getLyric(song.id).then((res) => {
      const lyricString = res.data.lrc.lyric
      const lyrics = formatLyric(lyricString)
      console.log(lyrics)
      dispatch(changeLyricsAction(lyrics))
    })

    dispatch(changeSongDetailDataAction(song))
    dispatch(changePlayListIndexAction(newIndex))
  }
)
interface IPlaybarState {
  songDetailData: any
  playmode: number
  lyrics: any
  lyricIndex: number
  playList: any
  playListIndex: number
}

const initialState: IPlaybarState = {
  songDetailData: {},
  playmode: 0, // 0顺序播放 1单曲循环 2随机播放
  lyrics: [],
  lyricIndex: -1,
  playList: [
    {
      name: '夜郎溪',
      id: 2096141442,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 12320060,
          name: '王齐铭WatchMe',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 5,
      crbt: null,
      cf: '',
      al: {
        id: 178227623,
        name: '夜郎溪',
        picUrl: 'https://p2.music.126.net/4BGdOYP4mAIXK04AK5nykw==/109951169026687874.jpg',
        tns: [],
        pic_str: '109951169026687874',
        pic: 109951169026687870
      },
      dt: 200222,
      h: {
        br: 320000,
        fid: 0,
        size: 8011245,
        vd: -45729,
        sr: 48000
      },
      m: {
        br: 192000,
        fid: 0,
        size: 4806765,
        vd: -43227,
        sr: 48000
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3204525,
        vd: -41735,
        sr: 48000
      },
      sq: {
        br: 889903,
        fid: 0,
        size: 22272298,
        vd: -45724,
        sr: 48000
      },
      hr: {
        br: 893961,
        fid: 0,
        size: 22373861,
        vd: -45704,
        sr: 48000
      },
      a: null,
      cd: '01',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 17716748288,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 5,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 14675367,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 0,
      publishTime: 0
    },
    {
      name: '必须有',
      id: 2096139500,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 12320060,
          name: '王齐铭WatchMe',
          tns: [],
          alias: []
        },
        {
          id: 54247662,
          name: '刀脚',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 4,
      crbt: null,
      cf: '',
      al: {
        id: 178227623,
        name: '夜郎溪',
        picUrl: 'https://p1.music.126.net/4BGdOYP4mAIXK04AK5nykw==/109951169026687874.jpg',
        tns: [],
        pic_str: '109951169026687874',
        pic: 109951169026687870
      },
      dt: 204662,
      h: {
        br: 320000,
        fid: 0,
        size: 8188845,
        vd: -45996,
        sr: 48000
      },
      m: {
        br: 192000,
        fid: 0,
        size: 4913325,
        vd: -43548,
        sr: 48000
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3275565,
        vd: -42274,
        sr: 48000
      },
      sq: {
        br: 916871,
        fid: 0,
        size: 23456154,
        vd: -45933,
        sr: 48000
      },
      hr: {
        br: 1685858,
        fid: 0,
        size: 43129011,
        vd: -45939,
        sr: 48000
      },
      a: null,
      cd: '01',
      no: 2,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 17716748288,
      originCoverType: 0,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 4,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 0,
      publishTime: 0
    }
  ],
  playListIndex: -1
}

const playbarSlice = createSlice({
  name: 'playbar',
  initialState,
  reducers: {
    changeSongDetailDataAction(state, { payload }) {
      state.songDetailData = payload
    },
    changeSongPlayModeAction(state, { payload }) {
      state.playmode = payload
    },
    changeLyricsAction(state, { payload }) {
      state.lyrics = payload
    },
    changeLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload
    },
    changePlayListIndexAction(state, { payload }) {
      state.playListIndex = payload
    },
    changePlayListAction(state, { payload }) {
      state.playList = payload
    }
  }
})
export const {
  changeSongDetailDataAction,
  changeSongPlayModeAction,
  changeLyricsAction,
  changeLyricIndexAction,
  changePlayListIndexAction,
  changePlayListAction
} = playbarSlice.actions
export default playbarSlice.reducer
