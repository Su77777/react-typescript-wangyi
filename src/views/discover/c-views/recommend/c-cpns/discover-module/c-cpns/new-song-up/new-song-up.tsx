import React, { memo, useRef } from 'react'
import type { ElementRef, ReactNode } from 'react'
import { NewSongUpWrapper } from './style'
import { Carousel } from 'antd'
import SongListItemV2 from '@/components/song-list-item-v2'
interface IProps {
  children?: ReactNode
  newestSongUp: any
}
// 定义props的ts类型
const NewSongUp: React.FC<IProps> = (props) => {
  const carouselRef = useRef<ElementRef<typeof Carousel>>(null)
  function handleSlideShowClickLeft() {
    carouselRef.current?.prev()
  }
  function handleSlideShowClickRight() {
    carouselRef.current?.next()
  }
  const { newestSongUp } = props
  return (
    <NewSongUpWrapper>
      <div className="arrow-left-box">
        <i className="arrow-left" onClick={handleSlideShowClickLeft}></i>
      </div>
      <div className="slideshow">
        <Carousel dots={false} ref={carouselRef}>
          {[0, 1].map((item) => {
            return (
              <div key={item}>
                <div className="c">
                  {newestSongUp.slice(item * 5, item * 5 + 5).map((album: any) => {
                    return (
                      <div key={album.id}>
                        <SongListItemV2 item={album}></SongListItemV2>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </Carousel>
      </div>
      <div className="arrow-right-box">
        <i className="arrow-right" onClick={handleSlideShowClickRight}></i>
      </div>
    </NewSongUpWrapper>
  )
}

export default memo(NewSongUp)
