<template>
  <div id="app">
    <div style="height: 60px;background: #ccc;position: absolute;top: 0;left: 0;width: 100%;">
		<div class="header">
			  <div class="logo">
				  <img src="https://ccdn.goodq.top/caches/7d453d9a6d8884b1eb79efc7bc8bafb5/aHR0cHM6Ly81YThmNmVlYTE1YzVmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDIvMTI5YjI5ODNjZjIzYTZkZDZkOWExNmRmM2Y3NDgzZjctOTAud2VicA_p_p100_p_3D_p_p100_p_3D.webp" alt="">
			  </div>
			  <menus style="background-color:#191919;"></menus>
		  </div>
		 </div>
		 <div style="min-height: 400px;margin-top: 60px;">
		 	   <router-view></router-view>
		 </div>
		 <div style="height: 150px;background: #202020;">
		 	<div style="width:80%;margin:0 auto;background:#202020">
				 <div style="padding-top: 30px;
    padding-left: 40px;">
					 <span style="color:#D3D3D3;"><span style="display:inline-block;line-height:1.8;"><strong><span style="font-size:15px;"><span style="font-family:微软雅黑;">游戏外设产品展示模板</span></span></strong></span></span>
				 </div>
				 <div style="
    padding-left: 40px;">
					 <span style="color:#808080;"><span style="display:inline-block;line-height:1.8;"><span style="font-size:12px;"><span style="font-family:微软雅黑;">地址：苏州市工业园区金鸡湖大道00号        邮编：200000        电话：0500-66008800        手机：15066006600  / 15088008800        传真：000-66668888        邮箱：e-mail@website.com</span></span></span></span>
				 </div>
			 </div>
    </div>
  </div>
</template>

<script>
import menus from "./menu.vue";
export default {
  name: "app",
  components: {
    menus
  },
  data() {
    return {};
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,body{margin:0;padding:0;}


.header{
	background-color: #191919;
	padding: 0 40px;
	margin: 0 auto;
	clear: both;
	height: 60px;
}
.logo{
	width: 186px;
	height: 40px;
	padding: 10px 0;
	float: left;
}
.logo img{
	width: 118px;
	height: 43px;
}
</style>