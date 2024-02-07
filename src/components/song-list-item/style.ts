import styled from 'styled-components'

const SongListItemWrapper = styled.div`
  width: 140px;
  height: 204px;
  .song-list-item-top {
    position: relative;
    width: 140px;
    height: 140px;
    .img {
      width: 100%;
      height: 100%;
    }
    .cover {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url(${require('@/assets/img/coverall.png')}) no-repeat;
      background-position: 0 0;
    }
    .info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 27px;
      padding: 4px 10px 0;
      box-sizing: border-box;
      background: url(${require('@/assets/img/coverall.png')}) no-repeat;
      background-position: 0 -537px;
      color: #ccc;
      font-size: 12px;
      .info-left {
        .music-icon {
          display: inline-block;
          width: 14px;
          height: 11px;
          margin-right: 8px;
          background: url(${require('@/assets/img/iconall.png')}) no-repeat;
          background-position: 0 -24px;
        }
      }
      .info-right {
        .play-icon {
          display: inline-block;
          width: 16px;
          height: 17px;
          background: url(${require('@/assets/img/iconall.png')}) no-repeat;
          background-position: 0 0;
        }
      }
    }
  }
  .song-list-item-bottom {
    font-size: 14px;
    margin: 8px 0 3px 0;
    &:hover {
      text-decoration: underline;
    }
  }
`

export default SongListItemWrapper
