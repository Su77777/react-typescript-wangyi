import React, { memo } from 'react'
import type { ReactNode } from 'react'
import AppHeaderV2Wrapper from './style'
interface IProps {
  children?: ReactNode
  title?: string
  isMore?: boolean
}
// 定义props的ts类型
const AppHeaderV2: React.FC<IProps> = (props) => {
  const { title, isMore } = props
  return (
    <AppHeaderV2Wrapper>
      <div className="app-header-content">
        <div className="app-header-content-left">
          <span>{title ? title : '入驻歌手'}</span>
        </div>
        <div className="app-header-content-right">
          {isMore ? (
            <a href="" className="app-header-v2-link">
              查看全部&gt;
            </a>
          ) : null}
        </div>
      </div>
    </AppHeaderV2Wrapper>
  )
}

export default memo(AppHeaderV2)
