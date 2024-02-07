import React, { memo, useRef, useState } from 'react'
import type { ReactNode, ElementRef } from 'react'
import { BannerControl, BannerLeft, BannerRight, TopbarWrapper } from './style'
import { shallowEqualApp, useAppSelector } from '@/store'
import { Carousel } from 'antd'
interface IProps {
  children?: ReactNode
}
// 定义props的ts类型
const TopBar: React.FC<IProps> = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  // useRef的作用是获取dom节点的引用，可以用于控制轮播图的滚动
  // ElementRef类型的作用是
  // react获取ref需要使用useRef并且初始化为null
  // const VueRef = ref<Instance<typeof Header>>()
  const carouselRef = useRef<ElementRef<typeof Carousel>>(null)
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqualApp
  )
  // 控制轮播图
  function handlePreClick() {
    carouselRef.current?.prev()
  }
  function handleNextClick() {
    carouselRef.current?.next()
  }

  function handleBeforeChange(current: number, next: number) {
    setCurrentIndex(next)
  }
  let bgImageUrl = banners[currentIndex]?.imageUrl
  if (bgImageUrl) {
    bgImageUrl = bgImageUrl + '?imageView&blur=40x20'
  }
  return (
    <TopbarWrapper style={{ background: `url('${bgImageUrl}') center center / 6000px` }}>
      <div className="banner wrapV2">
        <BannerLeft>
          <Carousel
            autoplay
            className="carousel"
            ref={carouselRef}
            effect="fade"
            beforeChange={handleBeforeChange}
          >
            {banners.map((item) => {
              return (
                <div key={item.imageUrl} className="item">
                  <img className="img" src={item.imageUrl} alt={item.typeTitle} />
                </div>
              )
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight>
          <div className="desc">PC 安卓 iPhone WP iPad Mac 六大客户端</div>
        </BannerRight>
        <BannerControl>
          <button className="btn left" onClick={handlePreClick}></button>
          <button className="btn right" onClick={handleNextClick}></button>
        </BannerControl>
      </div>
    </TopbarWrapper>
  )
}

export default memo(TopBar)
