/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    uploadPercentage: 0
  },
  mutations: {
    setUploadPercentage(state, percentage) {
      state.uploadPercentage = percentage;
    },
  },
  actions: {
    upload({ commit }, file) {
      const config = {
        onUploadProgress: function(progressEvent) {
          console.log(progressEvent);
          const uploadPercentage = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          commit('setUploadPercentage', uploadPercentage);
        },
      };
      const data = new FormData();
      data.append('file', file);
      axios
        .post('https://www.easy-mock.com/mock/5caf2f29581eb436a504a845/upload', data, config)
        .then(data => {
          console.log(data);
        })
        .catch(err => {
          commit('setUploadPercentage', 10);
          console.log(err);
        });
    },
  },

  getters: {
    uploadPercentage: state => state.uploadPercentage,
  },
});
