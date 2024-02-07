import React, { memo } from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}
// 定义props的ts类型
const Attention: React.FC<IProps> = (props) => {
  return <div>Attention</div>
}

export default memo(Attention)
