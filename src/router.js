import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Login",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Login.vue"),
        meta:{index:0},//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    },
    {
      path: "/index",
      name: "index",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/index.vue"),
        meta:{index:0},//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    },
    {
      path: "/Customer",
      name: "Customer",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Customer.vue"),
        meta:{index:1},//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    },
    {
      path: "/SelectProduct",
      name: "SelectProduct",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/SelectProduct.vue"),
        meta:{index:2},//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    },
    {
      path: "/Lading",
      name: "Lading",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Lading.vue"),
        meta:{index:3},//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    }
    ,
    {
      path: "/SelectPersonnel",
      name: "SelectPersonnel",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/SelectPersonnel.vue"),
        meta:{index:4},//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    }
  ],
  
});


