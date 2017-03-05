import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const userStore = new Vuex.Store({
    state: {
        userInfo: {},
        formData: {}
    },
    getters: {
        getUserInfo(state) {
            return state.userInfo;
        },
        getFormData (state) {
            return state.formData;
        }
    },
    mutations: {
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo;
        },
        setFormData(state, formData) {
            state.formData = formData;
        }
    },
    actions: {
        setUserInfo({ commit }, user) {
            commit('setUserInfo', user);
        },
        setFormData({ commit }, data) {
            commit('setFormData', data);
        }
    }
});

export default userStore;
