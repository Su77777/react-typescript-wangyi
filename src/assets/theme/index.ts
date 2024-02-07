const theme = {
  colors: {
    // 网站主题颜色
    primary: '#C20C0C',
    secondary: '#6c757d'
  },
  fontColor: {
    // 字体颜色
    primary: '#ccc',
    secondary: '#333'
  },
  fontSize: {
    // 字体大小
    primary: '16px',
    secondary: '14px'
  },
  mixins: {
    wrapV1: `
      width:1100px;
      margin:0 auto;
      `,
    wrapV2: `
      width:980px;
      margin:0 auto;
      `,
    textdot: `
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      `
  }
}

export default theme
