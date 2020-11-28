import VueRouter from 'vue-router';
import HeaderComponent from "./components/HeaderComponent";         //各ページのヘッダーを表示するコンポーネント
import TaskListComponent from "./components/TaskListComponent";     //タスク一覧を表示するコンポーネント
import TaskCreateComponent from "./components/TaskCreateComponent"; //タスク登録ページを表示するコンポーネント
import TaskShowComponent from "./components/TaskShowComponent";     //タスクの詳細ページを表示するコンポーネント
import TaskEditComponent from "./components/TaskEditComponent";     //タスクの編集ページを表示するコンポーネント

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

Vue.use(VueRouter);
const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path: '/tasks', //「/tasks」のURLでアクセスしたら、TaskListComponentを表示させるルーティング
            name: 'task.list',
            component: TaskListComponent
        },
        {
            path: 'tasks/create',
            name: 'task.create',
            component: TaskCreateComponent
        },
        {
            path: '/tasks/:taskId', //「:taskId」には任意のIDが入る
            name: 'task.show',
            component: TaskShowComponent,
            props: true
        },
        {
            path: '/tasks/:taskId/edit', //「:taskId」には任意のIDが入る
            name: 'task.edit',
            component: TaskEditComponent,
            props: true
        }
        
    ]
});

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('header-component',HeaderComponent); 

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router
});
