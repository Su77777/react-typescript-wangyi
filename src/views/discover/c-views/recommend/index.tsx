import { useAppDispatch } from '@/store'
import React, { memo, useEffect } from 'react'
import type { ReactNode } from 'react'
import { fetchRecommendBannerData } from './store/recommend'
import TopBar from './c-cpns/top-bar/top-bar'
import DiscoverModule from './c-cpns/discover-module/discover-module'
interface IProps {
  children?: ReactNode
}
// 定义props的ts类型
const Recommend: React.FC<IProps> = (props) => {
  const dispatch = useAppDispatch()
  // useEffect是React的hooks的hook，用来处理副作用的，比如请求数据更新页面的异步请求，比如请求数据，设置状态，设置定时器，设置事件监听等。
  useEffect(() => {
    dispatch(fetchRecommendBannerData())
  }, [])
  return (
    <div>
      <TopBar></TopBar>
      <DiscoverModule></DiscoverModule>
    </div>
  )
}

export default memo(Recommend)
