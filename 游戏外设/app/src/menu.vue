<template>
  <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"  text-color="#fff" active-text-color="#cd1a1a">
		<el-menu-item index="/">网站首页</el-menu-item>
		<el-menu-item index="/n2">外设产品</el-menu-item>
		<el-menu-item index="/n3/aaa">行业快讯</el-menu-item>
		<el-menu-item index="/n4">关于我们</el-menu-item>
		<el-menu-item index="/n5">联系我们</el-menu-item>
		<span style="text-align:center;line-height:60px;color:#fff;margin-left:150px;font-size:15px;">400-200-2200</span>
  </el-menu>
  
</template>

<script>
export default {
  data() {
    return {
      activeIndex2: "/"
    };
  },
  mounted() {
    this.activeIndex2 = this.$route.path;
  },
  methods: {
    handleSelect(key, keyPath) {
      location.href = "#" + key;
      //				console.log(key);
    }
  }
};
</script>

<style>
.el-menu-demo el-menu--horizontal el-menu{
	width: 600px;
	height: 60px;
	float: right;
}
.el-menu-demo{
	background-color: #191919;
}
.el-menu{
	position: static;
	margin-left: 281px;
}

.el-menu-item{
	width: 89px !important;
	background-color: #191919 !important;
}
.el-menu.el-menu--horizontal {
    border-bottom: none;
}
</style>