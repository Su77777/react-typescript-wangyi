import React, { memo } from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}
// 定义props的ts类型
const Artist: React.FC<IProps> = (props) => {
  return <div>Artist</div>
}

export default memo(Artist)
