Vue.use(VueRouter)

export default router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'Hello',
        component: Hello
    }]
})
