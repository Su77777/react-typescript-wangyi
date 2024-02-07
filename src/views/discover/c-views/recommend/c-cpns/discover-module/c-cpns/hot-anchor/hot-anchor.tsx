import React, { memo } from 'react'
import type { ReactNode } from 'react'
import HotAnchorWrapper from './style'
import formatImageUrl from '@/utils/formatImageUrl'
interface IProps {
  children?: ReactNode
  itemData?: any
}
// 定义props的ts类型
const HotAnchor: React.FC<IProps> = (props) => {
  const { itemData } = props
  return (
    <HotAnchorWrapper>
      <div className="hot-anchor-box">
        <div className="hot-anchor-box-left">
          <img src={formatImageUrl(itemData.imageUrl, '40')} alt="" />
        </div>
        <div className="hot-anchor-box-right">
          <div className="anchor-name">{itemData.name}</div>
          <div className="anchor-desc">{itemData.desc}</div>
        </div>
      </div>
    </HotAnchorWrapper>
  )
}

export default memo(HotAnchor)
