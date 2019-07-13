import Vue from 'vue'
import App from './app.vue'

// import './assest/styles/test.css'
// import './assest/images/logo.png'
// import './assest/styles/stylus.styl'

import './assets/styles/global.styl'


const root=document.createElement('div')
document.body.appendChild(root)

new Vue({
    render:(h)=>h(App)
}).$mount(root)