import styled from 'styled-components'

export const TopbarWrapper = styled.div`
  .banner {
    position: relative;
    display: flex;
    width: 982px;
  }
`

export const BannerLeft = styled.div`
  width: 730px;
  height: 100%;
  overflow: hidden;
  .carousel {
    height: 100%;
  }
  .item {
    .img {
      width: 100%;
      height: 100%;
    }
  }
`

export const BannerRight = styled.a.attrs({
  href: 'www.baidu.com'
})`
  position: relative;
  display: block;
  width: 254px;
  height: 270px;
  background: url(${require('@/assets/img/download.png')});
  background-color: #000;
  .desc {
    position: absolute;
    bottom: 7px;
    color: #8d8d8d;
    left: 50%;
    width: 100%;
    text-align: center;
    transform: translateX(-50%);
  }
`

export const BannerControl = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  bottom: 0;
  transform: translateY(-50%);
  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    top: 50%;
    transform: translateY(-50%);

    background: url(${require('@/assets/img/banner.png')});
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  .left {
    background-position: 0 -360px;
    left: -60px;
  }
  .right {
    background-position: 0 -508px;
    right: -60px;
  }
`
