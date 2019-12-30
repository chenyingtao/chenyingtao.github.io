<template>
    <div>
        <div v-for="i in arr"
				style="overflow: hidden;border-bottom: .7px #ccc solid;">
				<div style="float:left;margin-top:5px;margin-left:5px;height:110px;margin-right: 18px;cursor: pointer;"><img :src="i.b"
						alt=""></div>
				<div style="float:left;width:590px;">
					<p style="color: #919191;font-size: 15px;line-height: 18px;margin-bottom: 13px;margin-top:5px;">{{i.a}}</p>
					<p style="color: #b56161;font-size: 12px;line-height: 12px;margin-bottom: 15px;">{{i.c}}</p>
					
				</div>
			</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            arr:[
                {
					a: '致力于让办公管理变得更简单，响应式网站的倡导者',
					b: 'https://ccdn.goodq.top/caches/7d453d9a6d8884b1eb79efc7bc8bafb5/aHR0cHM6Ly81YThmNmVlYTE1YzVmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDIvMGZlYzcxZTMzMjE1OGU1ODBmYWU5OTgzOWIyODQ1ZDMtMTYweDEwMC05MC53ZWJw.webp',
					c: '发布日期：2016-08-24 分类：企业动态 全部资讯 ',
                },
                {
					a: '全面采用云服务器，大平台靠得住',
					b: 'https://ccdn.goodq.top/caches/7d453d9a6d8884b1eb79efc7bc8bafb5/aHR0cHM6Ly81YThmNmVlYTE1YzVmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDIvMTM4ODEwM2U3ODg2YmNkNDdhNTRlYWMyYWEzZGZlNzktMTYweDEwMC05MC53ZWJw.webp',
					c: '发布日期：2016-08-24 分类：企业动态 全部资讯 ',
                },
                {
					a: '支持打字传图自由拖拽，不需要专业编写代码',
					b: 'https://ccdn.goodq.top/caches/7d453d9a6d8884b1eb79efc7bc8bafb5/aHR0cHM6Ly81YThmNmVlYTE1YzVmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDIvMmVmZGFlNjA0OWRiMDcwN2RjNGRmNmZiYzVmZDQ1OWYtMTYweDEwMC05MC53ZWJw.webp',
					c: '发布日期：2016-08-24 分类：企业动态 全部资讯 ',
                },
                {
					a: '当今最领先的响应式自助建站平台',
					b: 'https://ccdn.goodq.top/caches/7d453d9a6d8884b1eb79efc7bc8bafb5/aHR0cHM6Ly81YThmNmVlYTE1YzVmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDIvNmFjZDMxMGY5ZjNlODA5NjA2NjU5ZTg3N2FjZDA0YTQtMTYweDEwMC05MC53ZWJw.webp',
					c: '发布日期：2016-08-24 分类：企业动态 全部资讯 ',
                },
                {
					a: '我们是响应式网站的倡导者',
					b: 'https://ccdn.goodq.top/caches/7d453d9a6d8884b1eb79efc7bc8bafb5/aHR0cHM6Ly81YThmNmVlYTE1YzVmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDIvMGZlYzcxZTMzMjE1OGU1ODBmYWU5OTgzOWIyODQ1ZDMtMTYweDEwMC05MC53ZWJw.webp',
					c: '发布日期：2016-08-24 分类：企业动态 全部资讯 ',
                },
                {
					a: '十年行业经验，海内外10万用户的共同选择',
					b: 'https://ccdn.goodq.top/caches/7d453d9a6d8884b1eb79efc7bc8bafb5/aHR0cHM6Ly81YThmNmVlYTE1YzVmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDIvNGU0ZGQ1YmQ3MTQxNmVhZDRlMDRjYzA1NmQ4MTlmYmMtMTYweDEwMC05MC53ZWJw.webp',
					c: '发布日期：2016-08-24 分类：企业动态 全部资讯 ',
				},
            ]
        }
    }
}
</script>
<style>

</style>