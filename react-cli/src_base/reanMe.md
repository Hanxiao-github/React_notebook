## 一、脚手架基本知识
### 1.文件介绍
* node_modules中存放下载的各种插件和依赖
* public中存放各种静态资源，例如图片，h5主页面等
* src存放网站的各种组件
  + index.js为入口文件，渲染了主组件
  + components文件夹里存放各个组件，一般每个组件和它的css文件占一个文件夹
### 2.注意
* 在每个js文件中要用 import *** from '***' 引入相关的依赖
* 在组件的js文件中末尾写 export default 组件名； 来输出该组件
## 二、此评论系统的思路
* 将本页面划分为三个组件：主组件App，添加评论组件Add和评论列表显示组件List，由于每个评论要包括用户名、评论和删除按钮，所以将每个评论放在组件Item中，它是List的子组件
* 将数据和更新数据的方法都放在App中，方便操作