<!-- nav-header -->
<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">有品</a>
          <a href="javascript:;">小爱开放平台</a>
          <a href="javascript:;">企业团购</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;">登录</a>
          <a href="javascript:;">注册</a>
          <a href="javascript:;">消息通知</a>
          <a href="javascript:;" class="shop-cart">
            <span class="icon-cart"></span>购物车(0)</a
          >
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>Redmi红米</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>笔记本</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>家电</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>路由</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>智能硬件</span>
            <div class="children"></div>
          </div>
        </div>
      </div>
      <div class="header-search"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-header",
};
</script>
<style lang='scss' >
@import "./../assets/scss/config.scss";
@import "./../assets/scss/base.scss";
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: $colorB;
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .shop-cart {
        width: 110px;
        background-color: $colorA;
        text-align: center;
        color: $colorG;
        .icon-cart {
          display: inline-block;
          height: 12px;
          width: 16px;
          background: url("/imgs/icon-cart-checked.png") no-repeat center;
          background-size: contain;
          margin-right: 4px;
        }
      }
    }
  }
  .nav-header {
    .container {
      height: 112px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .header-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: $colorA;
        a {
          display: inline-block;
          height: 55px;
          width: 110px;
          &:before {
            content: "";
            display: inline-block;
            height: 55px;
            width: 55px;
            background: url("/imgs/mi-logo.png") no-repeat center;
            background-size: contain;
            transition: margin 0.2s;
          }
          &:after {
            content: "";
            display: inline-block;
            height: 55px;
            width: 55px;
            background: url("/imgs/mi-home.png") no-repeat center;
            background-size: contain;
          }
          &:hover:before {
            margin-left: -55px;
            transition: margin 0.2s;
          }
        }
      }
      .header-menu {
        .item-menu {
          display: inline-block;
        }
      }
    }
  }
}
</style>