import styled from 'styled-components'

const NavBarWrapper = styled.div`
  height: 35px;
  line-height: 35px;
  background-color: ${(props) => props.theme.colors.primary};
  padding-left: 180px;
  .second-nav {
    position: relative;
    left: 35px;
    display: flex;
    align-items: center;
    height: 100%;

    .item {
      a {
        display: inline-block;
        height: 20px;
        line-height: 20px;
        padding: 0 13px;
        margin: 0 17px 0;
        color: #fff;
        &:hover {
          background-color: #9b0909;
          border-radius: 20px;
        }
      }
      a.active {
        background-color: #9b0909;
        border-radius: 20px;
      }
    }
  }
`

export default NavBarWrapper
