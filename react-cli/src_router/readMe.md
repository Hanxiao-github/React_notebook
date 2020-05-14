## react-router库中的相关组件
* 包含的相关组件
  + Router：路由器组件，用来包含各个路由组件，用来管理路由
  + Route： 路由组件，注册路由
  + IndexRoute：默认路由组件
  + hashHistory：路由的切换由Url的hash变化决定，即Url的#部分变化
  + Link：路由连接组件，生成a标签的
* Router：路由器组件
  + 属性：history={hashHistory} 用来监听浏览器地址栏的变化，并将url解析成一个地址对象，供React Router匹配
  + 子组件：Route
* Route：路由组件
  + 属性1：path="/xxx"
  + 属性2：component={Xxx}
  + 根路由组件：path="/"的组件，一般为App
  + 子路由组件：子<Route>配置的组件
* IndexRoute：默认路由
  + 当父路由被请求时，默认请求此路由组件
* hashHistory
  + 用于Router组件的history属性
  + 作用：为地址url生成?_k=hash，用于内部保存对应的state
* Link：路由链接
  + 属性1：to="/xxx"
  + 属性2：activeClassName="active"
## 注意
* 所有的路由无论父子都注册在index.js中，用嵌套的方式
* 在父组件中写{this.props.children}才可以显示子路由的内容
* 当请求的地址不确定时，使用占位符 '/:xxx',可用this.props.params.xxx访问占位符对应的内容
