import styled from 'styled-components'
const LeaderBoardWrapper = styled.div`
  height: 472px;
  margin-top: 20px;

  .leader-board-content {
    display: flex;
    height: 100%;
    padding-left: 1px;
    background: url(${require('@/assets/img/index_bill.png')});
    .item {
      width: 230px;
      height: 100%;
      .leader-board-top {
        position: relative;
        top: 20px;
        left: 19px;
        display: flex;
        height: 100px;
        margin-bottom: 20.5px;
        .leader-board-left {
          position: relative;
          width: 80px;
          height: 80px;
          img {
            width: 100%;
            height: 100%;
          }

          .cover {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url(${require('@/assets/img/coverall.png')});
            background-position: -145px -57px;
          }
        }
        .leader-board-right {
          margin: 6px 0 0 10px;
          .title {
          }
          .btn {
            margin-top: 10px;
            .play,
            .collect {
              display: inline-block;
              width: 22px;
              height: 22px;
              margin-right: 10px;
              text-indent: -99999px;
              background: url(${require('@/assets/img/index.png')});
            }
            .play {
              background-position: -267px -205px;
            }
            .collect {
              background-position: -300px -205px;
            }
          }
        }
      }
      .leader-board-list {
        &:nth-child(-n + 3) .index {
          color: #c10d0c;
        }
        .item {
          display: flex;
          height: 32px;
          margin-left: 17px;
          overflow: hidden;
          .index {
            display: block;
            width: 32px;
            height: 32px;
            line-height: 32px;
            font-size: 16px;
            color: #666;
            text-align: center;
          }
          .name-opera {
            display: flex;
            width: 170px;
            height: 32px;
            line-height: 32px;
            cursor: pointer;

            .name {
              width: 170px;
              ${(props) => props.theme.mixins.textdot}
            }
            .opera > a {
              width: 17px;
              height: 17px;
              margin-right: 5px;
              background: url(${require('@/assets/img/index.png')});
              text-indent: -99999px;
            }
            .opera {
              /* display: flex; */
              display: none;
              align-items: center;
              width: 82px;
              .opera-play {
                background-position: -267px -268px;
              }
              .opera-add {
                position: relative;
                top: 2px;
                right: -2px;
                background: url(${require('@/assets/img/icon.png')});
                background-position: 0px -700px;
              }
              .opera-collect {
                background-position: -297px -268px;
              }
            }
            &:hover {
              text-decoration: underline;
            }
            &:hover .opera {
              display: flex;
            }
          }
        }
        .item-footer {
          position: relative;
          right: -13px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          width: 170px;
          height: 32px;
          margin-left: 17px;
          .more {
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
    & > :last-child {
      width: 228px;
    }
  }
`
export default LeaderBoardWrapper
