import React, { memo, useEffect } from 'react'
import type { ReactNode } from 'react'
import { DiscoverModuleWrapper } from './style'
// 公共组件
import AreaHeader from '@/components/area-header'
import SongListItem from '@/components/song-list-item'
// 仓库
import { useAppDispatch, shallowEqualApp, useAppSelector } from '@/store'
// 发送网络
import {
  fetchHotRecommendData,
  fetchNewestSongUpData,
  fetchRankingDatas,
  fetchResidentArtistData
} from '../../store/recommend'
// 组件
import NewSongUp from './c-cpns/new-song-up/new-song-up'
import LeaderBoard from './c-cpns/leader-board/leader-board'
import AppHeaderV2 from '@/components/app-header-v2'
import ResidentArtist from './c-cpns/resident-artist/resident-artist'
import HotAnchor from './c-cpns/hot-anchor/hot-anchor'
interface IProps {
  children?: ReactNode
}
// 本地数据
import { hotAnchor } from '@/assets/data/local-data'

// 定义props的ts类型
const DiscoverModule: React.FC<IProps> = (props) => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchHotRecommendData())
    dispatch(fetchNewestSongUpData())
    dispatch(fetchRankingDatas())
    dispatch(fetchResidentArtistData())
  }, [])
  const { hotRecommend, newestSongUp, rankingDatas, residentArtistData } = useAppSelector(
    (state) => ({
      hotRecommend: state.recommend.hotRecommend,
      newestSongUp: state.recommend.newestSongUp,
      rankingDatas: state.recommend.rankingDatas,
      residentArtistData: state.recommend.residentArtistData
    }),
    shallowEqualApp
  )

  return (
    <DiscoverModuleWrapper>
      <div className="content wrapV2">
        <div className="left">
          <AreaHeader isBg></AreaHeader>
          <div className="song-list-box">
            {hotRecommend.slice(0, 8).map((item) => {
              return (
                <div className="item" key={item.id}>
                  <SongListItem item={item}></SongListItem>
                </div>
              )
            })}
          </div>
          <AreaHeader title="新碟上架" tagList={[]} isBg></AreaHeader>
          <NewSongUp newestSongUp={newestSongUp}></NewSongUp>
          <AreaHeader title="榜单" tagList={[]} isBg></AreaHeader>
          <LeaderBoard rankingDatas={rankingDatas}></LeaderBoard>
        </div>
        <div className="right">
          <div className="cover_bg">
            <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
            <button className="user-login-btn">用户登陆</button>
          </div>
          <div className="resident-artist-hot-anchor">
            <div className="resident-artist-header">
              <AppHeaderV2 isMore></AppHeaderV2>
            </div>
            <div className="resident-artist-content">
              {residentArtistData.map((item) => {
                return (
                  <div className="resident-artist-item" key={item.id}>
                    <ResidentArtist itemData={item}></ResidentArtist>
                  </div>
                )
              })}
              <div className="apply-artist">
                <a href="" className="apply-btn">
                  申请成为网易音乐人
                </a>
              </div>
            </div>
            <div className="hot-anchor-header">
              <AppHeaderV2 title="热门主播" isMore={false}></AppHeaderV2>
            </div>
            <div className="hot-anchor-content">
              {hotAnchor.map((item) => {
                return (
                  <div className="hot-anchor-item" key={item.id}>
                    <HotAnchor itemData={item}></HotAnchor>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </DiscoverModuleWrapper>
  )
}

export default memo(DiscoverModule)
