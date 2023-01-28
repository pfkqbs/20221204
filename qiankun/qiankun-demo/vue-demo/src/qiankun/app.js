import store from '@/store/index'

//  microApps 挂载子应用
const microApps = [
  {
    name: 'react-app',
    entry: '//localhost:9090',
    // 如果使用hashRouter 则在微应用路由路径前加 #
    activeRule: '#/react-app',
    // 使用historyRouter,无需添加 #
    // activeRule: '/react-app',

    // 主应用给微应用传参，将主应用中个人信息传值给子应用
    props: {
      vueUser: store.getters
    }
  },
]

const apps = microApps.map((item) => {
  return {
    ...item,
    // 子应用挂载的div
    container: '#qiankun-viewport',
  }
})

export default apps
