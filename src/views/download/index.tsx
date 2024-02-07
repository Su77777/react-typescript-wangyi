import React, { memo } from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}
// 定义props的ts类型
const Download: React.FC<IProps> = (props) => {
  return <div>Download</div>
}

export default memo(Download)
