import styled from 'styled-components'

export const NewSongUpWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 186px;
  margin: 20px 0 37px;
  border: 1px solid #d3d3d3;
  background-color: rgb(245, 245, 245);
  .arrow-left-box,
  .arrow-right-box {
    width: 17px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .arrow-left,
    .arrow-right {
      width: 17px;
      height: 17px;
      background: url(${require('@/assets/img/index.png')}) no-repeat;
      cursor: pointer;
    }
    .arrow-left {
      background-position: -260px -75px;
      margin-left: 5px;
    }
    .arrow-right {
      margin-right: 5px;
      background-position: -300px -75px;
    }
  }
  .slideshow {
    flex: 1;
    overflow: hidden;
    .c {
      margin-top: 36px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
`
