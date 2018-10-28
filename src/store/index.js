import Vuex from 'vuex';
import Vue from 'vue';
import movie from '../data/index';
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        movieChocies:movie
    }
})