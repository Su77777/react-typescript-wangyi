import React, { memo, useEffect, useState, useRef } from 'react'
import type { ReactNode } from 'react'
import PlayBarWrapper from './style'
import { Slider, message } from 'antd'
import classNames from 'classnames'
// store
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { changeLyricIndexAction, changeMusicAction, changeSongPlayModeAction } from './store'
// 工具
import getSongId from '@/utils/getSongId'
import formatImageUrl from '@/utils/formatImageUrl'
import formatDuration from '@/utils/formatDuration'
interface IProps {
  children?: ReactNode
}
// 定义props的ts类型
const PlayBar: React.FC<IProps> = (props) => {
  // 播放状态
  const [playing, setPlaying] = useState(false)
  // 播放进度
  const [progress, setProgress] = useState(0)
  // 获取歌曲总时间
  const [duration, setDuration] = useState(0)
  // 歌曲当前时间
  const [currentTime, setCurrentTime] = useState(0)
  const dispatch = useAppDispatch()
  const { playmode, songDetailData, lyrics, lyricIndex } = useAppSelector(
    (state) => ({
      playmode: state.playbar.playmode,
      songDetailData: state.playbar.songDetailData,
      lyrics: state.playbar.lyrics,
      lyricIndex: state.playbar.lyricIndex
    }),
    shallowEqualApp
  )
  //获取audioRef组件
  const audioRef = useRef<HTMLAudioElement>(null)
  // 组件内部副作用操作
  useEffect(() => {
    // 获取歌曲信息开始播放歌曲
    audioRef.current!.src = getSongId(songDetailData?.id)
    audioRef
      .current!.play()
      .then(() => {
        console.log('播放成功')
      })
      .catch(() => {
        console.log('播放失败')
        setPlaying(false)
      })
    // 获取歌曲总时间
    setDuration(songDetailData?.dt)
  }, [songDetailData])
  // 开始播放和暂停播放
  function handlePlayClick() {
    // 2096139509
    playing
      ? audioRef.current!.pause()
      : audioRef.current!.play().catch(() => {
          setPlaying(false)
        })
    setPlaying(!playing)
  }
  // 歌曲播放中
  function handleTimeUpdate() {
    // audioRef.currentTime 是秒为单位 需要先转换为毫秒 * 1000
    const currentTime = audioRef.current!.currentTime * 1000
    // 这里*100是为了转换成百分比
    const progress = (currentTime / duration) * 100
    setProgress(progress)
    setCurrentTime(currentTime)

    // 匹配歌词
    // index的作用是找到当前时间对应的歌词
    // index的默认值是歌词数组的最后一个 是为了防止歌词数组为空 防止匹配不到对应歌词
    let index = lyrics.length - 1
    for (let i = 0; i < lyrics.length; i++) {
      const lyric = lyrics[i]
      // 这里lyric.time 大于 currentTime的时间是为了找到大于当前播放歌曲时间的歌词
      // 然后减一是为了找到当前播放歌曲时间对应的歌词
      if (lyric.time > currentTime) {
        index = i - 1
        break
      }
    }
    if (lyricIndex === index || index === -1) return
    dispatch(changeLyricIndexAction(index))
    message.open({
      content: lyrics[index].text,
      key: 'lyric',
      duration: 0
    })
  }
  // 点击进度条
  function handleSliderProgress(value: number) {
    audioRef.current!.pause()
    setPlaying(false)

    // 获取点击位置的时间
    const currentTime = (value / 100) * duration
    // 设置当前播放时间
    // 这里currentTime / 1000 是为了转换成秒
    audioRef.current!.currentTime = currentTime / 1000
    // 设置进度条
    setProgress(value)
    // 重新设置歌曲进度时间
    setCurrentTime(currentTime)
  }
  function handleSliderProgressClick(value: number) {
    audioRef.current!.play()
    setPlaying(true)
  }
  // 切换模式
  function handleModeClick(playmode: number) {
    let newPlayMode = playmode + 1
    if (newPlayMode > 2) newPlayMode = 0
    dispatch(changeSongPlayModeAction(newPlayMode))
  }
  // 切换歌曲
  function handleSwitchSongClick(isNext = true) {
    dispatch(changeMusicAction(isNext))
  }
  // 歌曲结束
  function handleSongEnded() {
    if (playmode === 1) {
      audioRef.current!.currentTime = 0
      audioRef.current!.play()
    } else {
      handleSwitchSongClick(true)
    }
  }
  const isPlaying = classNames({
    'play-btns': true,
    play: true,
    playing: playing
  })
  return (
    <PlayBarWrapper playmode={playmode}>
      <div className="bg-cover"></div>
      <div className="updown">
        <div className="lock-left">
          <a href="" className="lock-btn"></a>
        </div>
        <div className="lock-right"></div>
      </div>
      <div className="play-bar-content wrapV2">
        <div className="play-btn">
          <a
            href="javascript:;"
            className="play-btns pre"
            onClick={() => handleSwitchSongClick(false)}
          ></a>
          <a href="javascript:;" className={isPlaying} onClick={handlePlayClick}></a>
          <a
            href="javascript:;"
            className="play-btns next"
            onClick={() => handleSwitchSongClick()}
          ></a>
        </div>
        <div className="song-cover">
          <img
            src={formatImageUrl(songDetailData?.al?.picUrl, '34')}
            alt=""
            className="song-cover-img"
          />
          <a href="" className="song-cover-link"></a>
        </div>
        <div className="play-slider">
          <div className="play-song-info">
            <a href="" className="play-song-name">
              {songDetailData?.name}
            </a>
            <div className="play-song-artist-box">
              <a href="" className="play-song-artist-1">
                {songDetailData?.ar?.[0].name}
              </a>
              {songDetailData?.ar?.length > 1 ? (
                <span className="play-song-artist-2"> / {songDetailData?.ar?.[1].name}</span>
              ) : (
                'null'
              )}
            </div>
          </div>
          <div className="song-slider">
            <div className="slider-box">
              <Slider
                tooltip={{ formatter: null }}
                onChange={handleSliderProgress}
                onChangeComplete={handleSliderProgressClick}
                value={progress}
                step={0.5}
              />
            </div>
            <div className="song-duration">
              <span className="currant-time">{formatDuration(currentTime)}</span>
              <span className="line"> / </span>
              <span className="total-duration">{formatDuration(songDetailData?.dt)}</span>
            </div>
          </div>
        </div>
        <div className="opera-1">
          <a href="javascript:;" className="opera-btns pip"></a>
          <a href="javascript:;" className="opera-btns like"></a>
          <a href="javascript:;" className="opera-btns share"></a>
        </div>
        <div className="opera-2">
          <a href="javascript:;" className="opera-btns-2 volume"></a>
          <a
            href="javascript:;"
            className="opera-btns-2 mode"
            onClick={() => handleModeClick(playmode)}
          ></a>
          <div className="song-list">
            <div className="song-list-icon">
              <a href="javascript:;" className="list-number">
                1
              </a>
            </div>
          </div>
        </div>
      </div>
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} onEnded={handleSongEnded}></audio>
    </PlayBarWrapper>
  )
}

export default memo(PlayBar)
