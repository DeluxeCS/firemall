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
            <div class="children">
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米手机</div>
                    <div class="pro-price">1999</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米手机</div>
                    <div class="pro-price">1999</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:;" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米手机</div>
                    <div class="pro-price">1999</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:;" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米手机</div>
                    <div class="pro-price">1999</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:;" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米手机</div>
                    <div class="pro-price">1999</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:;" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米手机</div>
                    <div class="pro-price">1999</div>
                  </a>
                </li>
              </ul>
            </div>
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
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
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
@import "./../assets/scss/mixin.scss";
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: $colorB;
    .container {
      @include flex();
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
          @include bgImg(16px, 12px, "/imgs/icon-cart-checked.png");
          margin-right: 4px;
        }
      }
    }
  }
  .nav-header {
    .container {
      height: 112px;
      position: relative;
      @include flex();
      .header-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: $colorA;
        a {
          display: inline-block;
          width: 55px;
          height: 55px;
          overflow: hidden;
          &:before {
            content: "";
            @include bgImg(55px, 55px, "/imgs/mi-logo.png");
            transition: all 0.2s;
          }
          &:after {
            content: "";
            @include bgImg(55px, 55px, "/imgs/mi-home.png");
          }
          &:hover:before {
            margin-left: -55px;
            transition: all 0.2s;
          }
        }
      }
      .header-menu {
        display: inline-block;
        .item-menu {
          display: inline-block;
          color: $colorB;
          font-weight: bold;
          font-size: $fontI;
          line-height: 112px;
          margin-right: 20px;
          &:last-child {
            margin-right: 0px;
          }
          span {
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
            .children {
              height: 220px;
              opacity: 1;
            }
          }
          .children {
            position: absolute;
            top: 112px;
            left: 0px;
            width: 100%;
            height: 0;
            opacity: 0;
            overflow: hidden;
            box-shadow: 0px 4px 3px 0px rgba(0, 0, 0, 0.11);
            z-index: 10;
            background-color: #ffffff;
            transition: all .2s;
            .product {
              position: relative;
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              a{
                display:inline-block;
              }
              img {
                width: auto;
                height: 111px;
                margin-top: 26px;
              }
              .pro-img {
                height: 137px;
              }
              .pro-name {
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: $colorB;
              }
              .pro-price {
                color: $colorA;
              }
               &:before{
                  content: '';
                  position: absolute;
                  top: 28px;
                  right: 0;
                  border-right: 1px solid $colorF;
                  height: 100px;
                  width: 1px;
                }
                &:last-child:before{
                  border-right: none;
                }
            }
          }
        }
      }
      .header-search {
        width: 319px;
        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input {
            border: none;
            box-sizing: border-box;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            height: 50px;
            padding-left: 14px;
          }
          a {
            @include bgImg(18px, 18px, "/imgs/icon-search.png");
            margin-left: 14px;
          }
        }
      }
    }
  }
}
</style>