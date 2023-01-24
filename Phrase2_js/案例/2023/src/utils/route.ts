export function back(home: string | string[] = '/') {
  let referrer = document.referrer

  if (referrer) {
    let urlInfo = new URL(referrer)
    if (home.indexOf(urlInfo.pathname) !== -1) {
      console.log('goBack')
      window.history.go(-1)
      return true
    }
  }
  window.location.href = window.location.origin + (typeof home == 'string' ? home : home[0])
}

export function goBack() {
  back([getRulePath('/index.html'), getRulePath('/')])
}

export function getRulePath(path: string) {
  return import.meta.env.VITE_BASE + path
}

export function GetUrlParam(paraName: string) {
  var url = document.location.toString()
  var arrObj = url.split('?')

  if (arrObj.length > 1) {
    var arrPara = arrObj[1].split('&')
    var arr

    for (var i = 0; i < arrPara.length; i++) {
      arr = arrPara[i].split('=')

      if (arr != null && arr[0] == paraName) {
        return arr[1]
      }
    }
    return ''
  } else {
    return ''
  }
}
