import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { AreaHeaderWrapper } from './style'
import classNames from 'classnames'
interface IProps {
  children?: ReactNode
  title?: string
  tagList?: string[]
  titleLink?: string
  tagLink?: string
  moreLink?: string
  isBg?: boolean
}
// 定义props的ts类型
const AreaHeader: React.FC<IProps> = (props) => {
  const { titleLink, tagLink, title, tagList, moreLink, isBg } = props
  const tagsList: any = ['华语', '流行', '摇滚', '民谣', '电子']
  const bgClass = classNames({
    'area-header-content': true,
    bg: isBg
  })

  return (
    <AreaHeaderWrapper>
      <div className={bgClass}>
        <div className="left-header">
          <div className="title">
            <a href={titleLink ? titleLink : '/discover/songlist'}>{title ? title : '热门推荐'}</a>
          </div>
          {tagList ? (
            <div className="tag-list">
              {tagList?.map((item: any) => {
                return (
                  <div className="item" key={item}>
                    <a className="link" href={tagLink ? tagLink : '/discover/songlist'}>
                      {item}
                    </a>
                    <span className="diver">|</span>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="tag-list">
              {tagsList?.map((item: any) => {
                return (
                  <div className="item" key={item}>
                    <a className="link" href={tagLink ? tagLink : '/discover/songlist'}>
                      {item}
                    </a>
                    <span className="diver">|</span>
                  </div>
                )
              })}
            </div>
          )}
        </div>
        <div className="right-header">
          <a href={moreLink ? moreLink : '/discover/songlist'}>更多</a>
          <i className="arrows"></i>
        </div>
      </div>
    </AreaHeaderWrapper>
  )
}

export default memo(AreaHeader)
