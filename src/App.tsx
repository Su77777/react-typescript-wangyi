import React, { Suspense, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import Playbar from './views/playbar'
import { useAppDispatch } from './store'
import { fetchSongDetailData } from './views/playbar/store'

// import { useAppSelector, shallowEqualApp, useAppDispatch } from '@/store'
// import { changeNameAction } from './store/module/counter'

function App() {
  // shallowEqualApp是用来优化 useSelector 的性能的，它会在组件重新渲染时，只会返回与上一次渲染时状态相同的部分，而不是重新计算整个状态。
  // const { name, age } = useAppSelector(
  //   (state) => ({
  //     name: state.counter.name,
  //     age: state.counter.age
  //   }),
  //   shallowEqualApp
  // )
  // const dispatch = useAppDispatch()
  // function handleChangeName() {
  //   dispatch(changeNameAction('哈哈哈'))
  // }
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchSongDetailData(2096139509))
  }, [])
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <Suspense fallback="">{useRoutes(routes)}</Suspense>
      <AppFooter></AppFooter>
      <Playbar></Playbar>
    </div>
  )
}

export default App
