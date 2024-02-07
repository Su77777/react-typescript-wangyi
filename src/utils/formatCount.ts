function formatCount(count: number): any {
  let newCount = null
  if (count > 100000000) {
    newCount = count
    newCount = (count / 10000).toFixed(0)
    newCount += '万'
    return newCount
  } else {
    return (count / 10000).toFixed(0) + '万'
  }
}

export default formatCount
