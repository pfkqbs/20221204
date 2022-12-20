//导入 fs 文件系统模块
const fs = require('fs')
const { resolve } = require('path')

//导入path 路径模块
const path = require('path')

//匹配<style><style>标签的正则
//  其中 \s 表示空白字符  \S  表示非空白字符； * 表示匹配任意次
const regStyle = /<style>[\s\S]*<\/style>/

// 匹配 <script></script> 标签的正则
const regScript = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname,'../素材/index.html'),'utf8',(err,dataStr)=>{
    
    if(err) return console.log('读取HTMl 文件失败' + err.message)

    //读取  HTML 文件成功后，调用对应的方法，拆解出  css、js和html文件
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})


// 处理 css 样式
function resolveCSS(htmlStr){

    // 使用正则提取页面中的<style></style>标签
    const r1 = regStyle.exec(htmlStr)

    const newCSS = r1[0].replace('<style>','').replace('</style>','')

    fs.writeFile(path.join(__dirname,'./clock/index.css'),newCSS,err=>{
        if(err) return console.log('写入 css 样式失败！' + err.message )

        console.log('写入 css 样式成功！');
    })

}
// 处理 js 样式
function resolveJS(htmlStr){

    // 使用正则提取页面中的<script></script>标签
    const r2 = regScript.exec(htmlStr)

    const newJS = r1[0].replace('<script>','').replace('</script>','')

    fs.writeFile(path.join(__dirname,'./clock/index.js'),newJS,err=>{
        if(err) return console.log('写入 js 样式失败！' + err.message )

        console.log('写入 js 脚本成功！');
    })

}

// 处理 html 样式
function resolveHTML(htmlStr){

    const newHTML = htmlStr
    .replace('regStyle','<link ref="stylesheet" href="./index.css"/>')
    .replace('regScript','<script src="./index.js"></script>')

    fs.writeFile(path.join(__dirname,'./clock/index.js'),newHTML,err=>{

        if(err) return console.log('写入 html 文件失败！' + err.message )

        console.log('写入 html 页面成功！');
    })

}