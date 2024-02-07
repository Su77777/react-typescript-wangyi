import styled from 'styled-components'

const ResidentArtistWrapper = styled.div`
  .resident-artist-box {
    display: flex;
    width: 210px;
    height: 62px;
    background-color: #fafafa;
    border: 1px solid #e9e9e9;
    margin-top: 14px;
    .resident-artist-box-left {
      .resident-artist-album {
        width: 62px;
        height: 62px;
      }
    }
    .resident-artist-box-right {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      /* align-items: center; */
      padding-left: 14px;
      .artist-name {
        font-size: 14px;
      }
      .artist-desc {
        margin-top: 7px;
        padding-top: 5px;
        color: #666;
      }
    }
  }
`

export default ResidentArtistWrapper
