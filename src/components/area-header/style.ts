import styled from 'styled-components'

export const AreaHeaderWrapper = styled.div`
  .bg {
    background: url(${require('@/assets/img/index.png')}) no-repeat -225px -156px;
  }
  .area-header-content {
    height: 33px;
    border-bottom: 2px solid #c10d0c;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px 0 34px;
    .left-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title {
        font-size: 24px;
      }
      .tag-list {
        display: flex;
        margin-left: 20px;
        .item {
          .link {
            color: #666;
          }
          .link:hover {
            text-decoration: underline;
          }
          .diver {
            color: #ccc;
            margin: 0 10px;
          }
          &:last-of-type span {
            display: none;
          }
        }
      }
    }
    .right-header {
      .arrows {
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-left: 4px;
        margin-top: 2px;
        background: url(${require('@/assets/img/index.png')});
        background-position: 0 -240px;
      }
    }
  }
`
