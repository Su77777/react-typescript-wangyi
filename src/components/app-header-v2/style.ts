import styled from 'styled-components'

const AppHeaderV2Wrapper = styled.div`
  margin-bottom: 6px;
  .app-header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 23px;
    color: #333;
    border-bottom: 1px solid #ccc;
    .app-header-content-left {
      font-weight: 700;
    }
    .app-header-content-right {
      a {
        color: #666;
      }
    }
  }
`

export default AppHeaderV2Wrapper
