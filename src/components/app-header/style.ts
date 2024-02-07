import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  font-size: ${(props) => props.theme.fontSize.secondary};
  color: #fff;
  .content {
    ${(props) => props.theme.mixins.wrapV1}
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }
  .divline {
    height: 5px;
    background-color: ${(props) => props.theme.colors.primary};
  }
`

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  .logo {
    display: inline-block;
    width: 177px;
    height: 69px;
    background-position: 0 0;
    text-indent: -9999px;
  }
  .title-list {
    display: flex;
    line-height: 70px;
    .item {
      cursor: pointer;
      &:hover a,
      a.active {
        background-color: #000;
        color: #fff;
      }
      /* a元素 */
      a {
        position: relative;
        display: block;
        color: #ccc;
        padding: 0 20px;

        &.active .icon {
          position: absolute;
          display: inline-block;
          width: 12px;
          height: 7px;
          left: 50%;
          bottom: -4px;
          transform: translateX(-50%);
          background-position: -226px 0;
        }
      }
      /* 最后一个a元素 */
      &:last-of-type a {
        position: relative;
        &::after {
          position: absolute;
          content: '';
          width: 28px;
          height: 19px;
          background-image: url(${require('@/assets/img/topbar.png')});
          background-position: -190px 0;
          top: 20px;
          right: -15px;
          transform: translateY(-50%);
        }
      }
    }
  }
`
export const HeaderRight = styled.div`
  display: flex;
  .search {
    width: 172px;
    height: 32px;
    border-radius: 16px;
    margin-right: 16px;
  }
  .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    padding: 0 12px;
    border: 1px solid #4f4f4f;
    border-radius: 20px;
    box-sizing: border-box;
    font-size: 12px;
    color: #ccc;
    text-align: center;
  }
  .login {
    position: relative;
    left: 25px;
    color: #787878;
    width: 28px;
    line-height: 33px;
    font-size: 12px;
    cursor: pointer;
  }
`
