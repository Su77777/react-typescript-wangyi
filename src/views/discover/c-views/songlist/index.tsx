import React, { memo } from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}
// 定义props的ts类型
const Songlist: React.FC<IProps> = (props) => {
  return <div>Songlist</div>
}

export default memo(Songlist)
