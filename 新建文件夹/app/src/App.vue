<template>
	<div id="app">
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		<div class="foot_nav">
			<a href="#/">
				<div><i slot="icon" class="iconfont">&#xe64a;</i></div>
				<p>微信</p>
			</a>
			<a href="#/no2">
				<div><i slot="icon" class="iconfont">&#xe60c;</i></div>
				<p>通讯录</p>
			</a>
			<a href="#/no3">
				<div><i slot="icon" class="iconfont">&#xe669;</i></div>
				<p>发现</p>
			</a>
			<a href="#/no4">
				<div><i slot="icon" class="iconfont">&#xe604;</i></div>
				<p>我</p>
			</a>
		</div>

	</div>
</template>
<script>

	export default {

		name: 'app',
		data() {
			return {
				selected: '微信',
				nav_arr: [{}]
			}
		}
	}
</script>
<style>
	* {
		margin: 0px;
		padding: 0px;
		text-decoration: none;
	}
#app{
	height: 30.74074rem;
	width: 100%;
	position: relative;
}
.content{
		width: 100%;
		top: 1.925925rem;
		height: 26.311111rem;
		overflow: hidden;
		overflow-y: scroll;
		position: absolute;
	}

	.foot_nav {
		height: 2.459259rem;
		background-color: #ddd;
		position: absolute;
		bottom: 0px;
		width: 100%;
		display: flex;
		border-top: 1px solid #ccc;
	}

	.foot_nav a {
		flex: 1;
		text-align: center;
		color: #000;
	}

	.foot_nav p {
		font-size: 0.444444rem;
	}

	.foot_nav i {
		font-size: 0.948148rem;
	}
.foot_nav a>div{
	margin-top: 0.148148rem;
}
	.foot_nav a:active {
		color: #09c161;
	}
</style>
