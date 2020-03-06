import singleSpaVue from "single-spa-vue";
import Vue from 'vue'
import App from './App'
import router from './router'

const vueOptions = {
    el: "#vue-project1",
    router,
    render: h => h(App)
};

if (!window.singleSpaNavigate) { // 如果不是single-spa模式
delete vueOptions.el;
new Vue(vueOptions).$mount('#app');
}

// singleSpaVue包装一个vue微前端服务对象
const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: vueOptions
});

// 导出生命周期对象
export const bootstrap = vueLifecycles.bootstrap; // 启动时
export const mount = vueLifecycles.mount; // 挂载时
export const unmount = vueLifecycles.unmount; // 卸载时

export default vueLifecycles;