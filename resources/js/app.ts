/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue, { VNode } from 'vue';
import store from './store'
import { DirectiveBinding } from 'vue/types/options';

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('nav-bar', require('./components/NavBar').default);
Vue.component('custom-button', require('./components/CustomButton').default);
Vue.component('pokemon-list', require('./components/PokemonList').default);
Vue.component('pokemon-profile-card', require('./components/PokemonProfileCard').default);
Vue.component('pokemon-profile-header', require('./components/PokemonProfileHeader').default);
Vue.component('pokemon-profile-shape', require('./components/PokemonProfileShape').default);

Vue.directive('focus', {
    inserted: function (el) {
        const input = el.querySelector('input');
        input ? input.focus() : el.focus();
    }
});

Vue.directive('click-outside', {
    bind: function (el: HTMLElement, binding: DirectiveBinding, vnode: VNode) {
        el.clickOutsideEvent = function (event: Event) {
            if (!(el == event.target || el.contains(event.target as Node))) {
                const value = binding.value;
                const context = vnode.context;

                return typeof value === 'function' && value.call(context, event);
            }
        };
        document.body.addEventListener('click', el.clickOutsideEvent)
    },
    unbind: function (el) {
        document.body.removeEventListener('click', el.clickOutsideEvent)
    },
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    store,
});
