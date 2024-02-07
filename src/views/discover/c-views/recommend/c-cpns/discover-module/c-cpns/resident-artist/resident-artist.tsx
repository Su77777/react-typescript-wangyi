import React, { memo } from 'react'
import type { ReactNode } from 'react'
import ResidentArtistWrapper from './style'
import formatImageUrl from '@/utils/formatImageUrl'
interface IProps {
  children?: ReactNode
  itemData?: any
}
// 定义props的ts类型
const ResidentArtist: React.FC<IProps> = (props) => {
  const { itemData } = props
  return (
    <ResidentArtistWrapper>
      <div className="resident-artist-box">
        <div className="resident-artist-box-left">
          <img
            src={formatImageUrl(itemData.picUrl, '62')}
            alt=""
            className="resident-artist-album"
          />
        </div>
        <div className="resident-artist-box-right">
          <h4 className="artist-name">{itemData.name}</h4>
          <div className="artist-desc">
            {itemData.alias.length ? itemData.alias.join(' ') : itemData.name + '歌手'}
          </div>
        </div>
      </div>
    </ResidentArtistWrapper>
  )
}

export default memo(ResidentArtist)
