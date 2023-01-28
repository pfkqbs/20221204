import { message, Tabs } from 'antd'
import React, { useEffect, useState, useRef } from 'react'
const { TabPane } = Tabs
import { HomeOutlined, CloseOutlined } from '@ant-design/icons'
import classes from './index.module.scss'
import { HOME_URL } from '@/config/config'
import { useNavigate, useLocation } from 'react-router-dom'
import { commentRoutes } from '@/routes'
import { IRoute } from '@/type'
import DelTabs from './components/DelTabs'
// mobx
import useStore from '@/store'

const TabsCom = () => {
  const {
    useLayoutStore: { defaultObjMobx, changeTabsListMobx },
  } = useStore()

  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [tabsArr, setTabsArr] = useState(defaultObjMobx.tabsListMobx)

  //#region  add tabsArr
  useEffect(() => {
    addTabsArr()
  }, [pathname])

  const addTabsArr = () => {
    let route: IRoute = {}
    // 找出当前面包屑路由
    const currentPath = pathname.split('/')[pathname.split('/').length - 1]

    commentRoutes.forEach((item) => {
      if (JSON.stringify(item).indexOf(currentPath) !== -1) route = item
    })

    // 递归获得 tab
    createTab(route)
    function createTab(route: IRoute) {
      route.children &&
        route.children.forEach((item) => {
          //#region this judge tabsArr is exist pathname
          let isSetTab = false
          tabsArr.forEach((tab) => {
            if (tab.path === pathname) {
              isSetTab = true
              return
            }
          })
          if (!isSetTab) {
            let routePath = item.path?.split('/') as string[]
            if (!routePath[0]) routePath[0] = routePath[1]
            routePath[0] === currentPath &&
              setTabsArr([...tabsArr, { path: pathname, title: item.meta?.title as string }])
            changeTabsListMobx([...tabsArr, { path: pathname, title: item.meta?.title as string }])
          }
          //#endregion
          if (item.children) createTab(item)
        })
    }
  }
  //#endregion

  const navigateFn = (path: string) => {
    // 此处默认返回子元素的key
    navigate(path)
  }

  // del tab
  const delTabFn = (e: any, path: string, delTabType?: string) => {
    // if del home ，will prompt
    e.stopPropagation()
    let newTabs: any = []
    if (delTabType === 'all') {
      newTabs = tabsArr.filter((item) => item.path === HOME_URL)
      navigate(HOME_URL)
    }
    if (delTabType === 'otherAll') {
      newTabs = tabsArr.filter((item) => item.path === path || item.path === HOME_URL)
    }
    if (!delTabType) {
      if (path === HOME_URL) return message.warning('首页不可删除！')
      const currentIndex = tabsArr.findIndex((item) => item.path === path)
      newTabs = tabsArr.filter((item) => item.path !== path)
      if (path === pathname) navigate(tabsArr[currentIndex - 1].path)
    }
    setTabsArr(newTabs)
    changeTabsListMobx(newTabs)
  }

  return (
    <div className={classes['layout-tabs']}>
      <Tabs activeKey={pathname} onChange={navigateFn}>
        {tabsArr.map((item) => (
          <TabPane
            tab={
              <span>
                {item.path === HOME_URL ? <HomeOutlined /> : ''}
                {item.title}
                {item.path !== HOME_URL ? (
                  <CloseOutlined
                    className={classes['del-icon']}
                    onClick={(e) => delTabFn(e, item.path)}
                  />
                ) : (
                  ''
                )}
              </span>
            }
            key={item.path}
          ></TabPane>
        ))}
      </Tabs>
      <DelTabs delTabFn={delTabFn} />
    </div>
  )
}

export default TabsCom
