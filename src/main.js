import Vue from 'vue'
import App from './App.vue'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@/assets/css/tailwind.css'
//importo la libreria vuerouter
import VueRouter from 'vue-router';

//importamos nuestros componentes
import About from './components/About';
import Canciones from './components/Canciones';
import Contacto from './components/Contacto';



library.add(faBars, faShoppingCart)

Vue.component('font-awesome-icon', FontAwesomeIcon)
//crear componente
Vue.component('About',About);
Vue.component('Canciones',Canciones);
Vue.component('Contacto',Contacto);



//uso de vue-router
Vue.use(VueRouter);

//defino un arreglo con las rutas
const routes = [
  {path: '/', component:Canciones, name:'canciones'},
  {path: '/about', component:About, name:'about'},
  {path: '/contacto', component:About, name:'contacto'}

]

//creo el objeto router
const router = new VueRouter({
  routes,
  mode:'history' //elimina el simbolo # en las url
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
