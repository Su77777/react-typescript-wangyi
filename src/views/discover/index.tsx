import React, { memo, Suspense } from 'react'
import type { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './c-cpns/nav-bar/nav-bar'
interface IProps {
  children?: ReactNode
}
// 定义props的ts类型
const Discover: React.FC<IProps> = (props) => {
  return (
    <div>
      {/* 对子路由使用 suspense的目的是 防止最外层的suspense在对lazy组件下载时的闪烁 */}
      <NavBar></NavBar>
      <Suspense>
        <Outlet></Outlet>
      </Suspense>
    </div>
  )
}

export default memo(Discover)
