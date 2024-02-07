import styled from 'styled-components'

export const DiscoverModuleWrapper = styled.div`
  .content {
    display: flex;
    background: url(${require('@/assets/img/wrap1.png')});
    .left {
      width: 729px;
      padding: 20px 20px 40px;
      box-sizing: border-box;
    }
    .right {
      width: 250px;
      margin-left: 1px;
      .cover_bg {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 126px;
        background: url(${require('@/assets/img/index.png')});
        p {
          width: 205px;
          padding: 0 16px;
          text-align: center;
          margin-bottom: 20px;
        }
        .user-login-btn {
          width: 100px;
          height: 31px;
          background: url(${require('@/assets/img/index.png')});
          background-position: 0 -195px;
          color: #fff;
          cursor: pointer;
          &:hover {
            color: #fff;
            background-position: -110px -195px;
          }
        }
      }
      .resident-artist-hot-anchor {
        margin-top: 15px;
        padding: 0 20px;
        .apply-artist {
          height: 31px;
          margin-top: 14px;
          padding: 0 5px 0 0;
          background: url(${require('@/assets/img/button2.png')});
          background-position: right -100px;
          border-radius: 4px;
          text-align: center;
          .apply-btn {
            display: block;
            width: 170px;
            padding: 0 15px 0 20px;
            font-weight: bold;
            color: #333;
            height: 31px;
            line-height: 31px;
            background: url(${require('@/assets/img/button2.png')});
            background-position: 0 -59px;
          }
          &:hover {
            color: #333;
            background-position: right -182px;
          }
          &:hover .apply-btn {
            color: #333;
            background-position: 0 -141px;
          }
        }
      }
      .hot-anchor-header {
        margin-top: 30px;
      }
      .hot-anchor-content {
        margin-top: 20px;
      }
    }
    .song-list-box {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-bottom: 35px;
    }
  }
`
