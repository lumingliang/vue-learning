// require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
const Home = resolve => {
    require.ensure(['./views/index.vue'], () => {
        resolve(require('./views/index.vue'));
    });
};

// const List = resolve => {
//     require.ensure(['./views/list.vue'], () => {
//         resolve(require('./views/list.vue'));
//     });
// };

const routers = [{
    path: '/',
    name: 'home',
    component: Home,
    children: [
        // {
        //     path: '/cnodevue',
        //     name: 'cnodevue',
        //     component: Home
        // }, {
        //     path: '/list',
        //     name: 'list',
        //     component: List
        // }, {
        //     path: '/topic/:id',
        //     name: 'topic',
        //     component(resolve) {
        //         require.ensure(['./views/topic.vue'], () => {
        //             resolve(require('./views/topic.vue'));
        //         });
        //     }
        // }, {
        //     path: '/add',
        //     name: 'add',
        //     component(resolve) {
        //         require.ensure(['./views/new.vue'], () => {
        //             resolve(require('./views/new.vue'));
        //         });
        //     },
        //     meta: {requiresAuth: true}
        // }, {
        //     path: '/message',
        //     name: 'message',
        //     component(resolve) {
        //         require.ensure(['./views/message.vue'], () => {
        //             resolve(require('./views/message.vue'));
        //         });
        //     },
        //     meta: {requiresAuth: true}
        // }, {
        //     path: '/user/:loginname',
        //     name: 'user',
        //     component(resolve) {
        //         require.ensure(['./views/user.vue'], () => {
        //             resolve(require('./views/user.vue'));
        //         });
        //     }
        // }, {
        //     path: '/about',
        //     name: 'about',
        //     component(resolve) {
        //         require.ensure(['./views/about.vue'], () => {
        //             resolve(require('./views/about.vue'));
        //         });
        //     }
        // }, {
        //     path: '/login',
        //     name: 'login',
        //     component(resolve) {
        //         require.ensure(['./views/login.vue'], () => {
        //             resolve(require('./views/login.vue'));
        //         });
        //     }
        // }
        {
            path: '/test',
            name: 'test',
            component(resolve) {
                require.ensure(['./views/test.vue'], () => {
                    resolve(require('./views/test.vue'));
                });
            }
        },
        {
            path: '/list/:page?',
            name: 'list',
            component(resolve) {
                require.ensure(['./views/curd/list.vue'], () => {
                    resolve(require('./views/curd/list.vue'));
                });
            }
        }
    ]
// },
//     {
//     path: '/cnodevue',
//     name: 'cnodevue',
//     component: Home
// }, {
//     path: '/list',
//     name: 'list',
//     component: List
// }, {
//     path: '/topic/:id',
//     name: 'topic',
//     component(resolve) {
//         require.ensure(['./views/topic.vue'], () => {
//             resolve(require('./views/topic.vue'));
//         });
//     }
// }, {
//     path: '/add',
//     name: 'add',
//     component(resolve) {
//         require.ensure(['./views/new.vue'], () => {
//             resolve(require('./views/new.vue'));
//         });
//     },
//     meta: {requiresAuth: true}
// }, {
//     path: '/message',
//     name: 'message',
//     component(resolve) {
//         require.ensure(['./views/message.vue'], () => {
//             resolve(require('./views/message.vue'));
//         });
//     },
//     meta: {requiresAuth: true}
// }, {
//     path: '/user/:loginname',
//     name: 'user',
//     component(resolve) {
//         require.ensure(['./views/user.vue'], () => {
//             resolve(require('./views/user.vue'));
//         });
//     }
// }, {
//     path: '/about',
//     name: 'about',
//     component(resolve) {
//         require.ensure(['./views/about.vue'], () => {
//             resolve(require('./views/about.vue'));
//         });
//     }
// }, {
//     path: '/login',
//     name: 'login',
//     component(resolve) {
//         require.ensure(['./views/login.vue'], () => {
//             resolve(require('./views/login.vue'));
//         });
//     }
// }, {
//     path: '/test',
//     name: 'test',
//     component(resolve) {
//         require.ensure(['./views/test.vue'], () => {
//             resolve(require('./views/test.vue'));
//         });
//     }
}, {
    path: '/go',
    name: 'ff',
    component(resolve) {
        require.ensure(['./views/test.vue'], () => {
            resolve(require('./views/test.vue'));
        });
    }
}, {
    path: '*',
    component: Home
}];

export default routers;
