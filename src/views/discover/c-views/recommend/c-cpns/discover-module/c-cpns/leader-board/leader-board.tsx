import React, { memo } from 'react'
import type { ReactNode } from 'react'
import LeaderBoardWrapper from './style'
interface IProps {
  children?: ReactNode
  rankingDatas: any[]
}
// 定义props的ts类型
const LeaderBoard: React.FC<IProps> = (props) => {
  const { rankingDatas } = props
  return (
    <LeaderBoardWrapper>
      <div className="leader-board-content">
        {rankingDatas.map((item, index) => {
          return (
            <div className="item" key={item.id}>
              <div className="leader-board-top">
                <div className="leader-board-left">
                  <img src={item.coverImgUrl} alt="" />
                  <a href="/discover/ranking" className="cover"></a>
                </div>
                <div className="leader-board-right">
                  <h3 className="title">{item.name}</h3>
                  <div className="btn">
                    <a href="" className="play">
                      播放
                    </a>
                    <a href="" className="collect">
                      收藏
                    </a>
                  </div>
                </div>
              </div>
              <div className="leader-board-list">
                {item.tracks.slice(1, 11).map((track: any, i: any) => {
                  return (
                    <div className="item" key={track.id}>
                      <span className="index">{i + 1}</span>
                      <div className="name-opera">
                        <a href="" className="name">
                          {track.name}
                        </a>
                        <div className="opera">
                          <a href="" className="opera-play">
                            播放
                          </a>
                          <a href="" className="opera-add">
                            添加
                          </a>
                          <a href="" className="opera-collect">
                            收藏
                          </a>
                        </div>
                      </div>
                    </div>
                  )
                })}
                <div className="item-footer">
                  <a href="" className="more">
                    查看全部&gt;
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </LeaderBoardWrapper>
  )
}

export default memo(LeaderBoard)
