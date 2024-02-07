import React, { memo } from 'react'
import type { ReactNode } from 'react'
import SongListItemV2Wrapper from './style'
import formatImageUrl from '@/utils/formatImageUrl'
interface IProps {
  children?: ReactNode
  item: any
}
// 定义props的ts类型
const SongListItemV2: React.FC<IProps> = (props) => {
  const { item } = props
  return (
    <SongListItemV2Wrapper>
      <div className="song-list-item-v2-box">
        <img src={formatImageUrl(item.blurPicUrl, '100')} alt="" />
        <a href="" className="cover-v2"></a>
        <div className="info-v2">
          <div className="song-name">{item.name}</div>
          <div className="artist">{item.artist.name}</div>
        </div>
      </div>
    </SongListItemV2Wrapper>
  )
}

export default memo(SongListItemV2)
