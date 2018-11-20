import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

//imports for paths
import Adminpage from './Adminpage.vue'
import Logout from './Logout.vue'



Vue.use(VueRouter);// enable router plugin



// set up routes 
const routes = [
    { path:'/adminpage', component: Adminpage  },
    { path:'/Logout', component: Logout  },
];

// router
const router = new VueRouter({
  routes,
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
