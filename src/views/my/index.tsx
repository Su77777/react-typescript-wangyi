import React, { memo } from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}
// 定义props的ts类型
const My: React.FC<IProps> = (props) => {
  return <div>My</div>
}

export default memo(My)
