<template>
  <div class="home-box">
    <el-container>
      <el-aside width="200px" class="aside">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu v-for="data in homeData" :index="data.title" :key="data.title">
            <template slot="title">{{data.title}}</template>
            <el-menu-item
              v-for="item in data.list"
              :index="item.name"
              :key="item.name"
              @click="goto(item,data)"
            >{{item.title}}</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{title1}}</el-breadcrumb-item>
            <el-breadcrumb-item>{{title2}}</el-breadcrumb-item>
          </el-breadcrumb>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      h3: "后台管理系统",
      homeData: [
        {
          title: "商品管理",
          list: [
            {
              title: "商品列表",
              name: "productlist",
              path: "/productlist"
            },
            {
              title: "商品分类",
              name: "classification",
              path: "/classification"
            },
            {
              title: "添加商品",
              name: "addproduct",
              path: "/addproduct"
            }
          ]
        },
        {
          title: "用户管理",
          list: [
            {
              title: "用户列表",
              name: "userslist",
              path: "/userslist"
            },
            {
              title: "添加用户",
              name: "addusers",
              path: "/addusers"
            }
          ]
        },
        {
          title: "订单管理",
          list: [
            {
              title: "订单列表",
              name: "orderlist",
              path: "/orderlist"
            }
          ]
        }
      ],
      activeIndex: "",
      title1:'商品管理',
      title2:'商品列表'
    };
  },
  created() {
    this.activeIndex = this.homeData[0].list[0].name;
  },
  methods: {
    handleSelect() {},
    goto(item,data) {
      // console.log(item.path, 123);
      // this.$router.push({ path:'/home' + item.path });
      // this.$router.push({name:item.name,params:{title1:data.title,title2:item.title}})
      this.$router.push({name:item.name})
      this.title1 = data.title;
      this.title2 = item.title;
    }
  }
};
</script>

<style lang="scss" scoped>
.aside{
  height: 1000px;
  background-color: #545c64;
}
</style>