# 项目
****
## 项目名称    ：    **猫眼电影**

****
## 演示
[官网](http://m.maoyan.com)

[服务器网址](http://39.106.0.60)

[github](https://github.com/gzh51904/maoyan)
****
## 团队与分工
组长：陈榕伟

组员：沈卓、黄景涛、覃湲康

分工：

    陈榕伟：
        * 首页（分正在热映和即将上映两个模块）
        * 首页点击切换组件，并且渲染不同数据
        * 底部导航栏，有吸底功能
        * 导航栏点击切换，具有组件缓存
        * 数据请求，从官方请求真实且实时数据
        * 数据初步处理，并根据不同页面获取不同数据
    沈卓
        * 影院详情页
        * 点击影片跳转影片详情页，并传输对应 id
        * 影片详情页
        * 详情页接收 id，渲染，可回退至影院详情
        * 城市定位
        * 后台管理系统静态页面
    黄锦涛
        * 影院页面
        * 影片列表（根据不同城市渲染不同影院）
        * 点击跳转至影院详情页，并传递对应 id
        * 全城、品牌、特色筛选不同影院

    覃湲康
        * 登录页面
        * 登录可在两种方式之间切换
        * 注册页面
    

****
## 图片
![webApp首页图片](https://github.com/gzh51904/maoyan/blob/dev/project/src/img/webAPP.png)
![后台管理系统首页图片](https://github.com/gzh51904/maoyan/blob/dev/project/src/img/backstage%20management%20system.png)

****
## 技术栈
    Vue
    Vue-CLI
    vue-router
    vuex
    mint-ui
    ES module
    NodeJS
    MongoDB
    Axios
    scss
    Git
    WebPack
    Express

****
## 项目目录说明
E:.
│  App.vue                                 
│  main.js
│  Readme.md                    
│  rem.js
├─components
│  ├─cinema                                         //影院页面
│  │      cinemaBread.vue                             
│  │      cinemaCity.vue
│  │      cinemaClass.vue
│  │      cinemaFeatures.vue
│  │      cinemaIndex.vue
│  │      cinemaList.vue
│  │      cinemaRegion.vue
│  │      cinemaSearch.vue
│  │
│  ├─detiles                                        // 影院详情页
│  │      detilesFood.vue
│  │      detilesIndex.vue
│  │      detilesList.vue
│  │      detilesSlider.vue
│  │
│  └─movies                                         // 影片详情页
│          movieActorList.vue
│          movieExtension.vue
│          movieIndex.vue
│          movieIntroduce.vue
│          movieMedia.vue
│          movieNav.vue
│          movieTicket.vue
│          movieTu.vue
├─icon                                              // icon图标样式
│      iconfont.css
├─pages                                             
│      code.vue                                     // 验证码
│      Footer.vue                                   // 底部菜单
│      future.vue                                   // 即将上映页面
│      home.vue                                     // 首页
│      hot.vue                                      // 热映页面
│      Mine.vue                                     // 我的->登录
│      myhome.vue                                   // 登录成功之后我的
│      new_file.json                                
│      password.vue                                 // 设置密码
│      reg.vue                                      // 注册
│
├─routers
│      index.js
│
└─vuex
        index.js
