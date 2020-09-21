import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/home";
import Index from "../pages/index";
import Order from "../pages/order";
import Cart from "../pages/cart";
import OrderConfirm from "../pages/orderConfirm";
import OrderList from "../pages/orderList";
import Detail from "../pages/detail";
import Login from "../pages/login";
import OrderPay from "../pages/orderPay";
import Product from "../pages/product";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      redirect: "/index",
      children: [
        {
          path: "/index",
          name: "index",
          component: Index,
        },
        {
          path: "/product/:id",
          name: "product",
          component: Product,
        },
        {
          path: "/detail/:id",
          name: "detail",
          component: Detail,
        },
      ],
    },
    {
      path: "/order",
      name: "order",
      component: Order,
      children: [
        {
          path: "orderConfirm",
          name: "order-confirm",
          component: OrderConfirm,
        },
        {
          path: "orderList",
          name: "order-list",
          component: OrderList,
        },
        {
          path: "orderPay",
          name: "order-pay",
          component: OrderPay,
        },
      ],
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
  ],
});
