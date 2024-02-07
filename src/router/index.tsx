import React, { lazy } from 'react'
import { RouteObject, Navigate } from 'react-router-dom'

const Discover = lazy(() => import('@/views/discover'))
const Attention = lazy(() => import('@/views/attention'))
const My = lazy(() => import('@/views/my'))
const Download = lazy(() => import('@/views/download'))
// 二级页面
const Artist = lazy(() => import('@/views/discover/c-views/artist'))
const Djtaylor = lazy(() => import('@/views/discover/c-views/djtaylor'))
const Newdisc = lazy(() => import('@/views/discover/c-views/newdisc'))
const Ranking = lazy(() => import('@/views/discover/c-views/ranking'))
const Recommend = lazy(() => import('@/views/discover/c-views/recommend'))
const Songlist = lazy(() => import('@/views/discover/c-views/songlist'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/songlist',
        element: <Songlist />
      },
      {
        path: '/discover/djtaylor',
        element: <Djtaylor />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/newdisc',
        element: <Newdisc />
      }
    ]
  },
  {
    path: '/attention',
    element: <Attention />
  },
  {
    path: '/my',
    element: <My />
  },
  {
    path: '/download',
    element: <Download />
  }
]

export default routes
