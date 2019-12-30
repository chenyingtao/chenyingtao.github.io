<template>
  <div>
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
              <el-carousel-item v-for="i in arr" :key="i.img" style="width:442px;height:442px;">
                <img :src="i.img" alt style="width:100%;height:100%;" />
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
      <div style="width:50%;height:704px;background:#191919;float:left;">
        <div style="text-align:center;margin-top:200px;">
          <span style="color:#fff">
            <span style="font-size:30px;">
              <span style="font-family: 微软雅黑;">功能多样满足您的所有需求</span>
            </span>
          </span>
        </div>
      </div>
    </div>
    <div style="width:100%;min-height:573px;background-color:black">
      <div class="title">
        <div
          style="font-family:微软雅黑;font-size:30px;font-weight:normal;font-style:normal;color:#ffffff;display:block;vertical-align:bottom;text-align:center"
        >更多游戏外设</div>
        <div
          style="font-family:微软雅黑;font-size:13px;font-weight:normal;font-style:normal;color:#b2b2b2;display:block;padding:10px 0 0 0;vertical-align:bottom;text-align:center"
        >MORE</div>
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
      ]
    };
  }
};
</script>
<style>
.title {
  width: 80%;
  height: 98px;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 30px;
}
</style>