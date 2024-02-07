import React, { memo } from 'react'
import type { ReactNode } from 'react'
import SongListItemWrapper from './style'
import formatImageUrl from '@/utils/formatImageUrl'
import formatCount from '@/utils/formatCount'
interface IProps {
  children?: ReactNode
  item: any
}
// 定义props的ts类型
const SongListItem: React.FC<IProps> = (props) => {
  const { item } = props

  return (
    <SongListItemWrapper>
      <div className="song-list-item-top">
        <img src={formatImageUrl(item.coverImgUrl, '140')} alt="" className="img" />
        <a href="" className="cover"></a>
        <div className="info">
          <div className="info-left">
            <i className="music-icon"></i>
            <span>{formatCount(item.playCount)}</span>
          </div>
          <div className="info-right">
            <i className="play-icon"></i>
          </div>
        </div>
      </div>
      <div className="song-list-item-bottom">
        <a href="/">{item.name}</a>
      </div>
    </SongListItemWrapper>
  )
}

export default memo(SongListItem)
