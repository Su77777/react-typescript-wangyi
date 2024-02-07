import styled from 'styled-components'

const SongListItemV2Wrapper = styled.div`
  width: 118px;
  height: 150px;
  .song-list-item-v2-box {
    position: relative;
    width: 100px;
    height: 100px;
    img {
      width: 100%;
      height: 100%;
    }
    .cover-v2 {
      position: absolute;
      top: 0;
      left: 0;
      right: -20px;
      bottom: 0;
      background: url(${require('@/assets/img/coverall.png')}) no-repeat;
      background-position: 0 -570px;
    }
    .info-v2 {
      font-size: 12px;
      .song-name {
        color: #333;
        ${(props) => props.theme.mixins.textdot}
      }
      .artist {
        color: 666;
      }
    }
  }
`

export default SongListItemV2Wrapper
