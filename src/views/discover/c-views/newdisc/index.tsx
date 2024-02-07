import React, { memo } from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}
// 定义props的ts类型
const Newdisc: React.FC<IProps> = (props) => {
  return <div>Newdisc</div>
}

export default memo(Newdisc)
