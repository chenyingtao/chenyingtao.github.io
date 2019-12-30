<template>
  <div>
    <div style="width:100%;height:auto;background:#191919">
      <div style="width:80%;height:auto;margin:0 auto;background:black;padding:0 40px;background:#191919">
          <div
            style="height:35px;border-top: 0px solid #3f3f3f; border-right: 0px solid #3f3f3f; border-bottom: 1px solid #3f3f3f; border-left: 0px solid #3f3f3f;;display: block;max-width:100%;padding:20px 0 0px 0;margin: 0 auto;width: 100%;position:relative; background-color:transparent;border-radius: 0;"
          >
            <ul style="text-align:left; width:100%;display: table;">
              <li
                style="display: inline-block;margin-bottom:0px;text-align:center; position:relative;width:100px;"
              >
                <a
                  href="#/n3/gongsi"
                  style="cursor:pointer;line-height:20px;display: block;overflow:hidden;white-space: nowrap;text-overflow: ellipsis;width:100px;border-style: solid;font-family:微软雅黑; font-size:17px; font-weight:bold; background-color:transparent; color:#494949; border-top:0px solid transparent; border-bottom:0px solid transparent; border-left:0px solid transparent; border-right:0px solid transparent;text-decoration: none;"
                >企业动态</a>
              </li>
              <li
                style="display: inline-block;margin-bottom:0px;text-align:center; position:relative;width:100px;"
              >
                <a
                  href="#/n3/hangye"
                  style="cursor:pointer;line-height:20px;display: block;overflow:hidden;white-space: nowrap;text-overflow: ellipsis;width:100px;border-style: solid;font-family:微软雅黑; font-size:17px; font-weight:bold; background-color:transparent; color:#494949; border-top:0px solid transparent; border-bottom:0px solid transparent; border-left:0px solid transparent; border-right:0px solid transparent;text-decoration: none;"
                >行业资讯</a>
              </li>
            </ul>
          </div>
          <div>
            <router-view></router-view>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style>
</style>