export function randomNum(minNum: number, maxNum: number) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1 + '', 10)
      break
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum + '', 10)
      break
    default:
      return 0
      break
  }
}

export function isPhone() {
  //获取浏览器navigator对象的userAgent属性（浏览器用于HTTP请求的用户代理头的值）
  var info = navigator.userAgent
  //通过正则表达式的test方法判断是否包含“Mobile”字符串
  var isPhone = /mobile/i.test(info)
  //如果包含“Mobile”（是手机设备）则返回true
  return isPhone
}

export function saveImage(url: string, name?: string) {
  pcSaveImage(url, name || 'download.jpg')
  // if (isPhone()) {
  //   mobileSaveImage(url)
  // } else {
  // }
}

export function pcSaveImage(url: string, name?: string) {
  // 生成一个a元素
  var a = document.createElement('a')
  // 创建一个单击事件
  var event = new MouseEvent('click')

  // 将a的download属性设置为我们想要下载的图片名称，若name不存在则使用‘下载图片名称’作为默认名称
  a.download = name || 'download'
  // 将生成的URL设置为a.href属性
  a.href = url
  // 触发a的单击事件
  a.dispatchEvent(event)
}

export function mobileSaveImage(url: string) {
  var blob = new Blob([''], { type: 'application/octet-stream' })
  var url = URL.createObjectURL(blob)
  var a = document.createElement('a')
  a.href = url
  a.download = url.replace(/(.*\/)*([^.]+.*)/gi, '$2').split('?')[0]
  var e = document.createEvent('MouseEvents')
  e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
  a.dispatchEvent(e)
  URL.revokeObjectURL(url)
}

export function getAssetsUrl(path: string) {
  return new URL(`../assets/${path}`, import.meta.url).href
}
