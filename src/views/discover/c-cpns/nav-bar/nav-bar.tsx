import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import NavBarWrapper from './style'
import { secondTitle } from '@/assets/data/local-data'
interface IProps {
  children?: ReactNode
}
// 定义props的ts类型
const NavBar: React.FC<IProps> = (props) => {
  return (
    <NavBarWrapper>
      <div className="second-nav wrapV2">
        {secondTitle.map((item) => {
          return (
            <div className="item" key={item.title}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </div>
          )
        })}
      </div>
    </NavBarWrapper>
  )
}

export default memo(NavBar)
