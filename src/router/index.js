import Vue from 'vue'
import VueRouter from 'vue-router'
import Travel from '../components/Travel';
import Quotation from '../components/Quotation'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [{
            path: '/',
            name: 'Travel',
            component: Travel
        }, {
            path: '/quotation',
            name: 'Quotation',
            component: Quotation
        },

    ]
})

export default router;