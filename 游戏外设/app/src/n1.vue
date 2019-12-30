<template>
  <div>
    <div class="block">
      <el-carousel>
        <el-carousel-item v-for="i in arr" :key="i.img">
          <img :src="i.img" alt style="width:100%;height:100%;" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="m-git">
      <div class="title">
        <div
          style="font-family:微软雅黑;font-size:32px;font-weight:normal;font-style:normal;color:#ffffff;display:block;vertical-align:bottom;text-align:center"
        >关于我们</div>
        <div
          style="font-family:微软雅黑;font-size:13px;font-weight:normal;font-style:normal;color:#b2b2b2;display:block;padding:10px 0 0 0;vertical-align:bottom;text-align:center"
        >ABOUT</div>
        <div
          style="overflow:hidden;border-bottom-style:solid;width:60px;max-width:60px;border-bottom-width:3px;border-bottom-color:#dd3333;margin:0 auto;margin-top:10px;"
        ></div>
      </div>
      <div class="m-content">
        <div style="padding:0 40px;height:453px;position: relative;">
          <div
            style="background-image: url('https://ccdn.goodq.top/caches/7d453d9a6d8884b1eb79efc7bc8bafb5/aHR0cHM6Ly81YThmNmVlYTE1YzVmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDIvMGZlYzcxZTMzMjE1OGU1ODBmYWU5OTgzOWIyODQ1ZDMtOTAud2VicA_p_p100_p_3D_p_p100_p_3D.webp'); background-repeat:no-repeat; background-size:cover; background-attachment:scroll;background-position:0 0%;;width:70%;height:453px"
          ></div>
          <div class="dingwei">
            <h2
              style="font-family:微软雅黑;font-size:20px;font-weight:normal;font-style:normal;color:#ffffff;"
            >专栏背景图片进行了偏移</h2>
            <div style="width:326px;height:73px;padding-left:50px;">
              <span style="font-size:13px;">
                <span style="font-family:微软雅黑;color:#D3D3D3;">在专栏设置面板中，您可以更换背景图片的</span>
              </span>
              <div>
                <span style="font-size:13px;">
                  <span style="font-family:微软雅黑;color:#D3D3D3;">非常简单的，不需要任何别的设置</span>
                </span>
              </div>
            </div>
            <button
              onmouseleave="this.style.borderColor='#ffffff'; this.style.backgroundColor='transparent'; this.style.color='#ffffff'"
              style="border-width: 1px;margin-left:60px; border-color: rgb(255, 255, 255); color: rgb(255, 255, 255); background-color: #cc1919;width:104px;height:38px;"
            >查看更多详细</button>
          </div>
        </div>
      </div>
    </div>
    <div style="width:100%;height:704px;background:#fff clear:both">
      <div
        style="width:50%;height:704px;background-image:url('https://ccdn.goodq.top/caches/7d453d9a6d8884b1eb79efc7bc8bafb5/aHR0cHM6Ly81YThmNmVlYTE1YzVmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDIvMmVmZGFlNjA0OWRiMDcwN2RjNGRmNmZiYzVmZDQ1OWYtOTAud2VicA_p_p100_p_3D_p_p100_p_3D.webp');background-repeat:no-repeat;float:left"
      >
        <div style="padding-top:50px;">
          <div style="width:80%;height:600px;margin:0 auto;">
            <div style="width:100%;height:50px;">
              <span style="text-align:center;margin:0 auto;display:block">
                <span style="font-size:22px;color:#fff">
                  <span style="font-family: 微软雅黑;">外设型号U870</span>
                </span>
              </span>
              <span style="text-align:center;margin:0 auto;display:block">
                <span style="font-size:13px;color:#A9A9A9">
                  <span style="font-family: 微软雅黑;">极致游戏触感体验</span>
                </span>
              </span>
            </div>
            <el-carousel
              trigger="click"
              height="500px"
              el-carousel__indicators--horizontal="transform: translateX(-11%);"
              style
            >
              <el-carousel-item v-for="i in date" :key="i.img" style="width:442px;height:442px;">
                <img :src="i.img" alt style="width:100%;height:100%;" />
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
      <div style="width:50%;height:704px;background:#191919;float:left;">
        <div style="text-align:center;margin-top:200px;">
          <span style="color:#fff">
            <span style="font-size:36px;">
              <span style="font-family: 微软雅黑;">功能多样满足您的所有需求</span>
            </span>
          </span>
        </div>
        <button
          onmouseenter="this.style.backgroundColor='#31353d'; this.style.borderColor='#31353d'; this.style.color='#ffffff';"
          onmouseleave="this.style.borderColor='#ffffff'; this.style.backgroundColor='transparent'; this.style.color='#ffffff';"
          class="anniu"
        >立即体验</button>
      </div>
    </div>
    <div style="width:100%;height:410px;background:#fff clear:both">
      <div style="width:50%;height:410px;background:#191919;float:left;">
        <div style="margin-top:50px;">
          <h3 style="color:#fff;margin-left:58px;">一级内容标签</h3>
          <div style="width:466px;height:192px;margin-left:57px;margin-top:30px;">
            <span style="color:#808080">
              <span style="font-size:12px;">
                <span
                  style="font-family: 仿宋_gb2312;"
                >当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。想创建一个简单的单页式站点，还是一个专业的公司网站，亦或是一个别具一格的博客？当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。</span>
              </span>
            </span>
          </div>
        </div>
      </div>
      <div
        style="width:50%;height:410px;background-image:url('https://ccdn.goodq.top/caches/7d453d9a6d8884b1eb79efc7bc8bafb5/aHR0cHM6Ly81YThmNmVlYTE1YzVmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDIvMTlhZmJkYzc5MTMyMzUyMjMzMDQ2MzRkODgyYzNjZGEtOTAud2VicA_p_p100_p_3D_p_p100_p_3D.webp');background-repeat:no-repeat;float:left;background-size:110% 100%"
      ></div>
    </div>
    <div style="width:100%;min-height:573px;background-color:black">
      <div class="title">
        <div
          style="font-family:微软雅黑;font-size:32px;font-weight:normal;font-style:normal;color:#ffffff;display:block;vertical-align:bottom;text-align:center"
        >游戏产品外设</div>
        <div
          style="font-family:微软雅黑;font-size:13px;font-weight:normal;font-style:normal;color:#b2b2b2;display:block;padding:10px 0 0 0;vertical-align:bottom;text-align:center"
        >PRODUCTS</div>
        <div
          style="overflow:hidden;border-bottom-style:solid;width:60px;max-width:60px;border-bottom-width:3px;border-bottom-color:#dd3333;margin:0 auto;margin-top:10px;"
        ></div>
      </div>
      <div style="width:100%;min-height:405px;clear:both;">
        <div style="width:1065px; background-color:black;margin-bottom:30px;margin:0 auto;">
          <ul style="min-height:60px;margin:0 auto;">
            <li
              style="width:350px;float: left;list-style: none;text-align:center;margin:0 auto;margin-right:5px;"
              v-for="i in shuju"
            >
              <div style="background-color: black;border:2px solide #ffffff;">
                <div style="overflow:hidden;display:block;width:100%;text-align:center;">
                  <img :src="i.img" alt />
                </div>
                <div
                  style="padding-bottom:3px;font-weight:normal;color:#333333;line-height:13px;vertical-align:middle;text-align: center;width: 100%"
                >
                  <a
                    href="#"
                    style="color: #cecece;font-size: 15px;font-family: 微软雅黑;line-height: 21px;text-decoration:none"
                  >{{i.title}}</a>
                </div>
                <div
                  style="text-align:center;color:#686868;font-size:13px;font-family:微软雅黑;line-height:22px;"
                >
                  <p>{{i.biaoti}}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [
        {
          img:
            "https://ccdn.goodq.top/caches/7d453d9a6d8884b1eb79efc7bc8bafb5/aHR0cHM6Ly81YThmNmVlYTE1YzVmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDIvNGU0ZGQ1YmQ3MTQxNmVhZDRlMDRjYzA1NmQ4MTlmYmMtOTAud2VicA_p_p100_p_3D_p_p100_p_3D.webp"
        },
        {
          img:
            "https://ccdn.goodq.top/caches/7d453d9a6d8884b1eb79efc7bc8bafb5/aHR0cHM6Ly81YThmNmVlYTE1YzVmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDIvMTkxMzk4Yzc0YjRjZTViZWRhZjhiMDRiNjYwYjM4YjktOTAud2VicA_p_p100_p_3D_p_p100_p_3D.webp"
        }
      ],
      date: [
        {
          img:
            "https://ccdn.goodq.top/caches/7d453d9a6d8884b1eb79efc7bc8bafb5/aHR0cHM6Ly81YThmNmVlYTE1YzVmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDIvNWZmZTcxNDY3NDFjNzdlYTQ0YjVlNzFhMTJkNjk3NDAtOTAud2VicA_p_p100_p_3D_p_p100_p_3D.webp"
        },
        {
          img:
            "https://ccdn.goodq.top/caches/7d453d9a6d8884b1eb79efc7bc8bafb5/aHR0cHM6Ly81YThmNmVlYTE1YzVmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDIvZDBhNDc0ZjdlNTY2Y2YwYWQwOThkZDkwNjJhZGI5MGUtOTAud2VicA_p_p100_p_3D_p_p100_p_3D.webp"
        },
        {
          img:
            "https://ccdn.goodq.top/caches/7d453d9a6d8884b1eb79efc7bc8bafb5/aHR0cHM6Ly81YThmNmVlYTE1YzVmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDIvOTliNWY0OWY2NWE4MDQ2ZDE5YjIyODhlNDI0OTU1YzQtOTAud2VicA_p_p100_p_3D_p_p100_p_3D.webp"
        }
      ],
      shuju: [
        {
          img:
            "https://ccdn.goodq.top/caches/7d453d9a6d8884b1eb79efc7bc8bafb5/aHR0cHM6Ly81YThmNmVlYTE1YzVmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDIvNmMwYmM2ZTVmNmRlZWE3NDBkZWUxNjliZWU4MGFhMTEtMjgweDI2MC05MC53ZWJw.webp",
          title: "游戏外设产品01",
          biaoti: "走位神器"
        },
        {
          img:
            "https://ccdn.goodq.top/caches/7d453d9a6d8884b1eb79efc7bc8bafb5/aHR0cHM6Ly81YThmNmVlYTE1YzVmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDIvOGFiNjRjYWM3YTFlNzk4YWFlZGE4ZGYyOTkzYjYyNDktMjgweDI2MC05MC53ZWJw.webp",
          title: "游戏外设产品02",
          biaoti: "走位神器"
        },
        {
          img:
            "https://ccdn.goodq.top/caches/7d453d9a6d8884b1eb79efc7bc8bafb5/aHR0cHM6Ly81YThmNmVlYTE1YzVmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDIvMjYxYjY1OWQ1NzVlYWYzMDUwMDMxZTk1ZTIxZDYxZGItMjgweDI2MC05MC53ZWJw.webp",
          title: "游戏外设产品03",
          biaoti: "走位神器"
        }
      ],
      ooo: [
        {
          img:
            "https://ccdn.goodq.top/caches/7d453d9a6d8884b1eb79efc7bc8bafb5/aHR0cHM6Ly81YThmNmVlYTE1YzVmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDIvMGZlYzcxZTMzMjE1OGU1ODBmYWU5OTgzOWIyODQ1ZDMtNDAweDI1MC05MC53ZWJw.webp",
          title: "致力于让办公管理变得更简单，响应式网站的倡导者",
          duanluo:
            "流线式网页布局设计方案和可视化图文编辑，流线式网页布局设计方案和可视化图文内容编辑模式让网站制作成为..."
        },
        {
          img:
            "https://ccdn.goodq.top/caches/7d453d9a6d8884b1eb79efc7bc8bafb5/aHR0cHM6Ly81YThmNmVlYTE1YzVmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDIvMTM4ODEwM2U3ODg2YmNkNDdhNTRlYWMyYWEzZGZlNzktNDAweDI1MC05MC53ZWJw.webp",
          title: "全面采用云服务器，大平台靠得住",
          duanluo:
            "我们是响应式网站的倡导者，流线式网页布局设计方案和可视化图文内容编辑模式让网站制作成为一件轻松的事，..."
        },
        {
          img:
            "https://ccdn.goodq.top/caches/7d453d9a6d8884b1eb79efc7bc8bafb5/aHR0cHM6Ly81YThmNmVlYTE1YzVmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDIvMmVmZGFlNjA0OWRiMDcwN2RjNGRmNmZiYzVmZDQ1OWYtNDAweDI1MC05MC53ZWJw.webp",
          title: "支持打字传图自由拖拽，不需要专业编写代码",
          duanluo:
            "支持打字传图、自由拖拽，不需要专业编写代码，流线式网页布局设计方案和可视化图文内容编辑模式让网站制作..."
        }
      ]
    };
  }
};
</script>
<style>
.el-carousel__container {
  overflow: hidden;
  height: 690px;
}
.el-carousel__item {
  width: 100%;
  height: 690px;
}
.carousel_image_type {
  width: 100%;
}
.el-carousel--horizontal {
  overflow-x: visible;
  overflow: hidden;
}
.el-carousel__indicators--horizontal {
  -webkit-transform: translateX(0%);
  transform: translateX(-6%);
}
.m-git {
  width: 100%;
  min-height: 560px;
  background-image: url("https://ccdn.goodq.top/caches/7d453d9a6d8884b1eb79efc7bc8bafb5/aHR0cHM6Ly81YThmNmVlYTE1YzVmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDIvMGZlYzcxZTMzMjE1OGU1ODBmYWU5OTgzOWIyODQ1ZDMtOTAud2VicA_p_p100_p_3D_p_p100_p_3D.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
}
.title {
  width: 80%;
  height: 98px;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 30px;
}
.m-content {
  width: 80%;
  height: 458px;
  margin: 0 auto;
  padding-bottom: 40px;
}
.dingwei {
  width: 330px;
  height: 252px;
  background-color: #cc1919;
  position: absolute;
  right: 0;
  bottom: 92px;
}
.dingwei h2 {
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 23px;
  padding-bottom: 22px;
  padding-right: 0;
  padding-left: 50px;
}
.anniu {
  font-family: 微软雅黑;
  font-size: 15px;
  padding: 10px 40px;
  border-width: 1px;
  border-color: rgb(255, 255, 255);
  background-color: transparent;
  color: rgb(255, 255, 255);
  margin-top: 90px;
  margin-left: 90px;
  border-radius: 25px;
}
</style>