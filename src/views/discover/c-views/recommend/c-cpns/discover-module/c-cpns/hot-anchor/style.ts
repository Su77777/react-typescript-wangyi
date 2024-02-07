import styled from 'styled-components'

const HotAnchorWrapper = styled.div`
  width: 210px;
  height: 50px;

  .hot-anchor-box {
    display: flex;

    .hot-anchor-box-left {
      width: 40px;
      height: 40px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .hot-anchor-box-right {
      flex: 1;
      display: flex;
      padding-left: 14px;
      flex-direction: column;
      justify-content: center;
      overflow: hidden;
      .anchor-name,
      .anchor-desc {
        height: 20px;
        line-height: 20px;
      }
      .anchor-desc {
        color: #666;
        ${(props) => props.theme.mixins.textdot}
      }
    }
  }
`

export default HotAnchorWrapper
