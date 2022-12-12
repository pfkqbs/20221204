[TOC]

# 第0阶段

## 1-1  网页标签的基本结构



3.`hbuilder`使用

------

​	ctrl+n 新建
​	ctrl+鼠标滚轮 放大缩小字体
​	ctrl+s 保存
​	ctrl+c 复制
​	ctrl+v 粘贴
​	ctrl+x 剪切
​	ctrl+r 运行

------

4.网站创建
	网站：本质就是一个文件夹 一个网站是由若干个文件夹组成 方便统筹管理
	组成：css文件夹  html文件夹  js文件夹 images文件夹 index.html
		css文件夹存放css文件
		html文件夹存放html文件
		js文件夹存放js文件
		images文件夹存放图片
		index.html/default.html首页命名
		
5.文件或文件夹的命名规范
	可以包含字母 数字 下划线_
	不能是中文
	不可以是数字开头
	见名知意(驼峰式命名法-若干单词组成 第一单词小写 第二个及以后的首字母大写 例子:zhangHangLin)
				
6.HTML基本结构
	!DOCTYPE HTML 声明文档
	html 网页开始
	head 网页头部
	body 网页主体
	title 网页标题
	 字符编码： utf-8国际编码 gb2312简体中文

```html
<!--声明文档-->

<!DOCTYPE HTML>
<!--网页开始-->
<html>
	<!--网页头部-->
	<head>
		<!--字符编码集 utf-8国际通用编码 gb2312简体中文-->
		<meta charset="utf-8" />
		<!--网页标题-->
		<title>标题</title>
	</head>
	<!--网页主体-->
	<BODY>
		我去，特容易
	</BODY>
</html>	
```

7.标签
	由尖括号包围 用/结束  如：<标签 />
	成对出现的称为双标签 双标签内可以放内容 如：`<标签名 >内容</标签名>`
	单个出现的称为单标签 如：`<标签名 />`
	不区分大小写


## 1-2  ps的基本操作  标签

1.PS基本操作
	PhotoShop是图像处理软件
	ps三大工具：选区工具 切片工具 吸管工具
	选区工具：
		1.量取文字和图片大小
		2.切图
			使用选区工具获取图片的大小和范围
			ctrl+c 复制
			ctrl+n 新建
			ctrl+v 粘贴
			ctrl+shift+alt+s 存储为web所用格式
	切片工具：
		使用切片工具选取图片
		ctrl+shift+alt+s 存储为web所用格式
		更改为所有的用户切片
		

图片的三种格式
	jpg格式、png格式、gif格式
	jpg图片特点：文件小，颜色丰富,不支持透明
	png图片特点：文件大，支持透明
	gif图片特点：支持动画，支持透明

吸管工具：	
	吸取文字 背景颜色
	颜色三种表示法：
		英文单词表示颜色  例子：red
		rgb(红值,绿值,蓝值)表示法，值是0-255 例子：rgb(255,0,0)
		十六进制表示法 0-9 a-f 前两位表示红 中间绿 后两位蓝  例子：#ff0000(推荐使用)

2.标题标签
	语法： n是1-6
	属性：align水平对齐方式
			left 默认值 水平居左
			center 水平居中
			right 水平居右
	特点：自带加粗效果 逐级递减 h1最大 h6最小
		h1是主标题 一个页面中只能出现一次h1

```html
<h1 align="left">水平居左</h1>
<h2 align="center">水平居中</h2>
<h3 align="right">水平居右</h3>
<h4 align="right">水平居右</h4>
<h5 align="right">水平居右</h5>
<h6 align="right">水平居右</h6>
```
3.标签属性
	作用：标签的附加信息 对标签的进一步描述
	语法：`<标签 属性="值" 属性="值">`
		`<标签 属性="值" 属性="值"/>`
	注意：属性写在开始标签中
		属性与属性之间用空格隔开
		属性与值之间用等号(=)链接
		值用单引号或双引号引起来

```html
<h3 align="left"> 水平居左</h3>
<h3 align="center"> 水平居中</h3>
<h3 align="right"> 水平居右</h3>
```

​		
4.文字效果标签
​	加粗标签
​	倾斜标签
​	下划线标签

```html
<b>较粗标签</b>
<i>倾斜标签</i>
<u>下划线标签</u>
普通文字
```

5.标签嵌套
	讲究对称性-里对里 外对外

```html
<!--走别人的路 让别人无路可走-->
<b>
	<u>
		<i>走别人的路 让别人无路可走</i>
	</u>
</b>
```

6.文本效果标签
	语法：\
	属性：color 设置颜色
			英文单词  十六进制 rgb()
		size 设置大小
			1-7 1最小 7最大
		face 设置字体
			字体名称

```html
<font color="chartreuse" size="1" face="华文彩云">文本效果</font>
<font color="chartreuse" size="7" face="黑体">文本效果</font>
<i>
	<font color="orange" size="2">参与评论400人</font>
</i>
```

7.水平线标签
	语法：
	属性：color 颜色
			英文单词  十六进制 rgb()
		align 水平对齐方式
			left 居左
			center 默认值 居中
			right 居右
		width 设置宽度
			数值 /数值+px
		size 设置粗细
			1-7 1最小 7最大

```html

<hr color="orangered" width="500" align="left" size="7"/>

<hr color="black" width="1000px" align="right" size="1"/>

```

8.段落标签
	语法：
	属性：align 水平对齐方式
			    left 默认值 居左
			    center 居中
			    right 居右

```html

<p>&emsp;&emsp;二手车行业领军者！没有中间商赚差价，更多个人卖家、更多个人买家，瓜子二手车直卖网，为广大车主提供免费上门评估，二手车帮卖，代办过户等服务, 专业评估师团队,整车全面检测，30天可退，瓜子全程陪同交易！买卖二手车请拨打——400-069-6530。</p>
<p align="left">123</p>
<p align="center">456</p>
<p align="right">789</p>

```



## 1-3  图片标签  路径  超链接	

复习：
				1.标签属性
				2.标题标签
				3.文字效果标签
				4.文本效果标签
				5.水平线标签
				6.段落标签
	1.strong em标签 
				strong 强调 表现为加粗效果
				em 强调 表现为倾斜效果
				作用：目的是强调 有利于搜索引擎搜索
				

2.图片标签
			语法：
			属性：src 图片路径
				width 设置图片宽度
				height 设置图片高度
				alt 图片非正常显示时提示的文字信息
				title 鼠标移动到图片上时显示文字信息
				
3.路径
			定义：磁盘上查找文件所历经文件夹的路线
			分类：绝对路径
					完整的描述文件位置的路径
					以盘符为起点
					网址
				相对路径
					是指目标相对于当前文件的路径 
					../表示返回一级目录
					
4.超链接
			概念：指从一个网页的文字或图片指向一个目标的连接关系
			语法：
			属性：href 链接目标
					相对路径  绝对路径
				target 链接目标的打开方式
					_self 默认值 在当前窗口打开
					_blank 在新的窗口打开
			分类：	
				空链接 使用# 刷新当前页面，不跳转
				锚点:实现任意页面指定位置的跳转
					创建锚点：
					锚点链接：链接源
				图片链接  	
				邮件链接 
				下载链接 
			超链接默认外观
				未被访问的链接带有下划线而且是蓝色的
				点击时链接带有下划线而且是红色的
				访问后的链接带有下划线而且是紫色的		

## 1-4   列表标签  表格标签

​			回顾：
​				路径
​					绝对路径
​					相对路径
​				转移字符
​					以&开始 以;结束
​				超链接
​					
​	1.列表
​				概念：以条目的形式，有序或无序排列形成的表
​				分类：无序列表 有序列表 自定义列表
​				
​	2.无序列表
​				概念：各个列表项之间为并列关系，没有先后顺序的列表
​				语法：

​				属性：type用于指定列表项目符号类型
​						disc 默认值  小圆点
​						circle 小圆圈
​						square 小方块
​						none 没有  有兼容性
​						
​	3.有序列表
​				概念：各个列表项按照一定顺序排列的列表
​				语法：

​						

​					

​				属性：type用于指定列表的项目符号类型
​						1 以阿拉伯数字为项目符号
​						a A 以英文字母为项目符号
​						i I 以罗马数字为项目符号
​					start 用于规定列表项目编号的起始值
​						数字
​					reversed 倒叙 IE不兼容
​						reversed
​						
​	4.自定义列表
​				概念：带有列表项和列表项注释的列表
​				语法：

​						

​						

​					

​				注意：dt与dd是并列关系 位置不能换
​				
​	5.元素
​				概念：从开始标签到结束标签的所有代码称为元素，元素撑起了整个网页
​				行内元素
​					特点：在一行显示 不可以设置宽度和高度
​					常见：a u b i em strong font
​				块级元素
​					特点：独占一行 可以设置宽度和高度
​					常见：p h1-h6 hr ul ol li dl dt dd
​				行内块元素
​					特点：在一行显示 可以设置宽度和高度
​					常见：img
​					
​	6.表格
​				概念：是一种可视化交流模式，又是一种组织整理数据的手段
​				语法：table 表格
​					tr 行
​					td 单元格
​					th 标题单元格  自带加粗  居中
​					

​	7.table属性
​				width 表格的宽度
​					数值+px
​				height 表格的高度
​					数值+px
​				align 水平对齐
​					left center right
​				bgcolor 表格的背景颜色
​					颜色值
​				border 表格的边框
​					数值+px
​				cellspacing 间距 默认值是2px 单元格与单元格之间的距离
​					数值+px
​				cellpadding 边距 内容与边框之间的距离 默认值是1px
​					数值+px
​				bordercolor 边框线的颜色
​					颜色值
​					
​	8.tr的属性
​				height 行的高度
​					数值+px
​				align 水平对齐方式
​					left center right
​				bgcolor 行的背景颜色
​					颜色值
​				valign 垂直对齐方式
​					top 居上对齐
​					middle 默认值 居中对齐
​					bottom 居下对齐
​					
​	9.td/th属性
​				width 单元格的宽度
​					数值+px
​				align 水平对齐方式
​					left center right
​				valign 垂直对齐方式
​					top middle bottom
​				bgcolor 背景颜色
​					颜色值
​				rowspan 垂直合并 跨行合并
​				colspan 水平合并 跨列合并				

```html
<table>

</table>
```
## 1-5  表单标签 

​	回顾：
​				无序列表  ul li
​				type disc square circle none
​				
​				有序列表 ol li
​				type 阿拉伯数字 英文字母 罗马数字
​				start 数值
​				reversed 倒叙
​				
​				自定义列表 dl dt dd
​				dt在前 dd在后 一个dt多个dd
​				
​				行内元素 a b u i em strong font 
​				块级元素 p h1-h6 hr ul ol li dl dt dd table tr
​				行内块元素 img td
​				
​				表格结构table tr td th
​				table属性 width height border bordercolor bgcolor align cellpadding cellspacing
​				tr属性 height align bgcolor valign
​				td/th属性 width align valign bgcolor colspan rowspan
​				
​	2.表单
​				作用：用于收集用户输入的信息，并通过浏览器向网站传送
​				功能：用于声明整个表单，定义数据收集范围
​				语法：
​				属性：action 数据提交地址
​					target 链接打开方式
​						_self 默认值 在当前窗口打开
​						_blank  在新窗口打开
​					method 提交方法
​						get 默认值 提交到当前页面 文件小 保密性差
​						post 提交到服务器 文件大 保密性强
​						
​	3.输入框
​				作用：用于输入用户信息
​				语法：
​				属性：placeholder 用于提示输入框的输入内容
​					name 名字 分组
​					type 控制输入类型
​						text 文本输入框
​						password 密码输入框
​						submit 提交按钮
​						radio 单选框
​						checkbox 复选框
​						file 文件域
​					value 初始值
​					checked 默认选中状态

​					
​	4.按钮
​				submit 提交按钮 向服务器发送表单数据
​				reset 重置按钮 清空输入数据
​				button 普通按钮
​				image 图片提交按钮 src属性引入图片路径
​				
​	5.文本域
​				语法：
​				属性：name 起名
​					rows 行数 相当于高度
​					cols 列数 相当于宽度
​					maxlength 最大字符数
​					
​	6.下拉菜单
​				语法： 						 						 					
​				select属性
​					name 起名
​				option属性
​					value 值 与内容保持一致
​					selected 默认选中状态 属性与值一致 可以直接写属性
​					
​	7.html5新增表单控件
​				email自动验证 email 域的值
​				number包含数值的输入域
​					value 初始值
​					max 最大
​					min 最小
​					step 步长	
​				date选取日、月、年，即选择一个具体的日期

## 1-6   div 和span标签  css样式

1.div和span
				盒子标签 用于排版布局 是块级元素
				容器标签 只能放文字 是最小的标签 是行内元素
				
2.css样式
				行内样式
					写在开始标签中的style属性中
					<标签 style="属性:值;属性:值;">
					<标签 style="属性:值;属性:值;"/>
				内嵌样式
					写在head中 style标签内
					
						
					

				外部样式
					写在外部的css文件中 通过link标签引入


​						
​					
​					
3.css样式表优先级
​				行内样式>内嵌样式>外部样式
​				
4.css语法
​				选择器{
​					属性:值；
​					属性:值;
​				}
​				由选择器和声明组成
​			
5.选择器
​				选择标签的方式 不同的选择方式对应不同的选择器
​				标签选择器/元素选择器
​					作用：通过标签选择器选中页面中指定的元素
​					语法：标签名{}
​					例子：p{}
​				ID选择器
​					作用：通过id选择器选中页面中指定唯一的元素
​					语法：#id属性值{}
​					例子：#one{}
​				class选择器/类选择器
​					作用：通过class选择器选中页面中一组元素
​					语法：.class属性值{}
​					例子：.dog{}
​				通配选择器
​					作用：通过通配选择器选中页面中所有的元素
​					语法：*{}
​				CSS基本选择器优先级
​					id选择器>class选择器>元素选择器>通配选择器
​					
6.复合选择器
​				群组选择器
​					作用：同时对几个选择器进行相同的操作
​					语法：选择器1,选择器2,...,选择器n{}
​					注意：选择器与选择器之间用逗号(,)分开 选择器可以是任意选择器
​				后代选择器
​					作用：选中指定祖先元素的指定后代元素
​					语法：选择器1 选择器2 选择器3{}
​					注意：选择器之间用空格隔开 选择器可以是任意选择器
​					

## 1-7  css选择器

1.伪类选择器
				伪类：不是选择一种标签，而是选择标签的一种状态
				:link 未访问过的状态
				:visited 访问过后的状态
				:hover 鼠标滑过的状态
				:active 鼠标点击时的状态
				
2.选择器的权重
				行内样式  01000
				id选择器 00100
				class选择器 伪类选择器 00010
				元素选择器 00001
				通配选择器 00000
				

​			后代选择器的权重值 把每个选择器的权重值相加 但是不会超过id选择器的权重值
​			群组选择器的权重值 自己算自己的 互不影响

3.CSS文字属性
				color 设置字体的颜色
					颜色值
				font-size 设置文字的大小
					数值+px
				font-style 设置文字的样式
					normal 默认值 正常的  一般用于去掉i em的倾斜效果
					italic 倾斜
				font-weight 设置文字的粗细
					normal 默认值 正常的 一般用于去掉b strong h1-h6的加粗效果
					bold 加粗
					100-900 600相当于bold 400相当于normal 
				font-family 设置文字的字体
					可以是一个或多个值  从第一字体开始 直到读取到字体 余下的字体作为备份
					
4.CSS段落属性
				line-height 设置行高
					数值+px
					百分比
					数值
				text-decoraction 文本修饰
					none 默认值 无 没有
					underline 下划线
					overline 上划线
					line-through 删除线
				text-indent 首行缩进
					数值+px
					数值+em
				text-align 文本水平对齐方式
					left 默认值 居左
					center 居中
					right 居右

   5. width 设置宽度
      height 设置高度
         			margin:0 auto; 块元素居中
         			

             		6.css背景属性
             			background-color 背景颜色
             				颜色值
             			background-image 背景图片
             				url(图片路径)
             			background-repeat 背景平铺
             				repeat 默认值 重复
             				no-repeat 不重复
             				repeat-x 沿着x轴重复
             				repeat-y 沿着y轴重复
             			background-position 背景定位
             				方向词  两个方向词确定图片的位置 如果是一个 另一个默认center
             				方向词-left center right top center bottom
             				数值+px
             				数值可以是正整数 0 负整数  第一个值设置水平方向位置 第二个值设置垂直方向位置
             			background 复合属性
             				background:颜色值 url() 平铺 定位;
             				可以是一个或多个值 顺序可以颠倒

## 1-8  css选择器

  ​			h1-h6 p b u i strong em hr br img font table a ul ol li dl dt dd form input textarea 			select option div span
  ​			
  ​						123
  ​					
  ​			选择器：
  ​				基础选择器：id选择器 class选择器 元素选择器 通配选择器
  ​				复合选择器：群组选择器 后代选择器

  ​				
  ​				h2{}
  ​				p{}
  ​				
  ​				*{} 用于重置样式
  ​				伪类选择器：
  ​					:link
  ​					:visited
  ​					:hover
  ​					:active
  ​						
  ​			2.文字属性
  ​				color 颜色
  ​				font-size 大小 
  ​				font-style 字体样式
  ​				font-weight 粗细
  ​				font-family 字体
  ​			
  ​			3.段落属性
  ​				text-align:left|center|right
  ​				text-decoration:underline|overline|line-through|none
  ​				text-indent:2em
  ​				line-height:数值+px;|百分比|数值 
  ​				
  ​			4.背景属性
  ​				background-color 设置背景颜色
  ​					
  ​					123456789
  ​					
  ​				background-image 背景图片
  ​					
  ​					
  ​			5.css列表属性
  ​				list-style-type 设置列表项目符号
  ​					none 无 没有
  ​					disc 小圆点
  ​					circle 小圆圈
  ​					square 小方块
  ​				list-style-image 使用图片作为项目符号
  ​					url(图片路径)
  ​				list-style-position 项目符号位置
  ​					outside 默认值 外边
  ​					inside 里边
  ​				list-style 复合属性
  ​					list-style:type image position;
  ​					可以是一个或多个值 顺序可以换、
  ​			

## 1-9  盒模型		

盒模型：内容 内边距 边框 外边距
​			内容：宽度width 高度height
​			边框：border-color border-width border-style
​				border:color style width;
​				border-方向词 top right bottom left
​				
1.padding内边距
​				padding-top 内容距离上边框的大小
​				padding-left 内容距离左边框的大小
​				padding-right 内容距离右边框的大小
​				padding-bottom 内容距离下边框的大小
​				
​				padding复合属性
​				padding:值; 同时设置四个方向的内边距
​				padding:值1 值2; 值1是上下 值2是左右
​				padding:值1 值2 值3; 值1是上 值2是左右 值3是下
​				padding:值1 值2 值3 值4; 上右下左 顺时针方向
​				

2.margin外边距
				margin-top 上外边距
				margin-left 左外边距
				margin-right 右外边距
				margin-bottom 下外边距
				

​			margin:值; 同时设置四个方向的外边距
​			margin:值1 值2; 值1是上下 值2是左右
​			margin:值1 值2 值3; 值1是上 值2是左右 值3是下
​			margin:值1 值2 值3 值4; 上右下左 顺时针方向
​			
​			水平居中
​			 margin-left:auto; margin-right:auto;
​			 margin:0px auto;

3.盒模型计算
				盒子实际宽度：左边框+左填充+宽度+右填充+右边框
				盒子实际高度：上边框+上填充+高度+下填充+下边框
				
4.初始化盒子属性
				*{
					margin:0px;
					padding:0px;
				}
				
5.float浮动
				作用：浮动属性对页面元素设置水平方向布局的CSS属性
				语法：float:left|right|none

## 1-10	浮动					

1.浮动的副作用
				父级高度塌陷，影响下一个兄弟选择器
				解决方法：
					给父元素设置一个高度
					通过clear属性清除浮动
						left 清除左浮动对元素的影响
						right 清除右浮动对元素的影响
						both 清除两侧浮动对当前元素的影响

## 1-11  html标签

1.标签的属性
		作用：标签的附加信息 对标签的进一步描述
		注意：属性写在开始标签中  与标签名用空格隔开
					 属性与属性值之间用等号链接
					 属性与属性之间用空格隔开
					 属性值用引号引起来--单引号 双引号

2.标题标签
		语法： `<hn></hn>`n是1-6的值
		特点：自带加粗效果 逐级递减 h1最大 h6最小  
					 一个html页面中只能出现一次h1
		属性：align 水平对齐方式
						left 水平居左 默认值
						center 水平居中
						right 水平居右

```html
<h1 align="left">一级标题</h1>
<h2 align="center">二级标题</h2>
<h3 align="right">三级标题</h3>
<h4>四级标题</h4>
<h5>五级标题</h5>
<h6>六级标题</h6>
```

3.水平线标签
		语法：   `<hr />`
属性：color 设置颜色
						英文单词
						十六进制
						rgb()
			width 设置宽度
						数值+px
			size 设置粗细
						1-7 1最细 7最粗
			align 水平对齐方式
						left 居左
						center 默认值 居中
						right 居右

```HTML
<hr color="red" width="800px" size="1" align="left"/>
<hr color="blue" width="1000px" size="7" align="right"/>
```

4.段落标签
	语法：`<p>。。。</p>`
	属性：align 水平对齐方式
						left 居左 默认值
						center 居中
						right 居右

```HTML
<p align="left">毛豆新车网将始终致力于通过大数据</p>
<p align="center">人工智能等先进技术手段</p>
<p align="right">嗨</p>
```

5.文字效果标签
				 加粗标签  `<b> b加粗标签 </b>`
				 下划线标签  `<u> u下划线标签</u>`
				 倾斜标签 `<i>--i倾斜标签</i>`

```HTML
<b>新闻来源:2018-10-30网易体育--b加粗标签</b>
<u>发布时间：00:11:00--u下划线标签</u>
<i>作者：毛毛豆豆雨--i倾斜标签</i>
			
```

6.文本效果标签
		语法： `<font>  </font>`
		属性：color 字体颜色
						颜色值
					size 字体大小
						1-7 1最小 7最大
					face 字体
						字体名称

```HTML
<font color="#b145c3" size="2" face="超体">参与评论人数400人</font>
<i>
	<font color="red" size="7" face="华文彩云">000000</font>
</i>					
```

7.标签的嵌套规则
				讲究对称性--里对里 外对外		

8.强调标签
	`<strong>强调标签</strong>`表现为加粗
	`<em>强调标签</em>` 表现为倾斜
				

				strong em与b i的区别
				strong em 有利于搜索引擎搜索
				b i就是文字的效果

```HTML
<p> 二手车行业领军者！没有中间商赚差价，更多个人卖家、更多个人买家，<strong>瓜子二手车直卖网</strong>，为广大车主提供免费上门评估，二手车帮卖，代办过户等服务, 专业评估师团队,整车全面检测，30天可退，瓜子全程陪同交易！买卖二手车请拨打——<em>400-069-6530</em>。</p>
```

9.图片标签
				语法：`<img/>`
				属性：src 图片路径
					border 图片的边框
						数值+px
					width 图片的宽度
						数值+px
					height 图片的高度
						数值+px
					alt 非正常加载时显示的提示信息
					title 鼠标移动到图片上时显示文字信息
				注意：width与height 只设置一个 另一个会按比例显示

```HTML
<img src="images/q1.gif" border="10px" width="1000px" alt="两个快乐的小人" title="友好提示--两个小人"/>
```

## 1-12  超链接  列表  行内元素 块级元素

1.超链接：指从一个网页的文字或图片指向一个目标的链接关系
			     语法：`<a href="">链接源</a>`	

```html
<a href="http://www.baidu.com">链接源--文字 图片</a>
```

2.超链接属性
				href 链接目标
					路径--网址  相对路径
				target 链接目标的打开方式
					_self 默认值 当前窗口打开
					_blank 在新的窗口打开		

```html
<a href="http://www.baidu.com">百度</a>
<br />
<a href="../day12/note.html">点击跳转上一天的第一个html文件</a>
<br />
<a href="http://www.jd.com" target="_self">京东</a>
<a href="http://www.sina.com" target="_blank">新浪</a>
```

3.超链接的分类
		锚点链接
			创建锚点：`<a name="锚点名"></a>`
			创建链接：`<a href="#锚点名">链接源</a>`
		空链接	`<a href="#"></a>`				
		链接图片  `<a href="图片路径">链接源</a>`

```html
<!--锚点链接-->
创建锚点：<a name="top">123</a>
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
创建链接：<a href="#top">返回顶部</a>

<!--空链接-->
<a href="#">点击跳转</a>
		
<!--图片链接-->
<a href="浮姣.jpg">图片链接</a>
```

​	4.列表
​			定义：是在网页中将相关资料以条目的形式，有序或无序排列形成的表
​			分类：无序列表  有序列表 自定义列表

无序列表
			定义：没有先后顺序的列表是无序列表
			语法：

```html
<ul>
	<li></li>
	...
</ul>
```

属性：type指定列表项目符号类型
			disc 默认值 小圆点
			circle 小圆圈
			 square 小方块

```html
<ul>
	<li>1234</li>
	<li>1234</li>
	<li>1234</li>
</ul>
		
<ul type="disc">
	<li>1111</li>
	<li>1111</li>
	<li>1111</li>
</ul>
		
<ul type="circle">
	<li>2222</li>
	<li>2222</li>
	<li>2222</li>
</ul>
		
<ul type="square">
	<li>3333</li>
	<li>3333</li>
	<li>3333</li>
</ul>
```

有序列表
			定义：有先后顺序的列表是有序列表
			语法：

```html
<ol>
	<li></li>
	...
</ol>
```

属性：type指定列表项目符号类型
						1 以阿拉伯数字为项目符号
							a A 以英文字母为项目符号
							i I 以罗马数字为项目符号
						start规定列表项目符号的起始值
							数值
						reversed 倒序 IE浏览器不兼容

```html
<ol>
	<li>12345</li>
	<li>12345</li>
	<li>12345</li>
</ol>
<!--属性-->
<ol type="1" start="100" reversed="reversed">
	<li>1111</li>
	<li>1111</li>
	<li>1111</li>
</ol>

<ol type="a">
	<li>2222</li>
	<li>2222</li>
	<li>2222</li>
</ol>

<ol type="A">
	<li>3333</li>
	<li>3333</li>
	<li>3333</li>
</ol>

<ol type="i">
	<li>4444</li>
	<li>4444</li>
	<li>4444</li>
	<li>4444</li>
	<li>4444</li>
	<li>4444</li>
</ol>

<ol type="I">
	<li>55555</li>
	<li>55555</li>
	<li>55555</li>
</ol>
```

自定义列表
			定义：带有列表项和列表行注释的列表
			语法：

```html
<dl>
	<dt></dt>
	<dd></dd>
</dl>
```

注意：dt与dd是并列关系  顺序不可以颠倒

```html
<dl>
	<dt>赵丽颖</dt>
	<dd>演员</dd>
	<dd>女明星</dd>
	<dd>圆脸大眼睛</dd>
	<dd>演技在线</dd>
</dl>

<dl>
	<dt>
		<img src="../day01/images/baby.jpg"/>
	</dt>
	<dd>小明星baby</dd>
</dl>
```

5.元素
				定义：将从开始标签到结束标签的所有代码称为元素，元素撑起了整个网页
				分类：块级元素 行内元素 行内块元素
				

				块级元素
				特点：独占一行 可以设置宽度和高度
				常见：h1 h2 h3 h4 h5 h6 p hr ul ol li dl dt dd
				
				行内元素
				特点：在一行显示 不可以宽度和高度
				常见：a i u b em strong font
				
				行内块元素
				特点：在一行显示 可以设置宽度和高度
				常见：img

## 1-13  表格

​	1.表格
​				定义：即是一种可视化交流模式，又是一种组织整理数据的手段
​				语法：

​					table 表格
​					tr 行
​					td 单元格
​					th 标题单元格 自带加粗效果 文字居中
​					
​	2.table属性
​				border 设置表格的边框
​					数值+px
​				width 设置表格的宽度
​					数值+px
​				height 设置表格的高度
​					数值+px
​				align 设置表格的水平对齐方式
​					left 默认值 居左
​					center 居中
​					right 居右
​				bgcolor 设置表格的背景颜色
​					颜色值(英文单词 十六进制 rgb())
​				bordercolor 设置表格的边框颜色
​					颜色值(英文单词 十六进制 rgb())
​				cellspacing 设置表格的间距 单元格与单元格之间的距离 默认值是2px
​				cellpadding 设置表格的边距 内容与边框之间的距离 默认值是1px

```html
<table border="1px" width="1000px" height="500px" align="center" bgcolor="pink" bordercolor="green" cellspacing="0px" cellpadding="0px">
	<tr>
		<th>000</th>
		<th>000</th>
		<th>000</th>
	</tr>
	<tr>
		<td>123</td>
		<td>123</td>
		<td>123</td>
	</tr>
</table>
```

3.tr属性
				bgcolor 设置行的背景颜色
					颜色值
				align 设置行的水平对齐方式
					left 默认值 居左
					center 居中
					right 居右
				valign 设置行的垂直对齐方式
					top 居上
					middle 默认值 居中
					bottom 居下
				height 设置行的高度
					数值+px

```html
<table width="1000px" height="300px" align="center" border="1" bgcolor="pink">
	<tr bgcolor="skyblue" align="left" valign="top" height="200px">
		<td>123</td>
		<td>123</td>
		<td>123</td>
	</tr>
	<tr bgcolor="salmon" align="center" valign="middle">
		<td>123</td>
		<td>123</td>
		<td>123</td>
	</tr>
	<tr bgcolor="blanchedalmond" align="right" valign="bottom">
		<td>123</td>
		<td>123</td>
		<td>123</td>
	</tr>			
</table>
```

4.td/th属性
				width 宽度
					数值+px
				bgcolor 背景颜色
					颜色值
				align 水平对齐方式
					left center right
				valign 垂直对齐方式
					top middle bottom
				colspan 水平合并 跨列合并
					数值
				rowspan 垂直合并 跨行合并
					数值

```html
<table width="900px" height="300px" bgcolor="pink" align="center" border="1">
	<tr bgcolor="skyblue">
		<td bgcolor="gold" align="left" valign="top" width="300px">123</td>
		<td bgcolor="sandybrown" align="center" valign="middle" width="300px">123456</td>
		<td bgcolor="greenyellow" align="right" valign="bottom">123456</td>
	</tr>
	<tr>
		<td colspan="2">123</td>				
		<td rowspan="2">123456</td>
	</tr>
	<tr>
		<td>123</td>
		<td>123456</td>				
	</tr>
</table>
```

5.src路径
				定义：磁盘上查找文件所历经文件夹的路线
				绝对路径：完整描述文件位置的路径
					以盘符为起点
					网址
				相对路径：指目标相对于当前文件的路径
					../ 表示返回一级目录
					../../ 表示返回两级目录

```html
<!--相对路径-->
<img src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" alt="" />
<br />
<!--重点相对路径-->
<img src="../day13/浮姣.jpg" alt="" />
```



## 1-14   表单

1.表单
					作用：用于收集用户输入的信息，并通过浏览器向网站传送
					功能：用于声明整个表单，定义数据收集范围
					语法：
					属性：action 数据提交地址
						target 目标打开方式
							_self 默认值 当前窗口打开
							_blank 新窗口打开

```HTML
<form action="note.html" target="_blank">
	<input type="text" name="a" placeholder="请输用户名"/>
	<input type="password" name="b" placeholder="请输入密码"/>
	<input type="submit" value="登录"/>
</form>
```


​				2.输入框
​					作用：用来输入信息
​					语法：
​					属性：type控制输入框的输入类型
​							text 文本输入框
​							password 密码输入框
​							submit 提交按钮
​						value 初始值
​						placeholder 用于提示输入框的输入内容
​						
​				3.选择框和文件域
​					单选框  
​						name 起名 分组
​						checked 默认选中状态  属性与值一致 可以直接写属性
​						
​					复选框 
​						checked 默认选中状态  属性与值一致 可以直接写属性
​						
​					文件域

```HTML
<form action="">
	性别：<input type="radio" name="sex"/>男
		<input type="radio" name="sex" checked/>女
		<input type="radio" name="sex"/>保密
		<br />
		<br />
	爱好：<input type="checkbox" checked="checked"/>富婆
		<input type="checkbox" />money
		<input type="checkbox" />奔驰car
		<input type="checkbox" />小美女
		<br />
		<br />
	上传头像：<input type="file"/>
</form>
```


4.按钮
					三种按钮：提交按钮 重置按钮 普通按钮
					submit 提交按钮 向服务器发送表单数据
					reset 重置按钮 清空输入数据
					button 普通按钮 
					图片按钮

```HTML
<form action="">
	用户名：<input type="text" placeholder="用户名" />
	<br />
	密码：<input type="password" placeholder="密码" />
	<br />
	<input type="submit" />
	<input type="reset" />
	<input type="button" value="发送验证码"/>
	<!--图片提交按钮-->
	<input type="image" src="../day01/images/images/a_12.jpg" />
</form>
```


​					
5.文本域和下拉列表
​		文本域 
​		属性：rows 行数 相当于高度
​		cols 列数 相当于宽度
​		maxlength 最大字符数
​		name 名字

```html
<!--文本域 textarea-->
个人简介：
<textarea name="text" rows="10" cols="10" maxlength="140" placeholder="最多输入140个字"></textarea>
```

6 下拉列表  							 							 							... 						  
		 属性 select
		name 名字
		option
		value 值  值与内容保持一致
		selected 默认选中状态  属性与值一致 可以直接写属性

```html
<!--下拉列表-->
<select name="select">
	<option value="">请选择</option>
	<option value="344">344</option>
	<option value="344">344</option>
	<option value="344">344</option>
	<option value="123" selected>123</option>
</select>
```

## 1-15  css样式 CSS选择器

1.div span标签
				div 盒子标签  块元素 
				span 盒子标签  行内元素 最小的一个标签 内容只能是文字

```html
<div> 容器标签/盒子标签--装内容 </div>
<span> 容器标签--是最小一个标签 只能放文字 </span>
```

2.CSS样式 

第一种：**行内样式** 在开始的标签中添加style属性

语法：

`<标签名 style="属性:值;属性:值;"></标签名>`
					 
第二种：**内嵌样式** 在head标签中 style标签内

语法：

```html
<head>
	<style>
		标签名 { 属性:值; 属性:值; }
	</style>
</head>
```

第三种：**外部样式** 放在外部的css文件中 通过link标签引入
语法：

```html
<head>
	<link rel="stylesheet" type="text/css" href="css文件路径"/>
</head>
```


3.CSS样式表优先级

>行内样式 > 内嵌样式 > 外部样式

4.css

>层叠样式表  全称Cascading Style Sheets 
>		作用：美化网页 使结构与样式分离

5.CSS基本选择器

>标签选择器/元素选择器
>			作用：选中页面中指定的所有元素
>			语法：标签名{}
>			例子：p{}
>class选择器/类选择器
>			作用：选中页面中一组元素 
>			语法：.class属性值{}
>			例子：.a01{}
>id选择器
>			作用：选中页面中唯一的一个元素
>			语法：#id属性值{}
>			例子：#fy{}
>通配选择器/全局选择器
>			作用：选中页面中所有的元素
>			语法：*{}
>			
>选择器优先级
>			id选择器>class选择器>元素选择器>通配选择器

6.复合型选择器和伪类选择器

>群组选择器/合并选择器
>			作用：同时对几个选择器进行相同的操作
>			语法：选择器1,选择器2,...,选择器n{}
>			例子：.a01,#b03,h4{}
>后代选择器
>			作用：选择作为某标签后代的标签
>			语法：选择器1 选择器2 选择器n{}
>			语法：.box span{}					
>伪类选择器
>			伪类：标签的一种特殊状态
>			:link 未访问过的状态
>			:visited 访问过后的状态
>			:hover 鼠标滑过的状态
>			:active 鼠标点击时的状态
>					
>			注意：a标签具有四种状态 其他标签:hover :active两种状态

7.CSS优先级
>id选择器的权重值 00100
>class选择器的权重值 00010
>标签选择器的权重值 00001
>通配选择器的权重值 00000
>行内样式的权重值01000
>!important表示重要 权重值比行内样式还要高 但不推荐使用
>
>群组选择器的权重值：自己算自己 互不影响
>后代选择器的权重值：把每个选择器的权重值相加
>伪类选择器的权重值：跟class选择器一样 都是00010

## 1-16  文字属性  段落属性

1.CSS文字属性(有继承性，自由有则不会继承)

>font-size 设置文字的大小
>					数值+px

>font-style 设置文字的样式
>		normal 默认值 正常的 一般用于去掉i em的倾斜效果
>		italic 倾斜的

>font-weight 设置文字的粗细
>		normal 默认值 正常的 一般用于去掉b strong h1-h6的加粗效果
>		100-900 400-500相当于normal 600-900相当于bold
>	    bold 加粗

>font-family 设置文字的字体
>			字体名称 可以有多个值 从第一字体读取 直到读取 余下的作为备份

>color 设置文字颜色
>			颜色值（关键词：英文单词；十六进制：  rgb    rgba）

```css
font-size: 16px;

font-style: normal;
font-style: italic;

font-weight: normal;
font-weight: bold;
font-weight: bolder;

font-family: 黑体,"arial black",华文彩云;

color: tomato;
color: #FD9D25;
color: rgb(123,3,4);
color: rgba(123,3,4，0.5);

```


2.CSS段落属性

>text-align 文本的水平对齐方式
>			left 默认值 居左
>			center 居中
>			right 居右

>line-height 行高
>​			数值+px
>​			百分比
>​			数值

>text-decoration 文本修饰
>			none 没有 无 默认值 可以去掉a的下划线
>			underline 下划线
>			overline 上划线
>			line-through 删除线

>text-indent 首行缩进
>		2em

>text-transform  属性控制文本的大小写
>       none  默认
>       capitalize  文本中的每个单词以大写字母开头
>       uppercase  定义仅有大写字母
>       lowercase  定义无大写字母，只有小写字母

```css
line-height: 22px;
line-height: 130%;
line-height: 1.5;

text-align: left ;
text-align: center ;
text-align: right;

text-decoration: underline; 
text-decoration: overline; 
text-decoration: line-through; 
text-decoration: none;

text-indent: 2em;
```
3.列表属性

|----11---|--------22----|
| ==== |  ===== ||
| list-style-type | list-style-image |
list-style-type  设置列表项目符号

快速生成列表的快捷方式： ul>li*5>a[href=#]{哈哈} tab键
（特殊属性放在[]里，内容放在{}里）

```css
list-style-type: disc;  /* 实心圆 */
list-style-type: circle;/* 空心圆 */
list-style-type: square;/* 标实心方块 */
list-style-type: decimal;/* 数字 */
list-style-type: decimal-leading-zero;/* 0开头的数字 */
list-style-type: lower-roman; /* 小写罗马文字 */
list-style-type: lower-alpha; /* 小写英文字母*/
list-style-type: lower-greek; /* 小写希腊字母*/

list-style-image： /*设置列表项目符号为图片*/
list-style-image：url('./xxx.gif')  /*属性使用图像来替换列表项的标记*/

list-style-position  /*设置列表项目符号位置*/

list-style-position:inside;  /*列表项目标记放置在文本以内，且环绕文本根据标记对齐*/
list-style-position:outside;  /*默认值，保持标记位于文本的左侧，列表项目标记放置在文本以外，且环绕文本不根据标记对齐*/
list-style:none;   /*简写方式*/
```
4、表格的属性
>1--边框 `border：1px solid red;`
>2--元素的大小 `width:120px;height:200px;`
>3--背景属性 `background-color:red;background-image:'xxx.jpg`
>4--内容距单元格的距离 `paddimg`
>5--单元格之间的距离 `border-spacing`
>6--元素内容水平对齐方式 `text-align:left|center|right;`
>7--单元格内容垂直对齐方式（写在tr或td上） `vertical-align:left|center|right;`
>8--边框折叠 `border-collapse:collapse;`


> linkhe @import 的区别：
>    1--加载顺序不同，@import先加载HTML文件，再加载css文件；Link是同时加载>HTML和css文件
>    2--引入内容不同：@import只能引入css文件，link还可以引入其他内容
>    3--兼容性问题：@import有兼容性问题（IE5以上支持），link没有兼容性
>    4--@import增加页面的http请求
>    5--JavaScript操作DOM时，只能操作link引入的css文件
​				
​		

​		
​		

​			
​			
​		

​		

# 第二阶段

## 2.1

### 1.1.1 JavaScript发展（熟悉）

作者：Brendan Eich  布兰登.艾奇

时间：1995

作用：

​		初衷：用户和浏览器进行交互（表单验证）

​		目前：万能

​			网页特效
​			服务器（node.js）(http服务，I input/O output , 文件，数据库操作)
​			APP（应用程序：原生「 安卓、ios 」、混合「 安卓 + H5 」、H5【uniapp框架】）
​			桌面应用
​			智能设备

版本：标准组织（ECMA）

​		1997 		1.0	
​		1998		 2.0
​		1999		 3.0		（学习）
​		2015		 6.0		（新语法、ES6、ES2015）
​		每一年 	6月份 	发布新版本 

​	语法提案流程：	ECMA -- tc39 委员会

​	0			展示阶段
​	1			征求意见
​	2			草案阶段	（基本确定）
​	3			候选人		
​	4			定案

### 1.1.2 JavaScript组成（熟悉）

浏览  器环境：

​		**ECMAScript + DOM + BOM**

ECMAScript：基本语法

DOM（document  object model ）：文档（html）对象模型

BOM（browser object model）	 ：浏览器对象模型



网页：一个页面

网站：多个页面组成

应用：实现某种功能



网页组成：

html		结构
css		  	样式
javascript	行为

### 1.1.3 JavaScript 引入

css：行内，嵌入，外部

js：行内，嵌入，外部

行内：

```html
<div onclick=""></div>
```

嵌入:因为代码从上到下执行，所以一般情况 将script 标签写在 body 结束标签之前

```html
<script>
		alert()
</script>
```

外部：

```
>1、创建 XXX.js 文件
>		代码：alert(111);
>		
>2、在html 文件中引入
>	<script src="地址"> 不能写代码 </script>
```



### 1.1.4 编程语言（了解）

定义：programming language）可以简单的理解为一种计算机和人都能识别的语言。

分类：汇编语言、机器语言以及高级语言

发展：低级语言、高级语言和面向对象时代

https://baike.baidu.com/item/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/9845131

### 1.1.5 编程语言和标记语言区别（了解）

标记语言：是一种将文本（Text）以及文本相关的其他信息结合起来，展现出关于文档结构和数据处理细节的电脑文字编码
编程语言：

​				脚本语言： 	不需要编译（javascript）
​				编译型语言：  程序在执行之前需要一个专门的编译过程，把程序编译成 为机器语言的文件			 （c、c++、C# 、java）		

区别：

标记语言不用于向计算机发出指令，常用于格式化和链接（展示）

脚本语言介于标记语言和编程语言之间，脚本语言脚本语言不需要编译，可以直接用，由解释器来负责解释（命令）



### 1.2.1 语句

javascript 中语句包含

​		值、运算符、表达式、关键词、注释 

​		一行命令 称为 一条语句

语句 结束符号  英文的分号  ;



注释：标明代码 作用，调试代码

​			单行 	//

​			多行 	/*   */



### 1.2.2 变量声明

变量：保存值的容器

声明变量：var 

给变量赋值： x = 1;  y = 2;



### 1.2.3 标识符以及命名规则

变量必须以唯一的名称标识

唯一的名称 叫做 标识符号 （ 简单理解：变量 == 标识符 ）

命名规则：

​				以 字母、$ 、_ 开头， 后面可以有数字

​				不能以 数字开头 

​				不能使用 关键词 （var  .......）

编程规则：

​				变量名 见名知意 

​				小驼峰	aaBbbbCaaa 

​				下划线分割 aa_bbbb_caaa

# 

### 1.3Windows 弹框

#### 1.3.1 alert() 消息提示

```js
alert("hello world");
```

#### 1.3.2 prompt() 对话框

```
var 变量名 = prompt(对话框的标题,输入框默认值);

prompt() 有返回值
如果点了 取消：  null
如果点了 确定：  输入框的值
```

#### 1.3.3 confirm() 确认取消框

```
var 变量名=confirm(弹出框的标题);

confirm() 有返回值
如果点击了 取消  false
如果点击了 确认  true
```



### 1.4数据类型

#### 1.4.1 基本数据类型

number 		数字

string			 字符串

boolean		布尔	true / false

undefined	未定义

null				空指针



#### 1.4.2 复杂数据类型

object

数组 array  、对象object、 正则regex  都属于object 数据类型



基本数据类型 与 复杂数据类型区别

**基本**数据类型 是    **值** 的 引用 

**复杂**数据类型区别 **地址**  的引用



#### 1.4.3 typeof操作符 [验证数据类型]

只能验证 基本数据类型 【

​	number 、string 、undefined  boolean 

】

null --- object

Array -- object

Object--object

### 1.5表达式与运算符



#### 1.5.1 表达式



###### 1.5.2 运算符(+,-,*,/,%)

算术操作符	+、 –、 *、 /、 %（取模，求余）
字符串操作符	+ 字符串连接   +=字符串连接符号
逻辑操作符	！取反 、 && 并且 、  ||  或者

一元操作符	++ 、 -- 、  +（一元加）、    -（一元减）

比较操作符	< 、 <= 、 >  、>=、   != 不等于  、 

== 值相同  (不判断类型)、 
=== 值类型都相同（判断类型）、 

 !== 类型不等

赋值操作符	= 、   复合赋值（+=、-=、*=、%=）				

#### 1.5.3 ++ 

前 ++  后 ++ 都可以让 变量 自增 1

**区别： 赋值  、运算  时**

​			**后 ++  先赋值 后运算**

​			 **前 ++  先运算 后赋值**

### 1.6三目运算符

条件 ?  如果正确执行	:  如果错误执行

```javascript
1 > 2 ? console.log("大于") : console.log( "小于" )
```

### 1.7JavaScript中的三大流程

```js
顺序流程： 代码从上至下顺序执行
分支控制： 代码按照条件表达式来选择执行其中一条分支
循环控制： 代码按照条件表达式来重复执行指定的次数
```

#### 1.7.1分支 if

单分支

```js
if( 条件 ){
	如果 条件 正确 true 执行
} 
```

双分支

```js
if(条件 ){
	如果 条件 正确 true 执行
} else{
	如果 条件 错误 false 执行
}
```

多分支

```js
if(条件1){
	如果 条件1 正确 true 执行
}else if(条件2){
	如果 条件2 正确 true 执行
}
...多个 else if 
else{
	如果 条件 1 2 3 4 ... 都不正确 执行
}
```

嵌套分支

```js
if(条件1){
	if(条件2){
		 条件 1 2 都正确 
		 ...
	}else{
		 条件1正确，2 错误
	}
}else{
	如果条件1 错误 
}

```

#### 1.7.2分支 switch ...case 

```js
switch(变量){
	case 值1 :
		逻辑语句
		break;
		
	case  值2 :
		逻辑语句
		break;
		....
		
	default :
		逻辑语句
		break;
		
}


```



#### 1.7.3循环语句

for

```js
for( 起始值;结束条件;步长 ){


}


```

while

```js
起始值

while(结束条件){
	
	步长 /增量 （必须写，不写就是死循环）
}
```

do.. while

```js
起始值 
do{
	步长 /增量 （必须写，不写就是死循环）
}while(结束条件)

```

while 与 do while 区别

```
while 条件不满足 不执行
do while 至少执行一次
```



#### 1.7.4break  continue

```js
 break; // 退出
 continue; // 跳过    
```

# 2.3 函数

### 2.1函数定义

函数是由事件驱动的或者当它被调用时执行的可重复使用的代码块。

简化：函数是 可被调用执行 的 可重复使用 的代码块

### 2.2为什么使用函数

```
1、避免页面一加载就执行程序 (不调用不执行)
2、可以重复执行,便于后期维护,避免代码的冗余
```

```js
 // 封装一个函数 实现 每调用时 在控制台 打印 “你好"        
        function hello(x,y){
            console.log(x,y);
        }
        hello("123","uuuu");
        hello("abcdef","88888");
        
// 封装一个函数 实现 计算 俩个数的和 -- 打印到控制台   
        function sum(a,b){
            console.log( a+b );
        }
        sum( 1,8 );
        sum( 8,9 );
```

```html

//载入外部封装的函数文件
<script src="./1.js"></script>
//引入后   调用
    <script>
        sum(1,4);
        jian(6,3);
        he(3);
        he(5); //实参
    </script>
```



### 2.3声明函数

字面量

```
函数名()  //可以执行
function 函数名(){
		函数体 
}
函数名()  //可以执行
```

函数表达式

```
函数名()  //不可以执行 --报错 函数名 不是一个方法 。因为 变量提升 ，， 函数名 ==undefined
var 函数名=function (){

}
函数名()  //可以执行
```

区别：

​	字面量 		声明/创建 的函数 ，在函数声明前 和后 都可以调用

​	函数表达式	声明/创建 的函数 ，只能在 函数声明/创建后 调用

### 2.4调用函数

```
函数名() 
```

### 2.5系统函数

系统函数也称全局函数，是由JavaScript提供的函数。

```
alert(参数);
console.log(参数1,参数2);


变量名.toString()
String(变量)


```



### 2.6函数参数

```
形参：函数声明时 变量
function 函数名(变量1，变量2){

}

实参：函数调用时 传入的 值

函数名(值1，值2)

```

 1、实参可以为 任何数据类型

 2、形参 实参 一一对应

 3、没有 传实参 undefined

 4、如果 实参 个数 不确定 使用arguments

###  2.6  arguments

```
function fn2(){
	console.log( arguments ); 
	// 接收 所有实参 组成  伪数组[ 类似数组 结构 ]-- 可以使用数组的方法属性 进行操作
}
fn2(2,3,4,5);
fn2(9,10,2,3,5,6,7,100,99);   
fn2(9,10);   
```

### 2.7 `arguments.callee`

```
arguments.callee 当前函数
```

### 2.8  数据类型

```
基本： number、 string、 boolean 、 undefined 、null
引用： object 【 array数组、date日期、regex正则、function函数 】
独一无二：Symbol

判断数据类型
typeof 【  number、 string、 boolean 、 undefined 、function 】
			  其他 判断结果 都是  object

```

```html
   <script>
// 1、实参可以为 任何数据类型
// 2、形参 实参 一一对应
// 3、没有 传实参 undefined

// 声明函数
        function fn1(a,b,c,d,e){
            console.log(a,b,c,d);
        }
//调用函数
        // fn1(11,12,13);

// 4、如果 实参 个数 不确定 怎么接受 所有参数呢？  用arguments
        function fn2(){
            console.log( arguments ); 
// 接收 所有实参 组成  伪数组[ 类似数组 结构 ]-- 可以使用数组的方法属性 进行操作
        }
        fn2(2,3,4,5);
        fn2(9,10,2,3,5,6,7,100,99);   
        fn2(9,10);   
        
       console.log( [22,33,44] ); // 数组
    </script>
```



### 2.9自执行调用

```js
//需求：函数 一旦创建 立即执行

//自执行/ 自调用

(function (){
	console.log("六一快乐-1");
})();

(function (){
	console.log("六一快乐-2");
}());

!function(){
	console.log("六一快乐-3") 
}();

~function(){
	console.log("六一快乐-4") 
}();

+function(){
	console.log("六一快乐-5") 
}();
-function(){
	console.log("六一快乐-6") 
}();
```



### 2.10  事件调用函数

```
onclick 鼠标左键 单击事件；
onmouseover 鼠标在目标元素之上


<button onclick="tan(1,2)">点击</button>
<button onmouseover="tan(2,3)">鼠标放上去</button>


<script>

function tan(a,b){
		alert(a+b);
}

</script>
```



### 2.11  函数覆盖

```javascript
function a(){
	console.log(1);
}
function a(){
	console.log(2);
}

a() // 2

```

### 2.12函数返回值

### 2.13局部变量和全局变量

```
全局变量 ：定义在全局的变量 
局部变量 ：在函数内部 使用 var 声明的变量
```

# 2.4 数组 

### 4.1数组

数组可以用一个单一的名称存放很多值，并且还可以通过引用索引号/下标 来访问这些值。

### 4.2、创建数组俩种方式

字面量

```javascript
var arr=[值1,值2];
```

new Array 方式

```javascript
var arr=new Array()

一个正整数参数：创建长度为 n 的 空数组
多个参数： 数组的每项值
```

### 4.3、数组元素访问及属性

```javascript
数组元素访问：通过 索引/下标 访问
var arr=['a','b','c'];
arr[1];// b

属性：length 数组长度
arr.length

```



### 4.4、遍历数组

###### for 循环

```javascript
 // 商品价格的数组
        var arr=[10,12,13,14,15,16]; 
        //        0  1  2  3  4  5      下标为 奇数的 1 3 5   打 8 折？
        for(var i =0 ;i<arr.length;i++){
            if(i%2 !=0){
                arr[i] = arr[i]*8 /10;
            }
        }
        console.log(arr);
        

// 需求：商品涨价了，涨10倍 -- 数组中每一项 * 10；


            arr[0]= arr[0]*10;
            arr[1]= arr[1]*10;
            arr[2]= arr[2]*10;
            console.log("arr",arr);

        
// 遍历数组 ，循环数组

        for(var i=0;i<arr.length;i++){
            // i == 下标
            // arr[i] 下标对应的值 - 数组的每一项值
            arr[i] = arr[i] * 10 
        }

        console.log("arr",arr);

```

###### forEach 没有返回值

```javascript
 var arr=['a','b','c'];
        //forEach 没有返回值，
       var x= arr.forEach( function(value,index){
            console.log(value); // 数组每一项值
            console.log(index);// 数组的 索引 下标
            return 1; //没作用
        } )
        console.log(x);// undefined

```

###### map 有返回值，返回一个 新数组

```javascript
var arr=['a','b','c'];
        // map 有返回值，返回一个 新数组 
       var x= arr.map( function(value,index){
            console.log("value",value);
            console.log("index",index);
            return 1;
        } )

        console.log(x); //[1,1,1]

```

###### forEach 与map 区别

```javascript
forEach 没有返回值
map 		有返回值	，返回一个新数组

var arr=[1,2,3,4,5,6];
var x= arr.map(function(value,index){
		// value 数组每项值
    // index 数组下标
    return 1
})

x 的值是 [1,1,1,1,1,1]
```

###### for ... in

```javascript
var arr=['a','b','c'];

        for(var i  in  arr ){
           console.log(i);// 数组下标
           console.log( arr[i] );
        }
        
```

###### for ... of	

(2015--es6 -- ie浏览器10以下的都不支持)

```javascript
var arr=['a','b','c'];

        for(var v  of  arr ){
            console.log(v); // 数组每项值
        }
```

### 4.5 数组方法性能

```js
// for 循环的优化

var arr=['a','b','c'];
//基础版
         for(var i =0;i<arr.length;i++){
            console.log( "下标：",i );
            console.log( "值：",arr[i] );
}

// 进阶版
        for(var i=0; arr[i] != null; i++){
            console.log(i);
            console.log(arr[i]);
        }
        
// 最优版 使用 临时变量 存储 数组的长度 

        for(var i =0 ,len=arr.length ;i<len;i++){
            console.log( "下标：",i );
            console.log( "值：",arr[i] );
        }

/*
性能排行 -- 处理速度
for(var i =0 ,len=arr.length ;i<len;i++){}
for(var i =0;i<arr.length;i++){}
for(var i=0; arr[i] != null; i++){}
数组.forEach()
for of
map
for in
        
*/
```



### 4.6数组方法

剪切slice连接join合并concat序sort

判断includes、find、findIndex 、filter、some、every

反转：reverse删除splice是Array.isArray()

开头unshift  shift结尾push  pop各俩个

```js
// 需求： 在arr 数组 开头添加 x ["x","a","b","c","d"]

var arr=["a","b","c","d"];//定义一个数组
//1--------------开头添加-----------------
        arr.unshift("x","y","u");

console.log("unshift",arr);//打印结果

//----------删除开头 第一个元素，并返回-------------
        var w = arr.shift();
        console.log("shift",arr);//打印结果

        console.log("shift删除的是",w);//打印结果
```

```js
  // 在 arr 数组 末尾 添加 d
var arr=["a","b","c"];//定义一个数组
      
// 末尾添加
        arr.push("d");
        console.log("push",arr);

// 末尾删除
        var w=arr.pop();
        console.log("pop",arr);
        console.log("删除的是",w);

```

```js
// 需求：删除 c
var arr=["a","b","c","d","e"];


var w= arr.splice(2,1,"s","b");// 开始下标，删除个数,添加的元素1,添加的元素2

 console.log("splice操作后",arr);
 console.log("删除的是",w);
```

```js
// 剪切   (下标规则:包头 不包尾)
var arr=["a","b","c","d","e"];
//        0   1  2    3   4
var w= arr.slice(1,4);// 开始下标，结束下标

console.log(w);
```

```js
// 将 arr1 和 arr2 合并  返回新数组

var arr3 = arr1.concat(arr2);

        console.log(arr3); 

// arr1=[ ...arr1 , ...arr2 ];//方法2:...为扩展运算符
        // console.log(arr1);
        arr3=[...arr1,...arr2];
        console.log(arr3);
```

```js
// 需求 连接   转为字符串 样式:a-b-c

var arr=["a","b","c"];
                
// join()  连接转为字符串 默认是,连接

console.log( arr.join() );
console.log( arr.join("*") );
```

```js
//需求:数字型数组进行排序
var arr=[100,80,60,90,200];
// 从大到小 [200,100,90,80,60]

// sort()

var x= arr.sort( function(a,b){
    return a-b; // 从小到大
    // return b-a; // 从大到小
} );

console.log("arr",arr); //          改变原数组
console.log("x",x); //              有返回值
```

```js
//arr=['a','d','f','b']-->[b,f,d,a]
var arr=['a','d','f','b'];
//  [b,f,d,a]
        
// 反转 reverse()
arr.reverse();
console.log(arr);
```

```js
//Array.isArray(变量)   判断变量是不是数组 / true /false
var str="abc";
var arr=["a","b","c"];
        

console.log( Array.isArray( str )  );
console.log( Array.isArray( arr )  );

if( Array.isArray(str) ){
    str.push("2")
}else{
   console.log("str不是数组，不能使用人家数组的方法");
}
```

```js
// 创建一个 新数组   将 arr 的每一项值 放入 数组 -- 放入是 判断   新数组  有没有 这个值(数组去重)
var arr=["a","b","c","a","b","d"];
// ["a","b","c","d"];

var x =[];
        
for(var i =0 , len= arr.length ; i<len; i++){
    // 判断 x 数组中 是否 有 a b c a
    if( x.includes( arr[i] ) == false ){
        x.push( arr[i] ); // 如果没有 添加
    }
 }
console.log(x);
```



### 4.6--拓展  小数的问题

```js
var a=0.1;
var b=0.2;

console.log( (a *10000 +b*10000)/10000 ); // 每隔数 乘以10000 计算 / 10000
console.log( (a+b).toFixed(2) ); // 保留 几位小数
```

### 4.7  拓展   变量命名潜规则

```
/*
变量名
i   index        下标/索引
v   val    value  值

res   response     响应  响应/返回值
req   request      请求  请求值

str    string       字符串
num    number       数字
arr    array        数组
obj    object       对象
*/
```

4.8 拓展   多维数组

```js
var arr=[ 1,3,3 ]; //一维数组
var arr2=[ 1,2,[3,4]  ]; // 二维数组

var arr3=[ 1,2,[3,4,[5,[6]]]  ]; // 多维数组


console.log(arr);
console.log( arr2[2][0] );
console.log( arr3[2][2][1][0] );
```



# 2.5 字符串 及对象

 查看判断合并空，切割剪切转大小

### 5.1  String	字符串创建方式

```js
// 用 引号'' "" 包裹的 字符  ---字符串

// 方式1:字面量
var str="abcdef";
console.log(`str`, str);
console.log("str数据类型",typeof str); //string


//方式2 new String() 创建字符串对象
var str2=new String("abcdef");
console.log("str2",str2);
console.log("str2数据类型",typeof str2);//object
```

### 5.2字符串访问及属性

```js
var str="abcdef";

console.log("取下标1的字符", str[1] ); //通过下标/索引访问
console.log("字符串长度", str.length );//字符串长度

for(var i=0;i<str.length;i++){
    console.log( "循环取值",i,str[i] );
}
```

### 5.3字符串方法

查看 ：

charAt() 、charCodeAt() 、	String.fromCharCode()

```js
var str="abcdef";
console.log( str[2] );
// 查看下标 对应的字符
console.log( str.charAt(2) );

// 查看下标对应 字符 的 unicode 编码 0- 65535
console.log(str.charCodeAt(2) ); // a 97  // A 65  // 1 -- 49

// 将 unicode 编码 转为 字符串
console.log( String.fromCharCode(39640) ); // 39640 23703
//   console.log( String.fromCharCode(8) );
```

判断 : 

 includes() 、indexOf()、lastIndexOf()、startsWith()、endsWith()

```js
var str="abcdecf";

// includes 是否包含 true/false
console.log( str.includes('c') );

// indexOf 查看 某个字符 在 字符串中 第一次出现的下标 [ 有 下标，没有 -1] 
console.log(str.indexOf("cx"));

// lastIndexOf 查看 某个字符 在 字符串中 最后一次出现的下标 [ 有 下标，没有 -1] 
console.log( str.lastIndexOf("c") );

// es6 
// startsWith字符串 是否 以 某个字符串开头 true /false
console.log( str.startsWith("abx") );

// endsWith字符串 是否 以 某个字符串结尾 true/false
 console.log( str.endsWith("xxcf") );


//判断一个文件 是否是 html 文件
var fileName = "index.sss.html";
console.log( fileName.endsWith(".html") );
```

合并 :  

 concat() 

```js
var str1="abc";
var str2="def";

// 方法1:+号:   将俩个字符串 合并 为一个新的字符串
var str3= str1 + str2;
console.log(`str3`, str3)

// 方法2:  concat方法
var str4= str1.concat(str2);
console.log(`str4`, str4)
```

空：    

去空格	trim()、  trimStart()、  trimEnd()	

```js
var str="  a b  "; // 2 + 3 + 2 ==  7
console.log( str , str.length);

// 去首尾空格
var str2=str.trim();    
console.log( str2 , str2.length  );


// es6 去首 空格
var str3=str.trimStart();
console.log(str3 , str3.length);

// es6 去尾 空格
var str4=str.trimEnd();
console.log(str4 , str4.length);
```

切割：split()

```js
var str1="abcd"; // ['a','b','c']
var str2="aa,bb,ccc,d";//['aa','bb','ccc','c']
//  split 将一个字符串 以一定的规则 切割 转为数组

console.log( str1.split("") );
console.log( str2.split(",") );
```

剪切:	

substring()、slice()、substr()

```js
var str="abcdef";
//       012345
//取出  bcd
// substring(开始下标,结束下标)  包头不包尾  数字小的是开始下标
//!!!如果有负数 则为 0 ,小的数会在前 如：substring(2,-3) ，则会变更为   substring(0,2)
//  slice(开始下标,结束下标)  包头不包尾
      
console.log( str.substring(4,2) ); 
console.log( str.slice(1,-3) );  // 如果是 负数 倒着数

// substr(开始下标,长度);
console.log( str.substr(1,3) );
```

转大小:

 toUpperCase()、toLowerCase()

```js
var str="aBcd";
// 转大写 toUpperCase()

console.log( str.toUpperCase() );

// 转小写 toLowerCase()
console.log( str.toLowerCase() );


// 验证码
var s= "abCD"; //验证码
var b= "abcd"; //自己输入的

console.log(s.toUpperCase() == b.toUpperCase());

console.log( new Date().toString() )
console.log( new Date().toLocaleString() )
```

### 5.4综合案例:

```js
     //1、反转字符串  
        // var str="高某好帅";
        function fz(str){
          var str2= str.split("").reverse().join("");
             console.log(str2);
        }

        fz("aaxx");

            // console.log(str);
        /*---------------------------------
        // 
        // 字符 切割 split   ['高','某' ...]
        var arr = str.split("");
            console.log(arr);

        // 数组 反转 reverse ['帅' ...]
        var arr2= arr.reverse();
            console.log(arr2);

        // 数组 连接 join
            str = arr2.join("");
            console.log(str);

    -----------------------------------------*/

    // 2、判断一个数 是不是 回文数 
    // 121  12321  
    // 189
    function hw(num){

        var str2= num.toString(); //本身 
        var str3= num.toString().split("").reverse().join("");
        if(str2 == str3){
            console.log(num,"是一个回文数");
        }else{
            console.log(num,"不是一个回文数");
        }

    }

    hw(121);
    hw(668);

    // 3、封装 函数 让字符串 某个 字母 转大写

    //  abcde   abCde

    function upper(str,index){
        var s=""
        for(var i=0;i<str.length;i++){
            if(i == index){
                // console.log( str[i].toUpperCase() );
                s+=str[i].toUpperCase() 
            }else{
                s+=str[i];
            }
        }

        console.log(s);
        
    }

    upper("abcde",3)

```



### 6.1对象

无序的属性的集合

### 6.2声明/创建对象

1、字面量

```
var obj={"属性名":"属性值","属性名2":"属性值"}
```

2、new Object()

```
var obj= new Object()
```

```js
// 对象：无序的属性的集合
//1、字面量
var obj={ "name":"gao" ,"age":18};
        //       { 属性名-字符串 : 属性值-可以为任何数据类型 }
        //             key     : value ,
        //                     : 映射       
        //         "":""   
        //      属性名 唯一
        
        console.log("obj",obj);
        
// 2、new Object();

        var obj2=new Object( {"a":1} );
        console.log(obj2);

// 值为任何数据类型 -属性名唯一
        var obj3={
            "name":"gao",
            "score":[100,10],
            "age":19,
            "flag":true,
            "say":function(){
                console.log("我会说话");
            },
            "name":"王"
        }
        console.log(obj3);
```



### 6.3对象的访问

1、对象.属性名

```
var obj={"name":"gao","age":18};

obj.name
obj.age
```

2、对象["属性名"]   / 对象[变量]

```
var obj={"name":"gao","age":18};

obj["name"];

var x="age";
obj[x]
```

### 6.4对象操作

1、增加

```
对象.新属性名属性值

var obj={"a":1,"b":2};
//添加  c:3
obj.c =3;
```

2、修改

```
对象.属性名= 新值

var obj={"a":1,"b":2};
obj.a=33;
```

3、删除

```
delete 对象.属性名

var obj={"a":1,"b":2};

delete obj.a;
```

4、遍历

```
for ... in

var obj={"a":1,"b":2};
for(var key in obj){
	key 是属性名  a , b 
}
```

```js

var obj={"a":1,"b":2};
//添加  c:3
        console.log(obj);

        obj.c =3;
        console.log(obj);

//修改 a : "呵呵呵"

        obj.a=  "呵呵呵";
        console.log(obj);
// 删除 a
        delete obj.a;
        console.log(obj);

// 查询
        for(var key in obj){
            console.log(key , obj[key]);
        }

// es6
//Object.key(obj)       属性名 key
//Object.values(obj)    属性值 value

        for(var v of Object.values(obj)){
            console.log(v);
        }
        console.log( ["1","a"] );
```

### 6.5 解析url

```js
// 解析 url   node环境下输入url.parse("http://www.baidu.com:80/one?a=1&b=2#cc")
/*
http://www.baidu.com:80/one?a=1&b=2#cc

题目 :1、取出  a=1&b=2  2、 转对象 { a:1,b:2 }


http    协议 protocol（
                 https超文本加密传输协议 ,
                 http 超文本传输协议
                 file 文件协议
                 ftp  文件传输协议
                ）
www.baidu.com     主机名 hostname
www.baidu.com:80  主机  host
80                端口 （http 80 ，https : 443 ,ftp:21）
/one              路径名   pathname
?a=1&b=2          查询      search
a=1&b=2           查询语句   query
#cc               哈希       hash

url /href  http://www.baidu.com:80/one?a=1&b=2#cc

*/


var url="http://www.baidu.com:80/one?a=1&b=2#cc";

// 1、取出  a=1&b=2  
        var arr = url.split("?");
            console.log(arr);

        var str = arr[1];
            console.log(str);
        //----------------- 

        var arr2 = str.split("#");
            console.log(arr2);

        var str2 = arr2[0];
            console.log(str2);

        // 2、 a=1&b=2   -- {"a":1,"b":2}

        var arr3= str2.split("&");
        console.log(arr3);

        // a=0;
        var str3=arr3[0];
        console.log(str3);

        //------

        var arr4= str3.split("=");
        console.log(arr4);

        // --- ["a", "1"] -- {"a":1}
//-------------
        var obj = {};
            obj[ arr4[0]  ] = arr4[1];
        console.log(obj);
//----------------
        // b=2 
        var str5 = arr3[1];
        console.log(str5);

        var arr6 = str5.split("=");
        console.log(arr6);
        // --  ["b", "2"] -- {"b":2}
            obj[ arr6[0] ] = arr6[1];

console.log(obj);
```

```js

var url="http://www.baidu.com:80/one?a=1&b=2#cc";

var arr= url.split("?")[1].split("#")[0].split("&");

//console.log("arr");
var obj={};
for(var i=0;i<arr.length;i++){
   var r= arr[i].split("=")  ;
    
// r ===  ["a",1] -- {"a":1}  key == r[0]  value == r[1]
 
     obj[ r[0] ] = r[1]

}

console.log(obj);

```

6.7  解构赋值  交换变量

```js
        var a=1;
        var b=2;

        /*
        var c;
        c=a;
        a=b;
        b=c;


        console.log( a,b )
        */

        /*
        a= a+b; //3 

        b = a-b; //3 -2 == 1 

        a = a-b; // 3 -1 ==2

        */

        [b,a] = [a,b]; //解构赋值

        console.log(a,b)
```



# 2.6

### 6.1js

​		ECMAscript	 bom(		dom  )



bom 浏览器对象模型  browser object model

​		 window

​						history	 历史记录（前进、后退）

​						location	 url 信息

​						Screen	    设备屏幕

​						Navigator	浏览器的信息

​						document 	文档对象 （dom）

### 6.2  window	

​			1、窗口 （打开、关闭）

```js
//属性：
//浏览器 内容 宽高
		innerWith	、innHeight
		
		document.documentElement.clientWidth
		document.documentElement.clientHeight
		
		document.body.clientWidth
		document.body.clientHeight
		
//浏览器 内容+工具栏+滚动条	宽高
	 	window.outerHeight
	 	window.outerWidth
//方法：
		window.open()
		window.close()
```

2、顶级对象（ bom [dom]、全局变量、全局函数、全局方法 ）

```js
//1--window 顶级对象（ bom [dom]、全局变量、全局函数、全局方法 ）

        var a=123; // 全局变量

        console.log( a  ,window.a);

//2---全局函数
        function b(){
            console.log("b函数")
        }
        b() ; window.b();

// 3---全局方法 -系统函数
        alert("hhhh");
        window.alert("hhhh-2");

//4---dom
        var xDom= document.getElementById("x");
        var xDom2= window.document.getElementById("x");
        console.log(xDom,xDom2);


        console.log( window);
```

```js
// 浏览器 内容 宽 高

console.log(`浏览器 内容 宽`, window.innerWidth);
console.log(`浏览器 内容 高`, window.innerHeight);

// ie 6 7 8 

console.log(`浏览器 内容 宽`, document.documentElement.clientWidth);
console.log(`浏览器 内容 高`, document.documentElement.clientHeight);

// 需要给body 设置样式
console.log(`浏览器 内容 宽`, document.body.clientWidth ); 
console.log(`浏览器 内容 高`, document.body.clientHeight ); 


// 浏览器 内容+工具栏

console.log( "内容+工具栏 高",window.outerHeight );
console.log( "内容+工具栏 宽",window.outerWidth );

```



### 6.3  location	

​	url 信息

​	location.reload()  刷新



### 6.4  history

属性

​			history.length	历史记录条数

方法

​			history.back()	后退一条

​			history.foward()  前进一条

​			history.go()			前进或后退n条   0 刷新  正数 -前进  负数 --后退

html5新增 

​			history.pushState(传递数据,标题,地址)			添加一条历史记录  不会跳转

​			history.replaceState(传递数据,标题,地址)		替换一条历史记录 不会跳转



### 6.5  Screen	    设备屏幕

根据用户的屏幕信息 --做样式优化

### 6.6  Navigator	浏览器的信息

判断用户的设备 （ ios 、安卓、 浏览器） === navigator.userAgent 



### 6.6  定时器

间歇

```js
 //按照指定的周期（以毫秒计）来调用函数或计算表达式。 --间歇
 // 每隔 1秒 在 控制台 输出 你好 
var t= setInterval( function(){

console.log('你好');

} ,2000);


// 清除
clearInterval( t );
```

超时

```js
//在指定的毫秒数后调用函数或计算表达式。 --超时
// 5秒后 在控制台 输出 你好

var t2= setTimeout( function(){
	console.log("你好");
} ,5000 )

// 清除
clearTimeout(t2);
```

### 6.7  拓展    弹窗  --随机数

```js
var x;
//打开新窗口
function openWin(){
              
//  var topVal=  parseInt( Math.random() *(500-0+1)+0  ) ;
//  var leftVal=  parseInt( Math.random() *(500-0+1)+0  ) ;


x=    window.open("http://www.baidu.com","_blank",`width=300,height=200,top=100,left=100`);
      console.log(x);
    
 }

function closeWin(){
    x.close(); 
 }

//2-5  生成随机数
// parseInt( Math.random() *(最大值-最小值+1)+最小值  )
// console.log(  parseInt( Math.random() *(5-2+1)+2  ) )
```

### 6.8 质数

```js
//之前for循环时这样做的
//for(var i=0;i<arr.length;i++){
//   if(){
//     console.log("没有")
//}else{
//     console.log("有")
//}
//}
/*会打印数很多结果能与不能,因为循环数组,会对数组的每一个值进行对比,需要是这个数组有没有?有的话去做什么,没有的话去做什么事情,所以会用到flag开关*/
var arr=[1,2,3,4,5,6,7,8,9];
        // 是否有 能被3整除的   是  否

        var flag=false; 

        for( var i=0;i<arr.length;i++){

            if(arr[i] %3 ==0){
                flag= true;
                break;
            }
        }

        console.log(flag);



        //质数  1 本身

        function zs(num){
            var flag=true; //正确

            for(var i=2;i<num;i++){

                if( num % i == 0 ){
                    flag =false;
                    break;
                }
            }

           flag  ?console.log('是') :console.log("不是");

        }

        zs(7); // 4 /1  4/2  4/3 4/4
```

### 6.9  检验数据类型的方法

```js
        console.log( typeof 1 );
        console.log( typeof "aa" );
        console.log( typeof true );
        console.log( typeof undefined );

        console.log(typeof function(){} );
        console.log("-- typeof  只能验证基本数据类型 和 function---");


        console.log(typeof null );
        console.log(typeof [''] );
        console.log(typeof {"name":"gao"} );


        console.log("--- instanceof  不能验证 基本数据类型 ---")
        console.log( [] instanceof Array  );
        console.log( {} instanceof Object  );
        console.log( new Date() instanceof Date );
        console.log( /1/ instanceof RegExp );
        console.log( function(){} instanceof Function );


console.log( 1 instanceof Number ); //false 

// ---  Object.prototype.toString.call()    完美

console.log(  Object.prototype.toString.call( "aaaa" ).slice(8,-1) ); 
console.log(  Object.prototype.toString.call( [] ).substring(8, Object.prototype.toString.call( [] ).length -1 ) );
console.log(  Object.prototype.toString.call( null ) );
```

### 6.10  声明常量  冻结对象

```js
// 变量
        var a=124;

            a=456;

// es6 
// const 声明的是常量 ， 一旦声明不能改变
        const PI= 3.14; //值不能变
            //   PI=9;
        console.log(PI);


        const obj ={ "name" :"gao"}; // 地址 不变;

            //  obj ={} ; //变地址
            //  obj.name="wang";
             console.log(obj);

            //  console.log( {}  == {} );

//冻结对象
            var obj2 = Object.freeze({"name":"gao"});
 

            console.log(obj2);
```

### 6.11  深拷贝  浅拷贝

```js
/*
            var a=1;
            var b;

            b=a; // 1

            a=2; //2 
            console.log( a, b )
*/

        var obj={ "name":"gao","age":18 };

        var obj2;

        obj2= obj;

        obj.name="王";

        console.log( obj, obj2 );
        //  obj { "name":"王","age":18 };
        //  obj2 { }


// 深  浅 拷贝 -- 对象
// 浅 ：直接 = 赋值
// 深 ： 1、创建新对象 。 依次赋值

        var x ={"sex":"男","height":190};

        // var y;
            // y=x; //浅 拷贝
          //验证 
        //x.name="女"  console.log(x,y); //都变 ，互相影响
          
        var y ={};
        /*
            y.sex = x.sex;
            y.height =x.height;
        */
//如果对象有很多项呢??遍历对象
        for(var key in x){
            y[ key ] =x [key];
        }

        console.log( x ,y );

        // 验证
        x.sex="女";
         console.log( x ,y );
```

### 6.12  递归函数--斐波那契

```js
// 递归：函数 -- 内部调用自己 -- 要终止条件
        // 1+100 

        function a(num){
            if(num == 1){
                return 1;
            }

            return num + a( num -1); 
        }

        //  console.log( a(100) );

        // n!
        function b(num){
            if(num ==1){
                return 1;
            }

            return num * b(num-1);
        }

        console.log(   b(6)  );

// 斐波那契 
        //F[n]=F[n-1]+F[n-2](n>=2,F[0]=0,F[1]=1)

        // 0、1、1、2、3、5、8、13、21、34

        function F(n){
            if(n == 0 ){
                return 0;
            }
            if( n == 1){
                return 1;
            }

            return F( n-1 ) + F(n-2);

        }

     console.log(   F(7) ); // 5
```

### 6.13  循环节点

```js
 var arr=["2","3","4"];
        var str=""
        for(var i=0;i<arr.length;i++){
            str +=`
                <li> ${arr[i]} </li>
            `
        }

        console.log(str);

        // <li>2</li>
        //<li>3</li>
        //<li>4</li>
```

```js
   var arr=[
        {"name":"gao","age":19},
        {"name":"wang","age":19},
        {"name":"li","age":12}
    ]

        // console.log(arr)
        // gao wang li

        for( var i =0;i<arr.length;i++){
            console.log( arr[i].name  ,arr[i].age )
        }

        var table=[
            { "id":1,"name":"小一","age":19,"height":180},
            { "id":2,"name":"小一1","age":19,"height":180},
            { "id":3,"name":"小一3","age":19,"height":180},
            { "id":4,"name":"小一3","age":19,"height":180},

        ]

        // table.splice(1,1);

        table[1].name="小巴";

        var s=""
        for(var i=0;i<table.length;i++){
            s+=`
            <tr>
                <td>${table[i].id }</td>
                <td>${table[i].name }</td>
                <td>${table[i].age }</td>
                <td>${table[i].height }</td>
            </tr>
            `
        }
        console.log(s);

        console.log( table );
```



# 2.7 DOM 

### 7.1文档对象模型

**DOM**(document object model)  作用  
	通过可编程的对象模型，JavaScript 获得了足够的能力来创建动态的 HTML。
	JavaScript 能够改变页面中的所有 HTML 元素
	JavaScript 能够改变页面中的所有 HTML 属性
	JavaScript 能够改变页面中的所有 CSS 样式
	JavaScript 能够对页面中的所有事件做出反应
	
	静态：没有
	动态：有数据交互（ajax）
	
	JavaScript是让静态HTML文档“动起来”的脚本程序语言。
	
	“动起来”有两层意思：
		其一，让页面中的标签元素能够实现动态、动画
		其二，能够响应用户的操作、响应事件

###  7.2DOM树形结构

```
document (HTMLDocument)  
|  
| --> html (HTMLHtmlElement)          
	|       
	| --> head (HtmlHeadElement)          
	|       	|          
	|       	| --> title (HtmlTitleElement)          
	|                | --> text: "A super simple title!"          
	|          
	| --> body (HtmlBodyElement)          
	|       |          
	|       | --> h1 (HTMLHeadingElement)          
	|              | --> text: "A super simple web page!"
```




### 7.3节点类型(了解)

节点类型:文档中的内容，包括标签、文本、注释、标签属性等
		文档节点：整个文档
		元素节点：每个 HTML 标签
		文本节点：包含在 HTML 元素中的文本
		属性节点：每一个 HTML 属性
		注释节点：注释

```
var boxs=document.querySelector("body").childNodes;
for(var i<0;i<boxs.length;i++){
	console.log(boxs[i].nodeType)
}

nodeType 属性返回节点的类型。nodeType 是只读的。
比较重要的节点类型有：
元素类型	NodeType
元素		1
属性		2
文本		3
注释		8
文档		9
```

| 方法      |                   说明                   |
| :-------- | :--------------------------------------: |
| nodeName  |  返回一个字符串，其内容是给定节点的名字  |
| nodeType  | 返回一个整数，这个数值代表给定节点的类型 |
| nodeValue |           返回给定节点的当前值           |

### 7.4节点关系

​		父子关系 
​		兄弟关系 
​		祖孙关系 
​	节点树中的节点彼此拥有层级关系。
​		父（parent）、子（child）和同胞（sibling）等术语用于描述这些关系。
​		父节点拥有子节点。同级的子节点被称为同胞（兄弟或姐妹）。
​		在节点树中，顶端节点被称为根（root）
​		每个节点都有父节点、除了根（它没有父节点）
​		一个节点可拥有任意数量的子
​		同胞是拥有相同父节点的节点

| 方法            |                        说明                        |
| :-------------- | :------------------------------------------------: |
| childNodes      | 返回一个数组，这个数组有给定的元素节点的子节点构成 |
| firstChild      |                  返回第一个子节点                  |
| lastChild       |                 返回最后一个子节点                 |
| parentNode      |              返回一个给定节点的父节点              |
| nextSibling     |           返回一个给定节点的下一个子节点           |
| previousSibling |           返回一个给定节点的上一个子节点           |

### 7.5文档写入

```js
document.write("<h1>sss</h1>");
document.writeln("<h1>8888</h1>");
```

### 7.6.1查找元素6种方法

document.getElementById();返回对拥有指定 id 的第一个对象的引用。

document.querySelector();返回文档中匹配指定的CSS选择器的**第一元素**

document.querySelectorAll();HTML5中引入的新方法，返回文档中匹配的CSS选择器的**所有元素节点列表**

document.getElementsByTagName();返回带有指定标签名的对象集合。

document.getElementsByClassName();返回文档中所有指定类名的元素集合，作为 NodeList 对象。

document.getElementsByName();返回带有指定名称的对象集合。	

```js
// id
var one= document.getElementById("a"); // 对象
console.log(one );
// console.log( typeof one ,one instanceof Object);

//class
var two= document.getElementsByClassName("b"); // 伪数组
console.log(two);
// console.log( Object.prototype.toString.call(two) );

//标签
var three= document.getElementsByTagName("div");// 伪数组
console.log(three);
// name
var four= document.getElementsByName("c");// 伪数组
console.log( four );

// 根据选择器 获取一个 

var five=document.querySelector("div"); // 只能获得 第一个
console.log(five);

// 根据选择器 获取所有 [] 伪数组
var six= document.querySelectorAll("#a"); // 获取所有匹配的元素 []伪数组
console.log(six)
```

​		

### 7.7操作元素内容5种方法

innerHTML:设置或获取位于对象起始和结束标签内的 HTML 
innerText:设置或获取位于对象起始和结束标签内的文本 
outerHTML:设置或获取对象及其内容的HTML形式 
outerText:设置(包括标签)或获取(不包括标签)对象的文本 
value:input,select,textarea,checkbox,radio内容的获取和设置

```js
var oneDom=document.getElementById("one");//对象
            // oneDom.innerHTML ="456";   
            // oneDom.innerHTML="<h1>5555</h1>";

            // oneDom.innerText="5555";
            // oneDom.innerText="<h1>5555</h1>";


            // oneDom.outerHTML="8888";
            // oneDom.outerHTML="<h1>8888</h1>";

            // oneDom.outerText="888"
           // oneDom.outerText="<h1>888</h1>"


var inputDom= document.getElementById("two")
console.log( inputDom.value ); // .value 获取 或设置 表单的值
inputDom.value=123;
```

查找元素的区别

```js
         var oneDom=document.getElementById("one");
            oneDom.innerText="哈哈哈哈哈";
//------
        var boxDom=document.getElementsByTagName("div");
        console.log(boxDom);
        boxDom[0].innerText="哈哈哈";
//------
        var liDom=document.getElementsByClassName("two");
            // console.log(liDom)
            // liDom[0].innerText="0"
            // liDom[1].innerText="1"
            // liDom[2].innerText="2"
            // liDom[3].innerText="3"

            for(var i=0;i<liDom.length;i++){
                liDom[i].innerText=i;
            }
```

### 7.8操作元素的行内样式

obj.style.property="新样式";

​		property指color;font-size;background等

```js
//<div id="one" >888</div>

var oneDom=document.getElementById("one");

oneDom.style.width="100px";
oneDom.style.height="100px";
oneDom.style.border="1px solid red";
oneDom.style.marginLeft="100px";
```

### 7.9操作元素属性俩种方法

obj.attr="新属性值";attr指属性名,如src;id;name,value,type,href,rel,type,alt,width,heigth等
obj.属性名 = "新属性值";
		
obj.hasAttribute()	如果元素中存在指定的属性返回 true，否则返回false。

obj.setAttribute();//设置属性	(属性名， 属性值1   属性值2)
obj.getAttribute();//获取属性
obj.removeAttribute();//删除属性

```js
var imgDom=document.getElementById("one");
// 1、元素对象.属性名
            // console.log( imgDom.alt)
            // imgDom.alt="888888"

// 2、 获取：元素对象.getAttribute("属性名") 
//     设置：元素对象.setAttribute("属性名","值")
//     移除：元素对象.removeAttribute("属性名") 
//  是否存在：元素对象.hasAttribute("属性名") 

console.log( imgDom.getAttribute("title") );
imgDom.setAttribute("title","8888888888");
imgDom.removeAttribute("class");
console.log( imgDom.hasAttribute("class") );
```



### 7.10  class 属性操作

```js
//<div id="one" class="">222</div>

var boxDom= document.getElementById("one");
// 获取class 属性 元素对象.classList
// 添加class 属性 元素对象.classList.add(类名1,类名2)
// 移除class 属性 元素对象.classList.remove(类名1,类名2)
boxDom.classList.add("box","boxText");
//boxDom.classList.remove("box","boxText");
```



### 7.11  js将伪数组变成真数组的三种方法

 

js将伪数组变成真数组的三种方法

1、 [].slice.call(obj) 这个等于Array.prototype.slice.call(obj)

```js
var newArr=[].slice.call(obj)
```

2. Array.form(obj),ES6的新语法

   ```js
   var newArr=Array.from(obj)
   ```

3. 使用扩展运算符,也是ES6的语法

   ```js
   var newArr= [...obj]
   ```

   

### 7.12获取元素标签名

比如通过id获取的一个元素节点, 想知道这个节点是什么什么标签, 这时可以通过: **Node.prototype.nodeName**属性 或 **Element.prototype.tagName**属性获取.

```js
// HTML 
// <div id="app">Hello</div>

document.getElementById("app").tagName;
// "DIV"

document.querySelector("#app").nodeName;
// "DIV"
```

**注意:** tagName和nodeName返回的结果是完全一样的, 只是tagName在Element接口上, nodeName在Node接口上

### 7.13  点赞案例

```html
<button onclick="zan()" id="btn">👍0</button>

<script>
var i=0;

function zan(){
      console.log("点了");
     var btnDom=document.getElementById("btn");
     // document.querySelector("#btn")
    // console.log(btnDom);
    i++;
    btnDom.innerText="👍"+ i;
    }
 </script>
```

### 7.14  !!!!案例   隔行变色

```html
   <button onclick="opens()">开启隔行变色</button>
    <button onclick="closes()">关闭隔行变色</button>

    <table border="1">
        <thead>
            <tr>
                <th>姓名</th>
                <th>年龄</th>
            </tr>
        </thead>
        <tbody id="tbody">
            <tr>
                <td>gg</td>
                <td>18</td>
            </tr>

            <tr >
                <td>gg2</td>
                <td>18</td>
            </tr>

            <tr>
                <td>gg3</td>
                <td>18</td>
            </tr>
            <tr >
                <td>gg4</td>
                <td>18</td>
            </tr>
            <tr>
                <td>gg5</td>
                <td>18</td>
            </tr>
            <tr >
                <td>gg6</td>
                <td>18</td>
            </tr>
        </tbody>
    </table>

    <script>
         var trsDom=document.querySelectorAll("#tbody > tr");
         var trsArr=Array.from(trsDom);

        function opens(){
            console.log("点击了 开启 按钮");
            //var trsDom=document.querySelectorAll("#tbody > tr");
            //var trsArr=Array.from(trsDom);
            // console.log(trsDom);
            // console.log(trsArr);
            for(var i =0;i<trsArr.length;i++){
                if(i%2!==0){
                    // console.log(i);
                    trsArr[i].classList.add("trs");
                }
            }

        }

        function closes(){
            console.log("点击了 关闭 按钮");
            //var trsDom=document.querySelectorAll("#tbody > tr");
            //var trsArr=Array.from(trsDom);
            // console.log(trsDom);
            // console.log(trsArr);
            for(var i =0;i<trsArr.length;i++){
                if(i%2!==0){
                    // console.log(i);
                    trsArr[i].classList.remove("trs");
                }
            }
        }
    </script>
```

### 7.15  事件绑定的三种 方法

```js
<button onclick="btn1()" onclick="btnx()">点击1</button>
    <button id="btn2">点击2</button>
    <button id="btn3">点击3</button>

    <script>
//1----------------------        
        function btn1(){
            console.log("点击了按钮1");
            console.log(this);// 
        }

        // function btnx(){
        //     console.log("点击了按钮1-x");
        // }
//2--------------------------
        var btn2Dom=document.getElementById("btn2");
            btn2Dom.onclick=function(){
                console.log("点击了按钮2");
                console.log(this);// 
            }

            // btn2Dom.onclick=function(){
            //     console.log("点击了按钮2-x");
            // }

//3------------------------------
        var btn3Dom=document.getElementById("btn3");
            // 添加事件监听
            btn3Dom.addEventListener("click",function(){
                console.log("点击了按钮3")
                console.log(this);// 
            }) 

            // btn3Dom.addEventListener("click",function(){
            //     console.log("点击了按钮3-x")
            // }) 


            /*
                区别：
            一、
                1、相同事件类型 ，只执行 第一个
                2、相同事件类型 ，执行最后一个
                3、相同事件类型 ，都执行

            二、 1、this -- window
                2、this -- 当前发生事件的 dom 对象
                3、this -- 当前发生事件的 dom 对象


            */
```

### 7.16  this

```js
// this --函数中才有- -->对象
// 普通函数 this 指向 调用时的对象 （会变）-- . 前面是谁 就是谁 ｜  没有. === window
// 箭头函数 this 指向 声明时的对象  （不变）


        function a(){
            console.log(this);//
        }

        a();

        // window.a();

        var obj={
            "name":"aaaa",
            "say":function(){
                console.log("hhhhh");
                console.log(this);//
            }
        }
        obj.say();
        
        var x= obj.say;
        x();
```

7.17

# 2.8 

### 8.1节点属性

1.childNodes  返回包含被选节点的子节点的 NodeList

​		如果选定的节点没有子节点，则该属性返回不包含节点的 NodeList。

​		如需循环子节点列表，使用 nextSibling 属性，要比使用父对象的 childNodes 列表效率更高。

2.firstChild 	返回被选节点的第一个子节点,如果选定的节点没有子节点，则该属性返回 NULL。 

​			获取指定元素的第一个子节点，可以是元素节点，也可以是文本节点。

3.lastChild 	可返回文档的最后一个子节点。

4.ownerDocument 可返回某元素的根元素。

5.parentNode 	可返回某节点的父节点。如果指定的节点没有父节点则返回 null。

6.previousSibling 可返回某节点之前紧跟的节点（处于同一树层级）

​		返回节点以节点对象返回。注意：如果没有此节点，那么该属性返回 null。

7.nextSibling 	 可返回某个元素之后紧跟的节点（处于同一树层级中）。

​		返回节点以节点对象返回。注意： 如果元素紧跟后面没有节点则返回 null.

```html
<ul id="ul">
        <li>11</li>
        <li>22</li>
        <li id="a">33</li>
        <li>44</li>
    </ul>
```

```js
var ulDom=document.getElementById("ul");
     console.log("ul的所有子节点-元素+文本",ulDom.childNodes);
     console.log("ul的所有子元素节点", ulDom.children)
     console.log("ul下第一个子节点",ulDom.firstChild);
     console.log("ul下第一个子元素节点",ulDom.firstElementChild)
     console.log("ul下最后一个子节点",ulDom.lastChild);
     console.log("ul下最后一个子元素节点",ulDom.lastElementChild)
     console.log("-----------------------")
     var aLiDom= document.getElementById("a");
     console.log("上一个兄弟节点",aLiDom.previousSibling);
     console.log("上一个兄弟元素 节点",aLiDom.previousElementSibling)
     console.log("下一个兄弟节点",aLiDom.nextSibling);
     console.log("下一个兄弟元素 节点",aLiDom.nextElementSibling)
     console.log("父节点",aLiDom.parentNode );
     console.log("父节点",aLiDom.parentElement );
```



### 8.2元素属性

1.children  属性返回元素的子元素的集合，是一个 HTMLCollection 对象。只返回元素节点

2.parentElement 	可返回某节点的父节点。如果指定的节点没有父节点则返回 null 。

3.firstElementChild 返回被选节点的第一个子元素节点,如果选定的节点没有子元素节点，则该属性返回 NULL。获取指定元素的第一个子元素节点，不会检测到文本节点。

4.lastElementChild  返回被选节点的最后一个子元素节点,如果选定的节点没有子元素节点，则该属性返回 NULL。

5.previousElementNode 可返回某节点之后紧跟的元素节点（处于同一树层级）注意：如果没有此元素节点，那么该属性返回 null。

6.nextElementNode  可返回某节点之前紧跟的元素节点（处于同一树层级）注意：如果没有此元素节点，那么该属性返回 null。



### 8.3节点操作方法 

| 方法                           |                          说明                          |
| :----------------------------- | :----------------------------------------------------: |
| createElement(element)         |                    创建一个新的节点                    |
| createTextNode()               |           创建一个包含着给定文本的新文本节点           |
| appendChild()                  |   指定节点的最后一个子节点列表之后添加一个新的子节点   |
| 父节点.append() 可以传入多个   |                                                        |
| insertBefore()                 | 将一个给定节点插入到一个给定元素节点的给定子节点的前面 |
| removeChild(要删除的元素)      |             从一个给定元素中删除一个子节点             |
| replaceChild(新节点，老节点)   |    把一个给定父元素里的一个子节点替换为另外一个节点    |
| 自身节点.remove() 将本身移除掉 |                                                        |



#### 8.3.1创建

​	document.createElement()通过指定名称创建一个元素
​	document.createTextNode()可创建文本节点。

```js
var h1Dom= document.createElement("h1");
        console.log("创建元素节点",h1Dom);

var textDom=document.createTextNode("h1");
        console.log("创建文本节点",textDom);
```



#### 8.3.2添加

​	父节点.appendChild() 节点的子节点列表的末尾添加新的子节点。

   父节点.append() 可以传入多个

​	父节点.insertBefore(插入的新节点，原节点)   在已有的子节点前插入一个新的子节点

```html
<div id="box">
    <h1>123</h1>
</div>
```

```js
// 创建 h2 元素标签 对象
var h2Dom=document.createElement("h2");
    h2Dom.innerText=456;

// 创建 h3 元素标签 对象 
var h3Dom=document.createElement("h3");
    h3Dom.innerText=789;

// 获取div -父元素
var boxDom=document.getElementById("box");

// 父元素.appendChild(子元素) 在父元素内部 末尾 追加一个节点
boxDom.appendChild(h2Dom);
boxDom.appendChild(h3Dom);

// 在父元素内部 末尾 追加多个节点
// boxDom.append(h2Dom,h3Dom)
```

```js
// 在父元素 内部 某个元素 之前添加
// 父元素.insertBefore(新元素，目标元素)

// 在 div 内部 h1 之前 添加 <p>哈哈哈哈</p>
// 1、创建 p 
var pDom=document.createElement("p");
// 2、p 的内容 
    pDom.innerText="哈哈哈哈";
    pDom.style.color="red";
// 3、 获取div
var divDom=document.getElementById("box");
// 4、获取h1
var h1Dom= divDom.firstElementChild;
// 5、将 p 添加到 div内 h1之前
divDom.insertBefore( pDom,h1Dom ); 
```



#### 8.3.3替换

​	父节点.replaceChild(新节点，老节点) 

```html
<div id="box">
    <h1 id="h1">123</h1>
</div>
```

​	

```js
// 将 h1 标签 替换为 p 标签

//1、 创建p标签
var pDom=document.createElement("p");
//2、 p标签内容 == h1 内容
//2-1、获取 h1 标签
var h1Dom=document.getElementById("h1");
//2-2、获取 h1 的内容
var h1Text=h1Dom.innerText;
//2-3、p标签内容 = h1 内容
pDom.innerText= h1Text;

//3、替换 父元素.replaceChild(新节点，老节点) 	
//3-1、获取 父元素 div
var divDom=document.getElementById("box");
    divDom.replaceChild(pDom,h1Dom);
```



#### 8.3.4删除

​	父节点.removeChild(要删除的元素)	 方法可从父节点下的子节点列表中删除某个节点

​	自身节点.remove() 将本身移除掉

```html
<div id="box">
    <h1 id="h1">123</h1>
    <h2 id="h2">456</h2>
</div>
```

```js
//一 、父节点.removeChild(要删除的元素)	

// 1、获取  父节点 div
var divDom=document.getElementById("box");
// 2、获取  要删除的元素
var h1Dom=document.getElementById("h1");
// 3、删除
divDom.removeChild(h1Dom)
```

```js
// 二、自身节点.remove() 将本身移除掉

// 1、获取  要删除的元素
var h2Dom=document.getElementById("h2");
// 2、删除
h2Dom.remove();
```



#### 8.3.5克隆

DOM1.cloneNode(boolean) : 复制一个节点
true：深复制，复制节点及其整个子节点树
false : 浅复制，只复制节点本身。默认是false

```html
<div id="box">
    <h1 id="h1">123</h1>
</div>
```

```js
// 克隆 h1 -- 添加到 box 内部末尾
// 1、获取 h1
var h1Dom=document.getElementById("h1");
// 2、克隆 DOM1.cloneNode(boolean) 
// true：深复制，复制节点及其整个子节点树
// false : 浅复制，只复制节点本身。默认是false
var ch1Dom=h1Dom.cloneNode(true);
// console.log(ch1Dom)
//3、将 克隆 得到的元素 放入 box 内部末尾
//3-1、获取 box
var divDom=document.getElementById("box");
//3-2、父节点.appendChild(克隆得到的元素)
    divDom.appendChild(ch1Dom);
```

### 8.3.6    !!!!案例--在一个文本框创建输入个数的按钮

```html
<style>
        #btnBox{
            width: 500px;
            height: 500px;
            border: 1px solid red;
        }
    </style>
</head>
<body>
   
    <div id="box">
        <span>创建</span>
            <input type="text" id="num" autofocus>
        <span>个 按钮</span>
        <button id="start">开始创建</button>
    </div>

    <div id="btnBox">
  </div>
```

```js
// 1、获取 开始创建按钮
var startDom=document.getElementById("start")
// 2、给 开始创建按钮 绑定 点击事件
    startDom.onclick=function(){
        // ---- 清空 div
        var btnBoxDom=document.getElementById("btnBox");
        btnBoxDom.innerText=""
         // 3、事件内 获取 input 框输入的 值
        var inputDom=document.getElementById("num");
        //  转数字类型
        var num= parseInt( inputDom.value );
        // 判断输入的是不是数字
        if(num){
            console.log("输入的是数字",num);
            // 4、创建 num 个 button
            for(var i=0;i<num;i++){
                // 创建的button 按钮
                var btnDom=document.createElement("button");
                    btnDom.innerText= "按钮" + (i+1);
                    // console.log(btnDom);
             
                // 5、分别 添加到 id="btnbox" 的div 中
                // var btnBoxDom=document.getElementById("btnBox");
                btnBoxDom.appendChild(btnDom);
            }
             
        }else{
            alert("必须输入数字");
            inputDom.value=""; //清空输入框
            inputDom.focus(); // input框获得鼠标焦点
        }
        
           
    }
```



### 8.4  偏移量

元素的可见大小由其高度、宽度决定，包括所有内边距、滚动条和边框的大小（注意，不包括外边距）。

**offsetHeight**：元素在垂直方向上占用的空间大小，以像素计。

​		包括元素的高度、水平滚动条的高度、上边框高度和下边框的高度。

**offsetWidth**：元素在水平方向上占用的空间大小，以像素计。

​		包括元素的宽度、垂直滚动条的宽度、左边框宽度和右边框宽度。

**offsetLeft**：元素的左外边框至包含元素的左内边框之间的像素距离。

**offsetTop**：元素的上外边框至包含元素的上内边框之间的像素距离。

```html
<style>
        *{
            margin: 0;
            padding: 0;
        }
        #box{
            width: 200px;
            height: 100px;
            border: 1px solid black;
            padding: 10px;
            margin: 100px;
        }
    </style>
</head>
<body>
    <div id="box">1</div>
```

```js
var divDom=document.getElementById("box");
console.log("左边框--> body左边距离",divDom.offsetLeft);
console.log("上边框--> body上边距离",divDom.offsetTop);
console.log("内容+内边距+边框 水平方向上占用的空间大小",divDom.offsetWidth);
console.log("内容+内边距+边框  垂直方向上占用的空间大小",divDom.offsetHeight);
```



### 8.5.客户/可视区大小

元素的客户区大小指的是元素内容及其内边距所占据的空间大小。

**clientWidth**：元素内容区宽度加上左右内边距宽度。

**clientHeight**：元素内容区高度加上上下内边距高度。

```html
<style>
        *{
            margin: 0;
            padding: 0;
        }

        #box{ 
            width: 200px;
            height: 100px;
            border: 3px solid black;
            padding: 10px;
            margin: 100px;
        }

    </style>
</head>
<body>
    <div id="box">1</div>
```

```js
var divDom= document.getElementById("box");
console.log("div 内容+内边距 宽",divDom.clientWidth );
console.log("div 内容+内边距 高",divDom.clientHeight)
console.log( "body 可视区域 宽",document.documentElement.clientWidth );
console.log( "body 可视区域 高",document.documentElement.clientHeight );
```



### 8.6 .滚动大小

**scrollHeight**：在没有滚动条的情况下，元素内容的总高度。（包括隐藏的高度）

**scrollWidth**：在没有滚动条的情况下，元素内容的总宽度。（包括隐藏的宽度）

**scrollLeft**：被隐藏在内容区域左侧的像素数。

**scrollTop**：被隐藏在内容区域上方的像素数。

因此，带有垂直滚动条的页面的总高度就是document.documentElement.scrollHeight。

对于不包含滚动条的页面而言，scrollWidth和scrollHeight与clientWidth和clientHeight之间的关系并不十分清晰，浏览器之间的差异很大。

Firefox中这两组属性始终都是相等的，都代表文档内容区域尺寸，而非视口尺寸；

Opera、Safari 3.1及更高版本、Chrome中这两组属性是有差别的，其中scrollWidth和scrollHeight等于视口大小，而clientWidth和clientHeight等于文档内容区域大小；

IE(标准模式)中，scrollWidth和scrollHeight等于文档内容区域大小，而clientWidth和clientHeight等于视口大小。

因此在确定文档的总高度时，取两个值的最大值。

scrollTop和scrollLeft是可以设置的。

```html
<style>
        *{
            margin: 0;
            padding: 0;
        }
        .one{
            height: 300px;
            border: 1px solid red;
            text-align: center;
            line-height: 300px;
        }
     
    </style>
</head>
<body>
    <div class="one">1</div>
    <div class="one">2</div>
    <div class="one">3</div>
    <div class="one">4</div>
    <div class="one" id="x">5</div>
```

```js
var xDom=document.getElementById("x");
//滚动事件
window.onscroll=function(){
    console.log(document.documentElement.scrollTop);// 被隐藏 的 内容高度 -- 卷起的内容高度
}
```

### 8.7  !!!案例-----回到顶部

```html
<style>
        *{
            margin: 0;
            padding: 0;
        }
        .one{
            height: 200px;
            border: 1px solid red;
            text-align: center;
            line-height: 300px;
            background: violet;
        }
        /* 回到顶部小盒子的属性设置 */
        #backTop{
            width: 80px;
            height: 80px;
            background: red;
            text-align: center;
            line-height: 80px;
            color: white;
            position:fixed;
            bottom: 50px;
            right: 0;
            display: none;
        }
     
    </style>
</head>
<body>
    <div class="one">1</div>
    <div class="one">2</div>
    <div class="one">3</div>
    <div class="one">4</div>
    <div class="one">5</div>
    <div class="one">6</div>
    <div class="one">7</div>

    <div id="backTop" >回到顶部</div>
```

```js
var backTopDom=document.getElementById("backTop");

// 滚动时 出现 回到顶部 div
window.onscroll=function(){
    var sTop=document.documentElement.scrollTop;
    if(sTop > 50){
        backTopDom.style.display ="block";
    }else{
        backTopDom.style.display ="none";
    }

// 点击 回到顶部时  scrollTop=0; 
backTopDom.onclick=function(){
    document.documentElement.scrollTop=0; 
}
}
```

### 8.8  图片懒加载

```html
    <style>
        .img{
            width: 200px;
            height: 200px;
            display: block;
            margin: 0 auto;
        }
    </style>
</head>
<body>
    <div>
<img src="./img/loading.gif"  lazy-src="./img/1.jpg" class="img">
<!-- <img src="./img/1.jpg" class="img"> -->
<img src="./img/loading.gif"  lazy-src="./img/2.jpg" class="img">
<img src="./img/loading.gif"  lazy-src="./img/3.jpg" class="img">
<img src="./img/loading.gif"  lazy-src="./img/4.jpg" class="img">
<img src="./img/loading.gif"  lazy-src="./img/5.jpg" class="img">
<img src="./img/loading.gif"  lazy-src="./img/6.jpg" class="img">
<img src="./img/loading.gif"  lazy-src="./img/7.jpg" class="img">
<img src="./img/loading.gif"  lazy-src="./img/8.gif" class="img">
<img src="./img/loading.gif"  lazy-src="./img/9.jpg" class="img">
<img src="./img/loading.gif"  lazy-src="./img/10.jpg" class="img">
<img src="./img/loading.gif"  lazy-src="./img/11.jpg" class="img">
<img src="./img/loading.gif"  lazy-src="./img/12.jpg" class="img">
<img src="./img/loading.gif"  lazy-src="./img/13.jpg" class="img">
<img src="./img/loading.gif"  lazy-src="./img/14.jpg" class="img">
<img src="./img/loading.gif"  lazy-src="./img/15.jpg" class="img">
<img src="./img/loading.gif"  lazy-src="./img/16.jpg" class="img">
<img src="./img/loading.gif"  lazy-src="./img/17.jpg" class="img">

    </div>
```

```js
// 怎么判断 图片进入 可视区域 
// 图片.offsetTop <  （可视区域高度 + 滚动卷起的高度）
function lazy(){
    var imgDom=document.querySelectorAll(".img");
    var h=document.documentElement.clientHeight;
    var s=document.documentElement.scrollTop
    for(var i =0;i<imgDom.length;i++){
        // 图片.offsetTop <  （可视区域高度 + 滚动卷起的高度）
        if(imgDom[i].offsetTop < ( s+ h ) ){
            var lazySrc= imgDom[i].getAttribute("lazy-src");
            // console.log(lazySrc)
                imgDom[i].setAttribute("src",lazySrc);
        }
    }
}
window.onload=function(){
    lazy()
}
window.onscroll=function(){
   lazy()
}
```

# 2.9 

### 9.1  事件委托

```html
<ul id="ul">
    <li>11</li>
    <li>22</li>
    <li>33</li>
    <li>44</li>
    <li>55</li>
    <li>66</li>
    <li>77</li>
    <li>88</li>
    <h1>哈哈哈哈哈哈哈哈哈哈哈</h1>
</ul>
```

```js
/*
    var liDom=document.querySelectorAll("li");
    console.log(liDom)
    for(var i=0;i<liDom.length;i++){
        liDom[i].onclick=function(){
            console.log( this.innerText )
        }
    }
*/
var ulDom= document.getElementById("ul")
    ulDom.onclick=function(e){
        // 发生事件 元素的事件对象
        // e.target  发生事件的元素 <li> ... </li>
        // console.log( e.target.tagName )
        if( e.target.tagName == "LI"){
            console.log(e.target.innerText);
        }
       
    }
```

### 9.2 !!!案例 学生管理系统  

###### 方法1   方法2

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
       .table{
            border-collapse: collapse;
            width: 500px;
            text-align: center;
       }
       .table td ,.table th{
        border: 1px solid #000;
       }
       
    </style>
</head>
<body>
    <form >
        <div>
            <label for="name">姓名</label>
            <input type="text" id="name">
        </div>

        <div>
            <label for="age">年龄</label>
            <input type="text" id="age">
        </div>

        <div>
            <label style="visibility: hidden;">添加 </label>
            <input type="button" value="添加" id="addBtn">
           
        </div>
    </form>

    <table class="table" >
        <thead>
            <tr>
                <th>姓名</th>
                <th>年龄</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody id="tbody">
            <tr>
                <td>11</td>
                <td>13</td>
                <td>
                    <button>删除</button>
                </td>
            </tr>
            <!-- <tr>
                <th colspan="3">暂无数据</th>
            </tr> -->
        </tbody>
    </table>

    <script src="./01.js"></script>
</body>
</html>
```

```js
// 一、点击 添加按钮 获取 姓名、年龄 打印到控制台

// 二、输入框不能为空

// 三、 创建tr ， td 

// ---------------获取添加 按钮 绑定点击事件
var addBtnDom=document.getElementById("addBtn");
//添加
    addBtnDom.onclick=function(){

        // 获取 姓名、年龄 
        var nameDom= document.querySelector("#name");
        var ageDom= document.querySelector("#age");

        var nameVal= nameDom.value;
        var ageVal = ageDom.value;

        //console.log(nameVal,ageVal)

        if(nameVal == "" || ageVal ==""){
            console.log("不能为空");
        }else{
            console.log(nameVal,ageVal)
        }

        if(nameVal && ageVal){
            console.log("有值",nameVal,ageVal);
            // 创建tr 
            var trDom=document.createElement("tr");
            // 创建 td -姓名
            var td1Dom=document.createElement("td");
                td1Dom.innerText=nameVal;
            // 创建 td -年龄
            var td2Dom=document.createElement("td");
                td2Dom.innerText=ageVal;
            //  创建 td -删除按钮
            var td3Dom=document.createElement("td");
            //  创建 button 删除按钮
            var btnDom=document.createElement("button");
                btnDom.innerText="删除"
// 删除 动态添加的 tr
                btnDom.onclick=function(){
                    // console.log(this)
                    this.parentNode.parentNode.remove();    
                }
        //  将 删除按钮 添加都 td 
            td3Dom.appendChild(btnDom);
        //  将 所有td 添加到 tr
        trDom.append(td1Dom,td2Dom,td3Dom);
        // 将tr 添加到tbody
        var tbodyDom=document.getElementById("tbody");
            tbodyDom.appendChild(trDom);
        }else{
            console.log("不能为空")
        }
        nameDom.value="";
        ageDom.value="";
    }
//删除 默认已经有的 tr
var btnDom=document.getElementsByTagName("button");
// console.log(btnDom)
for(var i =0;i<btnDom.length;i++){
    btnDom[i].onclick=function(){
        this.parentNode.parentNode.remove()
    }
}
```

###### 方法2

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
       .table{
            border-collapse: collapse;
            width: 500px;
            text-align: center;
       }
       .table td ,.table th{
        border: 1px solid #000;
       }
       
    </style>
</head>
<body>
    <form >
        <div>
            <label for="name">姓名</label>
            <input type="text" id="name">
        </div>

        <div>
            <label for="age">年龄</label>
            <input type="text" id="age">
        </div>

        <div>
            <label style="visibility: hidden;">添加 </label>
            <input type="button" value="添加" id="addBtn">
           
        </div>
    </form>

    <table class="table" >
        <thead>
            <tr>
                <th>姓名</th>
                <th>年龄</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody id="tbody">
            <!-- <tr>
                <td>11</td>
                <td>13</td>
                <td>
                    <button>删除</button>
                </td>
            </tr> -->
            <!-- <tr>
                <th colspan="3">暂无数据</th>
            </tr> -->
        </tbody>
    </table>

    <script src="./02.js"></script>
</body>
</html>
```



```js
// --------------------------------
//1、布局 

// 2、初始渲染 
// 2-1、模拟默认数据
var arr=[
    {"id":1,"name":"11","age":13},
    {"id":2,"name":"22","age":14},
    {"id":3,"name":"33","age":15}
]

// 2-2、渲染

function show(arr){
    var str="";
    for(var i=0;i<arr.length;i++){
        str+=`
        <tr>
            <td>${ arr[i].name }</td>
            <td>${ arr[i].age}</td>
            <td>
                <button onclick="del(${i})">删除</button>
            </td>
        </tr>
        `
    }
    // console.log(str);
    document.getElementById("tbody").innerHTML= str;
}
show(arr);

//删除
function del(i){
    arr.splice(i,1);
    show(arr);
}

// 3、事件
var addBtnDom=document.getElementById("addBtn");
    addBtnDom.onclick=function(){
        var nameDom=document.getElementById("name");
        var ageDom=document.getElementById("age");

        var nameVal=nameDom.value;
        var ageVal=ageDom.value;

        // console.log(nameVal, ageVal);
        if( nameVal && ageVal ){
            
            arr.push( {"id":new Date().getTime(),"name":nameVal,"age":ageVal} )
            // console.log(arr);
            show(arr);
        }else{
            alert("不能为空");
        }
    }
```

```js
    //封装 setCookie(属性名,属性值,失效时间)
    function setCookie(key,value,time){
        var d=new Date();
        d.setTime( d.getTime() + time*60*1000 ) ;
        document.cookie =`${key}=${value};expires=${d.toGMTString()}`
    }
    setCookie("name","高",2);
    setCookie("age",18,2);
    
   //封装 getCookie(属性名)  
   function getCookie(key){
        var c= document.cookie;//name=高; namexx=18
        var arr= c.split(";");
        var index=  arr.findIndex(function(v){
                return v.includes(key+"=")
            })
        return  index >=0 ?  arr[index].split("=")[1] : "";
   }

   //   getCookie("age")
   console.log(  getCookie("name") );
```

### 9.2cookie

```js
// 设置
var d= new Date(); //获取当前日期对象  d.getTime()  获取时间戳 1970到现在的毫秒
d.setTime( d.getTime() + 10*1000 );// 俩分钟
document.cookie="user=gao; expires="+ d.toGMTString()
// 获取
console.log(document.cookie);
```

### 9.3  设置cookie

```js
    //封装 setCookie(属性名,属性值,失效时间)
    function setCookie(key,value,time){
        var d=new Date();
        d.setTime( d.getTime() + time*60*1000 ) ;
        document.cookie =`${key}=${value};expires=${d.toGMTString()}`
    }
    setCookie("name","高",2);
    setCookie("age",18,2);
    
   //封装 getCookie(属性名)  
   function getCookie(key){
        var c= document.cookie;//name=高; namexx=18
        var arr= c.split(";");
        var index=  arr.findIndex(function(v){
                return v.includes(key+"=")
            })
        return  index >=0 ?  arr[index].split("=")[1] : "";
   }

   //   getCookie("age")
   console.log(  getCookie("name") );
```

### 9.4  localStorage

持久化存储,5M左右,不主动删除,一直存在(历史记录)

设置:  setItem(key,value),其中value必须为字符串

获取:  getItem(key)

```js
// 设置 
localStorage.setItem("x","啊啊啊啊啊啊啊啊")

localStorage.setItem("y","aaaaa")

//获取
console.log(  localStorage.getItem("x") ) 

// 删除
// localStorage.removeItem("x");

// 清空
// localStorage.clear();
sessionStorage.setItem("aaaa","yyyyyy")
```

### 9.5  json  

```js
var obj={"name":"aa","age":13};
var str= JSON.stringify( obj )
console.log( str );

var obj2= JSON.parse(str);
console.log( obj2 );


// JSON 对象 -- 转为 JSON 字符串
// JSON.stringify()

// JSON 字符串 -- 转为 JSON 对象
// JSON.parse()

// localStorage.setItem("user",JSON.stringify( obj ) )

// console.log(  JSON.parse(  localStorage.getItem("user") )  )
```

### 9.6  案例--渲染

```html
<input type="text" id="todo">
<button id="add">添加</button>
<ul id="ul">
    <!-- <li>22</li>
    <li>33</li>
    <li>44</li> -->
</ul>
```

```js
  //1、布局
  //2、渲染
  //2-1、模拟默认数
  //     ---  获取 本地储存 ?如果有 转JSON对象 取值 :如果没有 []
  var arr = localStorage.getItem("anli") ? JSON.parse(localStorage.getItem("anli")).zhi : []
  //2-2、循环数组 拼接 模版字符串 - 添加dom
  function show() {
      var str = ""
      for (var i = 0; i < arr.length; i++) {
          str += `
          <li>${arr[i]}</li>
      `
      }
      console.log(str);
      document.getElementById("ul").innerHTML = str;
   }
  show()
  //3、事件
  var addDom = document.getElementById("add");
  addDom.onclick = function () {
      var inputDom = document.getElementById("todo");
      var inputVal = inputDom.value;
      // console.log(inputVal);
      arr.push(inputVal);
      // 1-------
      var obj = {
          "zhi": arr
      };
      localStorage.setItem("anli", JSON.stringify(obj));
      show()
  }
```

# 2.10  

### 10.1案例  表单元素( 单选-文本- 多选-下拉-文本域)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form >
        <div>     
            <label for="">姓名:</label>
            <input type="text" name="" id="user">
        </div>

        <div>
            <label for="">性别:</label>
           <span>男</span> <input type="radio" name="sex"  value="男" checked>
           <span>女</span> <input type="radio" name="sex"  value="女">
        </div>

        <div>
            <label for="">籍贯:</label>
            <select name="" id="address">
                <option value="陕西">陕西省</option>
                <option value="山西">山西省</option>
                <option value="河南">河南省</option>
                <option value="河北">河北省</option>
            </select>
        </div>

        <div>
            <label for="">爱好:</label>
            <span>看代码</span> <input type="checkbox" name="hobby"  value="看代码">
            <span>抄代码</span> <input type="checkbox" name="hobby"  value="抄代码">
            <span>写代码</span> <input type="checkbox" name="hobby"  value="写代码">

        </div>  
        
        <div>
            <label for="">介绍:</label>
            <textarea name="" id="msg" cols="30" rows="10"></textarea>
        </div>
        <div>
            <input type="button" value="提交" id="add">
        </div>

    </form>


    <script src="./06.js"></script>
</body>
</html>
```

```js
var class2103 = [];


// 绑定点击事件
var addDom = document.getElementById("add");
addDom.onclick = function () {
    // 姓名 基础
    var userDom = document.getElementById("user");
    var user = userDom.value;
    // console.log("姓名",user);

    // 性别 单选
    var sexDom = document.getElementsByName("sex");
    var sex;
    for (var i = 0; i < sexDom.length; i++) {
        if (sexDom[i].checked == true) {
            sex = sexDom[i].value
        }
    }
    // console.log("性别",sex);

    // 籍贯  下拉
    var addressDom = document.getElementById("address");
    var address = addressDom.value;
    // console.log("籍贯",address);

    // 爱好  复选

    var hobbyDom = document.getElementsByName("hobby");
    var hobby = [];
    for (var i = 0; i < hobbyDom.length; i++) {
        if (hobbyDom[i].checked == true) {
            hobby.push(hobbyDom[i].value)
        }
    }
    // console.log("爱好",hobby);

    // 介绍  文本域
    var msgDom = document.getElementById("msg");
    var msg = msgDom.value;
    // console.log("自我介绍",msg);


    // 非空验证
    if (user && sex && address && hobby.length > 0 && msg) {
        // console.log('输入正确');
        var obj = {
            "user": user,
            "sex": sex,
            "address": address,
            "hobby": hobby,
            "msg": msg
        }
        //  console.log(obj);
        class2103.push(obj);

        console.log(class2103);

    } else {
        console.log("输入错误，有未填写");
    }


}
```

### 10.2  案例  显示与隐藏

```html
<style>
        #editOk {
            display: none;
        }
    </style>
</head>

<body>
    <button id="add">添加</button>
    <button id="editok">确认修改</button>
    <ul>
        <li id="edit">修改</li>
    </ul>
```

```js
// 点击 li 修改 ， 隐藏 添加 按钮 ，展示 确认修改
        var editDom = document.getElementById("edit"); // li 修改 
        var addDom = document.getElementById("add"); // 添加按钮
        var editOkDom = document.getElementById("editOk"); // 确认修改
        editDom.onclick = function () {
            addDom.style.display = "none";
            editOkDom.style.display = "block";
        }
        // 点击 确认修改  隐藏自己，显示 添加按钮
        editOkDom.onclick = function () {
            this.style.display = "none";
            addDom.style.display = "block";

        }
```

### 10.3  渲染--1

```html
    <div>
        <p>姓名 ：<span id="user">xx</span> </p>
        <p>性别 ：<span id="sex">xx</span> </p>
        <p>年龄 ：<span id="age">xx</span> </p>

    </div>

    <script>
        var one = {
            "name": "gao",
            "age": 18,
            "sex": "男"
        }

        var userDom = document.getElementById("user");
        userDom.innerHTML = one.name;

        var sexDom = document.getElementById("sex");
        sexDom.innerHTML = one.sex;

        var ageDom = document.getElementById("age");
        ageDom.innerHTML = one.age;
    </script>
```

### 10.4  渲染  --2

```html
<style>
        #box>div {
            border: 1px solid black;
            margin-bottom: 5px;
        }
    </style>
</head>

<body>
    <div id="box">
        <!-- <div >
        <p>姓名 ：<span id="user">xx</span> </p> 
        <p>性别 ：<span id="sex">xx</span> </p> 
        <p>年龄 ：<span id="age">xx</span> </p> 

    </div> -->

    </div>


    <script>
        var arr = [{
                "name": "gao",
                "age": 18,
                "sex": "男"
            },
            {
                "name": "gao2",
                "age": 182,
                "sex": "男"
            },
            {
                "name": "gao3",
                "age": 183,
                "sex": "男"
            },
        ]

        var str = "";
        for (var i = 0; i < arr.length; i++) {
            str += `
            <div >
                <p>姓名 ：<span id="user">${arr[i].name}</span> </p> 
                <p>性别 ：<span id="sex">${arr[i].sex}</span> </p> 
                <p>年龄 ：<span id="age">${arr[i].age}</span> </p> 

            </div> 
            `
        }
        document.getElementById("box").innerHTML = str;
    </script>
```

### 10.5  渲染封装

```js
    <style>
        #box>div {
            border: 1px solid black;
            margin-bottom: 5px;
        }
    </style>
</head>

<body>
    <div id="box">
        <!-- <div >
        <p>姓名 ：<span id="user">xx</span> </p> 
        <p>性别 ：<span id="sex">xx</span> </p> 
        <p>年龄 ：<span id="age">xx</span> </p> 

    </div> -->

    </div>


    <script>
        var arr = [{ "name": "gao","age": 18,"sex": "男"},
            {"name": "gao2","age": 182,"sex": "女"},
            {"name": "gao3","age": 183,"sex": "男"},]

        function show(arr) {
            var str = "";
            for (var i = 0; i < arr.length; i++) {
                str += `
                <div >
                    <p>姓名 ：<span id="user">${arr[i].name}</span> </p> 
                    <p>性别 ：<span id="sex">${arr[i].sex}</span> </p> 
                    <p>年龄 ：<span id="age">${arr[i].age}</span> </p> 

                </div> 
                `
            }
            document.getElementById("box").innerHTML = str;
        }
        show(arr);

        // var x = arr.filter(function(value,index){
        //     return value.sex == "男"
        // })
        // // console.log(x);

        // show(x);
    </script>
```

### 10.6  搜索

```js
<style>
        #box>div {
            border: 1px solid black;
            margin-bottom: 5px;
        }
    </style>
</head>

<body>

    <input type="search" placeholder="请输入姓名" id="sUser"> <button id="search">搜索</button>

    <div id="box">
        <!-- <div >
            <p>姓名 ：<span id="user">xx</span> </p> 
            <p>性别 ：<span id="sex">xx</span> </p> 
            <p>年龄 ：<span id="age">xx</span> </p> 
        </div> -->
    </div>
```

```js
<script>
    var arr = [{
            "name": "gao",
            "sex": "男",
            "age": 19,
        },
        {
            "name": "wang",
            "sex": "男",
            "age": 14,
        },
        {
            "name": "li",
            "sex": "女",
            "age": 16,
        },
        {
            "name": "zhao",
            "sex": "男",
            "age": 13,
        },
    ]
    //--------渲染,拼接字符串显示到页面-------------
    function show(xx) {
        var str = "";
        for (var i = 0; i < xx.length; i++) {
            str += `
            <div >
                <p>姓名 ：<span id="user">${xx[i].name}</span> </p> 
                <p>性别 ：<span id="sex">${xx[i].sex}</span> </p> 
                <p>年龄 ：<span id="age">${xx[i].age}</span> </p> 
            </div>
            `
        }
        document.getElementById("box").innerHTML = str;
    }
    show(arr);
    //-------------获取搜索按钮------------
    var searchDom = document.getElementById("search");
    //------------搜索按钮绑定点击事件-----       
    searchDom.onclick = function () {
        //获取搜索输入框
        var sUserDom = document.getElementById("sUser");
        var sUser = sUserDom.value;
        //数组筛选功能filter,返回复合条件的新数组nArr,
        var nArr = arr.filter(function (value, index) {
            return value.name.includes(sUser)
        })
        show(nArr);
    }
    </script>
```

### 10.7  !!!!案例  学员信息管理系统--增删改查

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        .table {
            border-collapse: collapse;
            width: 100%;
            text-align: center;
        }

        .table th,
        table td {
            border: 1px solid black;
        }

        #editOk {
            display: none;
        }
    </style>
</head>

<body>
    <h1>学员信息管理系统</h1>
    <!-- 录入 -->
    <form>
        <div>
            <label for="">姓名:</label>
            <input type="text" name="" id="user">
        </div>

        <div>
            <label for="">性别:</label>
            <span>男</span> <input type="radio" name="sex" value="男" checked>
            <span>女</span> <input type="radio" name="sex" value="女">
        </div>

        <div>
            <label for="">籍贯:</label>
            <select name="" id="address">
                <option value="陕西">陕西省</option>
                <option value="山西">山西省</option>
                <option value="河南">河南省</option>
                <option value="河北">河北省</option>
            </select>
        </div>

        <div>
            <label for="">爱好:</label>
            <span>看代码</span> <input type="checkbox" name="hobby" value="看代码">
            <span>抄代码</span> <input type="checkbox" name="hobby" value="抄代码">
            <span>写代码</span> <input type="checkbox" name="hobby" value="写代码">

        </div>

        <div>
            <label for="">介绍:</label>
            <textarea name="" id="msg" cols="30" rows="1"></textarea>
        </div>
        <div>
            <input type="button" value="提交" id="add">
            <input type="button" value="确认修改" id="editOk">
        </div>

    </form>
    <hr />
    <!-- 展示 -->
    <table class="table">
        <thead>
            <tr>
                <th>序号</th>
                <th>姓名</th>

                <th>性别</th>
                <th>爱好</th>
                <th>籍贯</th>
                <th>个人介绍</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody id="tbody">
            <!-- <tr>
                <td>序号</td>
                <td>姓名</td>
                <td>年龄</td>
                <td>性别</td>
                <td>爱好</td>
                <td>籍贯</td>
                <td>个人介绍</td>
                <td>
                    <button>删除</button>
                    <button>修改</button>
                </td>
            </tr> -->
        </tbody>
    </table>

    <script src="./07-curd.js"></script>
</body>

</html>
```

```js
// c create    创建    增
// u update    修改    改
// r read      读取    查
// d delete    删除    删


// 1、模拟数据

// var arr=[
//     // {
//     //     "id":1,
//     //     "user":"gao",
//     //     "sex":"女",
//     //     "hobby":['看代码','写代码'],
//     //     "address":"陕西",
//     //     "msg":"人人皆可成才",
//     // },
// ]


var arr= localStorage.getItem("p20610") ? JSON.parse(localStorage.getItem("p20610")  ).info :[];

// 获取 dom 元素
var addDom=document.getElementById("add");
var editOkDom=document.getElementById("editOk");
var userDom=document.getElementById("user");
var sexDom=document.getElementsByName("sex");
var addressDom=document.getElementById("address");
var hobbyDom=document.getElementsByName("hobby");
var msgDom=document.getElementById("msg");


// 2、 渲染

function show( xx ){
    var str="";
    for(var i=0;i<xx.length;i++){
        str+=`
        <tr>
            <td>${i+1}</td>
            <td>${xx[i].user}</td>
    
            <td>${xx[i].sex}</td>
            <td>${xx[i].hobby.join("-")  }</td>
            <td>${xx[i].address}</td>
            <td>${xx[i].msg}</td>
            <td>
                <button onclick="del(${i})">删除</button>
                <button onclick="edit(${i})">修改</button>
            </td>
        </tr>
        `
    }
    document.getElementById("tbody").innerHTML=str;

}
show(arr);


// 3、 事件操作
// 添加
addDom.onclick=function(){
    var user=userDom.value;
    var sex ;
    for(var i =0;i<sexDom.length;i++){
        if(sexDom[i].checked == true){
            sex= sexDom[i].value;
        }
    }
    var address= addressDom.value;
    var hobby=[];
        for(var j=0;j<hobbyDom.length;j++){
            if(hobbyDom[j].checked == true){
                hobby.push( hobbyDom[j].value )
            }
        }
    var msg=msgDom.value;
if(user && sex && hobby.length>0 && address && msg){
    var obj={
        "id":new Date().getTime(),
        "user":user,
        "sex":sex,
        "hobby":hobby,
        "address":address,
        "msg":msg,
    }

    arr.push(obj);

    localStorage.setItem("p20610",JSON.stringify( { "info":arr } ))
    show(arr);
}else{
    alert("不能为空");
}

}
// 删除
function del(index){
    arr.splice(index,1);
    localStorage.setItem("p20610",JSON.stringify( { "info":arr } ))
    show(arr);
}

// 修改
var editIndex;

function edit(index){
    editOkDom.style.display="block";
    addDom.style.display="none";

    // i 是修改时 下标
    // console.log( arr[i] );

    var obj= arr[index];

    userDom.value=obj.user;

    for(var i=0;i<sexDom.length;i++){
        // console.log(sexDom[i].value ,obj.sex)
        if( sexDom[i].value == obj.sex ){
            // console.log("sssss")
            sexDom[i].checked=true;
        }
    }

    addressDom.value=obj.address;

    for(var x=0;x<hobbyDom.length;x++){

        for(var y=0;y<obj.hobby.length;y++){
            if( hobbyDom[x].value == obj.hobby[y] ){
                hobbyDom[x].checked=true;
                break;
            }
        }
    }

    msgDom.value= obj.msg;
    editIndex =index;

}

// 确认修改

 editOkDom.onclick=function(){
    editOkDom.style.display="none";
    addDom.style.display="block";

    var user=userDom.value;
    var sex ;
    for(var i =0;i<sexDom.length;i++){
        if(sexDom[i].checked == true){
            sex= sexDom[i].value;
        }
    }
    
    var address= addressDom.value;
    var hobby=[];
        for(var j=0;j<hobbyDom.length;j++){
            if(hobbyDom[j].checked == true){
                hobby.push( hobbyDom[j].value )
            }
        }
    var msg=msgDom.value;
    
    if(user && sex && hobby.length>0 && address && msg){
        var obj={
            "id":new Date().getTime(),
            "user":user,
            "sex":sex,
            "hobby":hobby,
            "address":address,
            "msg":msg,
        }

        arr[editIndex] = obj;
        // console.log(editIndex)

        localStorage.setItem("p20610",JSON.stringify( { "info":arr } ))

        show(arr);

// 清空表单

        userDom.value="";
        msgDom.value="";


    }else{
        alert("不能为空"); 

    }
}


```

# 2.11

### 11.1  onload

```js
 window.onload = function () {
     console.log("onload-1");
 }
```

### 11.2  onerror

```js
  function errorFn() {
      console.log("错误");
      // console.log(event)
      event.target.src = "./3.jpg"
  }
```

### 11.3   onresize

```js
  window.onresize = function () {
      console.log("改变大小了");
  }
```

### 11.4  鼠标单击onclick    双击ondblclick

```js
  var oneDom = document.getElementById("one");
  oneDom.onclick = function () {
      console.log("one 单击");
  }
  oneDom.ondblclick = function () {
      console.log("one 双击");
  }
```

### 11.5  鼠标事件  

```js
  var box = document.getElementById("box");
  box.onmousedown = function () {
      console.log("按下了鼠标");
  }
  box.onmouseup = function () {
      console.log("释放按下鼠标键触发 -抬起/松开");
  }
  box.onmouseenter = function () {
      console.log(" 鼠标 进入 节点触发");
  }
  box.onmouseout = function () {
      console.log(" 鼠标 离开 节点触发");
  }
  box.onmousemove = function () {
      console.log(" 鼠标在节点内部移动触发");
  }
  box.oncontextmenu = function () {
      console.log(" 打开菜单 =点击右键");
  }
  box.onwheel = function (e) {
      console.log("滚轮 滚动", e.wheelDelta);
  }
```

### 11.6  键盘事件

```js
  var userDom = document.getElementById("user");
  userDom.onkeydown = function (e) {
      console.log("按下", e.keyCode) // 按键都可以 
      //keyCode 按键码 1 --- 49  回车 --13  删除del--8
      if (e.keyCode == 13) {
          console.log("按下了回车")
      }
  }
  // userDom.onkeyup=function(){
  //     console.log("松开")
  // }
  userDom.onkeypress = function () {
      console.log("按下") // 按下有值的键触发 
  }
```

### 11.7  表单事件

```js
<form onsubmit="tijiao()" onreset="chongzhi()">
        <input type="text" id="user">
        <input type="submit" value="提交">
        <input type="reset" value="重置">
    </form>
    <script>
        function tijiao() {
            console.log("点击了提交按钮");
        }
        function chongzhi() {
            console.log("点击了重置按钮");
        }
        var userDom = document.getElementById("user");
        userDom.onfocus = function () {
            console.log("onfocus -获得焦点");
        }
        userDom.onblur = function () {
            console.log("onblur--失去焦点");
        }
        userDom.onchange = function () {
            console.log("onchange- 该事件在表单元素的内容改变时触发");
        }
        userDom.oninput = function () {
            console.log("oninput --元素获取用户输入时触发 ")
        }
        userDom.onselect = function () {
            console.log("onselect - 用户选取文本时触发 ")
        }
```

### 11.8 触屏事件

```html
<style>
        #box {
            width: 100px;
            height: 100px;
            border: 1px solid black;
        }
    </style>
</head>

<body>
    <div id="box"></div>
    <script>
        var boxDom = document.getElementById("box");
        boxDom.ontouchstart = function () {
            console.log("手指刚接触屏幕时触发 ")
        }
        boxDom.ontouchmove = function () {
            console.log("手指在屏幕上移动时触发  ")
        }
        boxDom.ontouchend = function () {
            console.log("手指从屏幕上移开时触发  ")
        }
    </script>
```

### 11.9  事件对象

```js
        function btn() {
            var e = event || window.event;
            console.log(e);
        }
        var btn2Dom = document.getElementById("btn2");
        btn2Dom.onclick = function (event) {
            var e = event || window.event;
            console.log(e);
            console.log(e.target, "发生事件的元素");
            console.log(e.screenX, e.screenY, "距离屏幕x,y");
            console.log(e.pageX, e.pageY, "距离文档x,y");
            console.log(e.clientX, e.clientY, "可视区域x,y")
        }
```

### 11.10 !!!案例 todolist  看着像文本-双击即可编辑

```js
        /* #y{
            display: none;
        } */  //css样式


<span id="x">111111  </span>
<input type="text" id="y">
   //--------------------------
        var xDom=document.getElementById("x");
        var yDom=document.getElementById("y");
        xDom.ondblclick=function(){
            this.style.display="none";
            yDom.style.display="block";
            yDom.value= this.innerText;
            yDom.focus();
        }
        yDom.onblur=function(){
            this.style.display="none";
            xDom.style.display="block";  
            xDom.innerText= yDom.value;
        }
        yDom.onkeydown=function(){
            var e= event || window.event;
            if(e.keyCode == 13){
                this.style.display="none";
                xDom.style.display="block";  
                xDom.innerText= yDom.value;
            }
        }
```

### 11.11  事件绑定

```js
 //1第一种事件绑定
  function btn1() {
      console.log("点击了按钮1");
  }

  // 2第二种事件绑定
  var btn2 = document.getElementById("btn2");
  btn2.onclick = function () {
      console.log("点击了按钮2");
  }
  btn2.onmouseover = function () {
      console.log("鼠标在按钮上");
  }
  // 取消事件
  btn2.onmouseover = false;

  // 3  -第三种事件绑定
  var btn3 = document.getElementById("btn3");
  btn3.addEventListener("click", function () {
      console.log("点击了按钮3");
  })
  var fn = function () {
      console.log("鼠标在按钮上3");
  }
  btn3.addEventListener("mouseover", fn)

  // 4-取消事件
  btn3.removeEventListener("mouseover", fn);
```

### 11.12  默认事件

```html
    <form action="" onsubmit="fn()">
        <input type="text" name="user">
        <button>提交 </button>
        <input type="submit" value="提交">
    </form>
    <script>
        function fn() {
            var event = event || window.event;
            // 阻止默认事件
            // event.preventDefault();
            event.returnValue = false;
        }
    </script>
```

### 11.13  事件冒泡

```html
    <style>
  #box {
      width: 300px;
      height: 100px;
      border: 1px solid black;
      display: flex;
  }

  #item {
      width: 100px;
      height: 100px;
      border: 1px solid red;
      margin-left: 200px;
  }
    </style>
</head>

<body>
    <div id="box" onclick="boxFn()">
        <h1>高</h1>
        <div id="item" onclick="itemFn()">删除</div>
    </div>
    <script>
        function boxFn() {
            console.log("进入聊天页面")
        }

        function itemFn() {
            console.log("删除联系人 ")
            var e = event || window.event;
            // 阻止事件 冒泡
            e.stopPropagation();
        }
    </script>
```

### 11.14  事件委托

```html
<style>
#box{
            width: 300px;
            height: 100px;
            border: 1px solid black;
            display:flex;
        }
        #item{
            width: 100px;
            height: 100px; 
            border: 1px solid red;
            margin-left: 200px;
        }
    </style>
</head>
<body>
    <div id="box" onclick="boxFn()">
        <h1>高</h1>
        <div id="item" >删除</div>
    </div>
    <script>
        function boxFn(){
            console.log("进入聊天页面");    
            var e= event||window.event;
            // console.log(e.target);
            if( e.target.id == "item" ){
                console.log("删除联系人");
            }
        }
```

### 11.15  循环变量

```js
  // 如果 循环 变量  是以 var 声明 ，那么 会暴露出一个 全局变量 ，全局变量的值是 循环的终止条件
  for (var i = 0; i < 5; i++) {
      setTimeout(function () {
          console.log(i); // 打印5次  
      }, 1000)
  }
  for (var i = 0; i < 5; i++) {
      (function (i) {
          setTimeout(function () {
              console.log(i); // 打印5次  
          }, 1000)
      })(i)
  }
  /*
          for(let i=0;i<5;i++){
              setTimeout(function(){
                  console.log(i); // 打印5次  
              },1000)
          }
  */
```

### 11.15  闭包应用之tab切换

```html
  <ul id="ul">
      <li>111</li>
      <li>222</li>
      <li>333</li>
      <li>444</li>
  </ul>
  <script>
      var lisDom = document.querySelectorAll("#ul>li");
      for (var i = 0; i < lisDom.length; i++) {
          //闭包
          (function (i) {
              lisDom[i].onclick = function () {
                  console.log(i);
              }
          })(i)
      }
    </script>
```

### 11.16  tab切换-选项卡

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            margin: 0;
            padding: 0;
            list-style: none;
        }
        #ul{
            width: 300px;
            display: flex;
            justify-content: space-around;
            cursor: pointer;
        }
        #ul>li{
            width: 100%;
            text-align: center;
        }
        .active{
            /* color:red */
            background: red;
            color: white;
        }

        #box{
            width: 300px;
            height: 300px;
            border: 1px solid black;
        }

        #box >div{
            display: none;
        }

        #box>.show{
            display: block;
        }
    </style>
</head>
<body>
    <!-- tab 切换 -->
    <ul id="ul">
        <li >话费</li>
        <li class="active">机票</li>
        <li>酒店</li>
    </ul>
    <div id="box">
        <div>我是 话费 的内容</div>
        <div  class="show">我是 机票 的内容</div>
        <div>我是 酒店 的内容</div>
    </div>
    <script>
        var lisDom=document.querySelectorAll("#ul>li");
        var boxDom=document.querySelectorAll("#box>div");
        for(var  i=0;i<lisDom.length;i++){
            (function(i){           
                lisDom[i].onmouseover=function(){
                    for(var j=0;j<lisDom.length;j++){
                        lisDom[j].classList.remove("active");
                        boxDom[j].classList.remove("show");
                    }
                    this.classList.add("active");
                    boxDom[i].classList.add("show");
                    // console.log(i)
                }
            })(i)
        }
    </script>

</body>
</html>
```

### 11.17  案例使用滚轮改变图片大小

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <img src="./3.jpg" alt="" id="img">
    <script>
        var w=100;
        var h=100;
        var imgDom=document.getElementById("img");
        
        window.onload=function(){
            imgDom.style.width =w +"px";
            imgDom.style.height=h +"px";
        }
        imgDom.onwheel=function(){
            var e=event || window.event;
            // console.log( e.wheelDelta)
            if(e.wheelDelta >0 && w >100){
                imgDom.style.width = --w +"px"; 
                imgDom.style.height= --h +"px";
            }else{
                imgDom.style.width = ++w +"px"; 
                imgDom.style.height= ++h +"px";
            }
        }
    </script>
</body>
</html>
```



# 2.12

###  12.1    !!!!!案例(ab切换及增-删-改-查-模态框--案例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            margin: 0;
            padding: 0;
            list-style: none;
        }
        .box{
            height: 100vh;
            display: flex;
        }
        .left{
            width: 15vw;
            border: 1px solid black;
        }

        .ul{
            width: 100%;

        }
        .ul >li{
            text-align: center;
            background: coral;
            margin-bottom: 5px;
            line-height: 50px;
            cursor: pointer;
        }
        .ul>.li_active{
            background: pink;
            color: white;
        }
        .right{
            width: 85vw;
        }
        .tab_box >div{
            display: none;
           
        }
        .tab_box >.show{
            display: block;
        }

        .table{
            border-collapse: collapse;
            width: 100%;
            text-align: center;
        }

        .table th,.table td{
            border: 1px solid black;
        }
       #tbody  img{
            width: 50px;
            height: 50px;
        }

        #model{
            width: 100vw;
            height: 100vh;
            position: absolute;
            left: 0;
            top:0;
            background: rgba(0,0,0,0.6);
            display: none;
        }
        #item{
            width: 30vw;
            height: 30vh;
            position: absolute;
            left: 50%;
            top:50%;
            transform: translate(-50%,-50%);
            background: white; 
            text-align: center;
            line-height: 35px;
        }
        #editOk,#editNo{
            width: 45px;
            height: 30px;
            font-size: 12px;
            background:skyblue;
        }
    </style>
</head>
<body>
    <div class="box">
        <div class="left">
            <ul class="ul" id="tab">
                <li >添加</li>
                <li class="li_active">展示</li>
            </ul>
        </div>
        <div class="right">
            <div class="tab_box" id="tab_box">
                <div >
                    <h1>添加页面</h1>
                    <form >
                        <div>
                            <label for="name">商品名:</label>
                            <input type="text" id="name">
                        </div>
                        <div>
                            <label for="img">图片名:</label>
                            <input type="text" id="img">
                        </div>
                        <div>
                            <label for="price">价&emsp;格:</label>
                            <input type="text" id="price">
                        </div>
                        <div>
                            <label for="num">数&emsp;量:</label>
                            <input type="text" id="num">
                        </div>
                        <div>
                                <input type="button" value="添加" id="add">
                            <!-- <input type="submit" value="添加" > -->
                        </div>
                    </form>
                </div>

                <div class="show">
                    <h1>展示页面</h1>

                    <input type="search" id="search" onkeydown="searchFn()">
                    <hr />
                    <table class="table">
                        <thead>
                            <tr>
                                <th>序号</th>
                                <th>商品名</th>
                                <th>图片</th>
                                <th>价格</th>
                                <th>数量</th>
                                <th>小计</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody id="tbody">
                             <!-- <tr>
                                <td>1</td>
                                <td>苹果</td>
                                <td>
                                    <img src="./img/3.jpg" alt="">
                                </td>
                                <td>10</td>
                                <td>
                                    <button>+</button>
                                    <input type="text" value="1">
                                    <button>-</button>
                                </td>
                                <td>
                                    10
                                </td>
                                <td>
                                    <button>删除</button>
                                    <button>修改</button>

                                </td>
                            </tr> -->
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    </div>

    <!-- 模态框 -->
    <div id="model">
        <div id="item">
            <form >
                <div>
                    <label for="name">商品名:</label>
                    <input type="text" id="ename">
                </div>
                <div>
                    <label for="img">图片名:</label>
                    <input type="text" id="eimg">
                </div>
                <div>
                    <label for="price">价&emsp;格:</label>
                    <input type="text" id="eprice">
                </div>
                <div>
                    <label for="num">数&emsp;量:</label>
                    <input type="text" id="enum">
                </div>
                <div>
                        <input type="button" value="修改" id="editOk">
                        <input type="button" value="取消" id="editNo">

                    <!-- <input type="submit" value="添加" > -->
                </div>
            </form>
        </div>
    </div>

    <script src="./01.js"></script>
</body>
</html>
```

```js
var lisDom= document.querySelectorAll("#tab>li");
var divDom= document.querySelectorAll("#tab_box>div");

for(let i=0;i<lisDom.length;i++){
    lisDom[i].onclick=function(){
        // console.log("点击了");
        // console.log("i是--下标",i);
        // console.log("this",this);

        for(var j=0;j<lisDom.length;j++){
            lisDom[j].classList.remove("li_active");
            divDom[j].classList.remove("show");
        }

        lisDom[i].classList.add("li_active");
        divDom[i].classList.add("show");
    }
}

// 展示 

//1、模拟数据
// var arr=[
//     {
//         "id":11,
//         "name":"眯眯猫",
//         "img":"./img/1.jpg",
//         "price":10000,
//         "num":2
//     },
//     {
//         "id":22,
//         "name":"歪头猫",
//         "img":"./img/2.jpg",
//         "price":20000,
//         "num":3
//     },
//     {
//         "id":33,
//         "name":"大脸猫",
//         "img":"./img/3.jpg",
//         "price":30000,
//         "num":4
//     }
// ]
var arr= localStorage.getItem("p20615") ? JSON.parse( localStorage.getItem("p20615") ).info :[]
// 渲染
function showTable(res){
    var str="";
    for(var i=0;i<res.length;i++){
        str+=`
        <tr>
            <td>${i+1}</td>
            <td>${res[i].name}</td>
            <td>
                <img src="${res[i].img}"  alt="">
            </td>
            <td>${res[i].price}</td>
            <td>
                <button onclick="jia(${res[i].id})">+</button>
                <input type="text" value="${res[i].num}" oninput="changeNum(${res[i].id})">
                <button onclick="jian(${res[i].id})">-</button>
            </td>
            <td>
            ${res[i].price * res[i].num}
            </td>
            <td>
                <button onclick="del(${res[i].id})">删除</button>
                <button onclick="edit(${res[i].id})">修改</button>
            </td>
        </tr>
        `
    }
    document.getElementById("tbody").innerHTML=str;
}

//删除
function del(id){
    var flag= confirm("确认删除吗");
    if(flag){
          // console.log(id);
            var index= arr.findIndex(function(value){
                return value.id == id
            })
            arr.splice(index,1);
            localStorage.setItem("p20615",JSON.stringify( {"info":arr} ))
            showTable(arr);
    }
 
}
// 加
function jia(id){
    var index= arr.findIndex(function(value){
        return value.id == id
    })

    arr[index].num +=1;
    localStorage.setItem("p20615",JSON.stringify( {"info":arr} ))
    showTable(arr);

}
// 减
function jian(id){
    var index= arr.findIndex(function(value){
        return value.id == id
    })
    if( arr[index].num >1 ){
        arr[index].num -=1;
        localStorage.setItem("p20615",JSON.stringify( {"info":arr} ))
        showTable(arr);
    }else{
        // console.log("sss")
        arr.splice(index,1);
        localStorage.setItem("p20615",JSON.stringify( {"info":arr} ))
        showTable(arr);
    }   

}

// 修改数量
function changeNum(id){
    console.log(id);
    var e= event||window.event;
    // console.log( e.target.value );
    var index= arr.findIndex(function(value){
        return value.id == id
    })

    arr[index].num =e.target.value ;
    localStorage.setItem("p20615",JSON.stringify( {"info":arr} ))
    showTable(arr);

}

window.onload=function(){
    showTable(arr);
}

// 添加

// 1、 点击事件
var addBtn=document.getElementById("add");
    addBtn.onclick=function(){
        var nameDom=document.getElementById("name");
        var imgDom=document.getElementById("img");
        var priceDom=document.getElementById("price");
        var numDom=document.getElementById("num");

        var name= nameDom.value;
        var img= imgDom.value;
        var price= Number(priceDom.value);
        var num=  Number( numDom.value);
        // console.log(name,img,price,num)
        if(name && img && price &&num){

        arr.push({
            "id":new Date().getTime(),
            "name":name,
            "img":`./img/${img}.jpg`,
            "price":price,
            "num":num
        })

        for(var i=0;i<lisDom.length;i++){
            lisDom[i].classList.remove("li_active");
            divDom[i].classList.remove("show");

        }
        lisDom[1].classList.add("li_active");
        divDom[1].classList.add("show");
        localStorage.setItem("p20615",JSON.stringify( {"info":arr} ))
        showTable(arr);

    }else{
        alert("不能为空");
    }

    }
// 2、 获取 input 值
// 3、 数组中添加一个对象
// 4、 调用 渲染页面方法

//修改
var modelDom=document.getElementById("model");
var editIndex; //修改的 aar 下标
function edit(id){
       modelDom.style.display="block";

       var index = arr.findIndex(function(value){
            return value.id == id
       })

       document.getElementById("ename").value= arr[index].name;
       document.getElementById("eimg").value= arr[index].img;
       document.getElementById("eprice").value= arr[index].price; 
       document.getElementById("enum").value= arr[index].num;

       editIndex = index;
   
}

//取消隐藏

var editNoDom=document.getElementById("editNo");
    editNoDom.onclick=function(){  
       modelDom.style.display="none";
        
    }

//确认修改

var editOkDom=document.getElementById("editOk");
    editOkDom.onclick=function(){
        var name = document.getElementById("ename").value
        var img = document.getElementById("eimg").value
        var price = document.getElementById("eprice").value
        var num = document.getElementById("enum").value

        arr[editIndex].name=name;
        arr[editIndex].img=img;
        arr[editIndex].price=price;
        arr[editIndex].num=num;
        modelDom.style.display="none";
        localStorage.setItem("p20615",JSON.stringify( {"info":arr} ))
        showTable(arr);
    }
        //搜索
    function searchFn(){
        var e= event || window.event;
        var s= e.target.value;
        if(e.keyCode == 13){
            var sArr= arr.filter(function(value){
                return value.name.includes(s);          
            })  
            showTable( sArr )
        }
    }
```

### 12-2  数学方法Math()

```js
//常量PI
         console.log(Math.PI);

//最小值
        console.log( Math.min(10,3,2,9,1,888,0,99 )  ); //0

//最大值
        console.log( Math.max(10,3,2,9,1,888,0,99 )  );//888

//向上取整
        console.log( Math.ceil(10.2) ); // 11

//向下取整
        console.log( Math.floor(10.9) ); // 10

//四舍五入
        console.log( Math.round(5.7) ); //6

//sort 排序
        var arr=[9,7,5,3,6];
        var arr2=arr.sort(function(a,b){
            return a-b; // 从小到大
        })
        console.log(arr2);
        console.log("最小值是",arr2[0])

// 冒泡排序
        for(var i=0;i<arr.length;i++){
            for(var j=i+1;j<arr.length;j++){
                if(arr[i]>arr[j]){ // 从小到大
                    var x= arr[i];
                    arr[i]=arr[j];
                    arr[j]=x;
                }
            }
        }
        console.log(arr,"最小值是",arr[0]);
/// ... 操作符
        console.log( Math.min( ...arr ));

//绝对值
        console.log( Math.abs(-9) );

//次幂
        console.log( Math.pow(2,3));

//平方根
        console.log( Math.sqrt(16) );


// 0-1 的 随机数

        console.log( Math.random() )
// 0 --10 的随机数
        console.log( Math.floor(  Math.random()*10 ) )

// 3- 10 Math.floor( Math.random()*(最大值-最小值+1)+最小值 )

        console.log( Math.floor( Math.random()*(10-3+1) +3 )  )
```

### 12-3 创建 Date()

```js
        // 计算机/时间戳 的时间  1970 01 01 00:00:00
        //   东八区            1970 01 01 08:00:00
        //    月  小一  0 1 2 3 4 
        var a= new Date();
        console.log(a); //当前日期

                      // 年 月 日 时分秒
        var b= new Date(2020,0,1,10,2,1);
        console.log(b);

        var c=new Date("2020-1-2 10:02:03");
        console.log( c);


        console.log(typeof a ); // 对象
        console.log("转字符串" ,a.toString() );
        console.log("转为本地时间字符串",a.toLocaleDateString()); //年/月/日
        console.log("转为本地时间字符串",a.toLocaleTimeString());// 上午时:分:秒
        console.log("转为本地时间字符串",a.toLocaleString());//年/月/日上午时:分:秒
```

### 12-4  创建动态时间

```js
//<h1 id="h1"></h1>
        
setInterval(function(){
     var d= new Date();
    document.getElementById("h1").innerText= d.toLocaleString();
},1000);//1000表示1000毫秒=1秒

//  str= `${year}-6-15  10:45:57`
// 2021年6月15日  10:45:57
```

### 13-5  获取日期

```js
        var d= new Date();

        console.log("获取时间戳,1970/1/1 0:0:0到现在的毫秒数", d.getTime() );

        console.log("获取年",d.getFullYear());
        console.log("获取月,月小1",d.getMonth());
        console.log("获取日",d.getDate());

        console.log("获取星期,星期日是0",d.getDay());

        console.log("获取时",d.getHours());
        console.log("获取分",d.getMinutes());
        console.log("获取秒",d.getSeconds());
        console.log("获取毫秒",d.getMilliseconds());
//------------------------------------------------------
        var num = 9;
        // 转为字符串 判断长度  ,如果 长度小于 前面拼接 0 
        console.log( num.toString().length <2 ? "0"+num.toString(): num.toString());

// es6新增字符串方法
// 开头补齐 padStart(长度,补齐值)
// 结尾补齐 padEnd(长度,补齐值) 
        console.log( num.toString().padStart(2,"0") );
```

### 13-6   封装时间格式

```js
function myTime(){
var d= new Date();

var year= d.getFullYear();
var mouth= (d.getMonth()+1).toString().padStart(2,"0");
var dates= d.getDate().toString().padStart(2,"0");

var hours= d.getHours().toString().padStart(2,"0");
var minutes= d.getMinutes().toString().padStart(2,"0");
var seconds= d.getSeconds().toString().padStart(2,"0");
var milliseconds= d.getMilliseconds().toString().padStart(2,"0");

return `${year}年${mouth}月${dates}日 ${hours}:${minutes}:${seconds}:${milliseconds}`;

   }

//   var x=  myTime();

  setInterval(function(){
  document.getElementById("h1").innerText= myTime();
        },1);
```

### 13.7  倒计时

```js
//设置计时器
setInterval(function(){
var nowTime=new Date();
var endTime=new Date('2022-12-31 12:00:00');
if( endTime - nowTime >0){
            
    // console.log(endTime);
   var s= endTime.getTime()- nowTime.getTime();

    var tian= Math.floor( s /( 1000*60*60*24 ) ).toString().padStart(2,"0");
    // console.log("天",tian);

    var shi=  Math.floor( s/(1000*60*60) %24).toString().padStart(2,"0");
    // console.log("时",shi);

    var fen =Math.floor( s/(1000*60)%60 ).toString().padStart(2,"0");
    // console.log("分",fen);

  var miao =Math.floor( s/(1000)%60 ).toString().padStart(2, '0');
   // console.log("秒",miao);
   var haomiao= Math.floor(s%1000);
    // console.log("毫秒",haomiao);
    document.getElementById("h2").innerText=`${tian}天  ${shi}:${fen}:${miao}:${haomiao} `;

  }else{
       document.getElementById("h2").innerText="已经到期了";
     }
 },1);
```

### 13-8  设置日期

```js
        var d= new Date();

        // console.log(d);


        // d.setFullYear('2020');
        // d.setMonth('3');
        // d.setDate('19');
        // d.setHours('19');

        // console.log(d);

        var t= d.getTime();
        console.log( new Date(  t-1000*60*60*24 ) );
```

# 2.13

### 13.1 综合案例之博客管理系统

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .form {
            display: flex;
        }
        .table {
            border-collapse: collapse;
            width: 70vw;
            text-align: center;
        }
        .table th,
        .table td {
            border: 1px solid brown;
        }

        .night {
            background: black;
            color: white;
        }
        #editOk {
            display: none;
        }
    </style>
</head>

<body>
    <h1>XXXX 博客管理系统</h1>
    <!-- 添加 -->
    <div>
        <form class="form">
            <div>
                <label for="title">新闻标题：</label>
                <input type="text" id="title">
            </div>
            <div>
                <label for="msg">新闻内容：</label>
                <input type="text" id="msg">
            </div>
            <div>
                <label for="user">作者姓名</label>
                <select name="" id="user">
                    <option value="张总编">编辑一部</option>
                    <option value="李总编">编辑二部</option>
                </select>
            </div>
            <div>
                <input type="button" value="添加新闻" id="add">
                <input type="button" value="确认修改" id="editOk">

            </div>
        </form>
    </div>
    <!-- 搜索 -->
    <div>
        <label for="">新闻检索：</label>
        <input type="text" id="search">
        <button id="searchBtn">搜索</button>
    </div>

    <button onclick="delAll()">全部删除</button>
    <button onclick="openClose()">开启夜间模式</button>

    <!-- 展示 -->
    <table class="table">
        <thead>
            <tr>
                <th>序号</th>
                <th>新闻标题</th>
                <th>新闻内容</th>
                <th>作者</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody id="tbody">
            <!-- <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                    <button>删除</button>
                </td>
            </tr> -->
        </tbody>
    </table>
    <script src="./01.js"></script>
</body>

</html>
```

```js
// 初始数据
// var arr=[
//     { "id":1,"title":"aaaa","msg":"aaaaaaaa","user":"张总编" },
//     { "id":2,"title":"bbbb","msg":"bbbbbbbb","user":"张总编" },
//     { "id":3,"title":"cccc","msg":"cccccccc","user":"张总编" },
//     { "id":4,"title":"dddd","msg":"dddddddd","user":"李总编" }
// ];

var arr = localStorage.getItem("p2KaoShi") ? JSON.parse(localStorage.getItem("p2KaoShi")).info : []
//渲染
function show(res) {
    var str = "";
    if (res.length > 0) {

        for (var i = 0; i < res.length; i++) {
            str += `
            <tr>
                <td>${i+1}</td>
                <td>${res[i].title}</td>
                <td>${res[i].msg}</td>
                <td>${res[i].user}</td>
                <td>
                    <button onclick="del(${res[i].id})">删除</button>
                    <button onclick="edit(${res[i].id})">修改</button>

                </td>
            </tr>
            `
        }

    } else {
        str += `
            <tr > <th colspan="5">暂无数据,请添加</th>  </tr>
        `
    }

    document.getElementById("tbody").innerHTML = str;
}
// 页面加载完成调用 渲染方法
window.onload = function () {
    show(arr);
}
// 删除 
function del(id) {
    var index = arr.findIndex(function (v) {
        return v.id == id
    })
    arr.splice(index, 1);
    localStorage.setItem("p2KaoShi", JSON.stringify({
        "info": arr
    }));
    show(arr);
}
//全部删除
function delAll() {
    arr = [];
    localStorage.setItem("p2KaoShi", JSON.stringify({
        "info": arr
    }));
    show(arr);
}
//添加功能
var addDom = document.getElementById("add");
addDom.onclick = function () {
    //  获取表单
    var titleDom = document.getElementById("title");
    var msgDom = document.getElementById("msg");
    var userDom = document.getElementById("user");
    //  获取表单值
    var title = titleDom.value;
    var msg = msgDom.value;
    var user = userDom.value;

    if (title && msg && user) {
        //  添加到数组
        arr.push({
            "id": new Date().getTime(),
            "title": title,
            "msg": msg,
            "user": user
        })
        //  调用渲染表格方法
        localStorage.setItem("p2KaoShi", JSON.stringify({
            "info": arr
        }));
        show(arr);
    } else {
        alert("不能为空");
    }
}

// 开启/关闭夜间模式
var flag = false;

function openClose() {
    flag = !flag;

    var e = event || window.event;

    if (flag == true) {
        document.body.classList.add("night");
        e.target.innerText = "关闭夜间模式";
    } else {
        document.body.classList.remove("night");
        e.target.innerText = "开启夜间模式";
    }
}
// 按下回车搜索
var searchDom = document.getElementById("search");
searchDom.onkeydown = function () {
    // 获取所有tr 
    var trsDom = document.querySelectorAll("#tbody > tr");
    // 获取 搜索框值
    var e = event || window.event;
    var search = searchDom.value;
    // 让所有tr 去除 搜索样式
    for (var j = 0; j < trsDom.length; j++) {
        trsDom[j].style.background = "";
    }
    // 如果 按下 回车 并且 输入框有值 
    if (e.keyCode == 13 && search) {
        // 循环 判断 哪一项 符合
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].title.includes(search) || arr[i].msg.includes(search) || arr[i].user.includes(search)) {
                // 符合 加 背景颜色   
                trsDom[i].style.background = "red";
            } else {
                // 不符合 清除 背景颜色
                trsDom[i].style.background = "";
            }
        }
    }
}

// 点击按钮搜索
var searchBtnDom = document.getElementById("searchBtn");
searchBtnDom.onclick = function () {
    var search = searchDom.value;
    // 获取所有tr 
    var trsDom = document.querySelectorAll("#tbody > tr");
    // 让所有tr 去除 搜索样式
    for (var j = 0; j < trsDom.length; j++) {
        trsDom[j].style.background = "";
    }
    if (search) {
        // 循环 判断 哪一项 符合
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].title.includes(search) || arr[i].msg.includes(search) || arr[i].user.includes(search)) {
                // 符合 加 背景颜色   
                trsDom[i].style.background = "blue";
            } else {
                // 不符合 清除 背景颜色
                trsDom[i].style.background = "";
            }
        }
    }
}

// 点击修改

var editIndex;//定义全局变量,传递下标给修改确认时使用

function edit(id) {
    var index = arr.findIndex(function (v) {
        return v.id == id;
    })
    addDom.style.display = "none";
    document.getElementById("editOk").style.display = "block";

    //  获取表单
    var titleDom = document.getElementById("title");
    var msgDom = document.getElementById("msg");
    var userDom = document.getElementById("user");
    //  获取表单值
    titleDom.value = arr[index].title;
    msgDom.value = arr[index].msg;
    userDom.value = arr[index].user;
    //给修改id全局变量赋值
    editIndex = index;
}


// 确认修改
var editOkDom = document.getElementById("editOk");
editOkDom.onclick = function () {
    //  获取表单
    var titleDom = document.getElementById("title");
    var msgDom = document.getElementById("msg");
    var userDom = document.getElementById("user");
    //  获取表单值
    var title = titleDom.value;
    var msg = msgDom.value;
    var user = userDom.value;

    arr[editIndex].title = title;
    arr[editIndex].msg = msg;
    arr[editIndex].user = user;
    localStorage.setItem("p2KaoShi", JSON.stringify({
        "info": arr
    }));
    show(arr);
//去空
    titleDom.value = "";
    msgDom.value = "";

    addDom.style.display = "block";
    editOkDom.style.display = "none";
}
```

### 13.2  !!!案例--搜索-全选反选--搜索--增-删-改-隔行变色

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .form {
            display: flex;
        }
        .table {
            border-collapse: collapse;
            width: 70vw;
            text-align: center;
        }
        .table th,
        .table td {
            border: 1px solid brown;
        }

        .night {
            background: black;
            color: white;
        }
        #editOk {
            display: none;
        }
    </style>
</head>

<body>
    <h1>XXXX 博客管理系统</h1>
    <!-- 添加 -->
    <div>
        <form class="form">
            <div>
                <label for="title">新闻标题：</label>
                <input type="text" id="title">
            </div>
            <div>
                <label for="msg">新闻内容：</label>
                <input type="text" id="msg">
            </div>
            <div>
                <label for="user">作者姓名</label>
                <select name="" id="user">
                    <option value="张总编">编辑一部</option>
                    <option value="李总编">编辑二部</option>
                </select>
            </div>
            <div>
                <input type="button" value="添加新闻" id="add">
                <input type="button" value="确认修改" id="editOk">

            </div>
        </form>
    </div>
    <!-- 搜索 -->
    <div>
        <label for="">新闻检索：</label>
        <input type="text" id="search">
        <button id="searchBtn">搜索</button>
    </div>

    <button onclick="delAll()">全部删除</button>
    <button onclick="openClose()">开启夜间模式</button>

    <!-- 展示 -->
    <table class="table">
        <thead>
            <tr>
                <th>序号</th>
                <th>新闻标题</th>
                <th>新闻内容</th>
                <th>作者</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody id="tbody">
            <!-- <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                    <button>删除</button>
                </td>
            </tr> -->
        </tbody>
    </table>
    <script src="./01.js"></script>
</body>

</html>
```

```js
// 1、渲染

//1-1、模拟数据
// var arr= [
//     {"id":11,"check":false,"name":"百度","job":"前端工程师","money":28000},
//     {"id":2 2,"check":false,"name":"百度1","job":"前端工程师1","money":38000},
//     {"id":33,"check":false,"name":"百度2","job":"前端工程师2","money":48000},
//     {"id":44,"check":false,"name":"百度3","job":"前端工程师3","money":58000},
    
// ];

var arr=localStorage.getItem("p20616")?JSON.parse(  localStorage.getItem("p20616") ).info :[]

function show(res){
    var str="";
    for(var i=0;i<res.length;i++){
        if( i%2 ==0){
            str+=`
            <tr class="active">
                <td>
                    <input type="checkbox" ${res[i].check == true? "checked" :"" }  oninput="fan(${res[i].id})" > 
                </td>
                <td>${res[i].name}</td>
                <td>${res[i].job}</td>
                <td>${res[i].money}</td>
                <td>
                    <button onclick="del(${res[i].id})">删除</button>
                    <button onclick="edit(${res[i].id})">修改</button>
                </td>
            </tr>
            `
        }else{
            str+=`
            <tr >
                <td>
                    <input type="checkbox" ${res[i].check == true? "checked" :"" }  oninput="fan(${res[i].id})" > 
                </td>
                <td>${res[i].name}</td>
                <td>${res[i].job}</td>
                <td>${res[i].money}</td>
                <td>
                    <button onclick="del(${res[i].id})"> 删除</button>
                    <button onclick="edit(${res[i].id})">修改</button>
                </td>
            </tr>
            `  
        }   
    }
    document.getElementById("tbody").innerHTML=str;
}
window.onload=function(){
    show(arr);
}
// 删除

function del(id){
    var index= arr.findIndex(function(v){
        return v.id == id;
    })
    arr.splice(index,1);
    localStorage.setItem("p20616",JSON.stringify({ "info":arr }))
    show(arr);
}

function a(){
    var e= event ||window.event;

    // console.log(e.target.checked)
    var v= e.target.checked;
    for(var i=0;i<arr.length;i++){
        arr[i].check = v;
    }
    localStorage.setItem("p20616",JSON.stringify({ "info":arr }))
    show(arr);

}
//反选
function fan(id){
    var index= arr.findIndex(function(v){
        return v.id == id;
    })
    var e= event || window.event
    arr[index].check =e.target.checked;

    
    var i = arr.findIndex(function(value){
        return value.check === false
    })

    if( i == -1){
        document.getElementById("a").checked =true;
    }else{
        document.getElementById("a").checked =false;
    }
    localStorage.setItem("p20616",JSON.stringify({ "info":arr }))
    show(arr);

}
//全部删除
function clearAll(){
    arr=[];
    localStorage.setItem("p20616",JSON.stringify({ "info":arr }))
    show(arr);
}
//添加
var addDom=document.getElementById("add");
addDom.onclick=function(){
    var nameDom=document.getElementById("name");
    var jobDom=document.getElementById("job");
    var moneyDom=document.getElementById("money");

    var name= nameDom.value;
    var job= jobDom.value;
    var money= moneyDom.value;

    if(name && job && money){
        arr.push(
            {"id":new Date().getTime(),"check":false,"name":name,"job":job,"money":money}, 
        )
        localStorage.setItem("p20616",JSON.stringify({ "info":arr }))
        show(arr);
    }else{
        alert("不能为空");
    }
     //清空输入框
    nameDom.value="";
    jobDom.value="";
    moneyDom.value=""
  
}
//搜索
var searchFnDom=document.getElementById("searchFn");
searchFnDom.onclick=function(){
    var searchVal= document.getElementById("search").value;

    var nArr=arr.filter(function(value){
        return value.name.includes(searchVal)
    })
    localStorage.setItem("p20616",JSON.stringify({ "info":arr }))
    show(nArr);
}


var editIndex;
//修改
function edit(id){
    var index= arr.findIndex(function(v){
        return v.id == id;
    })

    editIndex =index;

    var enameDom=document.getElementById("ename");
    var ejobDom=document.getElementById("ejob");
    var emoneyDom=document.getElementById("emoney");

    enameDom.value = arr[index].name;
    ejobDom.value= arr[index].job;
    emoneyDom.value= arr[index].money;

}
//修改确认
var editOk=document.getElementById("editOk");

    editOk.onclick=function(){
        var enameDom=document.getElementById("ename");
        var ejobDom=document.getElementById("ejob");
        var emoneyDom=document.getElementById("emoney");

        var name= enameDom.value;
        var job= ejobDom.value;
        var money= emoneyDom.value;

        arr[editIndex].name=name;
        arr[editIndex].job=job;
        arr[editIndex].money=money;
//存储
        localStorage.setItem("p20616",JSON.stringify({ "info":arr }))
        show(arr);

    }
```

### 13-3  开启隔行变色--原理

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
  <span>全选</span>  <input type="checkbox" oninput="a()" id="a">

  <ul id="ul">
      <!-- <li>
          <input type="checkbox"> <span>111</span>
      </li> -->
     
  </ul>

  <script>
      var arr=[
          { "id":1,"title":"1111","check":true},
          { "id":2,"title":"2222","check":false},
          { "id":3,"title":"3333","check":true},
          { "id":4,"title":"4444","check":true}

      ];

      function show(res){
          var str="";
          for(var i=0;i<res.length;i++){
            str+=`
            <li>
                <input type="checkbox" ${res[i].check == true ?"checked":"" }  oninput="fan(${res[i].id})"> 
                <span>${res[i].title}</span>
            </li>
            `
          }
          document.getElementById("ul").innerHTML=str;
      }
      show(arr);

// 全选
      function a(){
        //   console.log("aaaaaaaa");
        var e= event || window.event;
        // console.log( e.target.checked );
        for(var i=0;i<arr.length;i++){
            arr[i].check =  e.target.checked 
        }

        show(arr);
      }
// 反选
      function fan(id){
        var index= arr.findIndex(function(v){
            return v.id == id;
        })
        var e= event || window.event;
        arr[index].check = e.target.checked;
        show(arr);
        // console.log(arr);
        var i = arr.findIndex(function(v){
            return v.check == false;
        })
        if(i==-1){
            document.getElementById("a").checked= true;
        }else{
            document.getElementById("a").checked= false;
        }
      }      
  </script>
</body>
</html>
```

### 13.4    全选反选--原理

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
  <span>全选</span>  <input type="checkbox" oninput="a()" id="a">
  <ul id="ul">
      <!-- <li>
          <input type="checkbox"> <span>111</span>
      </li> -->    
  </ul>
  <script>
      var arr=[
          { "id":1,"title":"1111","check":true},
          { "id":2,"title":"2222","check":false},
          { "id":3,"title":"3333","check":true},
          { "id":4,"title":"4444","check":true}
      ];

      function show(res){
          var str="";
          for(var i=0;i<res.length;i++){
            str+=`
            <li>
                <input type="checkbox" ${res[i].check == true ?"checked":"" }  oninput="fan(${res[i].id})"> 
                <span>${res[i].title}</span>
            </li>
            `
          }
          document.getElementById("ul").innerHTML=str;
      }
      show(arr);

// 全选
      function a(){
        //   console.log("aaaaaaaa");
        var e= event || window.event;
        // console.log( e.target.checked );
        for(var i=0;i<arr.length;i++){
            arr[i].check =  e.target.checked 
        }

        show(arr);
      }
// 反选
      function fan(id){
        var index= arr.findIndex(function(v){
            return v.id == id;
        })
        var e= event || window.event;
        arr[index].check = e.target.checked;
        show(arr);
        // console.log(arr);
        var i = arr.findIndex(function(v){
            return v.check == false;
        })
        if(i==-1){
            document.getElementById("a").checked= true;
        }else{
            document.getElementById("a").checked= false;
        }
      }
      
  </script>


</body>
</html>
```



# 2.14

### 14-1--拖动元素

```html
<div class="box">
<!-- 拖动元素 -->
<h1 draggable="true" ondragstart="drag()" id="one">哈哈哈</h1>
</div>

<!-- 目标元素 -->
<div class="box" ondragover="over()" ondrop="drop()" id="box2"></div>

    <script>
        function drag(){
            var e=event ||window.event;

            e.dataTransfer.setData("id",e.target.id)
        }

        function over(){
            var e=event ||window.event;
            e.preventDefault();
        }

        function drop(){
            var e=event ||window.event;
            e.preventDefault();
            var id=  e.dataTransfer.getData("id");

document.getElementById("box2").appendChild( document.getElementById(id) )
        }
```

### 14-2  svg矢量图

```js
    <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">

        <rect width="100" height="100" style="fill:rgb(0,0,255);stroke-width:1;
stroke:rgb(0,0,0)" />

    </svg>
```

### 14-3  canvas

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <canvas width="300" height="300" style="border:1px solid #d3d3d3;" id="one"></canvas>

    <script>
        var c = document.getElementById("one");
        var ctx = c.getContext("2d");
        ctx.beginPath(); //
        ctx.moveTo(0, 0); //开始位置
        ctx.lineTo(300, 300);
        ctx.strokeStyle = "red";
        ctx.stroke(); //画线条
        ctx.closePath();
        ctx.beginPath(); //
        ctx.rect(50, 50, 100, 200);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath(); //
        //      圆心x y ,半径，开始角度,结束角度 （Math.PI  === 180度）
        ctx.arc(100, 100, 30, 0, Math.PI);
        ctx.stroke();
        ctx.closePath();
    </script>
</body>

</html>
```

### 14.4  Apache ECharts可视化图标库

一个基于 JavaScript 的开源可视化图表库https://echarts.apache.org/zh/index.html

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <!-- 引入 ECharts 文件 -->
    <title>ECharts</title>
    <script src="./echarts.min.js"></script>
</head>

<body>
    <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
    <div id="main" style="width: 600px;height:400px;"></div>

    <script type="text/javascript">

        var arr=[
                    {"name":"衬衫","value":50},
                    {"name":"羊毛衫","value":20},
                    {"name":"雪纺衫","value":36},
                    {"name":"雪纺衫2","value":36},
                    {"name":"雪纺衫2","value":36},
                ]

        var x =[];
        var y=[];
        for(var i=0;i<arr.length;i++){
            x.push( arr[i].name );
            y.push( arr[i].value );
        }

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: x
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data:y,
                itemStyle: {
            normal: {
　　　　　　　　//这里是重点
                color: function(params) {
                	//注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                    var colorList = ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83', '#ca8622'];
                    return colorList[params.dataIndex]
                }
            }
        }
            }],                      
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    </script>
</body>
</html>
```

### 14.5  动画

### 14.6   案例左右穿梭框之两数组方法

```html
<!DOCTYPE html>
<html>
 <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>穿梭框</title>
    <style>
        #box {
            width: 600px;
            margin: auto;
        }
        #box2 {
            display: flex;
            padding: 10px;
        }
        #box2>div {
            height: 300px;
            width: 200px;
        }
        #box3, #box5 {
            border: 1px solid red;
        }
        #box4 {
            text-align: center;
        }
        ol>li {
            cursor: pointer;
            width: 80%;
        }
        ol>li:hover {
            background-color: #f90;
        }
        .active {
            background-color: #ddd;
        }
    </style>
</head>

<body>
    <div id="box">
        <div id="entry">
            <label>
                模块名称:<input type="text" id="moduleName" />
            </label>
            <button type="button" id="addModule">添加</button>
        </div>
        <div id="box2">
            <div id="box3">
                <h2>未选模块</h2>
                <ol id="box6"></ol>
            </div>
            <div id="box4">
                <button type="button" id="addAll">全部添加&gt;&gt;</button><br /><br />
                <button type="button" id="add">添加&gt;&gt;</button><br /><br />
                <button type="button" id="del">&lt;&lt;删除</button><br /><br />
                <button type="button" id="delAll">&lt;&lt;全部删除</button>
            </div>
            <div id="box5">
                <h2>已选模块</h2>
                <ol id="box7"></ol>
            </div>
        </div>
    </div>
    <script>
        //获取到频道名称模块 
        var moduleName = document.getElementById("moduleName");
        // 获取到添加按钮
        var addModule = document.getElementById("addModule");
        // 获取到左方盒子
        var box6 = document.getElementById("box6");
        // 获取到右方盒子
        var box7 = document.getElementById("box7");
        // 获取到全部添加按钮
        var addAll = document.getElementById("addAll");
        // 获取到添加到右边按钮
        var add = document.getElementById("add");
        // 获取到删除到左边按钮
        var del = document.getElementById("del");
        // 获取到删除全部按钮
        var delAll = document.getElementById("delAll");
 
        var tempArr1 = [];
        var tempArr2 = [];

        if (localStorage.obj1220) {
            var obj = JSON.parse(localStorage.obj1220);
            var left = obj.left;
            var right = obj.right;
            showDom(left, box6);
            showDom(right, box7);
        } else {
            var obj = {
                left: [],
                right: []
            }
            localStorage.obj1220 = JSON.stringify(obj);
        }
        //console.log("localStorage:",localStorage.obj1220);
 
        addModule.onclick = function () {
            
            var mName = moduleName.value;
            if (mName) {
                var obj = JSON.parse(localStorage.obj1220);
                obj.left.push(mName);
                console.log("obj:", obj);
                localStorage.obj1220 = JSON.stringify(obj);
                var left = obj.left;
                var right = obj.right;
                showDom(left, box6);
                showDom(right, box7);
                moduleName.value = "";
            } else {
                alert("模块名称不能为空");
            }
        }

        addAll.onclick = function () {
            all(1);
        }
 
        delAll.onclick = function () {
            all(vv0);
        }
 
        box6.onclick = function (event) {
            var e = event || window.event;
            upd(1, e);
        }

        add.onclick = function () {
            if (tempArr1.length > 0) {
                var obj = JSON.parse(localStorage.obj1220);
                var left = obj.left;
                var right = obj.right;
                var left = left.filter(function (a, b) {
                    //console.log("a:",a,"b:",b);
                    return tempArr1.indexOf(a) == -1;
                });
                console.log("left:", left);
                right = right.concat(tempArr1);
                console.log("right:", right);
                obj.left = left;
                obj.right = right;
                localStorage.obj1220 = JSON.stringify(obj);
                showDom(left, box6);
                showDom(right, box7);
                tempArr1 = [];
            } else {
                alert("请选择要添加的项");
            }
        }

        box7.onclick = function (event) {
            var e = event || window.event;
            upd(0, e);
        }

        del.onclick = function () {
            if (tempArr2.length > 0) {
                var obj = JSON.parse(localStorage.obj1220);
                var left = obj.left;
                var right = obj.right;
 
                var right = right.filter(function (a, b) {
                    //console.log("a:",a,"b:",b);
                    return tempArr2.indexOf(a) == -1;
                });
                console.log("left:", left);
                left = left.concat(tempArr2);
                console.log("right:", right);
                obj.left = left;
                obj.right = right;
                localStorage.obj1220 = JSON.stringify(obj);
                showDom(left, box6);
                showDom(right, box7);
                tempArr2 = [];
            } else {
                alert("请选择要添加的项");
            }
        }
 
        function upd(f, e) {
            //console.log("e:",e);
            var d = e.path[2];
            var lis = d.querySelectorAll("li");
            lis = Array.prototype.slice.call(lis);
            var i = 0;
 
            var obj = JSON.parse(localStorage.obj1220);
            var left = obj.left;
            var right = obj.right;
            if (e.target.nodeName == "LI") {
                i = lis.indexOf(e.target);
                if (e.target.classList.contains("active")) {
                    e.target.classList.remove("active");
                    if (f) {
                        var a = tempArr1.indexOf(left[i]);
                        tempArr1.splice(a, 1);
                    } else {
                        var b = tempArr1.indexOf(right[i]);
                        tempArr2.splice(b, 1);
                    }

                } else {
                    e.target.classList.add("active");
                    if (f) {
                        tempArr1.push(left[i]);
                    } else {
                        tempArr2.push(right[i]);
                    }
                }
            }
            console.log("tempArr1:", tempArr1);
            console.log("tempArr2:", tempArr2);
        }
        function all(f) {
            var obj = JSON.parse(localStorage.obj1220);
            var left = obj.left;
            var right = obj.right;
            if (f) {
                right = right.concat(left);
                left = [];
            } else {
                left = left.concat(right);
                right = [];
            }
            obj.left = left;
            obj.right = right;
            localStorage.obj1220 = JSON.stringify(obj);
            showDom(left, box6);
            showDom(right, box7);
        }
        function showDom(arr, dom) {
            dom.innerHTML = "";
            var li = "";
            for (var i = 0; i < arr.length; i++) {
                if (arr[i]) {
                    li += "<li>" + arr[i] + "</li>";
                }
            }
            dom.innerHTML = li;
        }
    </script>
</body>
</html>
```

### 14.7  分页原理

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .page {
            display: flex;
        }
    </style>
</head>

<body>
    <ul id="ul">

    </ul>
    <p>
        总 <span id="total">x</span>页 每页显示 5条 当前第 <span id="nowpage">x</span>页
    </p>

    <div class="page">
        <button onclick="prevPage()">上一页</button>

        <div id="pageBtn">
            <!-- <button>1</button>
             <button>2</button>
             <button>3</button> -->
        </div>

        <button onclick="nextPage()">下一页</button>

        <input type="text"> <button>跳转</button>
    </div>

    <script>
        var totalDom = document.getElementById("total");
        var nowpageDom = document.getElementById("nowpage");

        var page = 1; // 当前第一页
        var limit = 5; // 每页显示条数
        var total = 0;
        // 每页 显示5条  16 条数据 。 总共 4 页 
        var arr = [{
                "id": 1,
                "title": "aaa"
            },
            {
                "id": 2,
                "title": "bbb"
            },
            {
                "id": 3,
                "title": "ccc"
            },
            {
                "id": 4,
                "title": "ddd"
            },
            {
                "id": 5,
                "title": "eee"
            },
            {
                "id": 6,
                "title": "fff"
            },
            {
                "id": 7,
                "title": "ggg"
            },
            {
                "id": 8,
                "title": "hhh"
            },
            {
                "id": 9,
                "title": "iii"
            },
            {
                "id": 10,
                "title": "jjj"
            },
            {
                "id": 11,
                "title": "kkk"
            },
            {
                "id": 12,
                "title": "lll"
            },
            {
                "id": 13,
                "title": "mmm"
            },
            {
                "id": 14,
                "title": "nnn"
            },
            {
                "id": 15,
                "title": "ooo"
            },
            {
                "id": 16,
                "title": "ppp"
            },
        ];
        //console.log( arr.slice( (page-1)*limit ,page*limit) );// 分页原理

        // 计算 总 页数 = 总条数/每页显示条数 向上取整
        function totalFn(shuJu, tiaoShu) {
            return Math.ceil(shuJu.length / tiaoShu)
        }
        // 循环 分页 按钮
        function pageBtn(n) {
            // n 总页数 4
            var str = "";
            for (var i = 0; i < n; i++) {
                str += `
                <button onclick="fy(${i+1})">${i+1}</button>
                `
            }
            document.getElementById("pageBtn").innerHTML = str;

        }
        // 渲染
        function show(res) {
            var str = "";
            for (var i = 0; i < res.length; i++) {
                str += `
                     <li>${res[i].title}</li>
                `
            }
            document.getElementById("ul").innerHTML = str;
        }
        window.onload = function () {
            total = totalFn(arr, limit);
            pageBtn(total);
            totalDom.innerText = total;
            nowpageDom.innerText = page;

            show(arr.slice((page - 1) * limit, page * limit))
        }
        // 点击  按钮 1 2 3 4 
        function fy(n) {
            page = n;
            show(arr.slice((page - 1) * limit, page * limit));
            nowpageDom.innerText = page;

            var e = event || window.event;
            var btns = e.target.parentNode.children;
            for (var i = 0; i < btns.length; i++) {
                btns[i].style.color = "black";
            }
            e.target.style.color = "red";

        }
        // 下一 页
        function nextPage() {
            if (page < total) {
                page++;

                show(arr.slice((page - 1) * limit, page * limit));
            } else {
                alert("已经是最后一页了")
            }
        }
        //   上一页

        function prevPage() {
            if (page > 1) {
                page--;

                show(arr.slice((page - 1) * limit, page * limit));
            } else {
                alert("已经是首页了")
            }
        }
    </script>

</body>

</html>
```

# 2.15



# 2.16

### 数组扁平化

```js
// var arr=[ 1,"aa",true,{"name":"gao"}, [1,2]  ];
        var arr=[ 1,2,3,[4,5,[6,7]] ]; // 多维数组
        //递归 降维  / 扁平化
        var x=[]
        function xx(arr){    
            for(var i=0;i<arr.length;i++){
                if( Array.isArray( arr[i] ) ){
                    xx(arr[i])
                }else{
                    x.push(arr[i])
                }
            }
            return x;            
        }
         console.log(  xx(arr) );
```

### 回调函数

```js
//函数声明 
/*
    function fn1(){
        console.log("111")
    }
    fn1();

    var fn2=function(){
        console.log("222")

    }
    fn2()
    var fn3=new Function("x","y","return x+y");
    console.log( fn3(1,2) )
*/
    // 把一个函数 当作参数 传入另一个函数  --- 回调函数
    function a( x ){
        x(); 
    }
    a( function(){ console.log("哈哈哈哈") }   )
//---------------------------

    function b(x){
        x( 1,2 )
    }
    b( function(j,p){
        console.log( j+p );
       }     
    )
```

### 闭包

```js
// 函数 当作 另一个函数的返回值 -- 闭包函数
// 可以访问 函数 内部变量的 函数叫闭包函数---闭包
// 通常写法： 函数嵌套函数  
// 优点、作用： 可以访问 另一个函数的内部变量 
//            变量 长期驻扎内存 ，不会销毁
// 缺点     ：内存泄漏
function ff(){
    var xx =123; 
    return function(){
        console.log("哈",xx); // 闭包变量
    }
}  
ff()();
  // 函数当作 参数值  -- 回调 函数
  // 函数当作 返回值  -- 闭包 函数
```

### 16-1  留言板案例

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/1.css">
</head>

<body>
    <!-- 发表留言 -->
    <div class="box1">
        <div class="header" id="header">
            <p>头像</p>
            <img src="./images/a.PNG" alt="">
            <img src="./images/b.PNG" alt="">
            <img src="./images/c.PNG" alt="">
            <img src="./images/d.PNG" alt="">
        </div>

        <textarea name="" id="msg" cols="30" rows="10" maxlength="18"></textarea>
        <div class="addbox">
            <button id="add">发表 </button>
            <p>还可以输入<span id="num">18</span>个字，最多18个</p>
        </div>
    </div>

    <!-- 留言展示 -->
    <div class="box2" id="box2">
        <!-- <div>
            <div class="item"> 
                <img src="./img/a.PNG" alt="">
                <p>是，，，，短发家里的飞机啊算了</p>
                <button>删除</button>
            </div>
            <p>2020-11-11 下午3:34:11</p>
            <hr/>
        </div> -->
    </div>

    <script src="./1.js"></script>
</body>

</html>
```

```css
*{
    margin: 0;
    padding: 0;
}
.box1{
    width: 360px;
    border: 1px solid red;

}
.header{
    display: flex;
    align-items: center;
}
.header > img{
    width: 80px;
    height: 80px;
}
#msg{
    width: 350px;
}
.addbox{
    display: flex; 
    justify-content: space-between; 
}
.box2{
    margin-top: 10px;
    width: 360px;
    border: 1px solid red;
}
.item{
    display: flex;
    justify-content: space-between;
}
.item >img {
    width: 50px;
    height: 50px;

}
.b{
    border: 5px solid red;
}
```

```js
//模拟数据
// var arr=[
//     // { "id":11, "img":"./img/a.PNG","msg":"啊啊啊啊","time":11111111},
//     // { "id":22, "img":"./img/b.PNG","msg":"啊啊啊啊1","time":11111111},
//     // { "id":33, "img":"./img/c.PNG","msg":"啊啊啊啊2","time":11111111},
//     // { "id":44, "img":"./img/d.PNG","msg":"啊啊啊啊3","time":11111111},

// ]

var arr = localStorage.getItem("p2062103") ? JSON.parse(localStorage.getItem("p2062103")).info : []

function show(res) {
    var str = "";
    for (var i = 0; i < res.length; i++) {
        str += `
        <div>
            <div class="item"> 
                <img src="${res[i].img}" alt="">
                <p>${res[i].msg}</p>
                <button onclick="del(${res[i].id})">删除</button>
            </div>
            <p>${myTime(res[i].time)}</p>
            <hr/>
        </div>
        `
    }
    document.getElementById("box2").innerHTML = str;
}

window.onload = function () {
    show(arr);
}

//删除
function del(id) {

    //获得id普通函数写法
    // var index= arr.findIndex(function(v){
    //     return  v.id == id 
    // } )

    //获得id箭头函数写法
    var index = arr.findIndex(v => v.id == id)
    //找到下标,删除数据
    arr.splice(index, 1);
    //删除后保存
    localStorage.setItem("p2062103", JSON.stringify({
        "info": arr
    }));
    //最新的数据渲染到页面
    show(arr);
}

//获取图片
var img = document.querySelectorAll("#header >img");
//给四个图片节点添加点击事件,添加高亮样式(点中的加,其他的去样式)
for (let i = 0; i < img.length; i++) {
    img[i].onclick = function () {
        for (var j = 0; j < img.length; j++) {
            img[j].classList.remove("b");
        }

        img[i].classList.add("b");

    }
}
//获取输入框的文字
var msgDom = document.getElementById("msg");
//当文字输入时,触发事件,显示还有多少文字可输入
msgDom.oninput = function () {
    var x = 18 - msgDom.value.length;

    document.getElementById("num").innerText = x;
}

//添加
var addDom = document.getElementById("add");
addDom.onclick = function () {
    //循环图片节点,判断是否有高亮class,有则终止
    var index = -1;
    for (var i = 0; i < img.length; i++) {
        if (img[i].classList.contains("b")) {
            index = i;
            break;
        }
    }
    //获取输入的留言板文字内容
    var msg = msgDom.value;
    //非空验证
    if (index > -1 && msg.length > 0) {
        //非空则加入到添加
        arr.push({
            "id": new Date().getTime(),
            "img": img[index].src,
            "msg": msg,
            "time": new Date().getTime()
        })
        //保存
        localStorage.setItem("p2062103", JSON.stringify({
            "info": arr
        }));
        //渲染页面
        show(arr);

    } else {
        alert("不能输入");
    }


    //  清空 内容 
    msgDom.value = "";
    document.getElementById("num").innerText = 18;
    for (var j = 0; j < img.length; j++) {
        img[j].classList.remove("b");
    }


}
//封装时间格式
function myTime(t) {
    var time = new Date(t);
    var year = time.getFullYear();
    var month = (time.getMonth() + 1).toString().padStart(2, "0");
    var date = time.getDate().toString().padStart(2, "0");

    var hours = time.getHours().toString().padStart(2, "0");
    var minutes = time.getMinutes().toString().padStart(2, "0");
    var seconds = time.getSeconds().toString().padStart(2, "0");

    return `${year}年 ${month}月${date}日 ${hours}:${minutes}:${seconds}`;
}
```



# 2.17

### 17.1  购物车案例--增-删-全选反选-数量加减

```html
<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/index.css">
    <title>Document</title>
</head>

<body>
    <div class="con W1410">
        <div class="con_top">
            <table>
                <thead class="con_top_head">
                    <tr>
                        <th>
                            <input type="checkbox" id="allCheck" > 全选
                        </th>
                        <th></th>
                        <th>商品名称</th>
                        <th>单价</th>
                        <th>数量</th>
                        <th>小计</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody class="con_top_body" >
                    <!-- <tr>
                        <td><input type="checkbox"  name="check" ></td>
                        <td class="img">
                            <img src="images/Bi.png" alt="">
                        </td>
                        <td class="name">
                            巨能写
                        </td>
                        <td class="price">39.9元</td>
                        <td class="math">
                            <div class="b1">-</div>
                            <div class="b2">10</div>
                            <div class="b3" >+</div>
                        </td>
                        <td class="maxPrice"><span>39.9</span>元</td>
                        <td class="del">X</td>
                    </tr> -->
                </tbody>
            </table>
            <div class="all">
                <div class="all_1">继续购物</div>
                <div class="all_2">共 <span id="all">0</span> 件商品，已选择 <span id="has">0</span> 件</div>
                <div class="all_3">合计：<span id="allPrice">39</span>元</div>
                <div class="all_4">去结算</div>
            </div>
        </div>
        <div class="con_bottom">
            <!-- <div class="bottom_box">
                <img src="images/Bi.png" alt="">
                <h4>巨能写</h4>
                <span>39.9元</span>
                <p>1000人好评</p>
                <div class="add">加入购物车</div>
            </div> -->            
        </div>
    </div>
    <script src="js/index.js"></script>
</body>

</html>
```

```js
// 推荐商品 数据
var arr=[
	{
        "id":11,
		"goodsName":"Redmi&emsp;AirDots真无线蓝牙",
		"img":"ErJi.png",
		"price":99.9,
		"goodsRatings":"4.3万人好评",
		"check":false
	}, {
        "id":22,
		"goodsName":"小米小书包",
		"img":"ShuBao.png",
		"price":29,
		"goodsRatings":"4万人好评",
		"check":false
	}, {
        "id":33,
		"goodsName":"小米巨能写中性笔",
		"img":"Bi.png",
		"price":9.99,
		"goodsRatings":"2068人好评",
		"check":false
	},{
        "id":44,
		"goodsName":"贝医生0+防蛀健齿牙膏",
		"img":"YaGao.png",
		"price":12.9,
		"goodsRatings":"5263万人好评",
		"check":false
	},{
        "id":55,
		"goodsName":"小米手环3/4通用腕带",
		"img":"ShouHuan.png",
		"price":19.9,
		"goodsRatings":"5384万人好评",
		"check":false
	}
]

// 购物车数据

// var carArr=[
//     {
//         "id":11,
// 		"goodsName":"Redmi AirDots真无线蓝牙",
// 		"img":"ErJi.png",
// 		"price":99.9,
// 		"check":false,
//         "num":1
// 	},
//     {
//         "id":22,
// 		"goodsName":"小米小书包",
// 		"img":"ShuBao.png",
// 		"price":29,
// 		"check":true,
//         "num":2
// 	}
// ]

var carArr=localStorage.getItem("p20622am")?JSON.parse( localStorage.getItem("p20622am") ).info :[];

// 渲染 推荐商品

function showGoods(arr){
    var str="";
    
    arr.forEach(function(v,index){
        str+=`
        <div class="bottom_box">
                <img src="images/${v.img}" alt="">
                <h4>${v.goodsName}</h4>
                <span>${v.price}元</span>
                <p>${v.goodsRatings}</p>
                <div class="add" onclick=add('${JSON.stringify(v)}')>加入购物车</div>
         </div>
        `
    })
    // for(var v of arr){
       
    // }
   document.querySelector(".con_bottom").innerHTML=str;

  
}
// 渲染 购物车
function showCar(arr){
    var str="";
    arr.forEach((v,index)=>{
        str+=`
        <tr>
            <td><input type="checkbox" ${v.check? "checked" :""}  name="check" oninput="oneCheck(${v.id})" ></td>
            <td class="img">
                <img src="images/${v.img}" alt="">
            </td>
            <td class="name">
                ${v.goodsName}
            </td>
            <td class="price">${v.price}元</td>
            <td class="math">
                <div class="b1" onclick="decrease(${v.id})">-</div>
                <div class="b2">${v.num}</div>
                <div class="b3" onclick="increase(${v.id})">+</div>
            </td>
            <td class="maxPrice"><span>${ (v.price*v.num).toFixed(2) }</span>元</td>
            <td class="del" onclick="del(${v.id})">X</td>
        </tr>
        `
    })

    document.querySelector(".con_top_body").innerHTML=str;
}

window.onload=function(){
    showGoods(arr);
    showCar(carArr);
    count(carArr);
}
//删除购物车数据
function del(id){
    // var index = carArr.findIndex(function(v){ return v.id == id });
    var index = carArr.findIndex(v=>v.id == id);
    carArr.splice(index,1);

   
    showCar(carArr);
    count(carArr);
    localStorage.setItem("p20622am",JSON.stringify({"info":carArr}));

}

// 数量减
function decrease(id){
    var index = carArr.findIndex(v=>v.id == id);
        if(carArr[index].num >1){
            carArr[index].num -=1;
            showCar(carArr);
        }else{
            carArr.splice(index,1);
            showCar(carArr);
        }
        count(carArr);
        localStorage.setItem("p20622am",JSON.stringify({"info":carArr}));  
}

// 数量加 
function increase(id){
    var index = carArr.findIndex(v=>v.id == id);
        carArr[index].num +=1;
        showCar(carArr);  
        count(carArr);
        localStorage.setItem("p20622am",JSON.stringify({"info":carArr}));
}

// 全选
var allCheckDom=document.getElementById("allCheck");
    allCheckDom.oninput=function(){
      
        var allCheck= allCheckDom.checked ;
        carArr.forEach(function(v,index){
            v.check= allCheck;
        })

        showCar(carArr);
        count(carArr);
        localStorage.setItem("p20622am",JSON.stringify({"info":carArr}));
    }

// 选中每一项
function oneCheck(id){
    var index = carArr.findIndex(v=>v.id == id);
        carArr[index].check=!carArr[index].check;

    var flag = carArr.findIndex(v=>v.check == false);
    if(flag==-1){
        allCheckDom.checked=true;
    }else{
        allCheckDom.checked=false;
    }
        showCar(carArr);
        count(carArr);
        localStorage.setItem("p20622am",JSON.stringify({"info":carArr}));
}

// 计算 共 X 件商品、已选择X 件、合计多少元

function count(arr){
    var total=0;// 共 X 件商品
    var buy  =0;//已选择X 件
    var money =0;//合计多少元

    arr.forEach(function(v,index){
        total += v.num;
        if(v.check == true){
            buy+= v.num;
            money +=  v.num * v.price;
        }
    })

    document.getElementById("all").innerText=total;
    document.getElementById("has").innerText=buy;
    document.getElementById("allPrice").innerText= money.toFixed(2);

}

// 加入购物车

function add(v){
    var obj= JSON.parse(v);

   var index= carArr.findIndex(function(v){
        return v.id == obj.id;
   })

   if(index == -1){

      carArr.push( {
        "id":obj.id,
		"goodsName":obj.goodsName,
		"img":obj.img,
		"price":obj.price,
		"check":obj.check,
        "num":1
	});

   }else{
       carArr[index].num +=1;
   }

   showCar(carArr);
   count(carArr);
   localStorage.setItem("p20622am",JSON.stringify({"info":carArr}));

}

```

### 17.2  表格样式商品管理--分类-分页-增删-改

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/index.css">
</head>
<body>
    
    <div class="box">
        <!-- 添加修改 -->
        <form  class="addEditForm">
            <div>
                <label for="">图片地址</label>
                <input type="text" id="img">
            </div>

            <div>
                <label for="">简介</label>
                <input type="text" id="name">
            </div>
            <div>
                <label for="">价格</label>
                <input type="text" id="price">
            </div>
            <div>
                <label for="">类别</label>
                <select name="" id="type">
                    <option value="冰箱">冰箱</option>
                    <option value="电脑">电脑</option>
                    <option value="手机">手机 </option>
                </select>
            </div>
            <div>
               
                <input type="button" value="添加" id="add">
                <input type="button" value="确认修改" id="editOk">

            </div>
        </form>

        <div id="search">
            <button>全部</button>
            <button>冰箱</button>
            <button>电脑</button>
            <button>手机</button>
        </div>

        <!-- 表格展示 -->
        <table class="showTable">
            <thead>
                <tr>
                    <th>图片</th>
                    <th>简介</th>
                    <th>价格</th>
                    <th>类别</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody id="tbody">
                <!-- <tr>
                    <td>
                        <img src="./img/bx1.jpg" alt="">
                    </td>
                    <td>aaaaaaaaaa</td>
                    <td>¥6777</td>
                    <td>电脑 </td>
                    <td>
                        <span>修改</span> &emsp; &emsp;
                        <span>删除</span>
                    </td>
                </tr> -->
            </tbody>
        </table>

        <div class="page"> 
            <span id="total">11</span>页
            <span>上一页</span>
            <ul id="pageList">
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
            </ul>
            <span>下一页</span>
        </div>

    </div>
    <script src="./js/index.js"></script>
</body>
</html>
```

```js
/*
var arr=[
    {
        "id":11,
        "img":"bx1",
        "name":"啊啊啊啊啊啊",
        "price":667,
        "type":"冰箱",
    },
    {
        "id":22,
        "img":"dn1",
        "name":"啊啊啊啊啊啊222",
        "price":444,
        "type":"电脑",
    },
    {
        "id":33,
        "img":"sj1",
        "name":"啊啊啊啊啊啊11",
        "price":666,
        "type":"手机",
    }

]
*/

var arr =localStorage.getItem("p20622pm")?JSON.parse(localStorage.getItem("p20622pm")).info :[];
var limit = 3;      //每页显示条数
var page =1;        //当前页数
var total =0;       //总页数
var type = "全部"; //筛选类型
var newArr=[];     //筛选后数组


function $(el){
   return document.getElementById(el);
}
function $all(el){
    return document.querySelectorAll(el)
}

//总页数
function totalFn(arr){
    total= Math.ceil(  arr.length / limit);
    $("total").innerText=total;

    var str=""
    for(var i=0;i<total;i++){
        str+=`
        <li  onclick="pageFn(${i+1})">${i+1}</li>
        `
    }
    $("pageList").innerHTML=str;

}

// 第 几页

function pageFn(p){
    page= p;
    if(type == "全部"){
        show( arr.slice( (page-1)*limit ,page*limit)  ); 
    }else{
        show( newArr.slice( (page-1)*limit ,page*limit)  )
    }
    pageClass(p);
   
}
// 选中 分页 按钮 加背景颜色
function pageClass(p){
    
    Array.from( $all("#pageList > li") ).forEach(v=>{
        v.style.background="gray"
    })

    $all("#pageList > li")[ p-1 ].style.background="red";
}



// 渲染
function show(arr){
    var str="";
    arr.forEach(function(v,index){
        str+=`
        <tr>
            <td>
                <img src="./img/${v.img}.jpg" alt="">
            </td>
            <td>${v.name}</td>
            <td>¥${v.price}</td>
            <td>${v.type}</td>
            <td>
                <span onclick=edit(${JSON.stringify(v)}) >修改</span> &emsp; &emsp;
                <span onclick="del(${v.id})">删除</span>
            </td>
        </tr>
        `
    })
    document.getElementById("tbody").innerHTML=str;
  
}

window.onload=function(){
    show( arr.slice( (page-1)*limit ,page*limit)  ); // 
    totalFn(arr);
    pageClass(page);
}
// 删除

function del(id){
    var index= arr.findIndex(v=>v.id == id);
    arr.splice(index,1);
    localStorage.setItem("p20622pm", JSON.stringify( {"info":arr}) );// 存
    show( arr.slice( (page-1)*limit ,page*limit)  );
    totalFn(arr);
}

// 筛选
var btnDom=document.querySelectorAll("#search >button");
for(let i=0;i<btnDom.length;i++){
  
    btnDom[i].onclick=function(){
     
        for(let j= 0;j<btnDom.length;j++){
            btnDom[j].classList.remove("active");
        }

        btnDom[i].classList.add("active");

         type= btnDom[i].innerText;
        // console.log(type);

        if( type == "全部"){
            page=1;
           

            show( arr.slice( (page-1)*limit ,page*limit)  );
            totalFn(arr);
            pageClass(page);
        }else{
          
            newArr= arr.filter(function(v){
                return v.type == type
            })
            page=1;
           
            show( newArr.slice( (page-1)*limit ,page*limit)  );
            totalFn(newArr);
            pageClass(page);
        }


    }
}

// 添加

$("add").onclick=function(){
    var img= $("img").value;
    var name= $("name").value;
    var price= $("price").value;
    var type= $("type").value;

    if(img && name && price  && type){
        arr.unshift({
            "id":new Date().getTime(),
            "img":img,
            "name":name,
            "price":price,
            "type":type,
        })
        show( arr.slice( (page-1)*limit ,page*limit)  );
        totalFn(arr);
        pageClass(page);
        localStorage.setItem("p20622pm", JSON.stringify( {"info":arr}) );// 存

    }else{
        alert("不能为空");
    }

}

//修改
var editIndex;
function edit(obj){
    $("editOk").style.display="block";

    $("add").style.display="none";
    // console.log(obj);
    editIndex = arr.findIndex(v=>v.id == obj.id);
    $("img").value =obj.img;
    $("name").value=obj.name;
    $("price").value=obj.price;
    $("type").value=obj.type;

}
// 确认修改
$("editOk").onclick=function(){
    
    var img= $("img").value;
    var name= $("name").value;
    var price= $("price").value;
    var type= $("type").value;
    arr[editIndex].img= img;
    arr[editIndex].name= name;
    arr[editIndex].price= price;
    arr[editIndex].type= type;
    show( arr.slice( (page-1)*limit ,page*limit)  );

    $("img").value ="";
    $("name").value="";
    $("price").value="";

    this.style.display="none";

    $("add").style.display="block";
    localStorage.setItem("p20622pm", JSON.stringify( {"info":arr}) );// 存

}

```



# 2.18

### 18.1穿梭框之4数组方法

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box{
            display: flex;
        }
        .box >div{
            width: 200px;
            min-height: 200px;
            border: 1px solid red;
        }
    </style>
</head>
<body>
    <div class="box">
        <!-- 左边 -->
        <div>
            <ul id="left">
                <!-- <li>111</li> -->
            </ul>
        </div>
        <!-- 中间 -->
        <div>
            <p id="allRight">全部向右</p>
            <p id="toRight"> 向右 </p>
            <p id="toLeft">  向左 </p>
            <p id="allLeft">全部向左</p>

        </div>

        <!-- 右边 -->
        <div>
            <ul id="right">
                <!-- <li>111</li> -->
            </ul>
        </div>

    </div>
    <script src="./01.js"></script>
</body>
</html>
```

```js
var left=[
    {"id":11,"name":"aaa","age":19},
    {"id":22,"name":"bbb","age":18},
    {"id":33,"name":"ccc","age":17},
    {"id":44,"name":"eee","age":16},

];

var right=[
    {"id":55,"name":"嗷嗷","age":199},
    {"id":66,"name":"哈哈","age":188},
    {"id":77,"name":"呵呵","age":177},
    {"id":88,"name":"哦哦","age":166},
];

var leftSelect=[];
var rightSelect=[];

// 渲染左边
function showLeft(arr){
    var str="";
    arr.forEach(function(v){
        str+=`
            <li onclick="leftSelectFn(${v.id})">${v.name} -- ${v.age} </li>
        `
    })

    document.getElementById("left").innerHTML=str;
}
// 选中左边
function leftSelectFn(id){
    var e= event || window.event;
   var index= leftSelect.findIndex(function(v){
        return v  == id
    })
    if(index == -1){
        leftSelect.push(id);
        e.target.style.background="red";
    }else{
        leftSelect.splice(index,1);
        e.target.style.background="";
    }

    console.log(leftSelect);
 
}

//渲染右边
function showRight(arr){
    var str="";
    arr.forEach(function(v){
        str+=`
        <li onclick="rightSelectFn(${v.id})">${v.name} -- ${v.age} </li>
        `
    })

    document.getElementById("right").innerHTML=str;
}

//选中右边
function rightSelectFn(id){
    var e= event || window.event;
   var index= rightSelect.findIndex(function(v){
        return v  == id
    })
    if(index == -1){
        rightSelect.push(id);
        e.target.style.background="red";
    }else{
        rightSelect.splice(index,1);
        e.target.style.background="";
    }

    console.log(rightSelect);
 
}

window.onload=function(){
    showLeft(left)
    showRight(right)
}

var toRightDom=document.getElementById("toRight");
    toRightDom.onclick=function(){
        // 根据左边 选中 的 数组 leftSelect=【11，22，33】
        //                                 id id id
        // 循环 这个  leftSelect 通过 id 找到 index ， right.push(  left[index] )

        leftSelect.forEach(function(v){
            var index = left.findIndex(function(value){
                return value.id == v
            })

            right.push( left[index] );

            left.splice(index,1);
        })

        showLeft(left)
        showRight(right)
        leftSelect=[];
        rightSelect=[];
    }

var toLeftDom=document.getElementById("toLeft");
toLeftDom.onclick=function(){
        // 根据左边 选中 的 数组 leftSelect=【11，22，33】
        //                                 id id id
        // 循环 这个  leftSelect 通过 id 找到 index ， right.push(  left[index] )

        rightSelect.forEach(function(v){
            var index = right.findIndex(function(value){
                return value.id == v
            })

            left.push( right[index] );

            right.splice(index,1);
        })

        showLeft(left)
        showRight(right)
        leftSelect=[];
        rightSelect=[];
    }

var allRightDom=document.getElementById("allRight");
    allRightDom.onclick=function(){
        var n= right.concat(left);
        right= n;
        left =[];
        showLeft(left)
        showRight(right)
    }

var allLeftDom=document.getElementById("allLeft");
    allLeftDom.onclick=function(){
        var n= left.concat(right);
        left= n;
        right =[];

        showLeft(left)
        showRight(right)

    }
```

# 第三阶段

## 3.01

### 1.1创建一个对象

```js
// 对象定义:无序的属性的集合

// 创建对象的方式1:   字面量
var obj={"name":"gao","age":18,"say":function(){},"hobby":["唱歌"]};

// 方式2:   new Object(); 实例化 构造函数

var obj2=new Object({"name":"gao"});
    obj2.age=18;
    console.log(obj2);

//方式3:
//Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。
        const person = {
            isHuman: false,
            printIntroduction: function () {
                console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
                //My name is Matthew. Am I human? true
            }
        };

        const me = Object.create(person);

        me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
        me.isHuman = true; // inherited properties can be overwritten

        me.printIntroduction();
        console.log("me:", me);

```

### 1.2  对象的操作

```js
// 无序属性的集合
var obj={};
// 增!!----对象的属性名含有空格或者特殊字符的用[]
obj.name="gao";
obj[" x y"]=8;
obj.age=18;
obj["% cz"]="99999";
console.log(obj);
// 删
delete obj.age;
delete obj["% cz"];
console.log(obj);
// 改
obj.name="wang";
console.log(obj);
// 查
console.log( obj.name );
console.log( obj[" x y"] );

//对象的遍历
for(let key in obj){
    console.log("key--",key);
    console.log("值value--", obj[key]);
}

//对象的key名唯一
console.log({a:1,a:2})  //结果为a:2


//Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。
```

### 1.3  创建多个对象方法1--工厂模式

工厂模式缺点:每个对象的方法重复,太耗费性能,没有从属关系,无法用 instanceof 判断,

```js
function students(name,age){
      var obj = {
      "name": name,
      "age": age,
      "say": function (msg) {
           console.log("会说", msg);
        }
     };
      return obj;
   }

var one = students("秦",19);//实例化对象
var two = students("赵",16);//实例化对象

console.log(one);
console.log(two);

one.say("陕西");
two.say("山西");
```

### 1.3  创建多个对象方法1--构造函数

构造函数模式:可用instanceof判断从属关系

```js
 // 构造函数 
function Students(name,age){
    this.name=name;
    this.age=age;
    this.say=function(msg){
        console.log("会说",msg)
    }
 }

var one =new Students("gao",18);//实例化对象
var two =new Students("wang",19);//实例化对象

console.log(one);
console.log(two);

one.say("山西");
two.say("陕西");

// 构造函数 函数名 首字母大写
// 构造函数 内部   this 关键词 为属性赋值
// 构造函数 需要 new （实例化为对象）
```

### 1.3  创建多个对象方法1--原型模式

```js
// 原型模式
function Students(name,age){
    // 属性 写在 构造函数内
    this.name=name;
    this.age=age;
}

 var x={
    "say":function(msg){
        console.log("会说",msg)
    },
    "yy":999
}

// prototype 原型对象 -- 方法
        Students.prototype=x;

        var one= new Students("gao",18);
        var two= new Students("wang",28);

        console.log(one);
        console.log(two);
// 证明 one two 对象 使用 一个 x 对象 
        // x.yy=888;
        one.__proto__.yy=8888;
        console.log( one.yy ); // 888
        console.log( two.yy ); // 888
```

### 1.4原型及   原型链

```js
// (原型)：每一个函数 中 都有一个 prototype 对象 ，这个对象叫原型对象；(原型)
function a(){

        }
//测试看看有没有
console.log( a.prototype );


//原型链： 每一个对象中 都有 __proto__  指向构造函数的 prototype （原型/原型对象） ，一直到null 为止，形成的作用域链叫 原型链。

var obj=new Object();//Object() 构造函数 有 prototype（原型）；

console.log( obj.__proto__ );

console.log( Object.prototype );

console.log( obj.__proto__ == Object.prototype );//对象中   __proto__  指向构造函数的 prototype 

console.log( obj.__proto__.__proto__ ); // null

// 每个对象中 constructor 指向 该对象的构造函数
console.log( obj.constructor);
console.log( obj.constructor == Object); // Object 构造函数
```

```js
//原型--原型链
function Person(name,age){
            this.name=name;
            this.age=age;
        }

        Person.prototype.minHeight="20cm";
        Person.prototype.dream=function(msg){
            console.log(`梦想是：`, msg)
        }

          
        var person=new Person("gao",20);

        console.log(person);

        console.log(person.__proto__  ==  Person.prototype);
        // 对象的 __proto__  指向 构造函数的 原型对象 

        console.log( Person.prototype.constructor == Person );

        console.log( Person.prototype.__proto__.__proto__ );

        console.log(  Object.prototype);
```

### 1.5  instanceof  in  ...

```js
        //instanceof 从属关系
        var arr=new Array();
        // console.log( arr instanceof Array );

        var obj= new Object();

        // console.log( obj instanceof Object );

        // var str="";
        var str =new String();
        // console.log( str instanceof String );


        function St(name,age){
            this.name= name;
            this.age=age;
        }

        St.prototype.minHeight="20cm";
    
        var one =new St("gao",30);//

        // console.log( one instanceof Object);
        // console.log( one instanceof St );
        console.log(one, one.name, one.age);
        console.log( one.minHeight );

        // 判断 one 对象上 有没有  name 属性 age 属性 minHeight属性
        // in 自身 + 原型链
        console.log( "name" in one );
        console.log( "age" in one );
        console.log( "minHeight" in one );
        console.log("------------------------------");
        
        // hasOwnProperty 是否是自身 的属性
        console.log( one.hasOwnProperty("name") );
        console.log( one.hasOwnProperty("age") );
        console.log( one.hasOwnProperty("minHeight") );
```

### 1.6  函数提升--

```js
// js   函数 是一等公民。
// 通过 调用 、事件驱动 可重复执行的代码块。
// 函数提升  用function 关键字声明的函数 有函数提升。
// 变量提升： 用var 声明的变量 会将 变量的声明 提升到它所在作用域的顶部；
        var i;

        for( i =0;i<arr.length;i++){

        }

        console.log(i);// arr.length

        fn1();
        // 字面量
        function fn1(){
            console.log("sssssss");
        }
        var fn1;
       


// fn2();// 报错 
// 函数表达式
        var fn2= function(){

        }

// new Function() 
/*
    var fn3= new Function("a","b","c","return a+b+c");
    console.log( fn3(1,2,3) );
*/
```

### 1.7  伪数组

#### 1.函数的属性和方法:

函数是由事件驱动的可以被调用的可重复使用的代码块,js中的函数是对象,因此函数也有属性和方法

```js
一具名函数(字面量函数):

name ();//函数调用可以放在函数声明的前后任何位置

function name(){

代码块

};

name ();

二匿名函数(函数表达式)

var fn=function(){

}

fn();//只能在函数后面被调用

自调用函数
(function(){

}());

//new Function()实例化函数----不常用
var fn=new Function("参数1","参数2","参数3"....,"return a+b+c"){

}

//区别
1.函数提升---用function 关键字声明的函数有函数提升

```

#### 2.js预解析

```js
解析所有的全局函数及全局变量,都当做window的属性和方法
//函数内的var声明的变量会变量提升

var fn=function(){  ==var a;
consloe.log(a)			a=undefined;
var a=10;				consloe.log(a)
}						a=10;
```

属性:

```js
length: 表示函数希望接收参数的个数 返回声明函数时传递的参数个数与实际调用时传递的参数个数没有关系

arguments:不定参数,调用时的参数集合是一个伪数组,是一个数组对象包含传入函数中的所有参数,主要用于保存函数参数
```

#### 3.伪数组转数组

```js
1.Array from(arguments)  //es6新语法
2.[...arguments]         //es6新语法
3.Array.prototype.slice.call
```



#### 4.函数递归

在函数内部调用的函数本身的函数,程序调用自身的变成技巧称之为**递归**,

 **优点: **可以用过少量的程序就可以描述出解题过程所需的重复计算,大大减少了程序的代码量,用有限的语句来定义对象的无限集合,

一般需要有边界条件,递归前进段和递归返回段,不满足时前进满足是返回  (例如阶乘)

#### 5.apply() call() bind():改变this指向

> apply() call()接收参数的方式不相同:
>
> ​		第一个参数都需要用到函数对象在函数体内第一个参数就是this的值,剩余的参数是需要传递给函数的值,call传的值可以是任意的apply()必须为数组;
>
> ​		经常用于扩展函数来一运行的作用域;
>
> ​		用来更改函数内部的this指针

> apply():应用于某一个对象的一个方法用另一个对象替换当前的对象的方法 
>
> ​	语法：B.apply(A,arguments)A对象用B对象的方法
>
> call():调用一个对象的方法,用另一个对象替换当前的对象的方法
>
> ​	语法：B.call(A,argsl1,argsl2) A对象调用B对象的方法

> apply() call() bind()比较:
>     apply() call()立即执行
>     bind()需要手动调用bind()()

>  call()直接传参call(1,2)
>     apply()用数组传参apply([1,2])
>     bind()()可以再任何一个括号内传参bind(1,2)()或者bind()(1,2)

#### 6.回调函数

函数A有一个参数这个参数是函数B 当函数A执行后执行函数B那么这个过程叫做  **回调**  (数组去重)

```js
function a(fn){
            fn(1,2)
   }
 a(function(a,b){
         console.log(a+b);
   });
```



#### 7.this指向

```js
谁调用指向谁()
//全局函数指向window
//对象中的函数--当前对象
//定时器/延时器中的this指向window
//事件--调用事件的当前对象
//对象中的方法里面的函数中(闭包)的this---window
//在函数内部再次声明一个函数时,内部函数中的this指向window

  // this ---对象
  // 普通 函数内部 this 指向 调用时所在对象
  //  调用 函数 .前面是什么 就是什么 ， .前面 没有 window
//-----------------------------
  // 全局函数 --window
  function a() {
      console.log(this);
  }
  a(); //-->window
//-----------------------------
  // 对象中的函数 -- 当前对象
  var obj = {
      say: function () {
          console.log(this);
      }
  }
  obj.say(); //-->obj
  var x = obj.say;
  x() //-->window
//-----------------------------
  //  延时器，定时器 -- -->window
  setTimeout(function () {
      console.log(this) // -->window
  }, 1000)
//-----------------------------
  // 闭包 -- window
  function fn() {
      return function () {
          console.log(this); //-->window
      }
  }
  fn()() // 
//-----------------------------
  // 事件  调用事件的 dom 对象
  var box = document.getElementById("box");
  box.onclick = function () {
      console.log(this); //-->box
  }
  function Fn1(a, b) {
      console.log("fn1-------", this, a, b);
  }
  var obj = {
      "name": "gao"
  };

//改变this指向
  Fn1.call(obj, 1, 2);

 //Fn1.apply(obj, 1, 2); //不是数组的话会出错
//Uncaught TypeError: CreateListFromArrayLike called on non-object
  Fn1.apply(obj, [1, 2]);

  Fn1.bind(obj)(1, 2);
```

#### 8.构造函数

与一般函数区别:
	//函数名首字母大写
	//调用方法:构造函数调用时需要通过new关键字进行调用
	//通过关键字this向实例中添加属性及方法
	//在new关键字调用时 后台自动返回一个对象 不需要我们书写
	//通过构造函数创建对象时避免代码重复:传递参数不同创建的对象有所不同;

```js
    var fun = function () {
        this.name = 'peter';
        return {
            name: 'jack'
        };
    }
    var p = new fun();
    console.log(p, p.name); // jack 
```



```js
    var fun = function () {
        this.name = 'peter';
        return 'jack';
    }
    var p = new fun();
    console.log(p, p.name); //peter

```

构造函数默认会返回this对象,如果人为 return一个基本数据类型,还是会返回this对象,特别的， 如果这个函数是构造函数， 则默认返回this对象， 如果构造函数内使用了return语句， 并且return后跟的是一个对象，则这个构造函数返回的是这个对象

通过instanceof 操作符 测试一个对象是不是由指定的构造器函数所创建的返回值是布尔 eg.consloe.log(name instanceof object)

#### 9.prototype属性

```js
保存所有实例的方法也就是原型,允许向对象添加属性和方法适用于所有的js对象

function person(){

}
person.prototype={

}

```

#### 10.原型链

原型链是一种关系,是实例对象和原型对象之间的关系,这种关系是通过原型(proto)来联系的。JavaScript 对象有一个指向一个原型对象的链。当试图访问一个对象的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾。

实例对象的原型__proto__和构造函数的原型prototype指向是相同的，实例对象中的__proto__原型指向的是构造函数中的原型prototype。 console.log(per.__proto__==Person.prototype);

#### 11.操作符

```js
instanceof  判断数据类型 判断属于哪一个构造函数

in 判断是  自身+原型链

hasOwnProperty  验证是否是自身的属性 不包含原型链属性
```



#### 12.工厂函数

```js
function studentS(name,age){
var obj{
name=name
age=age
}
var wk=students("赵",18);
consloe.log(wk);
```

#### 13.封装

封装是一种将抽象性函数接口的实现细节部分包装隐藏起来的方法要访问代码和数据必须通过接口控制
功能:我们可以修改自己的实现代码不用修改那些调用我们代码的程序片断加强代码安全性方便维护
优点:
	//连刚好的封装可以减少耦合
	//类内部的结构可以自由修改
	//可以对成员变量进行精准控制

# JS进阶02:---面向对象--jQuery选择器

补充

```js
dom树加载完全之后就立即加载

$.noConflict(); 释放$ 后面的$不可以使用避免多个框架$出现冲突
var wd=jQuery.noConflict();用wd(为任意参数)替代$
```



#### 1.面向对象的编程写法

**面向过程**就是分析出解决问题所需要的步骤，然后用函数把这些步骤一步一步实现，使用的时候一个一个依次调用就可以了；

**面向对象**是把构成问题事务分解成各个对象，建立对象的目的不是为了完成一个步骤，而是为了描叙某个事物在整个解决问题的步骤中的行为。

————————————————

1  面向过程编程中，开发者注重于程序功能实现的过程，编程过程中扮演类似执行者的角色
2  面向对象编程中，开发者注重于对象的创建和调用，编程过程中扮演类似指挥者的角色
3  面向过程编程中，开发者可以精准把控程序执行的每一步和每一个细节（比如：手洗衣服过程中，衣服的哪个部位需要多搓一会，扇扇子的时候多扇头还是扇脚）
4  面向对象编程中，开发者无需知道对象的每一个细节，对象如何工作交给对象的设计者完成（当然开发者常常扮演设计者的角色，同时已经有很多东西已经被设计好了）
5  面向过程设计方式在中小型项目中更有优势。开发者只需要想好步骤，再依据步骤写下来即可。
6  面向对象设计方式在大中型项目中更有优势。开发者设计好对象后，只需调用对象完成任务使得代码更简洁易懂易于维护。
7  面向对象设计方式在宏观上是面向对象的，在微观上依旧是面向过程的。 在每个对象的内部有着它们的行为属性（扫地、洗衣服、吹风），设计者在设计如何让它们工作的过程中依旧是按照面向过程的思想让程序按照步骤执行。由此可见：面向过程是程序设计的基本方式
————————————————

#### 2.面向对象三大好处:封装 继承 多态 特点还有一个   唯一 

继承:

```js
1/原型链继承:
语法:子.prototype=new 父()

		//优点:可以继承父类所有属性(自身+原型链)
 	  	//缺点:不可以动态给父类 构造函数 传参数
 function Father(name,sex){
            this.name=name;
            this.sex=sex;
        }
        Father.prototype.say=function(){
            console.log("会说陕西话");
        }

        // 子
        function Son(){

        }
Son.prototype= new Father( "王","男" );

        var one = new Son();
        console.log(one,one.name,one.sex);
        one.say();

        var two = new Son();
        console.log(two);
2/类式继承(借用构造函数实现继承/通过改变this实现继承)  		
语法:子类构造函数内 父类.call(this,参数1,参数2)

      //优点:可以给父类构造函数传参数
      //缺点:不能继承父类 的原型 对象
       function Father(name,sex){
            this.name=name;
            this.sex=sex;
        }
        Father.prototype.say=function(){
            console.log("会说陕西话");
        }

        function Son(a,b){
            // console.log(a,b); 
            Father.call(this,a,b);
        }

        var one =new Son("高","男");
        var two =new Son("王","女");
        console.log(one);
        console.log(two);
        // one.say();
3/组合继承    
	//优点:可以继承父类所有属性(自身+原型链),:可以给父类构造函数传参数
        // 父类

        function Father(name, sex) {
            this.name = name;
            this.sex = sex;
        }
        Father.prototype.say = function () {
            console.log("会说陕西话");
        }

// 组合继承
        function Son(a,b){
            Father.call(this,a,b); //类式继承
        }

        Son.prototype= Father.prototype //原型链继承


        var one =new Son("gao","男");
        console.log(one);
        one.say();
```

##### 2.3  new都干了什么?

```js
function Gou(name){
    this.name=name;
}

Gou.prototype.say=function(){
    console.log("aaaa");
}

var x= new Gou("gao");
console.log(x);

// new 干了什么？

var obj= {}; // 创建 空 对象

 obj.__proto__ = Gou.prototype; // 设置原型链（ 指向构造函数的原型 ）

  Gou.call(obj,"gao"); // 改变 构造函数的 this 指向 -- obj

console.log(obj); // 返回 对象；
```

##### 2.4  回调函数

```js
// 将一个函数 当作参数  传入另一个函数 ，这个函数叫回调函数。
// function(){} 匿名函数

function a(fn){
    fn(1,2);
}

a( function(a,b){
    console.log( a+b );
} )
```

##### 2.5  闭包函数

*定义：可以访问 一个函数 内部变量 的函数 叫闭包函数 -- 闭包*

写法/表现形式： 函数嵌套函数，内部函数可以访问外部函数的变量

**原理:内部函数可以访问外部函数的变量,变量在函数内找,如果没有,往上找,如果没有,再往上找**

**应用场景1:**循环加点击事件获得下标,事件委托ul下li加点击事件,

```js
//使用闭包获得点击li下标
var lis=document.getElementById("ul").children;
for(var i=0;i<lis.length;i++){
function  a(i){
lis[i].onclick=function(){
console.log(i) 
     }
   }
a(i);
}
//上面闭包案例简化为自执行
var lis=document.getElementById("ul").children;
for(var i=0;i<lis.length;i++){
(function(i){
lis[i].onclick=function(){
console.log(i) 
   }
})(i)
}
```

**应用场景2:**计时器传参

```js
funaction x(a,b){
    var a=1,b=2;
    //延迟多少时间执行,过3秒打印a+b的值
    setTimeout(function(){
        console.log(a+b)
    },3000)
}
x(2,3);
```

**应用场景:**隔离变量,详见jquery源码

优点：

​      *1、 可以访问 一个函数内部变量* 

​      *2、 闭包变量 长期驻扎内存*

*缺点：*

​       *因为 闭包变量 长期驻扎内存 不会触发垃圾回收机制，可能 内存占用过大 导致 内存泄漏*     

*垃圾回收机制：*

​      *1、标记清除*

​      *2、引用计数*

```js
 function a(){
    var b=123; 

    // 闭包函数
    return function(){
        console.log(b); // b 闭包变量
     }
 }
a()();
```

##### 2.6  js执行机制

**从上到下---先同步后异步---先宏任务后微任务.**

搜索js的执行机制前3篇都可以

宏任务:Script,setTimeout,setInterval,

微任务Promise,process, nextTick 

下面promise相关的面试题

```js
console.log(1);
setTimeout(function(){
    console.log(3);//异步---微任务
    },0)
    
    var x=new Promise(function(ok,no){
    console.log(4);//一旦创建立即执行
    ok("aaaaaaa")
    })
    x.then(function(res){
    console.log(res,5);//异步--宏任务
    })
    console.log(2);
    //执行顺序为1--4---2---5---3
    //
```



#### 3.jQuery

了解**可以看看jquery源码分析--看整体架构**

了解**jquery  怎么实现不用new**

获取元素是数组 

```js
引入  :<script src="./jquery.js"></script>
定义:封装了js可以实现的功能
        dom 操作
        动画操作
        ajax         
//获取dom节点   
    console.log($("#box"));
//获取值 
    console.log( $("#box").text());
       
//串联写法        
$("#box").css("color","pink").css("background","skyblue")
        
 //转化      
 console.log( $("#one")[0] ); // jq dom 转 js dom    [下标]
 console.log( $("#one").get(0) )//jq dom 转 js dom   .get(下标)    
```

#### 4.选择器



4. 1基本选择器

```js
$(".a ,.b").css("color","pink");     //群组选择器
$("#ul").css("background","green");  //id选择器
$(".a").css("background","blue");    //class选择器
$("*").css("background","blue");     //通配选择器
```

4.2层级选择器

```js
$("#ul li").css("color","red");     //后代
$("#ul >li").css("color","blue");   //子选择器
$(".a ,.b").css("color","pink");    //群组选择器
$(".a +li").css("color","orange");  //下一个兄弟选择器
$(".a ~li").css("color","green");   //下面所有兄弟选择器
```

4.3基本筛选选择器

```js
$("#ul>li:first").css("color","red");     //第一个
$("#ul>li:last").css("color","orange");   //最后一个
$("#ul>li:eq(2)").css("color","yellow");  //第几个
$("#ul>li:gt(2)").css("color","green");   //下标大于
$("#ul>li:lt(2)").css("color","skyblue"); //下标小于

$("#ul>li:even").css("color","blue");     //偶数下标
$("#ul>li:odd").css("color","pink");      //奇数下标

$("#ul>li:not(.one)").css("color","deeppink");   //除..以外

$("input")
```

4.4内容

```js
//内容
        //内容包含字符   :contains
        $("div:contains(卡)").css("color","red");

        //空节点 :empty
        $("div:empty").css("color","green");

        //包含..选择器  :has(selector)
        $("div:has(p)").css("color","pink");

        //有子节点  :parent
        $("div:parent").css("color","yellow");
```

4.5可见性

```js
//可见性
//隐藏元素  :hidden
console.log($("div:hidden"));

//显示元素 :visible
console.log($("div:visible"));
```

4.6css属性选择器

```js
$("[class]").css("color","skyblue");  //包含class属性
$("[class=x]").css("color","red");   //包含class=x
$("[class^=x]").css("color","orange");  //以x开头的
$("[class*=x]").css("color","yellow");  //包含x的
$("[class!=x]").css("color","green");  //不包含x的
```

4.7子元素选择器

```js
:first-child
:first-of-type
:last-child
:last-of-type
:nth-child
:nth-last-child()
:nth-last-of-type()
:nth-of-type()
:only-child
:only-of-type

```

4.8 表单

```js
:input          获得所有表单元素
:text           获取 type =text 的节点
:password       获取 type =password 的节点
:radio          获取 type =radio 的节点
:checkbox       获取 type =checkbox 的节点
:submit         获取 type =submit 的节点
:image          获取 type =image  的节点
:reset          获取 type =reset 的节点
:button         获取 type =button 的节点
:file           获取 type =file 的节点
     表单对象属性
:enabled        可用的
:disabled       不可用
:checked        选中
:selected       下拉框选中
```

#### 5.代码文本值

```js
 //获取值
console.log(节点.text());   //1111
console.log(节点.html());  //<h1>1111</h1>  

//设置值
节点.text("<h2>222</h2>");  //<h2>222</h2>
节点.html("<h2>222</h2>") ;   //222

//获取表单值
console.log(节点.val());    //999
//设置表单值
节点.val("555555")     //555555
```

# JS03----jQuery的属性操作

#### 1.属性操作

```js
//attr获取自定义属性
//获取属性  attr("属性名")获取只获取相同命名的第一个
//设置属性值   设置同名的都会被设置
   节点.attr("id","iiiii");   //设置一个属性  ("属性","属性值")
   节点.attr({"id":"iiiii","class":"ooooo"})  //设置多个属性 {"属性":"属性值","属性":"属性值"}

//删除属性     //删除只能删除自己添加的不能删除原有的
   节点.removeAttr("zz");

//!!!prop只能获取内置属性,自定义属性无法获取
// prop()  使用场景表单单选 多选下拉框

   console.log($("checkbox").attr("checked"));  //undefined checked
   console.log( $("checkbox").prop("checked"));   //false true  
//$(v).prop("checked",true)
      
```

#### 2.class类操作

```js
节点.addClass("active");     //addClass添加class属性
节点.removeClass("active");  //removeClass  移除 class属性
节点.toggleClass("active");  //toggleClass  添加或移除 class属性  有移除,没有添加
```

#### 3.css

```js
//获取 class 内部 某个样式--color
	console.log(节点.css("color"));    //color 获取到的是rgb样式
//获取 class 行内 某个样式--color
	console.log(节点.css("color"));    //color 获取到的是rgb样式

// 设置一个属性  ("属性","值")
	节点.css("fontSize","80px");

//设置多个属性  {"属性":"值","属性":"值"}
	节点.css({"fontSize":"80px","background":"skyblue"});
```

#### 4.位置/偏移量

```js
 //offset() 获取当前元素相对于视口的偏移量
        //没有参数是获取left top 偏移量,有参数是设置

        //获取偏移量
        节点.offset();
    
        //设置偏移量

        节点.offset({"top":200,"left":500})
    
//position() 获取当前元素相对于父元素的偏移量

		//获取偏移量
        节点.position();
    
        //设置偏移量

        节点.position({"top":200,"left":500})
```

#### 5.创建文档

```js
 //创建文档
        console.log(document.createElement("p"));
        console.log($("<p></p>"))
//创建的文档转为js Dom节点
        console.log($("<p></p>")[0])


//$("<标签></标签>")
```

#### 6.内部添加

```js
//内部添加
	    append(content|fn)  末尾添加
        appendTo(content)
            父元素.append(子元素)
            子元素.appendTo(父元素)   //远离元素的位置

        prepend(content|fn)开头添加
        prependTo(content)
            父元素.prepend(子元素)
            子元素.prependTo(父元素)   //远离元素的位置
//外部添加
       after()                      //外部之后添加  //远离元素的位置
       insertAfter() 

       before ()                   //外部之前添加   //远离元素的位置
       insertBefore() 
```

#### 7.包裹

wrap(完整的标签)  每一个都包
unwrap()  去掉父级的包裹只去一层
warpAll  包裹在一个标签内
warpInner() 标签内的内容用标签包裹

```js
//为每一个匹配元素添加外部包裹
         节点.wrap("<div></div>"); 
//去除外部包裹  只去一层
         节点.unwrap();
//将所有匹配元素用一个元素包裹
         节点.wrapAll("<div></div>");
//将匹配元素内部元素包裹起来
        节点.warpInner("<span></span>");
```

#### 8.替换

```js
  //将...替换为...
   节点.replaceWith($("<div>2222</div>"));
    
    //用..替换...
    $("<div>2222</div>").replaceAll(节点)
```

#### 9.删除

```js
//清除子元素
	节点.empty();

//删除自身
	节点.remove();

//删除自身  保留 绑定的事件  和附加数据
	节点.detach();
```

#### 10.克隆

```js
 console.log(节点.clone());

    节点.click(function(){
        console.log(1111111);
    })

    节点.append($("#box").clone(true))  //()内为true时 克隆的节点  保留 绑定的事件  和附加数据,默认为false不会保留事件
```

#### 11.ready()

```js
$(document).ready()    /*简化写法$(function(){console.log(44);})

/*ready()和window.onload区别

1、 window.onload 是原生js 的方法
        ready          是jquery 的方法

 2、  window.onload  需要等页面包含图片的所有元素加载完毕
        ready           dom 加载完毕

        ready 先执行     window.onload 后执行
 3、 window.onload  不能写多个，后面会覆盖前面
        ready           可以写多个*/
```

#### 12.事件

```js
//  绑定事件  on(一个或多个用空格分开的事件,"选择器字符串",当一个事件被触发时要传递event.data给事件处理函数(一般不需要写不用),该事件被触发时执行的函数。 false 值也可以做一个函数的简写，返回false)
        节点.on("click mouseover",function(){
            console.log("11111");
        })
//  移除事件
        节点.off("mouseover");
        
//  一次事件
        节点.one("click",function(){
            console.log("赞")
        })
//  事件委托     "li,p":选择器(实际发生的节点)
        事件加载的节点.on("click","li,p",function(){
            console.log(this);
        })
//复合事件
		  节点.hover( function(){
            // 鼠标悬停
            $(this).css("color","red");
        } , function(){
            // 鼠标离开
            $(this).css("color","black");
        } )
```

#### 13.tab切换

```javascript
//.click 为匹配的每一个元素 添加 点击事件*

$("#tab >li").click(function(){
  var index= $(this).index(); *// 获得在 父元素中的下标*

  *//.siblings() 获取同辈元素* 
  $(this).addClass("li_active").siblings().removeClass("li_active");

  *// eq( index ) 第几个下标*
  $("#tabbox >div").eq( index ).addClass("div_active").siblings().removeClass("div_active")

})
```

#### 14-1表单元素-- 获取表单元素值

```js
$("#add").click(function(event){
    event.preventDefault(); //阻止 默认事件
    // 文本框 
    var name= $("#name").val();
    // 单选
    var sex=  $(".sex:checked").val();
    // 多选
    var hobby=[];
    $(".userForm  :checkbox:checked").each(function(i,v){
        hobby.push( $(v).val() );
    })
    // 下拉
    var address=$("#address").val();

    console.log(name ,sex ,hobby, address);  
})
```



#### 14dom操作案例(表单元素  修改)



```js
// 1、模拟数据
var arr=[
    {
        "id":11,
        "name":"gao",
        "sex":"man",
        "hobby":["唱歌","说唱"],
        "address":"豫"
    },
    {
        "id":22,
        "name":"gao2",
        "sex":"woman",
        "hobby":["跳舞","说唱"],
        "address":"陕"
    },
    {
        "id":33,
        "name":"gao3",
        "sex":"man",
        "hobby":["唱歌","跳舞"],
        "address":"晋"
    }
]

// 2、渲染页面

function showFn(arr){
    if( arr.length >0 ){
        $("#h1").hide();
        $("#table").show();
        var str="";
        $.each(arr,function(i,v){
            str+=`
            <tr>
                <td>${i+1}</td>
                <td>${v.name}</td>
                <td>${v.sex}</td>
                <td>${v.hobby.join("-")}</td>
                <td>${v.address}</td>
                <td>
                    <button onclick="del(${v.id})">删除</button>
                    <button onclick="edit(${v.id})">修改</button>
                </td>
            </tr> 
            
            `
        })
    
        $("#tbody").html(str);
    }else{
        $("#h1").show();
        $("#table").hide();
    }
   
}

$(function(){
        showFn(arr);  
})


// 3、事件操作

// 删除
function del(id){
    // var index= arr.findIndex(v=>v.id == id)
    var index= arr.findIndex(function(v){
        return v.id == id
    })
    arr.splice(index,1);
    showFn(arr);
}


// 修改
var editIndex;
function edit(id){
     editIndex= arr.findIndex(v=>v.id == id);

     var obj = arr[editIndex];
    //  console.log(obj);

    // 文本框
    $("#name").val( obj.name );

    // 单选框
    $(".sex").each(function(i,v){

        if( $(v).val() == obj.sex ){
            $(v).prop("checked",true)
        }
    })

    // 复选框
    $(".userForm :checkbox").each(function(i,v){
        $(v).prop("checked",false);
    })

    $(".userForm :checkbox").each(function(i,v){

        if( obj.hobby.includes( $(v).val() ) ){
            $(v).prop( "checked",true );
        }
    })

    $("#address").val( obj.address )

}


```



# JS进阶04

#### 1-过滤

第几个-eq(index|-index    第一个first()    最后一个last()    

end() 回到最近的一个"破坏性"操作之前。即，将匹配的元素列表变为前一次的状态。

```js
$("li").eq(1).css("color","red");
$("li").eq(-1).css("color","red");
$("li").first().css("color","red").end().last().css("color","red")
```

​    hasClass(class)       is(expr|obj|ele|fn)       has(expr|ele)         not(expr|ele|fn)   map(callback)

```js
console.log(  $("li").hasClass("x") ) // true、false  是否有 x 类  class == x

var dom= $("li").filter(function(i,v){
    console.log(i,v);
   return  $(v).hasClass("x");
})
   console.log(dom);
            
console.log( $("li").children().is("span") );
 //children() 子元素
 
$("li").map(function(i,v){
   console.log(i,v)
 })
 
console.log($("li").has("span")) // 后代里 有 span 的li
console.log($("li").not(".x"));  //   不包含 class = x 的 li

console.log($("li").slice(0, 2));
```

节点 伪数组 转 数组 get()

```js
console.log( $("li").get() )

```

#### 2-查找

**parent([expr])**        //取得一个包含着所有匹配元素的唯一父元素的元素集合
**children([expr])**    //取得 匹配 元素集合 的所有子元素的元素集合。
find(e|o|e)            //搜索所有与指定表达式匹配的元素

**next([expr])**            //取得一个包含匹配的元素集合中每一个元素紧邻的后面同辈元素的元素集合。
nextAll([expr])      //查找当前元素之后所有的同辈元素。

**prev([expr])**            //取得一个包含匹配的元素集合中每一个元素紧邻的前一个同辈元素的元素集合 ,只有紧邻的同辈元素会被匹配到
**prevAll([expr])**       //查找当前元素之前所有的同辈元素 
  **siblings([expr])**   //取得一个包含匹配的元素集合中每一个元素的所有唯一同辈元素的元素集合  
                               // ( 获取 所有匹配元素的 所有同辈元素 的元素集合)

同时获得p标签和button标签使用add()

```javascript
console.log( $("p").add("button") );
        
```

#### 3-隐藏显示

hide-显示show-显示或隐藏toggle

```javascript
//显示 display
$("#show").click(function () {
$("#box").show();
})

//隐藏
$("#hide").click(function () {
$("#box").hide();
})

//显示或隐藏
$("#toggle").click(function () {
$("#box").toggle();
})
```

#### 4-向下滑出slideDown--向上滑入slideUp--滑入或滑出slideToggle

```javascript
//向下滑出 height  margin  padding  display   overflow:hidden
$("#slideDown").click(function () {
$("#box").slideDown(3000)
})

//向上滑入
$("#slideUp").click(function () {
$("#box").slideUp(5000)
})

//滑入或滑出
$("#slideToggle").click(function () {
$("#box").slideToggle(3000)
})
```

#### 5-自定义动画

```javascript
        $("#big").click(function () {
            $("#box").animate({
                width: "400px",
                height: "400px",
            }, 10000)
        })
        $("#stop").click(function(){
            $("#box").stop()//暂停
        })

        $("#finish").click(function(){
            $("#box").finish()//立即完成动画
        })
```

#### 6-less

https://less.bootcss.com/

```html
<link rel="stylesheet/less" type="text/css" href="styles.less" />
<script src="//cdnjs.cloudflare.com/ajax/libs/less.js/3.11.1/less.min.js" ></script>
```

less css 预处理器 ：给css 添加编程特性

变量、 判断 、函数->混合宏 

**嵌套**

```less
@import "./base.less";//外部引入

//混合宏 
    .b{
        border: 1px solid black;
    }
   

#box {
    width: @w;//宽设为变量
    height: 100px;
    .b();//调用混合宏
    
    background: @bgColor;//背景颜色设为变量
    div{
        h1{
            color: red;
            .b();//调用混合宏
        }
    }
}
```

#### 7-轮播图插件swiper

```html
<link rel="stylesheet" href="./swiper/swiper-bundle.css">
  <script src="./swiper/swiper-bundle.min.js"></script>
  <style>
    .swiper-container {
      width: 500px;
      height: 500px;
      border: 1px solid black;
    }
  </style>
</head>

<body>
  <div class="swiper-container">

    <!-- 轮播项目 -->
    <div class="swiper-wrapper">
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
      <div class="swiper-slide">Slide 4</div>
      <div class="swiper-slide">Slide 5</div>
      <div class="swiper-slide">Slide 6</div>
      <div class="swiper-slide">Slide 7</div>
      <div class="swiper-slide">Slide 8</div>
      <div class="swiper-slide">Slide 9</div>
      <div class="swiper-slide">Slide 10</div>
    </div>

    <!--导航 -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <!-- 分页 -->
    <div class="swiper-pagination"></div>
  </div>
  <script>
// 文档地址：https://www.swiper.com.cn/api/autoplay/19.html
    var swiper = new Swiper('.swiper-container', {
      // 导航
      navigation: {
        //下一页
        nextEl: '.swiper-button-next',
        //上一页
        prevEl: '.swiper-button-prev',
      },
      // 分页
      pagination: {
        type: 'fraction',  //https://www.swiper.com.cn/api/pagination/299.html
        el: '.swiper-pagination',
        clickable: true, //分页是否可以被点击
      },
      // 自动播放
      autoplay: {
        // 延时时间
        delay: 2500,
        //用户操作swiper之后，是否禁止autoplay。默认为true：停止。
        disableOnInteraction: false,
      },
      // 循环播放
      loop:true

    });
  </script>
```

#### 8-TAB切换的另一种方法load

window.location.href="/";即可调出根目录

**/**    根目录

./   同级目录    或者当前目录

**../**   上一级



```html
    <ul>
        <li>要闻</li>
        <li>北京</li>
        <li>国内</li>
        <li>国际</li>
    </ul>

    <div id="tabBox">

    </div>

    <script>
        $("li").click(function(){
            var index= $(this).index();

            $("#tabBox").load( `./${ index+1 }.html` )
            
        })
    </script>
```

```
<div>
    <h1>要闻 内容</h1>
</div>
```



# JS进阶05

#### 1-url组成及浏览器安全机制

**浏览器安全机制**： 不允许 使用 非同源 的数据 (不允许使用 跨域请求得到的数据)


  **同源:** 协议、主机名、 端口 都一样

  **非同源：**协议、主机名、 端口 只要有一个不一样 


  **跨域：** 非同源的 请求 叫 跨域请求 【 www.baidu.com --->www.taobao.com 】

**浏览器漏洞：** link src 、 img src 、 a href 、 script src 可以访问非同源的资源



**联调**---与后端人员沟通数据给付物的过程

**数据接口 四要素** -- 提供人： 后端

1、请求地址

2、请求方式

3、上传参数 /入参

4、响应数据 /出参

```javascript
  "http://127.0.0.1:5500/day05/index?a=1&b=2#x"
Url {
 protocol: 'http:',                               协议*
 slashes: true,                                  是否有 ://    没有 null*  
 auth: null,                                     作者*
 host: '127.0.0.1:5500',                         主机* 
 port: '5500',                                   端口*
 hostname: '127.0.0.1',                           主机名*
 hash: '#x',                                      哈希*
 search: '?a=1&b=2',                              搜索*
 query: 'a=1&b=2',                                搜索语句/查询语句*
 pathname: '/day05/index',                           路径名* 
 path: '/day05/index?a=1&b=2',                       路径*
 href: 'http://127.0.0.1:5500/day05/index?a=1&b=2#x'
}

```

####   2  Ajax

Ajax即**Asynchronous-JavaScript-And-XML**（异步JavaScript和[XML](https://baike.baidu.com/item/XML/86251)）

**AJAX 不是新的编程语言**，而是一种使用现有标准的新方法。

**AJAX 最大的优点**是在不重新加载整个页面的情况下，可以与服务器交换数据并更新部分网页内容。

**AJAX 不需要任何浏览器插件**，但需要用户允许JavaScript在浏览器上执行。

**缺点:**不利于seo优化,网站没有前进后退,历史记录,不能收藏,不能分享

**兼容性:****为了应对所有的现代浏览器，包括 IE5 和 IE6，请检查浏览器是否支持 XMLHttpRequest 对象。如果支持，则创建 XMLHttpRequest 对象。如果不支持，则创建 ActiveXObject ：**

```js
var xmlhttp;
if (window.XMLHttpRequest){
//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    xmlhttp=new XMLHttpRequest();
}
else{
  // IE6, IE5 浏览器执行代码
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
```

**同步请求**

```js
var xhr = new XMLHttpRequest();
xhr.open("GET", "./11.json", true);
xhr.send();
console.log(xhr.responseText);

```

**readyState:**存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。

- 0: 请求未初始化
- 1: 服务器连接已建立
- 2: 请求已接收
- 3: 请求处理中
- 4: 请求已完成，且响应已就绪

```javascript
//-----AJAX的初步使用-----------
//request--在其他地方可简称为req,意思是请求;
//response-- 在其他地方可简称为res  意思是应答/响应
//目前**XML**不常用,目前常用的是**JSON**

//创建异步请求对象
var xhr = new XMLHttpRequest();

//打开连接--xhr.open(请求方式 、请求地址、是否异步)
xhr.open("GET", "http://127.0.0.1:5500/day05/%E8%87%AA%E5%B7%B1%E7%BB%83%E4%B9%A0/11.json", true);

//发送请求
xhr.send();

//监听状态改变
xhr.onreadystatechange = function () {
//ajax 状态   4成功       http 状态 200 成功
if (xhr.readyState == 4 && xhr.status == 200) {
console.log(xhr.responseText);
//转为对象
var obj = JSON.parse(xhr.responseText);

console.log(obj);

   }
}
      
```

```javascript
//换xml格式,对比JSON与xml两种格式的不同
var xhr = new XMLHttpRequest();

xhr.open("GET", "http://127.0.0.1:5500/day05/%E8%87%AA%E5%B7%B1%E7%BB%83%E4%B9%A0/11.xml", true);

xhr.send();

xhr.onreadystatechange = function () {
if (xhr.readyState == 4 && xhr.status == 200) {


console.log(xhr.responseXML);
var dom = xhr.responseXML;
console.log(dom.getElementsByTagName("name")[0]);
console.log(dom.getElementsByTagName("name")[0].tagName);
console.log(dom.getElementsByTagName("name")[0].innerHTML);

    }
}
```



#### 3补充:http基础知识

###### 一   http详解

 1.HTTP协议，即**超文本传输协议**(Hypertext transfer protocol)。是一种详细规定了**浏览器和万维网(WWW = World Wide Web)服务器**之间互相通信的规则，通过因特网传送万维网文档的数据传送协议。

   2.HTTP协议作为TCP/IP模型中应用层的协议也不例外。HTTP协议通常承载于TCP协议之上，有时也承载于TLS或SSL协议层之上，这个时候，就成了我们常说的HTTPS。

 3.HTTP是一个**应用层协议**，由请求和响应构成，是一个标准的客户端服务器模型。HTTP是一个**无状态**的协议。

  4.HTTP默认的端口号为**80**，HTTPS的端口号为**443**。

  5.浏览网页是HTTP的主要应用，但是这并不代表HTTP就只能应用于网页的浏览。HTTP是一种协议，只要通信的双方都遵守这个协议，HTTP就能有用武之地。比如咱们常用的QQ，迅雷这些软件，都会使用HTTP协议(还包括其他的协议)。

###### 二  http特点:

 1、**简单快速**：客户向服务器请求服务时，只需传送**请求方法**和**路径**。由于HTTP协议简单，使得HTTP服务器的程序规模小，因而通信速度很快。

  2、**灵活**：HTTP允许**传输任意类型的数据对象**。正在传输的类型由Content-Type加以标记。

  3、**HTTP 0.9和1.0使用非持续连接**：限制每次连接只处理一个请求，服务器处理完客户的请求，并收到客户的应答后，即断开连接。**HTTP 1.1使用持续连接**：不必为每个web对象创建一个新的连接，一个连接可以传送多个对象，采用这种方式可以节省传输时间。

  4、**无状态**：HTTP协议是**无状态协议**。**无状态是指协议对于事务处理没有记忆能力**。缺少状态意味着如果后续处理需要前面的信息，则它必须重传，这样可能导致每次连接传送的数据量增大。另一方面，在服务器不需要先前信息时它的应答就较快。

 5、**支持B/S及C/S模式。*

###### 三 http流程:

一次HTTP操作称为一个事务，其工作过程可分为四步：

  1.首先客户机与服务器需要建立连接。只要单击某个超级链接，HTTP的工作开始。
  2.建立连接后，客户机发送一个请求给服务器，请求方式的格式为：统一资源标识符（URL）、协议版本号，后边是MIME信息包括请求修饰符、客户机信息和可能的内容。
  3.服务器接到请求后，给予相应的响应信息，其格式为一个状态行，包括信息的协议版本号、一个成功或错误的代码，后边是MIME信息包括服务器信息、实体信息和可能的内容。
 4.客户端接收服务器所返回的信息通过浏览器显示在用户的显示屏上，然后客户机与服务器断开连接。
 如果在以上过程中的某一步出现错误，那么产生错误的信息将返回到客户端，有显示屏输出。对于用户来说，这些过程是由HTTP自己完成的，用户只要用鼠标点击，等待信息显示就可以了。

###### 四.HTTP之请求消息Request

客户端发送一个HTTP请求到服务器的请求消息包括以下格式：

  **请求行**、**请求头部**、**空行**和**请求数据**四个部分组成。

**(1)Get请求例子**

**第一部分：请求行**，用来说明请求类型,要访问的资源以及所使用的HTTP版本.

GET说明请求类型为GET,[/562f25980001b1b106000338.jpg]为要访问的资源，该行的最后一部分说明使用的是HTTP1.1版本。

**第二部分：请求头部**，紧接着请求行（即第一行）之后的部分，用来说明服务器要使用的附加信息

从第二行起为请求头部，HOST将指出请求的目的地.User-Agent,服务器端和客户端脚本都能访问它,它是浏览器类型检测逻辑的重要基础.该信息由你的浏览器来定义,并且在每个请求中自动发送等等

第三部分：空行，请求头部后面的空行是必须的

即使第四部分的请求数据为空，也必须有空行。

**第四部分：请求数据也叫主体**，可以添加任意的其他数据。

这个例子的请求数据为空。

**POST请求例子**

第一部分：请求行，第一行明了是post请求，以及http1.1版本。
第二部分：请求头部，第二行至第六行。
第三部分：空行，第七行的空行。
第四部分：请求数据，第八行。

######  五.HTTP之响应消息Response

一般情况下，服务器接收并处理客户端发过来的请求后会返回一个HTTP的响应消息。

HTTP响应也由四个部分组成，分别是：**状态行**、**消息报头**、**空行**和**响应正文**。

第一部分：状态行，由HTTP协议版本号， 状态码， 状态消息 三部分组成。

第一行为状态行，（HTTP/1.1）表明HTTP版本为1.1版本，状态码为200，状态消息为（ok）

第二部分：消息报头，用来说明客户端要使用的一些附加信息

第二行和第三行和第四行为消息报头，
Date:生成响应的日期和时间；Content-Type:指定了MIME类型的HTML(text/html),编码类型是ISO-8859-1

第三部分：空行，消息报头后面的空行是必须的

第四部分：响应正文，服务器返回给客户端的文本信息。

空行后面的html部分为响应正文。

###### 六.HTTP之状态码          

状态代码有**三位数字**组成，第一个数字定义了响应的类别，共分五种类别:

1xx：**指示信息--表示请求已接收，继续处理**

2xx：**成功--表示请求已被成功接收、理解、接受**

3xx：**重定向--要完成请求必须进行更进一步的操作**

4xx：**客户端错误--请求有语法错误或请求无法实现**

5xx：**服务器端错误--服务器未能实现合法的请求**

常见状态码：

200   ok  ：                服务器已经成功接受请求

400  Bad Rrequest:      客户端请求有语法错误,不能被服务器所理解

402    Unauthorized:       客户未经授权  

403   Forbidden  :     服务器收到请求,但是拒绝提供服务

404  Not  Found:    请求资源不存在,eg输入了错误的url

500    Internal Server Error:  服务器发生不可预期的错误

**503    Server Unavailable:**   服务器当前不能处理客户端的请求,一段时间后可能恢复正常

###### 七.HTTP请求方法          

根据HTTP标准，HTTP请求可以使用多种请求方法。
**HTTP1.0**定义了三种请求方法： **GET, POST** 和 **HEAD**方法。
**HTTP1.1**新增了五种请求方法：**OPTIONS, PUT, DELETE, TRACE 和 CONNECT** 方法。

###### 八.HTTP工作原理           

​    HTTP协议定义Web客户端如何从Web服务器请求Web页面，以及服务器如何把Web页面传送给客户端。HTTP协议采用了**请求/响应模型**。客户端向服务器发送一个请求报文，请求报文包含请求的方法、URL、协议版本、请求头部和请求数据。服务器以一个状态行作为响应，响应的内容包括协议的版本、成功或者错误代码、服务器信息、响应头部和响应数据。

以下是 HTTP 请求/响应的步骤：

**1、客户端连接到Web服务器**

一个HTTP客户端，通常是浏览器，与Web服务器的HTTP端口（默认为80）建立一个TCP套接字连接。例如，[http://www.oakcms.cn。](http://www.oakcms.cn./)

**2、发送HTTP请求**

通过TCP套接字，客户端向Web服务器发送一个文本的请求报文，一个请求报文由请求行、请求头部、空行和请求数据4部分组成。

**3、服务器接受请求并返回HTTP响应**

Web服务器解析请求，定位请求资源。服务器将资源复本写到TCP套接字，由客户端读取。一个响应由状态行、响应头部、空行和响应数据4部分组成。

**4、释放连接[TCP连接](http://www.jianshu.com/p/ef892323e68f)**

若connection 模式为close，则服务器主动关闭[TCP连接](http://www.jianshu.com/p/ef892323e68f)，客户端被动关闭连接，释放[TCP连接](http://www.jianshu.com/p/ef892323e68f);若connection 模式为keepalive，则该连接会保持一段时间，在该时间内可以继续接收请求;

**5、客户端浏览器解析HTML内容**

客户端浏览器首先解析状态行，查看表明请求是否成功的状态代码。然后解析每一个响应头，响应头告知以下为若干字节的HTML文档和文档的字符集。客户端浏览器读取响应数据HTML，根据HTML的语法对其进行格式化，并在浏览器窗口中显示。

 

######  九.GET和POST的区别    

   1、GET提交的数据会放在URL之后，以?分割URL和传输数据，参数之间以&相连，如EditPosts.aspx?name=test1&id=123456. POST方法是把提交的数据放在HTTP包的Body中.

   2、GET提交的数据大小有限制（因为浏览器对URL的长度有限制），而POST方法提交的数据没有限制.

   3、GET方式需要使用Request.QueryString来取得变量的值，而POST方式通过Request.Form来获取变量的值。

   4、GET方式提交数据，会带来安全问题，比如一个登录页面，通过GET方式提交数据时，用户名和密码将出现在URL上，如果页面可以被缓存或者其他人可以访问这台机器，就可以从历史记录获得该用户的账号和密码.

# JS进阶06    node.js的安装及操作

**Node.js® 是一个基于 Chrome V8 引擎 的 JavaScript 运行时环境,是一个事件驱动I/O服务端JavaScript环境,V8引擎执行Javascript的速度非常快，性能非常好。**

##### 1-常用命令：

**<u>黑窗口的打开方式</u>**①window+R②电脑地址栏输入cmd③搜索cmd④vscode终端;苹果电脑->其他终端

**<u>window系统</u>**->命令提示符 / DOS命令：

dir 	显示文件列表	

**cd**   切换当前工作目录	

​		cd         文件夹 （进入文件夹）	

​		**cd ..**	 (进入上一级文件夹)

在c盘,输入d盘的话输入    d:      即可

**cls**    清屏

**ipconfig**    获取ip配置

**ping**   +ip地址-->测试ip连接状态

**ping攻击:**    ping -l 6550 -t ip地址

**<u>mac系统</u>**->      ls   打开文件目录

##### 2-node.js简介

[Node.js 简介 (nodejs.cn)](http://nodejs.cn/learn)

*Node*.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。

*Node*.js 使用了一个事件驱动、非阻塞式 I/O 的模型,使其轻量又高效

*Node*.js 的包管理器 npm,是全球最大的开源库生态系统。



I/O ：input /output	输入/输出   请求/应答	



##### 3、安装配置 node 环境

1、下载node 安装包 http://nodejs.cn/download/

2、安装node

​	注意：默认安装 --  add to path

3、测试是否安装成功

​	1） window+r 		cmd		

​			node  -v		查看node 版本号

   2）任何目录下 执行 node 

​		打开文件资源管理器 -- 进入 目录 	--- 地址栏 选中所有 -- 删除  --- cmd 回车

​		node  -v	

  3）编辑器中测试

​		vscode -- 在终端测试

​		node -v 

​		如果有错  首先 重启编辑器 测试

​		如果还有错参考 https://blog.csdn.net/qq_45611467/article/details/109403426  解决

​		

##### 4-node 执行 js 代码

node  文件路径

```
node ./1.js
```

##### 5-node 交互解释器	

node  回车

```
node

>
```



终止任务  **俩次   Ctrl+C**  或者  **Ctrl+D**  

##### 6-node 搭建 http 服务器

http.js

```js
var http =require("http");
http.createServer(function(req,res){
  res.write("hello world");
  res.write("hello gao");

  res.end(); // 一定要有 end();

}).listen(3000)

```

```
*//下面的端口不能用*

*//80 http*

*//443  https*

*//3306  mysql*

*//21 ssh*

*//22  ftp*

*//27017  mongodb*
```

运行

```
node ./http.js
```

终止

```
终止任务  俩次   Ctrl+C  或者  Ctrl+D 
```

##### 7-请求

1、 地址

本机地址：

http://127.0.0.1:3000

http://localhost:3000

班级 内网/局域网 地址

http://169.254.xx.xx:3000/

外网地址

租服务器（阿里云、百度云、腾讯云） --- 外网ip--- 绑定域名（备案）

2、内网/局域网 测试 http 服务时 。。 

​	  关闭 防火墙 



##### 8-npm 包管理器

**测试npm 是否 已安装** 

查看 版本号 ，如果能看到版本号，证明安装成功

```sh
npm  -v
```

初始化: 生成 模块依赖配置文件 

```sh
npm  init	一路回车
省略写法  npm init  -y
```

###### **1、下载**

添加到  项目依赖中 dependencies 

```sh
npm  install  模块名	
											--save
											-S
```

添加到 开发依赖 devDependencies	

```sh
npm install  模块名 --save-dev

										-D			
```

根据 依赖文件 package.json 下载依赖模块

```sh
npm install 
```

下载全局模块 

```sh
npm install  模块名  -g

g === global ===全局
```

###### **2、卸载**

卸载局部模块

```sh
npm uninstall 模块名
```

卸载全局模块

```sh
npm uninstall -g 模块名
```

###### **3、如何加速 npm 下载速度**

使用阿里 的 镜像

第一种办法： 使用 cnpm

```sh
npm install cnpm -g --registry=https://registry.nlark.com

命令都变为
cnpm install 模块名
cnpm uninstall 模块名
```

第二种办法: 只修改改 npm 下载路径 -- >cnpm 

```sh
npm config set registry  http://registry.npm.taobao.org
```

##### 9-模块分类--核心模块/ 内置模块**

######        9-1 **http  请求应答服务模块**

创建add.js,代码如下:

```javascript
// 创建模块
function sum(a,b){ console.log(a+b);   }
function jian(a,b){ console.log(a-b);  }

// 导出模块
module.exports={ sum, jian  }

```

​       在另一个js文件引入

```javascript
// 载入模块*
var obj = require("./add.js");

*// 使用模块*
obj.sum(3,4);
obj.jian(3,4);
```

######  9-2    fs文件系统模块

```javascript
//文件操作
// 载入 核心模块 fs 

var fs= require("fs");
// 读取

// 同步读取文件

    var x= fs.readFileSync("./01.txt");
    console.log(x.toString());

// 异步读取文件

    fs.readFile("./01.txt",function(err,data){
        console.log("err",err);
        console.log("data",data.toString());
    })


// 写入

//同步写入

    var y= fs.writeFileSync("./01.txt","789");
    console.log(y); // 没有返回值


// 异步写入

    fs.writeFile("./01.txt","xyz",function(err){
        console.log("err",err);
    })


// 删除

// 同步删除
 fs.unlinkSync("./02.txt");

// 
fs.unlink("./02.txt",function(err){
    console.log(err);
})
```

######       9-3  url 处理模块

```javascript
var url=require("url");

// url.parse()      将url 字符串 转为 url 对象
var str="http://www.baidu.com:3000/search?a=1&b=2#xx";

var obj = url.parse(str,true); // 第二个参数 == true 将 query （a=1&b=2) 转为 对象{a:1,b:2} 

console.log(`url对象`, obj);
console.log(`主机名`, obj.hostname);
console.log(`路径名`, obj.pathname);
console.log(`搜索语句/条件`, obj.query);

```

######         9-4    queryString 模块

```javascript
var querystring=require("querystring");
// console.log(querystring);


var str="a=1&b=2&c=3";

// 将url query 字符串 转为 对象
var obj = querystring.parse(str);
console.log(obj);

// 将 对象 转为 url query 字符串
var s= querystring.stringify(obj);
console.log(s);

//-----------------------

var str= "a=哈哈哈&b=2";
// 编码 （汉字、特殊字符）
console.log( querystring.escape(str) )
var s="a%3D%E5%93%88%E5%93%88%E5%93%88%26b%3D2";
// 解码
console.log( querystring.unescape(s) );
```

​        ...

##### 10-switch case实现路由

路由：

当用户访问 http://127.0.0.1:3000    
===  http://127.0.0.1:3000/
     返回：这是主页

当用户访问 http://127.0.0.1:3000/user   
     返回：这是用户列表页面


当用户访问 http://127.0.0.1:3000/add   
     返回：这是添加用户列表页面


当用户访问 http://127.0.0.1:3000/其他 
     返回：没有找到这个页面

思路
1、创建服务器
2、获取 请求地址 
3、通过 请求地址 得到 pathname
4、通过pathname 判断 -- 显示对应的 内容

```javascript
const http=require("http");
const url=require("url");
const fs= require("fs");
http.createServer(function(req,res){
    // 网页编码 -- utf8
    res.writeHead(200, {
        'content-type': 'text/html;charset=utf8'
    });
    //req.url 请求地址
    var pathname=url.parse( req.url ).pathname;
    switch(pathname){
        case "/":
            res.end("this is main page哈哈");
            break;
        case "/user":
            res.end("this is user page");
            break;
        case "/add":
            // res.end("this is add page");
            fs.readFile("./add.html",function(err,data){
                res.end(data);
            })  
            break;
        default:
            res.end("404");
            break;
    }
}).listen(3000)
```

##### 

# JS进阶07    数据接口

数据格式为json

请求地址:

请求方式:

请求参数:

响应数据:

##### 1    数据接口1   switch  case实现路由

步骤:

1、 创建服务器 --- 测试
2、 通过pathname  实现 路由 --- 测试

3、 创建默认数据

4、 实现 所有商品信息 接口
5、 返回搜索商品
    5-1、获取 query 值
    5-2、filter
    5-3、 返回 过滤后的值

6、添加
    6-1、获取 post 传值
     

```javascript
var post ="";
req.on("data",function(v){ post +=v  })
req.on("end",function(v){ console.log( data );...})

const http = require("http");
  //载入url模块
const url = require("url");
const querystring= require("querystring");
var arr=[
  {"id":1,"name":"苹果","price":100},
  {"id":2,"name":"大苹果","price":200},
  {"id":3,"name":"小苹果","price":300},
  {"id":4,"name":"橘子","price":400},
  {"id":5,"name":"砂糖橘","price":500}
]

http.createServer(function (req, res) {
    //处理汉字乱码
  res.writeHead(200, {
    'content-type': 'text/html;charset=utf8'
  });
  const pathname = url.parse(req.url).pathname;
  switch (pathname) {
//------------------------------------------
/*地址前缀：http://127.0.0.1:3000
接口1、所有商品信息
请求地址：  /goodsList
请求方式：  GET
请求参数/入参：
响应数据/出参：
成功：{"code":"ok", "info":[ {"id":唯一索引,"name":商品名,"price":商品价格}  ] */ 
//-------------------------------------------
    case "/goodsList":
      var goodsList={
        "code":"ok",
       "info":arr
      }
      res.end( JSON.stringify( goodsList ) );
      break;
//----------------------------------------------
/*接口2、返回搜索商品
请求地址：/search
请求方式：GET
请求参数/入参：name=?
响应数据/出参：
成功：{ "code":"ok","info":[ { "id":唯一索引,"name":商品名,"price":商品价格 }  ]  }
失败: {  "code":"no","msg":"服务器出错" }*/
//---------------------------------------
    case "/search":
     var name = url.parse( req.url ,true ).query.name;
      var searchArr= arr.filter(function(v){
        return v.name.includes( name )
      })
      *// console.log(name, searchArr)*
      var search={
        "code":"ok",
        "info":searchArr
      }
      res.end(JSON.stringify(search));
      break;
//------------------------------------------------
/*接口3、添加商品
请求地址：  /add
请求方式：  POST
请求参数/入参：name=? price=?
响应数据/出参：
成功{"code":"ok"}
失败:{"code":"no","msg":"服务器出错"}*/
//----------------------------------------------------
    case "/add":
      *// 1、创建 暂存变量*
      var post ="";
      *// 2、监听 数据 - 拼接 字符串*
      req.on("data",function(v){
        post += v;
      })
      *// 3、监听 请求结束* 
      req.on("end",function(){
        console.log(post); *// url 字符串*
        *// 转为 对象*
        var postObj= querystring.parse( post );
        *// 判断 如果 有值*
        if( postObj.name && postObj.price ){
          *// push 到 数组中*
          arr.push( {"id":new Date().getTime(),"name":postObj.name,"price":postObj.price} );
          *// 返回 正确*
          res.end(JSON.stringify( {"code":"ok"} ));
        }else{
          *// 没有值，返回 错误*
          res.end(JSON.stringify( {"code":"no","msg":"参数有问题"} ));
        }
      })
      break;   

    default:
      res.end("其他")
      break;
  }
}).listen(3000)
```

##### 2   数据接口2:

步骤:

**一、创建 服务器**

**二、通过 pathname 实现路由**

**三、模拟数据 --- （连接数据库）**

**四、写接口**

```javascript
const http = require("http");
const url = require("url");
const querystring = require("querystring");

var arr = [{"id": 1,"user": "高1","age": 18},
    {"id": 2,"user": "高2","age": 19},
    {"id": 3,"user": "高3","age": 20},
    {"id": 4,"user": "高4","age": 21},
    { "id": 5,"user": "高5","age": 22}]
//一、创建 服务器
//二、通过 pathname 实现路由
//三、模拟数据 --- （连接数据库）
 //四、写接口
http.createServer(function (req, res) {
    // 解决跨域-- 添加响应头
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.writeHead(200, {'content-type': 'text/html;charset=utf8'});
    const pathname = url.parse(req.url).pathname;
 
    switch (pathname) {
   /*      前缀： http://127.0.0.1:3000
        1、所有用户数据        
            请求地址： /list
            请求方式： GET
            上传数据：
            响应数据：{ "code":"ok/no" , "info":[ {} ] } */
        case "/list":
            var list = {
                "code": "ok",
                "info": arr
            }
            res.end(JSON.stringify(list));
            break;
    /*2、添加用户信息
    请求地址：/add
    请求方式：POST
    上传数据：user=姓名 age=年龄
    响应数据：
    { "code":"ok/no" } */
        case "/add":
            var post = "";

            req.on("data", function (v) {
                post += v;
            })

            req.on("end", function () {
                // console.log(post);
                var addObj = querystring.parse(post);
                if (addObj.user && addObj.age) {
                    arr.push({
                        "id": new Date().getTime(),
                        "user": addObj.user,
                        "age": addObj.age
                    })

                    res.end(JSON.stringify({
                        "code": "ok"
                    }));
                } else {
                    res.end(JSON.stringify({
                        "code": "no",
                        "msg": "参数不对"
                    }));
                }
            })
// res.end("add");
            break;
    /* 3、删除用户信息
    请求地址：/del?id=1
    请求方式：GET
    上传数据：id=
    响应数据：
    { "code":"ok/no" } */
        case "/del":
            var id = url.parse(req.url, true).query.id;
            var index = arr.findIndex(v => v.id == id);

            if (index == -1) {
                res.end(JSON.stringify({
                    "code": "no"
                }));
            } else {

                arr.splice(index, 1);
                res.end(JSON.stringify({
                    "code": "ok"
                }));
            }
            break;
        default:
            res.end("其他");
            break;
    }

    // res.end("服务器创建成功");
}).listen(3000)
```



##### 3   json-p实现百度搜索显示

```javascript
function show(res){
            console.log(res);
            var str="";
            res.s.forEach(function(v){
                str+=`
                <li>${v}</li>
                `
            })
            document.getElementById("ul").innerHTML=str;
        }
var sDom=document.getElementById("s");
            sDom.onkeyup=function(){ 
                var x= this.value;
                if(x){
                    var scriptDom= document.createElement("script");
                    scriptDom.src= `https://suggestion.baidu.com/su?wd=${x}&cb=show`;
                  document.body.appendChild( scriptDom );
                }
            }
```

##### 4  学员管理系统案例(  原生ajax  )

```javascript
// mock 模拟数据，模拟请求   http://mockjs.com/
// 页面加载完成 请求 所有学员 数据接口 -- 渲染表格
    function getList(){
// 兼容ie5 ie6 https://www.runoob.com/ajax/ajax-xmlhttprequest-create.html
             var xhr=new XMLHttpRequest();
             xhr.open("GET","http://127.0.0.1:3000/list",true);
             xhr.send();
             xhr.onreadystatechange=function(){
                 if(xhr.readyState ==4 && xhr.status==200 ){
                    // console.log( xhr.responseText ); // 出现 --跨域 -- 后端

                    var obj= JSON.parse( xhr.responseText );
                    // 请求得到数据后 调用 渲染页面方法 showList()
                    showList(obj.info);
                 }
             }        
    }
    function showList(arr){
        // console.log("--",arr);
        var str="";
        arr.forEach(function(v,i){
            str+=`
            <tr>
                <td>${v.user}</td>
                <td>${v.age}</td>
                <td>
                    <button onclick="del(${v.id})">删除</button>
                </td>
            </tr>
            `
        })
        document.getElementById("tbody").innerHTML=str;
    }

    window.onload=function(){
        getList();
    }
    //  点击删除 --获取 id ---- 调用接口 将 id 传递给 --- 后端 --- 通过id --删除
    function del(id){
        var xhr= new XMLHttpRequest();
            xhr.open("GET",`http://127.0.0.1:3000/del?id=${id}`,true);
            xhr.send();
            xhr.onreadystatechange=function(){
                if(xhr.readyState ==4 && xhr.status==200){
                    // console.log( xhr.responseText )
                    var obj= JSON.parse( xhr.responseText );
                    if(obj.code == "ok"){
                        getList();
                    }else{
                        alert("删除失败，稍后试试");
                    }
                }
            }
    }
    //  -- 成功 -- 调用请求 所有学员 数据接口 -- 渲染表格
    //  -- 失败 -- 提示。。。。

    // 点击添加 -- 获取 表单输入值--- 调用接口 --- 后端-- 保存 
    var addDom=document.getElementById("add");
        addDom.onclick=function(){
            var userDom=document.getElementById("user");
            var ageDom=document.getElementById("age");

            var user= userDom.value;
            var age = ageDom.value;

            // console.log(user, age);

            var xhr=new XMLHttpRequest();
                xhr.open("POST","http://127.0.0.1:3000/add");

                // post 请求
                xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded")
                xhr.send(`user=${user}&age=${age}`);

                xhr.onreadystatechange=function(){
                   if(xhr.readyState==4 && xhr.status==200){
                        var obj= JSON.parse( xhr.responseText );
                        // console.log(obj);
                        if(obj.code =="ok"){
                            getList();
                        }else{
                            alert("添加失败，联系管理员");
                        }
                   } 
                }
        }

    //  -- 成功 -- 调用请求 所有学员 数据接口 -- 渲染表格
    //  -- 失败 -- 提示。。。。
```



# JS进阶08----express框架及Ajax的简单封装

安装node.js的框架express,其封装了http的方法,基于express还有koa 和egg

##### 1--数据接口

```javascript
const express= require("express");
const app=express();

//send
// req  .query   获取 url query 并转为对象  --- 获取get传参数
//  ? a =1 &b=2 ---- > {a:1,b:2}

app.get("/",function(req,res){
    console.log( req.query )
    res.send({"name":"gao"})
})

app.get("/user",function(req,res){
    res.send("get---user");
})
// post 
//req.body  接受 post 传参数

// post 值 转为json 格式
app.use( express.json() ); 
// 以 application/x-www-form-urlencoded 解析 post 参数
app.use( express.urlencoded({extended:true}) );

app.post("/add",function(req,res){
    console.log( req.body );
    res.send("add");
})
app.put("/user",function(req,res){
    res.send("put--user")
})
app.listen(3000);
```



##### 2     原生ajax            简单封装Ajax

post与get请求方式,传参方式,等不同

```javascript
function ajax(obj){
	var type = obj.type ? obj.type  :"GET" ;// 请求方式
  var url  = obj.url; // 	请求地址  /search
  var data = obj.data; // 请求数据	-- {a:1,b:2}
  var success= obj.success;

  var str="";
  for(var key in data){
    	str+=`${key}=${data[key]}&`
  }
  data= str.substr(0,str.length-1);
  var xhr= new XMLHttpRequest();
    
    //get传参方式
  if(type == "GET"){
     	xhr.open("GET",url+"?"+data,true); 
     	xhr.send();
    
   }else{
       
       //post传参
     	xhr.open("POST",url,true); 
     	xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
      xhr.send(data);
   }

   xhr.onreadystatechange=function(){
     if(xhr.readyState ==4 && xhr.status==200){
       var data= JSON.parse( xhr.responseText );
       success( data );
     }
   } 
}
```

##### 3  商品前台--后台分离管理案例(   模拟数据,为连接服务器,    添加--删除--排序功能) 

```javascript
//---------服务器js文件--------------
// 服务器 js 文件 -- 实现数据接口

const express =require("express");

const app=express();
//post传参固定语法
app.use( express.json());
app.use( express.urlencoded({extended:true}) );

// 发布静态资源
app.use( express.static("public") )

// 测试服务器 是否创建成功
// app.get("/",function(req,res){
//     res.send("111")
// })

var arr=[
    {
        "id":1,
        "goodsName":"苹果",
        "price":10,
        "num":1,    
    },
    {
        "id":2,
        "goodsName":"橘子",
        "price":9,
        "num":2, 
    },
    {
        "id":3,
        "goodsName":"香蕉",
        "price":8,
        "num":2, 
    },
    {
        "id":4,
        "goodsName":"西瓜",
        "price":2.5,
        "num":2, 
    }
]
//------------------------------
//1、添加数据接口如下 
/* 1、添加数据接口如下 
    请求地址：http://127.0.0.1:3000/add
    请求方式：POST
    上传参数：goodsName 、 price 、num
    响应数据：{ "code":"ok /no" } */
//---------------------------------------
app.post("/add",function(req,res){
    var obj= req.body;
    if(obj.goodsName && obj.price && obj.num){
        arr.push(
            {
                "id":new Date().getTime(),
                "goodsName":obj.goodsName,
                "price": Number(obj.price),
                "num":Number(obj.num),    
            }
        )
        res.send( { "code":"ok"} );

    }else{
        res.send( { "code":"no","msg":"参数有问题" } ); 
    }
})
//-----------------------------------------
// 2、获取数据接口如
/* 2、获取数据接口
    请求地址：http://127.0.0.1:3000/all
    请求方式：GET
    上传参数：
    响应数据：{ "code":"ok /no" ,"info":[ {} ] } */
//---------------------------------------------
app.get("/all",function(req,res){
    res.send( { "code":"ok","info":arr } )
})
//------------------------------------------
// 3、删除数据接口
/* 3、删除数据接口
    请求地址：http://127.0.0.1:3000/del
    请求方式：GET
    上传参数：id=？
    响应数据：{ "code":"ok /no" } */
//-----------------------------------------------
app.get("/del",function(req,res){
    var id = req.query.id;
    var index= arr.findIndex(v=>v.id == id);
    if(index ==-1){
        res.send( { "code":"no","msg":"删除失败" } );
    }else{
        arr.splice(index,1);
        res.send( { "code":"ok"} )
    }
})
//--------------------------------------------

/* 4、 价格从高到低
 请求地址：http://127.0.0.1:3000/desc
 请求方式：GET
 上传参数：
  响应数据：{ "code":"ok /no" ,"info":[ {} ] } */
//-------------------------------------------
app.get("/desc",function(req,res){

    var x = arr.sort(function(a,b){
        return b.price-a.price 
    })

    res.send( {"code":"ok","info":x } )
})
//--------------------------------------------------
// 5、 价格从低到高
 /*请求地址：http://127.0.0.1:3000/esc
 请求方式：GET
 上传参数：
响应数据：{ "code":"ok /no" ,"info":[ {} ] } */
//----------------------------------------------------
app.get("/esc",function(req,res){

    var x = arr.sort(function(a,b){
        return a.price -b.price
    })

    res.send( {"code":"ok","info":x } )
})
app.listen(3000);
```



```javascript
//-------后台js文件-----------
// 封装 ajax 请求 函数
/*type 请求方式  GET /POST
url  请求地址   */
function ajax(obj){
    var xhr= new XMLHttpRequest();
        xhr.open(obj.type,obj.url,true);
        // xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");      
        xhr.send();
        xhr.onreadystatechange=function(){
            if(xhr.readyState ==4 && xhr.status==200){
                var data= JSON.parse( xhr.responseText );
                // console.log(data);
                // return data;
                obj.success( data );
            }
        } 
}

//  ajax( "GET","/all" ,function(res){
//     console.log(res);
//  });

//  ajax({
//      type:"GET",
//      url:"/all",
//      success:function(res){
//         console.log(res);
//      }
     
//  })

//1、请求数据 -渲染页面
function getList(){    
        ajax( {
            type:"GET",
            url:"/all",
            success:function(res){
                // console.log(res);
                showList(res.info)
            }
        })
// 请求得到数据后 调用 渲染页面方法 showList()
}   
//渲染页面
function showList(arr){
    var str="";
    arr.forEach(function(v){
        str+=`
        <tr>
            <td>${v.id}</td>
            <td>${v.goodsName}</td>
            <td>${v.price}</td>
            <td>${v.num}</td>
            <td>${ (v.price *v.num).toFixed(2) }</td>
            <td>
                <button onclick="del(${v.id})">删除</button>
            </td>
        </tr>
        `
    })

    document.getElementById("tbody").innerHTML=str;
}

window.onload=function(){
    getList();
}

//2、 删除
function del(id){
    // var xhr= new XMLHttpRequest();
    //     xhr.open("GET",`/del?id=${id}`,true);
    //     xhr.send();
    //     xhr.onreadystatechange=function(){
    //         if(xhr.readyState ==4 &&xhr.status ==200 ){
    //             var obj= JSON.parse( xhr.responseText );
    //             // console.log(obj);
    //             if(obj.code == "ok"){
    //                     getList();
    //             }
    //         }
    //     }


    ajax({
        type:"GET",
        url:`/del?id=${id}`,
        success:function(res){
            if(res.code == "ok"){
                getList();
            }
        }
    })

}

//3、添加

var addDom=document.getElementById("add");
    addDom.onclick=function(){
        // 获取 表单 节点
        var goodsNameDom= document.getElementById("goodsName");
        var priceDom= document.getElementById("price");
        var numDom= document.getElementById("num");

        // 获取 表单 值
        var goodsName=goodsNameDom.value;
        var price=priceDom.value;
        var num=numDom.value;

        // ajax -- 表单值 --- 后端

        var xhr= new XMLHttpRequest();
            xhr.open("POST","/add",true);
            xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded"); 

            xhr.send(`goodsName=${goodsName}&price=${price}&num=${num}`);
            xhr.onreadystatechange=function(){
                if(xhr.readyState ==4 && xhr.status ==200){
                    var obj=JSON.parse( xhr.responseText );
                    // console.log(obj);
                    if(obj.code == "ok"){
                        getList();
                    }
                }
            }
        // ok -- 调用 获取数据 方法
 
    }

```

```javascript
//-------------前台js文件-----------
function ajax(obj) {
            var xhr = new XMLHttpRequest();
            xhr.open(obj.type, obj.url, true);
            // xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");      
            xhr.send();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    var data = JSON.parse(xhr.responseText);
                    // console.log(data);
                    // return data;
                    obj.success(data);
                }
            }
        }


        function getList(s) {
            var e = event || window.event;
            if (e.target.tagName == "LI") {
                // 获取所有li 
                var lis = document.getElementById("tab").children;
                // console.log(lis);

                for (var i = 0; i < lis.length; i++) {
                    lis[i].classList.remove("li_active");
                }

                e.target.classList.add("li_active");
            }
            ajax({
                type: "GET",
                url: `/${s}`,
                success: function (res) {
                    // console.log(res);
                    showList(res.info);
                }
            })
        }

        function showList(arr) {
            var str = "";
            arr.forEach(function (v) {
                str += `
                <div class="item">
                    <p class="item_name">${v.goodsName}</p>
                    <div class="item_msg">
                        <p>单价：${v.price}</p>
                        <p>数量：${v.num}</p>
                        <p>小计：</p>
                    </div>
                </div>
                `
            })
            document.getElementById("list").innerHTML = str;
        }

        window.onload = function () {
            getList("desc")
        }
```

  

# JS进阶09    jquery封装的Ajax 及数据库mongoose

##### 1-jquery  封装的ajax

测试 jquery ajax

```javascript
//简单易用的高层实现见 $.get, $.post 等
$.get("http://169.254.44.235:3000/one",function(res){console.log(res);})
    $.ajax({
      type:"GET",//请求方式
      url:"http://169.254.44.235:3000/two",// 请求地址
       headers:{},    // 设置请求头
            
      data:{a:2,b:2}, 
      success:function(res){  console.log(res);}, // 请求成功 回调函数
      dataType:"text", *// 返回值的数据格式/类型 -- 默认json ，
     
      error:function(){ console.log("错误了"); },//请求失败/错误 回调函数
      beforeSend:function(){ console.log("正在请求");// 请求前  loading 效果 、请求拦截
        *// return false; //4*
      },
    
      timeout:3000, *//请求超时时间  
       cache:true ,    //true 缓存 false 不缓存
    })
//简单用法,不用配置
 $.get("http://169.254.44.235:3000/two",{"a":1,"b":2},function(res){console.log(res) },"text");
        // $.get( 请求地址, 上传参数, 成功回调，返回值的数据类型 )
 $.post("http://169.254.44.235:3000/three",function(res){ console.log(res)})    $.post("http://169.254.44.235:3000/four",{x:2,y:4},function(res){ console.log(res)})
     

```

##### 2-数据库

###### 关系型 : 

 甲骨文【mysql  oracle 】、微软【sql server】 、sql lite

操作语言：sql

概念： 数据库    表   字段

**增:insert into 表名(字段1,字段2) values(值1,值2)**

**删:delete form 表名 where 条件(字段===字段)**

**改:update 表名 set 字段=新值 where  条件(字段=字段)**

**查:select *form  "表名"**

表现形式：

1用户信息表

| id   | name | Age  | gid(外键） |
| ---- | ---- | ---- | ---------- |
| 1    | gao  | 19   | 1，2       |
| 2    | Wang | 18   | 3          |
| 3    | Li   | 17   | 4          |

2用户订单表

| Id   | goodsName        |
| ---- | ---------------- |
| 1    | 苹果、橘子、香蕉 |
| 2    | 手机             |
| 3    | 水杯             |
| 4    | 电脑             |



###### 非关系型:redis 、mongodb

概念： 数据库	 集合   文档

表现形式：

用户信息集合

```
{ "id":1,"name":"gg" }

{ "id":1,"name":"gg","age":19 }

{ "id":1,"name":"gg","age":19 ,hobby:[]}
```



用户订单集合

##### 3-数据库操作

###### 1、查看数据库

```shell
show databases;       或者     show dbs;
```

###### 2、创建数据库/使用数据库

```shell
use 数据库名；
例子:ues  school使用或者创建名为school数据库
```

###### 3、删除数据库 

```
use 数据库；
db.dropDatabase();
```

###### 4、创建集合

```shell
db.createCollection("集合名")
集合名:不能是数字开头

例子:db.createCollection("p3")创建名为p3的集合
```

###### 5、查看集合

```
show collections;或者   show tables;
```

###### 6、删除集合

```
db.[collection].drop()

例子:db.p2.drop();删除名为p2的集合
```

###### 7、插入文档

```
db.[collection].insert(  );

例子:db.p3.insert( {"name":"gao","age":18 } );
在p3的集合中插入文档
```

###### 8、查找

```
db.[collection].find()
或者
db.[collection].find().pretty()
```

###### 9、条件查找-等于

```
db.collection.find({key:"value"})

例子:
db.p3.find({"age":18});在p3中找年龄等于18的
```

###### 10、条件查找-大于/小于

```
db.[collection].find({key:{$gt:value} })
$gt大于    $lt小于
例子:
db.p3.find({"age"{$gt:18} });在p3中找年龄大于18的
```

###### 10、limit 、skip

```javascript
db.[collection].find().limit(n)	每次查询几条
db.[collection].find().skip(n)	跳过n条
例子:
db.p3.find().limit(2);在p3的集合查找每次查询2条->可以做分页
```

###### 11、修改

```javascript
db.[collection].update({条件},{修改值})
db.[collection].update({"name":"gao"},{"age":188}) //修改后结果 {"age":188}

或者
db.[collection].update({条件},{ $set:{"name":"zzzz"} })

例子:
db.p3.update({"name":wang},{$set:{"age":100}});修改p3的这集合中name为wang的这个数据,把age改为100
```

###### 12、删除

```javascript
db.[collection].remove({条件})

例子:db.p3.remove({"age":188})删除p3集合中的年龄188的这条数据
```

###### 13  mongoDB Compass

管理软件,在下方也可以写数据库增删改查命令,可导入json格式数据

###### 14 mysql

sql语句

```
**添加**  insert into`students`{"id",`name`,age,sex} values{null,高,12,男}
```



##### 4-node操作mongodb

**连接mongodb:使用模块mongoose连接mongodb**

```javascript
/*第一步:下载模块黑窗口命令*/ 
npm  install mongoose -D

/*第二步:载入模块*/
const mongoose=require("mongoose");

/*第三步:node.js连接mongodb数据库*/
    mongoose.connect("mongoose://127.0.0.1:27017/数据库名",
                     { useUnifiedTopology: true ,useNewUrlParser: true},function(err){
        console.log(err); // 没有错误 err === null
      });

/*第四步:创建集合骨架--规则/骨架*/
const studentsSchema= new mongoose.Schema({
    "name":String,
    "age" :Number,
    "hobby":Array,
    "sex":Boolean
})//studentsSchema为规则名/骨架名

/*第五步:创建数据集合模型*/
const studentsModel = mongoose.model( "students", studentsSchema);
/*const studentsModel = mongoose.model("参数1:集合名",参数2:规则名/骨架名)*/
                                     
/*第6步:增删改查*/
studentsModel.create()
```

增/删/改/查   下面案例

```javascript
//--------------文件connect.js--------------------------
// 连接mongoose--mongoose连接ip为127.0.0.1.27017/text--有则加载,无则创建

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/test", { useUnifiedTopology: true ,useNewUrlParser: true},function(err){ console.log(err); // 没有错误 err === null
});
module.exports=mongoose;//封装导出


//---------------文件studentsModel.js--------------------------
const mongoose= require("./connect.js");//封装引入
//创建数据模板--创建数据类型
const studentsSchema= new mongoose.Schema({
    "name":String,
    "age" :Number,
    "hobby":Array,
    "sex":Boolean
})
// 集合 -- 创建数据模型
const studentsModel = mongoose.model( "students", studentsSchema);

module.exports=studentsModel;//封装导出


//--------------------------------------------------
const  studentsModel =require("./studentsModel");//封装引入
// 查   find 、 findOne   注意: {}为查找所有数据
//分页 : 第几页  limit  每页显示条数    skip 跳过 n =(第几页-1)*limit 条
    studentsModel.find({},{"age":true},function(err,data){
        console.log("查询有错吗",err);
        console.log(data);
    })


//更改"_id":"60e6a4a244d3906d30159131"的这条数据,将name改为gao2222
// updateMany 修改多个
    studentsModel.updateOne({"_id":"60e6a4a244d3906d30159131"},{$set:{"name":"gao2222"}},function(err,data){
        console.log("查询有错吗",err);
        console.log(data);
    })

//deleteMany、deleteOne
//数据模型名.deleteOne( {删除条件},function(err,data){
       err 是错误信息, 没有错误 null 
       data:{n: 1, ok: 1, deletedCount: 1}
} )
```

##### 5-node 实现 数据接口

**流程:**

**1-用户注册 ：**

**2-前端：**


在 表单中 输入 用户名，密码， 点击 注册 ， 【html css ，js 事件】
将 用户的 输入值  提交 到 后端  【 ajax 】

1、写页面 +样式 +点击事件 - 获取 表单值 - ajax 。。 缺了 接口
------等待后端 1，2，3---
2、ajax 请求



**3-后端；**
用户 输入网址 打开 注册页面 ，
--后端 将数据 保存到数据库 【 node + mongodb】

1、实现服务器
2、发布静态资源 -页面
3、实现 数据接口
    请求地址：/add
    请求方式：POST
    上传参数：user password
    响应数据：{"code":"ok/no"}

3-1、数据要保存在数据库中 
    所以：
        1、连接数据库
        2、创建 集合 规则
        3、创建 集合 数据模型
3-2、 实现post 接口
    1 、获取 post 值
    2、 将值 保存到 数据库
    3、 如果正确 返回 {"code":"ok"} 错误 返回{"code":"no"}

3-3、postman 测试接口 



**自 Express 4.16.0 版本开始，Express 内置了 3 个常用的中间件**
**express.static 快速托管静态资源的内置中间件，例如： HTML 文件、图片、CSS 样式等（无兼容性）**
**express.json 解析 JSON 格式的请求体数据（有兼容性，仅在 4.16.0+ 版本中可用）**
**express.urlencoded 解析 URL-encoded 格式的请求体数据（有兼容性，仅在 4.16.0+ 版本中可用）**

**(post请求的数据在请求体内,所以需要下面两个配置后才能正常获取)**

# JS进阶10    案例

###### 



###### 1-电器管理平台(增,删,排序)

```javascript
//----------API.js(应用接口文件-)--------
//1创建服务器

const express=require("express");
const app=express();

//解决跨域问题
 const cors=require("cors");
 app.use(cors());

//post传参
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//1发布静态页面

app.use(express.static("public"));
//2连接数据库
const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/p0709", { useUnifiedTopology: true,useNewUrlParser: true})
//2规则
const goodsSchema=new mongoose.Schema({
    name:String,
    price:Number,
    num:Number
})
//2建集合
const goodsModel=mongoose.model("goods",goodsSchema);
//3添加端口
/* 3-1、添加 商品
请求地址：/add
请求方式：POST
上传参数：name 、 price 、 num
响应数据：{ code : "ok/no" } */

app.post("/add",function(req,res){
    //对象解构
    let {name,msg,num}=req.body;

    //验证数据name msg num是否合规,插入数据库
    goodsModel.create({name,msg,num},function(err,data){
       if(err){
           res.send({"code":"no","msg":"添加失败"});
       }else{
           res.send({"code":"ok","info":data})
       }
    })
})
//

/* 3-2、返回所有商品数据
请求地址：/list
请求方式：GET
上传参数：
响应数据：{ code : "ok/no" ,"info":[] } */
app.get("/list",function(req,res){
    goodsModel.find({},function(err,data){
        if(err){
            res.send({"code":"no",});
        }else{
            res.send({"code":"ok","info":data})
        }
    })
})

/* 3-3、删除商品接口
请求地址：/del
请求方式：GET
上传参数：_id: 
响应数据：{ code : "ok/no" } */
app.get("/del",function(req,res){
    var _id=req.query._id;
    goodsModel.deleteOne({"_id":_id},function(err,data){
        if(err){
            res.send({"code":"no","msg":"删除错误"});
        }else{
            res.send({"code":"ok","info":data})
        }
    })
})


/* 3-4、返回商品数据 & 排序
请求地址：/listSort
请求方式：GET
上传参数：type :  -1 倒序/降序 价格 从高到低， 1 正序  价格 从低到高
响应数据：{ code : "ok/no" ,"info":[] } */

app.get("/listSort",function(req,res){
    var type=req.query.type;
    // esc  从 小到大   desc 从大到小
    // 1    从 小到大  -1 从大到小
    goodsModel.find({},{},{sort:{"price":type}},function (err,data) {
        if(err){
            res.send({"code":"no","msg":"排序错误"});
        }else{
            res.send({"code":"ok","info":data})
        }
    } )
})
//1
app.listen(3000);
```





```html
//--------后台页面----------------
<!-- 表单添加商品  表格展示 -->
    <form >
        <div>
            <label for="">商品名</label>
            <input type="text" id="name">
        </div>
        <div>
            <label for="">单价</label>
            <input type="text" id="price">
        </div>
        <div>
            <label for="">数量</label>
            <input type="text" id="num">
        </div>
        <div>
            <input type="button" value="添加" id="add">
        </div>
    </form>

    <table>
        <thead>
            <tr>
                <td>id</td>
                <td>商品名</td>
                <td>单价</td>
                <td>数量</td>
                <td>小计</td>
                <td>操作</td>
            </tr>
        </thead>
        <tbody id="tbody">
            <!-- <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                    <button>删除</button>
                </td>
            </tr> -->
        </tbody>
    </table>
   
```



```javascript
//---------后台页面js文件-------------------------

//后端完成后,进行ajax操作,请求数据渲染页面
// $.post("http://169.254.44.235:3000/four",{x:2,y:4},function(res){ console.log(res)})

//下面把http://127.0.0.1:3000进行字符串拼接,
var baseUrl="http://127.0.0.1:3000";

//ajax请求数据后调用渲染
        function getList(){
            //$.get为ajax请求数据
            $.get(`${baseUrl}/list`,function(res){
                 console.log(res)
                if(res.code =="ok"){
                    //调用渲染
                    showList( res.info )
                }
            })

          
        }
        //拼接
        function showList(arr){
            var str="";
            $.each(arr,(i,v)=>{
                //解构对象进行赋值
                let {_id,name,price,num} =v;
                str+=`
                <tr>
                    <td>${_id}</td>
                    <td>${name}</td>
                    <td>${price}</td>
                    <td>${num}</td>
                    <td>${ (price * num).toFixed(2)}</td>
                    <td>
                        <button onclick="del('${_id}')">删除</button>
                    </td>
                </tr>
                `
            })
            $("#tbody").html(str);
        }
  //页面加载完成后,就获取ajax请求数据,渲染页面
        $(function(){
            getList();
        })

        //删除时,需要通过ajax通过id进行删除
        function del(_id){
            //通过url传参,http://169.254.77.143:3000/del?_id=111表示,删除_id为111的那条数据
            $.get(`${baseUrl}/del`,{"_id":_id},function(res){
                // console.log(res)
                if(res.code == "ok"){
                    //删除后请求数据并渲染
                    getList();
                }
            })
        }
   
//点击添加按钮绑定事件,
        $("#add").click(function(){
            
            //获取name,price,num的值
            var name =$("#name").val();
            var price =$("#price").val();
            var num =$("#num").val();
//请求数据,添加赋值
            //通过post的body传参,需要输入name,price,num三个参数
            $.post(`${baseUrl}/add`,{name,price,num},function(res){
                if(res.code == "ok"){
                     //删除后请求数据并渲染
                    getList();
                }
            })

        })
```

###### 2-下午电器管理案例

案例优化1,解构赋值对象let {_id,name,price,num} =v;

案例优化2:jquery中的serialize()序列表表格内容为字符串,需要将input表单添加name值。

```javascript
//--------------后端js文件  api--------------

// 1、创建服务器  支持http 请求 应答
const express =require("express");
const app=express();

// 解决跨域 
const cors =require("cors");
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({extended:true}));

// 2、静态资源发布 
app.use(express.static("public"))

// 连接数据库
const mongoose =require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/p301",{ useUnifiedTopology: true ,useNewUrlParser: true});
// 集合 -规则
// 集合名： goods
//        文档：  img  图片地址 、msg  简介、 price 价格、type 类别
//               string          string       number   string

const goodsSchema= new mongoose.Schema({
    img:String,
    msg:String,
    price:Number,
    type:String
})
// 集合 --数据模型
const goodsModel= mongoose.model("goods",goodsSchema);

/*4-1、展示所有商品数据接口

请求地址：/list
请求方式：GET
上传参数：
 响应数据：
    {"code":"ok/no","info":[]}*/
app.get("/list",(req,res)=>{//不需要传参
    goodsModel.find({},(err,data)=>{
        if( err){
            res.send({"code":"no"});
        }else{
            res.send({"code":"ok","info":data});
        }
    })
})
// 4-2、删除商品数据接口

app.get("/del",(req,res)=>{
    //get传参url地址中,地址中有query,输入_id的值
    var _id = req.query._id;
    
    goodsModel.deleteOne({"_id":_id},(err,data)=>{
        if( err){
            res.send({"code":"no"});
        }else{
            res.send({"code":"ok"});
        }
    })
})

// 4-3、添加商品数据接口
app.post("/add",(req,res)=>{
    var obj= req.body;//post传参在body中
    goodsModel.create(obj,err=>{
        if( err){
            res.send({"code":"no"});
        }else{
            res.send({"code":"ok"});
        }
    })
})
// 4-4、 修改数据接口 - 获取当前要修改的 商品信息
app.get("/edit",(req,res)=>{
    var _id = req.query._id;//get传参url地址中,地址中有query,输入_id的值

    goodsModel.findOne({"_id":_id},(err,data)=>{
        if( err){
            res.send({"code":"no"});
        }else{
            res.send({"code":"ok","info":data});
        }
    })
})
//  4-5 、确认修改接口

app.post("/editOk",(req,res)=>{
    var obj= req.body;//post传参在body中
    goodsModel.updateOne({"_id":obj._id},{$set:obj},err=>{
        if( err){
            res.send({"code":"no"});
        }else{
            res.send({"code":"ok"});
        }
    })
})
app.listen(3000)
```

```javascript
//-----------------前端js文件-----------
// const baseUrl="http://127.0.0.1:3000";
const baseUrl="";


function getList(){
    //本地 不用输入http://127.0.0.1:3000  ,直接输入/list
    $.get(`/list`,res=>{
        // console.log(res)
        if(res.code == "ok"){
            showList(res.info)
        }

    })
}


function showList(arr){
    var str="";
    $.each(arr,(i,v)=>{
        str+=`
        <tr>
                <td>
                    <img src="./images/${v.img}" alt="">
                </td>
                <td>${v.msg}</td>
                <td>$${v.price}</td>
                <td>${v.type}</td>
                <td>
                    <span onclick="edit('${v._id}')">修改 &emsp;</span>
                    <span onclick="del('${v._id}')">删除</span>
                </td>
            </tr>
        `
    })

    $("#showTbody").html(str)
}

$(function(){

    getList();
})


// 删除

function del(_id){
    $.get(`/del`,{"_id":_id},res=>{
        if(res.code == "ok"){
            getList();
        }
    })
}


// 添加

$("#add").click(function(){
    var data=  $("#addForm").serialize() ;

    $.post(`/add`,data,res=>{
        if(res.code == "ok"){
            getList();
        }
    })
    $("#img").val("")
    $("#msg").val("")
    $("#price").val("")

})


//定义全局变量,存储下标,在确认修改中使用
var edit_id;

// 点击 表格 中 修改 按钮
function edit(_id){
    $("#add").hide();
    $("#editOk").show();

    $.get(`/edit`,{"_id":_id},res=>{
        // console.log(res)
        let { _id,img,msg,price,type }= res.info;
        $("#img").val(img);
        $("#msg").val(msg);
        $("#price").val(price);
        $("#type").val(type);
        //全局变量赋值
        edit_id=_id;

    })
}
// 点击 确认修改 按钮
$("#editOk").click(function(){
   

    var data= $("#addForm").serialize() + `&_id=${edit_id}`;
    // console.log(data)
    $.post(`/editOk`,data,res=>{

        if(res.code == "ok"){

            getList();
            $("#add").show();
            $("#editOk").hide();
            //清空输入框
            $("#img").val("")
            $("#msg").val("")
            $("#price").val("")
        }

    })
})
```

# JS进阶11

熟练后,前后端一起写,写接口时,直接写



##### 11.1    学生信息管理系统案例--多条件模糊搜索

后端api.js文件

```js
const express =require("express");
const app= express();
// 2、 发布静态资源
app.use(express.static("public"));

// post
app.use( express.json() );
app.use( express.urlencoded({extended:true}) );

// 连接数据库
const mongoose =require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/p30712",{ useUnifiedTopology: true ,useNewUrlParser: true} );

// 学员信息 集合 规则
const studentsSchema=new mongoose.Schema({
        name:String,
        sex:String,
        age:Number,
        address:String
})
// 学员信息 集合 数据模型

const studentsModel=mongoose.model("students",studentsSchema);

// 添加
app.post("/add",(req,res)=>{
    var obj = req.body;
    studentsModel.create(obj,(err,data)=>{
        if(err){
            res.send({"code":"no"});
        }else{
            res.send({"code":"ok"});
        }
    })
})

// 查询 
app.get("/list",(req,res)=>{

    //单条件模糊搜索------------------
  /*   var name = req.query.name;
    
    var query={};
    if (name ){
        query= {"name":{$regex:regexp}}
    } */
//------------------------------------

     //多条件模糊搜索
     //获取前端传递的值
    var query = req.query;
     //搜索name和age,其中一个有值,另一个为空,则删除空值,搜索另一个
    for(var key in query){
        if( !query[key]){
            delete query[key];
        }
      // 根据 姓名 模糊搜索  
        if( key == "name"){
            var regexp=new RegExp(query[key],'i');
            query.name ={$regex:regexp};
        }

    }

    studentsModel.find(query,(err,data)=>{
        if(err){
            res.send({"code":"no"});
        }else{
            res.send({"code":"ok","info":data});
        }
    })
})
// 删除
app.get("/del",(req,res)=>{
    var _id= req.query._id
    studentsModel.deleteOne({"_id":_id},(err,data)=>{
        if(err){
            res.send({"code":"no"});
        }else{
            res.send({"code":"ok"});
        }
    })
})
// 通过_id 得到  要修改的值
app.get("/edit",(req,res)=>{

    var _id= req.query._id;

    studentsModel.findOne({"_id":_id},(err,data)=>{
        if(err){
            res.send({"code":"no"});
        }else{
            res.send({"code":"ok","info":data});
        }
    })
})



// 修改
app.post("/editOk",(req,res)=>{
    var obj = req.body;
    studentsModel.updateOne({"_id":obj._id},{$set:obj},(err,data)=>{
        if(err){
            res.send({"code":"no"});
        }else{
            res.send({"code":"ok"});
        }
    })
})

app.listen(3000)
```

前端js文件

```js
//tab切换
$("#tab >li").click(function () {
    $(this).addClass("tab_active").siblings().removeClass("tab_active");
    $("#tabBox >div").eq($(this).index()).addClass("div_active").siblings().removeClass("div_active");
})

//多条件搜索，搜索条件

var query={"name":"","age":""}

// 点击展示 -- 请求 数据 --渲染 表格

$("#showList").click(function () {

    getList();
})

//请求 数据
function getList(obj) {
    //obj为搜索参数,如果有参数,则为obj,如果参数为空,则请求全部数据
    obj= obj?obj:{};
    // console.log(obj)
    $.get("/list", obj,function (res) {
        // console.log(res);
        if (res.code == "ok") {
            // 数据请求成功 -- 渲染 表格
            showList(res.info)
        }
    })


}

// 渲染 表格
function showList(arr) {
    var str = "";
    if (arr.length > 0) {
        $("#table").show();
        $("#nodata").hide();


        $.each(arr, function (i, v) {
            str += `
            <tr>
                <td>${v.name}</td>
                <td>${v.sex}</td>
                <td>${v.age}</td>
                <td>${v.address}</td>
                <td>
                    <button onclick="del('${v._id}')">删除</button>
                    <button onclick="edit('${v._id}')">修改</button>
                </td>
            </tr>
        `
        })
        $("#list").html(str);
    }else{
        $("#table").hide();
        $("#nodata").show();
    }

   
}
//删除
function del(_id) {
    $.get("/del", { "_id": _id }, function (res) {
        if (res.code == "ok") {
            // 数据删除成功 
            getList();
        }
    })
}

//录入

$("#add").click(function(){
//    console.log( $("#addForm").serialize() );
    var data=  $("#addForm").serialize();
    $.post("/add",data,function(res){
        if(res.code == "ok"){
            alert("录入成功");
        }
    })


})
//点击修改 -- 显示 修改表单 -- 请求接口 -- 渲染默认值 
var editId;
function edit(_id){
    $("#tan").show();
    $.get("/edit",{"_id":_id},function(res){
        if(res.code == "ok"){
            $("#name").val( res.info.name );
            $("#editForm :radio").each(function(i,v){
                if( $(v).val() == res.info.sex ){
                    $(v).prop("checked",true);
                }
            })

            $("#age").val( res.info.age );
            $("#address").val(res.info.address);
            editId = res.info._id;
        }

    })
}

// 点击确认修改 -- 获取表单值 -- 调用接口 --- 清空表单--  隐藏修改表单
$("#editOk").click(function(){
    $("#tan").hide(); 
    var data= $("#editForm").serialize()+ `&_id=${editId}`;   
    // console.log(data)
    $.post("/editOk",data,function(res){
        if(res.code == "ok"){
           getList();
        }
    })
})

//点击 取消修改 --- 清空表单 --- 隐藏修改表单
$("#editNo").click(function(){
    $("#tan").hide(); 
})


//单条件搜索
$("#search").on("keydown",function(event){
    // console.log(event)
    if(event.keyCode == 13){
        var name =  $(this).val() ;
        getList({"name":name})
    }
})

//多条件搜索
$("#ss").click(function(){
    var name = $("#sname").val();
    var age = $("#sage").val();
    query.name =name;
    query.age= age;
    getList(query)
})
```

前端html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/index.css">
    <script src="./js/jquery.min.js"></script>
</head>
<body>
    <h1>学员管理系统</h1>
    <div class="content">
        <div class="left">
            <ul id="tab">
                <li class="tab_active" >录入</li>
                <li id="showList">展示</li>
            </ul>
        </div>
        <div class="right" id="tabBox">
            <!-- 录入的表单  -->
            <div class="div_active">  
                <form id="addForm">
                    <div>
                        <label for="">姓名</label>
                        <input type="text" name="name">
                    </div>
                    <div>
                        <label for="">性别</label>
                       <span>男</span> <input type="radio"  value="男" name="sex">
                       <span>女</span> <input type="radio"  value="女" name="sex">                       
                    </div>

                    <div>
                        <label for="">年龄</label>
                        <input type="text" name="age">
                    </div>

                    <div>
                        <label for="">籍贯</label>
                        <select name="address" id="">
                            <option value="陕西">陕西</option>
                            <option value="河南">河南</option>
                            <option value="河北">河北</option>
                            <option value="湖南">湖南</option>
                        </select>
                    </div>

                    <div>  
                        <input type="button" value="添加" id="add">
                    </div>

                </form>  
            </div>

            <!-- 展示的 表格 -->
            <div>
                <!-- 单条件搜索 -->
                <input type="text" placeholder="输入姓名搜索" id="search">

                <!-- 多条件搜索 -->
                <div>
                    <input type="text" placeholder="输入姓名搜索" id="sname">
                    <input type="text" placeholder="输入年龄搜索" id="sage">
                    <input type="button" value="搜索" id="ss">


                </div>

                <table id="table">
                    <thead>
                        <tr>
                            <th>姓名</th>
                            <th>性别</th>
                            <th>年龄</th>
                            <th>籍贯</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody id="list">
                        <!-- <tr>
                            <td>111</td>
                            <td>男</td>
                            <td>19</td>
                            <td>陕西</td>
                            <td>
                                <button>删除</button>
                                <button>修改</button>
                            </td>
                            
                        </tr> -->
                    </tbody>
                </table>
                <h1 id="nodata">暂无数据</h1>
            </div>

        </div>
    </div>

    <div class="tan" id="tan">
        <div class="tanBox">
            <form id="editForm">
                <div>
                    <label for="">姓名</label>
                    <input type="text" name="name" id="name">
                </div>
                <div>
                    <label for="">性别</label>
                   <span>男</span> <input type="radio"  value="男" name="sex" >
                   <span>女</span> <input type="radio"  value="女" name="sex">                       
                </div>

                <div>
                    <label for="">年龄</label>
                    <input type="text" name="age" id="age">
                </div>

                <div>
                    <label for="">籍贯</label>
                    <select name="address" id="address">
                        <option value="陕西">陕西</option>
                        <option value="河南">河南</option>
                        <option value="河北">河北</option>
                        <option value="湖南">湖南</option>
                    </select>
                </div>

                <div>  
                    <input type="button" value="确认修改" id="editOk">
                    <input type="button" value="取消" id="editNo">

                </div>

            </form>  
        </div>
    </div>


    <script src="js/index.js"></script>
</body>
</html>
```

前端css文件

```css
*{
    margin: 0;
    padding: 0;
    list-style: none;
}

.content{
    width: 100vw;
    display: flex;
}
.left{
    width: 20vw;
    /* border: 1px solid black; */
    /* min-height: 80vh; */
}
.left >ul {
    text-align: center;

}
.left >ul >li{
   height: 50px;
   background: chocolate;
   line-height: 50px;
   width: 100%;
   cursor: pointer;
   margin-bottom: 10px;
}
.left >ul > .tab_active{
    background: red;
    color: white;
}
.right >div{
    display: none;
}
.right> .div_active{
    display: block;
}

.tan{
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0,0, 0.5);
    position: absolute;
    top:0;
    left:0;
    display: none;
}
.tanBox{
    width: 300px;
    height: 300px;
    background: white;
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
}
```



##### 11.2查询条件

模糊查询是数据库的基本操作之一，实现对给定的字符串是否与指定的模式进行匹配。如果字符完全匹配，可以用=等号表示，如果部分匹配可认为是一种模糊查询。在关系型数据中，通过SQL使用like ‘%fens%’的语法。那么在mongodb中我们应该如何实现模糊查询的效果呢

| 关键字        | 说明                                                     |
| ------------- | -------------------------------------------------------- |
| $or           | 或关系                                                   |
| $nor          | 或关系取反                                               |
| $gt           | 大于                                                     |
| $gte          | 大于等于                                                 |
| $lt           | 小于                                                     |
| $lte          | 小于等于                                                 |
| $ne           | 不等于                                                   |
| $in           | 在多个值范围内,后面跟数组                                |
| $nin          | 不在多个值范围内                                         |
| $all          | 匹配数组中多个值                                         |
| $regex        | 正则，用于模糊查询                                       |
| $size         | 匹配数组大小                                             |
| $maxDistance  | 范围查询，距离（基于LBS）                                |
| $mod          | 取模运算                                                 |
| $near         | 邻域查询，查询附近的位置（基于LBS）                      |
| $exists       | 字段是否存在                                             |
| $elemMatch    | 匹配内数组内的元素                                       |
| $within       | 范围查询（基于LBS）                                      |
| $box          | 范围查询，矩形范围                                       |
| $center       | 范围查询，圆形范围                                       |
| $centerSphere | 范围查询，球形范围                                       |
| $slice        | 查询字段集合中的元素（比如从第几个之后，第N到第M个元素） |

##### 11.3精准查询

```js
//Mongodb数据库表
const systemUser = require('../../models/user'); 
systemUser.find({name:'xiaoming'}).exec(function(err,rs){}
```

##### 11.3  单条件模糊搜索

```js
const reg = new RegExp(keyword, 'i') //不区分大小写
```



##### 11.4多条件模糊查询

```js
//Mongodb数据库表
const systemUser = require('../../models/user');
//前端传入的要查询的关键字
var name = req.query.name;
var page = req.query.page || 1; //当前页数
var limitNums = 10; //指定每一页查询的条数
page = parseInt(page);
var skipNums = (page - 1) * limitNums; //跳过指定数量
//正则匹配 i忽略大小写
var reg = new RegExp(name, "i");
var _filter = {
    //多字段匹配
    $or: [
        {name: {$regex: reg}},
        {description: {$regex: reg}},
        {owner: {$regex: reg}},
    ]
}
systemUser.find(_filter).
//跳过指定数量的数据
skip(skipNums).
//指定从MongoDB中读取的记录条数。
limit(limitNums).
sort({createTime:-1}).
exec(function(err,rs){}
```

##### 11.5模糊查询简介

MongoDB查询条件可以使用正则表达式，从而实现模糊查询的功能。模糊查询可以使用$regex操作符或直接使用正则表达式对象。

MongoDB使用$regex操作符来设置匹配字符串的正则表达式，使用PCRE(Pert Compatible Regular Expression)作为正则表达式语言。

regex操作符

{:{r e g e x : / p a t t e r n / ， regex:/pattern/，regex:/pattern/，options:’’}}

{:{r e g e x : ’ p a t t e r n ’ ， regex:’pattern’，regex:’pattern’，options:’’}}

{:{$regex:/pattern/}}

正则表达式对象

{: /pattern/}$regex与正则表达式对象的区别:

在KaTeX parse error: Expected '}', got 'EOF' at end of input: …达式对象，例如:{name:{in:[/^joe/i, /^jack/}}

在使用隐式的a n d 操 作 符 中 ， 只 能 使 用 and操作符中，只能使用and操作符中，只能使用regex，例如:{name:{$regex:/^jo/i, $nin:[‘john’]}}

当option选项中包含X或S选项时，只能使用KaTeX parse error: Expected '}', got 'EOF' at end of input: …egex，例如:{name:{regex:/m.*line/,$options:“si”}}

$regex操作符的使用

**$regex操作符中的option选项可以改变正则匹配的默认行为，它包括i, m, x以及S四个选项**，其含义如下

i 忽略大小写，{{$regex/pattern/i}}，设置i选项后，模式中的字母会进行大小写不敏感匹配。

m 多行匹配模式，{{r e g e x / p a t t e r n / , regex/pattern/,regex/pattern/,options:‘m’}，m选项会更改^和$元字符的默认行为，分别使用与行的开头和结尾匹配，而不是与输入字符串的开头和结尾匹配。

x 忽略非转义的空白字符，{:{r e g e x : / p a t t e r n / , regex:/pattern/,regex:/pattern/,options:‘m’}，设置x选项后，正则表达式中的非转义的空白字符将被忽略，同时井号(#)被解释为注释的开头注，只能显式位于option选项中。

s 单行匹配模式{:{r e g e x : / p a t t e r n / , regex:/pattern/,regex:/pattern/,options:‘s’}，设置s选项后，会改变模式中的点号(.)元字符的默认行为，它会匹配所有字符，包括换行符(\n)，只能显式位于option选项中。

使用$regex操作符时，需要注意下面几个问题:

i，m，x，s可以组合使用，例如:{name:{r e g e x : / j ∗ k / , regex:/j*k/,regex:/j∗k/,options:“si”}}

在设置索弓}的字段上进行正则匹配可以提高查询速度，而且当正则表达式使用的是前缀表达式时，查询速度会进一步提高，例如:{name:{$regex: /^joe/}

上面介绍的元字符可能就会让我们在查询的时候出现一些问题，比如有时候想要查询出所有带价格的模糊商品的时候用了.元字符进行模糊搜索，这时候会查询出来全部的数据；

这个时候就需要对模糊查询的条件进行一些操作，转义一下：
————————————————
版权声明：本文为CSDN博主「夏末的雪」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/PinelliaCool/article/details/108007184

##### 11.6如何判断一个对象为空对象

1.将json对象转化为json字符串，再判断该字符串是否为"{}"

```js
var data = {};
var b = (JSON.stringify(data) == "{}");
alert(b);//true
```

2.for in 循环判断

```js
var obj = {};
var b = function() {
for(var key in obj) {
return false;
}
return true;
}
alert(b());//true
```

3.jquery的isEmptyObject方法
此方法是jquery将2方法(for in)进行封装，使用时需要依赖jquery

```js
var data = {};
var b = $.isEmptyObject(data);
alert(b);//true
```

4.Object.getOwnPropertyNames()方法
此方法是使用Object对象的getOwnPropertyNames方法，获取到对象中的属性名，存到一个数组中，返回数组对象，我们可以通过判断数组的length来判断此对象是否为空
注意：此方法不兼容ie8，其余浏览器没有测试

```js
var data = {};
var arr = Object.getOwnPropertyNames(data);
alert(arr.length == 0);//true
```

5.使用ES6的Object.keys()方法
与4方法类似，是ES6的新方法, 返回值也是对象中属性名组成的数组

```js
var data = {};
var arr = Object.keys(data);
alert(arr.length == 0);//true
```

————————————————
版权声明：本文为CSDN博主「云_飞扬」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_38627581/article/details/77353015



# JS进阶12

##### 案例1  考试题目kky邮箱 2个数据库集合

```js
//-----------api  js文件
const express = require("express");
const app =express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const mongoose =require("mongoose");
      mongoose.connect("mongodb://127.0.0.1:27017/p3kao",{ useUnifiedTopology: true,useNewUrlParser: true } );
// 草稿箱
// user 收信人	 title 主题	msg内容 	time创建时间（时间戳）
const cgxsSchema=new mongoose.Schema({
    user:String,
    title:String,
    msg:String,
    time:Number//Number可写为Date.now
})
const cgxsModel= mongoose.model( "cgxs", cgxsSchema);

// ​通讯录
// user  收信人
const txlsSchema=new mongoose.Schema({
    user:String 
})
const txlsModel= mongoose.model( "txls", txlsSchema);

// 1、添加到草稿箱

app.post("/addCgx",(req,res)=>{
    var obj =req.body;
    
    cgxsModel.create(obj,(err,data)=>{
        if(err){
            res.send({"code":"no","msg":"添加失败"});
        }else{
            res.send({"code":"ok"});
        }
    })
})

// 2、 添加到通讯录

app.post("/addTxl",(req,res)=>{
    var user =req.body.user;

    txlsModel.create({"user":user},(err,data)=>{
        if(err){
            res.send({"code":"no","msg":"添加失败"});
        }else{
            res.send({"code":"ok"});
        }
    })
})
//3、 查询所有草稿箱数据
app.get("/listCgx",(req,res)=>{
    
    cgxsModel.find({},(err,data)=>{
        if(err){
            res.send({"code":"no","msg":"查询失败"});
        }else{
            res.send({"code":"ok","info":data});
        }
    })
})
// 4、删除	草稿箱一条数据
app.get("/delCgx",(req,res)=>{
    var _id= req.query._id;

    cgxsModel.deleteOne({"_id":_id},(err,data)=>{
        if(err){
            res.send({"code":"no","msg":"删除失败"});
        }else{
            res.send({"code":"ok"});
        }
    })
})
// 5 、清空草稿箱
app.get("/clearCgx",(req,res)=>{
  
    cgxsModel.deleteMany({},(err,data)=>{
        if(err){
            res.send({"code":"no","msg":"删除失败"});
        }else{
            res.send({"code":"ok"});
        }
    })
})
//6、查询所有通讯录数据
app.get("/listTxl",(req,res)=>{
    
    txlsModel.find({},(err,data)=>{
        if(err){
            res.send({"code":"no","msg":"查询失败"});
        }else{
            res.send({"code":"ok","info":data});
        }
    })
})
//7、删除通讯录一条数据
app.get("/delTxl",(req,res)=>{
    var _id= req.query._id;

    txlsModel.deleteOne({"_id":_id},(err,data)=>{
        if(err){
            res.send({"code":"no","msg":"删除失败"});
        }else{
            res.send({"code":"ok"});
        }
    })
})

app.listen(3000)
```

```js
//----------前端文件js------------
//选项卡
$("#tab >li").click(function(){
    $(this).addClass("tab_active").siblings().removeClass("tab_active");

    $("#tab_box >div").eq( $(this).index() ).addClass("tab_box_active").siblings().removeClass("tab_box_active");

})
// 添加
$("#add").click(function(){
    var user= $("#user").val();
    var title= $("#title").val();
    var msg= $("#msg").val();
    var time= new Date().getTime();
if(user && title && msg){

    $("#no").hide(); 

    // 保存到 草稿箱
    $.post("/addCgx",{
        user,
        title,
        msg,
        time
    },function(res){
        // console.log(res);
        if(res.code =="ok"){
              // 保存到 通讯录
                $.post("/addTxl",{
                    user
                },function(res){
                   if(res.code =="ok"){
                    // console.log("草稿箱，通讯录，都保存成功")
                    $("#yes").show()
                   }else{
                    $("#yes").hide() 
                   }
                } )
        }

    } )

}else{
   $("#no").show(); 
}


  
})


// 点击草稿箱 渲染 

$("#cgx").click(function(){
    getCgxList();
})
function getCgxList(){
    $.get("/listCgx",function(res){
        // console.log(res);
        showCgxList(res.info);
    })
}
// 渲染草稿箱
function showCgxList(arr) {
    if(arr.length>0){
        $("#noDate").hide();
        $("#show_table").show();
        var str="";
        $.each(arr,function (i,v) {
            str+=`
            <tr>
                <td>${i+1}</td>
                <td>${v.user}</td>
                <td>${v.title}</td>
                <td>${v.msg}</td>
                <td>${toTimeString(v.time)}</td>
                <td>
                    <span onclick="del('${v._id}')">删除</span>
                </td>
            </tr>
            `
        })
        $("#show_tbody").html(str);
    

    }else{
        $("#noDate").show();
        $("#show_table").hide();
       
    }

  

}

// 删除草稿箱

function del(_id) {
    $.get("/delCgx",{_id},function (res) {
        if(res.code =="ok"){
            getCgxList(); 
        }
    })
}

// 清空
$("#clear").click(function () {
    $.get("/clearCgx",function (res) {
        if(res.code =="ok"){
            getCgxList(); 
        }
    }) 
    
})



// 点击 通讯录渲染 

$("#txl").click(function(){
    getTxlList()
})

function getTxlList(){
    $.get("/listTxl",function(res){
        // console.log(res);
        showTxlList(res.info);
    })
}
// 渲染通讯录
function showTxlList(arr) {
    var str="";
    $.each(arr,function (i,v) {
        str+=`
        <li>
            <span>${i+1}.</span>
            <p class=" ${ i%2 !=0 ? 'p_active' : ''} ">
                <span>${v.user}</span>
                <span onclick="delTxl('${v._id}')">删除</span>
            </p>
        </li>
        `
    })
    $("#show_list").html(str);
}
//删除通讯录 
function delTxl(_id) {
    var flag= confirm("确定删除吗?");
    if(flag){
        $.get("/delTxl",{_id},function(res){
            if(res.code =="ok"){
                getTxlList();
            }
        }) 
    }
}

// 转时间格式
function toTimeString(time){
    var t= new Date(time);

    var year= t.getFullYear();
    var month= (t.getMonth()+1).toString().padStart(2,'0');
    var date= t.getDate().toString().padStart(2,'0');

    var hour= t.getHours().toString().padStart(2,'0');
    var minute= t.getMinutes().toString().padStart(2,'0');
    var second= t.getSeconds().toString().padStart(2,'0');

    return `${year}-${month}-${date} ${hour}:${minute}:${second}`

}
```



##### 案例2  新闻案例   分类型

```js
//------------api,路由文件-----------
//载入express*

const express =require("express");
const app =express();
*//静态页面发布*
app.use(express.static("public"));
*//post传参*

app.use(express.json());
app.use(express.urlencoded({extended:true}));

*//载入mongoose及连接数据库*

const mongoose =require("mongoose");
   mongoose.connect("mongodb://127.0.0.1:27017/p3kao",{ useUnifiedTopology: true ,useNewUrlParser: true } )

*// 创建新闻 集合 规则*
*//【 title 新闻标题、url新闻地址 、type 新闻类别、level是否标红（布尔）、time 添加时间（number） 】*

const newsSchema = new mongoose.Schema({
  title:String,
  url:String,
  type:String,
  level:Boolean,
  time:Number//Number可写为Date.now
})
*// 创建新闻 集合 模型*

const newsModel= mongoose.model("news",newsSchema);
*//1、添加新闻接口* 

app.post("/add",(req,res)=>{
  var obj =req.body;
  newsModel.create(obj,(err,data)=>{  
      if(err){
      res.send({"code":"no"});
    }else{
      res.send({"code":"ok"}); 
    }
  })
})

*//2、获取新闻信息接口*  

app.get("/list",(req,res)=>{

  *//*
  var type = req.query.type ? req.query.type :"科技";
  newsModel.find({ "type":type },{},{limit:7,sort:{"time":-1}},function(err,data){
    if(err){
      res.send({"code":"no"});
    }else{
      res.send({"code":"ok","info":data}); 
    }
  })
})
app.listen(3000)
```

```js
//------------前端js文件
//存储筛选的信息,刷新后仍然是刷新前的页面
var type = localStorage.getItem("p3kaotype")?JSON.parse(localStorage.getItem("p3kaotype")).type :"科技"
var typeArr = ["科技", "娱乐", "财经"]

//切换:点击筛选按钮给其他去样式,点击的按钮加样式
$("#filter_btn >button").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    var index = $(this).index();
    //通过点击按钮记录下标,并标记类型
    type = typeArr[index];
    //保存
    localStorage.setItem("p3kaotype",JSON.stringify({type:type}));
    //请求相关类型的页面数据
    getList(type);

})

// $.get请求数据并展示
function getList(type) {
    $.get("/list", { "type": type }, function (res) {
        showList(res.info)
    })
    // showList()
}

// 渲染----
function showList(arr) {
    var str = "";
    $.each(arr, function (i, v) {
//--里面如果v.level有值,则给li加class 为red的类名
        str += `
            <li class="${v.level ? 'red' : ''}">
                 <span>${v.title}</span>
                 <span>${toTimeString(v.time)}</span>
             </li>
        `
    })
    $("#list").html(str);
}

// 添加

$("#add").click(function () {
    //获取输入框的值
    var title = $("#title").val();
    var url = $("#url").val();
    var type = $("#type").val();
    var level = $("#addForm :radio:checked").val();
    var time = new Date().getTime();
//$post进行请求接口,post传参
    $.post("/add", {
        title, url, type, level, time
    }, function (res) {

        type = $("#type").val(); // 类别值
         //添加什么类型的数据,给下面按钮加选中样式
        checkButton(type);
       //保存
        localStorage.setItem("p3kaotype",JSON.stringify({type:type}));
        //添加什么类型的数据,渲染展示什么类型的数据
        getList(type)

    })
})
//页面加载完毕调用
$(function () {
    checkButton(type);
    getList(type);
})
//根据需求给按钮加样式
function checkButton(type){

    var index= typeArr.findIndex(v=>v == type);
    $("#filter_btn >button").eq(index).addClass("active").siblings().removeClass("active");
    
}

```

# 重点

##### jQuery的ajax的常用配置项

```js
//简单易用的高层实现见 $.get, $.post 等
$.get("http://169.254.44.235:3000/one",function(res){console.log(res);})
    $.ajax({
      type:"GET",//请求方式
      url:"http://169.254.44.235:3000/two",// 请求地址
       headers:{},    // 设置请求头
            

      data:{a:2,b:2}, 
      success:function(res){  console.log(res);}, // 请求成功 回调函数
      dataType:"text", *// 返回值的数据格式/类型 -- 默认json ，
     
      error:function(){ console.log("错误了"); },//请求失败/错误 回调函数
      beforeSend:function(){ console.log("正在请求");// 请求前  loading 效果 、请求拦截
        *// return false; //4*
      },
    
      timeout:3000, *//请求超时时间  
       cache:true ,    //true 缓存 false 不缓存
    })

//简单用法,不用配置
 $.get("http://169.254.44.235:3000/two",{"a":1,"b":2},function(res){console.log(res) },"text");
        // $.get( 请求地址, 上传参数, 成功回调，返回值的数据类型 )
 $.post("http://169.254.44.235:3000/three",function(res){ console.log(res)})    $.post("http://169.254.44.235:3000/four",{x:2,y:4},function(res){ console.log(res)})
```

#####     2http和https的区别，常见状态码有哪些 



##### 3写出Mongodb 文档操作，增 、删 、改 、查 方法

create创建

find查找

deleteOne删除1个

deleteMany删除多个

update修改



##### 写出原生ajax的基本写法

```js
//-----AJAX的初步使用-----------
//request--在其他地方可简称为req,意思是请求;
//response-- 在其他地方可简称为res  意思是应答/响应

//创建异步请求对象
var xhr = new XMLHttpRequest();
//打开连接--xhr.open(请求方式 、请求地址、是否异步)
xhr.open("GET", "http://127.0.0.1:5500/day05/%E8%87%AA%E5%B7%B1%E7%BB%83%E4%B9%A0/11.json", true);
//发送请求
xhr.send();
//监听状态改变
xhr.onreadystatechange = function () {
//ajax 状态   4成功       http 状态 200 成功
if (xhr.readyState == 4 && xhr.status == 200) {
console.log(xhr.responseText);
//转为对象
var obj = JSON.parse(xhr.responseText);

console.log(obj);

   }
}
```

##### 同源策略是什么，jsonp解决跨域的原理

script  的src请求资源

同源就是:协议  主机  端口相同即为同源

# JS进阶13

##### 1-yarn包管理器安装

​    **npm install yarn -g安装yarn包管理器**

**yarn -v查看版本**

**yarn add 模块名   下载**

​    **yarn remove 模块名,   删除**

##### 2-移动端案例

写一套样式 ，适配不同分辨率的设备（手机、平板）

rem ： 根据 html  font size值

1rem === html - fontSize

375px设备   宽度最大：375px

html ：fontSize == 37.5px

1rem == 37.5px      

```
.box{ width :10rem }
```

500px    宽度最大：500px

html ：fontSize == 50px

1rem. ==50px

```
.box{ width :10rem }
```

750px    宽度最大：750px

 html ：fontSize == 75px

1rem. ==75px

```
.box{ width :10rem }
```

html fontSize == 设备的宽度 / 10

##### 3-食物分类案例

```js
//----------后端api.js文件 -------
const express = require("express");
const app =express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// 连接数据库
const mongoose =require("mongoose");
      mongoose.connect("mongodb://127.0.0.1:27017/p3kao",{ useUnifiedTopology: true ,useNewUrlParser: true } )

// goods 集合 规则
/**
    name 商品名 、type 类别 （1，2，3，4），
    oldPrice 原价，nowPrice现价
    num 库存、flag （true、false）是否标红 ,time 添加时间
*/
const goodsSchema=new mongoose.Schema({
    name:String,
    type:Number,
    oldPrice:Number,
    nowPrice:Number,
    num:Number,
    flag:Boolean,
    time:Number//Number可写为Date.now
})

// goods 集合 模型
const goodsModel= mongoose.model("goods",goodsSchema);


// 添加接口
app.post("/add",(req,res)=>{
    var obj= req.body;
    goodsModel.create(obj,(err,data)=>{
        if(err){
            res.send( {"code":"no"} );
        }else{
            res.send( {"code":"ok"} );
        }
    })
})

//查询商品
app.get("/list",(req,res)=>{
    //通过url上添加参数type进行查询展示
    var type =req.query.type;
    //如果查询类型没有则去除,因为没有货物的类型为空,查询会查询不到数据
    var q;
    //下拉框中option的每个value为1,2,3,4
    if(type == "0"){
        // 查询全部
        q={};
    }else{
        //分类查询
        q={"type":type}
    }   
    goodsModel.find(q,(err,data)=>{
        if(err){
            res.send( {"code":"no"} );
        }else{
            res.send( {"code":"ok","info":data} );
        }
    })
})
//删除
app.get("/del",(req,res)=>{
    var _id =req.query._id;
    goodsModel.deleteOne( {"_id":_id} ,(err,data)=>{
        if(err){
            res.send( {"code":"no"} );
        }else{
            res.send( {"code":"ok"} );
        }
    })
})


app.listen(3000);
```

```js
//----------前端js文件--------------------- 
var type =0;//  下面数组的下标    储存时都是文字,以数字存储实现优化
var typeArr=["全部","优选水果","卤味熟食","饮料酒水","休闲零食"];
$("#add").click(function(){

    var name =$("#name").val();
    var type =$("#type").val();
    var oldPrice= $("#oldPrice").val();
    var nowPrice= $("#nowPrice").val();
    var num=$("#num").val();
    var flag = $("#flag >:radio:checked").val();
    var time = new Date().getTime();

    // console.log(name,type,oldPrice,nowPrice,num,flag);

    $.ajax({
        type:"POST",
        url:"/add",
        data:{name,type,oldPrice ,nowPrice,num,flag,time},
        dataType:"json",
        success:function(res){
            console.log(res);// 如果添加成功，调用 请求数据 商品数据方法，渲染表格

            type= $("#type").val();
            getList(type);
            checkTab(type);


        },
        error:function(){
            console.log("请求出错了");
        }

    })

})

//请求数据
function getList(type){
    $.get("/list",{"type":type},function(res){
        // console.log(res)
        showList(res.info)
    })
}

//渲染 表格

function showList(arr){
    var str="";
    $.each(arr,function(i,v){
    let {name,type,oldPrice ,nowPrice,num,flag,time} =v;
       str+=`
       <tr class="${flag ?'row_active':''}">
            <td>${name}</td>
            <td>${typeArr[type]}</td>
            <td> <span class="oldPrice">¥${oldPrice}</span> </td>
            <td>¥${nowPrice}</td>
            <td>${num}</td>
            <td>${flag}</td>
            <td>
                <span class="${flag?'':'del'}">删除</span>
            </td>
        </tr>    
       `
    })
    $("#tbody").html(str);
}


// 页面加载完成调用
$(function(){
    getList(type);
    checkTab(type);
})

$("#tab > li").click(function(){

    $(this).addClass("tab_active").siblings().removeClass("tab_active")

    var index =$(this).index();

    type =index;

    getList(type);

    
})

function checkTab(type){
    // type == 1 2 3 4
    $("#tab >li").eq(type).addClass("tab_active").siblings().removeClass("tab_active")
}
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/index.css">
    <script src="./js/jquery.min.js"></script>
</head>
<body>

<div class="box">

    <!-- 添加表单 -->
    <form >
        <div>
            <label for="">商品名称:</label>
            <input type="text" id="name">
        </div>
        <div>
            <label for="">商品类别:</label>
            <select name="" id="type">
                <option value="1">优选水果</option>
                <option value="2">卤味熟食</option>
                <option value="3">饮料酒水</option>
                <option value="4">休闲零食</option>
            </select>
        </div>
        <div>
            <label for="">商品原价:</label>
            <input type="text" id="oldPrice">
        </div>
        <div>
            <label for="">商品现价:</label>
            <input type="text" id="nowPrice">
        </div>
        <div>
            <label for="">库存数量:</label>
            <input type="text" id="num">
        </div>
        <div id="flag">
            <label for="">是否标红:</label>
            <input type="radio" name="flag" value="true"> <span>是</span>
            <input type="radio" name="flag" value="false"  checked> <span>否</span>
        </div>
        <div>
           <input type="button" value="提交信息" id="add">
        </div>
    </form>

    <!-- 筛选  -->
    <hr/>
        <ul class="tab" id="tab">
            <li class="tab_active">全部</li>
            <li>优选水果</li>
            <li>卤味熟食</li>
            <li>饮料酒水</li>
            <li>休闲零食</li>
        </ul>
    <hr/>

    <!-- 展示表格 -->
    <table class="table" id="table">
        <thead>
            <tr>
                <th>商品名称</th>
                <th>商品类别</th>
                <th>原价</th>
                <th>现价</th>
                <th>库存</th>
                <th>是否标红</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody id="tbody">
            <!-- <tr>
                <td>猪头肉</td>
                <td>卤味熟食</td>
                <td> <span class="oldPrice">¥32.00</span> </td>
                <td>¥23.00</td>
                <td>12</td>
                <td>false</td>
                <td>
                    <span class="del">删除</span>
                </td>
            </tr> -->
        </tbody>
    </table>

</div>


    <script src="./js/index.js"></script>
</body>
</html>
```



# JS进阶14

##### 1--topken

1  Token的引入:Toklen是在客户端频繁向服务器的去数据库查询用户名和密码并进行对比,判断用户名和密码正确与否,并作出相应的提示,在这样的背景下,Token便应运而生.

2、Token的定义：Token是服务端生成的一串字符串，以作客户端进行请求的一个令牌，当第一次登录后，服务器生成一个Token便将此Token返回给客户端，以后客户端只需带上这个Token前来请求数据即可，无需再次带上用户名和密码。

3、使用Token的目的：Token的目的是为了减轻服务器的压力，减少频繁的查询数据库，使服务器更加健壮。

<img src="H:/编程/思维导图学习笔记/学习笔记/1.png">

node js中使用 jsonwebtoken 模块

1、下载jsonwebtoken 模块

```
npm install jsonwebtoken -S

let jwt =require("jsonwebtoken");
```

2、生成token

```js
let content = { name: data._id }; // 要生成token的主题信息

let secretOrPrivateKey = 'gaogang_token' // 这是加密的key（密钥） 

let token = jwt.sign(要生成token的主题信息, secretOrPrivateKey, {

  expiresIn: 60*60   // 1小时

});
```

3、检测token



```js
let token = req.headers.token; // 从header中获取token
    let secretOrPrivateKey = "gaogang_token"; // 这是加密的key（密钥） 

jwt.verify(token, secretOrPrivateKey, function (err) {
  if (err) {  //  时间失效的时候/ 伪造的token          
  	res.send({ 'err_code': "no" ,msg:"token失效"});
  } else {
  	res.send({ 'err_code': "ok" ,msg:"token正确"});
  }
})
```

##### 2token案例

###### 登陆功能

一、前端分析
    页面：
        1、登陆页面 【表单- 用户名、密码、登陆按钮】
        2、主页     【欢迎。。。】
    功能：
        当 登陆成功 进入 主页
           登陆失败 跳转到 登陆页


二、实现步骤

1、项目环境搭建 【项目目录、项目依赖】
2、后端：创建服务器
3、后端：发布网站

4、前端：html + css +js 【index.html 主页，login.html 登陆页面】

5、后端：实现数据接口
    5-1、数据库需求分析
         admins 集合：文档：【user用户名、password 密码】
         需要 创建 数据库、创建集合、创建 默认 用户名 密码
         【mongodb 管理工具 】
    5-2、接口分析
        1）登陆接口
            请求地址：/login
            请求方式：POST
            上传参数：user 、password
            响应数据   {"code":"ok/no" , "token":""}
                    难点： 如何生成token （token 文件夹 --文档）

 2）验证是否登陆
        请求地址：/checkToken
        请求方式：GET
        上传参数：headers:{ token:? }
        响应数据:{"code":"ok/no" }
                难点：接受到token 后 如何验证token 是否失效。（token 文件夹 --文档）


6、前后端： 测试接口 - 联调 
        【  
        postman 测试
                请求头传参数 ，
                headers 写参数       
        】

7、前端：调用接口，实现功能
    7-1、登陆页面 
         点击 登陆按钮 获取 表单数据【用户名、密码】 --ajax 调用登陆接口
         如果 登陆成功  将 返回的 token 保存到 本地存储 -跳转到 主页
         如果 登陆失败  弹框提示 ，清空 表单 输入值
    7-2、主页
         当页面 加载完成 
         ajax -调用 验证是否登陆 接口
             【
                请求头传参数 ， 
                jquery  -- $.ajax( { headers:{}  } )
                原生：  xhr.setRequestHeader("token","...."))
             】
         如果 登陆成功 继续访问
         如果 登陆失败 跳转到登陆页面

```js
//--------api.js后台文件----------------
const express = require("express");
const app =express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// 连接mongodb
const mongoose =require("mongoose");
      mongoose.connect("mongodb://127.0.0.1:27017/p3kao",{ useUnifiedTopology: true ,useNewUrlParser: true } )


// admins 集合 规则
const adminsSchema=new mongoose.Schema({
   user:String,
   password:String
})
// admins 集合  模型
const adminsModel= mongoose.model("admins",adminsSchema);


/*
1）登陆

    请求地址： /login
    请求方式:POST
    上传参数:  user password
    响应数据 { "code":"ok/no" , token:"" }
            如何 生成token ？

*/
const jwt = require("jsonwebtoken");

app.post("/login",(req,res)=>{
    var obj =req.body;// {"user":"aaa","password":"77"}
    adminsModel.findOne( obj ,function(err,data){
        if(data){
            //生成token 
            let content = { user: data.user }; // 要生成token的主题信息
            let secretOrPrivateKey = '123456' // 这是加密的key（密钥） 

            let token = jwt.sign(content, secretOrPrivateKey, {         
              expiresIn: 30  //失效时间
            });

            res.send({"code":"ok","info":data,"token":token});
        }else{
            res.send({"code":"no"});
        }
    })
})

/**
    2) 验证是否登陆 /token 是否过期 
    请求地址： /checkToken
    请求方式:GET
    上传参数: token =？
    响应数据 { "code":"ok/no" }
            如何验证 token ？

 */

app.get("/checkToken",(req,res)=>{
    // var token = req.query.token;

    // console.log(req.headers);

    var token =req.headers.token;
    
    let secretOrPrivateKey = '123456' // 这是加密的key（密钥）  
//jwt.verify(参数1要生成token的主题信息,参数2:秘钥,参数3:秘钥过期时间)
    jwt.verify(token, secretOrPrivateKey, function (err) {
        if (err) {  //  时间失效的时候/ 伪造的token          
            res.send({ 'code': "no" ,msg:"token失效"});
        } else {
            res.send({ 'code': "ok" ,msg:"token正确"});
        }
      })
})






app.listen(3000);
```

```html
<h1>登陆页</h1>
    <form >
        <div>
            <label for="">用户名:</label>
            <input type="text" id="user">
        </div>
        <div>
            <label for="">密&emsp;码:</label>
            <input type="text" id="password">
        </div>
        <div>
         
            <input type="button" value="登陆" id="add">
        </div>
    </form>
    <script>
//点击登录按钮加点击事件
 $("#add").click(function(){
    //获取用户名及密码
   var user= $("#user").val();
   var password= $("#password").val();
  //post请求数据(用户名及密码)
  $.post("/login",{user,password},function(res){
    console.log(res);//
    if(res.code == "ok"){
   //存储token及用户名
                    localStorage.setItem("adminToken",res.token);
                    localStorage.setItem("adminUser",res.info.user);
   //跳转到主页
     window.location.href="/index.html"
   }else{
      alert("登陆失败，用户名或密码有错");
     $("#user").val("");
    $("#password").val("");
    }
  })

 })
    </script>
```

##### 3留言板案例(自增$inc)

```js
// 后端： 服务器，接口
const express = require("express");
const app=express();
app.use(express.static("public"))

const cors= require("cors");
app.use(cors());

// 连接数据库
const mongoose =require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/p3kao",{ useUnifiedTopology: true , useNewUrlParser: true } )

// messages 集合 规则
//标题 title 、内容msg、添加时间 time、顶起 good 、鄙视bad
const messagesSchema=new mongoose.Schema({
    title:String,
    msg:String,
    time:Number,//Number可写为Date.now
    good:Number,
    bad:Number
})
// messages 集合 模型
const messagesModel= mongoose.model("messages",messagesSchema);
//接口-----
// post 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//  1）添加接口 
app.post("/add",(req,res)=>{
    var obj= req.body; // 接受参数- 对象
    //保存到数据库
    messagesModel.create(obj,(err,data)=>{
        if(err){
            res.send( {"code":"no"} );
        }else{
            res.send( {"code":"ok"} );
        }
    })
})
// 2）查询所有 
app.get("/list",(req,res)=>{

    messagesModel.find({},{},{sort:{_id:-1}},(err,data)=>{
        if(err){
            res.send( {"code":"no"} ); 
        }else{
            res.send( {"code":"ok","info":data} );
        }
    })
})
//  3）删除

app.get("/del",(req,res)=>{
    var _id = req.query._id

    messagesModel.deleteOne({"_id":_id},(err,data)=>{
        if(err){
            res.send( {"code":"no"} ); 
        }else{
            res.send( {"code":"ok"} );
        }
    })
})
// 4）鄙视 
app.get("/bad",(req,res)=>{
    var _id = req.query._id;
    messagesModel.updateOne( {"_id":_id}, { $inc:{"bad":1} }, (err,data)=>{
        if(err){
            res.send( {"code":"no"} ); 
        }else{
            res.send( {"code":"ok"} );
        }
    })
})

// 5 )顶起 
app.get("/good",(req,res)=>{
    var _id = req.query._id;
    messagesModel.updateOne( {"_id":_id}, { $inc:{"good":1} }, (err,data)=>{
        if(err){
            res.send( {"code":"no"} ); 
        }else{
            res.send( {"code":"ok"} );
        }
    })
})



app.listen(3000);
```

```js
var base ="http://169.254.44.235:3000";
// var base=""
//添加
$("#add").click(function(){
    var title =$("#title").val();
    var msg =$("#msg").val();
    var time= new Date().getTime();
    var good=0;
    var bad=0;
    //上传参数： title 、msg、time、good=0、bad=0

    $.post(`/add`, {title,msg,time,good,bad} ,function(res){
        // console.log(res)
        //--------------------
        if(res.code =="ok"){
            getList();
        }
    })

})


function getList(){
    $.get(`${base}/list`,function(res){
        // console.log(res)
        showList(res.info)
    })
}

function showList(arr){
    var str="";
    arr.forEach(function(v,i){
        str+=`

        <div class="item">
      
            <div class="title">
                <h1>${v.title}</h1>
                <p>${v.time}</p>
            </div>

        
            <div class="msg">
                <p>${v.msg}</p>                 
            </div>

        
            <ul class="sets">
                <li onclick="badFn('${v._id}')"> 鄙视 (<span>${v.bad}</span>) </li>
                <li onclick="goodFn('${v._id}')"> 顶起 (<span>${v.good}</span>) </li>
                <li onclick="del('${v._id}')"> 删除 </li>
            </ul>
        </div>
        `
    })
    $("#content").html(str);
    
}

$(function(){
    getList();
})
//删除
function del(_id){
    $.get(`${base}/del`,{"_id":_id},function(res){
        if(res.code =="ok"){
            getList();
        }
    })
}
// 鄙视
function badFn(_id){
    $.get(`${base}/bad`,{"_id":_id},function(res){
        if(res.code =="ok"){
            getList();
        }
    })
}
// 顶起
function goodFn(_id){
    $.get(`${base}/good`,{"_id":_id},function(res){
        if(res.code =="ok"){
            getList();
        }
    })
}
```



# JS进阶15

##### 小综合案例  (简单表单    增--删--改--查--搜索--分页)

```js
//-------------api  后端js接口-------------
const express = require("express");
const app=express();
app.use(express.static("public"))

const mongoose =require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/p3kao",{ useUnifiedTopology: true ,useNewUrlParser: true } )
//p32103 集合 规则
// 姓名user、年龄age（Number）、性别sex、添加时间time
const p32103Schema=new mongoose.Schema({
    user:String,
    age:Number,
    sex:String,
    time:Number//Number可写为Date.now
})
//p32103 集合 模型
const p32103Model= mongoose.model("p32103",p32103Schema);
//post传参
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// 1）添加用户接口 
app.post("/add",(req,res)=>{
    let obj= req.body;
    p32103Model.create(obj,(err,data)=>{
        if(err){
            res.send({"code":"no"});
        }else{
            res.send({"code":"ok"});
        }
    })

})
// 2）查询用户数据
app.get("/list",(req,res)=>{
    //如果 name =""  查询所有 ，其他的给默认值 sort =-1、limit=3、page=1
    //排序
    let sort= req.query.sort ? Number(req.query.sort):1;
    //分页
    let limit= req.query.limit?Number(req.query.limit):3;
    let page= req.query.page?Number(req.query.page):1;
    //搜索
    let name= req.query.name;
    //有搜索条件则添加,没有则去除
    let q; //搜索条件
    if(name){
        q={"user":name}
    }else{
        q={};
    }
    //find({搜索条件},{},{限制条件},function(){})--skip-跳过  sort-排序
    p32103Model.find( q,{},{limit:limit,skip:(page-1)*limit,sort:{"age":sort} },(err,data)=>{
        if(err){
            res.send({"code":"no"});
        }else{
            res.send({"code":"ok","info":data});
        }
    } )

})

// 3) 删除
app.get("/del",(req,res)=>{
    let _id=req.query._id;
    p32103Model.deleteOne({"_id":_id},(err,data)=>{
        if(err){
            res.send({"code":"no"});
        }else{
            res.send({"code":"ok"});
        }
    })
})
//4）查询单个用户数据(修改)

app.get("/edit",(req,res)=>{
    let _id =req.query._id;
    p32103Model.findOne( {_id}, (err,data)=>{
        if(err){
            res.send({"code":"no"});
        }else{
            res.send({"code":"ok","info":data});
        }
    })
})

// 5）修改接口
app.post("/editOk",(req,res)=>{
    let obj= req.body;
    p32103Model.updateOne({"_id":obj._id},{$set:obj},(err,data)=>{
        if(err){
            res.send({"code":"no"});
        }else{
            res.send({"code":"ok"});
        }
    })
})
//6）查询总条数
app.get("/count",(req,res)=>{
   
    let name= req.query.name;
    //有搜索条件则添加,没有则去除
    let q; //搜索条件
    if(name){
        q={"user":name}
    }else{
        q={};
    }
//countDocuments计算总的数据条数
    p32103Model.countDocuments(q,(err,data)=>{
        if(err){
            res.send({"code":"no"});
        }else{
            res.send({"code":"ok","count":data});//!!!!count
        }
    })

})
app.listen(3000)

```

```js
//-------------前端页面js------------- 
var sort=1;  //排序默认升序
 var name="";  //搜索默认为空
 var limit=3;   //分页每页显示3条
 var page =1;  //当前页默认为1
 var sumPage=0; //总页数默认为0
 //添加
 $("#add").click(function(){
     var user=$("#user").val();
     var age=$("#age").val();
     var sex =$("#sex >:radio:checked").val();
     var time=new Date().getTime();
//通过user,age,sex,time请求接口
     $.post("/add",{user,age,sex,time},function(res){
        // console.log(res)
        getList(sort,name,limit,page);
     })
 })

//获取数据
 function getList(sort,name,limit,page){
    // 排序sort =[1/-1默认] 、name=？搜索、limit=？每页显示条数、page=？当前页书
    $.get("/list",{sort,name,limit,page},function(res){
        showList(res.info)
    })
}
// 渲染页面
 function showList(arr){
    str="";
    arr.forEach(function(v,i){
        str+=`
        <tr>
            <td>${v.user}</td>
            <td>${v.age}</td>
            <td>${v.sex}</td>
            <td>
                <button onclick="del('${v._id}')">删除</button>
                <button onclick="edit('${v._id}')">修改</button>
            </td>
        </tr>
        `
    })
    $("#tbody").html(str)
    getCount(name);

 }
//页面加载调用
 $(function(){
    getList(sort,name,limit,page);

 })

//按年龄升序
 $("#esc").click(function(){
     sort =1;
     getList(sort,name,limit,page)
 })
//按年龄降序
 $("#desc").click(function(){
    sort =-1;
    getList(sort,name,limit,page)
})
// 搜索

$("#search").click(function(){
     name = $("#name").val();
     page=1; // 让页数 =1
     getList(sort,name,limit,page)

})

// 获取 总条数 -- --总页数
function getCount(name){
    $.get("/count",{name},function(res){
        // console.log(res)

        //分页原理:总页数=上取整(总的数据条数/每页条数)
        sumPage= Math.ceil(res.count / limit);
        var str=""
        for(var i =1;i<= sumPage;i++ ){

            str+=`
                <button onclick="pageFn(${i})"  class="${page == i ?'y':''}">第${i}页</button>
            `
        }
    $("#page").html(str);
   //注意
    $("#nowPage").text(page);
    $("#sumPage").text(sumPage);

    })
}
// 分页
function pageFn(p){
    page = p;
    getList(sort,name,limit,page);
}

//上一页
$("#prev").click(function(){
    if(page >1){
        page -=1
        getList(sort,name,limit,page);
    }

})
//下一页 
$("#next").click(function(){
    if(page <sumPage){
        page +=1
        getList(sort,name,limit,page);
    }

})

//删除

function del(_id){
    console.log(_id)
    $.get("/del",{"_id":_id},function(res){
        console.log(res)
        getList(sort,name,limit,page);
    })
}

//修改

var editId;
function edit(_id){
    $.get("/edit",{"_id":_id},function(res){
        // console.log(res)
        $("#user").val(res.info.user);
         $("#age").val(res.info.age);
        var sexDom =$("#sex >:radio");
        sexDom.each(function(i,v){
            if( $(v).val() == res.info.sex ){
                $(v).prop("checked",true)
            }
        })
        editId = res.info._id;
    })
}
//确认修改
$("#editOk").click(function(){
    var user=$("#user").val();
    var age=$("#age").val();
    var sex =$("#sex >:radio:checked").val();
    var time=new Date().getTime();
    var _id =editId;
//需要加_id
    $.post("/editOk",{user,age,sex,time,_id},function(res){
        getList(sort,name,limit,page);
    })
})

```

```html
//---------------前端html--------------------------------
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
    margin: 0;
    padding: 0;
    list-style: none;
}

.box{
    width: 50vw;
    margin: 0 auto;
    /* border: 1px solid red; */
}

.add_form [type=text]{
    width: 30vw;
    height: 30px;
    margin: 5px 0;
}
.table{
    width: 100%;
    border-collapse: collapse;
}

.table th ,.table td{
    border: 1px solid black;
    text-align: center;
}
.search{
    margin: 10px 0;
}
.y{
    color: red;
}
    </style>
    <script src="./jquery.min.js"></script>
    <!-- <link rel="stylesheet" href="./index.css"> -->
</head>
<body>
    <!-- <h1>哈哈哈哈哈</h1> -->
<div class="box">
    <!-- 添加表单 -->
    <form class="add_form">
        <div>
            <label for="">姓名:</label>
            <input type="text" id="user">
        </div>
        <div>
            <label for="" >年龄:</label>
            <input type="text" id="age">
        </div>
        <div id="sex">
            <label for="">性别:</label>
            <span>男</span><input type="radio" name="sex" value="男" checked> 
            <span>女</span><input type="radio" name="sex" value="女"> 
        </div>
        <div> 
            <input type="button" value="添加" id="add">
            <input type="button" value="确认修改" id="editOk">
            <input type="button" value="按年龄升序" id="esc">
            <input type="button" value="按年龄降序" id="desc">
        </div>
    </form>

    <!-- 搜索 -->
    <div class="search">
        <input type="text" placeholder="输入姓名搜索" id="name">
        <input type="button" value="搜索" id="search"> 
    </div>
    <!-- 展示表格 -->
    <table class="table">
        <thead>
            <tr>
                <th>姓名</th>
                <th>年龄</th>
                <th>性别</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody id="tbody">
            <!-- <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>
                    <button>删除</button>
                    <button>修改</button>
                </td>
            </tr> -->
        </tbody>
    </table>

    <div id="page">
        <!-- <button>第1页</button> -->
    </div>
    <div id="page2" style="display: flex;">
        <button id="prev">上一页</button>
        <p> <span id="nowPage">1</span> / <span id="sumPage">5</span> </p>
        <button id="next">下一页</button>
    </div>
</div>
    
    <script src="./index.js"></script>
</body>
</html>
```

# JS进阶16

##### 综合案例  集所有表单类型(增-删,分页-搜索-修改-排序)

个人难点:

多选框的值获取:思路先获取到选中的复选框,循环获取val即得到复选框的值;

单选的值返到录入框:循环单选框,判断如果

```js
const express =require("express");
const app=express();
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({extended:true}));


const mongoose= require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/p3kao",{ useUnifiedTopology: true ,useNewUrlParser: true})

// dgrs 集合 规则
const dgrsSchema=new mongoose.Schema({
    user:String,
    sex:String,
    address:String,
    msg:String,
    age:Number,
    time:Number,//Number可写为Date.now
    skill:Array
})

// dgrs 集合  模型
const dgrsModel=mongoose.model("dgrs",dgrsSchema);

// 1）添加
app.post("/add",(req,res)=>{
    var obj = req.body;
    dgrsModel.create(obj,(err,data)=>{
        if(err){
            res.send({"code":"no"});
        }else{
            res.send({"code":"ok"});
        }
    })
})
//2）查询 (多条件、排序、分页)
app.post("/list",(req,res)=>{
    //搜索内容如果有则进行搜索,没有则搜索全部,相当于设置默认值
    var search= req.body.search ? req.body.search  :{};
    var sortVal= req.body.sortVal? Number(req.body.sortVal):1;
    var sortType= req.body.sortType ? req.body.sortType :"time";


    var limit= req.body.limit;
    var page= req.body.page?Number(req.body.page):1;

    for(var key in search){
        if(!search[key]){
            delete search[key]
        }
    }
//当limit=all,skip计算时会出现NAN,所以在此做判断
    var sls;
    if(limit == "all"){
        sls={sort:{[sortType]:sortVal}}
    }else{
        limit = limit?Number(limit):3;
        sls={ limit:limit,skip:(page-1)*limit ,sort:{[sortType]:sortVal}  }
    }

    // console.log(sls)

    dgrsModel.find( search,{},sls,(err,data)=>{
        if(err){
            res.send({"code":"no"});
        }else{
            res.send({"code":"ok","info":data});
        }
    } )
})

//3）总共多少条数据

app.post("/count",(req,res)=>{
    var search= req.body.search ? req.body.search  :{};
    for(var key in search){
        if(!search[key]){
            delete search[key]
        }
    }

    dgrsModel.countDocuments(search,(err,data)=>{
        if(err){
            res.send({"code":"no"});
        }else{
            res.send({"code":"ok","info":data});
        }
    })
})
// 6）删除单条
app.get("/delOne",(req,res)=>{
    var _id =req.query._id;
    dgrsModel.deleteOne({_id},(err,data)=>{
        if(err){
            res.send({"code":"no"});
        }else{
            res.send({"code":"ok"});
        }
    })
})
// 5）删除选中多条

app.get("/delMany",(req,res)=>{
    var ids=req.query.ids ;
    // console.log(ids.split(","));
    if( typeof ids == 'string' ){
        ids=ids.split(",")
    };

    dgrsModel.deleteMany({ _id:{$in:ids} },(err,data)=>{
        if(err){
            res.send({"code":"no"});
        }else{
            res.send({"code":"ok"});
        }
    })

})
// 4）删除全部
app.get("/delAll",(req,res)=>{
    dgrsModel.deleteMany({},(err,data)=>{
        if(err){
            res.send({"code":"no"});
        }else{
            res.send({"code":"ok"});
        }
    })
})

// 7）_id 查询用户信息（点击修改）

app.get("/edit",(req,res)=>{
    var _id =req.query._id;
    dgrsModel.findOne({_id},(err,data)=>{
        if(err){
            res.send({"code":"no"});
        }else{
            res.send({"code":"ok","info":data});
        }
    })
})

// 8）确认修改

app.post("/editOk",(req,res)=>{
    var obj = req.body;
    dgrsModel.updateOne({"_id":obj._id},{$set:obj},(err,data)=>{
        if(err){
            res.send({"code":"no"});
        }else{
            res.send({"code":"ok"});
        }
    })
})





app.listen(3000)

```

```js
var search={ "user":"","age":"","address":"" },
sortType="time",
sortVal=-1,
limit=3,
page=1,
sumPage=0;

//添加
$("#add").click(function(){
    var user=$("#user").val();
    var sex= $("#sex>:radio:checked").val();
    var address=$("#address").val();
    var age=$("#age").val();
//复选框选中的框进行循环,分别把选中的值加到空数组
    var skill=[];
    $("#skill >:checkbox:checked").each(function(i,v){
        skill.push($(v).val())
    })
    var msg =$("#msg").val()
    var time =new Date().getTime();
    // console.log(user,sex,address,age,skill,msg);

    if(user && sex && address && age && skill.length>0 && msg){
        
        $.post("/add",{user,sex,address,age,skill,msg,time},function(res){
            if(res.code == "ok"){
                console.log("调用 请求数据接口，渲染表格");
                getList(search,sortType,sortVal,limit,page);
            }else{
                console.log("添加出错");
            }
        })

    }else{
        alert("不能为空")
    }

})

/*
search：{ "user":"","age":"","address":"" }
sortVal: 1/-1
sortType: age / time
limit :每页显示条数  ？all  查询所有
page ：当前第几页 
*/

//请求数据
function getList(search,sortType,sortVal,limit,page){
    $.post("/list",{
        search,sortType,sortVal,limit,page     
    },function(res){
        // console.log(res);
        showList(res.info)
    })
}
//渲染
function showList(arr){
  if(arr.length>0){
     $("#table").show();
     $("#noData").hide();
     $("#pageList").show();
     $("#pageFn").show()
     var str="";
     arr.forEach(function(v,i){
         str+=`
             <tr>
                 <td>
                     <input type="checkbox" value="${v._id}"> 
                 </td>
                 <td>${v.time}</td>
                 <td>${v.user}</td>
                 <td>${v.age}</td>
                 <td>${v.sex}</td>
                 <td>${v.address}</td>
                 <td>${v.skill.join("-")}</td>
                 <td>${v.msg}</td>
                 <td>
                     <button onclick="delOne('${v._id}')">删除</button>
                     <button onclick="edit('${v._id}')">修改</button>
                 </td>
             </tr>
         `
     })
     $("#tbody").html(str);
     getCount(search);
     $("#checkAll").prop("checked",false)
  }else{
    $("#table").hide();
    $("#noData").show();
    $("#pageList").hide();
    $("#pageFn").hide();
  }
   
}
//页面加载完调用
$(function(){
    getList(search,sortType,sortVal,limit,page)
})
//排序
function sortFn(a,b){
    console.log(a,b)
    sortType =a;
    sortVal =b;
    getList(search,sortType,sortVal,limit,page);
}

// 搜索
$("#searchBtn").click(function(){
    //search赋值
    search.user =$("#suser").val();
    search.address=$("#saddress").val();
    search.age=$("#sage").val();

    getList(search,sortType,sortVal,limit,page);
})

//获取总条数 -计算 总页数
function getCount(search){
    $.post("/count",{"search":search},function(res){
        // console.log(res)
        if(limit == "all"){
            sumPage =1;
            page =1;
        }else{
            sumPage=Math.ceil( res.info/limit );
        }
        
        var str=""
        for(var i=1;i<=sumPage;i++){
            str+=`
            <button onclick="pageFn(${i})" class="${page == i ? 'y' :''}">第${i}页</button>
            `
        }
       
        $("#pageList").html(str);

        $("#nowPage").text(page);
        $("#sumPages").text(sumPage);


    })
}
//分页
function pageFn(i){
    page= i;
    getList(search,sortType,sortVal,limit,page)

}
//改变每页条数limit
$("#limitSel").change(function(){
    // console.log( $(this).val() );
    limit = $(this).val();

    
    getList(search,sortType,sortVal,limit,page)

})
//上一页
$("#prev").click(function(){
    if(page >1){
        page-=1;
        getList(search,sortType,sortVal,limit,page)
    }
})
//下一页
$("#next").click(function(){
    if(page <sumPage){
        page+=1;
        getList(search,sortType,sortVal,limit,page)
    }
})
//跳转到x页
$("#pageNum").keydown(function(event){
    // console.log("sss")
    if(event.keyCode == 13){
        var p= $(this).val();
        // console.log(p)
        if( p >0 && p<=sumPage){
            page =p;
            getList(search,sortType,sortVal,limit,page)
        }else{
            $(this).val("")
        }
    }
})


// 删除一条
function delOne(_id){
    $("#m_box").show();

    $("#ok").click(function(){
        $.get("/delOne",{_id},function(){
            getList(search,sortType,sortVal,limit,page);
            $("#m_box").hide();
        })
    })

    $("#no").click(function(){
        $("#m_box").hide();
    })
   
}
//删除全部
$("#delAll").click(function(){
    $.get("/delAll",function(){
        getList(search,sortType,sortVal,limit,page);
    })
})
//删除选中
$("#delMany").click(function(){
    var ids=[];
    $("#tbody :checkbox:checked").each(function(i,v){
        // console.log($(v).val() )
        ids.push( $(v).val() )
    })
  
    $.get("/delMany",{ids},function(){
        getList(search,sortType,sortVal,limit,page);
    })
})

//全选
$("#checkAll").change(function(){
    var all= $(this).prop("checked");
    // console.log(all);

    $("#tbody :checkbox").prop("checked",all)

})
//修改
var editId;
function edit(_id){
    $("#add").hide();
    $("#editOk").show();

    $.get("/edit",{_id},function(res){
        // console.log(res)
        let {user,sex,address,age,skill,msg,time,_id} = res.info

        $("#user").val(user);
        $("#address").val(address);
        $("#age").val(age);
        $("#msg").val(msg)
        time =new Date().getTime();

        $("#sex>:radio").each(function(i,v){
            if( $(v).val() == sex){
                $(v).prop("checked",true)
            }
        })

        $("#skill >:checkbox").prop("checked",false);
        $("#skill >:checkbox").each(function(i,v){

            if( skill.includes( $(v).val() ) ){
                $(v).prop("checked",true)
            }
        })

        editId= _id;

    })
}
//修改确认
$("#editOk").click(function(){
    $("#add").show();
    $("#editOk").hide();

    var user=$("#user").val();
    var sex= $("#sex>:radio:checked").val();
    var address=$("#address").val();
    var age=$("#age").val();
     //复选框赋值
    var skill=[];
    $("#skill >:checkbox:checked").each(function(i,v){
        skill.push($(v).val())
    })
    var msg =$("#msg").val()
    var time =new Date().getTime();

    var _id = editId
    // console.log(user,sex,address,age,skill,msg);
    //非空验证
    if(user && sex && address && age && skill.length>0 && msg){
        
        $.post("/editOk",{user,sex,address,age,skill,msg,time,_id},function(res){
            if(res.code == "ok"){
                console.log("调用 请求数据接口，渲染表格");
                getList(search,sortType,sortVal,limit,page);
            }else{
                console.log("添加出错");
            }
        })

    }else{
        alert("不能为空")
    }
 
})



```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #noData{
    display: none;
}
#table {
    margin: 10px 0;
    width: 80vw;
    border-collapse: collapse;
}
#table th ,#table td{
    border: 1px solid red;
    text-align: center;
}

.y{
    color: red;
}

#editOk{
    display: none;
}

.m_box{
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    min-height: 100vh;
    background: rgba(0,0,0,.4);
    display: none;
}
.m_item{
    background: white;
    width: 30vw;
    text-align: center;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);

}
    </style>
    <script src="./jquery.min.js"></script>
    <!-- <link rel="stylesheet" href="./index.css"> -->
</head>
<body>
    <div id="app" class="app">
        <!-- 添加表单 -->
        <form>
 
            <div>
                <label for="">姓名：</label>
                <input type="text" id="user">
            </div>

            <div id="sex">
                <label for="">性别：</label>
               <span>男</span> <input type="radio" name="sex" value="男" checked> 
               <span>女</span> <input type="radio" name="sex" value="女"> 

            </div>

            <div>
                <label for="">籍贯：</label>
                <select name="" id="address">
                    <option value="陕西">陕西</option>
                    <option value="河南">河南</option>
                    <option value="河北">河北</option>
                </select>
            </div>

            <div>
                <label for="">年龄：</label>
                <input type="text" id="age">
            </div>

            <div id="skill">
                <label for="">技能：</label>
                <span>html</span> <input type="checkbox" value="html">
                <span>css</span> <input type="checkbox" value="css">
                <span>javascript</span> <input type="checkbox" value="javascript">
                <span>vue</span> <input type="checkbox" value="vue">
                <span>react</span> <input type="checkbox" value="react">
                <span>angular</span> <input type="checkbox" value="angular">
                <span>uni-app</span> <input type="checkbox" value="uni-app">

            </div>

            <div>
                <label for="">备注：</label>
                <textarea  id="msg" cols="30" rows="5"></textarea>
            </div>

            <div>
               
                <input type="button" value="添加" id="add"> 
                <input type="button" value="确认修改" id="editOk"> 

            </div>
        </form>

        <!-- 搜索 -->

        <div>
            <input type="text" placeholder="姓名" id="suser">
            <input type="text" placeholder="年龄" id="sage">

            <select name="" id="saddress">
                <option value="">全部</option>
                <option value="陕西">陕西</option>
                <option value="河南">河南</option>
                <option value="河北">河北</option>
            </select>
            <input type="button" value="搜索" id="searchBtn">

        </div>
        <!-- 排序 -->
        <div>
            <button onclick="sortFn('age',1)">年龄升序</button>
            <button onclick="sortFn('age',-1)">年龄降序</button>
            <button onclick="sortFn('time',1)">入职时间-升序</button>
            <button onclick="sortFn('time',-1)">入职时间-降序</button>
        </div>

        <!-- 展示 -->
        <table id="table"> 
            <thead>
                <tr>
                    <th>
                        <input type="checkbox" id="checkAll">
                    </th>
                    <th>入职时间</th>
                    <th>姓名</th>
                    <th>年龄</th>
                    <th>性别</th>
                    <th>籍贯</th>
                    <th>技能</th>
                    <th>备注</th>    
                    <th>操作</th>
                </tr>
            </thead>
            <tbody id="tbody">
                <!-- <tr>
                    <td>
                        <input type="checkbox"> 
                    </td>
                    <td>2016-10-08</td>
                    <td>gao</td>
                    <td>19</td>
                    <td>男</td>
                    <td>陕西</td>
                    <td>html-css-js-vue</td>
                    <td>讲师</td>
                    <td>
                        <button>删除</button>
                        <button>修改</button>
                    </td>
                </tr> -->
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="5" id="delMany">选中删除</td>
                    <td colspan="4" id="delAll">全部删除</td>
                </tr>
            </tfoot>
        </table>
        
        <h1 id="noData">暂无数据 请添加</h1>

    <!-- 分页 -->

        <div id="pageList">
            <!-- <button>第1页</button> -->
       
        </div>

        <div id="pageFn">
            <select name="" id="limitSel" >
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="all">all</option>
            </select>

             <span id="prev"> &lt; </span>
             <span id="nowPage">1</span>/<span id="sumPages">5</span>
             <span id="next"> &gt; </span>
           <span>跳转到</span> <input type="text" id="pageNum">  <span>页</span>
        </div>



        <div class="m_box" id="m_box">
            <div class="m_item">
                <h1>确认删除吗</h1>
                <button id="ok">确认</button>
                <button id="no">取消</button>
            </div>
        </div>

    </div>

    <script src="./index.js"></script>
</body>
</html>
```

# JS进阶17

##### 1  利用对象的  属性不能重复,来实现数组去重

```js
 //新建一个数组       
var arr=[1,2,3,4,3,2,1];
//把数组变成下面的形式
 //1:1,2:2,3:3,4:4,3:3,2:2,1:1
var obj={},arr2=[];
//遍历对象
for(var i=0;i<arr.length;i++){
     obj[arr[i]]=arr[i];//把数组的第i个值
}
        console.log(obj);

for(var key in obj){
      arr2.push( obj[key] )
}
        console.log(arr2);
```

##### 2 箭头函数

```js
//箭头函数
var c=(x,y)=>{
colsole.log(x,y)
}
//普通函数
var c=function(x,y){
    console.log(x,y)
}
//调用传参
c(2,3)
//箭头函数与普通函数的区别:不能改变this的指向,this指向声明或创建时的对象.

```

##### 3 new干了什么

```
1创建对象,

2改变了构造函数的指向,指向新创建的对象

3.给新对象赋值

4返回新对象
```

##### **4  注册表单自动验证ajax**



```js
//--------后端api.js-------------
const express =require("express");
const app=express();
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const mongoose= require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/p3kao",{ useUnifiedTopology: true ,useNewUrlParser: true})

// goods 集合 规则
const testSchema=new mongoose.Schema({
    username:String,
    password:Number,
   
})

// goods 集合  模型
const testModel=mongoose.model("test",testSchema);

//查询用户名是否存在
app.get("/checkUser",(req,res)=>{
    var username =req.query.username;
    testModel.findOne({"username":username},(err,data)=>{
        if(data){
            res.send({"code":"no","msg":"用户名已经注册"});
        }else{
            res.send({"code":"ok"});
        }
    })
})
//注册
app.post("/add",(req,res)=>{
    var obj =req.body;
    testModel.create(obj,(err,data)=>{
        if(err){
            res.send({"code":"no"});
        }else{
            res.send({"code":"ok"});
        }
    })
})

app.listen(3000);
```

前端html文件  index.html

```html
    <form>
        <div>
            <label for=""></label>
            <input type="text" id="username">
            <span id="cusername"></span>
        </div>
        <div>
            <label for=""></label>
            <input type="text" id="password">
        </div>
        <div>
            <label for=""></label>
            <input type="button" value="注册" id="reguserBtn">
        </div>
    </form>
```

前端  js文件

```js
      var usernameDom = document.getElementById("username");
      usernameDom.onblur = function () {
      //console.log(this.value);
            // console.log(1132);
      var xhr = new XMLHttpRequest();
      xhr.open("GET", `./checkUser?Username=${this.value}`, true);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.send()
      xhr.onreadystatechange = function () {
          if (xhr.readyState == 4 && xhr.status == 200) {
              var obj = JSON.parse(xhr.responseText);
              console.log(obj);
              if (obj.code == "no") {
                  document.getElementById("cusername").innerText = obj.msg;
                  document.getElementById("reguserBtn").disabled = true;//如果用户名已占用,注册按钮禁用
              } else {
                  document.getElementById("cusername").innerText = "ok"
              }
          }
      }
  }
  var reguserBtn = document.getElementById("reguserBtn");
  reguserBtn.onclick = function () {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", `./checkUser?Username=${this.value}`, true);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.send()
      xhr.onreadystatechange = function () {
          if (xhr.readyState == 4 && xhr.status == 200) {
              var obj = JSON.parse(xhr.responseText);
              if (obj.code == "ok") {
                  alert("注册成功")
              }
          }
      }
  }
```

##### 5   fetch请求

新版浏览器EDGE支持,ie都不支持 (  除了ajax请求之外 的方法),下面为 MDN 网址

https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch

```js
  //fetch默认为get请求,
  fetch("/list")
      .then(res => res.json()) //确定返回值的数据类型格式.json为json格式,还可以为text格式,xml格式
      /* .then(function(res){
          return res.json()
      }) */
      .then(res => {
          console.log(res);
      })

  //---fetch也可以为post请求---
  fetch("/list", {
          method: "POST",
          body: JSON.stringify({
              user: "gao",
              "age": 89
          }),
          
          //body: 'username=1111&password=2212',
          headers: new Headers({
              'Content-Type': 'application/json'
          })
      })
      .then(res => res.json()) //确定返回值的数据类型格式.json为json格式,还可以为text格式,xml格式
      /* .then(function(res){
          return res.json()
      }) */
      .then(res => {
          console.log(res);
      })
```





ajax调试看network

********登录成功之后,返回token,测试其他接口时,token在postman测试接口工具Authorization里测试,type选Bearer,粘贴Brear后面的内容********

node.js是js的运行环境,单线程,事件驱动,安装,--下载--node环境是基础环境

jsp     php

##### 4  文件上传

参考网址：https://blog.csdn.net/yun_hou/article/details/96869219

1、接口：(需要下载  multer  模块)

```js
// 载入  multer 
let multer = require("multer");
let storage = multer.diskStorage({
    // 文件存储路径
    destination: function (req, file, cb) {
        cb(null, "./public/img")
    },
    //文件名
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

let up = multer({ storage: storage });

app.post("/fileup", up.single("picture"), (req, res) => {
   
	if (req.file) {
		console.log('/img/' + req.file.originalname) // 文件名
		console.log(req.body.name, req.body.age) // 
		res.send({ "error_code": 200, "msg": "ok" })
	} else {
		res.send({ "error_code": 400, "msg": "no" })
	}
  
})
```

2、前端 from 表单上传图片

```html
	<form action="/fileup" method="post" enctype="multipart/form-data">
		<input type="file" name="picture" />
		<input type="submit" value="提交" />
	</form>
```



3、前端ajax 

```html
<div>
       <input type="file" id="singleFile">
        <input type="button" value="上传" id="up">
  </div>
```



```js
//载入jquery
$("#up").click(function () {
		var fileList = $('#singleFile')[0].files;
	
		var formData = new FormData();
		//此处文件名必须为 picture ，因为后台设置接口为此文件名up.single("picture")
		formData.append('picture', fileList[0]);

		$.ajax({
			url: '/fileup',
			type: 'post',
			processData: false,//不会序列化 data,
			contentType: false,//使用multer配合ajax时无需配置multipart/form-data，multer将自动配置，手动配置将报错，boundary not found
			data: formData,
			success: function (data) {
				console.log(data)

			}
		})
	})

```

测试postmanhttps://www.cnblogs.com/liuzhi20101016/p/11445153.html

ApiPost下载地址：https://www.apipost.cn/

思考?如果多个数据表如何?



# mongoose 查询

## 

### 查询方法

mongoose查询使用的最基础的方法就是find、findOne和findById等方法，find查询所有满足条件的值并且返回一个数组，findOne和findById取满足条件的某一个值,返回的是一个object。

```
Model.find(conditions, [fields], [options], [callback])
```

**注：conditions 查询条件、fields 想要返回的字段、options 操作、callback 回调函数**

栗子： 查询用户表下面名字为张三的从第二条开始的后两条文档且只需按时姓名、性别、居住地址、创建时间信息并按创建时间倒叙显示

```js
//对象写法
userModel.find({'name':'张三'},{'name':1,'sex':1,'region':1,'createBy':1,'_id':0},{ limit:2, skip:1, sort:'-createBy.createTime'})

//链式写法
userModel.find({'name':'张三'},{'name':1,'sex':1,'region':1,'createBy':1,'_id':0}).skip(7).limit(2).sort({'createBy.createTime' : -1})

```

### 常见的查询条件

mongoose查询条件其实就是在find或findOne方法的基础上添加mongodb条件操作符

常见的mongodb条件操作符有很多,如下:

```
    $or　　　　或关系

　　$nor　　　 或关系取反

　　$gt　　　　大于

　　$gte　　　 大于等于

　　$lt　　　　 小于

　　$lte　　　  小于等于

　　$ne            不等于

　　$in             在多个值范围内

　　$nin           不在多个值范围内

　　$all            匹配数组中多个值

　　$regex　　正则，用于模糊查询

　　$size　　　匹配数组大小

　　$maxDistance　　范围查询，距离（基于LBS）

　　$mod　　   取模运算

　　$near　　　邻域查询，查询附近的位置（基于LBS）

　　$exists　　  字段是否存在

　　$elemMatch　　匹配内数组内的元素

　　$within　　范围查询（基于LBS）

　　$box　　　 范围查询，矩形范围（基于LBS）

　　$center       范围醒询，圆形范围（基于LBS）

　　$centerSphere　　范围查询，球形范围（基于LBS）

　　$slice　　　　查询字段集合中的元素（比如从第几个之后，第N到第M个元素）
复制代码
```

#### 字段的显示与隐藏

在 mongoose 中有两种指定方式，字符串指定和对象形式指定。

1.字符串指定时在排除的字段前加 - 号，只写字段名的是包含。

```
Model.find({},'age');
Model.find({},'-name');
复制代码
```

2.对象形式指定时，1 是包含，0 是排除。

```
Model.find({}, { age: 1 });
Model.find({}, { name: 0 });

```

#### 分页查询

1. sort：按照排序规则根据所给的字段进行排序，值可以是 asc, desc, ascending, descending, 1, 和 -1。
2. limit：指定返回结果的最大数量。
3. skip：指定要跳过的文档数量
4. lean：返回普通的 js 对象，而不是 Mongoose Documents。建议不需要 mongoose 特殊处理就返给前端的数据都最好使用该方法转成普通 js 对象。

```
注：sort 和 limit 同时使用时，调用的顺序并不重要，返回的数据都是先排序后限制数量。
Model.find(conditions).skip(pageTotal * pageNum).limit(pageTotal).sort({'_id':-1}).exec(cb);
复制代码
```

pageTotal为每页显示条数、pageNum为分页数量、cb为回调函数,sort({'_id':-1})为按照_id倒叙排列

#### 查询非空字段

```
Model.find(conditions:{$exists:true})
Model.find(conditions:{$ne:null})

```

#### 数组对象的查找

数据

```
{author: [{name: "dora", age: 18 },{name: "wang", age: 16 }]}

```

1.精确查询

```
Model.find({ author: { name: "dora", age: 18 } })

```

2.点语法查询

```
Model.find({ 'author.age': { $gte: 18 } })

```

3.$elemMatch 同时满足所有查询条件

```
Model.find({ "author": {$elemMatch: {name: 'dora', age:{ $lt: 18 }}})
// []

```

#### 数组的下标查询

数据

```
{ year: [ 2018, 2019 ] }
{ year: [ 2017, 2019, 2020 ] }
{ year: [ 2016, 2020 ] }

```

数组 year 的第二个值大于2019。

```
Model.find({ 'year.1': { $gt: 2019 } })
// { "_id" : ..., "year" : [ 2016, 2020 ] }

```

#### 嵌套对象字段的查找

数据

```
{
  name: { first: "dora", last: "wang" }
}

```

1.精确匹配，顺序、字段都必须一致。

```
Model.find({ name: { last: "wang", first: "dora" } })
// [] 找不到数据

```

2.使用点语法，可匹配嵌套的字段，其中字段名必须用引号引起来。

```
Model.find({ 'name.last': 'wang' })

```

#### 多表联合查询

mongoose其实没有多表联合查询的方法，不过我们可以通过多次查询来实现。 通过user的name、post的content查询post: schema.js

```js
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var UserSchema = new Schema({
    name  : { type: String, unique: true },
    posts : [{ type: Schema.Types.ObjectId, ref: 'Post' }]
});
var User = mongoose.model('User', UserSchema);

var PostSchema = new Schema({
    poster   : { type: Schema.Types.ObjectId, ref: 'User' },
    comments : [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    title    : String,
    content  : String
});
var Post = mongoose.model('Post', PostSchema);

User.find({name: name}, function (err, users) {
    Post.find({poster: {$in: users}, content: content}, function (err, posts) {
        console.log(posts)
    })
})
```

https://www.angularjs.net.cn/   

# 第四阶段      

## es6新语法:(多看多用)

##### 1   字符串方法

```js
  //字符串方法  includes包含
   let str="ijahsdjkhasd";
   console.log(str.includes("jjj"));//false
   console.log(str.includes("ij"));//true
   console.log(str.includes("asd"));//true
```



```js
  //字符串方法   repeat()重复
   console.log(str.repeat(0));//空白
   console.log(str.repeat(1));//重复一次
   console.log(str.repeat(2));//重复二次
   console.log(str.repeat(2.3));//重复二次
  console.log(str.repeat(-1.5));//报错
```



```js
//字符串方法补齐  padStart()  padEnd()
  var str="pp123ppp";
  console.log(str.padStart(10,'0'));
  console.log(str.padEnd(10,'0'));
```



```js
 //字符串方法去空格    trimStart()  trimEnd()
    var str="   11p   ";
  console.log(str,str.length);
  console.log(str.trimStart(),str.trimStart().length);
  console.log(str.trimEnd(),str.trimEnd().length);
  console.log(str.trim(),str.trim().length);
```

##### 2数组方法

###### 扩展运算符...

```js
  //数组方法  扩展运算符...
   let arr = ["a", "b", "c", "d"];
   console.log(...arr); //扩展为字符串
   let arr2 = [];
   arr2 = [...arr];
   console.log(arr2); //为数组
   function fn(...x) {
       console.log(arguments); //伪数组
       console.log(x);//伪数组转为数组1,2,3,4
   }
   fn(1, 2, 3, 4);
   //Array.of  将一组值转为数组
   console.log( Array.of("a","b",1,2,true) );
```

###### copyWithin

```js
  //数组方法copyWithin(放置的位置,拷贝开始的位置,拷贝结束的位置)拷贝并放在
  //  let arr = ["a", "b", "c", "d"];//将2位拷贝放置在
  //  console.log(arr.copyWithin(0,2,3));//["c", "b", "c", "d"];
```

###### find  与 findIndex  查找

```js
  //  数组方法find  与 findIndex  查找
  // let arr = ["a", "b", "c", "d","c"];
  // let x=arr.find(function(v,i){
  //     //console.log(a,b);
  //     return v=="c";//做搜索,如果c是一个对象,则返回一个对象
  // })
  // console.log(x);//c
  // let y=arr.findIndex(function(v,i){
  //     return v=="c"
  // })
  // console.log(y);//
```

###### fill填充

```js
  //数组方法fill填充
  // let arr = ["a", "b", "c", "d","c"];
  // console.log(arr.fill("x"));//["x", "x", "x", "x","x"]

  // let arr3=new Array(100);
  // console.log(  arr3,arr3.length  );
  // console.log(  arr3.fill(0)  );
```

## 遍历

```js
  //数组方法数组遍历
  //  let  arr4=['aa','bb','cc','dd'];
  // //  for( let i in arr4){
  // //     console.log(i,arr4[i]);
  // //  } 
  // for( let v of arr4){
  //      console.log(v);//aa,bb,cc,dd
  // } 
  //-------------------------------

  // 对象遍历  for of循环
  /* let obj={"name":"gao","age":18};
  for( let v of Object.entries(obj) ){
         console.log(v);
  } */
```

###### includes 判断

```js
  // 数组方法includes 判断
  // let  arr4=['aa','bb','cc','dd'];
  // console.log( arr4.includes("cc") );//true
```

## 数组  降维 拉平  扁平化

```js
  // 数组  降维 拉平  扁平化
  // let arr5=['a',['b',[c]]];
  // console.log( arr5.flat(2) );//拉平降维 降一维,写几降几次
```

###### 省略写法

```js
  // 属性值与属性名相同可省略
  // let name="gao";
  // let obj={"name":name};//可以省略为obj={name}
  // console.log(obj);
```



```js
  //如果属性值是函数,可以省略:function
  //  let obj2={
  //      say:function(){

  //      },
  //      run(){

  //      }
  //  } 
```

###### is

```js
  //is判断两个只是否相等,和===相同    不同点是+0和-0    NaN和NaN
  // console.log(2 === 2); //true
  // console.log(Object.is(2, 2)); //true

  // console.log(+0 === -0); //true
  // console.log(Object.is(+0 === -0)); //false

  // console.log(NaN === NaN); //false
  // console.log(Object.is(NaN === NaN)); //false
```

## 合并对象Object.assign

```js
 //合并对象Object.assign(o2,o1)把o1合并在o2上,改变的是o2,o1不变
  // let o1={"name":"wang"};
  // let o2={"name":"gao","age":12};

  // Object.assign(o1,o2);
  // console.log("o1",o1);
  // console.log("o2",o2);

  // Object.assign(o1,o2);
  // console.log("o2",o2);
  // console.log("o2",o1);

  //assign使用场景----------------------
  //公共配置
  // ajax = {
  //     "url": "http://www.baodu.com",
  //     "token": "aaaaaaaa",
  // }
  // //私人配置
  // myAjax = {
  //     "url": "http://my.com"
  // }
  // //合并
  // Object.assign(ajax, myAjax);
  // console.log(ajax);
```

## Set :类似数组的数据结构,但是成员值唯一

```js
  //Set :类似数组的数据结构,但是成员值唯一
  let a = new Set([1, 2, 3, 1, 2]);
  //类数组转数组
  let arr = Array.from(a);
  console.log(a);
  console.log(arr);
  //是否存在
  console.log(a.has(1)); //true
  console.log(a.has(2)); //true
  console.log(a.has(3)); //true
  console.log(a.has(4)); //false
  //添加add()
  a.add(555);
  console.log(a);
  //删除 delete()
  a.delete(2);
  console.log(a);
  //清空clear();
  // a.clear();
  console.log(a);
  //属性size长度
  console.log(a.size);
```

## map  :类似对象的数据结构,但是key可以为任何数据类型

```js
  //对象
  let obj = {
      "name": "gao",
      "12": 23232
  }; //key为字符串
  console.log(obj);

  //map  :类似对象的数据结构,但是key可以为任何数据类型
  let m = new Map();
  m.set(true, "呵呵"); //这里key为true,可以为null,还可以为function     
  m.set(1, "哈哈"); //这里key为true,可以为null,还可以为function     
  m.set(2, "嘻嘻"); //这里key为true,可以为null,还可以为function     
  console.log(m);

  //获取值get(key)
  console.log(m.get(true));
  console.log(m.get(1));
  console.log(m.get(2));

  //是否存在has(key)
  console.log(m.has(12)); //false
  console.log(m.has(2)); //true

  //删除 delete(key)
  m.delete(1);
  console.log(m);

  //清空clear()
  m.clear();
  console.log(m);
  //属性size
  console.log(m.size);

  //遍历keys
  for (let v of m.keys) {
      console.log(v);
  }
  //遍历values
  for (let v of m.values) {
      console.log(v);
  }
  //遍历keys和values
  for (let v of m.entries) {
      console.log(v);
  }
```

## Symbol独一无二的数据类型

```js
  // Symbol独一无二的数据类型
  // undefined null  Boolean    String    Number
  //对象(Object) 
  let a = Symbol();
  let b = Symbol();

  console.log(a);
  console.log(b);
  console.log(a == b, a === b);

  //应用-->对象的key,保证唯一,不被覆盖
  //组长:对象{name:"gao"}
  //自己:对象{name:"王"}
  let obj = {
      [a]: "gao"
  };
  let obj2 = {
      [b]: "王"
  };
  console.log(obj[a]);
  console.log(obj2);
  //将obj2合并到obj对象上,----如果属性名相同,覆盖,但是属性名是Symbol独一无二
  Object.assign(obj, obj2);
  console.log("合并后", obj);
```

## 箭头函数

```js
  //普通函数写法
  //普通函数this指向调用时所在的对象(可变)
  let fn = function fn(a, b) {
      console.log(a, b);
  }
  fn(1, 2);
  //-----es6箭头函数写法--------
  //箭头函数this指向声明时所在的对象(不可变)
  let fn2 = (c, d) => {
      console.log(c, d);
  }
  fn2(3, 4);
  //如果只有一个参数,可以省略圆括号
  let fn3 = c => {
  }
  fn3(6);
  //如果函数体内只有一条return语句,可以省略 {} return
  let fn4=d=>d;
  fn4(7)
  //箭头函数与普通函数的区别:
  //普通函数this指向调用时所在的对象(可变)
  //箭头函数this指向定义时所在对象(不可改变)
  let obj={"name":"gao","age":18};
  function fn(){
      console.log(this);
  }
  fn();//this-->window 
  fn.call(obj);//fn-->this-->obj
  let fn2=()=>{
      console.log(this);
  }
  fn2();
  fn2.call(obj)//无法改变this指向,还是window
  //--第二:-----------------------------
  //普通函数 可以当做构造函数  可以new
  //箭头函数 不可以当做构造函数,不可以new
  function Gou(name, age) {
      this.name = name;
      this.age = age;
  }
  let o1 = new Gou("Gao", 19);
  console.log(o1);
  //Gou {name: "Gao", age: 19}
  //-----------------------
  let Gou2 = (name, age) => {
      this.name = name;
      this.age = age;
  }
  let o2 = new Gou2("wang", 18);
  console.log(o2);
  //箭头函数.html:70 Uncaught TypeError: Gou2 is not a constructor
  //第三:
  //普通函数  arguments获取所有的实参,组成伪数组
  //箭头函数不可以使用arguments用rest参数(...参数)
  function fn3(){
          console.log(arguments);
  }
  fn3(1,2,3,4,5);
   let fn4=(...x)=>{
      console.log(x);
   }
   fn4(1,2.3,4,5);//箭头函数无arguments,可以使用...
   //普通函数可以使用...????--->可以 
   function fn5(...x){
          console.log(x);
  }
  fn5(1,2,3,4,5);   //可以使用...
  //第四:不可以使用yield命令,因为箭头函数不能用作Generator函数
  //首先可以把它理解成Generator函数是一个状态机,封装了多个内部状态.
     function *fn5(){//写法或者function* fn5()
         yield '1';
         yield '2';
         yield '3';    //yield产出
         return "d"
     };
     let f=fn5();
     for( let v of f){
            console.log(v);
     }
     console.log( f.next() );
     console.log( f.next() );
     console.log( f.next() );
     console.log( f.next() );
     console.log( f.next() );
     console.log( f.next() );
     console.log( f.next() );
```

Object.definePorprety

```js
  let obj = {
      "name": "wang",
      "age": 12
  };
  for (let key in obj) {
      Object.defineProperty(obj, key, {
          get: function () {
              console.log("获取值了");
          },
          set: function () {
              console.log("设置值了");
          }
      })
  }

  obj.age; //获取值
  obj.name = '888888'; //设置值
  obj.age = 000;
```



## 3    重点!!Proxy与Object.defineProperty优劣对比*



​     **Proxy 的优势如下:***

* !!!Proxy 可以直接监听 **对象** 而非属性；*

* !!!Proxy 可以直接监听 **数组** 的变化；*

* !!!Proxy 有多达 **13 种拦截方法**,不限于 apply、ownKeys、deleteProperty、has 等等是 Object.defineProperty 不具备的；*

* !!!Proxy 返回的是一个 **新对象** ,我们可以只操作新的对象达到目的,而 Object.defineProperty 只能遍历对象属性直接修改；*

​    *Proxy 作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利；*



*  **Object.defineProperty 的优势如下:***

​    兼容性好，支持 IE9，而 Proxy 的存在浏览器兼容性问题,而且无法用 polyfill 磨平，因此 Vue 的作者才声明需要等到下个大版本( 3.0 )才能用 Proxy 重写。 

```js
  //Proxy用于修改某些操作的默认行为
  let obj = {
      "name": "gao",
      "age": 18
  };
  //取值
  let p = new Proxy(obj, {
      //target䯮对象,key为读取的属性名
      get: function (target, key, value) {
          console.log("获取值key是", key, "获取值value", value);
          return target[key];
      },
      //target目标对象,key修改的属性名,value修改的值
      set: function (target, key, value) {
          console.log("target", target);
          console.log("key", key);
          console.log("value", value);
          target[key]=value;
      }
  })
  console.log(p.name); //读取操作,自动执行get方法
  p.age = 999; //设置操作,自动执行set方法
  console.log("p",p);
```

## 4  Reflect 操作对象的方法

```js
  //Reflect 操作对象的方法 
  //1将属于语言内部的方法,放在Reflect上
  //2修改了一些方法的返回值,比如报错改为false
  //13个方法

  //get(目标对象,属性名)
  let obj = {
      "name": "gao",
      "age": 13
  };
  console.log(obj);
  console.log(Reflect.get(obj, "name"));
  //set(目标对象.属性名,值)
  obj.age = 999;
  Reflect.set(obj, "age", "999999")
  console.log(obj);

  function FancyThing() {
      this.name = "gao";
      this.age = 19;
  }

  FancyThing.prototype.sex = "男";
  FancyThing.prototype.sex = function () {
      console.log("哈哈");
  };

  const myObj = new FancyThing();
  //获取原型对象
  console.log(Reflect.getPrototypeOf(myObj));

  //设置原型对象
  let obj3 = {
      "hobby": "dfssdfsdf"
  };
  Reflect.getPrototypeOf(myObj, obj3);
  //获取
  console.log( Reflect.getPrototypeOf(myObj) );
```

## 5.Promise

>1--为什么使用promise?? 回调函数事件--解决了什么问题?? 优化回调函数事件,挽回回调地狱
>
>2-->promise定义:是一个容器,里面保存着某个未来才会结束的事件的结果,(通常是一个异步操作)
>
>3-->有3个状态:进行中(pending),已成功(fulfilled),已失败(rejected),
>
> 4-->两个结果:进行中-->已成功(resolved), 进行中-->已失败(rejected)
>
>优点:
>
>  1对象的状态不收外界影响;
>
>​    2一旦状态改变,就不在改变,任何时候都可以得到这个结果
>
>
>
>​    缺点:
>
>​    1无法取消promise,一旦新建它就会立即执行,无法中途取消
>
>​    2如果不设置回调函数,Promise内部抛出的错误,不会反应到外部
>
>​    3当处于进行中pending状态时,无法得知目前进展到哪一个阶段(刚刚开始还是即将完成)

```js
  //定义--创建--
  let err = 200;
  console.log(1); //--1
  let p = new Promise(function (resolved, rejected) {
            console.log(2); //--2,一旦新建它就会立即执行
            //异步操作
            if (err == 200) {
                resolved("成功的结果");
            } else {
                resolved("失败的结果");
            }
        })
  console.log(3); //--3
  //调用
  // p.then(function (res) {
  //     console.log("成功", res);
  // }, function (res) {
  //     console.log("失败", res);
  // })
  // console.log(4);//--4
  //  catch  捕获错误  .then可串联写   finally只要状态发生改变都会执行(不管成功失败)  
  p.then(function (res) {
      console.log("成功", res); //---异步的结果
  }).catch(function (res) {
      console.log("失败", res); 
  }).finally(function(){
      console.log("哈哈哈"); 
  })
  //1234打印顺序是?????    :1-2-3-4-成功
  //从上到下,先同步后异步,
```

str.repeat();0--空白;正整数n-重复n次;负数为下取值

ese6数组方法:

Array.form  将类似数组的结构转为数组

Array.of()    将一组值转为数组

```
Array.of("a","b",true) 
```

copyWithin(放置的位置,  拷贝的位置,  拷贝结束的位置)  将x位拷贝放在第0位

```
arr.copyWithin(0,2,3)
```

fill(参数1填充的元素,开始位置,结束位置)把一个值填充到数组

```
arr.fill("x",1,2)

```

```
箭头函数
正常函数:let function  (a,b){}
箭头函数: let fn(a,b)=>{   }
```

##   6   webpack概念(要求会 赋值 粘贴)

<u>**需求场景:webpack概自动化模块打包器,当有很多个文件在模块化时引入很麻烦,就需要webpack.默认打包js文件,根据模块依赖打包文件**</u>

<u>**记住四个核心概念:**</u>

- <u>**[入口(entry)](https://webpack.docschina.org/concepts/#entry)**</u>

- <u>**[输出(output)](https://webpack.docschina.org/concepts/#output)**</u>

- <u>**[loader](https://webpack.docschina.org/concepts/#loaders)      css-loader  /  file-loader**</u>

- <u>**[插件(plugin)](https://webpack.docschina.org/concepts/#plugins)   (删除已打包文件,压缩js,压缩css)**</u>

  ​                              <u>**输出html:   html-webpack-plugin**</u>

  ​                              <u>**清理dist目录,clean-webpack-dev-server**</u>

  <u>**构建服务器热加载开发环境webpack-dev-server**</u>

##### 安装:

首先我们创建一个目录，初始化 npm，然后 在本地安装 webpack，接着安装 `webpack-cli`（此工具用于在命令行中运行 webpack）：

https://webpack.docschina.org/guides/getting-started/#basic-setup

```shell
mkdir webpack-demo
cd webpack-demo
npm init -y
npm install webpack webpack-cli --save-dev
```

**lodash里封装了很多函数,其中有 节流 防抖比较好用**

```shell
+ this is a new line you shall copy into your code
- and this is a line to be removed from your code
  and this is a line not to touch.
```

**上面+号表示添加,-表示删除**

现在，我们将创建以下目录结构、文件和内容：

**project**

```
  webpack-demo
  |- package.json
+ |- index.html
+ |- /src
+   |- index.js
```

要在 `index.js` 中打包 `lodash` 依赖，我们需要在本地安装 library：

```shell
npm install --save lodash
```

现在，在我们的 script 中 import `lodash`：

**src/index.js**

```js
function component() {
  const element = document.createElement('div');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
```

**index.html**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>起步</title>
      <!--引入lodash-->
    <script src="https://unpkg.com/lodash@4.17.20"></script>
  </head>
  <body>
    <script src="./src/index.js"></script>
  </body>
</html>
```

我们还需要调整 `package.json` 文件，以便确保我们安装包是 `private(私有的)`，并且移除 `main` 入口。这可以防止意外发布你的代码。

**package.json**

```json
 {
   "name": "webpack-demo",
   "version": "1.0.0",
   "description": "",
-  "main": "index.js",
+  "private": true,
   "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1"
   },
   "keywords": [],
   "author": "",
   "license": "MIT",
   "devDependencies": {
     "webpack": "^5.38.1",
     "webpack-cli": "^4.7.2",
   }
 }
```

在此示例中，`<script>` 标签之间存在隐式依赖关系。在 `index.js` 文件执行之前，还需要在页面中先引入 `lodash`。这是因为 `index.js` 并未显式声明它需要 `lodash`，假定推测已经存在一个全局变量 `_`。

使用这种方式去管理 JavaScript 项目会有一些问题：

- 无法直接体现，脚本的执行依赖于外部库。
- 如果依赖不存在，或者引入顺序错误，应用程序将无法正常运行。
- 如果依赖被引入但是并没有使用，浏览器将被迫下载无用代码。

让我们使用 webpack 来管理这些脚本。

**webpack.config.js**

```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

详见https://webpack.docschina.org/guides/getting-started/#basic-setup



打包步骤:

1初始化

npm init -y    

2下载依赖

npm install webpack webpack-cli --save-dev

3 删除package-json文件里的main:"   .js"这句删除,添加"private": true,

4添加文件**webpack.config.js**

在**webpack.config.js**写配置,新建dist文件夹,

--->在**package.json**文件中script下添加"build": "webpack",

-->运行npm run build

```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

如果把css一起打包需要加载

为了在 JavaScript 模块中 `import` 一个 CSS 文件，你需要安装 [style-loader](https://webpack.docschina.org/loaders/style-loader) 和 [css-loader](https://webpack.docschina.org/loaders/css-loader)，并在 [`module` 配置](https://webpack.docschina.org/configuration/module) 中添加这些 loader：

```shell
npm install --save-dev style-loader css-loader
```



# vue

官网  https://cn.vuejs.org/    尤雨溪借鉴argular慢慢成为vue

### 基本概念

#### **1    渐进式框架**

vue是一套构建用户界面的**渐进式框架(先易后难,需要什么使用什么)**,采用自底向上增量开发的设计,vue的核心库只关注视图层,不仅易于上手,还便于与第三方库或既有项目整合;

渐进式表现:声明式渲染-->组件系统-->客户端路由-->大数据状态管理-->构建工具

##### **2  两个核心(最大的亮点):**

**响应式数据绑定(双向数据绑定):**    当数据发生变化的时候,视图自动更新,即双向数据同步,原理利用了es6中放入Object definedProperty中的setter/getter代理数据,监控对数据的操作.

**组合的视图组件(虚拟Dom):**    即页面最终映射为一个组件树,采用树形结构进行设计,方便维护,重用.

##### **3  虚拟Dom**

利用在内存中生成与真实Dom与之对应的数据结构,这个在内存中生成的结构称之为虚拟Dom,

当数据发生变化时,能够智能的计算出重新渲染组件的最小代价并应用到Dom操作上.

##### **4  MVVM**

MVVM是model-View-ViewModel的缩写,它是一种基于前端开发的架构模式,起核心是提供对View和ViewModel的双向数据绑定,这使得ViewModel的状态改变可以自动传递给

M:  Model(数据层,也就是指数据,前端是js)

V:  View(也就是指Dom层或用户界面)

VM:  ViewModel处理数据和界面的中间层,也就是指vue

##### **5  声明式渲染**

Vue.js 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进 DOM 的系统

**额外补充:**渲染分为:命令式渲染和声明式渲染

**命令式渲染:**命令我们的程序去做什么,程序就会跟着你的命令去一步一步执行

**声明式渲染:**只需要告诉程序想要的效果,其他的交给程序去做:



## vue.js安装:

CDN:对于制作原型或学习，你可以这样使用最新版本

```
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
```

## NPM:

在用 Vue 构建大型应用时推荐使用 NPM 安装。NPM 能很好地和诸如 或模块打包器配合使用。同时 Vue 也提供配套工具来开发。

```shell
$ npm install vue
```

**看vue.js源码零碎知识点:**

使用严格模式"use strict"

Object.freee()冻结对象

源码使用大写字母定义常量

component组件

direction指令

filter控制器

## **vue的生命周期**

>beforeCreate
>
>created
>
>beforeMount
>
>mounted
>
>beforeUpdated
>
>updated
>
>beforeDestroy
>
>destroyed
>
>activated
>
>deactived
>
>errorCaptured    这个钩子好像是 v2.5 的版本新加的，主要用来处理一些异常错误，基本不怎么去使用
>
>serverPrefetch   serverPrefetch 的前身是 ssrPrefresh；这个钩子是用来处理 ssr 的；允许我们在渲染的过程中 “等待” 异步数据，可以在任何>组件中使用，而不仅仅是路由组件；

**vue的核心语法**

```js
 Object.defineProperty(obj, key, {
    value: val,//默认值
    enumerable: !!enumerable,//是否可枚举
    writable: true,//是否可写
   configurable: true//是否可修改
   });
```

**vue数组方法,只有push,pop,shift,unshift,splice,sort,reverse能够监听到**

```html
<!--view视图层   只有这个设置id的div才会起作用 {{}}为模板语法  -->
<div id="app">
  {{ message }}   
</div>
```

```js
var app = new Vue({
  el: '#app',//vue操作的作用域
  //定义数据--model层--数据模型
  data: {
    message: 'Hello Vue!'
  }
})
//上面是id起作用,class是不起作用的,源码中是用queryselector
```

## 指令

指挥Dom发生变化的指令

## 1`v-for` 

指令可以绑定数组的数据来渲染一个项目列表

```html
<div id="app-4">
  <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>
</div>
```

```js
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: '学习 JavaScript' },
      { text: '学习 Vue' },
      { text: '整个牛项目' }
    ]
  }
})
```

## 2 v-if



```html
    <!-- //v-if会加载或移除不满足条件的写法 -->
    <div id="app">
       <h1>当前的年龄是--{{ age }} </h1>
       <p v-if="age>18" > 年龄大于18 </p>
       <p v-else-if="age==18" > 年龄等于18</p>
       <p v-else > 年龄小于18 </p>
    </div>
```

```js
        const vm=new Vue({
            el:"#app",
            data:{
                age:80
            }
        })
```

## 3  v-show

**`v-if  v-show` 区别**

**`v-if` 满足条件,加载节点,不满足条件,移除节点**

**`v-show` 满足条件,显示,不满足条件,`css`样式`display:none`**

**使用场景:频繁切换:`v-show`,不频繁切换使用`v-if`**

**性能:`vmv-show`:初始消耗高,切换时消耗低**

**v-if:初始消耗低,切换时消耗高** 

```html
    <div id="app">
     <h1>当前年龄是</h1>
     <p v-show="age>18">年龄>18</p>
     <p v-show="age==18">年龄=18</p>
     <p v-show="age<18">年龄<18</p>
    </div>
```

```js
const vm=new Vue({
    el:"#app",
    data:{
           age:18
    }
})
```

## 4  v-text

```html
    <div id="app">
        <div>{{ a }}</div>
        <div>{{ b }}</div>

        <div v-text="a"></div>
        <div v-text="b"></div>

        <div v-html="a"></div>
        <div v-html="b"></div>
    </div>
```

```js
        const vm = new Vue({
            el: "#app",
            data: {
                a: "hhhhh",
                b: "<h1>呵呵</h1>"
            }
        })
```

## 5  v-bind

```html
    <!-- src href class id  title alt border 自定义
    属性前v-bind:属性值就是变量 -->
<!--     v-bind可简写为: -->
     <div id="app">
          <a v-bind:href="g">{{ f }}</a>
         
          <img v-bind:src="h" alt=""/>
          <p v-bind:class="j">123</p>
     </div>
```

```js
         const vm=new Vue({
             el:"#app",
             data:{
                 f:"淘宝",
                 g:"https://www.taobao.com",
                 h:"./",
                 j:"b"
             }
         })
```



## 6    v-model

```html
    <!-- 载入Vue -->
    <script src="./vue.js"></script>


    
    <!-- 设置或获取表单数据,双向数据绑定的表现 -->
    <div id="app">
       <input type="text" v-model="user">
       <h1>输入的值为: {{ user }}</h1>
    </div>
    <script>
        const vm=new Vue({
            el:"#app",
            data:{
                user:"gao"
            }
        })
```



## **7  v-model修饰符案例**

```html
<!-- v-model.lazy失去焦点再判断 -->
    <!-- v-model.trim去首尾空格 -->
    <!-- v-model.number转数字类型 -->
    <!-- 可多个一起使用 -->
    <div id="app">
        <!-- 文本框 -->
        <input type="text" v-model.lazy.number="age">
        <h1>输入值为:  {{ age }}</h1>
        <h1>输入值为:  {{  typeof age }}</h1>
        <!-- 单选 -->
        男:<input type="radio" name="sex" value="男" v-model="sex">
        女:<input type="radio" name="sex" value="女" v-model="sex" >
        <h1>  {{ sex }}</h1>
        <!-- 多选框 -->
        <input type="checkbox"  v-model="sex">是否同意
        <hr/>
        <!-- 多个复选框 -->
        <input type="checkbox" v-model="hobby" value="新闻">新闻
        <input type="checkbox"  v-model="hobby" value="科技">科技
        <input type="checkbox"  v-model="hobby" value="体育">体育
        <input type="checkbox"  v-model="hobby" value="财经">财经
        <h1>  {{ hobby }}</h1>
        <!-- 下拉1 --->
        <select name="" id=""  v-model="address">
            <option value="陕西">陕西</option>
            <option value="山西">山西</option>
            <option value="广西">广西</option>
            <option value="江西">江西</option>
        </select>
        <h1>  {{ address }}</h1>
        <!-- 下拉2 -multiple为可多选-->
        <select name="" id="" multiple  v-model="address2">
            <option value="陕西">陕西</option>
            <option value="山西">山西</option>
            <option value="广西">广西</option>
            <option value="江西">江西</option>
        </select>
        <h1>  {{ address2 }}</h1>
        <!-- 文本域 -->
        <textarea  rows="5" cols="30" maxlength="10" v-model="msg">

        </textarea>
        <p>输入的值是{{msg}}</p>
        <p>输入了{{msg.length}}个字</p>
        <p>可输入{{msg}}个字,还可以输入  {{10-msg.length}}个字</p>
```

```js
  const vm=new Vue({
      el:"#app",
      data:{
          age:18,
          sex:"女",
          one:"",
          hobby:[],
          address:"",
          address2:[],
          msg:""
      }
  })
```

## 8 `v-bind:class`

```css
        .font{
    font-size: 30px;
        }
        .color{
            color: red;
        }
```

```html
   <div id="app">
       <p v-bind:class="x" >字体放大</p>
       <p v-bind:class="[x,y]" >字体放大,颜色为红</p>
       <p v-bind:class="[{'font':a>b},{'color':c>d}]" > a>b 字体放大, c>d 颜色为红 </p>
       <p v-bind:class="{'font':a>b,'color':c>d}" > a>b 字体放大, c>d 颜色为红 </p>
   </div>
```

```js
       const vm=new Vue({
           el:"#app",
           data:{
               x:"font",
               y:"color",
               a:9,
               b:2,
               c:8,
               d:4
           }
       })
```

## 9  `v-on`  绑定事件

```html
    <div id="app">
        <button v-on:click="one()">点击</button>
        <button v-on:click="two(1,2,3)">点击传参数</button>

    </div>
```

```js
        const vm = new Vue({
            el: "#app",
            methods: {
                one(){
                    alert("哈哈")
                },
                two(...x){
                   console.log(x);
                }
            },
        })
```

## 10  赋值解构

```html
    <div id="app">
    <input type="text" v-model.number="a">
    +
    <input type="text" v-model.number="b">
    ={{ sum }}

    <h1>{{ sum }}</h1>
    </div>
```

```js
        const vm=new Vue({
            el:"#app",
            data:{
                a:"",
                b:""
            },
            //使用场景:多个值 影响一个值的变化
            //computed计算属性,优点:计算结果会缓存
            computed:{
                /*
                   "属性名":function (){
                       return 计算结果
                   }
                */
               "sum":function(){
                   return this.a +this.b
               }
            }
        })
```

## 11  filter过滤

```js
let arr=[
            {"id":11,"name":"wan","sex":"男","age":18},
            {"id":21,"name":"wng","sex":"男","age":18},
            {"id":31,"name":"ang","sex":"男","age":18},
            {"id":41,"name":"wa","sex":"男","age":18},
            {"id":51,"name":"ng","sex":"男","age":18},
        ]
 //-----------方法1---------------------------
        //将name中包含g字母取出组成新的数组
        /* var arr2=[];
        for (var i=0;i<arr.length;i++){
            if( arr[i].name.indexOf('g')>=0){
                 arr2.push( arr[i] );
            }
        }
        console.log(arr2); */
 //--------------方法2------------------
        let arr2=arr.filter( function(value,index){
            return value.name.includes("g")
        })
        console.log(arr2);
//-----------------方法2的简写---------------------

        let arr2=arr.filter( value=>value.name.includes("g"))
        
        console.log(arr2);
```

## 12 搜索

```html
    <div id="app">
         <input type="text" v-model="search">
         <ul>
             <li v-for="(item,index) in info" :key="index"> {{ item.name }} </li>
             <li v-show="info.length==0">暂无数据</li>
         </ul>
    </div>
```

```js
        const vm=new Vue({
            el:"#app",
            data:{
               arr:[
                   {"name":"gao"},
                   {"name":"li"},
                   {"name":"wang"},
                   {"name":"zhou"},
                   {"name":"san"},
               ] ,
               search:"",
            },       
            computed:{
                   info(){
                       return this.arr.filter(val=>val.name.includes(this.search))
                   }
               }
        })
```

## 13  多条件搜索

```html
    <div id="app">
         <input type="text" v-model="sname" placeholder="姓名">
         <input type="text" v-model="sage" placeholder="年龄">
         <ul>
             <li v-for="(item,index) in info" :key="index"> {{ item.name }}----{{ item.age }} </li>
             <li v-show="info.length==0">暂无数据</li>
         </ul>
    </div>
```

```js
        const vm=new Vue({
            el:"#app",
            data:{
               arr:[
                   {"name":"gao","age":15},
                   {"name":"li","age":15},
                   {"name":"wang","age":15},
                   {"name":"zhou","age":15},
                   {"name":"san","age":15},
               ] ,
               sname:"",
               sage:"",
            },       
            computed:{
                   info(){
                       return this.arr.filter(val=>{
                           return  val.name.includes(this.sname) && val.age.toString().includes(this.sage) })
                   }
               }
        })
```

## 14 各种数据类型的循环

```html
<div id="app">
        <!-- for  in 或者 for  of都可以 -->
        <!-- key必须是惟一的 -->
        <!-- 数组 -->
        <ul>
            <li v-for="(item,index) in arr" :key="index" > {{ item }} ---{{index}}</li>
        </ul>
        <!-- 数字10 -->
        <ul>
            <li v-for="(item,index) in num"> <button>{{ item }}</button></li>
        </ul>
        <!-- 对象 -->
        <ul>
            <li  v-for="(value,key,index) in obj"  :key="index"  >   {{ value }} ---{{key}}--{{ index }} </li>
        </ul>
        <!-- 字符串 -->
        <ul>
            <li v-for="(item,index) in str"  :key="index"   >  {{ item }} ---{{ index }} </li>
        </ul>
    </div>
```

```js
  const vm=new Vue({
         el:"#app",
         data:{
           arr:["aa","bb","cc"],
           num:5,
           obj:{"name":"wang","age":15,"address":"陕西"},
           str:"abcdefg"
         }
     })
```

## 15 事件对象

```html
    <div id="app">
        <button v-on:click="one">111不传参数</button>
        <button v-on:click="two(1,$event)">222传参数</button>
    </div>
```

```js
        const vm = new Vue({
            el: "#app",
            data: {
                one(event) {
                    console.log(event); //事件对象,有一个隐藏参数,也可以写其他名字
                    console.log(this);
                },
                two(a, e) {
                    console.log(a, e);//事件对象需要用$event导出
                    console.log( e.target.innerText);//获取按钮内容
                }
            }
        })
```

## 16 事件对象修饰符--阻止默认事件

```html
    <div id="app">
        <form @submit.prevent>
            <input type="text">
            <button @click="one">提交</button>
            <button @click.prevent="two">添加</button>
            <button>修改</button>
        </form>
    </div>
```

```js
        //event.preventDefault()阻止默认事件
        //按钮标签里@click.prevent="two"
        //form标签里@submit.prevent
        const vm = new Vue({
            el: "#app",
            data: {
                one(event) {
                    event.preventDefault(); //阻止默认事件,不会刷新

                    //console.log(event);
                },
                two(event) {
                    console.log(event); //click后加prevent
                }
            }
        })
```

##  17 事件对象修饰符--阻止冒泡

```html
    <div id="app">
        <div @click="infoFn">
            通知:下课后都出去抽烟...<button @click.stop="del">删除</button>
        </div>
        <button @click.once="num+=1"> 赞{{num}}</button>
    </div>
```

```js
        //@click.stop阻止事件冒泡
        //event.stopPropagation();//阻止冒泡
        // @click.once="num+=1"//一次
        var vm = new Vue({
            el: "#app",
            data: {
              num:1,
            },
            methods: {
                infoFn() {
                    alert("进入详情,查看详细通知")
                },
                del(event) {
                    //event.stopPropagation();//阻止冒泡

                    alert("删除") //点击删除,还显示进入详情
                }
            },
        })
```

## 18  键盘事件修饰符  

```html
    <div id="app">
        <input type="text" @keyup.enter="fn">
    </div>
```

```js
        //写键盘码.13  回车
        //@keyup.enter按下回车事件--按键修饰符
        //@keyup.left按左方向键事件--按键修饰符
        //@keyup.right 按右方向键事件--按键修饰符
        //@keyup.up 按上方向键事件--按键修饰符
        //@keyup.down 按下左方向键事件--按键修饰符
        var vm = new Vue({
            el: "#app",
            data: {

            },
            methods: {
                /*  fn(event){
                     console.log(event.keyCode);
                 } */
                fn() {
                    console.log("拔下来回车");
                }
            },
        })
```

## 19  事件监听  watch

```html
    <div id="app">
        <!-- <input type="text" v-model="search" @input="fn"> -->
        <input type="text" v-model="search">
        <p>搜索框搜索的值是{{ search }}</p>
    </div>
```

```js
        const vm = new Vue({
            el: "#app",
            data: {
                search: " "
            },
            //watch事件监听  一个值变化影响多个值
            watch: {
                "search": function (n, old) {
                       console.log("当前值",n);
                       console.log("上次值",old);
                       //ajax请求
                }
            },
            methods: {
                fn() {
                    console.log("搜索的的值发生变化", this.search);
                    //ajax请求
                }
            },
        })
```

## 20  v-pre原样输出   

 v-cloak伪装     mustache -->花括号的加载,隐藏,防止闪烁

v-once  只渲染一次

## 21  全局组件

```css
        * {
            padding: 0;
            margin: 0;
        }

        #app {
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
        }

        .content {
            flex: 1;
            overflow: auto;
        }
```

```html
    <!-- 原则---把多个页面可重复使用,有独立功能的,页面,css,js等文件封装出 -->
    <!-- 大的用全局,小的用局部 -->
    <div id="app">
        <!-- <div>顶部搜索</div> -->
        <my-header> </my-header>
        <!-- <my-header/> -->
        <!-- 下面不出来 -->

        <!-- <div class="content">
            <div>轮播</div>
            <div>图文</div>
        </div> -->
        <my-content></my-content>
        <!-- <div>底部</div> -->
        <my-footer></my-footer>

    </div>
```

```js
 //全局组件//my-header驼峰式可以,调用是必须为横线
        //全局组件一定要在new vue的上方
        //template里面   有且只有一个根节点

        Vue.component("my-header", {
            template: `
            <div>顶部搜索</div>
            `
        })

        Vue.component("myFooter", {
            template: `<div> 底部 </div>`
        })

        Vue.component("myContent", {
            template: `
            <div class="content">
                <my-swiper></my-swiper>
            <div>图文</div>
        </div>`
        })
        // 内容里面还有轮播,单独拆出轮播
        Vue.component("mySwiper", {
            template: `<div> 轮播-----13213213 </div>`
        })
        //局部组件
        const vm = new Vue({
            el: "#app",
            data: {

            },
            methods: {

            },
            watch: {

            },
            computed: {

            }
        })
```

## 22  局部组件

```html
    <div id="app">
    <!-- <h1>大标题</h1> -->
    <my-big-title></my-big-title>
   <!--  <h2>小标题</h2> -->
    <my-small-title></my-small-title>
    </div>
```

```js
 Vue.component("myBigTitle", {
            template: `
            <h1>大标题</h1>
            `
        })


        //局部组件,全局可以写多个,是components
        const vm = new Vue({
            el: "#app",

            components: {
                "mySmallTitle": {
                    template: `
            <h2>小标题</h2>
            `
                }
            },

            data: {

            },
            methods: {

            },
            watch: {

            },
            computed: {

            }
        })
```

## 23    组件定义数据

```html
    <!-- v-for="item in 10"调用10次,one标签里写文字不管用,相关用得使用插槽 -->

    <div id="app">
        <one v-for="item in 10"> </one>
    </div>
```

```js
       //全局  --组件  data必须是函数,返回一个对象
        //组件是独立的,多个组件用一份数据会造成不独立,data为函数,每次调用
        //文本及数组
        //里面写结构,调用时写参数
        Vue.component("one", {
            data() {
                return {
                    "text": "哈哈",
                    "arr": ["aa", "bb", "cc"]
                }
            },
            template: `
           <div>
              <h1> {{ text }}</h1>
              <ul>
                <li v-for="(item,index) in arr " :key="index" @click="fn(index)">{{ item }} </li>
                </ul>
            </div>
           `,
            methods: {
                fn(index) {
                    alert(index);
                }
            },
        })

        const vm = new Vue({
            el: "#app",

        })
```



## 24  props

```html
    <div id="app">
       
        <!-- 头部    欢迎高先生如果是变量x前加v-bind -->
        <my-title x="欢迎李女士" y="你好"></my-title>

        <!--内容     秒杀活动 -->
        <my-title x="秒杀活动" y="即将开始"></my-title>

        <!--底部     关于我们 -->
        <my-title x="关于我们" y="请打电话"></my-title>
    </div>
```

```js
        //调用时组件传参  使用props
        //调用:<组件名 自定义属性名="要传递的值"><组件名>
        //创建组件:
        //Vue.componte("组件名",{props:["自定义属性名"],template:{`    `}})
        Vue.component("myTitle", {
            props:["x","y"],
            template: `
            <div>
                     <h1> {{ x }} </h1>
              </div>
            `
        })
        var vm = new Vue({
            el: "#app",

        })
```

## 24  动态props

```html
        <!-- 顶部导航 -->
       <!--  <div>
            <h1>哈哈哈</h1>
            <ul>
                <li>66</li>
                <li>77</li>
            </ul>
        </div> -->
        <my-nav v-bind:x="topnav"></my-nav>
        <!-- 内容导航 -->
        <my-nav v-bind:x="contentnav"></my-nav>
        <!-- 底部导航 -->
        <my-nav v-bind:x="footernav"></my-nav>
    </div>
```

```js
Vue.component("myNav",{
            //props:["x"],
            //props验证
            props:{
                "x":String
            },
            template:`
            <div>
            <h1>{{ x.title }}</h1>
            <ul>
                <li v-for="(item,index) in  x.nav" :key="index" >{{item.bar}}</li>
                
            </ul>
        </div>
            `
        })
        const vm = new Vue({
            el: "#app",
            data: {
                topnav: {
                    title: "哈哈哈",
                    nav: [{
                            "bar": 123
                        },
                        {
                            "bar": 456
                        },
                    ]
                },
                contentnav: {
                    title: "哈哈哈",
                    nav: [{
                            "bar": 111
                        },
                        {
                            "bar": 222
                        },
                    ]
                },
                footernav: {
                    title: "哈哈哈",
                    nav: [{
                            "bar": 888
                        },
                        {
                            "bar": 999
                        },
                    ]
                },

            }
        })
        //思考?:移动端最上方为搜索框,进行验证,
        //下方一张大图,
        //小方块里面有文字,9宫格导航
        //左边图片,右边为价格,说明
        //下边为底部栏
        //切组件
```

## 25  九宫格组件



## 26  组件通信

## 27 案例 ：计算属性 computed 实现购物车

  小需求：复选框，全部选中 则表头显示为全部选中。

```vue
<template>
    <div>
        <div class="top">
            是否全选：
            <span v-if="isCheck" style="color:red">是</span>
            <span v-else>否</span>
        </div>
        <div 
            class="bottom"
            v-for="(item,index) in datalist" 
            :key="index" >
            <label >
                <input type="checkbox"
                    v-model="item.isCheck" />
                {{ item.name}}
            </label>
        </div>
    </div>
</template>
<script >
export default {
    data(){
        return{
            datalist:[
                {isCheck:false,name:"苹果"},
                {isCheck:false,name:"橘子"},
                {isCheck:false,name:"香蕉"},
            ]
        }
    },
    //侦听datalist中的每一项，如果全部勾选了就说明是全选状态
    computed:{
        //判断是否全选
        isCheck(){
            for(var item of this.datalist){
                //只有一个item项目的isCheck为false，就说明没有被全选
                if(!item.isCheck ){
                    return false
                }
            }
            
            //跳出循环后 如果没有返回false。就说明是全选状态
                return true
        }
    },
    methods: {       
    },
};
</script>
<style scoped>
</style>
```

 稍微加点难度的需求： 复选框，全部选中 则表头显示为全部选中。并计算价格，实现购物车的功能

```vue
<template>
    <div>
        <table>
            <tr>
                <th>
                    <input type="checkbox" v-model="isChecked" style="color:red">全选</input>
                <th>商品名称</th>
                <th>价格</th>
                <th>数量</th>
                <th>金额</th>
            </tr>
            <tr v-for="(item,index) in datalist" :key="index">
                <td>
                    <input v-model="item.isCheck" type="checkbox">
                </td>
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
                <td>
                    <input 
                        type="number"
                        :min="0" 
                        v-model.number="item.num"
                        style="width:50px"
                        @input="amtCom(item.num,index)"/>
                </td>
                <!-- <td>￥{{(item.num*item.price).toFixed(2)}}</td> -->
                <td>{{item.amt}}</td>
            </tr>
        </table>
        <div>总金额：{{comCount}}</div>
    </div>
</template>

<script >


export default {
    data(){
        return{
            datalist:[
                {isCheck:false,name:"苹果",price:1.11111,num:0,amt:0},
                {isCheck:false,name:"橘子",price:1.1,num:0,amt:0},
                {isCheck:false,name:"香蕉",price:1,num:0,amt:0},
            ],
            count:"",

        }
    },
    //侦听datalist中的每一项，如果全部勾选了就说明是全选状态
    computed:{
        //注意这里  它可以是一个函数
        comCount(){
            let price=0
            for(var item of this.datalist){

                if(item.isCheck){
                    price += item.amt
                }
            // console.log(parseInt(price));
            }
            return price.toFixed(2)
        },

        //判断是否全选  注意这里  它必须是一个对象，包含2个函数（set额get）
        isChecked:{

            //设置状态
            set(val){
                console.log(val);
                if(val){
                    this.datalist.map( item=>item.isCheck=true)
                }else{
                    this.datalist.map( item=>item.isCheck=false)
                }
            },

            //获取状态
            get(){
                for(var item of this.datalist){
                    //只有一个item项目的isCheck为false，就说明没有被全选
                    if(!item.isCheck ){
                        return false
                    }
                }               
                //跳出循环后 如果没有返回false。就说明是全选状态
                    return true
            }
        }
    },
    created() {       
    },
    methods: {
        amtCom(num,index){
            this.datalist[index].amt=Math.floor( (this.datalist[index].price*num)*100 )/100
        }        
    },
};

</script>
<style scoped>
</style>
```



# 模块化开发

@vue/cli	-- 脚手架 （配置默认开发环境 -- webpack）

1、安装@vue/cli

```shell
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

```shell
vue --version
#OR
vue -V
```

2、通过 @vue/cli 创建项目

​	1）命令

```powershell
vue create 	项目名
```

​	2）使用图形化界面

```shell
vue ui
```

  3）创建一个项目

```
vue create 文件名

选择  Manually select features

配置时:按空格选中或者取消 上下 方向键选择  回车执行下一步
? Check the features needed for your project:
 (*) Choose Vue version
 (*) Babel
 ( ) TypeScript
 ( ) Progressive Web App (PWA) Support
 (*) Router
 (*) Vuex
 (*) CSS Pre-processors
>(*) Linter / Formatter
 ( ) Unit Testing
 ( ) E2E Testing 
 
 选择 版本2.x 还是 3.x ?:
 ? Choose a version of Vue.js that you want to start the project with (Use arro
w keys)
> 2.x
  3.x 

选择less/sass/stylus:
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supporte
d by default):
  Sass/SCSS (with dart-sass)
  Sass/SCSS (with node-sass)       选sass一般选择这个
> Less
  Stylus 
  
  
 选择ESLint: 
  ? Pick a linter / formatter config:
  ESLint with error prevention only
  ESLint + Airbnb config
  ESLint + Standard config
> ESLint + Prettier                 

? Pick additional lint features: (Press <space> to select, <a> to toggle all,
<i> to invert selection)
>(*) Lint on save
 ( ) Lint and fix on commit 
 
 
 ? Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys)

> In dedicated config files
  In package.json 
  
```

4. 进入项目   

   ```
   cd 文件名
   ```

5)、设置

6)、运行项目

```
npm run serve
```



## 拉取 2.x 模板 (旧版本)

```bash
全局下载
npm install -g @vue/cli-init

创建项目
vue init webpack 项目名
```





> Vue cli  3  / 4 构建项目

> node_modules			项目依赖（vue 、babel、vue-router、vuex 、。。。webpack相关，）

> public							公共文件  / 静态资源/ 根目录

> ​			index.html		 主模版

> src								 开发目录/开发源代码

​		 assets				静态资源（第三方库）

​            utils                  工具类

​			api                     请求的文件

​            style                     样式文件

​			components	    vue组件

​			router				 路由

​			store				   vuex 

​			views				页面组件--视图组件	 

​		   APP.vue			 根组件

​			main.js			  项目入口文件（ new Vue（） ）	

.browserslistrc			浏览器支持情况

.gitignore					git 不维护的文件    当前是一个仓库

babel.config.js		  babel 配置   

package.json			项目依赖配置文件

README.md			项目说明

vue.config.js              vue配置

# vue3.0

# `TypeScript`

### ts变量声明

#### 0：语法： 

变量声明语法：冒号 : 前面是变量名称，后面是变量类型。

#### 1:布尔类型: true / false 值：

```
const registered: boolean = false
const done: boolean = Boolean(0)
```

#### 2:数字类型：

```js
let decLiteral: number = 6
let goldenSection: number = 0.618
let hexLiteral: number = 0xf00d
let binaryLiteral: number = 0b1010
let octalLiteral: number = 0o744
let notANumber: number = NaN
```

#### 3:字符串类型  

```js
let protagonist: string = "js大师"
let partner: string = 'js小学生'

let protagonist2: string = 'Sherlock'
let sentence: string = `华生是${protagonist2}的朋友、助手和室友。`
```

#### 4:void类型

 当一个函数没有返回值时，可以将其返回值类型定义为 void

```js
function doNothing(): void {
    let a  = 10
  }
```

 声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null

声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null

```
let nothing: void = undefined
```

#### 5：null 类型和 undefined 类型

 一般项目是默认开启 --strictNullChecks 检测的，如果你将 tsconfig.json 中 strictNullChecks 选项设置为 false，下面这种操作不会报错，不过尽量不要这么做：

```
let num: number = undefined
let list: number[] = undefined
let name1: string = undefined
```

####   6：数组类型

第一种在元素类型后接上 []

```
let list2: number[] = [1, 2, 3]
let names: string[] = ['Sherlock', 'Watson', 'Mrs. Hudson']
```

另一种方式是使用数组泛型（泛型后续会单独介绍），Array<元素类型>

```
let list3: Array<number> = [1, 2, 3]
let names2: Array<string> = ['Sherlock', 'Watson', 'Mrs. Hudson']
```

混合各种元素类型

```
let list4: any[] = ['Sherlock', 1887]
```

####  7:any类型

有时候接收来自用户的输入，我们是不能确定其变量类型的。这种情况下，我们不希望类型检查器对这些值进行检查，而是直接让它们通过编译阶段的检查，此时可以使用 any：

```
let input: any = 'nothing'

input = 0                   // ok
input = true                // ok
input = []                  // ok
input = null                // ok
input = Symbol('any')       // ok
```

如果一个数据是 any 类型，那么可以访问它的任意属性，即使这个属性不存在：

```
let anything: any = 10

anything.eat()              // ok
anything.name               // ok
anything[0]                 // ok
new anything()              // ok
anything()                  // ok
```

从上面的例子中可以看到，any 类型几乎可以做任何操作，这样很容易编写类型正确但是执行异常的代码。我们使用 TypeScript 就是为了代码的健壮性，所以要尽量减少 any 的使用。

#### 8：object类型

object 表示非原始类型(non-primitive type)：

```
let obj: object
```

枚举类型

```
enum TokenType {
  ACCESS = 'accessToken',
  REFRESH = 'refreshToken'
}

obj = TokenType
obj = [1, 2, 3]
obj = [1, 'string'] // 元组类型
obj = { a: 1 }
```

可以看到枚举、数组、元组和普通对象都是 object 类型。

可以看到枚举、数组、元组和普通对象都是 object 类型。

#### 9： 容易混淆的点

TypeScript 中描述类型要用 小写，比如 boolean、number、string等；
大写开头的如 Boolean、Number、String 代表的是 JavaScript 的构造函数:

```
let a: Number = new Number('10') // a === 10 为 false
let b: number = Number('10') // b === 10 为 true

a instanceof Number // true
b instanceof Number // false代码解释：
```

第 1 行，通过 new Number('10') 得到的是一个构造函数，本质是一个对象。

第 2 行，Number('10') 与 10 都是声明一个数字 10 的方法，本质就是一个数字。

第 4 - 5 行，instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。a 是一个对象，它的 __proto__ 属性指向该对象的构造函数的原型对象 Number，所以为 true。b 是一个数字，所以为 false。

__proto__ 是非标准属性，你也可以使用 Object.getPrototypeOf() 方法来访问一个对象的原型：

```typescript
a.__proto__ === Object.getPrototypeOf(a) // true
```

#### 小结：

- TypeScript 中描述类型要用 `小写`。
- 不要滥用 `any` !



## Flutter框架  跨平台

**介绍：**Flutter 是 Google 推出的一个移动应用开发框架，支持跨平台，即开发者可以通过 Dart 语言实现一套代码同时在 Android 和 IOS 平台上运行。Flutter 除了跨平台这个特性，还在于其提供了流畅的、高保真的 UI 体验，Flutter 内置的组件，丰富的 API ，响应式框架等都给开发带来了便利。

开发方式  性能  热更新  介入成本   行业使用情况

React Native

Flutter

使用VSCode  必须安装插件：  

①Flutter；

②Dart

③Awesome Flutter Snippets

新建项目  Application   然后查看目录

main.dart文件中：

 常量 const  变量var

```dart
void main(){
 const consNum = 10;
 const double doubleValue = 3.22;
 final int age = 20;  //只能初始化一次
    
//定义变量
    var str= 'hhhshsh';
    print(str);
 
}
```

# taro  

### node 版本16.13.0
```
npm  i -g 
```
```
npm i -g @tarojs/cli    安装了3.4.4
```
```
初始化 taro into app
```

# java

最好的跨平台开源编程语言：

    最核心：跨越多种操作系统
    
    开源：开放源代码（安全 完整  放心使用）

历程：  -->1995 (javaSE 1.0)  梦的开始
        -->2002 (JavaSE 1.4)  JAVA旧石器时代的坚持
        -->2006 (J2SE 5)  引入注解等重要特性
        -->2009 Orical公司收购SUN公司
        -->2014 (J2SE 8)  JAVA的代名词，90%的公司在使用
        -->2020 (J2SE 14)  更好的性能 更多的特性，更强大的功能
        -->未来

J2SE：标准版，提供了JAvA语言的最核心的功能，是其他版本的基础

J2EE：企业版，针对企业应用开发提供了更多高级功能

J2ME：嵌入式版，可为智能设备开发应用程序，目前已极少使用。

Java 第一段代码
```java
//类
public class HelloWorld{
    public static void main(String[] args){
        System.out.println("Hello World")
    }
}
```
搭建Java 开发环境
分两步：
    1、安装Java 开发工具包 Java Development Kit (JDK) 作用：运行Java程序核心
    下载版本对应的版本：JDK 8  window-64位安装包  用户注册Orical公司网站，进行下载
    安装包双击 下一步 更换安装目录，进行安装
    随后出现 jre1.8.0_261的安装向导,这是什么？安装在Java目录下，和JDK同级目录。

    --------------------------------------------------------|           
    |             JDK  Java开发包                           |       
    |  提供开发Java程序必须的工具   (开发人员安装)           | 
    |                                                       |
    |   |--------------------------------------------|      |
    |   |                                            |      |
    |   |     JRE Java 运行环境.    (普通用户安装)    |      |
    |   |                                            |      |
    |   |   |-----------------------------------|    |      |
    |   |   |                                   |    |      |       
    |   |   |   JVM Java 虚拟机运行程序的核心   |    |       |       
    |   |   |                                   |    |       |       
    |   |   |-----------------------------------|    |       |       
    |   |                                            |       |
    |   |--------------------------------------------        |
    |                                                        |
    |--------------------------------------------------------|
    
    2  安装JAVA interlij IDEA  是JAVA领域公认的最好的编码工具  智能工具语法提示及语法分析，有很多快捷键
    
    如何下载  官网 下载版本分 Ultimate(商业版)-->收费的功能强大  Community(社区版)-->免费的。
    
    选择安装路径，下一步，勾选64-bit launcher  之后install
    
    第一次安装运行  安装配置向导(界面设置，安装哪些性能插件)
    
    右下角 Configure 选择 Structure for New project(为所有新工程设置默认选项)
    
    如果安装成功JDK   下拉选项就会有  1.8 java  version “1.8.0_261”这个选项  OK按钮
    
    使用IDEA
    
      +New project  创建新工程
    
        左侧选中的是JAVA  右侧是  1.8 java  version “1.8.0_261”  next
    
        设置：工程名称Project name  及工程目录 Project location   -->finish
    
        src下 右键 New -> Java Class(创建Java类)
    
        使用快捷键psvm  即可生成  `public static void main`
    
        使用快捷键sout  即可生成  `System.out.println`
    
        右键 Run  运行  下方会出现运行结果