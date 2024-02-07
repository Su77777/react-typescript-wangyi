import { configureStore } from '@reduxjs/toolkit'
import { useSelector, TypedUseSelectorHook, useDispatch, shallowEqual } from 'react-redux'
import recommendReducer from '@/views/discover/c-views/recommend/store/recommend'
import playbarReducer from '@/views/playbar/store/index'
const store = configureStore({
  reducer: {
    recommend: recommendReducer,
    playbar: playbarReducer
  }
})
// 获取store的state函数类型
type getStateFnType = typeof store.getState
// 通过ts工具 returnType 获取state和dispatch的ts类型
// ReturnType是ts的内置类型，可以获取函数返回值的类型
export type IRootState = ReturnType<getStateFnType>
type DispatchType = typeof store.dispatch
// 把useSelector 赋值给创建出来的useAppState 在吧获取到的ts类型 传给useAppState
// TypedUseSelectorHook的作用是获取useSelector的返回值的类型
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export const shallowEqualApp = shallowEqual

export default store
