import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderLeft, HeaderWrapper, HeaderRight } from './style'
import headerTitles from '@/assets/data/header-title.json'
import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'

interface IProps {
  // ReactNode是一个React元素的类型，可以是任何React组件、JSX、字符串或数字
  children?: ReactNode
}
// 定义props的ts类型
const AppHeader: React.FC<IProps> = (props) => {
  function showItem(item: any) {
    if (item.type === 'path') {
      return (
        // 在 NavLink中className自定义的方式如下:
        // className={({ isActive }) => (isActive ? 'active' : undefined)}
        <NavLink to={item.link}>
          {item.title}
          <i className="icon topbar"></i>
        </NavLink>
      )
    } else {
      return (
        <a href={item.link} rel="noreferrer" target="_blank">
          {item.title}
        </a>
      )
    }
  }
  return (
    <HeaderWrapper>
      <div className="content">
        <HeaderLeft>
          <a href="/" className="logo topbar" target="__blank">
            网易云音乐
          </a>
          <div className="title-list">
            {headerTitles.map((item, index) => {
              return (
                <div className="item" key={index}>
                  {showItem(item)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined></SearchOutlined>}
            className="search"
          ></Input>
          <span className="center">创作者中心</span>
          <span className="login">登陆</span>
        </HeaderRight>
      </div>
      <div className="divline"></div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
