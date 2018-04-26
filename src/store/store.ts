import Vue from 'vue';
import Vuex from 'vuex';
import { profile } from './profile/index';
import { RootState } from './types';

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  state: {
    version: '1.0.0', // a simple property
  },
  modules: {
    profile,
  },
  mutations: {

  },
  actions: {

  },
});
