import React, { memo } from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}
// 定义props的ts类型
const Djtaylot: React.FC<IProps> = (props) => {
  return <div>Djtaylot</div>
}

export default memo(Djtaylot)
