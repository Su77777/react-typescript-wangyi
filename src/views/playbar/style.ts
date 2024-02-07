import styled from 'styled-components'

interface IBarOperator {
  playmode: number
}

const PlayBarWrapper = styled.div<IBarOperator>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 53px;
  /* transition: all ease-in 0.3s; */
  /* &:hover {
    bottom: 0px;
  } */
  z-index: 1002;
  .bg-cover {
    height: 100%;
    background: url(${require('@/assets/img/playbar.png')}) repeat-x;
    background-position: 0 0;
    margin-right: 67px;
  }
  .updown {
    position: relative;
    z-index: 11;
    .lock-left {
      position: absolute;
      top: -67px;
      right: 15px;
      width: 52px;
      height: 67px;
      background: url(${require('@/assets/img/playbar.png')}) no-repeat 0 -380px;

      .lock-btn {
        display: block;
        width: 18px;
        height: 18px;
        margin: 6px 0 0 17px;
        background: url(${require('@/assets/img/playbar.png')}) no-repeat -80px -380px;
      }
    }
    .lock-right {
      position: absolute;
      top: -54px;
      right: 0;
      width: 15px;
      height: 54px;
      background: url(${require('@/assets/img/playbar.png')}) repeat-x -52px -393px;
    }
  }
  .play-bar-content {
    display: flex;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 37px;
    padding-bottom: 2px;
    .play-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 137px;
      .play-btns {
        width: 28px;
        height: 28px;
        background: url(${require('@/assets/img/playbar.png')});
        margin-right: 8px;
        margin-top: 5px;
      }
      .pre {
        position: relative;
        top: -5px;
        background-position: 0 -130px;
        &:hover {
          background-position: -30px -130px;
        }
      }
      .play {
        position: relative;
        top: -3px;
        width: 36px;
        height: 36px;
        /* background-position: -304px -205px; */
        background-position: 0 -204px;
        margin-top: 0;
        &:hover {
          background-position: -40px -204px;
        }
      }
      .playing {
        background-position: 0 -165px;
        &:hover {
          background-position: -40px -165px;
        }
      }
      .next {
        position: relative;
        top: -5px;
        background-position: -80px -130px;
        &:hover {
          background-position: -110px -130px;
        }
      }
    }
    .song-cover {
      width: 34px;
      height: 34px;
      position: relative;
      margin: 2px 15px 0 10px;
      .song-cover-img {
        width: 100%;
        height: 100%;
      }
      .song-cover-link {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url(${require('@/assets/img/playbar.png')}) 0 -80px;
      }
    }
    .play-slider {
      .play-song-info {
        display: flex;
        justify-content: center;
        overflow: hidden;
        text-shadow: 0 1px 0 #171717;
        padding-top: 3px;
        .play-song-name {
          display: inline-block;
          width: 300px;
          color: #e8e8e8;
          ${(props) => props.theme.mixins.textdot}
          &:hover {
            text-decoration: underline;
          }
        }
        .play-song-artist-1,
        .play-song-artist-2 {
          color: #9b9b9b;
        }
        .play-song-artist-1 {
          &:hover {
            text-decoration: underline;
          }
        }
        .play-song-artist-box {
          margin-left: 15px;
        }
      }
      .song-slider {
        position: relative;
        .slider-box {
          .ant-slider {
            margin-top: 5px;
            .ant-slider-rail {
              background: rgb(83, 83, 83);
              border-radius: 5px;

              height: 7px;
            }
            .ant-slider-track {
              background-color: rgb(199, 12, 12);
              height: 7px;
              border-radius: 5px;
            }
            .ant-slider-step {
              height: 7px;
            }
            .ant-slider-handle {
              inset-block-start: 4px;
              &::after {
                width: 6px;
                height: 6px;
                background-color: rgb(185, 24, 15) !important;
                box-shadow: 0 0 0 4px rgb(247, 247, 247) !important;
              }
            }
          }
        }
        .song-duration {
          position: absolute;
          bottom: -1px;
          right: -77px;
          color: #797979;
          .currant-time {
            color: #a1a1a1;
          }
        }
      }
    }
    .opera-1 {
      position: relative;
      display: flex;
      width: 87px;
      left: 107px;
      top: -8px;
      .opera-btns {
        width: 25px;
        height: 25px;
        margin: 11px 2px 0 0;
        background: url(${require('@/assets/img/playbar.png')});
      }
      .pip {
        background: url(${require('@/assets/img/pip_icon.png')});
        &:hover {
          background-position-y: -25px;
        }
      }
      .like {
        background-position: -88px -163px;
        &:hover {
          background-position: -88px -189px;
        }
      }
      .share {
        background-position: -114px -163px;
        &:hover {
          background-position: -114px -189px;
        }
      }
    }
    .opera-2 {
      position: relative;
      display: flex;
      top: -8px;
      left: 100px;
      z-index: 10;
      width: 113px;
      padding-left: 13px;
      background-position: -147px -238px;
      .opera-btns-2 {
        width: 25px;
        height: 25px;
        margin: 11px 4px 0 0;
        background: url(${require('@/assets/img/playbar.png')});
      }
      .volume {
        background-position: -2px -248px;
        &:hover {
          background-position: -31px -248px;
        }
      }
      .mode {
        background-position: ${(props) => {
          switch (props.playmode) {
            case 0:
              return '-3px -344px'
            case 1:
              return '-66px -344px'
            case 2:
              return '-66px -248px'
          }
        }};
        &:hover {
          background-position: ${(props) => {
            switch (props.playmode) {
              case 0:
                return '-33px -344px'
              case 1:
                return '-93px -344px'
              case 2:
                return '-93px -248px'
            }
          }};
        }
      }
      .song-list {
        width: 59px;
        height: 36px;
        margin: 11px 4px 0 0;

        .song-list-icon {
          width: 61px;
          height: 26px;
          background: url(${require('@/assets/img/playbar.png')});
          background-position: -46px -70px;
          &:hover {
            background-position: -46px -100px;
          }
          .list-number {
            position: relative;
            top: 5px;
            left: 9px;
            display: block;
            width: 38px;
            padding-left: 21px;
            color: #666;
            text-shadow: 0 1px 0 #080707;
          }
        }
      }
    }
  }
`

export default PlayBarWrapper
