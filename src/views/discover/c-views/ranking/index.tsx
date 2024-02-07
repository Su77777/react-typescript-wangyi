import React, { memo } from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}
// 定义props的ts类型
const Ranking: React.FC<IProps> = (props) => {
  return <div>Ranking</div>
}

export default memo(Ranking)
